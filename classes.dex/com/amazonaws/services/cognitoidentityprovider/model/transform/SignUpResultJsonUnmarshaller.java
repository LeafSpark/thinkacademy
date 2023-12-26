package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.SignUpResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class SignUpResultJsonUnmarshaller implements Unmarshaller<SignUpResult, JsonUnmarshallerContext> {
    private static SignUpResultJsonUnmarshaller instance;

    public SignUpResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        SignUpResult signUpResult = new SignUpResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("UserConfirmed")) {
                signUpResult.setUserConfirmed(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("CodeDeliveryDetails")) {
                signUpResult.setCodeDeliveryDetails(CodeDeliveryDetailsTypeJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("UserSub")) {
                signUpResult.setUserSub(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return signUpResult;
    }

    public static SignUpResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new SignUpResultJsonUnmarshaller();
        }
        return instance;
    }
}
