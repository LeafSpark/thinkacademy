package com.tal.app.thinkacademy.business.shop.classdetail;

import android.graphics.Outline;
import android.view.View;
import android.view.ViewOutlineProvider;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;

@Metadata(d1 = {"\u0000\u001d\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0016¨\u0006\b"}, d2 = {"com/tal/app/thinkacademy/business/shop/classdetail/ShopClassDetailAdapter$convert$3", "Landroid/view/ViewOutlineProvider;", "getOutline", "", "view", "Landroid/view/View;", "outline", "Landroid/graphics/Outline;", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ShopClassDetailAdapter.kt */
public final class ShopClassDetailAdapter$convert$3 extends ViewOutlineProvider {
    final /* synthetic */ Ref.IntRef $radius;

    ShopClassDetailAdapter$convert$3(Ref.IntRef intRef) {
        this.$radius = intRef;
    }

    public void getOutline(View view, Outline outline) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(outline, "outline");
        outline.setRoundRect(0, 0, view.getWidth(), view.getHeight(), (float) this.$radius.element);
    }
}
