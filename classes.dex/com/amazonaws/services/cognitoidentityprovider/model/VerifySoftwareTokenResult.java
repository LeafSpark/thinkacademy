package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class VerifySoftwareTokenResult implements Serializable {
    private String session;
    private String status;

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String str) {
        this.status = str;
    }

    public VerifySoftwareTokenResult withStatus(String str) {
        this.status = str;
        return this;
    }

    public void setStatus(VerifySoftwareTokenResponseType verifySoftwareTokenResponseType) {
        this.status = verifySoftwareTokenResponseType.toString();
    }

    public VerifySoftwareTokenResult withStatus(VerifySoftwareTokenResponseType verifySoftwareTokenResponseType) {
        this.status = verifySoftwareTokenResponseType.toString();
        return this;
    }

    public String getSession() {
        return this.session;
    }

    public void setSession(String str) {
        this.session = str;
    }

    public VerifySoftwareTokenResult withSession(String str) {
        this.session = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getStatus() != null) {
            sb.append("Status: " + getStatus() + ",");
        }
        if (getSession() != null) {
            sb.append("Session: " + getSession());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getStatus() == null ? 0 : getStatus().hashCode()) + 31) * 31;
        if (getSession() != null) {
            i = getSession().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof VerifySoftwareTokenResult)) {
            return false;
        }
        VerifySoftwareTokenResult verifySoftwareTokenResult = (VerifySoftwareTokenResult) obj;
        if ((verifySoftwareTokenResult.getStatus() == null) ^ (getStatus() == null)) {
            return false;
        }
        if (verifySoftwareTokenResult.getStatus() != null && !verifySoftwareTokenResult.getStatus().equals(getStatus())) {
            return false;
        }
        if ((verifySoftwareTokenResult.getSession() == null) ^ (getSession() == null)) {
            return false;
        }
        return verifySoftwareTokenResult.getSession() == null || verifySoftwareTokenResult.getSession().equals(getSession());
    }
}
