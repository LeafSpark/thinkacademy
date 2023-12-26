package com.tal.app.thinkacademy.business.shop.viewmodel;

import com.tal.app.thinkacademy.common.base.StateLiveData;
import com.tal.app.thinkacademy.common.user.GradeStageList;
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
@DebugMetadata(c = "com.tal.app.thinkacademy.business.shop.viewmodel.GradeAggregateVm$getGradeStageLists$2", f = "GradeAggregateVm.kt", i = {}, l = {74}, m = "invokeSuspend", n = {}, s = {})
/* compiled from: GradeAggregateVm.kt */
final class GradeAggregateVm$getGradeStageLists$2 extends SuspendLambda implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    Object L$0;
    int label;
    final /* synthetic */ GradeAggregateVm this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    GradeAggregateVm$getGradeStageLists$2(GradeAggregateVm gradeAggregateVm, Continuation<? super GradeAggregateVm$getGradeStageLists$2> continuation) {
        super(2, continuation);
        this.this$0 = gradeAggregateVm;
    }

    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new GradeAggregateVm$getGradeStageLists$2(this.this$0, continuation);
    }

    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((GradeAggregateVm$getGradeStageLists$2) create(coroutineScope, continuation)).invokeSuspend(Unit.INSTANCE);
    }

    public final Object invokeSuspend(Object obj) {
        StateLiveData<GradeStageList> stateLiveData;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = this.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            StateLiveData<GradeStageList> gradeStageLists = this.this$0.getGradeStageLists();
            this.L$0 = gradeStageLists;
            this.label = 1;
            Object gradeStageList = this.this$0.repository.getGradeStageList(this);
            if (gradeStageList == coroutine_suspended) {
                return coroutine_suspended;
            }
            stateLiveData = gradeStageLists;
            obj = gradeStageList;
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