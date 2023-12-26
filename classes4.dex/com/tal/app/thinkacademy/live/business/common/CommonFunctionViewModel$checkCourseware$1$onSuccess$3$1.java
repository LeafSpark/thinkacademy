package com.tal.app.thinkacademy.live.business.common;

import com.tal.app.thinkacademy.lib.logger.XesLog;
import com.tal.app.thinkacademy.live.core.interfaces.ExitLiveRoom;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u0002\n\u0000\u0010\u0000\u001a\u00020\u0001H\n¢\u0006\u0002\b\u0002"}, d2 = {"<anonymous>", "", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: CommonFunctionViewModel.kt */
final class CommonFunctionViewModel$checkCourseware$1$onSuccess$3$1 extends Lambda implements Function0<Unit> {
    final /* synthetic */ CommonFunctionViewModel this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    CommonFunctionViewModel$checkCourseware$1$onSuccess$3$1(CommonFunctionViewModel commonFunctionViewModel) {
        super(0);
        this.this$0 = commonFunctionViewModel;
    }

    public final void invoke() {
        XesLog.a(CommonFunctionViewModel.TAG, "课件异常，用户点击提示按钮退出课堂");
        this.this$0.getProvider().backLiveRoom(ExitLiveRoom.COURSE_WARE_MISMATCH);
    }
}
