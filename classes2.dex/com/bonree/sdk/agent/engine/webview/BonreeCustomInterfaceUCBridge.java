package com.bonree.sdk.agent.engine.webview;

import android.webkit.JavascriptInterface;
import com.bonree.sdk.ab.j;
import com.bonree.sdk.agent.Bonree;
import com.bonree.sdk.agent.engine.webview.g;
import com.bonree.sdk.be.f;
import com.bonree.sdk.bs.ad;
import com.bonree.sdk.common.gson.Gson;
import java.util.Map;

public class BonreeCustomInterfaceUCBridge {
    private final f a = com.bonree.sdk.be.a.a();

    static class a {
        /* access modifiers changed from: private */
        public static final BonreeCustomInterfaceUCBridge a = new BonreeCustomInterfaceUCBridge();

        private a() {
        }
    }

    public static BonreeCustomInterfaceUCBridge getInstance() {
        return a.a;
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setUserID(String str) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setUserID:\n%s", str);
            Bonree.setUserID(str);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setExtraInfo(String str) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setExtraInfo:\n%s", str);
            try {
                Bonree.setExtraInfo((Map) new Gson().fromJson(str, Map.class));
            } catch (Throwable th) {
                this.a.a("js setExtraInfo error, ", th);
            }
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomEvent(String str, String str2, String str3) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js onEvent:\n eventID: %s name: %s  param: %s", str, str2, str3);
            Bonree.setCustomEvent(str, str2, str3);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomEvent(String str, String str2) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js onEvent:\n eventID: %s name: %s  ", str, str2);
            Bonree.setCustomEvent(str, str2);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomEventWithLabel(String str, String str2, String str3) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js onEvent:\n eventID: %s eventName: %s  eventLabel: %s", str, str2, str3);
            Bonree.setCustomEventWithLabel(str, str2, str3);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomEventWithLabel(String str, String str2, String str3, String str4) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js onEvent:\n eventID: %s name: %s  label: %s  param: %s", str, str2, str3, str4);
            Bonree.setCustomEventWithLabel(str, str2, str3, str4);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomEventStart(String str, String str2, String str3, String str4) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js onEventStart:\n eventID: %s eventName: %s eventLabel: %s  eventParam: %s", str, str2, str3, str4);
            Bonree.setCustomEventStart(str, str2, str3, str4);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomEventEnd(String str, String str2, String str3, String str4) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js onEventEnd:\n eventID: %s eventName: %s eventLabel: %s  eventParam: %s", str, str2, str3, str4);
            Bonree.setCustomEventEnd(str, str2, str3, str4);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomLog(String str, String str2) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setCustomLog:\n logInfo: %s   param: %s", str, str2);
            Bonree.setCustomLog(str, str2);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomMetric(String str, String str2, String str3) {
        try {
            com.bonree.sdk.d.a.k();
            if (com.bonree.sdk.d.a.s()) {
                this.a.c("UC js setCustomMetric:\n metricName: %s   metricValue: %s    param: %s", str, str2, str3);
                Bonree.setCustomMetric(str, Long.parseLong(str2), str3);
            }
        } catch (Exception e) {
            this.a.c("UC js setCustomMetric is error: %s. name %s, value %s, param %s.", e.getMessage(), str, str2, str3);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomMetric(String str, String str2) {
        setCustomMetric(str, str2, (String) null);
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomPageStart(String str, String str2) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setCustomPageStart pageName: %s pageAlias: %s", str, str2);
            Bonree.setCustomPageStart(str, str2);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomPageEnd(String str, String str2) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setCustomPageEnd pageName: %s pageAlias: %s", str, str2);
            Bonree.setCustomPageEnd(str, str2);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomException(String str, String str2, String str3) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setCustomException exceptionType: %s causedBy: %s   error Dump: %s", str, str2, str3);
            Bonree.setCustomException(str, str2, str3);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomLog(String str) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js setCustomLog info: %s  ", str);
            Bonree.setCustomLog(str);
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomH5performanceData(String str) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js get customH5performance data:\n%s", str);
            if (!ad.a(str)) {
                g.a.a.a(new com.bonree.sdk.w.a(str, true));
            }
        }
    }

    @JavascriptInterface
    @com.uc.webview.export.JavascriptInterface
    public void setCustomRouteChangeData(String str) {
        com.bonree.sdk.d.a.k();
        if (com.bonree.sdk.d.a.s()) {
            this.a.c("UC js get customRouteChange data:\n%s", str);
            g.a.a.a(new j(str, true));
        }
    }
}
