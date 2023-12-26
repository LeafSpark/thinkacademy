package org.extra.tools;

import android.app.Activity;
import android.app.FragmentManager;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.view.View;
import java.util.HashMap;
import java.util.Map;

public class b implements Handler.Callback {
    private static final b c = new b();
    private final Handler a = new Handler(Looper.getMainLooper(), this);
    private final Map b = new HashMap();

    private b() {
    }

    public static b a() {
        return c;
    }

    public boolean handleMessage(Message message) {
        if (message.what != 1) {
            return false;
        }
        FragmentManager fragmentManager = (FragmentManager) message.obj;
        c cVar = (c) fragmentManager.findFragmentByTag("io.pag.manager");
        if (fragmentManager.isDestroyed()) {
            Log.w("Lifecycle", "Parent was destroyed before our Fragment could be added.");
        } else if (cVar != this.b.get(fragmentManager)) {
            Log.w("Lifecycle", "adding Fragment failed.");
        }
        this.b.remove(fragmentManager);
        return true;
    }

    public void a(View view) {
        if ((view.getContext() instanceof Activity) && (view instanceof d)) {
            Activity activity = (Activity) view.getContext();
            if (!activity.isDestroyed()) {
                FragmentManager fragmentManager = activity.getFragmentManager();
                c cVar = (c) this.b.get(fragmentManager);
                if (cVar == null) {
                    c cVar2 = (c) fragmentManager.findFragmentByTag("io.pag.manager");
                    if (cVar2 == null) {
                        cVar2 = new c();
                        this.b.put(fragmentManager, cVar2);
                        fragmentManager.beginTransaction().add(cVar2, "io.pag.manager").commitAllowingStateLoss();
                        this.a.obtainMessage(1, fragmentManager).sendToTarget();
                    }
                    cVar = cVar2;
                }
                cVar.a((d) view);
            }
        }
    }
}
