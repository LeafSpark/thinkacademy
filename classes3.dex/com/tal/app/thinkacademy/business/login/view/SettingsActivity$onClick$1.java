package com.tal.app.thinkacademy.business.login.view;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u0002\n\u0000\u0010\u0000\u001a\u00020\u0001H\n¢\u0006\u0002\b\u0002"}, d2 = {"<anonymous>", "", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: SettingsActivity.kt */
final class SettingsActivity$onClick$1 extends Lambda implements Function0<Unit> {
    final /* synthetic */ SettingsActivity this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    SettingsActivity$onClick$1(SettingsActivity settingsActivity) {
        super(0);
        this.this$0 = settingsActivity;
    }

    public final void invoke() {
        this.this$0.hideLoading();
    }
}
