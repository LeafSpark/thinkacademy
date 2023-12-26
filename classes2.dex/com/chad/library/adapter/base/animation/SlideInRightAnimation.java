package com.chad.library.adapter.base.animation;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.view.View;
import android.view.animation.DecelerateInterpolator;
import com.bonree.sdk.agent.business.entity.BaseEventInfo;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u0001B\u0005¢\u0006\u0002\u0010\u0002J\u001b\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u0006\u0010\u0006\u001a\u00020\u0007H\u0016¢\u0006\u0002\u0010\b¨\u0006\t"}, d2 = {"Lcom/chad/library/adapter/base/animation/SlideInRightAnimation;", "Lcom/chad/library/adapter/base/animation/BaseAnimation;", "()V", "animators", "", "Landroid/animation/Animator;", "view", "Landroid/view/View;", "(Landroid/view/View;)[Landroid/animation/Animator;", "com.github.CymChad.brvah"}, k = 1, mv = {1, 1, 16})
/* compiled from: SlideInRightAnimation.kt */
public final class SlideInRightAnimation implements BaseAnimation {
    public Animator[] animators(View view) {
        Intrinsics.checkParameterIsNotNull(view, BaseEventInfo.EVENT_TYPE_VIEW);
        View rootView = view.getRootView();
        Intrinsics.checkExpressionValueIsNotNull(rootView, "view.rootView");
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(view, "translationX", new float[]{(float) rootView.getWidth(), 0.0f});
        Intrinsics.checkExpressionValueIsNotNull(ofFloat, "animator");
        ofFloat.setDuration(400);
        ofFloat.setInterpolator(new DecelerateInterpolator(1.8f));
        return new Animator[]{ofFloat};
    }
}