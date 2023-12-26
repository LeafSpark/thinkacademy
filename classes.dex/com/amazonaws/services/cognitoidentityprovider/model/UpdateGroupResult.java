package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class UpdateGroupResult implements Serializable {
    private GroupType group;

    public GroupType getGroup() {
        return this.group;
    }

    public void setGroup(GroupType groupType) {
        this.group = groupType;
    }

    public UpdateGroupResult withGroup(GroupType groupType) {
        this.group = groupType;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getGroup() != null) {
            sb.append("Group: " + getGroup());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        return 31 + (getGroup() == null ? 0 : getGroup().hashCode());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof UpdateGroupResult)) {
            return false;
        }
        UpdateGroupResult updateGroupResult = (UpdateGroupResult) obj;
        if ((updateGroupResult.getGroup() == null) ^ (getGroup() == null)) {
            return false;
        }
        return updateGroupResult.getGroup() == null || updateGroupResult.getGroup().equals(getGroup());
    }
}
