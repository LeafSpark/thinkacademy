package com.tal.app.thinkacademy.live.business.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.live.business.R;

public final class LiveBusinessViewMediaControllerSmallLivePadBinding implements ViewBinding {
    public final ImageView ivLiveBusinessMediaControllerControlsPreview;
    private final FrameLayout rootView;

    private LiveBusinessViewMediaControllerSmallLivePadBinding(FrameLayout frameLayout, ImageView imageView) {
        this.rootView = frameLayout;
        this.ivLiveBusinessMediaControllerControlsPreview = imageView;
    }

    public FrameLayout getRoot() {
        return this.rootView;
    }

    public static LiveBusinessViewMediaControllerSmallLivePadBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static LiveBusinessViewMediaControllerSmallLivePadBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.live_business_view_media_controller_small_live_pad;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static LiveBusinessViewMediaControllerSmallLivePadBinding bind(View view) {
        int i = R.id.iv_live_business_media_controller_controls_preview;
        ImageView imageView = (ImageView) ViewBindings.findChildViewById(view, i);
        if (imageView != null) {
            return new LiveBusinessViewMediaControllerSmallLivePadBinding((FrameLayout) view, imageView);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
}
