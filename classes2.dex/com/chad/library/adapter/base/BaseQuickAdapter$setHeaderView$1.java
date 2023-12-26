package com.chad.library.adapter.base;

import android.widget.LinearLayout;
import kotlin.Metadata;
import kotlin.jvm.internal.MutablePropertyReference0;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KDeclarationContainer;

@Metadata(bv = {1, 0, 3}, k = 3, mv = {1, 1, 16})
/* compiled from: BaseQuickAdapter.kt */
final /* synthetic */ class BaseQuickAdapter$setHeaderView$1 extends MutablePropertyReference0 {
    BaseQuickAdapter$setHeaderView$1(BaseQuickAdapter baseQuickAdapter) {
        super(baseQuickAdapter);
    }

    public String getName() {
        return "mHeaderLayout";
    }

    public KDeclarationContainer getOwner() {
        return Reflection.getOrCreateKotlinClass(BaseQuickAdapter.class);
    }

    public String getSignature() {
        return "getMHeaderLayout()Landroid/widget/LinearLayout;";
    }

    public Object get() {
        return BaseQuickAdapter.access$getMHeaderLayout$p((BaseQuickAdapter) this.receiver);
    }

    public void set(Object obj) {
        ((BaseQuickAdapter) this.receiver).mHeaderLayout = (LinearLayout) obj;
    }
}