package com.tal.app.thinkacademy.common.business.browser.server;

import com.tal.app.thinkacademy.common.business.browser.server.ServerManager;

public final /* synthetic */ class ServerManager$ServerConnection$1$$ExternalSyntheticLambda1 implements Runnable {
    public final /* synthetic */ ServerManager.ServerConnection.AnonymousClass1 f$0;
    public final /* synthetic */ int f$1;
    public final /* synthetic */ String f$2;

    public /* synthetic */ ServerManager$ServerConnection$1$$ExternalSyntheticLambda1(ServerManager.ServerConnection.AnonymousClass1 r1, int i, String str) {
        this.f$0 = r1;
        this.f$1 = i;
        this.f$2 = str;
    }

    public final void run() {
        this.f$0.lambda$onRequestError$3$ServerManager$ServerConnection$1(this.f$1, this.f$2);
    }
}
