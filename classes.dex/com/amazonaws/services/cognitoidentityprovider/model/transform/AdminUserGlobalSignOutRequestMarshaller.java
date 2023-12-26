package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AdminUserGlobalSignOutRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class AdminUserGlobalSignOutRequestMarshaller implements Marshaller<Request<AdminUserGlobalSignOutRequest>, AdminUserGlobalSignOutRequest> {
    public Request<AdminUserGlobalSignOutRequest> marshall(AdminUserGlobalSignOutRequest adminUserGlobalSignOutRequest) {
        if (adminUserGlobalSignOutRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(adminUserGlobalSignOutRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (adminUserGlobalSignOutRequest.getUserPoolId() != null) {
                    String userPoolId = adminUserGlobalSignOutRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (adminUserGlobalSignOutRequest.getUsername() != null) {
                    String username = adminUserGlobalSignOutRequest.getUsername();
                    jsonWriter.name("Username");
                    jsonWriter.value(username);
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
            throw new AmazonClientException("Invalid argument passed to marshall(AdminUserGlobalSignOutRequest)");
        }
    }
}
