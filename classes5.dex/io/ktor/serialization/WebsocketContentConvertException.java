package io.ktor.serialization;

import com.tekartik.sqflite.Constant;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0003\n\u0002\b\u0002\b\u0016\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u0006¨\u0006\u0007"}, d2 = {"Lio/ktor/serialization/WebsocketContentConvertException;", "Lio/ktor/serialization/ContentConvertException;", "message", "", "cause", "", "(Ljava/lang/String;Ljava/lang/Throwable;)V", "ktor-serialization"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ContentConvertException.kt */
public class WebsocketContentConvertException extends ContentConvertException {
    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public /* synthetic */ WebsocketContentConvertException(String str, Throwable th, int i, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i & 2) != 0 ? null : th);
    }

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    public WebsocketContentConvertException(String str, Throwable th) {
        super(str, th);
        Intrinsics.checkNotNullParameter(str, Constant.PARAM_ERROR_MESSAGE);
    }
}