package io.reactivex.internal.operators.single;

import io.reactivex.Scheduler;
import io.reactivex.Single;
import io.reactivex.SingleObserver;
import io.reactivex.SingleSource;
import io.reactivex.disposables.Disposable;
import io.reactivex.internal.disposables.SequentialDisposable;
import java.util.concurrent.TimeUnit;

public final class SingleDelay<T> extends Single<T> {
    final Scheduler scheduler;
    final SingleSource<? extends T> source;
    final long time;
    final TimeUnit unit;

    public SingleDelay(SingleSource<? extends T> singleSource, long j, TimeUnit timeUnit, Scheduler scheduler2) {
        this.source = singleSource;
        this.time = j;
        this.unit = timeUnit;
        this.scheduler = scheduler2;
    }

    /* access modifiers changed from: protected */
    public void subscribeActual(SingleObserver<? super T> singleObserver) {
        SequentialDisposable sequentialDisposable = new SequentialDisposable();
        singleObserver.onSubscribe(sequentialDisposable);
        this.source.subscribe(new Delay(sequentialDisposable, singleObserver));
    }

    final class Delay implements SingleObserver<T> {
        final SingleObserver<? super T> s;
        private final SequentialDisposable sd;

        Delay(SequentialDisposable sequentialDisposable, SingleObserver<? super T> singleObserver) {
            this.sd = sequentialDisposable;
            this.s = singleObserver;
        }

        public void onSubscribe(Disposable disposable) {
            this.sd.replace(disposable);
        }

        public void onSuccess(T t) {
            this.sd.replace(SingleDelay.this.scheduler.scheduleDirect(new OnSuccess(t), SingleDelay.this.time, SingleDelay.this.unit));
        }

        public void onError(Throwable th) {
            this.sd.replace(SingleDelay.this.scheduler.scheduleDirect(new OnError(th), 0, SingleDelay.this.unit));
        }

        final class OnSuccess implements Runnable {
            private final T value;

            OnSuccess(T t) {
                this.value = t;
            }

            public void run() {
                Delay.this.s.onSuccess(this.value);
            }
        }

        final class OnError implements Runnable {
            private final Throwable e;

            OnError(Throwable th) {
                this.e = th;
            }

            public void run() {
                Delay.this.s.onError(this.e);
            }
        }
    }
}
