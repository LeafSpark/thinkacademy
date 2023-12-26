package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class AssociateSoftwareTokenResult implements Serializable {
    private String secretCode;
    private String session;

    public String getSecretCode() {
        return this.secretCode;
    }

    public void setSecretCode(String str) {
        this.secretCode = str;
    }

    public AssociateSoftwareTokenResult withSecretCode(String str) {
        this.secretCode = str;
        return this;
    }

    public String getSession() {
        return this.session;
    }

    public void setSession(String str) {
        this.session = str;
    }

    public AssociateSoftwareTokenResult withSession(String str) {
        this.session = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getSecretCode() != null) {
            sb.append("SecretCode: " + getSecretCode() + ",");
        }
        if (getSession() != null) {
            sb.append("Session: " + getSession());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getSecretCode() == null ? 0 : getSecretCode().hashCode()) + 31) * 31;
        if (getSession() != null) {
            i = getSession().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof AssociateSoftwareTokenResult)) {
            return false;
        }
        AssociateSoftwareTokenResult associateSoftwareTokenResult = (AssociateSoftwareTokenResult) obj;
        if ((associateSoftwareTokenResult.getSecretCode() == null) ^ (getSecretCode() == null)) {
            return false;
        }
        if (associateSoftwareTokenResult.getSecretCode() != null && !associateSoftwareTokenResult.getSecretCode().equals(getSecretCode())) {
            return false;
        }
        if ((associateSoftwareTokenResult.getSession() == null) ^ (getSession() == null)) {
            return false;
        }
        return associateSoftwareTokenResult.getSession() == null || associateSoftwareTokenResult.getSession().equals(getSession());
    }
}
