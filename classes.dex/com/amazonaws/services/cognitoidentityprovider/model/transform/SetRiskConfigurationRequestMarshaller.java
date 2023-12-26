package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.AccountTakeoverRiskConfigurationType;
import com.amazonaws.services.cognitoidentityprovider.model.CompromisedCredentialsRiskConfigurationType;
import com.amazonaws.services.cognitoidentityprovider.model.RiskExceptionConfigurationType;
import com.amazonaws.services.cognitoidentityprovider.model.SetRiskConfigurationRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class SetRiskConfigurationRequestMarshaller implements Marshaller<Request<SetRiskConfigurationRequest>, SetRiskConfigurationRequest> {
    public Request<SetRiskConfigurationRequest> marshall(SetRiskConfigurationRequest setRiskConfigurationRequest) {
        if (setRiskConfigurationRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(setRiskConfigurationRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.SetRiskConfiguration");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (setRiskConfigurationRequest.getUserPoolId() != null) {
                    String userPoolId = setRiskConfigurationRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (setRiskConfigurationRequest.getClientId() != null) {
                    String clientId = setRiskConfigurationRequest.getClientId();
                    jsonWriter.name("ClientId");
                    jsonWriter.value(clientId);
                }
                if (setRiskConfigurationRequest.getCompromisedCredentialsRiskConfiguration() != null) {
                    CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfiguration = setRiskConfigurationRequest.getCompromisedCredentialsRiskConfiguration();
                    jsonWriter.name("CompromisedCredentialsRiskConfiguration");
                    CompromisedCredentialsRiskConfigurationTypeJsonMarshaller.getInstance().marshall(compromisedCredentialsRiskConfiguration, jsonWriter);
                }
                if (setRiskConfigurationRequest.getAccountTakeoverRiskConfiguration() != null) {
                    AccountTakeoverRiskConfigurationType accountTakeoverRiskConfiguration = setRiskConfigurationRequest.getAccountTakeoverRiskConfiguration();
                    jsonWriter.name("AccountTakeoverRiskConfiguration");
                    AccountTakeoverRiskConfigurationTypeJsonMarshaller.getInstance().marshall(accountTakeoverRiskConfiguration, jsonWriter);
                }
                if (setRiskConfigurationRequest.getRiskExceptionConfiguration() != null) {
                    RiskExceptionConfigurationType riskExceptionConfiguration = setRiskConfigurationRequest.getRiskExceptionConfiguration();
                    jsonWriter.name("RiskExceptionConfiguration");
                    RiskExceptionConfigurationTypeJsonMarshaller.getInstance().marshall(riskExceptionConfiguration, jsonWriter);
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
            throw new AmazonClientException("Invalid argument passed to marshall(SetRiskConfigurationRequest)");
        }
    }
}
