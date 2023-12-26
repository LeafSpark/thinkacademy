package com.tal.app.thinkacademy.business.shop.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.business.shop.R;

public final class BusShopAggregateDialogMoreSelectBinding implements ViewBinding {
    public final ImageView ivCancel;
    public final ImageView ivConfirm;
    public final RecyclerView moreSelectRv;
    private final LinearLayout rootView;

    private BusShopAggregateDialogMoreSelectBinding(LinearLayout linearLayout, ImageView imageView, ImageView imageView2, RecyclerView recyclerView) {
        this.rootView = linearLayout;
        this.ivCancel = imageView;
        this.ivConfirm = imageView2;
        this.moreSelectRv = recyclerView;
    }

    public LinearLayout getRoot() {
        return this.rootView;
    }

    public static BusShopAggregateDialogMoreSelectBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static BusShopAggregateDialogMoreSelectBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.bus_shop_aggregate_dialog_more_select;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    /* JADX WARNING: Code restructure failed: missing block: B:4:0x0014, code lost:
        r0 = com.tal.app.thinkacademy.business.shop.R.id.moreSelectRv;
     */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public static com.tal.app.thinkacademy.business.shop.databinding.BusShopAggregateDialogMoreSelectBinding bind(android.view.View r4) {
        /*
            int r0 = com.tal.app.thinkacademy.business.shop.R.id.iv_cancel
            android.view.View r1 = androidx.viewbinding.ViewBindings.findChildViewById(r4, r0)
            android.widget.ImageView r1 = (android.widget.ImageView) r1
            if (r1 == 0) goto L_0x0026
            int r0 = com.tal.app.thinkacademy.business.shop.R.id.iv_confirm
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r4, r0)
            android.widget.ImageView r2 = (android.widget.ImageView) r2
            if (r2 == 0) goto L_0x0026
            int r0 = com.tal.app.thinkacademy.business.shop.R.id.moreSelectRv
            android.view.View r3 = androidx.viewbinding.ViewBindings.findChildViewById(r4, r0)
            androidx.recyclerview.widget.RecyclerView r3 = (androidx.recyclerview.widget.RecyclerView) r3
            if (r3 == 0) goto L_0x0026
            com.tal.app.thinkacademy.business.shop.databinding.BusShopAggregateDialogMoreSelectBinding r0 = new com.tal.app.thinkacademy.business.shop.databinding.BusShopAggregateDialogMoreSelectBinding
            android.widget.LinearLayout r4 = (android.widget.LinearLayout) r4
            r0.<init>(r4, r1, r2, r3)
            return r0
        L_0x0026:
            android.content.res.Resources r4 = r4.getResources()
            java.lang.String r4 = r4.getResourceName(r0)
            java.lang.NullPointerException r0 = new java.lang.NullPointerException
            java.lang.String r1 = "Missing required view with ID: "
            java.lang.String r4 = r1.concat(r4)
            r0.<init>(r4)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.tal.app.thinkacademy.business.shop.databinding.BusShopAggregateDialogMoreSelectBinding.bind(android.view.View):com.tal.app.thinkacademy.business.shop.databinding.BusShopAggregateDialogMoreSelectBinding");
    }
}
