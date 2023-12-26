package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AdminSetUserSettingsRequest;
import com.amazonaws.services.cognitoidentityprovider.model.MFAOptionType;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.List;

public class AdminSetUserSettingsRequestMarshaller implements Marshaller<Request<AdminSetUserSettingsRequest>, AdminSetUserSettingsRequest> {
    public Request<AdminSetUserSettingsRequest> marshall(AdminSetUserSettingsRequest adminSetUserSettingsRequest) {
        if (adminSetUserSettingsRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(adminSetUserSettingsRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.AdminSetUserSettings");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (adminSetUserSettingsRequest.getUserPoolId() != null) {
                    String userPoolId = adminSetUserSettingsRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (adminSetUserSettingsRequest.getUsername() != null) {
                    String username = adminSetUserSettingsRequest.getUsername();
                    jsonWriter.name("Username");
                    jsonWriter.value(username);
                }
                if (adminSetUserSettingsRequest.getMFAOptions() != null) {
                    List<MFAOptionType> mFAOptions = adminSetUserSettingsRequest.getMFAOptions();
                    jsonWriter.name("MFAOptions");
                    jsonWriter.beginArray();
                    for (MFAOptionType next : mFAOptions) {
                        if (next != null) {
                            MFAOptionTypeJsonMarshaller.getInstance().marshall(next, jsonWriter);
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
            throw new AmazonClientException("Invalid argument passed to marshall(AdminSetUserSettingsRequest)");
        }
    }
}
