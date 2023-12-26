package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.NotifyConfigurationType;
import com.amazonaws.services.cognitoidentityprovider.model.NotifyEmailType;
import com.amazonaws.util.json.AwsJsonWriter;

class NotifyConfigurationTypeJsonMarshaller {
    private static NotifyConfigurationTypeJsonMarshaller instance;

    NotifyConfigurationTypeJsonMarshaller() {
    }

    public void marshall(NotifyConfigurationType notifyConfigurationType, AwsJsonWriter awsJsonWriter) throws Exception {
        awsJsonWriter.beginObject();
        if (notifyConfigurationType.getFrom() != null) {
            String from = notifyConfigurationType.getFrom();
            awsJsonWriter.name("From");
            awsJsonWriter.value(from);
        }
        if (notifyConfigurationType.getReplyTo() != null) {
            String replyTo = notifyConfigurationType.getReplyTo();
            awsJsonWriter.name("ReplyTo");
            awsJsonWriter.value(replyTo);
        }
        if (notifyConfigurationType.getSourceArn() != null) {
            String sourceArn = notifyConfigurationType.getSourceArn();
            awsJsonWriter.name("SourceArn");
            awsJsonWriter.value(sourceArn);
        }
        if (notifyConfigurationType.getBlockEmail() != null) {
            NotifyEmailType blockEmail = notifyConfigurationType.getBlockEmail();
            awsJsonWriter.name("BlockEmail");
            NotifyEmailTypeJsonMarshaller.getInstance().marshall(blockEmail, awsJsonWriter);
        }
        if (notifyConfigurationType.getNoActionEmail() != null) {
            NotifyEmailType noActionEmail = notifyConfigurationType.getNoActionEmail();
            awsJsonWriter.name("NoActionEmail");
            NotifyEmailTypeJsonMarshaller.getInstance().marshall(noActionEmail, awsJsonWriter);
        }
        if (notifyConfigurationType.getMfaEmail() != null) {
            NotifyEmailType mfaEmail = notifyConfigurationType.getMfaEmail();
            awsJsonWriter.name("MfaEmail");
            NotifyEmailTypeJsonMarshaller.getInstance().marshall(mfaEmail, awsJsonWriter);
        }
        awsJsonWriter.endObject();
    }

    public static NotifyConfigurationTypeJsonMarshaller getInstance() {
        if (instance == null) {
            instance = new NotifyConfigurationTypeJsonMarshaller();
        }
        return instance;
    }
}
