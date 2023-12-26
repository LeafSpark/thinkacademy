package com.tal.app.thinkacademy.live.business.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.airbnb.lottie.LottieAnimationView;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.live.business.R;

public final class LiveBusinessVoteThumbUpBinding implements ViewBinding {
    public final LottieAnimationView liveBusinessVoteLottie;
    public final RelativeLayout livevideoRlVoteThumbUp;
    private final RelativeLayout rootView;

    private LiveBusinessVoteThumbUpBinding(RelativeLayout relativeLayout, LottieAnimationView lottieAnimationView, RelativeLayout relativeLayout2) {
        this.rootView = relativeLayout;
        this.liveBusinessVoteLottie = lottieAnimationView;
        this.livevideoRlVoteThumbUp = relativeLayout2;
    }

    public RelativeLayout getRoot() {
        return this.rootView;
    }

    public static LiveBusinessVoteThumbUpBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static LiveBusinessVoteThumbUpBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.live_business_vote_thumb_up;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static LiveBusinessVoteThumbUpBinding bind(View view) {
        int i = R.id.live_business_vote_lottie;
        LottieAnimationView findChildViewById = ViewBindings.findChildViewById(view, i);
        if (findChildViewById != null) {
            RelativeLayout relativeLayout = (RelativeLayout) view;
            return new LiveBusinessVoteThumbUpBinding(relativeLayout, findChildViewById, relativeLayout);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
}