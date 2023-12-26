package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AssociateSoftwareTokenResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class AssociateSoftwareTokenResultJsonUnmarshaller implements Unmarshaller<AssociateSoftwareTokenResult, JsonUnmarshallerContext> {
    private static AssociateSoftwareTokenResultJsonUnmarshaller instance;

    public AssociateSoftwareTokenResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AssociateSoftwareTokenResult associateSoftwareTokenResult = new AssociateSoftwareTokenResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("SecretCode")) {
                associateSoftwareTokenResult.setSecretCode(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Session")) {
                associateSoftwareTokenResult.setSession(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return associateSoftwareTokenResult;
    }

    public static AssociateSoftwareTokenResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AssociateSoftwareTokenResultJsonUnmarshaller();
        }
        return instance;
    }
}
