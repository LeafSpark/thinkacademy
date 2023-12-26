package com.tal.app.thinkacademy.live.business.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.Group;
import androidx.viewbinding.ViewBinding;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;
import com.tal.app.thinkacademy.live.business.R;
import com.tal.app.thinkacademy.live.business.chatbox.widget.ChatBoxListPluginView;
import com.yy.mobile.rollingtextview.RollingTextView;

public final class LiveBusinessViewLiveMsgPadBinding implements ViewBinding {
    public final ChatBoxListPluginView chatBoxListView;
    public final ConstraintLayout clLiveBusinessMessageRoot;
    public final ConstraintLayout clLiveBusinessMessageTop;
    public final Group groupTutor;
    public final ImageView ivLiveBusinessLiveMsgEmoji;
    public final ImageView ivLiveBusinessMessageCoins;
    public final ImageView ivLiveBusinessTutorMsg;
    public final LinearLayout llLiveBusinessLiveMsgInput;
    private final ConstraintLayout rootView;
    public final TextView tvClose;
    public final TextView tvFrequently;
    public final TextView tvIrcConnecting;
    public final RollingTextView tvLiveBusinessMessageUsercoins;
    public final TextView tvLiveBusinessMessageUsercoinsDesc;
    public final View vLiveBusinessMessageMiddleLine;
    public final View vLiveBusinessTutorMsg;
    public final View vLiveBusinessTutorMsgRedDot;

    private LiveBusinessViewLiveMsgPadBinding(ConstraintLayout constraintLayout, ChatBoxListPluginView chatBoxListPluginView, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, Group group, ImageView imageView, ImageView imageView2, ImageView imageView3, LinearLayout linearLayout, TextView textView, TextView textView2, TextView textView3, RollingTextView rollingTextView, TextView textView4, View view, View view2, View view3) {
        this.rootView = constraintLayout;
        this.chatBoxListView = chatBoxListPluginView;
        this.clLiveBusinessMessageRoot = constraintLayout2;
        this.clLiveBusinessMessageTop = constraintLayout3;
        this.groupTutor = group;
        this.ivLiveBusinessLiveMsgEmoji = imageView;
        this.ivLiveBusinessMessageCoins = imageView2;
        this.ivLiveBusinessTutorMsg = imageView3;
        this.llLiveBusinessLiveMsgInput = linearLayout;
        this.tvClose = textView;
        this.tvFrequently = textView2;
        this.tvIrcConnecting = textView3;
        this.tvLiveBusinessMessageUsercoins = rollingTextView;
        this.tvLiveBusinessMessageUsercoinsDesc = textView4;
        this.vLiveBusinessMessageMiddleLine = view;
        this.vLiveBusinessTutorMsg = view2;
        this.vLiveBusinessTutorMsgRedDot = view3;
    }

    public ConstraintLayout getRoot() {
        return this.rootView;
    }

    public static LiveBusinessViewLiveMsgPadBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, (ViewGroup) null, false);
    }

    public static LiveBusinessViewLiveMsgPadBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        int i = R.layout.live_business_view_live_msg_pad;
        View inflate = !(layoutInflater instanceof LayoutInflater) ? layoutInflater.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(layoutInflater, i, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    /* JADX WARNING: Code restructure failed: missing block: B:20:0x0073, code lost:
        r1 = com.tal.app.thinkacademy.live.business.R.id.tv_live_business_message_usercoins;
     */
    /* JADX WARNING: Code restructure failed: missing block: B:24:0x008b, code lost:
        r1 = com.tal.app.thinkacademy.live.business.R.id.v_live_business_message_middle_line;
     */
    /* JADX WARNING: Code restructure failed: missing block: B:26:0x0093, code lost:
        r1 = com.tal.app.thinkacademy.live.business.R.id.vLiveBusinessTutorMsg;
     */
    /* JADX WARNING: Code restructure failed: missing block: B:28:0x009b, code lost:
        r1 = com.tal.app.thinkacademy.live.business.R.id.vLiveBusinessTutorMsgRedDot;
     */
    /* JADX WARNING: Code restructure failed: missing block: B:4:0x001b, code lost:
        r1 = com.tal.app.thinkacademy.live.business.R.id.group_tutor;
     */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    public static com.tal.app.thinkacademy.live.business.databinding.LiveBusinessViewLiveMsgPadBinding bind(android.view.View r21) {
        /*
            r0 = r21
            int r1 = com.tal.app.thinkacademy.live.business.R.id.chat_box_list_view
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r5 = r2
            com.tal.app.thinkacademy.live.business.chatbox.widget.ChatBoxListPluginView r5 = (com.tal.app.thinkacademy.live.business.chatbox.widget.ChatBoxListPluginView) r5
            if (r5 == 0) goto L_0x00ab
            r6 = r0
            androidx.constraintlayout.widget.ConstraintLayout r6 = (androidx.constraintlayout.widget.ConstraintLayout) r6
            int r1 = com.tal.app.thinkacademy.live.business.R.id.cl_live_business_message_top
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r7 = r2
            androidx.constraintlayout.widget.ConstraintLayout r7 = (androidx.constraintlayout.widget.ConstraintLayout) r7
            if (r7 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.group_tutor
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r8 = r2
            androidx.constraintlayout.widget.Group r8 = (androidx.constraintlayout.widget.Group) r8
            if (r8 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.iv_live_business_live_msg_emoji
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r9 = r2
            android.widget.ImageView r9 = (android.widget.ImageView) r9
            if (r9 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.iv_live_business_message_coins
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r10 = r2
            android.widget.ImageView r10 = (android.widget.ImageView) r10
            if (r10 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.ivLiveBusinessTutorMsg
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r11 = r2
            android.widget.ImageView r11 = (android.widget.ImageView) r11
            if (r11 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.ll_live_business_live_msg_input
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r12 = r2
            android.widget.LinearLayout r12 = (android.widget.LinearLayout) r12
            if (r12 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.tv_close
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r13 = r2
            android.widget.TextView r13 = (android.widget.TextView) r13
            if (r13 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.tv_frequently
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r14 = r2
            android.widget.TextView r14 = (android.widget.TextView) r14
            if (r14 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.tv_irc_connecting
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r15 = r2
            android.widget.TextView r15 = (android.widget.TextView) r15
            if (r15 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.tv_live_business_message_usercoins
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r16 = r2
            com.yy.mobile.rollingtextview.RollingTextView r16 = (com.yy.mobile.rollingtextview.RollingTextView) r16
            if (r16 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.tv_live_business_message_usercoins_desc
            android.view.View r2 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            r17 = r2
            android.widget.TextView r17 = (android.widget.TextView) r17
            if (r17 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.v_live_business_message_middle_line
            android.view.View r18 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            if (r18 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.vLiveBusinessTutorMsg
            android.view.View r19 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            if (r19 == 0) goto L_0x00ab
            int r1 = com.tal.app.thinkacademy.live.business.R.id.vLiveBusinessTutorMsgRedDot
            android.view.View r20 = androidx.viewbinding.ViewBindings.findChildViewById(r0, r1)
            if (r20 == 0) goto L_0x00ab
            com.tal.app.thinkacademy.live.business.databinding.LiveBusinessViewLiveMsgPadBinding r0 = new com.tal.app.thinkacademy.live.business.databinding.LiveBusinessViewLiveMsgPadBinding
            r3 = r0
            r4 = r6
            r3.<init>(r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20)
            return r0
        L_0x00ab:
            android.content.res.Resources r0 = r21.getResources()
            java.lang.String r0 = r0.getResourceName(r1)
            java.lang.NullPointerException r1 = new java.lang.NullPointerException
            java.lang.String r2 = "Missing required view with ID: "
            java.lang.String r0 = r2.concat(r0)
            r1.<init>(r0)
            throw r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.tal.app.thinkacademy.live.business.databinding.LiveBusinessViewLiveMsgPadBinding.bind(android.view.View):com.tal.app.thinkacademy.live.business.databinding.LiveBusinessViewLiveMsgPadBinding");
    }
}
