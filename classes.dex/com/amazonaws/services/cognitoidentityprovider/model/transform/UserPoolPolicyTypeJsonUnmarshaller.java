package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.UserPoolPolicyType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class UserPoolPolicyTypeJsonUnmarshaller implements Unmarshaller<UserPoolPolicyType, JsonUnmarshallerContext> {
    private static UserPoolPolicyTypeJsonUnmarshaller instance;

    UserPoolPolicyTypeJsonUnmarshaller() {
    }

    public UserPoolPolicyType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        UserPoolPolicyType userPoolPolicyType = new UserPoolPolicyType();
        reader.beginObject();
        while (reader.hasNext()) {
            if (reader.nextName().equals("PasswordPolicy")) {
                userPoolPolicyType.setPasswordPolicy(PasswordPolicyTypeJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return userPoolPolicyType;
    }

    public static UserPoolPolicyTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new UserPoolPolicyTypeJsonUnmarshaller();
        }
        return instance;
    }
}
