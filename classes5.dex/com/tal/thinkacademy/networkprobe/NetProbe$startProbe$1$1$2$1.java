package com.tal.thinkacademy.networkprobe;

import com.tal.thinkacademy.networkprobe.NetProbe;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u0002\n\u0000\u0010\u0000\u001a\u00020\u0001H\n¢\u0006\u0002\b\u0002"}, d2 = {"<anonymous>", "", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: NetProbe.kt */
final class NetProbe$startProbe$1$1$2$1 extends Lambda implements Function0<Unit> {
    final /* synthetic */ String $host;
    final /* synthetic */ NetProbe this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    NetProbe$startProbe$1$1$2$1(NetProbe netProbe, String str) {
        super(0);
        this.this$0 = netProbe;
        this.$host = str;
    }

    public final void invoke() {
        Function1<String, Unit> mCancelBlock$networkprobe_release;
        NetProbe.CallHolder access$getMHolder$p = this.this$0.mHolder;
        if (!(access$getMHolder$p == null || (mCancelBlock$networkprobe_release = access$getMHolder$p.getMCancelBlock$networkprobe_release()) == null)) {
            mCancelBlock$networkprobe_release.invoke(Intrinsics.stringPlus("当前准备执行 ", this.$host));
        }
        this.this$0.onProbeFinished();
    }
}
