package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.GetUserAttributeVerificationCodeRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.Map;

public class GetUserAttributeVerificationCodeRequestMarshaller implements Marshaller<Request<GetUserAttributeVerificationCodeRequest>, GetUserAttributeVerificationCodeRequest> {
    public Request<GetUserAttributeVerificationCodeRequest> marshall(GetUserAttributeVerificationCodeRequest getUserAttributeVerificationCodeRequest) {
        if (getUserAttributeVerificationCodeRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(getUserAttributeVerificationCodeRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (getUserAttributeVerificationCodeRequest.getAccessToken() != null) {
                    String accessToken = getUserAttributeVerificationCodeRequest.getAccessToken();
                    jsonWriter.name("AccessToken");
                    jsonWriter.value(accessToken);
                }
                if (getUserAttributeVerificationCodeRequest.getAttributeName() != null) {
                    String attributeName = getUserAttributeVerificationCodeRequest.getAttributeName();
                    jsonWriter.name("AttributeName");
                    jsonWriter.value(attributeName);
                }
                if (getUserAttributeVerificationCodeRequest.getClientMetadata() != null) {
                    Map<String, String> clientMetadata = getUserAttributeVerificationCodeRequest.getClientMetadata();
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
            throw new AmazonClientException("Invalid argument passed to marshall(GetUserAttributeVerificationCodeRequest)");
        }
    }
}
