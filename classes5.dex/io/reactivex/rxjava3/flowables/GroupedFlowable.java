package io.reactivex.rxjava3.flowables;

import io.reactivex.rxjava3.core.Flowable;

public abstract class GroupedFlowable<K, T> extends Flowable<T> {
    final K key;

    protected GroupedFlowable(K k) {
        this.key = k;
    }

    public K getKey() {
        return this.key;
    }
}
