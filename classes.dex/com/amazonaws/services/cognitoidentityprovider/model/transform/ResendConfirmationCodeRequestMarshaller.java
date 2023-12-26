package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AnalyticsMetadataType;
import com.amazonaws.services.cognitoidentityprovider.model.ResendConfirmationCodeRequest;
import com.amazonaws.services.cognitoidentityprovider.model.UserContextDataType;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.Map;

public class ResendConfirmationCodeRequestMarshaller implements Marshaller<Request<ResendConfirmationCodeRequest>, ResendConfirmationCodeRequest> {
    public Request<ResendConfirmationCodeRequest> marshall(ResendConfirmationCodeRequest resendConfirmationCodeRequest) {
        if (resendConfirmationCodeRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(resendConfirmationCodeRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.ResendConfirmationCode");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (resendConfirmationCodeRequest.getClientId() != null) {
                    String clientId = resendConfirmationCodeRequest.getClientId();
                    jsonWriter.name("ClientId");
                    jsonWriter.value(clientId);
                }
                if (resendConfirmationCodeRequest.getSecretHash() != null) {
                    String secretHash = resendConfirmationCodeRequest.getSecretHash();
                    jsonWriter.name("SecretHash");
                    jsonWriter.value(secretHash);
                }
                if (resendConfirmationCodeRequest.getUserContextData() != null) {
                    UserContextDataType userContextData = resendConfirmationCodeRequest.getUserContextData();
                    jsonWriter.name("UserContextData");
                    UserContextDataTypeJsonMarshaller.getInstance().marshall(userContextData, jsonWriter);
                }
                if (resendConfirmationCodeRequest.getUsername() != null) {
                    String username = resendConfirmationCodeRequest.getUsername();
                    jsonWriter.name("Username");
                    jsonWriter.value(username);
                }
                if (resendConfirmationCodeRequest.getAnalyticsMetadata() != null) {
                    AnalyticsMetadataType analyticsMetadata = resendConfirmationCodeRequest.getAnalyticsMetadata();
                    jsonWriter.name("AnalyticsMetadata");
                    AnalyticsMetadataTypeJsonMarshaller.getInstance().marshall(analyticsMetadata, jsonWriter);
                }
                if (resendConfirmationCodeRequest.getClientMetadata() != null) {
                    Map<String, String> clientMetadata = resendConfirmationCodeRequest.getClientMetadata();
                    jsonWriter.name("ClientMetadata");
                    jsonWriter.beginObject();
                    for (Map.Entry next : clientMetadata.entrySet()) {
                        String str = (String) next.getValue();
                        if (str != null) {
                            jsonWriter.name((String) next.getKey());
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
            throw new AmazonClientException("Invalid argument passed to marshall(ResendConfirmationCodeRequest)");
        }
    }
}
