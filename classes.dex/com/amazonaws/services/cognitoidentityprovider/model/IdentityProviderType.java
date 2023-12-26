package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class IdentityProviderType implements Serializable {
    private Map<String, String> attributeMapping;
    private Date creationDate;
    private List<String> idpIdentifiers;
    private Date lastModifiedDate;
    private Map<String, String> providerDetails;
    private String providerName;
    private String providerType;
    private String userPoolId;

    public String getUserPoolId() {
        return this.userPoolId;
    }

    public void setUserPoolId(String str) {
        this.userPoolId = str;
    }

    public IdentityProviderType withUserPoolId(String str) {
        this.userPoolId = str;
        return this;
    }

    public String getProviderName() {
        return this.providerName;
    }

    public void setProviderName(String str) {
        this.providerName = str;
    }

    public IdentityProviderType withProviderName(String str) {
        this.providerName = str;
        return this;
    }

    public String getProviderType() {
        return this.providerType;
    }

    public void setProviderType(String str) {
        this.providerType = str;
    }

    public IdentityProviderType withProviderType(String str) {
        this.providerType = str;
        return this;
    }

    public void setProviderType(IdentityProviderTypeType identityProviderTypeType) {
        this.providerType = identityProviderTypeType.toString();
    }

    public IdentityProviderType withProviderType(IdentityProviderTypeType identityProviderTypeType) {
        this.providerType = identityProviderTypeType.toString();
        return this;
    }

    public Map<String, String> getProviderDetails() {
        return this.providerDetails;
    }

    public void setProviderDetails(Map<String, String> map) {
        this.providerDetails = map;
    }

    public IdentityProviderType withProviderDetails(Map<String, String> map) {
        this.providerDetails = map;
        return this;
    }

    public IdentityProviderType addProviderDetailsEntry(String str, String str2) {
        if (this.providerDetails == null) {
            this.providerDetails = new HashMap();
        }
        if (!this.providerDetails.containsKey(str)) {
            this.providerDetails.put(str, str2);
            return this;
        }
        throw new IllegalArgumentException("Duplicated keys (" + str.toString() + ") are provided.");
    }

    public IdentityProviderType clearProviderDetailsEntries() {
        this.providerDetails = null;
        return this;
    }

    public Map<String, String> getAttributeMapping() {
        return this.attributeMapping;
    }

    public void setAttributeMapping(Map<String, String> map) {
        this.attributeMapping = map;
    }

    public IdentityProviderType withAttributeMapping(Map<String, String> map) {
        this.attributeMapping = map;
        return this;
    }

    public IdentityProviderType addAttributeMappingEntry(String str, String str2) {
        if (this.attributeMapping == null) {
            this.attributeMapping = new HashMap();
        }
        if (!this.attributeMapping.containsKey(str)) {
            this.attributeMapping.put(str, str2);
            return this;
        }
        throw new IllegalArgumentException("Duplicated keys (" + str.toString() + ") are provided.");
    }

    public IdentityProviderType clearAttributeMappingEntries() {
        this.attributeMapping = null;
        return this;
    }

    public List<String> getIdpIdentifiers() {
        return this.idpIdentifiers;
    }

    public void setIdpIdentifiers(Collection<String> collection) {
        if (collection == null) {
            this.idpIdentifiers = null;
        } else {
            this.idpIdentifiers = new ArrayList(collection);
        }
    }

    public IdentityProviderType withIdpIdentifiers(String... strArr) {
        if (getIdpIdentifiers() == null) {
            this.idpIdentifiers = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.idpIdentifiers.add(add);
        }
        return this;
    }

    public IdentityProviderType withIdpIdentifiers(Collection<String> collection) {
        setIdpIdentifiers(collection);
        return this;
    }

    public Date getLastModifiedDate() {
        return this.lastModifiedDate;
    }

    public void setLastModifiedDate(Date date) {
        this.lastModifiedDate = date;
    }

    public IdentityProviderType withLastModifiedDate(Date date) {
        this.lastModifiedDate = date;
        return this;
    }

    public Date getCreationDate() {
        return this.creationDate;
    }

    public void setCreationDate(Date date) {
        this.creationDate = date;
    }

    public IdentityProviderType withCreationDate(Date date) {
        this.creationDate = date;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getUserPoolId() != null) {
            sb.append("UserPoolId: " + getUserPoolId() + ",");
        }
        if (getProviderName() != null) {
            sb.append("ProviderName: " + getProviderName() + ",");
        }
        if (getProviderType() != null) {
            sb.append("ProviderType: " + getProviderType() + ",");
        }
        if (getProviderDetails() != null) {
            sb.append("ProviderDetails: " + getProviderDetails() + ",");
        }
        if (getAttributeMapping() != null) {
            sb.append("AttributeMapping: " + getAttributeMapping() + ",");
        }
        if (getIdpIdentifiers() != null) {
            sb.append("IdpIdentifiers: " + getIdpIdentifiers() + ",");
        }
        if (getLastModifiedDate() != null) {
            sb.append("LastModifiedDate: " + getLastModifiedDate() + ",");
        }
        if (getCreationDate() != null) {
            sb.append("CreationDate: " + getCreationDate());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((((((((((((((getUserPoolId() == null ? 0 : getUserPoolId().hashCode()) + 31) * 31) + (getProviderName() == null ? 0 : getProviderName().hashCode())) * 31) + (getProviderType() == null ? 0 : getProviderType().hashCode())) * 31) + (getProviderDetails() == null ? 0 : getProviderDetails().hashCode())) * 31) + (getAttributeMapping() == null ? 0 : getAttributeMapping().hashCode())) * 31) + (getIdpIdentifiers() == null ? 0 : getIdpIdentifiers().hashCode())) * 31) + (getLastModifiedDate() == null ? 0 : getLastModifiedDate().hashCode())) * 31;
        if (getCreationDate() != null) {
            i = getCreationDate().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof IdentityProviderType)) {
            return false;
        }
        IdentityProviderType identityProviderType = (IdentityProviderType) obj;
        if ((identityProviderType.getUserPoolId() == null) ^ (getUserPoolId() == null)) {
            return false;
        }
        if (identityProviderType.getUserPoolId() != null && !identityProviderType.getUserPoolId().equals(getUserPoolId())) {
            return false;
        }
        if ((identityProviderType.getProviderName() == null) ^ (getProviderName() == null)) {
            return false;
        }
        if (identityProviderType.getProviderName() != null && !identityProviderType.getProviderName().equals(getProviderName())) {
            return false;
        }
        if ((identityProviderType.getProviderType() == null) ^ (getProviderType() == null)) {
            return false;
        }
        if (identityProviderType.getProviderType() != null && !identityProviderType.getProviderType().equals(getProviderType())) {
            return false;
        }
        if ((identityProviderType.getProviderDetails() == null) ^ (getProviderDetails() == null)) {
            return false;
        }
        if (identityProviderType.getProviderDetails() != null && !identityProviderType.getProviderDetails().equals(getProviderDetails())) {
            return false;
        }
        if ((identityProviderType.getAttributeMapping() == null) ^ (getAttributeMapping() == null)) {
            return false;
        }
        if (identityProviderType.getAttributeMapping() != null && !identityProviderType.getAttributeMapping().equals(getAttributeMapping())) {
            return false;
        }
        if ((identityProviderType.getIdpIdentifiers() == null) ^ (getIdpIdentifiers() == null)) {
            return false;
        }
        if (identityProviderType.getIdpIdentifiers() != null && !identityProviderType.getIdpIdentifiers().equals(getIdpIdentifiers())) {
            return false;
        }
        if ((identityProviderType.getLastModifiedDate() == null) ^ (getLastModifiedDate() == null)) {
            return false;
        }
        if (identityProviderType.getLastModifiedDate() != null && !identityProviderType.getLastModifiedDate().equals(getLastModifiedDate())) {
            return false;
        }
        if ((identityProviderType.getCreationDate() == null) ^ (getCreationDate() == null)) {
            return false;
        }
        return identityProviderType.getCreationDate() == null || identityProviderType.getCreationDate().equals(getCreationDate());
    }
}
