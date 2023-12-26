package com.tal.app.thinkacademy.live.business.photosonthewall.driver;

import com.tal.app.thinkacademy.lib.logger.XesLog;
import com.tal.app.thinkacademy.lib.network.exception.IError;
import kotlin.Metadata;

@Metadata(d1 = {"\u0000\u001f\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u001a\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0016J\u001a\u0010\b\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0016¨\u0006\t"}, d2 = {"com/tal/app/thinkacademy/live/business/photosonthewall/driver/BasePhotosOnTheWallPlugin$requestOpenStatus$2", "Lcom/tal/app/thinkacademy/lib/network/exception/IError;", "onError", "", "code", "", "msg", "", "onFail", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: BasePhotosOnTheWallPlugin.kt */
public final class BasePhotosOnTheWallPlugin$requestOpenStatus$2 implements IError {
    final /* synthetic */ BasePhotosOnTheWallPlugin this$0;

    BasePhotosOnTheWallPlugin$requestOpenStatus$2(BasePhotosOnTheWallPlugin basePhotosOnTheWallPlugin) {
        this.this$0 = basePhotosOnTheWallPlugin;
    }

    public void onFail(int i, String str) {
        if (!this.this$0.isOnDestroy) {
            XesLog.i(this.this$0.TAG, "requestOpenStatus---> onFailed");
            this.this$0.loadPlugin();
        }
    }

    public void onError(int i, String str) {
        if (!this.this$0.isOnDestroy) {
            XesLog.i(this.this$0.TAG, "requestOpenStatus---> onError");
            this.this$0.loadPlugin();
        }
    }
}
