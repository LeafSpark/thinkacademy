package io.reactivex.rxjava3.internal.operators.observable;

import io.reactivex.rxjava3.core.ObservableSource;
import io.reactivex.rxjava3.core.Observer;
import io.reactivex.rxjava3.core.Scheduler;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.exceptions.Exceptions;
import io.reactivex.rxjava3.functions.Supplier;
import io.reactivex.rxjava3.internal.disposables.DisposableHelper;
import io.reactivex.rxjava3.internal.disposables.EmptyDisposable;
import io.reactivex.rxjava3.internal.observers.QueueDrainObserver;
import io.reactivex.rxjava3.internal.queue.MpscLinkedQueue;
import io.reactivex.rxjava3.internal.util.QueueDrainHelper;
import io.reactivex.rxjava3.observers.SerializedObserver;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

public final class ObservableBufferTimed<T, U extends Collection<? super T>> extends AbstractObservableWithUpstream<T, U> {
    final Supplier<U> bufferSupplier;
    final int maxSize;
    final boolean restartTimerOnMaxSize;
    final Scheduler scheduler;
    final long timeskip;
    final long timespan;
    final TimeUnit unit;

    public ObservableBufferTimed(ObservableSource<T> observableSource, long j, long j2, TimeUnit timeUnit, Scheduler scheduler2, Supplier<U> supplier, int i, boolean z) {
        super(observableSource);
        this.timespan = j;
        this.timeskip = j2;
        this.unit = timeUnit;
        this.scheduler = scheduler2;
        this.bufferSupplier = supplier;
        this.maxSize = i;
        this.restartTimerOnMaxSize = z;
    }

    /* access modifiers changed from: protected */
    public void subscribeActual(Observer<? super U> observer) {
        if (this.timespan == this.timeskip && this.maxSize == Integer.MAX_VALUE) {
            this.source.subscribe(new BufferExactUnboundedObserver(new SerializedObserver(observer), this.bufferSupplier, this.timespan, this.unit, this.scheduler));
            return;
        }
        Scheduler.Worker createWorker = this.scheduler.createWorker();
        if (this.timespan == this.timeskip) {
            this.source.subscribe(new BufferExactBoundedObserver(new SerializedObserver(observer), this.bufferSupplier, this.timespan, this.unit, this.maxSize, this.restartTimerOnMaxSize, createWorker));
        } else {
            this.source.subscribe(new BufferSkipBoundedObserver(new SerializedObserver(observer), this.bufferSupplier, this.timespan, this.timeskip, this.unit, createWorker));
        }
    }

    static final class BufferExactUnboundedObserver<T, U extends Collection<? super T>> extends QueueDrainObserver<T, U, U> implements Runnable, Disposable {
        U buffer;
        final Supplier<U> bufferSupplier;
        final Scheduler scheduler;
        final AtomicReference<Disposable> timer = new AtomicReference<>();
        final long timespan;
        final TimeUnit unit;
        Disposable upstream;

        BufferExactUnboundedObserver(Observer<? super U> observer, Supplier<U> supplier, long j, TimeUnit timeUnit, Scheduler scheduler2) {
            super(observer, new MpscLinkedQueue());
            this.bufferSupplier = supplier;
            this.timespan = j;
            this.unit = timeUnit;
            this.scheduler = scheduler2;
        }

        public void onSubscribe(Disposable disposable) {
            if (DisposableHelper.validate(this.upstream, disposable)) {
                this.upstream = disposable;
                try {
                    U u = this.bufferSupplier.get();
                    Objects.requireNonNull(u, "The buffer supplied is null");
                    this.buffer = (Collection) u;
                    this.downstream.onSubscribe(this);
                    if (!DisposableHelper.isDisposed(this.timer.get())) {
                        Scheduler scheduler2 = this.scheduler;
                        long j = this.timespan;
                        DisposableHelper.set(this.timer, scheduler2.schedulePeriodicallyDirect(this, j, j, this.unit));
                    }
                } catch (Throwable th) {
                    Exceptions.throwIfFatal(th);
                    dispose();
                    EmptyDisposable.error(th, (Observer<?>) this.downstream);
                }
            }
        }

        public void onNext(T t) {
            synchronized (this) {
                U u = this.buffer;
                if (u != null) {
                    u.add(t);
                }
            }
        }

        public void onError(Throwable th) {
            synchronized (this) {
                this.buffer = null;
            }
            this.downstream.onError(th);
            DisposableHelper.dispose(this.timer);
        }

        public void onComplete() {
            U u;
            synchronized (this) {
                u = this.buffer;
                this.buffer = null;
            }
            if (u != null) {
                this.queue.offer(u);
                this.done = true;
                if (enter()) {
                    QueueDrainHelper.drainLoop(this.queue, this.downstream, false, (Disposable) null, this);
                }
            }
            DisposableHelper.dispose(this.timer);
        }

