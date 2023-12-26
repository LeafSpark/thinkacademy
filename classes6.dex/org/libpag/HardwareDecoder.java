package org.libpag;

import android.media.MediaCodec;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Build;
import android.os.HandlerThread;
import android.os.SystemClock;
import android.util.Log;
import java.nio.ByteBuffer;
import java.util.concurrent.atomic.AtomicInteger;
import org.libpag.d;
import tv.danmaku.ijk.media.psplayer.misc.IMediaFormat;

class HardwareDecoder {
    /* access modifiers changed from: private */
    public static final AtomicInteger f = new AtomicInteger();
    private VideoSurface a = null;
    private MediaCodec b;
    private boolean c = true;
    private MediaCodec.BufferInfo d = new MediaCodec.BufferInfo();
    private int e = -1;

    class a implements d.b {
        private MediaCodec a;
        private long b;
        final /* synthetic */ MediaFormat c;
        final /* synthetic */ VideoSurface d;
        final /* synthetic */ MediaCodec[] e;

        a(MediaFormat mediaFormat, VideoSurface videoSurface, MediaCodec[] mediaCodecArr) {
            this.c = mediaFormat;
            this.d = videoSurface;
            this.e = mediaCodecArr;
        }

        /* JADX WARNING: Failed to process nested try/catch */
        /* JADX WARNING: Missing exception handler attribute for start block: B:6:0x0012 */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void a(boolean r5) {
            /*
                r4 = this;
                if (r5 == 0) goto L_0x003d
                android.media.MediaCodec r0 = r4.a
                if (r0 == 0) goto L_0x003d
                long r0 = android.os.SystemClock.uptimeMillis()
                long r2 = r4.b
                long r0 = r0 - r2
                android.media.MediaCodec r2 = r4.a     // Catch:{ Exception -> 0x0012 }
                r2.stop()     // Catch:{ Exception -> 0x0012 }
            L_0x0012:
                android.media.MediaCodec r2 = r4.a     // Catch:{ Exception -> 0x0017 }
                r2.release()     // Catch:{ Exception -> 0x0017 }
            L_0x0017:
                r2 = 0
                r4.a = r2
                org.libpag.VideoSurface r2 = r4.d
                r2.a()
                java.lang.StringBuilder r2 = new java.lang.StringBuilder
                r2.<init>()
                java.lang.String r3 = "init decoder timeout. cost: "
                r2.append(r3)
                r2.append(r0)
                java.lang.String r0 = "ms"
                r2.append(r0)
                java.lang.String r0 = r2.toString()
                java.lang.RuntimeException r1 = new java.lang.RuntimeException
                r1.<init>(r0)
                r1.printStackTrace()
            L_0x003d:
                if (r5 != 0) goto L_0x0046
                android.media.MediaCodec[] r5 = r4.e
                android.media.MediaCodec r0 = r4.a
                r1 = 0
                r5[r1] = r0
            L_0x0046:
                java.util.concurrent.atomic.AtomicInteger r5 = org.libpag.HardwareDecoder.f
                r5.getAndDecrement()
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: org.libpag.HardwareDecoder.a.a(boolean):void");
        }

        public void run() {
            this.b = SystemClock.uptimeMillis();
            try {
                MediaCodec createDecoderByType = MediaCodec.createDecoderByType(this.c.getString(IMediaFormat.KEY_MIME));
                this.a = createDecoderByType;
                createDecoderByType.configure(this.c, this.d.getInputSurface(), (MediaCrypto) null, 0);
                this.a.start();
            } catch (Exception unused) {
                Log.e("HardwareDecoder", "create and config hardware decoder have exception");
                MediaCodec mediaCodec = this.a;
                if (mediaCodec != null) {
                    mediaCodec.release();
                    this.a = null;
                    this.d.a();
                }
            }
        }
    }

    HardwareDecoder() {
    }

    private static HardwareDecoder Create(MediaFormat mediaFormat) {
        VideoSurface a2;
        AtomicInteger atomicInteger = f;
        if (atomicInteger.get() >= 10 || Build.VERSION.SDK_INT < 21 || (a2 = VideoSurface.a(mediaFormat.getInteger("width"), mediaFormat.getInteger("height"))) == null) {
            return null;
        }
        atomicInteger.getAndIncrement();
        HandlerThread handlerThread = new HandlerThread("libpag_GPUDecoder_init_decoder");
        try {
            handlerThread.start();
            MediaCodec[] mediaCodecArr = {null};
            boolean a3 = new d(handlerThread.getLooper()).a(new a(mediaFormat, a2, mediaCodecArr), 2000);
            handlerThread.quitSafely();
            if (!a3) {
                return null;
            }
            HardwareDecoder hardwareDecoder = new HardwareDecoder();
            hardwareDecoder.a = a2;
            hardwareDecoder.b = mediaCodecArr[0];
            return hardwareDecoder;
        } catch (Error | Exception e2) {
            e2.printStackTrace();
            f.getAndDecrement();
            return null;
        }
    }

    private int dequeueInputBuffer() {
        try {
            return this.b.dequeueInputBuffer(1000);
        } catch (Error | Exception e2) {
            e2.printStackTrace();
            return -1;
        }
    }

    private int dequeueOutputBuffer() {
        try {
            return this.b.dequeueOutputBuffer(this.d, 1000);
        } catch (Exception e2) {
            e2.printStackTrace();
            return -1;
        }
    }

    private ByteBuffer getInputBuffer(int i) {
        try {
            if (Build.VERSION.SDK_INT >= 21) {
                return this.b.getInputBuffer(i);
            }
            return this.b.getInputBuffers()[i];
        } catch (Error | Exception e2) {
            e2.printStackTrace();
            return null;
        }
    }

    private VideoSurface getVideoSurface() {
        return this.a;
    }

    private int onDecodeFrame() {
        releaseOutputBuffer();
        try {
            int dequeueOutputBuffer = dequeueOutputBuffer();
            if ((this.d.flags & 4) == 0) {
                if (dequeueOutputBuffer >= 0) {
                    this.e = dequeueOutputBuffer;
                }
                return this.e != -1 ? 0 : -1;
            } else if (dequeueOutputBuffer < 0) {
                return -3;
            } else {
                this.e = dequeueOutputBuffer;
                return -3;
            }
        } catch (Exception e2) {
            e2.printStackTrace();
            return -2;
        }
    }

    private int onEndOfStream() {
        int dequeueInputBuffer = dequeueInputBuffer();
        if (dequeueInputBuffer >= 0) {
            return queueInputBuffer(dequeueInputBuffer, 0, 0, 0, 4);
        }
        return -1;
    }

    private void onFlush() {
        if (!this.c) {
            try {
                this.b.flush();
                this.d = new MediaCodec.BufferInfo();
                this.e = -1;
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }

    private void onRelease() {
        if (this.b != null) {
            releaseOutputBuffer();
            try {
                this.b.stop();
            } catch (Exception e2) {
                e2.printStackTrace();
            }
            try {
                this.b.release();
            } catch (Exception e3) {
                e3.printStackTrace();
            }
            this.b = null;
            this.a.a();
        }
    }

    private boolean onRenderFrame() {
        int i = this.e;
        if (i == -1) {
            return false;
        }
        int releaseOutputBuffer = releaseOutputBuffer(i, true);
        this.e = -1;
        if (releaseOutputBuffer == 0) {
            return true;
        }
        return false;
    }

    private int onSendBytes(ByteBuffer byteBuffer, long j) {
        int dequeueInputBuffer = dequeueInputBuffer();
        if (dequeueInputBuffer < 0) {
            return -1;
        }
        ByteBuffer inputBuffer = getInputBuffer(dequeueInputBuffer);
        if (inputBuffer == null) {
            return -2;
        }
        inputBuffer.clear();
        byteBuffer.position(0);
        inputBuffer.put(byteBuffer);
        return queueInputBuffer(dequeueInputBuffer, 0, byteBuffer.limit(), j, 0);
    }

    private long presentationTime() {
        return this.d.presentationTimeUs;
    }

    private int queueInputBuffer(int i, int i2, int i3, long j, int i4) {
        try {
            this.b.queueInputBuffer(i, i2, i3, j, i4);
            this.c = false;
            return 0;
        } catch (Error | Exception e2) {
            e2.printStackTrace();
            return -2;
        }
    }

    private void releaseOutputBuffer() {
        int i = this.e;
        if (i != -1) {
            releaseOutputBuffer(i, false);
            this.e = -1;
        }
    }

    private int releaseOutputBuffer(int i, boolean z) {
        try {
            this.b.releaseOutputBuffer(i, z);
            return 0;
        } catch (Error | Exception e2) {
            e2.printStackTrace();
            return -2;
        }
    }
}
