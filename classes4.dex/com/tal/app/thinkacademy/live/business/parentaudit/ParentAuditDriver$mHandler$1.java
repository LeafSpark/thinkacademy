package com.tal.app.thinkacademy.live.business.parentaudit;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.bonree.sdk.agent.engine.external.AsynchronousInstrumentation;
import com.tal.app.thinkacademy.live.business.emoji.bean.EmojiBean;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\u0017\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006"}, d2 = {"com/tal/app/thinkacademy/live/business/parentaudit/ParentAuditDriver$mHandler$1", "Landroid/os/Handler;", "handleMessage", "", "msg", "Landroid/os/Message;", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ParentAuditDriver.kt */
public final class ParentAuditDriver$mHandler$1 extends Handler {
    final /* synthetic */ ParentAuditDriver this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    ParentAuditDriver$mHandler$1(ParentAuditDriver parentAuditDriver, Looper looper) {
        super(looper);
        this.this$0 = parentAuditDriver;
    }

    public void handleMessage(Message message) {
        AsynchronousInstrumentation.handlerMessageBegin(this, message);
        Intrinsics.checkNotNullParameter(message, "msg");
        super.handleMessage(message);
        int i = message.what;
        if (i == 100) {
            this.this$0.showRaiseHand(false);
        } else if (i == 101) {
            this.this$0.showEmoji(false, (EmojiBean<?>) null);
        }
        AsynchronousInstrumentation.handlerMessageEnd();
    }
}