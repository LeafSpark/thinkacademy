package com.tal.app.thinkacademy.business.shop.classdetail;

import com.tal.app.thinkacademy.business.shop.classdetail.dialog.PerfectInforDialog;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u0002\n\u0000\u0010\u0000\u001a\u00020\u0001H\n¢\u0006\u0002\b\u0002"}, d2 = {"<anonymous>", "", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: StudentInfo.kt */
final class StudentInfo$showPerfectInforDialog$1$1$dialog$1 extends Lambda implements Function0<Unit> {
    final /* synthetic */ StudentInfo this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    StudentInfo$showPerfectInforDialog$1$1$dialog$1(StudentInfo studentInfo) {
        super(0);
        this.this$0 = studentInfo;
    }

    public final void invoke() {
        PerfectInforDialog access$getMPerfectInforDialog$p = this.this$0.mPerfectInforDialog;
        if (access$getMPerfectInforDialog$p != null) {
            access$getMPerfectInforDialog$p.dismiss();
        }
    }
}
