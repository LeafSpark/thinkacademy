package io.ktor.utils.io;

import io.ktor.utils.io.core.BytePacketBuilder;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;

@Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "io.ktor.utils.io.ByteChannelSequentialBase", f = "ByteChannelSequential.kt", i = {0, 0, 0}, l = {456}, m = "readPacketSuspend", n = {"this", "builder", "remaining"}, s = {"L$0", "L$1", "I$0"})
/* compiled from: ByteChannelSequential.kt */
final class ByteChannelSequentialBase$readPacketSuspend$1 extends ContinuationImpl {
    int I$0;
    Object L$0;
    Object L$1;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ ByteChannelSequentialBase this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    ByteChannelSequentialBase$readPacketSuspend$1(ByteChannelSequentialBase byteChannelSequentialBase, Continuation<? super ByteChannelSequentialBase$readPacketSuspend$1> continuation) {
        super(continuation);
        this.this$0 = byteChannelSequentialBase;
    }

    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.readPacketSuspend((BytePacketBuilder) null, 0, (Continuation) this);
    }
}
