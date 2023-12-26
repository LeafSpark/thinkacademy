package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class ListUserPoolsResult implements Serializable {
    private String nextToken;
    private List<UserPoolDescriptionType> userPools;

    public List<UserPoolDescriptionType> getUserPools() {
        return this.userPools;
    }

    public void setUserPools(Collection<UserPoolDescriptionType> collection) {
        if (collection == null) {
            this.userPools = null;
        } else {
            this.userPools = new ArrayList(collection);
        }
    }

    public ListUserPoolsResult withUserPools(UserPoolDescriptionType... userPoolDescriptionTypeArr) {
        if (getUserPools() == null) {
            this.userPools = new ArrayList(userPoolDescriptionTypeArr.length);
        }
        for (UserPoolDescriptionType add : userPoolDescriptionTypeArr) {
            this.userPools.add(add);
        }
        return this;
    }

    public ListUserPoolsResult withUserPools(Collection<UserPoolDescriptionType> collection) {
        setUserPools(collection);
        return this;
    }

    public String getNextToken() {
        return this.nextToken;
    }

    public void setNextToken(String str) {
        this.nextToken = str;
    }

    public ListUserPoolsResult withNextToken(String str) {
        this.nextToken = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getUserPools() != null) {
            sb.append("UserPools: " + getUserPools() + ",");
        }
        if (getNextToken() != null) {
            sb.append("NextToken: " + getNextToken());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getUserPools() == null ? 0 : getUserPools().hashCode()) + 31) * 31;
        if (getNextToken() != null) {
            i = getNextToken().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof ListUserPoolsResult)) {
            return false;
        }
        ListUserPoolsResult listUserPoolsResult = (ListUserPoolsResult) obj;
        if ((listUserPoolsResult.getUserPools() == null) ^ (getUserPools() == null)) {
            return false;
        }
        if (listUserPoolsResult.getUserPools() != null && !listUserPoolsResult.getUserPools().equals(getUserPools())) {
            return false;
        }
        if ((listUserPoolsResult.getNextToken() == null) ^ (getNextToken() == null)) {
            return false;
        }
        return listUserPoolsResult.getNextToken() == null || listUserPoolsResult.getNextToken().equals(getNextToken());
    }
}
