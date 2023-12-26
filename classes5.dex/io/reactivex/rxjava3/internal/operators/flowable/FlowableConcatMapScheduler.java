package io.reactivex.rxjava3.internal.operators.flowable;

import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.FlowableSubscriber;
import io.reactivex.rxjava3.core.Scheduler;
import io.reactivex.rxjava3.exceptions.Exceptions;
import io.reactivex.rxjava3.functions.Function;
import io.reactivex.rxjava3.functions.Supplier;
import io.reactivex.rxjava3.internal.fuseable.QueueSubscription;
import io.reactivex.rxjava3.internal.fuseable.SimpleQueue;
import io.reactivex.rxjava3.internal.operators.flowable.FlowableConcatMap;
import io.reactivex.rxjava3.internal.queue.SpscArrayQueue;
import io.reactivex.rxjava3.internal.subscriptions.SubscriptionHelper;
import io.reactivex.rxjava3.internal.util.AtomicThrowable;
import io.reactivex.rxjava3.internal.util.ErrorMode;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
import org.reactivestreams.Publisher;
import org.reactivestreams.Subscriber;
import org.reactivestreams.Subscription;

public final class FlowableConcatMapScheduler<T, R> extends AbstractFlowableWithUpstream<T, R> {
    final ErrorMode errorMode;
    final Function<? super T, ? extends Publisher<? extends R>> mapper;
    final int prefetch;
    final Scheduler scheduler;

    public FlowableConcatMapScheduler(Flowable<T> flowable, Function<? super T, ? extends Publisher<? extends R>> function, int i, ErrorMode errorMode2, Scheduler scheduler2) {
        super(flowable);
        this.mapper = function;
        this.prefetch = i;
        this.errorMode = errorMode2;
        this.scheduler = scheduler2;
    }

    /* renamed from: io.reactivex.rxjava3.internal.operators.flowable.FlowableConcatMapScheduler$1  reason: invalid class name */
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$io$reactivex$rxjava3$internal$util$ErrorMode;

