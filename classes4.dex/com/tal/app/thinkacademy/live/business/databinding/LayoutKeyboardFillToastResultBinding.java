package com.tal.app.thinkacademy.live.business.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.live.business.R;

public final class LayoutKeyboardFillToastResultBinding implements ViewBinding {
    private final ConstraintLayout rootView;
    public final TextView tvText;

    private LayoutKeyboardFillToastResultBinding(ConstraintLayout constraintLayout, TextView textView) {
        this.rootView = constraintLayout;
        this.tvText = textView;
    }

    public ConstraintLayout getRoot() {
        return this.rootView;
    }

    public static LayoutKeyboardFillToastResultBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static LayoutKeyboardFillToastResultBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.layout_keyboard_fill_toast_result;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static LayoutKeyboardFillToastResultBinding bind(View view) {
        int i = R.id.tv_text;
        TextView textView = (TextView) ViewBindings.findChildViewById(view, i);
        if (textView != null) {
            return new LayoutKeyboardFillToastResultBinding((ConstraintLayout) view, textView);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
}
