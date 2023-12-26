package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.CustomDomainConfigType;
import com.amazonaws.services.cognitoidentityprovider.model.UpdateUserPoolDomainRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class UpdateUserPoolDomainRequestMarshaller implements Marshaller<Request<UpdateUserPoolDomainRequest>, UpdateUserPoolDomainRequest> {
    public Request<UpdateUserPoolDomainRequest> marshall(UpdateUserPoolDomainRequest updateUserPoolDomainRequest) {
        if (updateUserPoolDomainRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(updateUserPoolDomainRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.UpdateUserPoolDomain");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (updateUserPoolDomainRequest.getDomain() != null) {
                    String domain = updateUserPoolDomainRequest.getDomain();
                    jsonWriter.name("Domain");
                    jsonWriter.value(domain);
                }
                if (updateUserPoolDomainRequest.getUserPoolId() != null) {
                    String userPoolId = updateUserPoolDomainRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (updateUserPoolDomainRequest.getCustomDomainConfig() != null) {
                    CustomDomainConfigType customDomainConfig = updateUserPoolDomainRequest.getCustomDomainConfig();
                    jsonWriter.name("CustomDomainConfig");
                    CustomDomainConfigTypeJsonMarshaller.getInstance().marshall(customDomainConfig, jsonWriter);
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
            throw new AmazonClientException("Invalid argument passed to marshall(UpdateUserPoolDomainRequest)");
        }
    }
}
