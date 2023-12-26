package com.google.android.gms.internal.measurement;

import javax.annotation.CheckForNull;

/* compiled from: com.google.android.gms:play-services-measurement-impl@@20.1.0 */
final class zzhx extends zzhz {
    static final zzhx zza = new zzhx();

    private zzhx() {
    }

    public final boolean equals(@CheckForNull Object obj) {
        return obj == this;
    }

    public final int hashCode() {
        return 2040732332;
    }

    public final String toString() {
        return "Optional.absent()";
    }

    public final Object zza() {
        throw new IllegalStateException("Optional.get() cannot be called on an absent value");
    }

    public final boolean zzb() {
        return false;
    }
}
