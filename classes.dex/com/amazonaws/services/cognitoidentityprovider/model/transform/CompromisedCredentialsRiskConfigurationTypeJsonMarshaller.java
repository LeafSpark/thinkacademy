package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.CompromisedCredentialsActionsType;
import com.amazonaws.services.cognitoidentityprovider.model.CompromisedCredentialsRiskConfigurationType;
import com.amazonaws.util.json.AwsJsonWriter;
import java.util.List;

class CompromisedCredentialsRiskConfigurationTypeJsonMarshaller {
    private static CompromisedCredentialsRiskConfigurationTypeJsonMarshaller instance;

    CompromisedCredentialsRiskConfigurationTypeJsonMarshaller() {
    }

    public void marshall(CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfigurationType, AwsJsonWriter awsJsonWriter) throws Exception {
        awsJsonWriter.beginObject();
        if (compromisedCredentialsRiskConfigurationType.getEventFilter() != null) {
            List<String> eventFilter = compromisedCredentialsRiskConfigurationType.getEventFilter();
            awsJsonWriter.name("EventFilter");
            awsJsonWriter.beginArray();
            for (String next : eventFilter) {
                if (next != null) {
                    awsJsonWriter.value(next);
                }
            }
            awsJsonWriter.endArray();
        }
        if (compromisedCredentialsRiskConfigurationType.getActions() != null) {
            CompromisedCredentialsActionsType actions = compromisedCredentialsRiskConfigurationType.getActions();
            awsJsonWriter.name("Actions");
            CompromisedCredentialsActionsTypeJsonMarshaller.getInstance().marshall(actions, awsJsonWriter);
        }
        awsJsonWriter.endObject();
    }

    public static CompromisedCredentialsRiskConfigurationTypeJsonMarshaller getInstance() {
        if (instance == null) {
            instance = new CompromisedCredentialsRiskConfigurationTypeJsonMarshaller();
        }
        return instance;
    }
}
