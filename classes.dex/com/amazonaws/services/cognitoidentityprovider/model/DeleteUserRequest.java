package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonWebServiceRequest;
import java.io.Serializable;

public class DeleteUserRequest extends AmazonWebServiceRequest implements Serializable {
    private String accessToken;

    public String getAccessToken() {
        return this.accessToken;
    }

    public void setAccessToken(String str) {
        this.accessToken = str;
    }

    public DeleteUserRequest withAccessToken(String str) {
        this.accessToken = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getAccessToken() != null) {
            sb.append("AccessToken: " + getAccessToken());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        return 31 + (getAccessToken() == null ? 0 : getAccessToken().hashCode());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof DeleteUserRequest)) {
            return false;
        }
        DeleteUserRequest deleteUserRequest = (DeleteUserRequest) obj;
        if ((deleteUserRequest.getAccessToken() == null) ^ (getAccessToken() == null)) {
            return false;
        }
        return deleteUserRequest.getAccessToken() == null || deleteUserRequest.getAccessToken().equals(getAccessToken());
    }
}
