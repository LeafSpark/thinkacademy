package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.CompromisedCredentialsActionsType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class CompromisedCredentialsActionsTypeJsonUnmarshaller implements Unmarshaller<CompromisedCredentialsActionsType, JsonUnmarshallerContext> {
    private static CompromisedCredentialsActionsTypeJsonUnmarshaller instance;

    CompromisedCredentialsActionsTypeJsonUnmarshaller() {
    }

    public CompromisedCredentialsActionsType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        CompromisedCredentialsActionsType compromisedCredentialsActionsType = new CompromisedCredentialsActionsType();
        reader.beginObject();
        while (reader.hasNext()) {
            if (reader.nextName().equals("EventAction")) {
                compromisedCredentialsActionsType.setEventAction(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return compromisedCredentialsActionsType;
    }

    public static CompromisedCredentialsActionsTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new CompromisedCredentialsActionsTypeJsonUnmarshaller();
        }
        return instance;
    }
}
