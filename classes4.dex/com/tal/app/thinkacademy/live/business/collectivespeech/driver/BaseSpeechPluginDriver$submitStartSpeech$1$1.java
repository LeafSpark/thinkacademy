package com.tal.app.thinkacademy.live.business.collectivespeech.driver;

import com.tal.app.thinkacademy.common.entity.EmptyBean;
import com.tal.app.thinkacademy.lib.network.javacallback.OmyCallback;
import com.tal.app.thinkacademy.lib.restful.HiResponse;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\u001b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002*\u0001\u0000\b\n\u0018\u00002\u0010\u0012\f\u0012\n\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u00020\u0001J\u0018\u0010\u0004\u001a\u00020\u00052\u000e\u0010\u0006\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u0002H\u0016¨\u0006\u0007"}, d2 = {"com/tal/app/thinkacademy/live/business/collectivespeech/driver/BaseSpeechPluginDriver$submitStartSpeech$1$1", "Lcom/tal/app/thinkacademy/lib/network/javacallback/OmyCallback;", "Lcom/tal/app/thinkacademy/lib/restful/HiResponse;", "Lcom/tal/app/thinkacademy/common/entity/EmptyBean;", "onSuccess", "", "response", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: BaseSpeechPluginDriver.kt */
public final class BaseSpeechPluginDriver$submitStartSpeech$1$1 extends OmyCallback<HiResponse<EmptyBean>> {
    public void onSuccess(HiResponse<EmptyBean> hiResponse) {
        Intrinsics.checkNotNullParameter(hiResponse, "response");
    }

    BaseSpeechPluginDriver$submitStartSpeech$1$1() {
    }
}