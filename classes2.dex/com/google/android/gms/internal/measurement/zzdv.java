package com.google.android.gms.internal.measurement;

import android.os.Bundle;
import com.google.android.gms.measurement.internal.zzgs;

/* compiled from: com.google.android.gms:play-services-measurement-sdk-api@@20.1.0 */
final class zzdv extends zzch {
    private final zzgs zza;

    zzdv(zzgs zzgs) {
        this.zza = zzgs;
    }

    public final int zzd() {
        return System.identityHashCode(this.zza);
    }

    public final void zze(String str, String str2, Bundle bundle, long j) {
        this.zza.onEvent(str, str2, bundle, j);
    }
}