        public void dispose() {
            DisposableHelper.dispose(this.timer);
            this.upstream.dispose();
        }

        public boolean isDisposed() {
            return this.timer.get() == DisposableHelper.DISPOSED;
        }

        public void run() {
            U u;
            try {
                U u2 = this.bufferSupplier.get();
                Objects.requireNonNull(u2, "The bufferSupplier returned a null buffer");
                U u3 = (Collection) u2;
                synchronized (this) {
                    u = this.buffer;
                    if (u != null) {
                        this.buffer = u3;
                    }
                }
                if (u == null) {
                    DisposableHelper.dispose(this.timer);
                } else {
                    fastPathEmit(u, false, this);
                }
            } catch (Throwable th) {
                Exceptions.throwIfFatal(th);
                this.downstream.onError(th);
                dispose();
            }
        }

        public void accept(Observer<? super U> observer, U u) {
            this.downstream.onNext(u);
        }
    }

    static final class BufferSkipBoundedObserver<T, U extends Collection<? super T>> extends QueueDrainObserver<T, U, U> implements Runnable, Disposable {
        final Supplier<U> bufferSupplier;
        final List<U> buffers = new LinkedList();
        final long timeskip;
        final long timespan;
        final TimeUnit unit;
        Disposable upstream;
        final Scheduler.Worker w;

        BufferSkipBoundedObserver(Observer<? super U> observer, Supplier<U> supplier, long j, long j2, TimeUnit timeUnit, Scheduler.Worker worker) {
            super(observer, new MpscLinkedQueue());
            this.bufferSupplier = supplier;
            this.timespan = j;
            this.timeskip = j2;
            this.unit = timeUnit;
            this.w = worker;
        }

        public void onSubscribe(Disposable disposable) {
            if (DisposableHelper.validate(this.upstream, disposable)) {
                this.upstream = disposable;
                try {
                    U u = this.bufferSupplier.get();
                    Objects.requireNonNull(u, "The buffer supplied is null");
                    Collection collection = (Collection) u;
                    this.buffers.add(collection);
                    this.downstream.onSubscribe(this);
                    Scheduler.Worker worker = this.w;
                    long j = this.timeskip;
                    worker.schedulePeriodically(this, j, j, this.unit);
                    this.w.schedule(new RemoveFromBufferEmit(collection), this.timespan, this.unit);
                } catch (Throwable th) {
                    Exceptions.throwIfFatal(th);
                    disposable.dispose();
                    EmptyDisposable.error(th, (Observer<?>) this.downstream);
                    this.w.dispose();
                }
            }
        }

        public void onNext(T t) {
            synchronized (this) {
                for (U add : this.buffers) {
                    add.add(t);
                }
            }
        }

        public void onError(Throwable th) {
            this.done = true;
            clear();
            this.downstream.onError(th);
            this.w.dispose();
        }

        public void onComplete() {
            ArrayList<Collection> arrayList;
            synchronized (this) {
                arrayList = new ArrayList<>(this.buffers);
                this.buffers.clear();
            }
            for (Collection offer : arrayList) {
                this.queue.offer(offer);
            }
            this.done = true;
            if (enter()) {
                QueueDrainHelper.drainLoop(this.queue, this.downstream, false, this.w, this);
            }
        }

        public void dispose() {
            if (!this.cancelled) {
                this.cancelled = true;
                clear();
                this.upstream.dispose();
                this.w.dispose();
            }
        }

        public boolean isDisposed() {
            return this.cancelled;
        }

        /* access modifiers changed from: package-private */
        public void clear() {
            synchronized (this) {
                this.buffers.clear();
            }
        }

        public void run() {
            if (!this.cancelled) {
                try {
                    U u = this.bufferSupplier.get();
                    Objects.requireNonNull(u, "The bufferSupplier returned a null buffer");
                    Collection collection = (Collection) u;
                    synchronized (this) {
                        if (!this.cancelled) {
                            this.buffers.add(collection);
                            this.w.schedule(new RemoveFromBuffer(collection), this.timespan, this.unit);
                        }
                    }
                } catch (Throwable th) {
                    Exceptions.throwIfFatal(th);
                    this.downstream.onError(th);
                    dispose();
                }
            }
        }

        public void accept(Observer<? super U> observer, U u) {
            observer.onNext(u);
        }

        final class RemoveFromBuffer implements Runnable {
            private final U b;

            RemoveFromBuffer(U u) {
                this.b = u;
            }

