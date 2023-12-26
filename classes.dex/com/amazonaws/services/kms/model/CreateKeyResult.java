package com.amazonaws.services.kms.model;

import java.io.Serializable;

public class CreateKeyResult implements Serializable {
    private KeyMetadata keyMetadata;

    public KeyMetadata getKeyMetadata() {
        return this.keyMetadata;
    }

    public void setKeyMetadata(KeyMetadata keyMetadata2) {
        this.keyMetadata = keyMetadata2;
    }

    public CreateKeyResult withKeyMetadata(KeyMetadata keyMetadata2) {
        this.keyMetadata = keyMetadata2;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getKeyMetadata() != null) {
            sb.append("KeyMetadata: " + getKeyMetadata());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        return 31 + (getKeyMetadata() == null ? 0 : getKeyMetadata().hashCode());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof CreateKeyResult)) {
            return false;
        }
        CreateKeyResult createKeyResult = (CreateKeyResult) obj;
        if ((createKeyResult.getKeyMetadata() == null) ^ (getKeyMetadata() == null)) {
            return false;
        }
        return createKeyResult.getKeyMetadata() == null || createKeyResult.getKeyMetadata().equals(getKeyMetadata());
    }
}
