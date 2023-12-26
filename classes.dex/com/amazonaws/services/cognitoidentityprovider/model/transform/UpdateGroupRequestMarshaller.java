package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.UpdateGroupRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class UpdateGroupRequestMarshaller implements Marshaller<Request<UpdateGroupRequest>, UpdateGroupRequest> {
    public Request<UpdateGroupRequest> marshall(UpdateGroupRequest updateGroupRequest) {
        if (updateGroupRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(updateGroupRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.UpdateGroup");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (updateGroupRequest.getGroupName() != null) {
                    String groupName = updateGroupRequest.getGroupName();
                    jsonWriter.name("GroupName");
                    jsonWriter.value(groupName);
                }
                if (updateGroupRequest.getUserPoolId() != null) {
                    String userPoolId = updateGroupRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (updateGroupRequest.getDescription() != null) {
                    String description = updateGroupRequest.getDescription();
                    jsonWriter.name("Description");
                    jsonWriter.value(description);
                }
                if (updateGroupRequest.getRoleArn() != null) {
                    String roleArn = updateGroupRequest.getRoleArn();
                    jsonWriter.name("RoleArn");
                    jsonWriter.value(roleArn);
                }
                if (updateGroupRequest.getPrecedence() != null) {
                    Integer precedence = updateGroupRequest.getPrecedence();
                    jsonWriter.name("Precedence");
                    jsonWriter.value(precedence);
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
            throw new AmazonClientException("Invalid argument passed to marshall(UpdateGroupRequest)");
        }
    }
}
