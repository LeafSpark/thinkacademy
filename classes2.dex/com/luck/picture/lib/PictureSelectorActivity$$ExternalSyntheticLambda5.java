package com.luck.picture.lib;

import com.luck.picture.lib.listener.OnQueryDataResultListener;
import java.util.List;

public final /* synthetic */ class PictureSelectorActivity$$ExternalSyntheticLambda5 implements OnQueryDataResultListener {
    public final /* synthetic */ PictureSelectorActivity f$0;

    public /* synthetic */ PictureSelectorActivity$$ExternalSyntheticLambda5(PictureSelectorActivity pictureSelectorActivity) {
        this.f$0 = pictureSelectorActivity;
    }

    public final void onComplete(List list, int i, boolean z) {
        this.f$0.lambda$onItemClick$5$PictureSelectorActivity(list, i, z);
    }
}
