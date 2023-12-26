package com.tal.app.thinkacademy.live.abilitypack.coincenter.bean;

import kotlin.Metadata;

@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\b\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\t\u0010\u0007\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\f\u001a\u00020\u0003HÖ\u0001J\t\u0010\r\u001a\u00020\u000eHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u000f"}, d2 = {"Lcom/tal/app/thinkacademy/live/abilitypack/coincenter/bean/CoinReqBody;", "", "planId", "", "(I)V", "getPlanId", "()I", "component1", "copy", "equals", "", "other", "hashCode", "toString", "", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: CoinReqBody.kt */
public final class CoinReqBody {
    private final int planId;

    public static /* synthetic */ CoinReqBody copy$default(CoinReqBody coinReqBody, int i, int i2, Object obj) {
        if ((i2 & 1) != 0) {
            i = coinReqBody.planId;
        }
        return coinReqBody.copy(i);
    }

    public final int component1() {
        return this.planId;
    }

    public final CoinReqBody copy(int i) {
        return new CoinReqBody(i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof CoinReqBody) && this.planId == ((CoinReqBody) obj).planId;
    }

    public int hashCode() {
        return this.planId;
    }

    public String toString() {
        return "CoinReqBody(planId=" + this.planId + ')';
    }

    public CoinReqBody(int i) {
        this.planId = i;
    }

    public final int getPlanId() {
        return this.planId;
    }
}