        /* JADX WARNING: Can't wrap try/catch for region: R(6:0|1|2|3|4|6) */
        /* JADX WARNING: Code restructure failed: missing block: B:7:?, code lost:
            return;
         */
        /* JADX WARNING: Failed to process nested try/catch */
        /* JADX WARNING: Missing exception handler attribute for start block: B:3:0x0012 */
        static {
            /*
                io.reactivex.rxjava3.internal.util.ErrorMode[] r0 = io.reactivex.rxjava3.internal.util.ErrorMode.values()
                int r0 = r0.length
                int[] r0 = new int[r0]
                $SwitchMap$io$reactivex$rxjava3$internal$util$ErrorMode = r0
                io.reactivex.rxjava3.internal.util.ErrorMode r1 = io.reactivex.rxjava3.internal.util.ErrorMode.BOUNDARY     // Catch:{ NoSuchFieldError -> 0x0012 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0012 }
                r2 = 1
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0012 }
            L_0x0012:
                int[] r0 = $SwitchMap$io$reactivex$rxjava3$internal$util$ErrorMode     // Catch:{ NoSuchFieldError -> 0x001d }
                io.reactivex.rxjava3.internal.util.ErrorMode r1 = io.reactivex.rxjava3.internal.util.ErrorMode.END     // Catch:{ NoSuchFieldError -> 0x001d }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x001d }
                r2 = 2
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x001d }
            L_0x001d:
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: io.reactivex.rxjava3.internal.operators.flowable.FlowableConcatMapScheduler.AnonymousClass1.<clinit>():void");
        }
    }

    /* access modifiers changed from: protected */
    public void subscribeActual(Subscriber<? super R> subscriber) {
        int i = AnonymousClass1.$SwitchMap$io$reactivex$rxjava3$internal$util$ErrorMode[this.errorMode.ordinal()];
        if (i == 1) {
            this.source.subscribe(new ConcatMapDelayed(subscriber, this.mapper, this.prefetch, false, this.scheduler.createWorker()));
        } else if (i != 2) {
            this.source.subscribe(new ConcatMapImmediate(subscriber, this.mapper, this.prefetch, this.scheduler.createWorker()));
        } else {
            this.source.subscribe(new ConcatMapDelayed(subscriber, this.mapper, this.prefetch, true, this.scheduler.createWorker()));
        }
    }

    static abstract class BaseConcatMapSubscriber<T, R> extends AtomicInteger implements FlowableSubscriber<T>, FlowableConcatMap.ConcatMapSupport<R>, Subscription, Runnable {
        private static final long serialVersionUID = -3511336836796789179L;
        volatile boolean active;
        volatile boolean cancelled;
        int consumed;
        volatile boolean done;
        final AtomicThrowable errors = new AtomicThrowable();
        final FlowableConcatMap.ConcatMapInner<R> inner = new FlowableConcatMap.ConcatMapInner<>(this);
        final int limit;
        final Function<? super T, ? extends Publisher<? extends R>> mapper;
        final int prefetch;
        SimpleQueue<T> queue;
        int sourceMode;
        Subscription upstream;
        final Scheduler.Worker worker;

        /* access modifiers changed from: package-private */
        public abstract void schedule();

        /* access modifiers changed from: package-private */
        public abstract void subscribeActual();

        BaseConcatMapSubscriber(Function<? super T, ? extends Publisher<? extends R>> function, int i, Scheduler.Worker worker2) {
            this.mapper = function;
            this.prefetch = i;
            this.limit = i - (i >> 2);
            this.worker = worker2;
        }

        public final void onSubscribe(Subscription subscription) {
            if (SubscriptionHelper.validate(this.upstream, subscription)) {
                this.upstream = subscription;
                if (subscription instanceof QueueSubscription) {
                    QueueSubscription queueSubscription = (QueueSubscription) subscription;
                    int requestFusion = queueSubscription.requestFusion(7);
                    if (requestFusion == 1) {
                        this.sourceMode = requestFusion;
                        this.queue = queueSubscription;
                        this.done = true;
                        subscribeActual();
                        schedule();
                        return;
                    } else if (requestFusion == 2) {
                        this.sourceMode = requestFusion;
                        this.queue = queueSubscription;
                        subscribeActual();
                        subscription.request((long) this.prefetch);
                        return;
                    }
                }
                this.queue = new SpscArrayQueue(this.prefetch);
                subscribeActual();
                subscription.request((long) this.prefetch);
            }
        }

        public final void onNext(T t) {
            if (this.sourceMode == 2 || this.queue.offer(t)) {
                schedule();
                return;
            }
            this.upstream.cancel();
            onError(new IllegalStateException("Queue full?!"));
        }

        public final void onComplete() {
            this.done = true;
            schedule();
        }

        public final void innerComplete() {
            this.active = false;
            schedule();
        }
    }

    static final class ConcatMapImmediate<T, R> extends BaseConcatMapSubscriber<T, R> {
        private static final long serialVersionUID = 7898995095634264146L;
        final Subscriber<? super R> downstream;
        final AtomicInteger wip = new AtomicInteger();

        ConcatMapImmediate(Subscriber<? super R> subscriber, Function<? super T, ? extends Publisher<? extends R>> function, int i, Scheduler.Worker worker) {
            super(function, i, worker);
            this.downstream = subscriber;
        }

        /* access modifiers changed from: package-private */
        public void subscribeActual() {
            this.downstream.onSubscribe(this);
        }

        public void onError(Throwable th) {
            if (this.errors.tryAddThrowableOrReport(th)) {
                this.inner.cancel();
                if (getAndIncrement() == 0) {
                    this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                    this.worker.dispose();
                }
            }
        }

        /* access modifiers changed from: package-private */
        public boolean tryEnter() {
            return get() == 0 && compareAndSet(0, 1);
        }

        public void innerNext(R r) {
            if (tryEnter()) {
                this.downstream.onNext(r);
                if (!compareAndSet(1, 0)) {
                    this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                    this.worker.dispose();
                }
            }
        }

        public void innerError(Throwable th) {
            if (this.errors.tryAddThrowableOrReport(th)) {
                this.upstream.cancel();
                if (getAndIncrement() == 0) {
                    this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                    this.worker.dispose();
                }
            }
        }

        public void request(long j) {
            this.inner.request(j);
        }

        public void cancel() {
            if (!this.cancelled) {
                this.cancelled = true;
                this.inner.cancel();
                this.upstream.cancel();
                this.worker.dispose();
                this.errors.tryTerminateAndReport();
            }
        }

        /* access modifiers changed from: package-private */
        public void schedule() {
            if (this.wip.getAndIncrement() == 0) {
                this.worker.schedule(this);
            }
        }

        public void run() {
            while (!this.cancelled) {
                if (!this.active) {
                    boolean z = this.done;
                    try {
                        Object poll = this.queue.poll();
                        boolean z2 = poll == null;
                        if (z && z2) {
                            this.downstream.onComplete();
                            this.worker.dispose();
                            return;
                        } else if (!z2) {
                            try {
                                Object apply = this.mapper.apply(poll);
                                Objects.requireNonNull(apply, "The mapper returned a null Publisher");
                                Supplier supplier = (Publisher) apply;
                                if (this.sourceMode != 1) {
                                    int i = this.consumed + 1;
                                    if (i == this.limit) {
                                        this.consumed = 0;
                                        this.upstream.request((long) i);
                                    } else {
                                        this.consumed = i;
                                    }
                                }
                                if (supplier instanceof Supplier) {
                                    try {
                                        Object obj = supplier.get();
                                        if (obj != null && !this.cancelled) {
                                            if (!this.inner.isUnbounded()) {
                                                this.active = true;
                                                this.inner.setSubscription(new FlowableConcatMap.WeakScalarSubscription(obj, this.inner));
                                            } else if (tryEnter()) {
                                                this.downstream.onNext(obj);
                                                if (!compareAndSet(1, 0)) {
                                                    this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                                                    this.worker.dispose();
                                                    return;
                                                }
                                            } else {
                                                continue;
                                            }
                                        }
                                    } catch (Throwable th) {
                                        Exceptions.throwIfFatal(th);
                                        this.upstream.cancel();
                                        this.errors.tryAddThrowableOrReport(th);
                                        this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                                        this.worker.dispose();
                                        return;
                                    }
                                } else {
                                    this.active = true;
                                    supplier.subscribe(this.inner);
                                }
                            } catch (Throwable th2) {
                                Exceptions.throwIfFatal(th2);
                                this.upstream.cancel();
                                this.errors.tryAddThrowableOrReport(th2);
                                this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                                this.worker.dispose();
                                return;
                            }
                        }
                    } catch (Throwable th3) {
                        Exceptions.throwIfFatal(th3);
                        this.upstream.cancel();
                        this.errors.tryAddThrowableOrReport(th3);
                        this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                        this.worker.dispose();
                        return;
                    }
                }
                if (this.wip.decrementAndGet() == 0) {
                    return;
                }
            }
        }
    }

    static final class ConcatMapDelayed<T, R> extends BaseConcatMapSubscriber<T, R> {
        private static final long serialVersionUID = -2945777694260521066L;
        final Subscriber<? super R> downstream;
        final boolean veryEnd;

        ConcatMapDelayed(Subscriber<? super R> subscriber, Function<? super T, ? extends Publisher<? extends R>> function, int i, boolean z, Scheduler.Worker worker) {
            super(function, i, worker);
            this.downstream = subscriber;
            this.veryEnd = z;
        }

        /* access modifiers changed from: package-private */
        public void subscribeActual() {
            this.downstream.onSubscribe(this);
        }

        public void onError(Throwable th) {
            if (this.errors.tryAddThrowableOrReport(th)) {
                this.done = true;
                schedule();
            }
        }

        public void innerNext(R r) {
            this.downstream.onNext(r);
        }

        public void innerError(Throwable th) {
            if (this.errors.tryAddThrowableOrReport(th)) {
                if (!this.veryEnd) {
                    this.upstream.cancel();
                    this.done = true;
                }
                this.active = false;
                schedule();
            }
        }

        public void request(long j) {
            this.inner.request(j);
        }

        public void cancel() {
            if (!this.cancelled) {
                this.cancelled = true;
                this.inner.cancel();
                this.upstream.cancel();
                this.worker.dispose();
                this.errors.tryTerminateAndReport();
            }
        }

        /* access modifiers changed from: package-private */
        public void schedule() {
            if (getAndIncrement() == 0) {
                this.worker.schedule(this);
            }
        }

        public void run() {
            Object obj;
            while (!this.cancelled) {
                if (!this.active) {
                    boolean z = this.done;
                    if (!z || this.veryEnd || ((Throwable) this.errors.get()) == null) {
                        try {
                            Object poll = this.queue.poll();
                            boolean z2 = poll == null;
                            if (z && z2) {
                                this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                                this.worker.dispose();
                                return;
                            } else if (!z2) {
                                try {
                                    Object apply = this.mapper.apply(poll);
                                    Objects.requireNonNull(apply, "The mapper returned a null Publisher");
                                    Supplier supplier = (Publisher) apply;
                                    if (this.sourceMode != 1) {
                                        int i = this.consumed + 1;
                                        if (i == this.limit) {
                                            this.consumed = 0;
                                            this.upstream.request((long) i);
                                        } else {
                                            this.consumed = i;
                                        }
                                    }
                                    if (supplier instanceof Supplier) {
                                        try {
                                            obj = supplier.get();
                                        } catch (Throwable th) {
                                            Exceptions.throwIfFatal(th);
                                            this.errors.tryAddThrowableOrReport(th);
                                            if (!this.veryEnd) {
                                                this.upstream.cancel();
                                                this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                                                this.worker.dispose();
                                                return;
                                            }
                                            obj = null;
                                        }
                                        if (obj != null && !this.cancelled) {
                                            if (this.inner.isUnbounded()) {
                                                this.downstream.onNext(obj);
                                            } else {
                                                this.active = true;
                                                this.inner.setSubscription(new FlowableConcatMap.WeakScalarSubscription(obj, this.inner));
                                            }
                                        }
                                    } else {
                                        this.active = true;
                                        supplier.subscribe(this.inner);
                                    }
                                } catch (Throwable th2) {
                                    Exceptions.throwIfFatal(th2);
                                    this.upstream.cancel();
                                    this.errors.tryAddThrowableOrReport(th2);
                                    this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                                    this.worker.dispose();
                                    return;
                                }
                            }
                        } catch (Throwable th3) {
                            Exceptions.throwIfFatal(th3);
                            this.upstream.cancel();
                            this.errors.tryAddThrowableOrReport(th3);
                            this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                            this.worker.dispose();
                            return;
                        }
                    } else {
                        this.errors.tryTerminateConsumer((Subscriber<?>) this.downstream);
                        this.worker.dispose();
                        return;
                    }
                }
                if (decrementAndGet() == 0) {
                    return;
                }
            }
        }
    }
}
