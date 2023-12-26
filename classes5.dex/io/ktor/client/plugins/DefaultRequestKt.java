package io.ktor.client.plugins;

import io.ktor.client.HttpClientConfig;
import io.ktor.client.plugins.DefaultRequest;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\u001a\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u001a'\u0010\u0000\u001a\u00020\u0001*\u0006\u0012\u0002\b\u00030\u00022\u0017\u0010\u0003\u001a\u0013\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\u0004¢\u0006\u0002\b\u0006¨\u0006\u0007"}, d2 = {"defaultRequest", "", "Lio/ktor/client/HttpClientConfig;", "block", "Lkotlin/Function1;", "Lio/ktor/client/plugins/DefaultRequest$DefaultRequestBuilder;", "Lkotlin/ExtensionFunctionType;", "ktor-client-core"}, k = 2, mv = {1, 6, 0}, xi = 48)
/* compiled from: DefaultRequest.kt */
public final class DefaultRequestKt {
    public static final void defaultRequest(HttpClientConfig<?> httpClientConfig, Function1<? super DefaultRequest.DefaultRequestBuilder, Unit> function1) {
        Intrinsics.checkNotNullParameter(httpClientConfig, "<this>");
        Intrinsics.checkNotNullParameter(function1, "block");
        httpClientConfig.install((HttpClientPlugin<? extends TBuilder, TPlugin>) DefaultRequest.Plugin, (Function1<? super TBuilder, Unit>) new DefaultRequestKt$defaultRequest$1(function1));
    }
}
