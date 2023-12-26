package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.adyen.checkout.card.ui.ExpiryDateInput;
import com.amazonaws.AmazonClientException;
import com.amazonaws.DefaultRequest;
import com.amazonaws.Request;
import com.amazonaws.http.HttpMethodName;
import com.amazonaws.services.cognitoidentityprovider.model.CreateUserImportJobRequest;
import com.amazonaws.transform.Marshaller;
import com.amazonaws.util.StringInputStream;
import com.amazonaws.util.StringUtils;
import com.amazonaws.util.json.AwsJsonWriter;
import com.amazonaws.util.json.JsonUtils;
import java.io.StringWriter;

public class CreateUserImportJobRequestMarshaller implements Marshaller<Request<CreateUserImportJobRequest>, CreateUserImportJobRequest> {
    public Request<CreateUserImportJobRequest> marshall(CreateUserImportJobRequest createUserImportJobRequest) {
        if (createUserImportJobRequest != null) {
            DefaultRequest defaultRequest = new DefaultRequest(createUserImportJobRequest, "AmazonCognitoIdentityProvider");
            defaultRequest.addHeader("X-Amz-Target", "AWSCognitoIdentityProviderService.CreateUserImportJob");
            defaultRequest.setHttpMethod(HttpMethodName.POST);
            defaultRequest.setResourcePath(ExpiryDateInput.SEPARATOR);
            try {
                StringWriter stringWriter = new StringWriter();
                AwsJsonWriter jsonWriter = JsonUtils.getJsonWriter(stringWriter);
                jsonWriter.beginObject();
                if (createUserImportJobRequest.getJobName() != null) {
                    String jobName = createUserImportJobRequest.getJobName();
                    jsonWriter.name("JobName");
                    jsonWriter.value(jobName);
                }
                if (createUserImportJobRequest.getUserPoolId() != null) {
                    String userPoolId = createUserImportJobRequest.getUserPoolId();
                    jsonWriter.name("UserPoolId");
                    jsonWriter.value(userPoolId);
                }
                if (createUserImportJobRequest.getCloudWatchLogsRoleArn() != null) {
                    String cloudWatchLogsRoleArn = createUserImportJobRequest.getCloudWatchLogsRoleArn();
                    jsonWriter.name("CloudWatchLogsRoleArn");
                    jsonWriter.value(cloudWatchLogsRoleArn);
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
            throw new AmazonClientException("Invalid argument passed to marshall(CreateUserImportJobRequest)");
        }
    }
}
