package com.adyen.checkout.card.api;

import com.adyen.checkout.core.log.LogUtil;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\"\u000e\u0010\u0000\u001a\u00020\u0001XT¢\u0006\u0002\n\u0000\"\u000e\u0010\u0002\u001a\u00020\u0001X\u0004¢\u0006\u0002\n\u0000¨\u0006\u0003"}, d2 = {"ENDPOINT", "", "TAG", "card_release"}, k = 2, mv = {1, 5, 1}, xi = 48)
/* compiled from: BinLookupConnection.kt */
public final class BinLookupConnectionKt {
    private static final String ENDPOINT = "v2/bin/binLookup?clientKey=";
    /* access modifiers changed from: private */
    public static final String TAG;

    static {
        String tag = LogUtil.getTag();
        Intrinsics.checkNotNullExpressionValue(tag, "getTag()");
        TAG = tag;
    }
}
