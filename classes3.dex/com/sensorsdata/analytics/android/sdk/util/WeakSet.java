package com.sensorsdata.analytics.android.sdk.util;

import java.lang.ref.WeakReference;
import java.util.Collection;
import java.util.Iterator;
import java.util.Set;
import java.util.WeakHashMap;

public class WeakSet<T> implements Set<T> {
    private static final Object PRESENT = new Object();
    private transient WeakHashMap<T, Object> map;

    private static class EmptyIterator<E> implements Iterator<E> {
        /* access modifiers changed from: private */
        public static EmptyIterator EMPTY_ITERATOR = new EmptyIterator();

        public boolean hasNext() {
            return false;
        }

        private EmptyIterator() {
        }

        public E next() {
            throw new UnsupportedOperationException("EmptyIterator should not call this method directly");
        }
    }

    private static class NonEmptyIterator<E> implements Iterator<E> {
        private final Iterator<WeakReference<E>> iterator;

        private NonEmptyIterator(Iterator<WeakReference<E>> it) {
            this.iterator = it;
        }

        public boolean hasNext() {
            return this.iterator.hasNext();
        }

        public E next() {
            return this.iterator.next().get();
        }
    }

    public int size() {
        WeakHashMap<T, Object> weakHashMap = this.map;
        if (weakHashMap == null) {
            return 0;
        }
        return weakHashMap.size();
    }

    public boolean isEmpty() {
        return size() == 0;
    }

    public boolean contains(Object obj) {
        if (isEmpty() || obj == null) {
            return false;
        }
        return this.map.containsKey(obj);
    }

    public Iterator<T> iterator() {
        if (isEmpty()) {
            return EmptyIterator.EMPTY_ITERATOR;
        }
        return this.map.keySet().iterator();
    }

    public Object[] toArray() {
        throw new UnsupportedOperationException("method toArray() not supported");
    }

    public <T1> T1[] toArray(T1[] t1Arr) {
        throw new UnsupportedOperationException("method toArray(T[] a) not supported");
    }

    public boolean add(T t) {
        if (t != null) {
            if (this.map == null) {
                this.map = new WeakHashMap<>();
            }
            return this.map.put(t, PRESENT) != null;
        }
        throw new IllegalArgumentException("The argument t can't be null");
    }

    public boolean remove(Object obj) {
        return !isEmpty() && obj != null && this.map.remove(obj) == PRESENT;
    }

    public boolean containsAll(Collection<?> collection) {
        throw new UnsupportedOperationException("method containsAll not supported");
    }

    public boolean addAll(Collection<? extends T> collection) {
        throw new UnsupportedOperationException("method addAll not supported now");
    }

    public boolean retainAll(Collection<?> collection) {
        throw new UnsupportedOperationException("method retainAll not supported now");
    }

    public boolean removeAll(Collection<?> collection) {
        throw new UnsupportedOperationException("method removeAll not supported now");
    }

    public void clear() {
        WeakHashMap<T, Object> weakHashMap = this.map;
        if (weakHashMap != null) {
            weakHashMap.clear();
        }
    }
}
