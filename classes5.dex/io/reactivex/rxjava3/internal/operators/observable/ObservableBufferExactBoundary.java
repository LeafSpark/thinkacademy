package io.reactivex.rxjava3.internal.operators.observable;

import io.reactivex.rxjava3.core.ObservableSource;
import io.reactivex.rxjava3.core.Observer;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.exceptions.Exceptions;
import io.reactivex.rxjava3.functions.Supplier;
import io.reactivex.rxjava3.internal.disposables.DisposableHelper;
import io.reactivex.rxjava3.internal.disposables.EmptyDisposable;
import io.reactivex.rxjava3.internal.observers.QueueDrainObserver;
import io.reactivex.rxjava3.internal.queue.MpscLinkedQueue;
import io.reactivex.rxjava3.observers.DisposableObserver;
import io.reactivex.rxjava3.observers.SerializedObserver;
import java.util.Collection;
import java.util.Objects;

public final class ObservableBufferExactBoundary<T, U extends Collection<? super T>, B> extends AbstractObservableWithUpstream<T, U> {
    final ObservableSource<B> boundary;
    final Supplier<U> bufferSupplier;

    public ObservableBufferExactBoundary(ObservableSource<T> observableSource, ObservableSource<B> observableSource2, Supplier<U> supplier) {
        super(observableSource);
        this.boundary = observableSource2;
        this.bufferSupplier = supplier;
    }

    /* access modifiers changed from: protected */
    public void subscribeActual(Observer<? super U> observer) {
        this.source.subscribe(new BufferExactBoundaryObserver(new SerializedObserver(observer), this.bufferSupplier, this.boundary));
    }

    static final class BufferExactBoundaryObserver<T, U extends Collection<? super T>, B> extends QueueDrainObserver<T, U, U> implements Observer<T>, Disposable {
        final ObservableSource<B> boundary;
        U buffer;
        final Supplier<U> bufferSupplier;
        Disposable other;
        Disposable upstream;

        BufferExactBoundaryObserver(Observer<? super U> observer, Supplier<U> supplier, ObservableSource<B> observableSource) {
            super(observer, new MpscLinkedQueue());
            this.bufferSupplier = supplier;
            this.boundary = observableSource;
        }

        public void onSubscribe(Disposable disposable) {
            if (DisposableHelper.validate(this.upstream, disposable)) {
                this.upstream = disposable;
                try {
                    U u = this.bufferSupplier.get();
                    Objects.requireNonNull(u, "The buffer supplied is null");
                    this.buffer = (Collection) u;
                    BufferBoundaryObserver bufferBoundaryObserver = new BufferBoundaryObserver(this);
                    this.other = bufferBoundaryObserver;
                    this.downstream.onSubscribe(this);
                    if (!this.cancelled) {
                        this.boundary.subscribe(bufferBoundaryObserver);
                    }
                } catch (Throwable th) {
                    Exceptions.throwIfFatal(th);
                    this.cancelled = true;
                    disposable.dispose();
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
            dispose();
            this.downstream.onError(th);
        }

        /* JADX WARNING: Code restructure failed: missing block: B:10:0x0019, code lost:
            io.reactivex.rxjava3.internal.util.QueueDrainHelper.drainLoop(r3.queue, r3.downstream, false, r3, r3);
         */
        /* JADX WARNING: Code restructure failed: missing block: B:18:?, code lost:
            return;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:19:?, code lost:
            return;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:8:0x000b, code lost:
            r3.queue.offer(r0);
            r3.done = true;
         */
        /* JADX WARNING: Code restructure failed: missing block: B:9:0x0017, code lost:
            if (enter() == false) goto L_?;
         */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void onComplete() {
            /*
                r3 = this;
                monitor-enter(r3)
                U r0 = r3.buffer     // Catch:{ all -> 0x0022 }
                if (r0 != 0) goto L_0x0007
                monitor-exit(r3)     // Catch:{ all -> 0x0022 }
                return
            L_0x0007:
                r1 = 0
                r3.buffer = r1     // Catch:{ all -> 0x0022 }
                monitor-exit(r3)     // Catch:{ all -> 0x0022 }
                io.reactivex.rxjava3.internal.fuseable.SimplePlainQueue r1 = r3.queue
                r1.offer(r0)
                r0 = 1
                r3.done = r0
                boolean r0 = r3.enter()
                if (r0 == 0) goto L_0x0021
                io.reactivex.rxjava3.internal.fuseable.SimplePlainQueue r0 = r3.queue
                io.reactivex.rxjava3.core.Observer r1 = r3.downstream
                r2 = 0
                io.reactivex.rxjava3.internal.util.QueueDrainHelper.drainLoop(r0, r1, r2, r3, r3)
            L_0x0021:
                return
            L_0x0022:
                r0 = move-exception
                monitor-exit(r3)     // Catch:{ all -> 0x0022 }
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: io.reactivex.rxjava3.internal.operators.observable.ObservableBufferExactBoundary.BufferExactBoundaryObserver.onComplete():void");
        }

        public void dispose() {
            if (!this.cancelled) {
                this.cancelled = true;
                this.other.dispose();
                this.upstream.dispose();
                if (enter()) {
                    this.queue.clear();
                }
            }
        }

        public boolean isDisposed() {
            return this.cancelled;
        }

        /* access modifiers changed from: package-private */
        public void next() {
            try {
                U u = this.bufferSupplier.get();
                Objects.requireNonNull(u, "The buffer supplied is null");
                U u2 = (Collection) u;
                synchronized (this) {
                    U u3 = this.buffer;
                    if (u3 != null) {
                        this.buffer = u2;
                        fastPathEmit(u3, false, this);
                    }
                }
            } catch (Throwable th) {
                Exceptions.throwIfFatal(th);
                dispose();
                this.downstream.onError(th);
            }
        }

        public void accept(Observer<? super U> observer, U u) {
            this.downstream.onNext(u);
        }
    }

    static final class BufferBoundaryObserver<T, U extends Collection<? super T>, B> extends DisposableObserver<B> {
        final BufferExactBoundaryObserver<T, U, B> parent;

        BufferBoundaryObserver(BufferExactBoundaryObserver<T, U, B> bufferExactBoundaryObserver) {
            this.parent = bufferExactBoundaryObserver;
        }

        public void onNext(B b) {
            this.parent.next();
        }

        public void onError(Throwable th) {
            this.parent.onError(th);
        }

        public void onComplete() {
            this.parent.onComplete();
        }
    }
}
