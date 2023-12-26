package com.google.android.gms.measurement.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;

/* compiled from: com.google.android.gms:play-services-measurement-impl@@20.1.0 */
public final class zzab extends AbstractSafeParcelable {
    public static final Parcelable.Creator<zzab> CREATOR = new zzac();
    public String zza;
    public String zzb;
    public zzks zzc;
    public long zzd;
    public boolean zze;
    public String zzf;
    public final zzau zzg;
    public long zzh;
    public zzau zzi;
    public final long zzj;
    public final zzau zzk;

    zzab(zzab zzab) {
        Preconditions.checkNotNull(zzab);
        this.zza = zzab.zza;
        this.zzb = zzab.zzb;
        this.zzc = zzab.zzc;
        this.zzd = zzab.zzd;
        this.zze = zzab.zze;
        this.zzf = zzab.zzf;
        this.zzg = zzab.zzg;
        this.zzh = zzab.zzh;
        this.zzi = zzab.zzi;
        this.zzj = zzab.zzj;
        this.zzk = zzab.zzk;
    }

    public final void writeToParcel(Parcel parcel, int i) {
        int beginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeString(parcel, 2, this.zza, false);
        SafeParcelWriter.writeString(parcel, 3, this.zzb, false);
        SafeParcelWriter.writeParcelable(parcel, 4, this.zzc, i, false);
        SafeParcelWriter.writeLong(parcel, 5, this.zzd);
        SafeParcelWriter.writeBoolean(parcel, 6, this.zze);
        SafeParcelWriter.writeString(parcel, 7, this.zzf, false);
        SafeParcelWriter.writeParcelable(parcel, 8, this.zzg, i, false);
        SafeParcelWriter.writeLong(parcel, 9, this.zzh);
        SafeParcelWriter.writeParcelable(parcel, 10, this.zzi, i, false);
        SafeParcelWriter.writeLong(parcel, 11, this.zzj);
        SafeParcelWriter.writeParcelable(parcel, 12, this.zzk, i, false);
        SafeParcelWriter.finishObjectHeader(parcel, beginObjectHeader);
    }

    zzab(String str, String str2, zzks zzks, long j, boolean z, String str3, zzau zzau, long j2, zzau zzau2, long j3, zzau zzau3) {
        this.zza = str;
        this.zzb = str2;
        this.zzc = zzks;
        this.zzd = j;
        this.zze = z;
        this.zzf = str3;
        this.zzg = zzau;
        this.zzh = j2;
        this.zzi = zzau2;
        this.zzj = j3;
        this.zzk = zzau3;
    }
}
