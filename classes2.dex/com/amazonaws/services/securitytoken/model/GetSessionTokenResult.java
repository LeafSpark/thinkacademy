package com.amazonaws.services.securitytoken.model;

import java.io.Serializable;

public class GetSessionTokenResult implements Serializable {
    private Credentials credentials;

    public Credentials getCredentials() {
        return this.credentials;
    }

    public void setCredentials(Credentials credentials2) {
        this.credentials = credentials2;
    }

    public GetSessionTokenResult withCredentials(Credentials credentials2) {
        this.credentials = credentials2;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getCredentials() != null) {
            sb.append("Credentials: " + getCredentials());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        return 31 + (getCredentials() == null ? 0 : getCredentials().hashCode());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof GetSessionTokenResult)) {
            return false;
        }
        GetSessionTokenResult getSessionTokenResult = (GetSessionTokenResult) obj;
        if ((getSessionTokenResult.getCredentials() == null) ^ (getCredentials() == null)) {
            return false;
        }
        return getSessionTokenResult.getCredentials() == null || getSessionTokenResult.getCredentials().equals(getCredentials());
    }
}
