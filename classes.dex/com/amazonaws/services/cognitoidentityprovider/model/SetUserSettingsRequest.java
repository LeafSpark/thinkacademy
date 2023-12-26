package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonWebServiceRequest;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class SetUserSettingsRequest extends AmazonWebServiceRequest implements Serializable {
    private String accessToken;
    private List<MFAOptionType> mFAOptions;

    public String getAccessToken() {
        return this.accessToken;
    }

    public void setAccessToken(String str) {
        this.accessToken = str;
    }

    public SetUserSettingsRequest withAccessToken(String str) {
        this.accessToken = str;
        return this;
    }

    public List<MFAOptionType> getMFAOptions() {
        return this.mFAOptions;
    }

    public void setMFAOptions(Collection<MFAOptionType> collection) {
        if (collection == null) {
            this.mFAOptions = null;
        } else {
            this.mFAOptions = new ArrayList(collection);
        }
    }

    public SetUserSettingsRequest withMFAOptions(MFAOptionType... mFAOptionTypeArr) {
        if (getMFAOptions() == null) {
            this.mFAOptions = new ArrayList(mFAOptionTypeArr.length);
        }
        for (MFAOptionType add : mFAOptionTypeArr) {
            this.mFAOptions.add(add);
        }
        return this;
    }

    public SetUserSettingsRequest withMFAOptions(Collection<MFAOptionType> collection) {
        setMFAOptions(collection);
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getAccessToken() != null) {
            sb.append("AccessToken: " + getAccessToken() + ",");
        }
        if (getMFAOptions() != null) {
            sb.append("MFAOptions: " + getMFAOptions());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getAccessToken() == null ? 0 : getAccessToken().hashCode()) + 31) * 31;
        if (getMFAOptions() != null) {
            i = getMFAOptions().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof SetUserSettingsRequest)) {
            return false;
        }
        SetUserSettingsRequest setUserSettingsRequest = (SetUserSettingsRequest) obj;
        if ((setUserSettingsRequest.getAccessToken() == null) ^ (getAccessToken() == null)) {
            return false;
        }
        if (setUserSettingsRequest.getAccessToken() != null && !setUserSettingsRequest.getAccessToken().equals(getAccessToken())) {
            return false;
        }
        if ((setUserSettingsRequest.getMFAOptions() == null) ^ (getMFAOptions() == null)) {
            return false;
        }
        return setUserSettingsRequest.getMFAOptions() == null || setUserSettingsRequest.getMFAOptions().equals(getMFAOptions());
    }
}
