package com.tal.app.thinkacademy.business.shop.bean.request;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\b\u0018\u00002\u00020\u0001B\u0011\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0002\u0010\u0004J\u000b\u0010\u0007\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\b\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\f\u001a\u00020\rHÖ\u0001J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u000f"}, d2 = {"Lcom/tal/app/thinkacademy/business/shop/bean/request/GradeAggregateRequestHead;", "", "pageId", "", "(Ljava/lang/String;)V", "getPageId", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "hashCode", "", "toString", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: GradeAggregateRequestHead.kt */
public final class GradeAggregateRequestHead {
    private final String pageId;

    public GradeAggregateRequestHead() {
        this((String) null, 1, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ GradeAggregateRequestHead copy$default(GradeAggregateRequestHead gradeAggregateRequestHead, String str, int i, Object obj) {
        if ((i & 1) != 0) {
            str = gradeAggregateRequestHead.pageId;
        }
        return gradeAggregateRequestHead.copy(str);
    }

    public final String component1() {
        return this.pageId;
    }

    public final GradeAggregateRequestHead copy(String str) {
        return new GradeAggregateRequestHead(str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof GradeAggregateRequestHead) && Intrinsics.areEqual((Object) this.pageId, (Object) ((GradeAggregateRequestHead) obj).pageId);
    }

    public int hashCode() {
        String str = this.pageId;
        if (str == null) {
            return 0;
        }
        return str.hashCode();
    }

    public String toString() {
        return "GradeAggregateRequestHead(pageId=" + this.pageId + ')';
    }

    public GradeAggregateRequestHead(String str) {
        this.pageId = str;
    }

    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public /* synthetic */ GradeAggregateRequestHead(String str, int i, DefaultConstructorMarker defaultConstructorMarker) {
        this((i & 1) != 0 ? null : str);
    }

    public final String getPageId() {
        return this.pageId;
    }
}
