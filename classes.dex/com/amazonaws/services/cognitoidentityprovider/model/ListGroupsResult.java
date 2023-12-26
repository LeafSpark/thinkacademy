package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class ListGroupsResult implements Serializable {
    private List<GroupType> groups;
    private String nextToken;

    public List<GroupType> getGroups() {
        return this.groups;
    }

    public void setGroups(Collection<GroupType> collection) {
        if (collection == null) {
            this.groups = null;
        } else {
            this.groups = new ArrayList(collection);
        }
    }

    public ListGroupsResult withGroups(GroupType... groupTypeArr) {
        if (getGroups() == null) {
            this.groups = new ArrayList(groupTypeArr.length);
        }
        for (GroupType add : groupTypeArr) {
            this.groups.add(add);
        }
        return this;
    }

    public ListGroupsResult withGroups(Collection<GroupType> collection) {
        setGroups(collection);
        return this;
    }

    public String getNextToken() {
        return this.nextToken;
    }

    public void setNextToken(String str) {
        this.nextToken = str;
    }

    public ListGroupsResult withNextToken(String str) {
        this.nextToken = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getGroups() != null) {
            sb.append("Groups: " + getGroups() + ",");
        }
        if (getNextToken() != null) {
            sb.append("NextToken: " + getNextToken());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getGroups() == null ? 0 : getGroups().hashCode()) + 31) * 31;
        if (getNextToken() != null) {
            i = getNextToken().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof ListGroupsResult)) {
            return false;
        }
        ListGroupsResult listGroupsResult = (ListGroupsResult) obj;
        if ((listGroupsResult.getGroups() == null) ^ (getGroups() == null)) {
            return false;
        }
        if (listGroupsResult.getGroups() != null && !listGroupsResult.getGroups().equals(getGroups())) {
            return false;
        }
        if ((listGroupsResult.getNextToken() == null) ^ (getNextToken() == null)) {
            return false;
        }
        return listGroupsResult.getNextToken() == null || listGroupsResult.getNextToken().equals(getNextToken());
    }
}
