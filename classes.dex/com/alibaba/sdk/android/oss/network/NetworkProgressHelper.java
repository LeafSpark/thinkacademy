package com.alibaba.sdk.android.oss.network;

import com.bonree.sdk.agent.engine.external.OkHttp3Instrumentation;
import java.io.IOException;
import java.io.InputStream;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Response;

public class NetworkProgressHelper {
    public static OkHttpClient addProgressResponseListener(OkHttpClient okHttpClient, final ExecutionContext executionContext) {
        OkHttpClient.Builder addNetworkInterceptor = okHttpClient.newBuilder().addNetworkInterceptor(new Interceptor() {
            public Response intercept(Interceptor.Chain chain) throws IOException {
                Response proceed = chain.proceed(chain.request());
                return proceed.newBuilder().body(new ProgressTouchableResponseBody(proceed.body(), executionContext)).build();
            }
        });
        return !(addNetworkInterceptor instanceof OkHttpClient.Builder) ? addNetworkInterceptor.build() : OkHttp3Instrumentation.builderInit(addNetworkInterceptor);
    }

    public static ProgressTouchableRequestBody addProgressRequestBody(InputStream inputStream, long j, String str, ExecutionContext executionContext) {
        return new ProgressTouchableRequestBody(inputStream, j, str, executionContext);
    }
}
