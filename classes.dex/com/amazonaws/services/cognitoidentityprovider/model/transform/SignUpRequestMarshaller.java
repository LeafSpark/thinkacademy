package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AnalyticsMetadataType;
import com.amazonaws.services.cognitoidentityprovider.model.AttributeType;
import com.amazonaws.services.cognitoidentityprovider.model.SignUpRequest;
import com.amazonaws.services.cognitoidentityprovider.model.UserContextDataType;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.List;
import java.util.Map;

public class SignUpRequestMarshaller implements Marshaller<Request<SignUpRequest>, SignUpRequest> {
    public Request<SignUpRequest> marshall(SignUpRequest signUpRequest) {
        if (signUpRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(signUpRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.SignUp");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (signUpRequest.getClientId() != null) {
                    String clientId = signUpRequest.getClientId();
                    jsonWriter.name("ClientId");
                    jsonWriter.value(clientId);
                }
                if (signUpRequest.getSecretHash() != null) {
                    String secretHash = signUpRequest.getSecretHash();
                    jsonWriter.name("SecretHash");
                    jsonWriter.value(secretHash);
                }
                if (signUpRequest.getUsername() != null) {
                    String username = signUpRequest.getUsername();
                    jsonWriter.name("Username");
                    jsonWriter.value(username);
                }
                if (signUpRequest.getPassword() != null) {
                    String password = signUpRequest.getPassword();
                    jsonWriter.name("Password");
                    jsonWriter.value(password);
                }
                if (signUpRequest.getUserAttributes() != null) {
                    List<AttributeType> userAttributes = signUpRequest.getUserAttributes();
                    jsonWriter.name("UserAttributes");
                    jsonWriter.beginArray();
                    for (AttributeType next : userAttributes) {
                        if (next != null) {
                            AttributeTypeJsonMarshaller.getInstance().marshall(next, jsonWriter);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (signUpRequest.getValidationData() != null) {
                    List<AttributeType> validationData = signUpRequest.getValidationData();
                    jsonWriter.name("ValidationData");
                    jsonWriter.beginArray();
                    for (AttributeType next2 : validationData) {
                        if (next2 != null) {
                            AttributeTypeJsonMarshaller.getInstance().marshall(next2, jsonWriter);
                        }
                    }
                    jsonWriter.endArray();
                }
                if (signUpRequest.getAnalyticsMetadata() != null) {
                    AnalyticsMetadataType analyticsMetadata = signUpRequest.getAnalyticsMetadata();
                    jsonWriter.name("AnalyticsMetadata");
                    AnalyticsMetadataTypeJsonMarshaller.getInstance().marshall(analyticsMetadata, jsonWriter);
                }
                if (signUpRequest.getUserContextData() != null) {
                    UserContextDataType userContextData = signUpRequest.getUserContextData();
                    jsonWriter.name("UserContextData");
                    UserContextDataTypeJsonMarshaller.getInstance().marshall(userContextData, jsonWriter);
                }
                if (signUpRequest.getClientMetadata() != null) {
                    Map<String, String> clientMetadata = signUpRequest.getClientMetadata();
                    jsonWriter.name("ClientMetadata");
                    jsonWriter.beginObject();
                    for (Map.Entry next3 : clientMetadata.entrySet()) {
                        String str = (String) next3.getValue();
                        if (str != null) {
                            jsonWriter.name((String) next3.getKey());
                            jsonWriter.value(str);
                        }
                    }
                    jsonWriter.endObject();
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
            throw new AmazonClientException("Invalid argument passed to marshall(SignUpRequest)");
        }
    }
}
