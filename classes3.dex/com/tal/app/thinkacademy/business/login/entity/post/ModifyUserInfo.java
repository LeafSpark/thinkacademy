package com.tal.app.thinkacademy.business.login.entity.post;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\b\u0018\u00002\u00020\u0001B\u000f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0002\u0010\u0004J\u000b\u0010\u0007\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\b\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\f\u001a\u00020\rHÖ\u0001J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u0010"}, d2 = {"Lcom/tal/app/thinkacademy/business/login/entity/post/ModifyUserInfo;", "", "data", "Lcom/tal/app/thinkacademy/business/login/entity/post/Data;", "(Lcom/tal/app/thinkacademy/business/login/entity/post/Data;)V", "getData", "()Lcom/tal/app/thinkacademy/business/login/entity/post/Data;", "component1", "copy", "equals", "", "other", "hashCode", "", "toString", "", "bus_login_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ModifyUserInfo.kt */
public final class ModifyUserInfo {
    private final Data data;

    public static /* synthetic */ ModifyUserInfo copy$default(ModifyUserInfo modifyUserInfo, Data data2, int i, Object obj) {
        if ((i & 1) != 0) {
            data2 = modifyUserInfo.data;
        }
        return modifyUserInfo.copy(data2);
    }

    public final Data component1() {
        return this.data;
    }

    public final ModifyUserInfo copy(Data data2) {
        return new ModifyUserInfo(data2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof ModifyUserInfo) && Intrinsics.areEqual((Object) this.data, (Object) ((ModifyUserInfo) obj).data);
    }

    public int hashCode() {
        Data data2 = this.data;
        if (data2 == null) {
            return 0;
        }
        return data2.hashCode();
    }

    public String toString() {
        return "ModifyUserInfo(data=" + this.data + ')';
    }

    public ModifyUserInfo(Data data2) {
        this.data = data2;
    }

    public final Data getData() {
        return this.data;
    }
}
