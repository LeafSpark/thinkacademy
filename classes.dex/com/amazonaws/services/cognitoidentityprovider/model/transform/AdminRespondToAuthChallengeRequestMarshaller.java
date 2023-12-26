package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AdminRespondToAuthChallengeRequest;
import com.amazonaws.services.cognitoidentityprovider.model.AnalyticsMetadataType;
import com.amazonaws.services.cognitoidentityprovider.model.ContextDataType;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;
import java.util.Map;

public class AdminRespondToAuthChallengeRequestMarshaller implements Marshaller<Request<AdminRespondToAuthChallengeRequest>, AdminRespondToAuthChallengeRequest> {
    public Request<AdminRespondToAuthChallengeRequest> marshall(AdminRespondToAuthChallengeRequest adminRespondToAuthChallengeRequest) {
        if (adminRespondToAuthChallengeRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(adminRespondToAuthChallengeRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (adminRespondToAuthChallengeRequest.getUserPoolId() != null) {
                    String userPoolId = adminRespondToAuthChallengeRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (adminRespondToAuthChallengeRequest.getClientId() != null) {
                    String clientId = adminRespondToAuthChallengeRequest.getClientId();
                    jsonWriter.name("ClientId");
                    jsonWriter.value(clientId);
                }
                if (adminRespondToAuthChallengeRequest.getChallengeName() != null) {
                    String challengeName = adminRespondToAuthChallengeRequest.getChallengeName();
                    jsonWriter.name("ChallengeName");
                    jsonWriter.value(challengeName);
                }
                if (adminRespondToAuthChallengeRequest.getChallengeResponses() != null) {
                    Map<String, String> challengeResponses = adminRespondToAuthChallengeRequest.getChallengeResponses();
                    jsonWriter.name("ChallengeResponses");
                    jsonWriter.beginObject();
                    for (Map.Entry next : challengeResponses.entrySet()) {
                        String str = (String) next.getValue();
                        if (str != null) {
                            jsonWriter.name((String) next.getKey());
                            jsonWriter.value(str);
                        }
                    }
                    jsonWriter.endObject();
                }
                if (adminRespondToAuthChallengeRequest.getSession() != null) {
                    String session = adminRespondToAuthChallengeRequest.getSession();
                    jsonWriter.name("Session");
                    jsonWriter.value(session);
                }
                if (adminRespondToAuthChallengeRequest.getAnalyticsMetadata() != null) {
                    AnalyticsMetadataType analyticsMetadata = adminRespondToAuthChallengeRequest.getAnalyticsMetadata();
                    jsonWriter.name("AnalyticsMetadata");
                    AnalyticsMetadataTypeJsonMarshaller.getInstance().marshall(analyticsMetadata, jsonWriter);
                }
                if (adminRespondToAuthChallengeRequest.getContextData() != null) {
                    ContextDataType contextData = adminRespondToAuthChallengeRequest.getContextData();
                    jsonWriter.name("ContextData");
                    ContextDataTypeJsonMarshaller.getInstance().marshall(contextData, jsonWriter);
                }
                if (adminRespondToAuthChallengeRequest.getClientMetadata() != null) {
                    Map<String, String> clientMetadata = adminRespondToAuthChallengeRequest.getClientMetadata();
                    jsonWriter.name("ClientMetadata");
                    jsonWriter.beginObject();
                    for (Map.Entry next2 : clientMetadata.entrySet()) {
                        String str2 = (String) next2.getValue();
                        if (str2 != null) {
                            jsonWriter.name((String) next2.getKey());
                            jsonWriter.value(str2);
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
            throw new AmazonClientException("Invalid argument passed to marshall(AdminRespondToAuthChallengeRequest)");
        }
    }
}
