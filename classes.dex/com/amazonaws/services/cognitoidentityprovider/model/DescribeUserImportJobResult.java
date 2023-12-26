package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class DescribeUserImportJobResult implements Serializable {
    private UserImportJobType userImportJob;

    public UserImportJobType getUserImportJob() {
        return this.userImportJob;
    }

    public void setUserImportJob(UserImportJobType userImportJobType) {
        this.userImportJob = userImportJobType;
    }

    public DescribeUserImportJobResult withUserImportJob(UserImportJobType userImportJobType) {
        this.userImportJob = userImportJobType;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getUserImportJob() != null) {
            sb.append("UserImportJob: " + getUserImportJob());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        return 31 + (getUserImportJob() == null ? 0 : getUserImportJob().hashCode());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof DescribeUserImportJobResult)) {
            return false;
        }
        DescribeUserImportJobResult describeUserImportJobResult = (DescribeUserImportJobResult) obj;
        if ((describeUserImportJobResult.getUserImportJob() == null) ^ (getUserImportJob() == null)) {
            return false;
        }
        return describeUserImportJobResult.getUserImportJob() == null || describeUserImportJobResult.getUserImportJob().equals(getUserImportJob());
    }
}
