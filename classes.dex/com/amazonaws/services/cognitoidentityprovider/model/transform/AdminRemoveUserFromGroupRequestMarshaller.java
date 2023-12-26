package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AdminRemoveUserFromGroupRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class AdminRemoveUserFromGroupRequestMarshaller implements Marshaller<Request<AdminRemoveUserFromGroupRequest>, AdminRemoveUserFromGroupRequest> {
    public Request<AdminRemoveUserFromGroupRequest> marshall(AdminRemoveUserFromGroupRequest adminRemoveUserFromGroupRequest) {
        if (adminRemoveUserFromGroupRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(adminRemoveUserFromGroupRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (adminRemoveUserFromGroupRequest.getUserPoolId() != null) {
                    String userPoolId = adminRemoveUserFromGroupRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (adminRemoveUserFromGroupRequest.getUsername() != null) {
                    String username = adminRemoveUserFromGroupRequest.getUsername();
                    jsonWriter.name("Username");
                    jsonWriter.value(username);
                }
                if (adminRemoveUserFromGroupRequest.getGroupName() != null) {
                    String groupName = adminRemoveUserFromGroupRequest.getGroupName();
                    jsonWriter.name("GroupName");
                    jsonWriter.value(groupName);
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
            throw new AmazonClientException("Invalid argument passed to marshall(AdminRemoveUserFromGroupRequest)");
        }
    }
}
