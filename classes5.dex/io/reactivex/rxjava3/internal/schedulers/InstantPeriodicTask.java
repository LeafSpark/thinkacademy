package io.reactivex.rxjava3.internal.schedulers;

import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.internal.functions.Functions;
import io.reactivex.rxjava3.plugins.RxJavaPlugins;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.FutureTask;
import java.util.concurrent.atomic.AtomicReference;

final class InstantPeriodicTask implements Callable<Void>, Disposable {
    static final FutureTask<Void> CANCELLED = new FutureTask<>(Functions.EMPTY_RUNNABLE, (Object) null);
    final ExecutorService executor;
    final AtomicReference<Future<?>> first = new AtomicReference<>();
    final AtomicReference<Future<?>> rest = new AtomicReference<>();
    Thread runner;
    final Runnable task;

    InstantPeriodicTask(Runnable runnable, ExecutorService executorService) {
        this.task = runnable;
        this.executor = executorService;
    }

    public Void call() {
        this.runner = Thread.currentThread();
        try {
            this.task.run();
            this.runner = null;
            setRest(this.executor.submit(this));
            return null;
        } catch (Throwable th) {
            this.runner = null;
            RxJavaPlugins.onError(th);
            throw th;
        }
    }

    public void dispose() {
        AtomicReference<Future<?>> atomicReference = this.first;
        Future future = CANCELLED;
        Future andSet = atomicReference.getAndSet(future);
        boolean z = true;
        if (!(andSet == null || andSet == future)) {
            andSet.cancel(this.runner != Thread.currentThread());
        }
        Future andSet2 = this.rest.getAndSet(future);
        if (andSet2 != null && andSet2 != future) {
            if (this.runner == Thread.currentThread()) {
                z = false;
            }
            andSet2.cancel(z);
        }
    }

    public boolean isDisposed() {
        return this.first.get() == CANCELLED;
    }

    /* access modifiers changed from: package-private */
    public void setFirst(Future<?> future) {
        Future future2;
        do {
            future2 = this.first.get();
            if (future2 == CANCELLED) {
                future.cancel(this.runner != Thread.currentThread());
                return;
            }
        } while (!this.first.compareAndSet(future2, future));
    }

    /* access modifiers changed from: package-private */
    public void setRest(Future<?> future) {
        Future future2;
        do {
            future2 = this.rest.get();
            if (future2 == CANCELLED) {
                future.cancel(this.runner != Thread.currentThread());
                return;
            }
        } while (!this.rest.compareAndSet(future2, future));
    }
}
