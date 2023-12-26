package com.tal.app.thinkacademy.business.study.study.vm;

import com.tal.app.thinkacademy.business.study.study.entity.PrepareClassBean;
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
@DebugMetadata(c = "com.tal.app.thinkacademy.business.study.study.vm.PrepareClassVM$requestPrepareData$2", f = "PrepareClassVM.kt", i = {}, l = {61}, m = "invokeSuspend", n = {}, s = {})
/* compiled from: PrepareClassVM.kt */
final class PrepareClassVM$requestPrepareData$2 extends SuspendLambda implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Integer $planId;
    Object L$0;
    int label;
    final /* synthetic */ PrepareClassVM this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    PrepareClassVM$requestPrepareData$2(PrepareClassVM prepareClassVM, Integer num, Continuation<? super PrepareClassVM$requestPrepareData$2> continuation) {
        super(2, continuation);
        this.this$0 = prepareClassVM;
        this.$planId = num;
    }

    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new PrepareClassVM$requestPrepareData$2(this.this$0, this.$planId, continuation);
    }

    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((PrepareClassVM$requestPrepareData$2) create(coroutineScope, continuation)).invokeSuspend(Unit.INSTANCE);
    }

    public final Object invokeSuspend(Object obj) {
        StateLiveData<PrepareClassBean> stateLiveData;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = this.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            StateLiveData<PrepareClassBean> prepareDataStatus = this.this$0.getPrepareDataStatus();
            this.L$0 = prepareDataStatus;
            this.label = 1;
            Object prepareClassDate = PlanListRepositoryKt.getPrepareClassDate(this.$planId, this);
            if (prepareClassDate == coroutine_suspended) {
                return coroutine_suspended;
            }
            stateLiveData = prepareDataStatus;
            obj = prepareClassDate;
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
