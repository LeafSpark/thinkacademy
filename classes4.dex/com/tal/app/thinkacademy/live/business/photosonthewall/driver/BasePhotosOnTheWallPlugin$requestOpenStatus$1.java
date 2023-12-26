package com.tal.app.thinkacademy.live.business.photosonthewall.driver;

import com.tal.app.thinkacademy.lib.logger.XesLog;
import com.tal.app.thinkacademy.lib.logger.XesLogTag;
import com.tal.app.thinkacademy.lib.network.javacallback.OmyCallback;
import com.tal.app.thinkacademy.lib.restful.HiResponse;
import com.tal.app.thinkacademy.live.business.photosonthewall.bean.PhotosOnTheWallState;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\u001b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002*\u0001\u0000\b\n\u0018\u00002\u0010\u0012\f\u0012\n\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u00020\u0001J\u0018\u0010\u0004\u001a\u00020\u00052\u000e\u0010\u0006\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00030\u0002H\u0016¨\u0006\u0007"}, d2 = {"com/tal/app/thinkacademy/live/business/photosonthewall/driver/BasePhotosOnTheWallPlugin$requestOpenStatus$1", "Lcom/tal/app/thinkacademy/lib/network/javacallback/OmyCallback;", "Lcom/tal/app/thinkacademy/lib/restful/HiResponse;", "Lcom/tal/app/thinkacademy/live/business/photosonthewall/bean/PhotosOnTheWallState;", "onSuccess", "", "response", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: BasePhotosOnTheWallPlugin.kt */
public final class BasePhotosOnTheWallPlugin$requestOpenStatus$1 extends OmyCallback<HiResponse<PhotosOnTheWallState>> {
    final /* synthetic */ BasePhotosOnTheWallPlugin this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    BasePhotosOnTheWallPlugin$requestOpenStatus$1(BasePhotosOnTheWallPlugin basePhotosOnTheWallPlugin, BasePhotosOnTheWallPlugin$requestOpenStatus$2 basePhotosOnTheWallPlugin$requestOpenStatus$2) {
        super(basePhotosOnTheWallPlugin$requestOpenStatus$2);
        this.this$0 = basePhotosOnTheWallPlugin;
    }

    public void onSuccess(HiResponse<PhotosOnTheWallState> hiResponse) {
        Intrinsics.checkNotNullParameter(hiResponse, "response");
        if (!this.this$0.isOnDestroy) {
            this.this$0.mPhotosOnTheWallState = hiResponse.getData();
            XesLogTag access$getTAG$p = this.this$0.TAG;
            Object[] objArr = new Object[1];
            StringBuilder sb = new StringBuilder();
            sb.append("requestOpenStatus---> onSuccess, interactStatus=");
            PhotosOnTheWallState access$getMPhotosOnTheWallState$p = this.this$0.mPhotosOnTheWallState;
            Boolean bool = null;
            sb.append(access$getMPhotosOnTheWallState$p == null ? null : access$getMPhotosOnTheWallState$p.getInteractStatus());
            sb.append(", isSubmit=");
            PhotosOnTheWallState access$getMPhotosOnTheWallState$p2 = this.this$0.mPhotosOnTheWallState;
            if (access$getMPhotosOnTheWallState$p2 != null) {
                bool = access$getMPhotosOnTheWallState$p2.isSubmit();
            }
            sb.append(bool);
            objArr[0] = sb.toString();
            XesLog.i(access$getTAG$p, objArr);
            this.this$0.loadPlugin();
        }
    }
}