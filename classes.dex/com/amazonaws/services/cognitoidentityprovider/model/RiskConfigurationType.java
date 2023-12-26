package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;
import java.util.Date;

public class RiskConfigurationType implements Serializable {
    private AccountTakeoverRiskConfigurationType accountTakeoverRiskConfiguration;
    private String clientId;
    private CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfiguration;
    private Date lastModifiedDate;
    private RiskExceptionConfigurationType riskExceptionConfiguration;
    private String userPoolId;

    public String getUserPoolId() {
        return this.userPoolId;
    }

    public void setUserPoolId(String str) {
        this.userPoolId = str;
    }

    public RiskConfigurationType withUserPoolId(String str) {
        this.userPoolId = str;
        return this;
    }

    public String getClientId() {
        return this.clientId;
    }

    public void setClientId(String str) {
        this.clientId = str;
    }

    public RiskConfigurationType withClientId(String str) {
        this.clientId = str;
        return this;
    }

    public CompromisedCredentialsRiskConfigurationType getCompromisedCredentialsRiskConfiguration() {
        return this.compromisedCredentialsRiskConfiguration;
    }

    public void setCompromisedCredentialsRiskConfiguration(CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfigurationType) {
        this.compromisedCredentialsRiskConfiguration = compromisedCredentialsRiskConfigurationType;
    }

    public RiskConfigurationType withCompromisedCredentialsRiskConfiguration(CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfigurationType) {
        this.compromisedCredentialsRiskConfiguration = compromisedCredentialsRiskConfigurationType;
        return this;
    }

    public AccountTakeoverRiskConfigurationType getAccountTakeoverRiskConfiguration() {
        return this.accountTakeoverRiskConfiguration;
    }

    public void setAccountTakeoverRiskConfiguration(AccountTakeoverRiskConfigurationType accountTakeoverRiskConfigurationType) {
        this.accountTakeoverRiskConfiguration = accountTakeoverRiskConfigurationType;
    }

    public RiskConfigurationType withAccountTakeoverRiskConfiguration(AccountTakeoverRiskConfigurationType accountTakeoverRiskConfigurationType) {
        this.accountTakeoverRiskConfiguration = accountTakeoverRiskConfigurationType;
        return this;
    }

    public RiskExceptionConfigurationType getRiskExceptionConfiguration() {
        return this.riskExceptionConfiguration;
    }

    public void setRiskExceptionConfiguration(RiskExceptionConfigurationType riskExceptionConfigurationType) {
        this.riskExceptionConfiguration = riskExceptionConfigurationType;
    }

    public RiskConfigurationType withRiskExceptionConfiguration(RiskExceptionConfigurationType riskExceptionConfigurationType) {
        this.riskExceptionConfiguration = riskExceptionConfigurationType;
        return this;
    }

    public Date getLastModifiedDate() {
        return this.lastModifiedDate;
    }

    public void setLastModifiedDate(Date date) {
        this.lastModifiedDate = date;
    }

    public RiskConfigurationType withLastModifiedDate(Date date) {
        this.lastModifiedDate = date;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getUserPoolId() != null) {
            sb.append("UserPoolId: " + getUserPoolId() + ",");
        }
        if (getClientId() != null) {
            sb.append("ClientId: " + getClientId() + ",");
        }
        if (getCompromisedCredentialsRiskConfiguration() != null) {
            sb.append("CompromisedCredentialsRiskConfiguration: " + getCompromisedCredentialsRiskConfiguration() + ",");
        }
        if (getAccountTakeoverRiskConfiguration() != null) {
            sb.append("AccountTakeoverRiskConfiguration: " + getAccountTakeoverRiskConfiguration() + ",");
        }
        if (getRiskExceptionConfiguration() != null) {
            sb.append("RiskExceptionConfiguration: " + getRiskExceptionConfiguration() + ",");
        }
        if (getLastModifiedDate() != null) {
            sb.append("LastModifiedDate: " + getLastModifiedDate());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i;
        int i2;
        int i3;
        int i4 = 0;
        int hashCode = ((((getUserPoolId() == null ? 0 : getUserPoolId().hashCode()) + 31) * 31) + (getClientId() == null ? 0 : getClientId().hashCode())) * 31;
        if (getCompromisedCredentialsRiskConfiguration() == null) {
            i = 0;
        } else {
            i = getCompromisedCredentialsRiskConfiguration().hashCode();
        }
        int i5 = (hashCode + i) * 31;
        if (getAccountTakeoverRiskConfiguration() == null) {
            i2 = 0;
        } else {
            i2 = getAccountTakeoverRiskConfiguration().hashCode();
        }
        int i6 = (i5 + i2) * 31;
        if (getRiskExceptionConfiguration() == null) {
            i3 = 0;
        } else {
            i3 = getRiskExceptionConfiguration().hashCode();
        }
        int i7 = (i6 + i3) * 31;
        if (getLastModifiedDate() != null) {
            i4 = getLastModifiedDate().hashCode();
        }
        return i7 + i4;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof RiskConfigurationType)) {
            return false;
        }
        RiskConfigurationType riskConfigurationType = (RiskConfigurationType) obj;
        if ((riskConfigurationType.getUserPoolId() == null) ^ (getUserPoolId() == null)) {
            return false;
        }
        if (riskConfigurationType.getUserPoolId() != null && !riskConfigurationType.getUserPoolId().equals(getUserPoolId())) {
            return false;
        }
        if ((riskConfigurationType.getClientId() == null) ^ (getClientId() == null)) {
            return false;
        }
        if (riskConfigurationType.getClientId() != null && !riskConfigurationType.getClientId().equals(getClientId())) {
            return false;
        }
        if ((riskConfigurationType.getCompromisedCredentialsRiskConfiguration() == null) ^ (getCompromisedCredentialsRiskConfiguration() == null)) {
            return false;
        }
        if (riskConfigurationType.getCompromisedCredentialsRiskConfiguration() != null && !riskConfigurationType.getCompromisedCredentialsRiskConfiguration().equals(getCompromisedCredentialsRiskConfiguration())) {
            return false;
        }
        if ((riskConfigurationType.getAccountTakeoverRiskConfiguration() == null) ^ (getAccountTakeoverRiskConfiguration() == null)) {
            return false;
        }
        if (riskConfigurationType.getAccountTakeoverRiskConfiguration() != null && !riskConfigurationType.getAccountTakeoverRiskConfiguration().equals(getAccountTakeoverRiskConfiguration())) {
            return false;
        }
        if ((riskConfigurationType.getRiskExceptionConfiguration() == null) ^ (getRiskExceptionConfiguration() == null)) {
            return false;
        }
        if (riskConfigurationType.getRiskExceptionConfiguration() != null && !riskConfigurationType.getRiskExceptionConfiguration().equals(getRiskExceptionConfiguration())) {
            return false;
        }
        if ((riskConfigurationType.getLastModifiedDate() == null) ^ (getLastModifiedDate() == null)) {
            return false;
        }
        return riskConfigurationType.getLastModifiedDate() == null || riskConfigurationType.getLastModifiedDate().equals(getLastModifiedDate());
    }
}
