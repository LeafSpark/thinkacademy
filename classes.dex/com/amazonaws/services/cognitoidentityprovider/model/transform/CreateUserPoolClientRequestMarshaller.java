package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AnalyticsConfigurationType;
import com.amazonaws.services.cognitoidentityprovider.model.CreateUserPoolClientRequest;
import com.amazonaws.services.cognitoidentityprovider.model.TokenValidityUnitsType;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.List;

public class CreateUserPoolClientRequestMarshaller implements Marshaller<Request<CreateUserPoolClientRequest>, CreateUserPoolClientRequest> {
    public Request<CreateUserPoolClientRequest> marshall(CreateUserPoolClientRequest createUserPoolClientRequest) {
        if (createUserPoolClientRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(createUserPoolClientRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.CreateUserPoolClient");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (createUserPoolClientRequest.getUserPoolId() != null) {
                    String userPoolId = createUserPoolClientRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (createUserPoolClientRequest.getClientName() != null) {
                    String clientName = createUserPoolClientRequest.getClientName();
                    jsonWriter.name("ClientName");
                    jsonWriter.value(clientName);
                }
                if (createUserPoolClientRequest.getGenerateSecret() != null) {
                    Boolean generateSecret = createUserPoolClientRequest.getGenerateSecret();
                    jsonWriter.name("GenerateSecret");
                    jsonWriter.value(generateSecret.booleanValue());
                }
                if (createUserPoolClientRequest.getRefreshTokenValidity() != null) {
                    Integer refreshTokenValidity = createUserPoolClientRequest.getRefreshTokenValidity();
                    jsonWriter.name("RefreshTokenValidity");
                    jsonWriter.value(refreshTokenValidity);
                }
                if (createUserPoolClientRequest.getAccessTokenValidity() != null) {
                    Integer accessTokenValidity = createUserPoolClientRequest.getAccessTokenValidity();
                    jsonWriter.name("AccessTokenValidity");
                    jsonWriter.value(accessTokenValidity);
                }
                if (createUserPoolClientRequest.getIdTokenValidity() != null) {
                    Integer idTokenValidity = createUserPoolClientRequest.getIdTokenValidity();
                    jsonWriter.name("IdTokenValidity");
                    jsonWriter.value(idTokenValidity);
                }
                if (createUserPoolClientRequest.getTokenValidityUnits() != null) {
                    TokenValidityUnitsType tokenValidityUnits = createUserPoolClientRequest.getTokenValidityUnits();
                    jsonWriter.name("TokenValidityUnits");
                    TokenValidityUnitsTypeJsonMarshaller.getInstance().marshall(tokenValidityUnits, jsonWriter);
                }
                if (createUserPoolClientRequest.getReadAttributes() != null) {
                    List<String> readAttributes = createUserPoolClientRequest.getReadAttributes();
                    jsonWriter.name("ReadAttributes");
                    jsonWriter.beginArray();
                    for (String next : readAttributes) {
                        if (next != null) {
                            jsonWriter.value(next);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getWriteAttributes() != null) {
                    List<String> writeAttributes = createUserPoolClientRequest.getWriteAttributes();
                    jsonWriter.name("WriteAttributes");
                    jsonWriter.beginArray();
                    for (String next2 : writeAttributes) {
                        if (next2 != null) {
                            jsonWriter.value(next2);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getExplicitAuthFlows() != null) {
                    List<String> explicitAuthFlows = createUserPoolClientRequest.getExplicitAuthFlows();
                    jsonWriter.name("ExplicitAuthFlows");
                    jsonWriter.beginArray();
                    for (String next3 : explicitAuthFlows) {
                        if (next3 != null) {
                            jsonWriter.value(next3);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getSupportedIdentityProviders() != null) {
                    List<String> supportedIdentityProviders = createUserPoolClientRequest.getSupportedIdentityProviders();
                    jsonWriter.name("SupportedIdentityProviders");
                    jsonWriter.beginArray();
                    for (String next4 : supportedIdentityProviders) {
                        if (next4 != null) {
                            jsonWriter.value(next4);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getCallbackURLs() != null) {
                    List<String> callbackURLs = createUserPoolClientRequest.getCallbackURLs();
                    jsonWriter.name("CallbackURLs");
                    jsonWriter.beginArray();
                    for (String next5 : callbackURLs) {
                        if (next5 != null) {
                            jsonWriter.value(next5);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getLogoutURLs() != null) {
                    List<String> logoutURLs = createUserPoolClientRequest.getLogoutURLs();
                    jsonWriter.name("LogoutURLs");
                    jsonWriter.beginArray();
                    for (String next6 : logoutURLs) {
                        if (next6 != null) {
                            jsonWriter.value(next6);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getDefaultRedirectURI() != null) {
                    String defaultRedirectURI = createUserPoolClientRequest.getDefaultRedirectURI();
                    jsonWriter.name("DefaultRedirectURI");
                    jsonWriter.value(defaultRedirectURI);
                }
                if (createUserPoolClientRequest.getAllowedOAuthFlows() != null) {
                    List<String> allowedOAuthFlows = createUserPoolClientRequest.getAllowedOAuthFlows();
                    jsonWriter.name("AllowedOAuthFlows");
                    jsonWriter.beginArray();
                    for (String next7 : allowedOAuthFlows) {
                        if (next7 != null) {
                            jsonWriter.value(next7);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getAllowedOAuthScopes() != null) {
                    List<String> allowedOAuthScopes = createUserPoolClientRequest.getAllowedOAuthScopes();
                    jsonWriter.name("AllowedOAuthScopes");
                    jsonWriter.beginArray();
                    for (String next8 : allowedOAuthScopes) {
                        if (next8 != null) {
                            jsonWriter.value(next8);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (createUserPoolClientRequest.getAllowedOAuthFlowsUserPoolClient() != null) {
                    Boolean allowedOAuthFlowsUserPoolClient = createUserPoolClientRequest.getAllowedOAuthFlowsUserPoolClient();
                    jsonWriter.name("AllowedOAuthFlowsUserPoolClient");
                    jsonWriter.value(allowedOAuthFlowsUserPoolClient.booleanValue());
                }
                if (createUserPoolClientRequest.getAnalyticsConfiguration() != null) {
                    AnalyticsConfigurationType analyticsConfiguration = createUserPoolClientRequest.getAnalyticsConfiguration();
                    jsonWriter.name("AnalyticsConfiguration");
                    AnalyticsConfigurationTypeJsonMarshaller.getInstance().marshall(analyticsConfiguration, jsonWriter);
                }
                if (createUserPoolClientRequest.getPreventUserExistenceErrors() != null) {
                    String preventUserExistenceErrors = createUserPoolClientRequest.getPreventUserExistenceErrors();
                    jsonWriter.name("PreventUserExistenceErrors");
                    jsonWriter.value(preventUserExistenceErrors);
                }
                if (createUserPoolClientRequest.getEnableTokenRevocation() != null) {
                    Boolean enableTokenRevocation = createUserPoolClientRequest.getEnableTokenRevocation();
                    jsonWriter.name("EnableTokenRevocation");
                    jsonWriter.value(enableTokenRevocation.booleanValue());
                }
                jsonWriter.endObject();
                jsonWriter.close();
                String stringWriter2 = stringWriter.toString();
                byte[] bytes = stringWriter2.getBytes(StringUtils.UTF8);
                defaultRequest.setContent(new StringInputStream(stringWriter2));
                defaultRequest.addHeader("Content-Length", Integer.toString(bytes.length));
                if (!defaultRequest.getHeaders().containsKey("Content-Type")) {
                    defaultRequest.addHeader("Content-Type", "application/x-amz-json-1.1");
                }
                return defaultRequest;
            } catch (Throwable th) {
                throw new AmazonClientException("Unable to marshall request to JSON: " + th.getMessage(), th);
            }
        } else {
            throw new AmazonClientException("Invalid argument passed to marshall(CreateUserPoolClientRequest)");
        }
    }
}
