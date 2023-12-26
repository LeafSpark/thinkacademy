package com.tal.app.thinkacademy.live.abilitypack.photobox;

import com.tal.app.thinkacademy.live.core.live.abilitypack.AbilityPack;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u001a\f\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002¨\u0006\u0003"}, d2 = {"getPhotoBoxViewModel", "Lcom/tal/app/thinkacademy/live/abilitypack/photobox/PhotoBoxViewModel;", "Lcom/tal/app/thinkacademy/live/core/live/abilitypack/AbilityPack;", "bus_livebusiness_release"}, k = 2, mv = {1, 6, 0}, xi = 48)
/* compiled from: PhotoBoxViewModel.kt */
public final class PhotoBoxViewModelKt {
    public static final PhotoBoxViewModel getPhotoBoxViewModel(AbilityPack abilityPack) {
        Intrinsics.checkNotNullParameter(abilityPack, "<this>");
        return abilityPack.getViewModel(PhotoBoxViewModel.class);
    }
}
