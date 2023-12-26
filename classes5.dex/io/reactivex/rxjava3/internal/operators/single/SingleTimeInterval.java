package io.reactivex.rxjava3.internal.operators.single;

import io.reactivex.rxjava3.core.Scheduler;
import io.reactivex.rxjava3.core.Single;
import io.reactivex.rxjava3.core.SingleObserver;
import io.reactivex.rxjava3.core.SingleSource;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.internal.disposables.DisposableHelper;
import io.reactivex.rxjava3.schedulers.Timed;
import java.util.concurrent.TimeUnit;

public final class SingleTimeInterval<T> extends Single<Timed<T>> {
    final Scheduler scheduler;
    final SingleSource<T> source;
    final boolean start;
    final TimeUnit unit;

    public SingleTimeInterval(SingleSource<T> singleSource, TimeUnit timeUnit, Scheduler scheduler2, boolean z) {
        this.source = singleSource;
        this.unit = timeUnit;
        this.scheduler = scheduler2;
        this.start = z;
    }

    /* access modifiers changed from: protected */
    public void subscribeActual(SingleObserver<? super Timed<T>> singleObserver) {
        this.source.subscribe(new TimeIntervalSingleObserver(singleObserver, this.unit, this.scheduler, this.start));
    }

    static final class TimeIntervalSingleObserver<T> implements SingleObserver<T>, Disposable {
        final SingleObserver<? super Timed<T>> downstream;
        final Scheduler scheduler;
        final long startTime;
        final TimeUnit unit;
        Disposable upstream;

        TimeIntervalSingleObserver(SingleObserver<? super Timed<T>> singleObserver, TimeUnit timeUnit, Scheduler scheduler2, boolean z) {
            this.downstream = singleObserver;
            this.unit = timeUnit;
            this.scheduler = scheduler2;
            this.startTime = z ? scheduler2.now(timeUnit) : 0;
        }

        public void onSubscribe(Disposable disposable) {
            if (DisposableHelper.validate(this.upstream, disposable)) {
                this.upstream = disposable;
                this.downstream.onSubscribe(this);
            }
        }

        public void onSuccess(T t) {
            this.downstream.onSuccess(new Timed(t, this.scheduler.now(this.unit) - this.startTime, this.unit));
        }

        public void onError(Throwable th) {
            this.downstream.onError(th);
        }

        public void dispose() {
            this.upstream.dispose();
        }

        public boolean isDisposed() {
            return this.upstream.isDisposed();
        }
    }
}
