package com.tal.app.thinkacademy.business.login.presenter;

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
@DebugMetadata(c = "com.tal.app.thinkacademy.business.login.presenter.FeedbackViewModel$submitFeedback$2", f = "FeedbackViewModel.kt", i = {}, l = {34}, m = "invokeSuspend", n = {}, s = {})
/* compiled from: FeedbackViewModel.kt */
final class FeedbackViewModel$submitFeedback$2 extends SuspendLambda implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $details;
    final /* synthetic */ String[] $images;
    final /* synthetic */ String $tag;
    Object L$0;
    int label;
    final /* synthetic */ FeedbackViewModel this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    FeedbackViewModel$submitFeedback$2(FeedbackViewModel feedbackViewModel, String str, String str2, String[] strArr, Continuation<? super FeedbackViewModel$submitFeedback$2> continuation) {
        super(2, continuation);
        this.this$0 = feedbackViewModel;
        this.$tag = str;
        this.$details = str2;
        this.$images = strArr;
    }

    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FeedbackViewModel$submitFeedback$2(this.this$0, this.$tag, this.$details, this.$images, continuation);
    }

    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FeedbackViewModel$submitFeedback$2) create(coroutineScope, continuation)).invokeSuspend(Unit.INSTANCE);
    }

    public final Object invokeSuspend(Object obj) {
        StateLiveData<Object> stateLiveData;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = this.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            StateLiveData<Object> feedback = this.this$0.getFeedback();
            this.L$0 = feedback;
            this.label = 1;
            Object submitFeedback = this.this$0.repository.submitFeedback(this.$tag, this.$details, this.$images, this);
            if (submitFeedback == coroutine_suspended) {
                return coroutine_suspended;
            }
            stateLiveData = feedback;
            obj = submitFeedback;
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
