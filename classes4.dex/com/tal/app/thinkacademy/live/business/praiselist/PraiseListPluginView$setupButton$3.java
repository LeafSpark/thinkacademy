package com.tal.app.thinkacademy.live.business.praiselist;

import android.graphics.Outline;
import android.view.View;
import android.view.ViewOutlineProvider;
import com.tal.app.thinkacademy.lib.util.SizeUtils;
import kotlin.Metadata;

@Metadata(d1 = {"\u0000\u001d\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u001c\u0010\u0002\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0016¨\u0006\b"}, d2 = {"com/tal/app/thinkacademy/live/business/praiselist/PraiseListPluginView$setupButton$3", "Landroid/view/ViewOutlineProvider;", "getOutline", "", "view", "Landroid/view/View;", "outline", "Landroid/graphics/Outline;", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: PraiseListPluginView.kt */
public final class PraiseListPluginView$setupButton$3 extends ViewOutlineProvider {
    PraiseListPluginView$setupButton$3() {
    }

    public void getOutline(View view, Outline outline) {
        int i;
        if (outline != null) {
            int width = view == null ? 0 : view.getWidth();
            if (view == null) {
                i = 0;
            } else {
                i = view.getHeight();
            }
            outline.setRoundRect(0, 0, width, i, (float) SizeUtils.dp2px(10.0f));
        }
    }
}
