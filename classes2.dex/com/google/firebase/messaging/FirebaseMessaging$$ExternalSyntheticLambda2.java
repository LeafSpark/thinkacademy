package com.google.firebase.messaging;

import com.google.android.gms.tasks.SuccessContinuation;
import com.google.android.gms.tasks.Task;

/* compiled from: com.google.firebase:firebase-messaging@@23.0.0 */
public final /* synthetic */ class FirebaseMessaging$$ExternalSyntheticLambda2 implements SuccessContinuation {
    public /* synthetic */ String f$0;

    public /* synthetic */ FirebaseMessaging$$ExternalSyntheticLambda2(String str) {
        this.f$0 = str;
    }

    public final Task then(Object obj) {
        return ((TopicsSubscriber) obj).subscribeToTopic(this.f$0);
    }
}
