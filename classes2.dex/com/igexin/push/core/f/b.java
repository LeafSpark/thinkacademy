package com.igexin.push.core.f;

import android.content.Intent;
import com.igexin.push.core.d;
import com.igexin.sdk.PushActivity;
import java.util.HashMap;
import java.util.Map;

public class b {
    private static b b;
    private Map<Long, a> a = new HashMap();

    private b() {
    }

    public static b a() {
        if (b == null) {
            b = new b();
        }
        return b;
    }

    private void d(a aVar) {
        if (aVar != null) {
            this.a.put(aVar.a(), aVar);
        }
    }

    public a a(Long l) {
        return this.a.get(l);
    }

    public void a(a aVar) {
        if (aVar != null) {
            d(aVar);
            Intent intent = new Intent(d.g, PushActivity.class);
            intent.putExtra("activityid", aVar.a());
            intent.setFlags(268435456);
            d.g.startActivity(intent);
        }
    }

    public void b(a aVar) {
        if (aVar != null) {
            aVar.i();
            c(aVar);
        }
    }

    public void c(a aVar) {
        if (aVar != null) {
            this.a.remove(aVar.a());
        }
    }
}
