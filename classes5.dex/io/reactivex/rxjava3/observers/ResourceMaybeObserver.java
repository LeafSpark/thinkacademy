package io.reactivex.rxjava3.observers;

import io.reactivex.rxjava3.core.MaybeObserver;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.internal.disposables.DisposableHelper;
import io.reactivex.rxjava3.internal.disposables.ListCompositeDisposable;
import io.reactivex.rxjava3.internal.util.EndConsumerHelper;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicReference;

public abstract class ResourceMaybeObserver<T> implements MaybeObserver<T>, Disposable {
    private final ListCompositeDisposable resources = new ListCompositeDisposable();
    private final AtomicReference<Disposable> upstream = new AtomicReference<>();

    /* access modifiers changed from: protected */
    public void onStart() {
    }

    public final void add(Disposable disposable) {
        Objects.requireNonNull(disposable, "resource is null");
        this.resources.add(disposable);
    }

    public final void onSubscribe(Disposable disposable) {
        if (EndConsumerHelper.setOnce(this.upstream, disposable, getClass())) {
            onStart();
        }
    }

    public final void dispose() {
        if (DisposableHelper.dispose(this.upstream)) {
            this.resources.dispose();
        }
    }

    public final boolean isDisposed() {
        return DisposableHelper.isDisposed(this.upstream.get());
    }
}