            public void run() {
                synchronized (BufferSkipBoundedObserver.this) {
                    BufferSkipBoundedObserver.this.buffers.remove(this.b);
                }
                BufferSkipBoundedObserver bufferSkipBoundedObserver = BufferSkipBoundedObserver.this;
                bufferSkipBoundedObserver.fastPathOrderedEmit(this.b, false, bufferSkipBoundedObserver.w);
            }
        }

        final class RemoveFromBufferEmit implements Runnable {
            private final U buffer;

            RemoveFromBufferEmit(U u) {
                this.buffer = u;
            }

            public void run() {
                synchronized (BufferSkipBoundedObserver.this) {
                    BufferSkipBoundedObserver.this.buffers.remove(this.buffer);
                }
                BufferSkipBoundedObserver bufferSkipBoundedObserver = BufferSkipBoundedObserver.this;
                bufferSkipBoundedObserver.fastPathOrderedEmit(this.buffer, false, bufferSkipBoundedObserver.w);
            }
        }
    }

    static final class BufferExactBoundedObserver<T, U extends Collection<? super T>> extends QueueDrainObserver<T, U, U> implements Runnable, Disposable {
        U buffer;
        final Supplier<U> bufferSupplier;
        long consumerIndex;
        final int maxSize;
        long producerIndex;
        final boolean restartTimerOnMaxSize;
        Disposable timer;
        final long timespan;
        final TimeUnit unit;
        Disposable upstream;
        final Scheduler.Worker w;

        BufferExactBoundedObserver(Observer<? super U> observer, Supplier<U> supplier, long j, TimeUnit timeUnit, int i, boolean z, Scheduler.Worker worker) {
            super(observer, new MpscLinkedQueue());
            this.bufferSupplier = supplier;
            this.timespan = j;
            this.unit = timeUnit;
            this.maxSize = i;
            this.restartTimerOnMaxSize = z;
            this.w = worker;
        }

        public void onSubscribe(Disposable disposable) {
            if (DisposableHelper.validate(this.upstream, disposable)) {
                this.upstream = disposable;
                try {
                    U u = this.bufferSupplier.get();
                    Objects.requireNonNull(u, "The buffer supplied is null");
                    this.buffer = (Collection) u;
                    this.downstream.onSubscribe(this);
                    Scheduler.Worker worker = this.w;
                    long j = this.timespan;
                    this.timer = worker.schedulePeriodically(this, j, j, this.unit);
                } catch (Throwable th) {
                    Exceptions.throwIfFatal(th);
                    disposable.dispose();
                    EmptyDisposable.error(th, (Observer<?>) this.downstream);
                    this.w.dispose();
                }
            }
        }

