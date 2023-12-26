package com.eaydu.omni.net.okhttp3;

import com.eaydu.omni.net.okhttp3.internal.NamedRunnable;
import com.eaydu.omni.net.okhttp3.internal.cache.CacheInterceptor;
import com.eaydu.omni.net.okhttp3.internal.connection.ConnectInterceptor;
import com.eaydu.omni.net.okhttp3.internal.connection.RealConnection;
import com.eaydu.omni.net.okhttp3.internal.connection.StreamAllocation;
import com.eaydu.omni.net.okhttp3.internal.http.BridgeInterceptor;
import com.eaydu.omni.net.okhttp3.internal.http.CallServerInterceptor;
import com.eaydu.omni.net.okhttp3.internal.http.HttpCodec;
import com.eaydu.omni.net.okhttp3.internal.http.RealInterceptorChain;
import com.eaydu.omni.net.okhttp3.internal.http.RetryAndFollowUpInterceptor;
import com.eaydu.omni.net.okhttp3.internal.platform.Platform;
import java.io.IOException;
import java.util.ArrayList;

final class RealCall implements Call {
    final OkHttpClient client;
    /* access modifiers changed from: private */
    public EventListener eventListener;
    private boolean executed;
    final boolean forWebSocket;
    final Request originalRequest;
    final RetryAndFollowUpInterceptor retryAndFollowUpInterceptor;

    private RealCall(OkHttpClient okHttpClient, Request request, boolean z) {
        this.client = okHttpClient;
        this.originalRequest = request;
        this.forWebSocket = z;
        this.retryAndFollowUpInterceptor = new RetryAndFollowUpInterceptor(okHttpClient, z);
    }

    static RealCall newRealCall(OkHttpClient okHttpClient, Request request, boolean z) {
        RealCall realCall = new RealCall(okHttpClient, request, z);
        realCall.eventListener = okHttpClient.eventListenerFactory().create(realCall);
        return realCall;
    }

    public Request request() {
        return this.originalRequest;
    }

    public Response execute() throws IOException {
        synchronized (this) {
            if (!this.executed) {
                this.executed = true;
            } else {
                throw new IllegalStateException("Already Executed");
            }
        }
        captureCallStackTrace();
        this.eventListener.callStart(this);
        try {
            this.client.dispatcher().executed(this);
            Response responseWithInterceptorChain = getResponseWithInterceptorChain();
            if (responseWithInterceptorChain != null) {
                this.client.dispatcher().finished(this);
                return responseWithInterceptorChain;
            }
            throw new IOException("Canceled");
        } catch (IOException e) {
            this.eventListener.callFailed(this, e);
            throw e;
        } catch (Throwable th) {
            this.client.dispatcher().finished(this);
            throw th;
        }
    }

    private void captureCallStackTrace() {
        this.retryAndFollowUpInterceptor.setCallStackTrace(Platform.get().getStackTraceForCloseable("response.body().close()"));
    }

    public void enqueue(Callback callback) {
        synchronized (this) {
            if (!this.executed) {
                this.executed = true;
            } else {
                throw new IllegalStateException("Already Executed");
            }
        }
        captureCallStackTrace();
        this.eventListener.callStart(this);
        this.client.dispatcher().enqueue(new AsyncCall(callback));
    }

    public void cancel() {
        this.retryAndFollowUpInterceptor.cancel();
    }

    public synchronized boolean isExecuted() {
        return this.executed;
    }

    public boolean isCanceled() {
        return this.retryAndFollowUpInterceptor.isCanceled();
    }

    public RealCall clone() {
        return newRealCall(this.client, this.originalRequest, this.forWebSocket);
    }

    /* access modifiers changed from: package-private */
    public StreamAllocation streamAllocation() {
        return this.retryAndFollowUpInterceptor.streamAllocation();
    }

    final class AsyncCall extends NamedRunnable {
        private final Callback responseCallback;

        AsyncCall(Callback callback) {
            super("OkHttp %s", RealCall.this.redactedUrl());
            this.responseCallback = callback;
        }

        /* access modifiers changed from: package-private */
        public String host() {
            return RealCall.this.originalRequest.url().host();
        }

        /* access modifiers changed from: package-private */
        public Request request() {
            return RealCall.this.originalRequest;
        }

        /* access modifiers changed from: package-private */
        public RealCall get() {
            return RealCall.this;
        }

