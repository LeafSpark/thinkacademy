package com.tal.app.thinkacademy.business.studycenter.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.business.studycenter.R;

public final class StudyDialogOfflineClassroomBinding implements ViewBinding {
    private final RelativeLayout rootView;
    public final TextView tvGotIt;
    public final TextView tvLocationContent;

    private StudyDialogOfflineClassroomBinding(RelativeLayout relativeLayout, TextView textView, TextView textView2) {
        this.rootView = relativeLayout;
        this.tvGotIt = textView;
        this.tvLocationContent = textView2;
    }

    public RelativeLayout getRoot() {
        return this.rootView;
    }

    public static StudyDialogOfflineClassroomBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static StudyDialogOfflineClassroomBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.study_dialog_offline_classroom;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static StudyDialogOfflineClassroomBinding bind(View view) {
        int i = R.id.tvGotIt;
        TextView textView = (TextView) ViewBindings.findChildViewById(view, i);
        if (textView != null) {
            i = R.id.tvLocationContent;
            TextView textView2 = (TextView) ViewBindings.findChildViewById(view, i);
            if (textView2 != null) {
                return new StudyDialogOfflineClassroomBinding((RelativeLayout) view, textView, textView2);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
}