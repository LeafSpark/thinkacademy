package com.google.android.gms.measurement.internal;

import com.google.android.gms.common.internal.Preconditions;

/* compiled from: com.google.android.gms:play-services-measurement@@20.1.0 */
final class zzga implements Runnable {
    final /* synthetic */ zzp zza;
    final /* synthetic */ zzgj zzb;

    zzga(zzgj zzgj, zzp zzp) {
        this.zzb = zzgj;
        this.zza = zzp;
    }

    public final void run() {
        this.zzb.zza.zzA();
        zzkp zzc = this.zzb.zza;
        zzp zzp = this.zza;
        zzc.zzaz().zzg();
        zzc.zzB();
        Preconditions.checkNotEmpty(zzp.zza);
        zzc.zzd(zzp);
    }
}
