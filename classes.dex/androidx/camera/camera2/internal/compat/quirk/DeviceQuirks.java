package androidx.camera.camera2.internal.compat.quirk;

import androidx.camera.core.impl.Quirk;
import androidx.camera.core.impl.Quirks;

public class DeviceQuirks {
    private static final Quirks QUIRKS = new Quirks(DeviceQuirksLoader.loadQuirks());

    private DeviceQuirks() {
    }

    public static Quirks getAll() {
        return QUIRKS;
    }

    public static <T extends Quirk> T get(Class<T> cls) {
        return QUIRKS.get(cls);
    }
}
