package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.CreateGroupRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class CreateGroupRequestMarshaller implements Marshaller<Request<CreateGroupRequest>, CreateGroupRequest> {
    public Request<CreateGroupRequest> marshall(CreateGroupRequest createGroupRequest) {
        if (createGroupRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(createGroupRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.CreateGroup");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (createGroupRequest.getGroupName() != null) {
                    String groupName = createGroupRequest.getGroupName();
                    jsonWriter.name("GroupName");
                    jsonWriter.value(groupName);
                }
                if (createGroupRequest.getUserPoolId() != null) {
                    String userPoolId = createGroupRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (createGroupRequest.getDescription() != null) {
                    String description = createGroupRequest.getDescription();
                    jsonWriter.name("Description");
                    jsonWriter.value(description);
                }
                if (createGroupRequest.getRoleArn() != null) {
                    String roleArn = createGroupRequest.getRoleArn();
                    jsonWriter.name("RoleArn");
                    jsonWriter.value(roleArn);
                }
                if (createGroupRequest.getPrecedence() != null) {
                    Integer precedence = createGroupRequest.getPrecedence();
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
            throw new AmazonClientException("Invalid argument passed to marshall(CreateGroupRequest)");
        }
    }
}
