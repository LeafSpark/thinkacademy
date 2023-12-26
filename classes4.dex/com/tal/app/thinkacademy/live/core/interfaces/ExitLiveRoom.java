package com.tal.app.thinkacademy.live.core.interfaces;

import kotlin.Metadata;

@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u000f\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/tal/app/thinkacademy/live/core/interfaces/ExitLiveRoom;", "", "value", "", "(Ljava/lang/String;ILjava/lang/String;)V", "getValue", "()Ljava/lang/String;", "NORMAL_EXIT", "KICK_OUT", "COURSE_WARE_MISMATCH", "bus_livebase_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ExitLiveRoom.kt */
public enum ExitLiveRoom {
    NORMAL_EXIT("正常退出"),
    KICK_OUT("被踢"),
    COURSE_WARE_MISMATCH("课件不匹配");
    
    private final String value;

    private ExitLiveRoom(String str) {
        this.value = str;
    }

    public final String getValue() {
        return this.value;
    }
}
