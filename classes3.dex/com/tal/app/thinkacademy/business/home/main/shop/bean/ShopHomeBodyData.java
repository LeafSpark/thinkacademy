package com.tal.app.thinkacademy.business.home.main.shop.bean;

import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\b\u0018\u00002\u00020\u0001B\u0015\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003¢\u0006\u0002\u0010\u0005J\u0011\u0010\b\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003HÆ\u0003J\u001b\u0010\t\u001a\u00020\u00002\u0010\b\u0002\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\r\u001a\u00020\u000eHÖ\u0001J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001R\u0019\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyData;", "", "specValues", "", "Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyDataSpecValue;", "(Ljava/util/List;)V", "getSpecValues", "()Ljava/util/List;", "component1", "copy", "equals", "", "other", "hashCode", "", "toString", "", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ShopHomeBody.kt */
public final class ShopHomeBodyData {
    private final List<ShopHomeBodyDataSpecValue> specValues;

    public static /* synthetic */ ShopHomeBodyData copy$default(ShopHomeBodyData shopHomeBodyData, List<ShopHomeBodyDataSpecValue> list, int i, Object obj) {
        if ((i & 1) != 0) {
            list = shopHomeBodyData.specValues;
        }
        return shopHomeBodyData.copy(list);
    }

    public final List<ShopHomeBodyDataSpecValue> component1() {
        return this.specValues;
    }

    public final ShopHomeBodyData copy(List<ShopHomeBodyDataSpecValue> list) {
        return new ShopHomeBodyData(list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof ShopHomeBodyData) && Intrinsics.areEqual((Object) this.specValues, (Object) ((ShopHomeBodyData) obj).specValues);
    }

    public int hashCode() {
        List<ShopHomeBodyDataSpecValue> list = this.specValues;
        if (list == null) {
            return 0;
        }
        return list.hashCode();
    }

    public String toString() {
        return "ShopHomeBodyData(specValues=" + this.specValues + ')';
    }

    public ShopHomeBodyData(List<ShopHomeBodyDataSpecValue> list) {
        this.specValues = list;
    }

    public final List<ShopHomeBodyDataSpecValue> getSpecValues() {
        return this.specValues;
    }
}
