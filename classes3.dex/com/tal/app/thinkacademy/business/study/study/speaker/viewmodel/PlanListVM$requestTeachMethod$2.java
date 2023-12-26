package com.tal.app.thinkacademy.business.study.study.speaker.viewmodel;

import com.tal.app.thinkacademy.business.study.study.entity.TeachMethodEntity;
import com.tal.app.thinkacademy.business.study.study.speaker.network.PlanListRepositoryKt;
import com.tal.app.thinkacademy.common.base.StateLiveData;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.coroutines.jvm.internal.SuspendLambda;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;

@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "com.tal.app.thinkacademy.business.study.study.speaker.viewmodel.PlanListVM$requestTeachMethod$2", f = "PlanListVM.kt", i = {}, l = {81}, m = "invokeSuspend", n = {}, s = {})
/* compiled from: PlanListVM.kt */
final class PlanListVM$requestTeachMethod$2 extends SuspendLambda implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $classId;
    final /* synthetic */ String $orderNum;
    Object L$0;
    int label;
    final /* synthetic */ PlanListVM this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    PlanListVM$requestTeachMethod$2(PlanListVM planListVM, String str, String str2, Continuation<? super PlanListVM$requestTeachMethod$2> continuation) {
        super(2, continuation);
        this.this$0 = planListVM;
        this.$classId = str;
        this.$orderNum = str2;
    }

    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new PlanListVM$requestTeachMethod$2(this.this$0, this.$classId, this.$orderNum, continuation);
    }

    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((PlanListVM$requestTeachMethod$2) create(coroutineScope, continuation)).invokeSuspend(Unit.INSTANCE);
    }

    public final Object invokeSuspend(Object obj) {
        StateLiveData<TeachMethodEntity> stateLiveData;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = this.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            StateLiveData<TeachMethodEntity> teachMethodData = this.this$0.getTeachMethodData();
            this.L$0 = teachMethodData;
            this.label = 1;
            Object teachMethod = PlanListRepositoryKt.getTeachMethod(this.$classId, this.$orderNum, this);
            if (teachMethod == coroutine_suspended) {
                return coroutine_suspended;
            }
            stateLiveData = teachMethodData;
            obj = teachMethod;
        } else if (i == 1) {
            stateLiveData = (StateLiveData) this.L$0;
            ResultKt.throwOnFailure(obj);
        } else {
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        stateLiveData.postSuccess(obj);
        return Unit.INSTANCE;
    }
}
