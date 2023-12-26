package com.tal.app.thinkacademy.live.core.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.live.core.R;
import com.tal.app.thinkcademy.lib.commui.widget.LoadStatusView;

public final class ActivityBaseLiveBinding implements ViewBinding {
    public final LoadStatusView liveLoadingView;
    public final FrameLayout liveRootView;
    private final FrameLayout rootView;

    private ActivityBaseLiveBinding(FrameLayout frameLayout, LoadStatusView loadStatusView, FrameLayout frameLayout2) {
        this.rootView = frameLayout;
        this.liveLoadingView = loadStatusView;
        this.liveRootView = frameLayout2;
    }

    public FrameLayout getRoot() {
        return this.rootView;
    }

    public static ActivityBaseLiveBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static ActivityBaseLiveBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.activity_base_live;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static ActivityBaseLiveBinding bind(View view) {
        int i = R.id.live_loading_view;
        LoadStatusView findChildViewById = ViewBindings.findChildViewById(view, i);
        if (findChildViewById != null) {
            i = R.id.live_root_view;
            FrameLayout frameLayout = (FrameLayout) ViewBindings.findChildViewById(view, i);
            if (frameLayout != null) {
                return new ActivityBaseLiveBinding((FrameLayout) view, findChildViewById, frameLayout);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
}