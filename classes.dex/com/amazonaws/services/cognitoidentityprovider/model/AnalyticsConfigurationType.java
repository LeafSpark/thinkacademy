package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class AnalyticsConfigurationType implements Serializable {
    private String applicationArn;
    private String applicationId;
    private String externalId;
    private String roleArn;
    private Boolean userDataShared;

    public String getApplicationId() {
        return this.applicationId;
    }

    public void setApplicationId(String str) {
        this.applicationId = str;
    }

    public AnalyticsConfigurationType withApplicationId(String str) {
        this.applicationId = str;
        return this;
    }

    public String getApplicationArn() {
        return this.applicationArn;
    }

    public void setApplicationArn(String str) {
        this.applicationArn = str;
    }

    public AnalyticsConfigurationType withApplicationArn(String str) {
        this.applicationArn = str;
        return this;
    }

    public String getRoleArn() {
        return this.roleArn;
    }

    public void setRoleArn(String str) {
        this.roleArn = str;
    }

    public AnalyticsConfigurationType withRoleArn(String str) {
        this.roleArn = str;
        return this;
    }

    public String getExternalId() {
        return this.externalId;
    }

    public void setExternalId(String str) {
        this.externalId = str;
    }

    public AnalyticsConfigurationType withExternalId(String str) {
        this.externalId = str;
        return this;
    }

    public Boolean isUserDataShared() {
        return this.userDataShared;
    }

    public Boolean getUserDataShared() {
        return this.userDataShared;
    }

    public void setUserDataShared(Boolean bool) {
        this.userDataShared = bool;
    }

    public AnalyticsConfigurationType withUserDataShared(Boolean bool) {
        this.userDataShared = bool;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getApplicationId() != null) {
            sb.append("ApplicationId: " + getApplicationId() + ",");
        }
        if (getApplicationArn() != null) {
            sb.append("ApplicationArn: " + getApplicationArn() + ",");
        }
        if (getRoleArn() != null) {
            sb.append("RoleArn: " + getRoleArn() + ",");
        }
        if (getExternalId() != null) {
            sb.append("ExternalId: " + getExternalId() + ",");
        }
        if (getUserDataShared() != null) {
            sb.append("UserDataShared: " + getUserDataShared());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((((((((getApplicationId() == null ? 0 : getApplicationId().hashCode()) + 31) * 31) + (getApplicationArn() == null ? 0 : getApplicationArn().hashCode())) * 31) + (getRoleArn() == null ? 0 : getRoleArn().hashCode())) * 31) + (getExternalId() == null ? 0 : getExternalId().hashCode())) * 31;
        if (getUserDataShared() != null) {
            i = getUserDataShared().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof AnalyticsConfigurationType)) {
            return false;
        }
        AnalyticsConfigurationType analyticsConfigurationType = (AnalyticsConfigurationType) obj;
        if ((analyticsConfigurationType.getApplicationId() == null) ^ (getApplicationId() == null)) {
            return false;
        }
        if (analyticsConfigurationType.getApplicationId() != null && !analyticsConfigurationType.getApplicationId().equals(getApplicationId())) {
            return false;
        }
        if ((analyticsConfigurationType.getApplicationArn() == null) ^ (getApplicationArn() == null)) {
            return false;
        }
        if (analyticsConfigurationType.getApplicationArn() != null && !analyticsConfigurationType.getApplicationArn().equals(getApplicationArn())) {
            return false;
        }
        if ((analyticsConfigurationType.getRoleArn() == null) ^ (getRoleArn() == null)) {
            return false;
        }
        if (analyticsConfigurationType.getRoleArn() != null && !analyticsConfigurationType.getRoleArn().equals(getRoleArn())) {
            return false;
        }
        if ((analyticsConfigurationType.getExternalId() == null) ^ (getExternalId() == null)) {
            return false;
        }
        if (analyticsConfigurationType.getExternalId() != null && !analyticsConfigurationType.getExternalId().equals(getExternalId())) {
            return false;
        }
        if ((analyticsConfigurationType.getUserDataShared() == null) ^ (getUserDataShared() == null)) {
            return false;
        }
        return analyticsConfigurationType.getUserDataShared() == null || analyticsConfigurationType.getUserDataShared().equals(getUserDataShared());
    }
}
