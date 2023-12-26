package io.ktor.websocket;

import io.ktor.websocket.WebSocketDeflateExtension;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\u0010\u0000\u001a\u00020\u00012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003H\n¢\u0006\u0002\b\u0005"}, d2 = {"<anonymous>", "", "it", "", "Lio/ktor/websocket/WebSocketExtensionHeader;", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: WebSocketDeflateExtension.kt */
final class WebSocketDeflateExtension$Config$configureProtocols$1 extends Lambda implements Function1<List<WebSocketExtensionHeader>, Unit> {
    final /* synthetic */ Function1<List<WebSocketExtensionHeader>, Unit> $block;
    final /* synthetic */ WebSocketDeflateExtension.Config this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    WebSocketDeflateExtension$Config$configureProtocols$1(WebSocketDeflateExtension.Config config, Function1<? super List<WebSocketExtensionHeader>, Unit> function1) {
        super(1);
        this.this$0 = config;
        this.$block = function1;
    }

    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((List<WebSocketExtensionHeader>) (List) obj);
        return Unit.INSTANCE;
    }

    public final void invoke(List<WebSocketExtensionHeader> list) {
        Intrinsics.checkNotNullParameter(list, "it");
        this.this$0.getManualConfig$ktor_websockets().invoke(list);
        this.$block.invoke(list);
    }
}
