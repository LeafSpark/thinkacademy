package com.bumptech.glide.request.target;

import com.bumptech.glide.util.Util;

@Deprecated
public abstract class SimpleTarget<Z> extends BaseTarget<Z> {
    private final int height;
    private final int width;

    public void removeCallback(SizeReadyCallback sizeReadyCallback) {
    }

    public SimpleTarget() {
        this(Target.SIZE_ORIGINAL, Target.SIZE_ORIGINAL);
    }

    public SimpleTarget(int i, int i2) {
        this.width = i;
        this.height = i2;
    }

    public final void getSize(SizeReadyCallback sizeReadyCallback) {
        if (Util.isValidDimensions(this.width, this.height)) {
            sizeReadyCallback.onSizeReady(this.width, this.height);
            return;
        }
        throw new IllegalArgumentException("Width and height must both be > 0 or Target#SIZE_ORIGINAL, but given width: " + this.width + " and height: " + this.height + ", either provide dimensions in the constructor or call override()");
    }
}