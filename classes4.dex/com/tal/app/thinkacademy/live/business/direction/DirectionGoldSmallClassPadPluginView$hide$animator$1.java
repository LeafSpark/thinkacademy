package com.tal.app.thinkacademy.live.business.direction;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\u0017\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006"}, d2 = {"com/tal/app/thinkacademy/live/business/direction/DirectionGoldSmallClassPadPluginView$hide$animator$1", "Landroid/animation/AnimatorListenerAdapter;", "onAnimationEnd", "", "animation", "Landroid/animation/Animator;", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: DirectionGoldSmallClassPadPluginView.kt */
public final class DirectionGoldSmallClassPadPluginView$hide$animator$1 extends AnimatorListenerAdapter {
    final /* synthetic */ DirectionGoldSmallClassPadPluginView this$0;

    DirectionGoldSmallClassPadPluginView$hide$animator$1(DirectionGoldSmallClassPadPluginView directionGoldSmallClassPadPluginView) {
        this.this$0 = directionGoldSmallClassPadPluginView;
    }

    public void onAnimationEnd(Animator animator) {
        Intrinsics.checkNotNullParameter(animator, "animation");
        DirectionGoldListener mListener = this.this$0.getMListener();
        if (mListener != null) {
            mListener.onDirectionGoldAnimationEnd();
        }
    }
}
