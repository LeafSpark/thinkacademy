package com.tal.app.thinkacademy.lib.commui.wheel.adapter;

public interface WheelAdapter<T> {
    T getItem(int i);

    int getItemsCount();

    int indexOf(T t);
}