package com.amazonaws.services.kms.model;

import java.io.Serializable;
import java.nio.ByteBuffer;

public class GenerateDataKeyPairResult implements Serializable {
    private String keyId;
    private String keyPairSpec;
    private ByteBuffer privateKeyCiphertextBlob;
    private ByteBuffer privateKeyPlaintext;
    private ByteBuffer publicKey;

    public ByteBuffer getPrivateKeyCiphertextBlob() {
        return this.privateKeyCiphertextBlob;
    }

    public void setPrivateKeyCiphertextBlob(ByteBuffer byteBuffer) {
        this.privateKeyCiphertextBlob = byteBuffer;
    }

    public GenerateDataKeyPairResult withPrivateKeyCiphertextBlob(ByteBuffer byteBuffer) {
        this.privateKeyCiphertextBlob = byteBuffer;
        return this;
    }

    public ByteBuffer getPrivateKeyPlaintext() {
        return this.privateKeyPlaintext;
    }

    public void setPrivateKeyPlaintext(ByteBuffer byteBuffer) {
        this.privateKeyPlaintext = byteBuffer;
    }

    public GenerateDataKeyPairResult withPrivateKeyPlaintext(ByteBuffer byteBuffer) {
        this.privateKeyPlaintext = byteBuffer;
        return this;
    }

    public ByteBuffer getPublicKey() {
        return this.publicKey;
    }

    public void setPublicKey(ByteBuffer byteBuffer) {
        this.publicKey = byteBuffer;
    }

    public GenerateDataKeyPairResult withPublicKey(ByteBuffer byteBuffer) {
        this.publicKey = byteBuffer;
        return this;
    }

    public String getKeyId() {
        return this.keyId;
    }

    public void setKeyId(String str) {
        this.keyId = str;
    }

    public GenerateDataKeyPairResult withKeyId(String str) {
        this.keyId = str;
        return this;
    }

    public String getKeyPairSpec() {
        return this.keyPairSpec;
    }

    public void setKeyPairSpec(String str) {
        this.keyPairSpec = str;
    }

    public GenerateDataKeyPairResult withKeyPairSpec(String str) {
        this.keyPairSpec = str;
        return this;
    }

    public void setKeyPairSpec(DataKeyPairSpec dataKeyPairSpec) {
        this.keyPairSpec = dataKeyPairSpec.toString();
    }

    public GenerateDataKeyPairResult withKeyPairSpec(DataKeyPairSpec dataKeyPairSpec) {
        this.keyPairSpec = dataKeyPairSpec.toString();
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getPrivateKeyCiphertextBlob() != null) {
            sb.append("PrivateKeyCiphertextBlob: " + getPrivateKeyCiphertextBlob() + ",");
        }
        if (getPrivateKeyPlaintext() != null) {
            sb.append("PrivateKeyPlaintext: " + getPrivateKeyPlaintext() + ",");
        }
        if (getPublicKey() != null) {
            sb.append("PublicKey: " + getPublicKey() + ",");
        }
        if (getKeyId() != null) {
            sb.append("KeyId: " + getKeyId() + ",");
        }
        if (getKeyPairSpec() != null) {
            sb.append("KeyPairSpec: " + getKeyPairSpec());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i;
        int i2 = 0;
        if (getPrivateKeyCiphertextBlob() == null) {
            i = 0;
        } else {
            i = getPrivateKeyCiphertextBlob().hashCode();
        }
        int hashCode = (((((((i + 31) * 31) + (getPrivateKeyPlaintext() == null ? 0 : getPrivateKeyPlaintext().hashCode())) * 31) + (getPublicKey() == null ? 0 : getPublicKey().hashCode())) * 31) + (getKeyId() == null ? 0 : getKeyId().hashCode())) * 31;
        if (getKeyPairSpec() != null) {
            i2 = getKeyPairSpec().hashCode();
        }
        return hashCode + i2;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof GenerateDataKeyPairResult)) {
            return false;
        }
        GenerateDataKeyPairResult generateDataKeyPairResult = (GenerateDataKeyPairResult) obj;
        if ((generateDataKeyPairResult.getPrivateKeyCiphertextBlob() == null) ^ (getPrivateKeyCiphertextBlob() == null)) {
            return false;
        }
        if (generateDataKeyPairResult.getPrivateKeyCiphertextBlob() != null && !generateDataKeyPairResult.getPrivateKeyCiphertextBlob().equals(getPrivateKeyCiphertextBlob())) {
            return false;
        }
        if ((generateDataKeyPairResult.getPrivateKeyPlaintext() == null) ^ (getPrivateKeyPlaintext() == null)) {
            return false;
        }
        if (generateDataKeyPairResult.getPrivateKeyPlaintext() != null && !generateDataKeyPairResult.getPrivateKeyPlaintext().equals(getPrivateKeyPlaintext())) {
            return false;
        }
        if ((generateDataKeyPairResult.getPublicKey() == null) ^ (getPublicKey() == null)) {
            return false;
        }
        if (generateDataKeyPairResult.getPublicKey() != null && !generateDataKeyPairResult.getPublicKey().equals(getPublicKey())) {
            return false;
        }
        if ((generateDataKeyPairResult.getKeyId() == null) ^ (getKeyId() == null)) {
            return false;
        }
        if (generateDataKeyPairResult.getKeyId() != null && !generateDataKeyPairResult.getKeyId().equals(getKeyId())) {
            return false;
        }
        if ((generateDataKeyPairResult.getKeyPairSpec() == null) ^ (getKeyPairSpec() == null)) {
            return false;
        }
        return generateDataKeyPairResult.getKeyPairSpec() == null || generateDataKeyPairResult.getKeyPairSpec().equals(getKeyPairSpec());
    }
}
