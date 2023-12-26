package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class HttpHeader implements Serializable {
    private String headerName;
    private String headerValue;

    public String getHeaderName() {
        return this.headerName;
    }

    public void setHeaderName(String str) {
        this.headerName = str;
    }

    public HttpHeader withHeaderName(String str) {
        this.headerName = str;
        return this;
    }

    public String getHeaderValue() {
        return this.headerValue;
    }

    public void setHeaderValue(String str) {
        this.headerValue = str;
    }

    public HttpHeader withHeaderValue(String str) {
        this.headerValue = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getHeaderName() != null) {
            sb.append("headerName: " + getHeaderName() + ",");
        }
        if (getHeaderValue() != null) {
            sb.append("headerValue: " + getHeaderValue());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getHeaderName() == null ? 0 : getHeaderName().hashCode()) + 31) * 31;
        if (getHeaderValue() != null) {
            i = getHeaderValue().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof HttpHeader)) {
            return false;
        }
        HttpHeader httpHeader = (HttpHeader) obj;
        if ((httpHeader.getHeaderName() == null) ^ (getHeaderName() == null)) {
            return false;
        }
        if (httpHeader.getHeaderName() != null && !httpHeader.getHeaderName().equals(getHeaderName())) {
            return false;
        }
        if ((httpHeader.getHeaderValue() == null) ^ (getHeaderValue() == null)) {
            return false;
        }
        return httpHeader.getHeaderValue() == null || httpHeader.getHeaderValue().equals(getHeaderValue());
    }
}
