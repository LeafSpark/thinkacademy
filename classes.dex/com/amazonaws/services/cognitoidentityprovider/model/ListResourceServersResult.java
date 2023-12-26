package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class ListResourceServersResult implements Serializable {
    private String nextToken;
    private List<ResourceServerType> resourceServers;

    public List<ResourceServerType> getResourceServers() {
        return this.resourceServers;
    }

    public void setResourceServers(Collection<ResourceServerType> collection) {
        if (collection == null) {
            this.resourceServers = null;
        } else {
            this.resourceServers = new ArrayList(collection);
        }
    }

    public ListResourceServersResult withResourceServers(ResourceServerType... resourceServerTypeArr) {
        if (getResourceServers() == null) {
            this.resourceServers = new ArrayList(resourceServerTypeArr.length);
        }
        for (ResourceServerType add : resourceServerTypeArr) {
            this.resourceServers.add(add);
        }
        return this;
    }

    public ListResourceServersResult withResourceServers(Collection<ResourceServerType> collection) {
        setResourceServers(collection);
        return this;
    }

    public String getNextToken() {
        return this.nextToken;
    }

    public void setNextToken(String str) {
        this.nextToken = str;
    }

    public ListResourceServersResult withNextToken(String str) {
        this.nextToken = str;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getResourceServers() != null) {
            sb.append("ResourceServers: " + getResourceServers() + ",");
        }
        if (getNextToken() != null) {
            sb.append("NextToken: " + getNextToken());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getResourceServers() == null ? 0 : getResourceServers().hashCode()) + 31) * 31;
        if (getNextToken() != null) {
            i = getNextToken().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof ListResourceServersResult)) {
            return false;
        }
        ListResourceServersResult listResourceServersResult = (ListResourceServersResult) obj;
        if ((listResourceServersResult.getResourceServers() == null) ^ (getResourceServers() == null)) {
            return false;
        }
        if (listResourceServersResult.getResourceServers() != null && !listResourceServersResult.getResourceServers().equals(getResourceServers())) {
            return false;
        }
        if ((listResourceServersResult.getNextToken() == null) ^ (getNextToken() == null)) {
            return false;
        }
        return listResourceServersResult.getNextToken() == null || listResourceServersResult.getNextToken().equals(getNextToken());
    }
}
