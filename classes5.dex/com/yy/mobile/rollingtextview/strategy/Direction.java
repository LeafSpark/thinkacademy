package com.yy.mobile.rollingtextview.strategy;

import kotlin.Metadata;

@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\b\n\u0002\b\n\b\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0017\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0002\u0010\u0005R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u0007j\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\f¨\u0006\r"}, d2 = {"Lcom/yy/mobile/rollingtextview/strategy/Direction;", "", "value", "", "orientation", "(Ljava/lang/String;III)V", "getOrientation", "()I", "getValue", "SCROLL_UP", "SCROLL_DOWN", "SCROLL_LEFT", "SCROLL_RIGHT", "com.github.YvesCheung.RollingText"}, k = 1, mv = {1, 5, 1}, xi = 48)
/* compiled from: CharOrderStrategy.kt */
public enum Direction {
    SCROLL_UP(-1, 1),
    SCROLL_DOWN(1, 1),
    SCROLL_LEFT(-1, 0),
    SCROLL_RIGHT(1, 0);
    
    private final int orientation;
    private final int value;

    private Direction(int i, int i2) {
        this.value = i;
        this.orientation = i2;
    }

    public final int getOrientation() {
        return this.orientation;
    }

    public final int getValue() {
        return this.value;
    }
}
