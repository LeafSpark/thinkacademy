package io.ktor.client.request;

import io.ktor.http.URLBuilder;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n¢\u0006\u0002\b\u0003"}, d2 = {"<anonymous>", "", "Lio/ktor/http/URLBuilder;", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: HttpRequest.kt */
final class HttpRequestKt$invoke$2 extends Lambda implements Function1<URLBuilder, Unit> {
    public static final HttpRequestKt$invoke$2 INSTANCE = new HttpRequestKt$invoke$2();

    HttpRequestKt$invoke$2() {
        super(1);
    }

    public final void invoke(URLBuilder uRLBuilder) {
        Intrinsics.checkNotNullParameter(uRLBuilder, "$this$null");
    }

    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((URLBuilder) obj);
        return Unit.INSTANCE;
    }
}
