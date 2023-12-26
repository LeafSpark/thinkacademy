package com.tal.app.thinkacademy.business.home.main.shop.bean;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\b\u0018\u00002\u00020\u0001B\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u0006J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0005HÆ\u0003J!\u0010\r\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0015"}, d2 = {"Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBody;", "", "data", "Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyData;", "header", "Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyHeader;", "(Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyData;Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyHeader;)V", "getData", "()Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyData;", "getHeader", "()Lcom/tal/app/thinkacademy/business/home/main/shop/bean/ShopHomeBodyHeader;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ShopHomeBody.kt */
public final class ShopHomeBody {
    private final ShopHomeBodyData data;
    private final ShopHomeBodyHeader header;

    public static /* synthetic */ ShopHomeBody copy$default(ShopHomeBody shopHomeBody, ShopHomeBodyData shopHomeBodyData, ShopHomeBodyHeader shopHomeBodyHeader, int i, Object obj) {
        if ((i & 1) != 0) {
            shopHomeBodyData = shopHomeBody.data;
        }
        if ((i & 2) != 0) {
            shopHomeBodyHeader = shopHomeBody.header;
        }
        return shopHomeBody.copy(shopHomeBodyData, shopHomeBodyHeader);
    }

    public final ShopHomeBodyData component1() {
        return this.data;
    }

    public final ShopHomeBodyHeader component2() {
        return this.header;
    }

    public final ShopHomeBody copy(ShopHomeBodyData shopHomeBodyData, ShopHomeBodyHeader shopHomeBodyHeader) {
        return new ShopHomeBody(shopHomeBodyData, shopHomeBodyHeader);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ShopHomeBody)) {
            return false;
        }
        ShopHomeBody shopHomeBody = (ShopHomeBody) obj;
        return Intrinsics.areEqual((Object) this.data, (Object) shopHomeBody.data) && Intrinsics.areEqual((Object) this.header, (Object) shopHomeBody.header);
    }

    public int hashCode() {
        ShopHomeBodyData shopHomeBodyData = this.data;
        int i = 0;
        int hashCode = (shopHomeBodyData == null ? 0 : shopHomeBodyData.hashCode()) * 31;
        ShopHomeBodyHeader shopHomeBodyHeader = this.header;
        if (shopHomeBodyHeader != null) {
            i = shopHomeBodyHeader.hashCode();
        }
        return hashCode + i;
    }

    public String toString() {
        return "ShopHomeBody(data=" + this.data + ", header=" + this.header + ')';
    }

    public ShopHomeBody(ShopHomeBodyData shopHomeBodyData, ShopHomeBodyHeader shopHomeBodyHeader) {
        this.data = shopHomeBodyData;
        this.header = shopHomeBodyHeader;
    }

    public final ShopHomeBodyData getData() {
        return this.data;
    }

    public final ShopHomeBodyHeader getHeader() {
        return this.header;
    }
}