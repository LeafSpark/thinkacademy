package org.bouncycastle.asn1;

import java.io.IOException;

public class BERPrivateParser implements ASN1PrivateParser {
    private final ASN1StreamParser parser;
    private final int tag;

    BERPrivateParser(int i, ASN1StreamParser aSN1StreamParser) {
        this.tag = i;
        this.parser = aSN1StreamParser;
    }

    public ASN1Primitive getLoadedObject() throws IOException {
        return new BERPrivate(this.tag, this.parser.readVector());
    }

    public ASN1Encodable readObject() throws IOException {
        return this.parser.readObject();
    }

    public ASN1Primitive toASN1Primitive() {
        try {
            return getLoadedObject();
        } catch (IOException e) {
            throw new ASN1ParsingException(e.getMessage(), e);
        }
    }
}
