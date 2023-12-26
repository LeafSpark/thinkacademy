package io.reactivex.rxjava3.internal.operators.maybe;

import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.MaybeObserver;
import io.reactivex.rxjava3.core.MaybeSource;
import io.reactivex.rxjava3.core.Scheduler;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.internal.disposables.DisposableHelper;
import io.reactivex.rxjava3.schedulers.Timed;
import java.util.concurrent.TimeUnit;

public final class MaybeTimeInterval<T> extends Maybe<Timed<T>> {
    final Scheduler scheduler;
    final MaybeSource<T> source;
    final boolean start;
    final TimeUnit unit;

    public MaybeTimeInterval(MaybeSource<T> maybeSource, TimeUnit timeUnit, Scheduler scheduler2, boolean z) {
        this.source = maybeSource;
        this.unit = timeUnit;
        this.scheduler = scheduler2;
        this.start = z;
    }

    /* access modifiers changed from: protected */
    public void subscribeActual(MaybeObserver<? super Timed<T>> maybeObserver) {
        this.source.subscribe(new TimeIntervalMaybeObserver(maybeObserver, this.unit, this.scheduler, this.start));
    }

    static final class TimeIntervalMaybeObserver<T> implements MaybeObserver<T>, Disposable {
        final MaybeObserver<? super Timed<T>> downstream;
        final Scheduler scheduler;
        final long startTime;
        final TimeUnit unit;
        Disposable upstream;

        TimeIntervalMaybeObserver(MaybeObserver<? super Timed<T>> maybeObserver, TimeUnit timeUnit, Scheduler scheduler2, boolean z) {
            this.downstream = maybeObserver;
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

        public void onComplete() {
            this.downstream.onComplete();
        }

        public void dispose() {
            this.upstream.dispose();
        }

        public boolean isDisposed() {
            return this.upstream.isDisposed();
        }
    }
}
