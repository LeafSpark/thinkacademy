package io.ktor.utils.io;

import io.ktor.utils.io.internal.JoiningState;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;

@Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "io.ktor.utils.io.ByteBufferChannel", f = "ByteBufferChannel.kt", i = {0, 0, 0}, l = {1147, 1155}, m = "joinFromSuspend", n = {"this", "src", "delegateClose"}, s = {"L$0", "L$1", "Z$0"})
/* compiled from: ByteBufferChannel.kt */
final class ByteBufferChannel$joinFromSuspend$1 extends ContinuationImpl {
    Object L$0;
    Object L$1;
    boolean Z$0;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ ByteBufferChannel this$0;

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    ByteBufferChannel$joinFromSuspend$1(ByteBufferChannel byteBufferChannel, Continuation<? super ByteBufferChannel$joinFromSuspend$1> continuation) {
        super(continuation);
        this.this$0 = byteBufferChannel;
    }

    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.joinFromSuspend((ByteBufferChannel) null, false, (JoiningState) null, (Continuation) this);
    }
}
