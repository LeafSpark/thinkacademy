package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonWebServiceRequest;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class AddCustomAttributesRequest extends AmazonWebServiceRequest implements Serializable {
    private List<SchemaAttributeType> customAttributes;
    private String userPoolId;

    public String getUserPoolId() {
        return this.userPoolId;
    }

    public void setUserPoolId(String str) {
        this.userPoolId = str;
    }

    public AddCustomAttributesRequest withUserPoolId(String str) {
        this.userPoolId = str;
        return this;
    }

    public List<SchemaAttributeType> getCustomAttributes() {
        return this.customAttributes;
    }

    public void setCustomAttributes(Collection<SchemaAttributeType> collection) {
        if (collection == null) {
            this.customAttributes = null;
        } else {
            this.customAttributes = new ArrayList(collection);
        }
    }

    public AddCustomAttributesRequest withCustomAttributes(SchemaAttributeType... schemaAttributeTypeArr) {
        if (getCustomAttributes() == null) {
            this.customAttributes = new ArrayList(schemaAttributeTypeArr.length);
        }
        for (SchemaAttributeType add : schemaAttributeTypeArr) {
            this.customAttributes.add(add);
        }
        return this;
    }

    public AddCustomAttributesRequest withCustomAttributes(Collection<SchemaAttributeType> collection) {
        setCustomAttributes(collection);
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getUserPoolId() != null) {
            sb.append("UserPoolId: " + getUserPoolId() + ",");
        }
        if (getCustomAttributes() != null) {
            sb.append("CustomAttributes: " + getCustomAttributes());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getUserPoolId() == null ? 0 : getUserPoolId().hashCode()) + 31) * 31;
        if (getCustomAttributes() != null) {
            i = getCustomAttributes().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof AddCustomAttributesRequest)) {
            return false;
        }
        AddCustomAttributesRequest addCustomAttributesRequest = (AddCustomAttributesRequest) obj;
        if ((addCustomAttributesRequest.getUserPoolId() == null) ^ (getUserPoolId() == null)) {
            return false;
        }
        if (addCustomAttributesRequest.getUserPoolId() != null && !addCustomAttributesRequest.getUserPoolId().equals(getUserPoolId())) {
            return false;
        }
        if ((addCustomAttributesRequest.getCustomAttributes() == null) ^ (getCustomAttributes() == null)) {
            return false;
        }
        return addCustomAttributesRequest.getCustomAttributes() == null || addCustomAttributesRequest.getCustomAttributes().equals(getCustomAttributes());
    }
}
