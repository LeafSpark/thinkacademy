package com.tal.app.thinkacademy.live.business.parentaudit;

import com.tal.app.thinkacademy.live.business.studentvideo.bean.StudentVideoBean;
import kotlin.Metadata;

@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0000\bf\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&J\u0018\u0010\u0006\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH&¨\u0006\u000b"}, d2 = {"Lcom/tal/app/thinkacademy/live/business/parentaudit/ParentAuditInterface;", "", "showChildInfo", "", "info", "Lcom/tal/app/thinkacademy/live/business/studentvideo/bean/StudentVideoBean$ListBean;", "showMicVolume", "uid", "", "volume", "", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ParentAuditInterface.kt */
public interface ParentAuditInterface {
    void showChildInfo(StudentVideoBean.ListBean listBean);

    void showMicVolume(long j, int i);
}
