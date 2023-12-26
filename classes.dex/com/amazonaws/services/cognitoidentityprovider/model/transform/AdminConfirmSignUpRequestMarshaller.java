package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AdminConfirmSignUpRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.Map;

public class AdminConfirmSignUpRequestMarshaller implements Marshaller<Request<AdminConfirmSignUpRequest>, AdminConfirmSignUpRequest> {
    public Request<AdminConfirmSignUpRequest> marshall(AdminConfirmSignUpRequest adminConfirmSignUpRequest) {
        if (adminConfirmSignUpRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(adminConfirmSignUpRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.AdminConfirmSignUp");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (adminConfirmSignUpRequest.getUserPoolId() != null) {
                    String userPoolId = adminConfirmSignUpRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (adminConfirmSignUpRequest.getUsername() != null) {
                    String username = adminConfirmSignUpRequest.getUsername();
                    jsonWriter.name("Username");
                    jsonWriter.value(username);
                }
                if (adminConfirmSignUpRequest.getClientMetadata() != null) {
                    Map<String, String> clientMetadata = adminConfirmSignUpRequest.getClientMetadata();
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
            throw new AmazonClientException("Invalid argument passed to marshall(AdminConfirmSignUpRequest)");
        }
    }
}
