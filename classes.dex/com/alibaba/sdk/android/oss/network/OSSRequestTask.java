package com.alibaba.sdk.android.oss.network;

import com.alibaba.sdk.android.oss.internal.OSSRetryHandler;
import com.alibaba.sdk.android.oss.internal.RequestMessage;
import com.alibaba.sdk.android.oss.internal.ResponseMessage;
import com.alibaba.sdk.android.oss.internal.ResponseParser;
import com.alibaba.sdk.android.oss.model.OSSResult;
import java.util.HashMap;
import java.util.concurrent.Callable;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Response;

public class OSSRequestTask<T extends OSSResult> implements Callable<T> {
    private OkHttpClient client;
    private ExecutionContext context;
    private int currentRetryCount = 0;
    private RequestMessage message;
    private ResponseParser<T> responseParser;
    private OSSRetryHandler retryHandler;

    public OSSRequestTask(RequestMessage requestMessage, ResponseParser responseParser2, ExecutionContext executionContext, int i) {
        this.responseParser = responseParser2;
        this.message = requestMessage;
        this.context = executionContext;
        this.client = executionContext.getClient();
        this.retryHandler = new OSSRetryHandler(i);
    }

    /* JADX WARNING: Removed duplicated region for block: B:108:0x034b  */
    /* JADX WARNING: Removed duplicated region for block: B:117:0x037d  */
    /* JADX WARNING: Removed duplicated region for block: B:48:0x014d A[Catch:{ Exception -> 0x028e }] */
    /* JADX WARNING: Removed duplicated region for block: B:52:0x017f A[Catch:{ Exception -> 0x028e }] */
    /* JADX WARNING: Removed duplicated region for block: B:84:0x02af  */
    /* JADX WARNING: Removed duplicated region for block: B:91:0x02ce  */
    /* JADX WARNING: Removed duplicated region for block: B:92:0x02dd  */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public T call() throws java.lang.Exception {
        /*
            r13 = this;
            java.lang.String r0 = "\n"
            r1 = 1
            r2 = 0
            com.alibaba.sdk.android.oss.network.ExecutionContext r3 = r13.context     // Catch:{ Exception -> 0x028e }
            android.content.Context r3 = r3.getApplicationContext()     // Catch:{ Exception -> 0x028e }
            if (r3 == 0) goto L_0x0019
            com.alibaba.sdk.android.oss.network.ExecutionContext r3 = r13.context     // Catch:{ Exception -> 0x028e }
            android.content.Context r3 = r3.getApplicationContext()     // Catch:{ Exception -> 0x028e }
            java.lang.String r3 = com.alibaba.sdk.android.oss.common.utils.OSSUtils.buildBaseLogInfo(r3)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.OSSLog.logInfo(r3)     // Catch:{ Exception -> 0x028e }
        L_0x0019:
            java.lang.String r3 = "[call] - "
            com.alibaba.sdk.android.oss.common.OSSLog.logDebug(r3)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.network.ExecutionContext r3 = r13.context     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.model.OSSRequest r3 = r3.getRequest()     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r4 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.utils.OSSUtils.ensureRequestValid(r3, r4)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r4 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.utils.OSSUtils.signRequest(r4)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.network.ExecutionContext r4 = r13.context     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.network.CancellationHandler r4 = r4.getCancellationHandler()     // Catch:{ Exception -> 0x028e }
            boolean r4 = r4.isCancelled()     // Catch:{ Exception -> 0x028e }
            if (r4 != 0) goto L_0x0286
            okhttp3.Request$Builder r4 = new okhttp3.Request$Builder     // Catch:{ Exception -> 0x028e }
            r4.<init>()     // Catch:{ Exception -> 0x028e }
            boolean r5 = r3 instanceof com.alibaba.sdk.android.oss.model.ListBucketsRequest     // Catch:{ Exception -> 0x028e }
            if (r5 == 0) goto L_0x004a
            com.alibaba.sdk.android.oss.internal.RequestMessage r5 = r13.message     // Catch:{ Exception -> 0x028e }
            java.lang.String r5 = r5.buildOSSServiceURL()     // Catch:{ Exception -> 0x028e }
            goto L_0x0050
        L_0x004a:
            com.alibaba.sdk.android.oss.internal.RequestMessage r5 = r13.message     // Catch:{ Exception -> 0x028e }
            java.lang.String r5 = r5.buildCanonicalURL()     // Catch:{ Exception -> 0x028e }
        L_0x0050:
            okhttp3.Request$Builder r4 = r4.url(r5)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r5 = r13.message     // Catch:{ Exception -> 0x028e }
            java.util.Map r5 = r5.getHeaders()     // Catch:{ Exception -> 0x028e }
            java.util.Set r5 = r5.keySet()     // Catch:{ Exception -> 0x028e }
            java.util.Iterator r5 = r5.iterator()     // Catch:{ Exception -> 0x028e }
        L_0x0062:
            boolean r6 = r5.hasNext()     // Catch:{ Exception -> 0x028e }
            if (r6 == 0) goto L_0x007f
            java.lang.Object r6 = r5.next()     // Catch:{ Exception -> 0x028e }
            java.lang.String r6 = (java.lang.String) r6     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r7 = r13.message     // Catch:{ Exception -> 0x028e }
            java.util.Map r7 = r7.getHeaders()     // Catch:{ Exception -> 0x028e }
            java.lang.Object r7 = r7.get(r6)     // Catch:{ Exception -> 0x028e }
            java.lang.String r7 = (java.lang.String) r7     // Catch:{ Exception -> 0x028e }
            okhttp3.Request$Builder r4 = r4.addHeader(r6, r7)     // Catch:{ Exception -> 0x028e }
            goto L_0x0062
        L_0x007f:
            com.alibaba.sdk.android.oss.internal.RequestMessage r5 = r13.message     // Catch:{ Exception -> 0x028e }
            java.util.Map r5 = r5.getHeaders()     // Catch:{ Exception -> 0x028e }
            java.lang.String r6 = "Content-Type"
            java.lang.Object r5 = r5.get(r6)     // Catch:{ Exception -> 0x028e }
            java.lang.String r5 = (java.lang.String) r5     // Catch:{ Exception -> 0x028e }
            java.lang.StringBuilder r6 = new java.lang.StringBuilder     // Catch:{ Exception -> 0x028e }
            r6.<init>()     // Catch:{ Exception -> 0x028e }
            java.lang.String r7 = "request method = "
            r6.append(r7)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r7 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.HttpMethod r7 = r7.getMethod()     // Catch:{ Exception -> 0x028e }
            r6.append(r7)     // Catch:{ Exception -> 0x028e }
            java.lang.String r6 = r6.toString()     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.OSSLog.logDebug(r6)     // Catch:{ Exception -> 0x028e }
            int[] r6 = com.alibaba.sdk.android.oss.network.OSSRequestTask.AnonymousClass1.$SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r7 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.HttpMethod r7 = r7.getMethod()     // Catch:{ Exception -> 0x028e }
            int r7 = r7.ordinal()     // Catch:{ Exception -> 0x028e }
            r6 = r6[r7]     // Catch:{ Exception -> 0x028e }
            r7 = 0
            if (r6 == r1) goto L_0x00d8
            r8 = 2
            if (r6 == r8) goto L_0x00d8
            r5 = 3
            if (r6 == r5) goto L_0x00d2
            r5 = 4
            if (r6 == r5) goto L_0x00cc
            r5 = 5
            if (r6 == r5) goto L_0x00c6
            goto L_0x01b2
        L_0x00c6:
            okhttp3.Request$Builder r4 = r4.delete()     // Catch:{ Exception -> 0x028e }
            goto L_0x01b2
        L_0x00cc:
            okhttp3.Request$Builder r4 = r4.head()     // Catch:{ Exception -> 0x028e }
            goto L_0x01b2
        L_0x00d2:
            okhttp3.Request$Builder r4 = r4.get()     // Catch:{ Exception -> 0x028e }
            goto L_0x01b2
        L_0x00d8:
            if (r5 == 0) goto L_0x00dc
            r6 = r1
            goto L_0x00dd
        L_0x00dc:
            r6 = r7
        L_0x00dd:
            java.lang.String r8 = "Content type can't be null when upload!"
            com.alibaba.sdk.android.oss.common.utils.OSSUtils.assertTrue(r6, r8)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r6 = r13.message     // Catch:{ Exception -> 0x028e }
            byte[] r6 = r6.getUploadData()     // Catch:{ Exception -> 0x028e }
            r8 = 0
            if (r6 == 0) goto L_0x0102
            java.io.ByteArrayInputStream r6 = new java.io.ByteArrayInputStream     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            byte[] r8 = r8.getUploadData()     // Catch:{ Exception -> 0x028e }
            r6.<init>(r8)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            byte[] r8 = r8.getUploadData()     // Catch:{ Exception -> 0x028e }
            int r8 = r8.length     // Catch:{ Exception -> 0x028e }
            long r8 = (long) r8     // Catch:{ Exception -> 0x028e }
        L_0x00ff:
            r11 = r8
            r8 = r2
            goto L_0x014b
        L_0x0102:
            com.alibaba.sdk.android.oss.internal.RequestMessage r6 = r13.message     // Catch:{ Exception -> 0x028e }
            java.lang.String r6 = r6.getUploadFilePath()     // Catch:{ Exception -> 0x028e }
            if (r6 == 0) goto L_0x012d
            java.io.File r6 = new java.io.File     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r10 = r13.message     // Catch:{ Exception -> 0x028e }
            java.lang.String r10 = r10.getUploadFilePath()     // Catch:{ Exception -> 0x028e }
            r6.<init>(r10)     // Catch:{ Exception -> 0x028e }
            java.io.FileInputStream r10 = new java.io.FileInputStream     // Catch:{ Exception -> 0x028e }
            r10.<init>(r6)     // Catch:{ Exception -> 0x028e }
            long r11 = r6.length()     // Catch:{ Exception -> 0x028e }
            int r6 = (r11 > r8 ? 1 : (r11 == r8 ? 0 : -1))
            if (r6 <= 0) goto L_0x0125
            r8 = r2
            r6 = r10
            goto L_0x014b
        L_0x0125:
            com.alibaba.sdk.android.oss.ClientException r0 = new com.alibaba.sdk.android.oss.ClientException     // Catch:{ Exception -> 0x028e }
            java.lang.String r3 = "the length of file is 0!"
            r0.<init>((java.lang.String) r3)     // Catch:{ Exception -> 0x028e }
            throw r0     // Catch:{ Exception -> 0x028e }
        L_0x012d:
            com.alibaba.sdk.android.oss.internal.RequestMessage r6 = r13.message     // Catch:{ Exception -> 0x028e }
            java.io.InputStream r6 = r6.getContent()     // Catch:{ Exception -> 0x028e }
            if (r6 == 0) goto L_0x0142
            com.alibaba.sdk.android.oss.internal.RequestMessage r6 = r13.message     // Catch:{ Exception -> 0x028e }
            java.io.InputStream r6 = r6.getContent()     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            long r8 = r8.getContentLength()     // Catch:{ Exception -> 0x028e }
            goto L_0x00ff
        L_0x0142:
            com.alibaba.sdk.android.oss.internal.RequestMessage r6 = r13.message     // Catch:{ Exception -> 0x028e }
            java.lang.String r6 = r6.getStringBody()     // Catch:{ Exception -> 0x028e }
            r11 = r8
            r8 = r6
            r6 = r2
        L_0x014b:
            if (r6 == 0) goto L_0x017f
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            boolean r8 = r8.isCheckCRC64()     // Catch:{ Exception -> 0x028e }
            if (r8 == 0) goto L_0x0160
            java.util.zip.CheckedInputStream r8 = new java.util.zip.CheckedInputStream     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.utils.CRC64 r9 = new com.alibaba.sdk.android.oss.common.utils.CRC64     // Catch:{ Exception -> 0x028e }
            r9.<init>()     // Catch:{ Exception -> 0x028e }
            r8.<init>(r6, r9)     // Catch:{ Exception -> 0x028e }
            r6 = r8
        L_0x0160:
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            r8.setContent(r6)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            r8.setContentLength(r11)     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.internal.RequestMessage r8 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.HttpMethod r8 = r8.getMethod()     // Catch:{ Exception -> 0x028e }
            java.lang.String r8 = r8.toString()     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.network.ExecutionContext r9 = r13.context     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.network.ProgressTouchableRequestBody r5 = com.alibaba.sdk.android.oss.network.NetworkProgressHelper.addProgressRequestBody(r6, r11, r5, r9)     // Catch:{ Exception -> 0x028e }
            okhttp3.Request$Builder r4 = r4.method(r8, r5)     // Catch:{ Exception -> 0x028e }
            goto L_0x01b2
        L_0x017f:
            if (r8 == 0) goto L_0x019e
            com.alibaba.sdk.android.oss.internal.RequestMessage r6 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.HttpMethod r6 = r6.getMethod()     // Catch:{ Exception -> 0x028e }
            java.lang.String r6 = r6.toString()     // Catch:{ Exception -> 0x028e }
            okhttp3.MediaType r5 = okhttp3.MediaType.parse(r5)     // Catch:{ Exception -> 0x028e }
            java.lang.String r9 = "UTF-8"
            byte[] r8 = r8.getBytes(r9)     // Catch:{ Exception -> 0x028e }
            okhttp3.RequestBody r5 = okhttp3.RequestBody.create(r5, r8)     // Catch:{ Exception -> 0x028e }
            okhttp3.Request$Builder r4 = r4.method(r6, r5)     // Catch:{ Exception -> 0x028e }
            goto L_0x01b2
        L_0x019e:
            com.alibaba.sdk.android.oss.internal.RequestMessage r5 = r13.message     // Catch:{ Exception -> 0x028e }
            com.alibaba.sdk.android.oss.common.HttpMethod r5 = r5.getMethod()     // Catch:{ Exception -> 0x028e }
            java.lang.String r5 = r5.toString()     // Catch:{ Exception -> 0x028e }
            byte[] r6 = new byte[r7]     // Catch:{ Exception -> 0x028e }
            okhttp3.RequestBody r6 = okhttp3.RequestBody.create(r2, r6)     // Catch:{ Exception -> 0x028e }
            okhttp3.Request$Builder r4 = r4.method(r5, r6)     // Catch:{ Exception -> 0x028e }
        L_0x01b2:
            okhttp3.Request r4 = r4.build()     // Catch:{ Exception -> 0x028e }
            boolean r3 = r3 instanceof com.alibaba.sdk.android.oss.model.GetObjectRequest     // Catch:{ Exception -> 0x0283 }
            if (r3 == 0) goto L_0x01c9
            okhttp3.OkHttpClient r3 = r13.client     // Catch:{ Exception -> 0x0283 }
            com.alibaba.sdk.android.oss.network.ExecutionContext r5 = r13.context     // Catch:{ Exception -> 0x0283 }
            okhttp3.OkHttpClient r3 = com.alibaba.sdk.android.oss.network.NetworkProgressHelper.addProgressResponseListener(r3, r5)     // Catch:{ Exception -> 0x0283 }
            r13.client = r3     // Catch:{ Exception -> 0x0283 }
            java.lang.String r3 = "getObject"
            com.alibaba.sdk.android.oss.common.OSSLog.logDebug(r3)     // Catch:{ Exception -> 0x0283 }
        L_0x01c9:
            okhttp3.OkHttpClient r3 = r13.client     // Catch:{ Exception -> 0x0283 }
            boolean r5 = r3 instanceof okhttp3.OkHttpClient     // Catch:{ Exception -> 0x0283 }
            if (r5 != 0) goto L_0x01d4
            okhttp3.Call r3 = r3.newCall(r4)     // Catch:{ Exception -> 0x0283 }
            goto L_0x01da
        L_0x01d4:
            okhttp3.OkHttpClient r3 = (okhttp3.OkHttpClient) r3     // Catch:{ Exception -> 0x0283 }
            okhttp3.Call r3 = com.bonree.sdk.agent.engine.external.OkHttp3Instrumentation.newCall(r3, r4)     // Catch:{ Exception -> 0x0283 }
        L_0x01da:
            com.alibaba.sdk.android.oss.network.ExecutionContext r5 = r13.context     // Catch:{ Exception -> 0x0281 }
            com.alibaba.sdk.android.oss.network.CancellationHandler r5 = r5.getCancellationHandler()     // Catch:{ Exception -> 0x0281 }
            r5.setCall(r3)     // Catch:{ Exception -> 0x0281 }
            okhttp3.Response r5 = r3.execute()     // Catch:{ Exception -> 0x0281 }
            boolean r6 = com.alibaba.sdk.android.oss.common.OSSLog.isEnableLog()     // Catch:{ Exception -> 0x0281 }
            if (r6 == 0) goto L_0x0279
            okhttp3.Headers r6 = r5.headers()     // Catch:{ Exception -> 0x0281 }
            java.util.Map r6 = r6.toMultimap()     // Catch:{ Exception -> 0x0281 }
            java.lang.StringBuilder r8 = new java.lang.StringBuilder     // Catch:{ Exception -> 0x0281 }
            r8.<init>()     // Catch:{ Exception -> 0x0281 }
            java.lang.String r9 = "response:---------------------\n"
            r8.append(r9)     // Catch:{ Exception -> 0x0281 }
            java.lang.StringBuilder r9 = new java.lang.StringBuilder     // Catch:{ Exception -> 0x0281 }
            r9.<init>()     // Catch:{ Exception -> 0x0281 }
            java.lang.String r10 = "response code: "
            r9.append(r10)     // Catch:{ Exception -> 0x0281 }
            int r10 = r5.code()     // Catch:{ Exception -> 0x0281 }
            r9.append(r10)     // Catch:{ Exception -> 0x0281 }
            java.lang.String r10 = " for url: "
            r9.append(r10)     // Catch:{ Exception -> 0x0281 }
            okhttp3.HttpUrl r10 = r4.url()     // Catch:{ Exception -> 0x0281 }
            r9.append(r10)     // Catch:{ Exception -> 0x0281 }
            r9.append(r0)     // Catch:{ Exception -> 0x0281 }
            java.lang.String r9 = r9.toString()     // Catch:{ Exception -> 0x0281 }
            r8.append(r9)     // Catch:{ Exception -> 0x0281 }
            java.util.Set r9 = r6.keySet()     // Catch:{ Exception -> 0x0281 }
            java.util.Iterator r9 = r9.iterator()     // Catch:{ Exception -> 0x0281 }
        L_0x022e:
            boolean r10 = r9.hasNext()     // Catch:{ Exception -> 0x0281 }
            if (r10 == 0) goto L_0x0272
            java.lang.Object r10 = r9.next()     // Catch:{ Exception -> 0x0281 }
            java.lang.String r10 = (java.lang.String) r10     // Catch:{ Exception -> 0x0281 }
            java.lang.StringBuilder r11 = new java.lang.StringBuilder     // Catch:{ Exception -> 0x0281 }
            r11.<init>()     // Catch:{ Exception -> 0x0281 }
            java.lang.String r12 = "responseHeader ["
            r11.append(r12)     // Catch:{ Exception -> 0x0281 }
            r11.append(r10)     // Catch:{ Exception -> 0x0281 }
            java.lang.String r12 = "]: "
            r11.append(r12)     // Catch:{ Exception -> 0x0281 }
            java.lang.String r11 = r11.toString()     // Catch:{ Exception -> 0x0281 }
            r8.append(r11)     // Catch:{ Exception -> 0x0281 }
            java.lang.StringBuilder r11 = new java.lang.StringBuilder     // Catch:{ Exception -> 0x0281 }
            r11.<init>()     // Catch:{ Exception -> 0x0281 }
            java.lang.Object r10 = r6.get(r10)     // Catch:{ Exception -> 0x0281 }
            java.util.List r10 = (java.util.List) r10     // Catch:{ Exception -> 0x0281 }
            java.lang.Object r10 = r10.get(r7)     // Catch:{ Exception -> 0x0281 }
            java.lang.String r10 = (java.lang.String) r10     // Catch:{ Exception -> 0x0281 }
            r11.append(r10)     // Catch:{ Exception -> 0x0281 }
            r11.append(r0)     // Catch:{ Exception -> 0x0281 }
            java.lang.String r10 = r11.toString()     // Catch:{ Exception -> 0x0281 }
            r8.append(r10)     // Catch:{ Exception -> 0x0281 }
            goto L_0x022e
        L_0x0272:
            java.lang.String r0 = r8.toString()     // Catch:{ Exception -> 0x0281 }
            com.alibaba.sdk.android.oss.common.OSSLog.logDebug(r0)     // Catch:{ Exception -> 0x0281 }
        L_0x0279:
            com.alibaba.sdk.android.oss.internal.RequestMessage r0 = r13.message     // Catch:{ Exception -> 0x0281 }
            com.alibaba.sdk.android.oss.internal.ResponseMessage r0 = r13.buildResponseMessage(r0, r5)     // Catch:{ Exception -> 0x0281 }
            r5 = r2
            goto L_0x02bc
        L_0x0281:
            r0 = move-exception
            goto L_0x0291
        L_0x0283:
            r0 = move-exception
            r3 = r2
            goto L_0x0291
        L_0x0286:
            java.io.InterruptedIOException r0 = new java.io.InterruptedIOException     // Catch:{ Exception -> 0x028e }
            java.lang.String r3 = "This task is cancelled!"
            r0.<init>(r3)     // Catch:{ Exception -> 0x028e }
            throw r0     // Catch:{ Exception -> 0x028e }
        L_0x028e:
            r0 = move-exception
            r3 = r2
            r4 = r3
        L_0x0291:
            java.lang.StringBuilder r5 = new java.lang.StringBuilder
            r5.<init>()
            java.lang.String r6 = "Encounter local execpiton: "
            r5.append(r6)
            java.lang.String r6 = r0.toString()
            r5.append(r6)
            java.lang.String r5 = r5.toString()
            com.alibaba.sdk.android.oss.common.OSSLog.logError(r5)
            boolean r5 = com.alibaba.sdk.android.oss.common.OSSLog.isEnableLog()
            if (r5 == 0) goto L_0x02b2
            r0.printStackTrace()
        L_0x02b2:
            com.alibaba.sdk.android.oss.ClientException r5 = new com.alibaba.sdk.android.oss.ClientException
            java.lang.String r6 = r0.getMessage()
            r5.<init>(r6, r0)
            r0 = r2
        L_0x02bc:
            if (r5 != 0) goto L_0x02dd
            int r6 = r0.getStatusCode()
            r7 = 203(0xcb, float:2.84E-43)
            if (r6 == r7) goto L_0x02ce
            int r6 = r0.getStatusCode()
            r7 = 300(0x12c, float:4.2E-43)
            if (r6 < r7) goto L_0x02dd
        L_0x02ce:
            java.lang.String r4 = r4.method()
            java.lang.String r5 = "HEAD"
            boolean r4 = r4.equals(r5)
            com.alibaba.sdk.android.oss.ServiceException r5 = com.alibaba.sdk.android.oss.internal.ResponseParsers.parseResponseErrorXML(r0, r4)
            goto L_0x0307
        L_0x02dd:
            if (r5 != 0) goto L_0x0307
            com.alibaba.sdk.android.oss.internal.ResponseParser<T> r4 = r13.responseParser     // Catch:{ IOException -> 0x02fd }
            com.alibaba.sdk.android.oss.model.OSSResult r4 = r4.parse(r0)     // Catch:{ IOException -> 0x02fd }
            com.alibaba.sdk.android.oss.network.ExecutionContext r5 = r13.context     // Catch:{ IOException -> 0x02fd }
            com.alibaba.sdk.android.oss.callback.OSSCompletedCallback r5 = r5.getCompletedCallback()     // Catch:{ IOException -> 0x02fd }
            if (r5 == 0) goto L_0x02fc
            com.alibaba.sdk.android.oss.network.ExecutionContext r5 = r13.context     // Catch:{ IOException -> 0x02fd }
            com.alibaba.sdk.android.oss.callback.OSSCompletedCallback r5 = r5.getCompletedCallback()     // Catch:{ IOException -> 0x02fd }
            com.alibaba.sdk.android.oss.network.ExecutionContext r6 = r13.context     // Catch:{ IOException -> 0x02fd }
            com.alibaba.sdk.android.oss.model.OSSRequest r6 = r6.getRequest()     // Catch:{ IOException -> 0x02fd }
            r5.onSuccess(r6, r4)     // Catch:{ IOException -> 0x02fd }
        L_0x02fc:
            return r4
        L_0x02fd:
            r4 = move-exception
            com.alibaba.sdk.android.oss.ClientException r5 = new com.alibaba.sdk.android.oss.ClientException
            java.lang.String r6 = r4.getMessage()
            r5.<init>(r6, r4)
        L_0x0307:
            if (r3 == 0) goto L_0x030f
            boolean r3 = r3.isCanceled()
            if (r3 != 0) goto L_0x031b
        L_0x030f:
            com.alibaba.sdk.android.oss.network.ExecutionContext r3 = r13.context
            com.alibaba.sdk.android.oss.network.CancellationHandler r3 = r3.getCancellationHandler()
            boolean r3 = r3.isCancelled()
            if (r3 == 0) goto L_0x032b
        L_0x031b:
            com.alibaba.sdk.android.oss.ClientException r3 = new com.alibaba.sdk.android.oss.ClientException
            java.lang.Throwable r4 = r5.getCause()
            java.lang.Boolean r5 = java.lang.Boolean.valueOf(r1)
            java.lang.String r6 = "Task is cancelled!"
            r3.<init>(r6, r4, r5)
            r5 = r3
        L_0x032b:
            com.alibaba.sdk.android.oss.internal.OSSRetryHandler r3 = r13.retryHandler
            int r4 = r13.currentRetryCount
            com.alibaba.sdk.android.oss.internal.OSSRetryType r3 = r3.shouldRetry(r5, r4)
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            java.lang.String r6 = "[run] - retry, retry type: "
            r4.append(r6)
            r4.append(r3)
            java.lang.String r4 = r4.toString()
            com.alibaba.sdk.android.oss.common.OSSLog.logError(r4)
            com.alibaba.sdk.android.oss.internal.OSSRetryType r4 = com.alibaba.sdk.android.oss.internal.OSSRetryType.OSSRetryTypeShouldRetry
            if (r3 != r4) goto L_0x037d
            int r0 = r13.currentRetryCount
            int r0 = r0 + r1
            r13.currentRetryCount = r0
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSRetryCallback r0 = r0.getRetryCallback()
            if (r0 == 0) goto L_0x0361
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSRetryCallback r0 = r0.getRetryCallback()
            r0.onRetryCallback()
        L_0x0361:
            com.alibaba.sdk.android.oss.internal.OSSRetryHandler r0 = r13.retryHandler     // Catch:{ InterruptedException -> 0x036d }
            int r1 = r13.currentRetryCount     // Catch:{ InterruptedException -> 0x036d }
            long r0 = r0.timeInterval(r1, r3)     // Catch:{ InterruptedException -> 0x036d }
            java.lang.Thread.sleep(r0)     // Catch:{ InterruptedException -> 0x036d }
            goto L_0x0378
        L_0x036d:
            r0 = move-exception
            java.lang.Thread r1 = java.lang.Thread.currentThread()
            r1.interrupt()
            r0.printStackTrace()
        L_0x0378:
            com.alibaba.sdk.android.oss.model.OSSResult r0 = r13.call()
            return r0
        L_0x037d:
            com.alibaba.sdk.android.oss.internal.OSSRetryType r4 = com.alibaba.sdk.android.oss.internal.OSSRetryType.OSSRetryTypeShouldFixedTimeSkewedAndRetry
            if (r3 != r4) goto L_0x03d3
            if (r0 == 0) goto L_0x03b8
            java.util.Map r0 = r0.getHeaders()
            java.lang.String r2 = "Date"
            java.lang.Object r0 = r0.get(r2)
            java.lang.String r0 = (java.lang.String) r0
            java.util.Date r3 = com.alibaba.sdk.android.oss.common.utils.DateUtil.parseRfc822Date(r0)     // Catch:{ Exception -> 0x03a4 }
            long r3 = r3.getTime()     // Catch:{ Exception -> 0x03a4 }
            com.alibaba.sdk.android.oss.common.utils.DateUtil.setCurrentServerTime(r3)     // Catch:{ Exception -> 0x03a4 }
            com.alibaba.sdk.android.oss.internal.RequestMessage r3 = r13.message     // Catch:{ Exception -> 0x03a4 }
            java.util.Map r3 = r3.getHeaders()     // Catch:{ Exception -> 0x03a4 }
            r3.put(r2, r0)     // Catch:{ Exception -> 0x03a4 }
            goto L_0x03b8
        L_0x03a4:
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r3 = "[error] - synchronize time, reponseDate:"
            r2.append(r3)
            r2.append(r0)
            java.lang.String r0 = r2.toString()
            com.alibaba.sdk.android.oss.common.OSSLog.logError(r0)
        L_0x03b8:
            int r0 = r13.currentRetryCount
            int r0 = r0 + r1
            r13.currentRetryCount = r0
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSRetryCallback r0 = r0.getRetryCallback()
            if (r0 == 0) goto L_0x03ce
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSRetryCallback r0 = r0.getRetryCallback()
            r0.onRetryCallback()
        L_0x03ce:
            com.alibaba.sdk.android.oss.model.OSSResult r0 = r13.call()
            return r0
        L_0x03d3:
            boolean r0 = r5 instanceof com.alibaba.sdk.android.oss.ClientException
            if (r0 == 0) goto L_0x03f2
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSCompletedCallback r0 = r0.getCompletedCallback()
            if (r0 == 0) goto L_0x040c
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSCompletedCallback r0 = r0.getCompletedCallback()
            com.alibaba.sdk.android.oss.network.ExecutionContext r1 = r13.context
            com.alibaba.sdk.android.oss.model.OSSRequest r1 = r1.getRequest()
            r3 = r5
            com.alibaba.sdk.android.oss.ClientException r3 = (com.alibaba.sdk.android.oss.ClientException) r3
            r0.onFailure(r1, r3, r2)
            goto L_0x040c
        L_0x03f2:
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSCompletedCallback r0 = r0.getCompletedCallback()
            if (r0 == 0) goto L_0x040c
            com.alibaba.sdk.android.oss.network.ExecutionContext r0 = r13.context
            com.alibaba.sdk.android.oss.callback.OSSCompletedCallback r0 = r0.getCompletedCallback()
            com.alibaba.sdk.android.oss.network.ExecutionContext r1 = r13.context
            com.alibaba.sdk.android.oss.model.OSSRequest r1 = r1.getRequest()
            r3 = r5
            com.alibaba.sdk.android.oss.ServiceException r3 = (com.alibaba.sdk.android.oss.ServiceException) r3
            r0.onFailure(r1, r2, r3)
        L_0x040c:
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.alibaba.sdk.android.oss.network.OSSRequestTask.call():com.alibaba.sdk.android.oss.model.OSSResult");
    }

    /* renamed from: com.alibaba.sdk.android.oss.network.OSSRequestTask$1  reason: invalid class name */
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod;

        /* JADX WARNING: Can't wrap try/catch for region: R(12:0|1|2|3|4|5|6|7|8|9|10|12) */
        /* JADX WARNING: Code restructure failed: missing block: B:13:?, code lost:
            return;
         */
        /* JADX WARNING: Failed to process nested try/catch */
        /* JADX WARNING: Missing exception handler attribute for start block: B:3:0x0012 */
        /* JADX WARNING: Missing exception handler attribute for start block: B:5:0x001d */
        /* JADX WARNING: Missing exception handler attribute for start block: B:7:0x0028 */
        /* JADX WARNING: Missing exception handler attribute for start block: B:9:0x0033 */
        static {
            /*
                com.alibaba.sdk.android.oss.common.HttpMethod[] r0 = com.alibaba.sdk.android.oss.common.HttpMethod.values()
                int r0 = r0.length
                int[] r0 = new int[r0]
                $SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod = r0
                com.alibaba.sdk.android.oss.common.HttpMethod r1 = com.alibaba.sdk.android.oss.common.HttpMethod.POST     // Catch:{ NoSuchFieldError -> 0x0012 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0012 }
                r2 = 1
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0012 }
            L_0x0012:
                int[] r0 = $SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod     // Catch:{ NoSuchFieldError -> 0x001d }
                com.alibaba.sdk.android.oss.common.HttpMethod r1 = com.alibaba.sdk.android.oss.common.HttpMethod.PUT     // Catch:{ NoSuchFieldError -> 0x001d }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x001d }
                r2 = 2
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x001d }
            L_0x001d:
                int[] r0 = $SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod     // Catch:{ NoSuchFieldError -> 0x0028 }
                com.alibaba.sdk.android.oss.common.HttpMethod r1 = com.alibaba.sdk.android.oss.common.HttpMethod.GET     // Catch:{ NoSuchFieldError -> 0x0028 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0028 }
                r2 = 3
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0028 }
            L_0x0028:
                int[] r0 = $SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod     // Catch:{ NoSuchFieldError -> 0x0033 }
                com.alibaba.sdk.android.oss.common.HttpMethod r1 = com.alibaba.sdk.android.oss.common.HttpMethod.HEAD     // Catch:{ NoSuchFieldError -> 0x0033 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0033 }
                r2 = 4
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0033 }
            L_0x0033:
                int[] r0 = $SwitchMap$com$alibaba$sdk$android$oss$common$HttpMethod     // Catch:{ NoSuchFieldError -> 0x003e }
                com.alibaba.sdk.android.oss.common.HttpMethod r1 = com.alibaba.sdk.android.oss.common.HttpMethod.DELETE     // Catch:{ NoSuchFieldError -> 0x003e }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x003e }
                r2 = 5
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x003e }
            L_0x003e:
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.alibaba.sdk.android.oss.network.OSSRequestTask.AnonymousClass1.<clinit>():void");
        }
    }

    private ResponseMessage buildResponseMessage(RequestMessage requestMessage, Response response) {
        ResponseMessage responseMessage = new ResponseMessage();
        responseMessage.setRequest(requestMessage);
        responseMessage.setResponse(response);
        HashMap hashMap = new HashMap();
        Headers headers = response.headers();
        for (int i = 0; i < headers.size(); i++) {
            hashMap.put(headers.name(i), headers.value(i));
        }
        responseMessage.setHeaders(hashMap);
        responseMessage.setStatusCode(response.code());
        responseMessage.setContentLength(response.body().contentLength());
        responseMessage.setContent(response.body().byteStream());
        return responseMessage;
    }
}
