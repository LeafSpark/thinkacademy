package com.tal.app.thinkacademy.live.business.function;

import androidx.lifecycle.Observer;
import com.tal.app.thinkacademy.live.core.plugin.PluginEventData;

public final /* synthetic */ class FunctionPluginDriver$$ExternalSyntheticLambda14 implements Observer {
    public final /* synthetic */ FunctionPluginDriver f$0;

    public /* synthetic */ FunctionPluginDriver$$ExternalSyntheticLambda14(FunctionPluginDriver functionPluginDriver) {
        this.f$0 = functionPluginDriver;
    }

    public final void onChanged(Object obj) {
        FunctionPluginDriver.m238observerChatBox$lambda10(this.f$0, (PluginEventData) obj);
    }
}