        /* JADX WARNING: Code restructure failed: missing block: B:13:0x0021, code lost:
            if (r7.restartTimerOnMaxSize == false) goto L_0x0028;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:14:0x0023, code lost:
            r7.timer.dispose();
         */
        /* JADX WARNING: Code restructure failed: missing block: B:15:0x0028, code lost:
            fastPathOrderedEmit(r0, false, r7);
         */
        /* JADX WARNING: Code restructure failed: missing block: B:17:?, code lost:
            r8 = r7.bufferSupplier.get();
            java.util.Objects.requireNonNull(r8, "The buffer supplied is null");
            r8 = (java.util.Collection) r8;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:18:0x0039, code lost:
            monitor-enter(r7);
         */
        /* JADX WARNING: Code restructure failed: missing block: B:20:?, code lost:
            r7.buffer = r8;
            r7.consumerIndex++;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:21:0x0041, code lost:
            monitor-exit(r7);
         */
        /* JADX WARNING: Code restructure failed: missing block: B:23:0x0044, code lost:
            if (r7.restartTimerOnMaxSize == false) goto L_?;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:24:0x0046, code lost:
            r0 = r7.w;
            r4 = r7.timespan;
            r7.timer = r0.schedulePeriodically(r7, r4, r4, r7.unit);
         */
        /* JADX WARNING: Code restructure failed: missing block: B:29:0x0058, code lost:
            r8 = move-exception;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:30:0x0059, code lost:
            io.reactivex.rxjava3.exceptions.Exceptions.throwIfFatal(r8);
            r7.downstream.onError(r8);
            dispose();
         */
        /* JADX WARNING: Code restructure failed: missing block: B:31:0x0064, code lost:
            return;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:42:?, code lost:
            return;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:43:?, code lost:
            return;
         */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void onNext(T r8) {
            /*
                r7 = this;
                monitor-enter(r7)
                U r0 = r7.buffer     // Catch:{ all -> 0x0065 }
                if (r0 != 0) goto L_0x0007
                monitor-exit(r7)     // Catch:{ all -> 0x0065 }
                return
            L_0x0007:
                r0.add(r8)     // Catch:{ all -> 0x0065 }
                int r8 = r0.size()     // Catch:{ all -> 0x0065 }
                int r1 = r7.maxSize     // Catch:{ all -> 0x0065 }
                if (r8 >= r1) goto L_0x0014
                monitor-exit(r7)     // Catch:{ all -> 0x0065 }
                return
            L_0x0014:
                r8 = 0
                r7.buffer = r8     // Catch:{ all -> 0x0065 }
                long r1 = r7.producerIndex     // Catch:{ all -> 0x0065 }
                r3 = 1
                long r1 = r1 + r3
                r7.producerIndex = r1     // Catch:{ all -> 0x0065 }
                monitor-exit(r7)     // Catch:{ all -> 0x0065 }
                boolean r8 = r7.restartTimerOnMaxSize
                if (r8 == 0) goto L_0x0028
                io.reactivex.rxjava3.disposables.Disposable r8 = r7.timer
                r8.dispose()
            L_0x0028:
                r8 = 0
                r7.fastPathOrderedEmit(r0, r8, r7)
                io.reactivex.rxjava3.functions.Supplier<U> r8 = r7.bufferSupplier     // Catch:{ all -> 0x0058 }
                java.lang.Object r8 = r8.get()     // Catch:{ all -> 0x0058 }
                java.lang.String r0 = "The buffer supplied is null"
                java.util.Objects.requireNonNull(r8, r0)     // Catch:{ all -> 0x0058 }
                java.util.Collection r8 = (java.util.Collection) r8     // Catch:{ all -> 0x0058 }
                monitor-enter(r7)
                r7.buffer = r8     // Catch:{ all -> 0x0055 }
                long r0 = r7.consumerIndex     // Catch:{ all -> 0x0055 }
                long r0 = r0 + r3
                r7.consumerIndex = r0     // Catch:{ all -> 0x0055 }
                monitor-exit(r7)     // Catch:{ all -> 0x0055 }
                boolean r8 = r7.restartTimerOnMaxSize
                if (r8 == 0) goto L_0x0054
                io.reactivex.rxjava3.core.Scheduler$Worker r0 = r7.w
                long r4 = r7.timespan
                java.util.concurrent.TimeUnit r6 = r7.unit
                r1 = r7
                r2 = r4
                io.reactivex.rxjava3.disposables.Disposable r8 = r0.schedulePeriodically(r1, r2, r4, r6)
                r7.timer = r8
            L_0x0054:
                return
            L_0x0055:
                r8 = move-exception
                monitor-exit(r7)     // Catch:{ all -> 0x0055 }
                throw r8
            L_0x0058:
                r8 = move-exception
                io.reactivex.rxjava3.exceptions.Exceptions.throwIfFatal(r8)
                io.reactivex.rxjava3.core.Observer r0 = r7.downstream
                r0.onError(r8)
                r7.dispose()
                return
            L_0x0065:
                r8 = move-exception
                monitor-exit(r7)     // Catch:{ all -> 0x0065 }
                throw r8
            */
            throw new UnsupportedOperationException("Method not decompiled: io.reactivex.rxjava3.internal.operators.observable.ObservableBufferTimed.BufferExactBoundedObserver.onNext(java.lang.Object):void");
        }

        public void onError(Throwable th) {
            synchronized (this) {
                this.buffer = null;
            }
            this.downstream.onError(th);
            this.w.dispose();
        }

        public void onComplete() {
            U u;
            this.w.dispose();
            synchronized (this) {
                u = this.buffer;
                this.buffer = null;
            }
            if (u != null) {
                this.queue.offer(u);
                this.done = true;
                if (enter()) {
                    QueueDrainHelper.drainLoop(this.queue, this.downstream, false, this, this);
                }
            }
        }

        public void accept(Observer<? super U> observer, U u) {
            observer.onNext(u);
        }

        public void dispose() {
            if (!this.cancelled) {
                this.cancelled = true;
                this.upstream.dispose();
                this.w.dispose();
                synchronized (this) {
                    this.buffer = null;
                }
            }
        }

        public boolean isDisposed() {
            return this.cancelled;
        }

        public void run() {
            try {
                U u = this.bufferSupplier.get();
                Objects.requireNonNull(u, "The bufferSupplier returned a null buffer");
                U u2 = (Collection) u;
                synchronized (this) {
                    U u3 = this.buffer;
                    if (u3 != null) {
                        if (this.producerIndex == this.consumerIndex) {
                            this.buffer = u2;
                            fastPathOrderedEmit(u3, false, this);
                        }
                    }
                }
            } catch (Throwable th) {
                Exceptions.throwIfFatal(th);
                dispose();
                this.downstream.onError(th);
            }
        }
    }
}
