package com.tal.app.thinkacademy.live.business.groupvideocall.driver;

import androidx.lifecycle.Observer;
import com.tal.app.thinkacademy.live.core.plugin.PluginEventData;

public final /* synthetic */ class GroupVideoCallPluginDriver$$ExternalSyntheticLambda2 implements Observer {
    public final /* synthetic */ GroupVideoCallPluginDriver f$0;

    public /* synthetic */ GroupVideoCallPluginDriver$$ExternalSyntheticLambda2(GroupVideoCallPluginDriver groupVideoCallPluginDriver) {
        this.f$0 = groupVideoCallPluginDriver;
    }

    public final void onChanged(Object obj) {
        GroupVideoCallPluginDriver.m263observerUserLevel$lambda3(this.f$0, (PluginEventData) obj);
    }
}