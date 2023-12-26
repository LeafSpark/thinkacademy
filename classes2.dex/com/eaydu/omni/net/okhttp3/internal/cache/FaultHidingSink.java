package com.eaydu.omni.net.okhttp3.internal.cache;

import com.eaydu.omni.net.okio.Buffer;
import com.eaydu.omni.net.okio.ForwardingSink;
import com.eaydu.omni.net.okio.Sink;
import java.io.IOException;

class FaultHidingSink extends ForwardingSink {
    private boolean hasErrors;

    /* access modifiers changed from: protected */
    public void onException(IOException iOException) {
    }

    FaultHidingSink(Sink sink) {
        super(sink);
    }

    public void write(Buffer buffer, long j) throws IOException {
        if (this.hasErrors) {
            buffer.skip(j);
            return;
        }
        try {
            super.write(buffer, j);
        } catch (IOException e) {
            this.hasErrors = true;
            onException(e);
        }
    }

    public void flush() throws IOException {
        if (!this.hasErrors) {
            try {
                super.flush();
            } catch (IOException e) {
                this.hasErrors = true;
                onException(e);
            }
        }
    }

    public void close() throws IOException {
        if (!this.hasErrors) {
            try {
                super.close();
            } catch (IOException e) {
                this.hasErrors = true;
                onException(e);
            }
        }
    }
}