        /* access modifiers changed from: protected */
        /* JADX WARNING: Removed duplicated region for block: B:13:0x003e A[SYNTHETIC, Splitter:B:13:0x003e] */
        /* JADX WARNING: Removed duplicated region for block: B:15:0x005e A[Catch:{ all -> 0x0036 }] */
        /* Code decompiled incorrectly, please refer to instructions dump. */
        public void execute() {
            /*
                r6 = this;
                r0 = 1
                r1 = 0
                com.eaydu.omni.net.okhttp3.RealCall r2 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ IOException -> 0x0038 }
                com.eaydu.omni.net.okhttp3.Response r2 = r2.getResponseWithInterceptorChain()     // Catch:{ IOException -> 0x0038 }
                com.eaydu.omni.net.okhttp3.RealCall r3 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ IOException -> 0x0038 }
                com.eaydu.omni.net.okhttp3.internal.http.RetryAndFollowUpInterceptor r3 = r3.retryAndFollowUpInterceptor     // Catch:{ IOException -> 0x0038 }
                boolean r1 = r3.isCanceled()     // Catch:{ IOException -> 0x0038 }
                if (r1 == 0) goto L_0x0021
                com.eaydu.omni.net.okhttp3.Callback r1 = r6.responseCallback     // Catch:{ IOException -> 0x0034 }
                com.eaydu.omni.net.okhttp3.RealCall r2 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ IOException -> 0x0034 }
                java.io.IOException r3 = new java.io.IOException     // Catch:{ IOException -> 0x0034 }
                java.lang.String r4 = "Canceled"
                r3.<init>(r4)     // Catch:{ IOException -> 0x0034 }
                r1.onFailure(r2, r3)     // Catch:{ IOException -> 0x0034 }
                goto L_0x0028
            L_0x0021:
                com.eaydu.omni.net.okhttp3.Callback r1 = r6.responseCallback     // Catch:{ IOException -> 0x0034 }
                com.eaydu.omni.net.okhttp3.RealCall r3 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ IOException -> 0x0034 }
                r1.onResponse(r3, r2)     // Catch:{ IOException -> 0x0034 }
            L_0x0028:
                com.eaydu.omni.net.okhttp3.RealCall r0 = com.eaydu.omni.net.okhttp3.RealCall.this
                com.eaydu.omni.net.okhttp3.OkHttpClient r0 = r0.client
                com.eaydu.omni.net.okhttp3.Dispatcher r0 = r0.dispatcher()
                r0.finished((com.eaydu.omni.net.okhttp3.RealCall.AsyncCall) r6)
                goto L_0x0071
            L_0x0034:
                r1 = move-exception
                goto L_0x003c
            L_0x0036:
                r0 = move-exception
                goto L_0x0072
            L_0x0038:
                r0 = move-exception
                r5 = r1
                r1 = r0
                r0 = r5
            L_0x003c:
                if (r0 == 0) goto L_0x005e
                com.eaydu.omni.net.okhttp3.internal.platform.Platform r0 = com.eaydu.omni.net.okhttp3.internal.platform.Platform.get()     // Catch:{ all -> 0x0036 }
                r2 = 4
                java.lang.StringBuilder r3 = new java.lang.StringBuilder     // Catch:{ all -> 0x0036 }
                r3.<init>()     // Catch:{ all -> 0x0036 }
                java.lang.String r4 = "Callback failure for "
                r3.append(r4)     // Catch:{ all -> 0x0036 }
                com.eaydu.omni.net.okhttp3.RealCall r4 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ all -> 0x0036 }
                java.lang.String r4 = r4.toLoggableString()     // Catch:{ all -> 0x0036 }
                r3.append(r4)     // Catch:{ all -> 0x0036 }
                java.lang.String r3 = r3.toString()     // Catch:{ all -> 0x0036 }
                r0.log(r2, r3, r1)     // Catch:{ all -> 0x0036 }
                goto L_0x0028
            L_0x005e:
                com.eaydu.omni.net.okhttp3.RealCall r0 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ all -> 0x0036 }
                com.eaydu.omni.net.okhttp3.EventListener r0 = r0.eventListener     // Catch:{ all -> 0x0036 }
                com.eaydu.omni.net.okhttp3.RealCall r2 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ all -> 0x0036 }
                r0.callFailed(r2, r1)     // Catch:{ all -> 0x0036 }
                com.eaydu.omni.net.okhttp3.Callback r0 = r6.responseCallback     // Catch:{ all -> 0x0036 }
                com.eaydu.omni.net.okhttp3.RealCall r2 = com.eaydu.omni.net.okhttp3.RealCall.this     // Catch:{ all -> 0x0036 }
                r0.onFailure(r2, r1)     // Catch:{ all -> 0x0036 }
                goto L_0x0028
            L_0x0071:
                return
            L_0x0072:
                com.eaydu.omni.net.okhttp3.RealCall r1 = com.eaydu.omni.net.okhttp3.RealCall.this
                com.eaydu.omni.net.okhttp3.OkHttpClient r1 = r1.client
                com.eaydu.omni.net.okhttp3.Dispatcher r1 = r1.dispatcher()
                r1.finished((com.eaydu.omni.net.okhttp3.RealCall.AsyncCall) r6)
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: com.eaydu.omni.net.okhttp3.RealCall.AsyncCall.execute():void");
        }
    }

    /* access modifiers changed from: package-private */
    public String toLoggableString() {
        StringBuilder sb = new StringBuilder();
        sb.append(isCanceled() ? "canceled " : "");
        sb.append(this.forWebSocket ? "web socket" : "call");
        sb.append(" to ");
        sb.append(redactedUrl());
        return sb.toString();
    }

    /* access modifiers changed from: package-private */
    public String redactedUrl() {
        return this.originalRequest.url().redact();
    }

    /* access modifiers changed from: package-private */
    public Response getResponseWithInterceptorChain() throws IOException {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.client.interceptors());
        arrayList.add(this.retryAndFollowUpInterceptor);
        arrayList.add(new BridgeInterceptor(this.client.cookieJar()));
        arrayList.add(new CacheInterceptor(this.client.internalCache()));
        arrayList.add(new ConnectInterceptor(this.client));
        if (!this.forWebSocket) {
            arrayList.addAll(this.client.networkInterceptors());
        }
        arrayList.add(new CallServerInterceptor(this.forWebSocket));
        return new RealInterceptorChain(arrayList, (StreamAllocation) null, (HttpCodec) null, (RealConnection) null, 0, this.originalRequest, this, this.eventListener, this.client.connectTimeoutMillis(), this.client.readTimeoutMillis(), this.client.writeTimeoutMillis()).proceed(this.originalRequest);
    }
}