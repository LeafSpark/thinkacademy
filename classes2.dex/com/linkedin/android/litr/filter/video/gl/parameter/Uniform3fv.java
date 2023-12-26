package com.linkedin.android.litr.filter.video.gl.parameter;

import android.opengl.GLES20;
import java.nio.FloatBuffer;

public class Uniform3fv extends ShaderParameter {
    private FloatBuffer buffer;
    private int count;

    public Uniform3fv(String str, int i, float[] fArr) {
        this(str, i, FloatBuffer.wrap(fArr));
    }

    public Uniform3fv(String str, int i, FloatBuffer floatBuffer) {
        super(0, str);
        this.count = i;
        this.buffer = floatBuffer;
    }

    public void apply(int i) {
        GLES20.glUniform3fv(getLocation(i), this.count, this.buffer);
    }
}