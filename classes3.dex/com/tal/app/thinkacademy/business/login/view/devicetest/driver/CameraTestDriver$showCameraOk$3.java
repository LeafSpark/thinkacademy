package com.tal.app.thinkacademy.business.login.view.devicetest.driver;

import android.content.Context;
import com.tal.app.thinkacademy.business.login.R;
import com.tal.app.thinkacademy.business.login.view.customview.CountdownTextView;
import com.tal.app.thinkacademy.lib.logger.XesLog;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\t\n\u0000\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\n¢\u0006\u0002\b\u0004"}, d2 = {"<anonymous>", "", "current", "", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: CameraTestDriver.kt */
final class CameraTestDriver$showCameraOk$3 extends Lambda implements Function1<Long, Unit> {
    final /* synthetic */ CameraTestDriver this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    CameraTestDriver$showCameraOk$3(CameraTestDriver cameraTestDriver) {
        super(1);
        this.this$0 = cameraTestDriver;
    }

    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke(((Number) obj).longValue());
        return Unit.INSTANCE;
    }

    public final void invoke(long j) {
        XesLog.it(CameraTestDriver.TAG, new Object[]{Intrinsics.stringPlus("成功倒计时：", Long.valueOf(j))});
        long j2 = j / ((long) 1000);
        Context context = this.this$0.getMDriverOwner().getContext();
        CountdownTextView access$getMTvCameraPassNext$p = this.this$0.mTvCameraPassNext;
        if (access$getMTvCameraPassNext$p != null) {
            access$getMTvCameraPassNext$p.setText(context.getString(R.string.next_test) + " (" + j2 + "s)");
        }
        if (j == 0) {
            XesLog.it(CameraTestDriver.TAG, new Object[]{"摄像头检测完成，倒计时结束，自动跳转下一项"});
            Function0<Unit> mFinishCallBlock = this.this$0.getMFinishCallBlock();
            if (mFinishCallBlock != null) {
                mFinishCallBlock.invoke();
            }
        }
    }
}