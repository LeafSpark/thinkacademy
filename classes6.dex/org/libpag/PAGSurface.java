package org.libpag;

import android.graphics.Bitmap;
import android.graphics.SurfaceTexture;
import android.hardware.HardwareBuffer;
import android.opengl.EGL14;
import android.opengl.EGLContext;
import android.os.Build;
import android.util.Pair;
import android.view.Surface;
import org.extra.tools.a;

public class PAGSurface {
    private Surface a = null;
    private boolean b = false;
    private int c = 0;
    long nativeSurface;

    static {
        a.b("pag");
        nativeInit();
    }

    private PAGSurface(long j) {
        this.nativeSurface = j;
    }

    public static PAGSurface FromSurface(Surface surface) {
        return FromSurface(surface, EGL14.EGL_NO_CONTEXT);
    }

    public static PAGSurface FromSurfaceTexture(SurfaceTexture surfaceTexture) {
        return FromSurfaceTexture(surfaceTexture, EGL14.EGL_NO_CONTEXT);
    }

    public static PAGSurface FromTexture(int i, int i2, int i3) {
        return FromTexture(i, i2, i3, false);
    }

    public static PAGSurface FromTextureForAsyncThread(int i, int i2, int i3) {
        return FromTextureForAsyncThread(i, i2, i3, false);
    }

    public static PAGSurface MakeOffscreen(int i, int i2) {
        long SetupOffscreen = SetupOffscreen(i, i2);
        if (SetupOffscreen == 0) {
            return null;
        }
        return new PAGSurface(SetupOffscreen);
    }

    private static native long SetupFromSurfaceWithGLContext(Surface surface, long j);

    public static native long SetupFromTexture(int i, int i2, int i3, boolean z, boolean z2);

    private static native long SetupOffscreen(int i, int i2);

    private native void nativeFinalize();

    private static native void nativeInit();

    private native void nativeRelease();

    public native boolean clearAll();

    public native boolean copyPixelsTo(Bitmap bitmap);

    /* access modifiers changed from: protected */
    public void finalize() {
        nativeFinalize();
    }

    public native void freeCache();

    public native int height();

    public Bitmap makeSnapshot() {
        Pair a2 = a.a(width(), height(), true);
        if (a2.first == null) {
            return null;
        }
        Object obj = a2.second;
        if (obj != null && Build.VERSION.SDK_INT >= 26) {
            ((HardwareBuffer) obj).close();
        }
        if (copyPixelsTo((Bitmap) a2.first)) {
            return (Bitmap) a2.first;
        }
        return null;
    }

    public void release() {
        Surface surface;
        freeCache();
        if (this.b && (surface = this.a) != null) {
            surface.release();
        }
        nativeRelease();
    }

    public native void updateSize();

    public native int width();

    public static PAGSurface FromSurface(Surface surface, EGLContext eGLContext) {
        long j;
        if (surface == null) {
            return null;
        }
        if (eGLContext == null || eGLContext == EGL14.EGL_NO_CONTEXT) {
            j = 0;
        } else {
            j = Build.VERSION.SDK_INT >= 21 ? eGLContext.getNativeHandle() : (long) eGLContext.getHandle();
        }
        long SetupFromSurfaceWithGLContext = SetupFromSurfaceWithGLContext(surface, j);
        if (SetupFromSurfaceWithGLContext == 0) {
            return null;
        }
        PAGSurface pAGSurface = new PAGSurface(SetupFromSurfaceWithGLContext);
        pAGSurface.a = surface;
        return pAGSurface;
    }

    public static PAGSurface FromSurfaceTexture(SurfaceTexture surfaceTexture, EGLContext eGLContext) {
        if (surfaceTexture == null) {
            return null;
        }
        PAGSurface FromSurface = FromSurface(new Surface(surfaceTexture), eGLContext);
        if (FromSurface != null) {
            FromSurface.b = true;
        }
        return FromSurface;
    }

    public static PAGSurface FromTexture(int i, int i2, int i3, boolean z) {
        long SetupFromTexture = SetupFromTexture(i, i2, i3, z, false);
        if (SetupFromTexture == 0) {
            return null;
        }
        PAGSurface pAGSurface = new PAGSurface(SetupFromTexture);
        pAGSurface.c = i;
        return pAGSurface;
    }

    public static PAGSurface FromTextureForAsyncThread(int i, int i2, int i3, boolean z) {
        long SetupFromTexture = SetupFromTexture(i, i2, i3, z, true);
        if (SetupFromTexture == 0) {
            return null;
        }
        PAGSurface pAGSurface = new PAGSurface(SetupFromTexture);
        pAGSurface.c = i;
        return pAGSurface;
    }
}
