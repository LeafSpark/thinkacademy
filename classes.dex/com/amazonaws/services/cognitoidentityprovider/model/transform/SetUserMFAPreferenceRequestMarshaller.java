package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.SMSMfaSettingsType;
import com.amazonaws.services.cognitoidentityprovider.model.SetUserMFAPreferenceRequest;
import com.amazonaws.services.cognitoidentityprovider.model.SoftwareTokenMfaSettingsType;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class SetUserMFAPreferenceRequestMarshaller implements Marshaller<Request<SetUserMFAPreferenceRequest>, SetUserMFAPreferenceRequest> {
    public Request<SetUserMFAPreferenceRequest> marshall(SetUserMFAPreferenceRequest setUserMFAPreferenceRequest) {
        if (setUserMFAPreferenceRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(setUserMFAPreferenceRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.SetUserMFAPreference");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (setUserMFAPreferenceRequest.getSMSMfaSettings() != null) {
                    SMSMfaSettingsType sMSMfaSettings = setUserMFAPreferenceRequest.getSMSMfaSettings();
                    jsonWriter.name("SMSMfaSettings");
                    SMSMfaSettingsTypeJsonMarshaller.getInstance().marshall(sMSMfaSettings, jsonWriter);
                }
                if (setUserMFAPreferenceRequest.getSoftwareTokenMfaSettings() != null) {
                    SoftwareTokenMfaSettingsType softwareTokenMfaSettings = setUserMFAPreferenceRequest.getSoftwareTokenMfaSettings();
                    jsonWriter.name("SoftwareTokenMfaSettings");
                    SoftwareTokenMfaSettingsTypeJsonMarshaller.getInstance().marshall(softwareTokenMfaSettings, jsonWriter);
                }
                if (setUserMFAPreferenceRequest.getAccessToken() != null) {
                    String accessToken = setUserMFAPreferenceRequest.getAccessToken();
                    jsonWriter.name("AccessToken");
                    jsonWriter.value(accessToken);
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
            throw new AmazonClientException("Invalid argument passed to marshall(SetUserMFAPreferenceRequest)");
        }
    }
}
