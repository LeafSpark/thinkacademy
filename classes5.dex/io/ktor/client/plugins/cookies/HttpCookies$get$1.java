package io.ktor.client.plugins.cookies;

import io.ktor.http.Url;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;

@Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "io.ktor.client.plugins.cookies.HttpCookies", f = "HttpCookies.kt", i = {0, 0}, l = {36, 37}, m = "get", n = {"this", "requestUrl"}, s = {"L$0", "L$1"})
/* compiled from: HttpCookies.kt */
final class HttpCookies$get$1 extends ContinuationImpl {
    Object L$0;
    Object L$1;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ HttpCookies this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    HttpCookies$get$1(HttpCookies httpCookies, Continuation<? super HttpCookies$get$1> continuation) {
        super(continuation);
        this.this$0 = httpCookies;
    }

    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.get((Url) null, (Continuation) this);
    }
}
