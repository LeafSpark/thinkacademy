package com.tal.app.thinkacademy.business.shop.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.flyco.roundview.RoundTextView;
import com.tal.app.thinkacademy.business.shop.R;

public final class ShopItemNormalLayoutBinding implements ViewBinding {
    public final TextView mainTitle;
    private final ConstraintLayout rootView;
    public final TextView showEnd;
    public final TextView showFrom;
    public final TextView showLesson;
    public final TextView showPrice;
    public final LinearLayout signLayout;
    public final RoundTextView signLessonCount;
    public final RoundTextView signLevelDegreeName;
    public final TextView subTitle;
    public final ImageView teacher1;
    public final ImageView teacher2;
    public final ImageView teacher3;

    private ShopItemNormalLayoutBinding(ConstraintLayout constraintLayout, TextView textView, TextView textView2, TextView textView3, TextView textView4, TextView textView5, LinearLayout linearLayout, RoundTextView roundTextView, RoundTextView roundTextView2, TextView textView6, ImageView imageView, ImageView imageView2, ImageView imageView3) {
        this.rootView = constraintLayout;
        this.mainTitle = textView;
        this.showEnd = textView2;
        this.showFrom = textView3;
        this.showLesson = textView4;
        this.showPrice = textView5;
        this.signLayout = linearLayout;
        this.signLessonCount = roundTextView;
        this.signLevelDegreeName = roundTextView2;
        this.subTitle = textView6;
        this.teacher1 = imageView;
        this.teacher2 = imageView2;
        this.teacher3 = imageView3;
    }

    public ConstraintLayout getRoot() {
        return this.rootView;
    }

    public static ShopItemNormalLayoutBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static ShopItemNormalLayoutBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.shop_item_normal_layout;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    /* JADX WARNING: Code restructure failed: missing block: B:12:0x0044, code lost:
        r1 = com.tal.app.thinkacademy.business.shop.R.id.sign_lesson_count;
     */
    /* JADX WARNING: Code restructure failed: missing block: B:14:0x004f, code lost:
        r1 = com.tal.app.thinkacademy.business.shop.R.id.sign_level_degree_name;
     */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public static com.tal.app.thinkacademy.business.shop.databinding.ShopItemNormalLayoutBinding bind(android.view.View r17) {
        /*
            r0 = r17
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.main_title
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r5 = r2
            android.widget.TextView r5 = (android.widget.TextView) r5
            if (r5 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.show_end
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r6 = r2
            android.widget.TextView r6 = (android.widget.TextView) r6
            if (r6 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.show_from
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r7 = r2
            android.widget.TextView r7 = (android.widget.TextView) r7
            if (r7 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.show_lesson
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r8 = r2
            android.widget.TextView r8 = (android.widget.TextView) r8
            if (r8 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.show_price
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r9 = r2
            android.widget.TextView r9 = (android.widget.TextView) r9
            if (r9 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.sign_layout
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r10 = r2
            android.widget.LinearLayout r10 = (android.widget.LinearLayout) r10
            if (r10 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.sign_lesson_count
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r11 = r2
            com.flyco.roundview.RoundTextView r11 = (com.flyco.roundview.RoundTextView) r11
            if (r11 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.sign_level_degree_name
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r12 = r2
            com.flyco.roundview.RoundTextView r12 = (com.flyco.roundview.RoundTextView) r12
            if (r12 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.sub_title
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r13 = r2
            android.widget.TextView r13 = (android.widget.TextView) r13
            if (r13 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.teacher_1
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r14 = r2
            android.widget.ImageView r14 = (android.widget.ImageView) r14
            if (r14 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.teacher_2
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r15 = r2
            android.widget.ImageView r15 = (android.widget.ImageView) r15
            if (r15 == 0) goto L_0x0091
            int r1 = com.tal.app.thinkacademy.business.shop.R.id.teacher_3
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r16 = r2
            android.widget.ImageView r16 = (android.widget.ImageView) r16
            if (r16 == 0) goto L_0x0091
            com.tal.app.thinkacademy.business.shop.databinding.ShopItemNormalLayoutBinding r1 = new com.tal.app.thinkacademy.business.shop.databinding.ShopItemNormalLayoutBinding
            r4 = r0
            androidx.constraintlayout.widget.ConstraintLayout r4 = (androidx.constraintlayout.widget.ConstraintLayout) r4
            r3 = r1
            r3.<init>(r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16)
            return r1
        L_0x0091:
            android.content.res.Resources r0 = r17.getResources()
            java.lang.String r0 = r0.getResourceName(r1)
            java.lang.NullPointerException r1 = new java.lang.NullPointerException
            java.lang.String r2 = "Missing required view with ID: "
            java.lang.String r0 = r2.concat(r0)
            r1.<init>(r0)
            throw r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.tal.app.thinkacademy.business.shop.databinding.ShopItemNormalLayoutBinding.bind(android.view.View):com.tal.app.thinkacademy.business.shop.databinding.ShopItemNormalLayoutBinding");
    }
}
