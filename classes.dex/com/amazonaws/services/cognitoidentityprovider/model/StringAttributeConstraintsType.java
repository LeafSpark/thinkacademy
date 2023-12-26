package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class StringAttributeConstraintsType implements Serializable {
    private String maxLength;
    private String minLength;

    public String getMinLength() {
        return this.minLength;
    }

    public void setMinLength(String str) {
        this.minLength = str;
    }

    public StringAttributeConstraintsType withMinLength(String str) {
        this.minLength = str;
        return this;
    }

    public String getMaxLength() {
        return this.maxLength;
    }

    public void setMaxLength(String str) {
        this.maxLength = str;
    }

    public StringAttributeConstraintsType withMaxLength(String str) {
        this.maxLength = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getMinLength() != null) {
            sb.append("MinLength: " + getMinLength() + ",");
        }
        if (getMaxLength() != null) {
            sb.append("MaxLength: " + getMaxLength());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getMinLength() == null ? 0 : getMinLength().hashCode()) + 31) * 31;
        if (getMaxLength() != null) {
            i = getMaxLength().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof StringAttributeConstraintsType)) {
            return false;
        }
        StringAttributeConstraintsType stringAttributeConstraintsType = (StringAttributeConstraintsType) obj;
        if ((stringAttributeConstraintsType.getMinLength() == null) ^ (getMinLength() == null)) {
            return false;
        }
        if (stringAttributeConstraintsType.getMinLength() != null && !stringAttributeConstraintsType.getMinLength().equals(getMinLength())) {
            return false;
        }
        if ((stringAttributeConstraintsType.getMaxLength() == null) ^ (getMaxLength() == null)) {
            return false;
        }
        return stringAttributeConstraintsType.getMaxLength() == null || stringAttributeConstraintsType.getMaxLength().equals(getMaxLength());
    }
}
