package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.ResourceServerScopeType;
import com.amazonaws.services.cognitoidentityprovider.model.UpdateResourceServerRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.List;

public class UpdateResourceServerRequestMarshaller implements Marshaller<Request<UpdateResourceServerRequest>, UpdateResourceServerRequest> {
    public Request<UpdateResourceServerRequest> marshall(UpdateResourceServerRequest updateResourceServerRequest) {
        if (updateResourceServerRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(updateResourceServerRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.UpdateResourceServer");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (updateResourceServerRequest.getUserPoolId() != null) {
                    String userPoolId = updateResourceServerRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (updateResourceServerRequest.getIdentifier() != null) {
                    String identifier = updateResourceServerRequest.getIdentifier();
                    jsonWriter.name("Identifier");
                    jsonWriter.value(identifier);
                }
                if (updateResourceServerRequest.getName() != null) {
                    String name = updateResourceServerRequest.getName();
                    jsonWriter.name("Name");
                    jsonWriter.value(name);
                }
                if (updateResourceServerRequest.getScopes() != null) {
                    List<ResourceServerScopeType> scopes = updateResourceServerRequest.getScopes();
                    jsonWriter.name("Scopes");
                    jsonWriter.beginArray();
                    for (ResourceServerScopeType next : scopes) {
                        if (next != null) {
                            ResourceServerScopeTypeJsonMarshaller.getInstance().marshall(next, jsonWriter);
                        }
                    }
                    jsonWriter.endArray();
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
            throw new AmazonClientException("Invalid argument passed to marshall(UpdateResourceServerRequest)");
        }
    }
}
