package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.SetUserPoolMfaConfigResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class SetUserPoolMfaConfigResultJsonUnmarshaller implements Unmarshaller<SetUserPoolMfaConfigResult, JsonUnmarshallerContext> {
    private static SetUserPoolMfaConfigResultJsonUnmarshaller instance;

    public SetUserPoolMfaConfigResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        SetUserPoolMfaConfigResult setUserPoolMfaConfigResult = new SetUserPoolMfaConfigResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("SmsMfaConfiguration")) {
                setUserPoolMfaConfigResult.setSmsMfaConfiguration(SmsMfaConfigTypeJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("SoftwareTokenMfaConfiguration")) {
                setUserPoolMfaConfigResult.setSoftwareTokenMfaConfiguration(SoftwareTokenMfaConfigTypeJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("MfaConfiguration")) {
                setUserPoolMfaConfigResult.setMfaConfiguration(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return setUserPoolMfaConfigResult;
    }

    public static SetUserPoolMfaConfigResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new SetUserPoolMfaConfigResultJsonUnmarshaller();
        }
        return instance;
    }
}
