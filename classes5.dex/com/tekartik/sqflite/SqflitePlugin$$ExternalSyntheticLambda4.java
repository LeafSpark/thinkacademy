package com.tekartik.sqflite;

import com.tekartik.sqflite.operation.MethodCallOperation;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;

public final /* synthetic */ class SqflitePlugin$$ExternalSyntheticLambda4 implements Runnable {
    public final /* synthetic */ MethodCall f$0;
    public final /* synthetic */ MethodChannel.Result f$1;
    public final /* synthetic */ Database f$2;

    public /* synthetic */ SqflitePlugin$$ExternalSyntheticLambda4(MethodCall methodCall, MethodChannel.Result result, Database database) {
        this.f$0 = methodCall;
        this.f$1 = result;
        this.f$2 = database;
    }

    public final void run() {
        this.f$2.query(new MethodCallOperation(this.f$0, this.f$1));
    }
}
