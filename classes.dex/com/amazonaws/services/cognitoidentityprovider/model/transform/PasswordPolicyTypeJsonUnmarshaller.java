package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.PasswordPolicyType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class PasswordPolicyTypeJsonUnmarshaller implements Unmarshaller<PasswordPolicyType, JsonUnmarshallerContext> {
    private static PasswordPolicyTypeJsonUnmarshaller instance;

    PasswordPolicyTypeJsonUnmarshaller() {
    }

    public PasswordPolicyType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        PasswordPolicyType passwordPolicyType = new PasswordPolicyType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("MinimumLength")) {
                passwordPolicyType.setMinimumLength(SimpleTypeJsonUnmarshallers.IntegerJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("RequireUppercase")) {
                passwordPolicyType.setRequireUppercase(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("RequireLowercase")) {
                passwordPolicyType.setRequireLowercase(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("RequireNumbers")) {
                passwordPolicyType.setRequireNumbers(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("RequireSymbols")) {
                passwordPolicyType.setRequireSymbols(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("TemporaryPasswordValidityDays")) {
                passwordPolicyType.setTemporaryPasswordValidityDays(SimpleTypeJsonUnmarshallers.IntegerJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return passwordPolicyType;
    }

    public static PasswordPolicyTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new PasswordPolicyTypeJsonUnmarshaller();
        }
        return instance;
    }
}
