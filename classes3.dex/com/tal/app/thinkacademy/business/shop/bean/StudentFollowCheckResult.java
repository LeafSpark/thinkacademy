package com.tal.app.thinkacademy.business.shop.bean;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;

@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\b\u0018\u00002\u00020\u0001B\u000f\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\t\u0010\u0007\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\f\u001a\u00020\u0003HÖ\u0001J\t\u0010\r\u001a\u00020\u000eHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u000f"}, d2 = {"Lcom/tal/app/thinkacademy/business/shop/bean/StudentFollowCheckResult;", "", "status", "", "(I)V", "getStatus", "()I", "component1", "copy", "equals", "", "other", "hashCode", "toString", "", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: StudentFollowCheckResult.kt */
public final class StudentFollowCheckResult {
    private final int status;

    public StudentFollowCheckResult() {
        this(0, 1, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ StudentFollowCheckResult copy$default(StudentFollowCheckResult studentFollowCheckResult, int i, int i2, Object obj) {
        if ((i2 & 1) != 0) {
            i = studentFollowCheckResult.status;
        }
        return studentFollowCheckResult.copy(i);
    }

    public final int component1() {
        return this.status;
    }

    public final StudentFollowCheckResult copy(int i) {
        return new StudentFollowCheckResult(i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof StudentFollowCheckResult) && this.status == ((StudentFollowCheckResult) obj).status;
    }

    public int hashCode() {
        return this.status;
    }

    public String toString() {
        return "StudentFollowCheckResult(status=" + this.status + ')';
    }

    public StudentFollowCheckResult(int i) {
        this.status = i;
    }

    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public /* synthetic */ StudentFollowCheckResult(int i, int i2, DefaultConstructorMarker defaultConstructorMarker) {
        this((i2 & 1) != 0 ? 0 : i);
    }

    public final int getStatus() {
        return this.status;
    }
}
