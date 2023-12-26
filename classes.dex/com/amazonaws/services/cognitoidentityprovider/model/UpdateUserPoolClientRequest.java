package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonWebServiceRequest;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UpdateUserPoolClientRequest extends AmazonWebServiceRequest implements Serializable {
    private Integer accessTokenValidity;
    private List<String> allowedOAuthFlows;
    private Boolean allowedOAuthFlowsUserPoolClient;
    private List<String> allowedOAuthScopes;
    private AnalyticsConfigurationType analyticsConfiguration;
    private List<String> callbackURLs;
    private String clientId;
    private String clientName;
    private String defaultRedirectURI;
    private Boolean enableTokenRevocation;
    private List<String> explicitAuthFlows;
    private Integer idTokenValidity;
    private List<String> logoutURLs;
    private String preventUserExistenceErrors;
    private List<String> readAttributes;
    private Integer refreshTokenValidity;
    private List<String> supportedIdentityProviders;
    private TokenValidityUnitsType tokenValidityUnits;
    private String userPoolId;
    private List<String> writeAttributes;

    public String getUserPoolId() {
        return this.userPoolId;
    }

    public void setUserPoolId(String str) {
        this.userPoolId = str;
    }

    public UpdateUserPoolClientRequest withUserPoolId(String str) {
        this.userPoolId = str;
        return this;
    }

    public String getClientId() {
        return this.clientId;
    }

    public void setClientId(String str) {
        this.clientId = str;
    }

    public UpdateUserPoolClientRequest withClientId(String str) {
        this.clientId = str;
        return this;
    }

    public String getClientName() {
        return this.clientName;
    }

    public void setClientName(String str) {
        this.clientName = str;
    }

    public UpdateUserPoolClientRequest withClientName(String str) {
        this.clientName = str;
        return this;
    }

    public Integer getRefreshTokenValidity() {
        return this.refreshTokenValidity;
    }

    public void setRefreshTokenValidity(Integer num) {
        this.refreshTokenValidity = num;
    }

    public UpdateUserPoolClientRequest withRefreshTokenValidity(Integer num) {
        this.refreshTokenValidity = num;
        return this;
    }

    public Integer getAccessTokenValidity() {
        return this.accessTokenValidity;
    }

    public void setAccessTokenValidity(Integer num) {
        this.accessTokenValidity = num;
    }

    public UpdateUserPoolClientRequest withAccessTokenValidity(Integer num) {
        this.accessTokenValidity = num;
        return this;
    }

    public Integer getIdTokenValidity() {
        return this.idTokenValidity;
    }

    public void setIdTokenValidity(Integer num) {
        this.idTokenValidity = num;
    }

    public UpdateUserPoolClientRequest withIdTokenValidity(Integer num) {
        this.idTokenValidity = num;
        return this;
    }

    public TokenValidityUnitsType getTokenValidityUnits() {
        return this.tokenValidityUnits;
    }

    public void setTokenValidityUnits(TokenValidityUnitsType tokenValidityUnitsType) {
        this.tokenValidityUnits = tokenValidityUnitsType;
    }

    public UpdateUserPoolClientRequest withTokenValidityUnits(TokenValidityUnitsType tokenValidityUnitsType) {
        this.tokenValidityUnits = tokenValidityUnitsType;
        return this;
    }

    public List<String> getReadAttributes() {
        return this.readAttributes;
    }

    public void setReadAttributes(Collection<String> collection) {
        if (collection == null) {
            this.readAttributes = null;
        } else {
            this.readAttributes = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withReadAttributes(String... strArr) {
        if (getReadAttributes() == null) {
            this.readAttributes = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.readAttributes.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withReadAttributes(Collection<String> collection) {
        setReadAttributes(collection);
        return this;
    }

    public List<String> getWriteAttributes() {
        return this.writeAttributes;
    }

    public void setWriteAttributes(Collection<String> collection) {
        if (collection == null) {
            this.writeAttributes = null;
        } else {
            this.writeAttributes = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withWriteAttributes(String... strArr) {
        if (getWriteAttributes() == null) {
            this.writeAttributes = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.writeAttributes.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withWriteAttributes(Collection<String> collection) {
        setWriteAttributes(collection);
        return this;
    }

    public List<String> getExplicitAuthFlows() {
        return this.explicitAuthFlows;
    }

    public void setExplicitAuthFlows(Collection<String> collection) {
        if (collection == null) {
            this.explicitAuthFlows = null;
        } else {
            this.explicitAuthFlows = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withExplicitAuthFlows(String... strArr) {
        if (getExplicitAuthFlows() == null) {
            this.explicitAuthFlows = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.explicitAuthFlows.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withExplicitAuthFlows(Collection<String> collection) {
        setExplicitAuthFlows(collection);
        return this;
    }

    public List<String> getSupportedIdentityProviders() {
        return this.supportedIdentityProviders;
    }

    public void setSupportedIdentityProviders(Collection<String> collection) {
        if (collection == null) {
            this.supportedIdentityProviders = null;
        } else {
            this.supportedIdentityProviders = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withSupportedIdentityProviders(String... strArr) {
        if (getSupportedIdentityProviders() == null) {
            this.supportedIdentityProviders = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.supportedIdentityProviders.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withSupportedIdentityProviders(Collection<String> collection) {
        setSupportedIdentityProviders(collection);
        return this;
    }

    public List<String> getCallbackURLs() {
        return this.callbackURLs;
    }

    public void setCallbackURLs(Collection<String> collection) {
        if (collection == null) {
            this.callbackURLs = null;
        } else {
            this.callbackURLs = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withCallbackURLs(String... strArr) {
        if (getCallbackURLs() == null) {
            this.callbackURLs = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.callbackURLs.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withCallbackURLs(Collection<String> collection) {
        setCallbackURLs(collection);
        return this;
    }

    public List<String> getLogoutURLs() {
        return this.logoutURLs;
    }

    public void setLogoutURLs(Collection<String> collection) {
        if (collection == null) {
            this.logoutURLs = null;
        } else {
            this.logoutURLs = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withLogoutURLs(String... strArr) {
        if (getLogoutURLs() == null) {
            this.logoutURLs = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.logoutURLs.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withLogoutURLs(Collection<String> collection) {
        setLogoutURLs(collection);
        return this;
    }

    public String getDefaultRedirectURI() {
        return this.defaultRedirectURI;
    }

    public void setDefaultRedirectURI(String str) {
        this.defaultRedirectURI = str;
    }

    public UpdateUserPoolClientRequest withDefaultRedirectURI(String str) {
        this.defaultRedirectURI = str;
        return this;
    }

    public List<String> getAllowedOAuthFlows() {
        return this.allowedOAuthFlows;
    }

    public void setAllowedOAuthFlows(Collection<String> collection) {
        if (collection == null) {
            this.allowedOAuthFlows = null;
        } else {
            this.allowedOAuthFlows = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withAllowedOAuthFlows(String... strArr) {
        if (getAllowedOAuthFlows() == null) {
            this.allowedOAuthFlows = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.allowedOAuthFlows.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withAllowedOAuthFlows(Collection<String> collection) {
        setAllowedOAuthFlows(collection);
        return this;
    }

    public List<String> getAllowedOAuthScopes() {
        return this.allowedOAuthScopes;
    }

    public void setAllowedOAuthScopes(Collection<String> collection) {
        if (collection == null) {
            this.allowedOAuthScopes = null;
        } else {
            this.allowedOAuthScopes = new ArrayList(collection);
        }
    }

    public UpdateUserPoolClientRequest withAllowedOAuthScopes(String... strArr) {
        if (getAllowedOAuthScopes() == null) {
            this.allowedOAuthScopes = new ArrayList(strArr.length);
        }
        for (String add : strArr) {
            this.allowedOAuthScopes.add(add);
        }
        return this;
    }

    public UpdateUserPoolClientRequest withAllowedOAuthScopes(Collection<String> collection) {
        setAllowedOAuthScopes(collection);
        return this;
    }

    public Boolean isAllowedOAuthFlowsUserPoolClient() {
        return this.allowedOAuthFlowsUserPoolClient;
    }

    public Boolean getAllowedOAuthFlowsUserPoolClient() {
        return this.allowedOAuthFlowsUserPoolClient;
    }

    public void setAllowedOAuthFlowsUserPoolClient(Boolean bool) {
        this.allowedOAuthFlowsUserPoolClient = bool;
    }

    public UpdateUserPoolClientRequest withAllowedOAuthFlowsUserPoolClient(Boolean bool) {
        this.allowedOAuthFlowsUserPoolClient = bool;
        return this;
    }

    public AnalyticsConfigurationType getAnalyticsConfiguration() {
        return this.analyticsConfiguration;
    }

    public void setAnalyticsConfiguration(AnalyticsConfigurationType analyticsConfigurationType) {
        this.analyticsConfiguration = analyticsConfigurationType;
    }

    public UpdateUserPoolClientRequest withAnalyticsConfiguration(AnalyticsConfigurationType analyticsConfigurationType) {
        this.analyticsConfiguration = analyticsConfigurationType;
        return this;
    }

    public String getPreventUserExistenceErrors() {
        return this.preventUserExistenceErrors;
    }

    public void setPreventUserExistenceErrors(String str) {
        this.preventUserExistenceErrors = str;
    }

    public UpdateUserPoolClientRequest withPreventUserExistenceErrors(String str) {
        this.preventUserExistenceErrors = str;
        return this;
    }

    public void setPreventUserExistenceErrors(PreventUserExistenceErrorTypes preventUserExistenceErrorTypes) {
        this.preventUserExistenceErrors = preventUserExistenceErrorTypes.toString();
    }

    public UpdateUserPoolClientRequest withPreventUserExistenceErrors(PreventUserExistenceErrorTypes preventUserExistenceErrorTypes) {
        this.preventUserExistenceErrors = preventUserExistenceErrorTypes.toString();
        return this;
    }

    public Boolean isEnableTokenRevocation() {
        return this.enableTokenRevocation;
    }

    public Boolean getEnableTokenRevocation() {
        return this.enableTokenRevocation;
    }

    public void setEnableTokenRevocation(Boolean bool) {
        this.enableTokenRevocation = bool;
    }

    public UpdateUserPoolClientRequest withEnableTokenRevocation(Boolean bool) {
        this.enableTokenRevocation = bool;
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
        if (getClientName() != null) {
            sb.append("ClientName: " + getClientName() + ",");
        }
        if (getRefreshTokenValidity() != null) {
            sb.append("RefreshTokenValidity: " + getRefreshTokenValidity() + ",");
        }
        if (getAccessTokenValidity() != null) {
            sb.append("AccessTokenValidity: " + getAccessTokenValidity() + ",");
        }
        if (getIdTokenValidity() != null) {
            sb.append("IdTokenValidity: " + getIdTokenValidity() + ",");
        }
        if (getTokenValidityUnits() != null) {
            sb.append("TokenValidityUnits: " + getTokenValidityUnits() + ",");
        }
        if (getReadAttributes() != null) {
            sb.append("ReadAttributes: " + getReadAttributes() + ",");
        }
        if (getWriteAttributes() != null) {
            sb.append("WriteAttributes: " + getWriteAttributes() + ",");
        }
        if (getExplicitAuthFlows() != null) {
            sb.append("ExplicitAuthFlows: " + getExplicitAuthFlows() + ",");
        }
        if (getSupportedIdentityProviders() != null) {
            sb.append("SupportedIdentityProviders: " + getSupportedIdentityProviders() + ",");
        }
        if (getCallbackURLs() != null) {
            sb.append("CallbackURLs: " + getCallbackURLs() + ",");
        }
        if (getLogoutURLs() != null) {
            sb.append("LogoutURLs: " + getLogoutURLs() + ",");
        }
        if (getDefaultRedirectURI() != null) {
            sb.append("DefaultRedirectURI: " + getDefaultRedirectURI() + ",");
        }
        if (getAllowedOAuthFlows() != null) {
            sb.append("AllowedOAuthFlows: " + getAllowedOAuthFlows() + ",");
        }
        if (getAllowedOAuthScopes() != null) {
            sb.append("AllowedOAuthScopes: " + getAllowedOAuthScopes() + ",");
        }
        if (getAllowedOAuthFlowsUserPoolClient() != null) {
            sb.append("AllowedOAuthFlowsUserPoolClient: " + getAllowedOAuthFlowsUserPoolClient() + ",");
        }
        if (getAnalyticsConfiguration() != null) {
            sb.append("AnalyticsConfiguration: " + getAnalyticsConfiguration() + ",");
        }
        if (getPreventUserExistenceErrors() != null) {
            sb.append("PreventUserExistenceErrors: " + getPreventUserExistenceErrors() + ",");
        }
        if (getEnableTokenRevocation() != null) {
            sb.append("EnableTokenRevocation: " + getEnableTokenRevocation());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i;
        int i2;
        int i3;
        int i4;
        int i5 = 0;
        int hashCode = ((((((((((((((((((((getUserPoolId() == null ? 0 : getUserPoolId().hashCode()) + 31) * 31) + (getClientId() == null ? 0 : getClientId().hashCode())) * 31) + (getClientName() == null ? 0 : getClientName().hashCode())) * 31) + (getRefreshTokenValidity() == null ? 0 : getRefreshTokenValidity().hashCode())) * 31) + (getAccessTokenValidity() == null ? 0 : getAccessTokenValidity().hashCode())) * 31) + (getIdTokenValidity() == null ? 0 : getIdTokenValidity().hashCode())) * 31) + (getTokenValidityUnits() == null ? 0 : getTokenValidityUnits().hashCode())) * 31) + (getReadAttributes() == null ? 0 : getReadAttributes().hashCode())) * 31) + (getWriteAttributes() == null ? 0 : getWriteAttributes().hashCode())) * 31) + (getExplicitAuthFlows() == null ? 0 : getExplicitAuthFlows().hashCode())) * 31;
        if (getSupportedIdentityProviders() == null) {
            i = 0;
        } else {
            i = getSupportedIdentityProviders().hashCode();
        }
        int hashCode2 = (((((((((((hashCode + i) * 31) + (getCallbackURLs() == null ? 0 : getCallbackURLs().hashCode())) * 31) + (getLogoutURLs() == null ? 0 : getLogoutURLs().hashCode())) * 31) + (getDefaultRedirectURI() == null ? 0 : getDefaultRedirectURI().hashCode())) * 31) + (getAllowedOAuthFlows() == null ? 0 : getAllowedOAuthFlows().hashCode())) * 31) + (getAllowedOAuthScopes() == null ? 0 : getAllowedOAuthScopes().hashCode())) * 31;
        if (getAllowedOAuthFlowsUserPoolClient() == null) {
            i2 = 0;
        } else {
            i2 = getAllowedOAuthFlowsUserPoolClient().hashCode();
        }
        int i6 = (hashCode2 + i2) * 31;
        if (getAnalyticsConfiguration() == null) {
            i3 = 0;
        } else {
            i3 = getAnalyticsConfiguration().hashCode();
        }
        int i7 = (i6 + i3) * 31;
        if (getPreventUserExistenceErrors() == null) {
            i4 = 0;
        } else {
            i4 = getPreventUserExistenceErrors().hashCode();
        }
        int i8 = (i7 + i4) * 31;
        if (getEnableTokenRevocation() != null) {
            i5 = getEnableTokenRevocation().hashCode();
        }
        return i8 + i5;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof UpdateUserPoolClientRequest)) {
            return false;
        }
        UpdateUserPoolClientRequest updateUserPoolClientRequest = (UpdateUserPoolClientRequest) obj;
        if ((updateUserPoolClientRequest.getUserPoolId() == null) ^ (getUserPoolId() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getUserPoolId() != null && !updateUserPoolClientRequest.getUserPoolId().equals(getUserPoolId())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getClientId() == null) ^ (getClientId() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getClientId() != null && !updateUserPoolClientRequest.getClientId().equals(getClientId())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getClientName() == null) ^ (getClientName() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getClientName() != null && !updateUserPoolClientRequest.getClientName().equals(getClientName())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getRefreshTokenValidity() == null) ^ (getRefreshTokenValidity() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getRefreshTokenValidity() != null && !updateUserPoolClientRequest.getRefreshTokenValidity().equals(getRefreshTokenValidity())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getAccessTokenValidity() == null) ^ (getAccessTokenValidity() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getAccessTokenValidity() != null && !updateUserPoolClientRequest.getAccessTokenValidity().equals(getAccessTokenValidity())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getIdTokenValidity() == null) ^ (getIdTokenValidity() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getIdTokenValidity() != null && !updateUserPoolClientRequest.getIdTokenValidity().equals(getIdTokenValidity())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getTokenValidityUnits() == null) ^ (getTokenValidityUnits() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getTokenValidityUnits() != null && !updateUserPoolClientRequest.getTokenValidityUnits().equals(getTokenValidityUnits())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getReadAttributes() == null) ^ (getReadAttributes() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getReadAttributes() != null && !updateUserPoolClientRequest.getReadAttributes().equals(getReadAttributes())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getWriteAttributes() == null) ^ (getWriteAttributes() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getWriteAttributes() != null && !updateUserPoolClientRequest.getWriteAttributes().equals(getWriteAttributes())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getExplicitAuthFlows() == null) ^ (getExplicitAuthFlows() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getExplicitAuthFlows() != null && !updateUserPoolClientRequest.getExplicitAuthFlows().equals(getExplicitAuthFlows())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getSupportedIdentityProviders() == null) ^ (getSupportedIdentityProviders() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getSupportedIdentityProviders() != null && !updateUserPoolClientRequest.getSupportedIdentityProviders().equals(getSupportedIdentityProviders())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getCallbackURLs() == null) ^ (getCallbackURLs() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getCallbackURLs() != null && !updateUserPoolClientRequest.getCallbackURLs().equals(getCallbackURLs())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getLogoutURLs() == null) ^ (getLogoutURLs() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getLogoutURLs() != null && !updateUserPoolClientRequest.getLogoutURLs().equals(getLogoutURLs())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getDefaultRedirectURI() == null) ^ (getDefaultRedirectURI() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getDefaultRedirectURI() != null && !updateUserPoolClientRequest.getDefaultRedirectURI().equals(getDefaultRedirectURI())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getAllowedOAuthFlows() == null) ^ (getAllowedOAuthFlows() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getAllowedOAuthFlows() != null && !updateUserPoolClientRequest.getAllowedOAuthFlows().equals(getAllowedOAuthFlows())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getAllowedOAuthScopes() == null) ^ (getAllowedOAuthScopes() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getAllowedOAuthScopes() != null && !updateUserPoolClientRequest.getAllowedOAuthScopes().equals(getAllowedOAuthScopes())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getAllowedOAuthFlowsUserPoolClient() == null) ^ (getAllowedOAuthFlowsUserPoolClient() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getAllowedOAuthFlowsUserPoolClient() != null && !updateUserPoolClientRequest.getAllowedOAuthFlowsUserPoolClient().equals(getAllowedOAuthFlowsUserPoolClient())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getAnalyticsConfiguration() == null) ^ (getAnalyticsConfiguration() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getAnalyticsConfiguration() != null && !updateUserPoolClientRequest.getAnalyticsConfiguration().equals(getAnalyticsConfiguration())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getPreventUserExistenceErrors() == null) ^ (getPreventUserExistenceErrors() == null)) {
            return false;
        }
        if (updateUserPoolClientRequest.getPreventUserExistenceErrors() != null && !updateUserPoolClientRequest.getPreventUserExistenceErrors().equals(getPreventUserExistenceErrors())) {
            return false;
        }
        if ((updateUserPoolClientRequest.getEnableTokenRevocation() == null) ^ (getEnableTokenRevocation() == null)) {
            return false;
        }
        return updateUserPoolClientRequest.getEnableTokenRevocation() == null || updateUserPoolClientRequest.getEnableTokenRevocation().equals(getEnableTokenRevocation());
    }
}
