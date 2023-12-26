package com.tal.app.thinkacademy.business.study.study.vm;

import com.tal.app.thinkacademy.business.study.study.entity.SwitchOptionsList;
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
@DebugMetadata(c = "com.tal.app.thinkacademy.business.study.study.vm.StudyCenterVM$getSwitchOptionsData$2", f = "StudyCenterVM.kt", i = {}, l = {121}, m = "invokeSuspend", n = {}, s = {})
/* compiled from: StudyCenterVM.kt */
final class StudyCenterVM$getSwitchOptionsData$2 extends SuspendLambda implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $category;
    final /* synthetic */ boolean $haveCourse;
    Object L$0;
    int label;
    final /* synthetic */ StudyCenterVM this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    StudyCenterVM$getSwitchOptionsData$2(StudyCenterVM studyCenterVM, String str, boolean z, Continuation<? super StudyCenterVM$getSwitchOptionsData$2> continuation) {
        super(2, continuation);
        this.this$0 = studyCenterVM;
        this.$category = str;
        this.$haveCourse = z;
    }

    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new StudyCenterVM$getSwitchOptionsData$2(this.this$0, this.$category, this.$haveCourse, continuation);
    }

    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((StudyCenterVM$getSwitchOptionsData$2) create(coroutineScope, continuation)).invokeSuspend(Unit.INSTANCE);
    }

    public final Object invokeSuspend(Object obj) {
        StateLiveData<SwitchOptionsList> stateLiveData;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = this.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            StateLiveData<SwitchOptionsList> switchOptions = this.this$0.getSwitchOptions();
            this.L$0 = switchOptions;
            this.label = 1;
            Object switchOptions2 = PlanListRepositoryKt.getSwitchOptions(this.$category, this.$haveCourse, this);
            if (switchOptions2 == coroutine_suspended) {
                return coroutine_suspended;
            }
            stateLiveData = switchOptions;
            obj = switchOptions2;
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