package io.ktor.utils.io;

import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;

@Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "io.ktor.utils.io.ByteBufferChannel", f = "ByteBufferChannel.kt", i = {0, 0, 0, 0}, l = {1408}, m = "writeFullySuspend", n = {"this", "src", "currentOffset", "currentLength"}, s = {"L$0", "L$1", "I$0", "I$1"})
/* compiled from: ByteBufferChannel.kt */
final class ByteBufferChannel$writeFullySuspend$5 extends ContinuationImpl {
    int I$0;
    int I$1;
    Object L$0;
    Object L$1;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ ByteBufferChannel this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    ByteBufferChannel$writeFullySuspend$5(ByteBufferChannel byteBufferChannel, Continuation<? super ByteBufferChannel$writeFullySuspend$5> continuation) {
        super(continuation);
        this.this$0 = byteBufferChannel;
    }

    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.writeFullySuspend((byte[]) null, 0, 0, (Continuation) this);
    }
}
