package com.tal.app.thinkacademy.common.entity;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\b\u0018\u00002\u00020\u0001B\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u0006J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0005HÆ\u0003J!\u0010\r\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0015"}, d2 = {"Lcom/tal/app/thinkacademy/common/entity/SwitchLogin;", "", "header", "Lcom/tal/app/thinkacademy/common/entity/Header;", "data", "Lcom/tal/app/thinkacademy/common/entity/SwitchData;", "(Lcom/tal/app/thinkacademy/common/entity/Header;Lcom/tal/app/thinkacademy/common/entity/SwitchData;)V", "getData", "()Lcom/tal/app/thinkacademy/common/entity/SwitchData;", "getHeader", "()Lcom/tal/app/thinkacademy/common/entity/Header;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "common_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: SwitchLogin.kt */
public final class SwitchLogin {
    private final SwitchData data;
    private final Header header;

    public static /* synthetic */ SwitchLogin copy$default(SwitchLogin switchLogin, Header header2, SwitchData switchData, int i, Object obj) {
        if ((i & 1) != 0) {
            header2 = switchLogin.header;
        }
        if ((i & 2) != 0) {
            switchData = switchLogin.data;
        }
        return switchLogin.copy(header2, switchData);
    }

    public final Header component1() {
        return this.header;
    }

    public final SwitchData component2() {
        return this.data;
    }

    public final SwitchLogin copy(Header header2, SwitchData switchData) {
        return new SwitchLogin(header2, switchData);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof SwitchLogin)) {
            return false;
        }
        SwitchLogin switchLogin = (SwitchLogin) obj;
        return Intrinsics.areEqual(this.header, switchLogin.header) && Intrinsics.areEqual(this.data, switchLogin.data);
    }

    public int hashCode() {
        Header header2 = this.header;
        int i = 0;
        int hashCode = (header2 == null ? 0 : header2.hashCode()) * 31;
        SwitchData switchData = this.data;
        if (switchData != null) {
            i = switchData.hashCode();
        }
        return hashCode + i;
    }

    public String toString() {
        return "SwitchLogin(header=" + this.header + ", data=" + this.data + ')';
    }

    public SwitchLogin(Header header2, SwitchData switchData) {
        this.header = header2;
        this.data = switchData;
    }

    public final Header getHeader() {
        return this.header;
    }

    public final SwitchData getData() {
        return this.data;
    }
}
