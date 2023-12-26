package com.youth.banner.util;

import android.content.res.Resources;
import android.graphics.Outline;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewOutlineProvider;
import com.bonree.sdk.agent.engine.external.XMLParseInstrumentation;

public class BannerUtils {
    public static int getRealPosition(boolean z, int i, int i2) {
        if (!z) {
            return i;
        }
        if (i == 0) {
            return i2 - 1;
        }
        if (i == i2 + 1) {
            return 0;
        }
        return i - 1;
    }

    public static View getView(ViewGroup viewGroup, int i) {
        LayoutInflater from = LayoutInflater.from(viewGroup.getContext());
        View inflate = !(from instanceof LayoutInflater) ? from.inflate(i, viewGroup, false) : XMLParseInstrumentation.inflate(from, i, viewGroup, false);
        ViewGroup.LayoutParams layoutParams = inflate.getLayoutParams();
        if (!(layoutParams.height == -1 && layoutParams.width == -1)) {
            layoutParams.height = -1;
            layoutParams.width = -1;
            inflate.setLayoutParams(layoutParams);
        }
        return inflate;
    }

    public static int dp2px(float f) {
        return (int) TypedValue.applyDimension(1, f, Resources.getSystem().getDisplayMetrics());
    }

    public static void setBannerRound(View view, final float f) {
        view.setOutlineProvider(new ViewOutlineProvider() {
            public void getOutline(View view, Outline outline) {
                outline.setRoundRect(0, 0, view.getWidth(), view.getHeight(), f);
            }
        });
        view.setClipToOutline(true);
    }
}
