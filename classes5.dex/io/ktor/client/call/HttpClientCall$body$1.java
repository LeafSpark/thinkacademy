package io.ktor.client.call;

import io.ktor.util.reflect.TypeInfo;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;

@Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "io.ktor.client.call.HttpClientCall", f = "HttpClientCall.kt", i = {0, 0, 1, 1}, l = {84, 87}, m = "body", n = {"this", "info", "this", "info"}, s = {"L$0", "L$1", "L$0", "L$1"})
/* compiled from: HttpClientCall.kt */
final class HttpClientCall$body$1 extends ContinuationImpl {
    Object L$0;
    Object L$1;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ HttpClientCall this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    HttpClientCall$body$1(HttpClientCall httpClientCall, Continuation<? super HttpClientCall$body$1> continuation) {
        super(continuation);
        this.this$0 = httpClientCall;
    }

    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.body((TypeInfo) null, (Continuation) this);
    }
}
