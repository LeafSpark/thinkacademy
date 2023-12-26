package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.CustomSMSLambdaVersionConfigType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class CustomSMSLambdaVersionConfigTypeJsonUnmarshaller implements Unmarshaller<CustomSMSLambdaVersionConfigType, JsonUnmarshallerContext> {
    private static CustomSMSLambdaVersionConfigTypeJsonUnmarshaller instance;

    CustomSMSLambdaVersionConfigTypeJsonUnmarshaller() {
    }

    public CustomSMSLambdaVersionConfigType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        CustomSMSLambdaVersionConfigType customSMSLambdaVersionConfigType = new CustomSMSLambdaVersionConfigType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("LambdaVersion")) {
                customSMSLambdaVersionConfigType.setLambdaVersion(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("LambdaArn")) {
                customSMSLambdaVersionConfigType.setLambdaArn(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return customSMSLambdaVersionConfigType;
    }

    public static CustomSMSLambdaVersionConfigTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new CustomSMSLambdaVersionConfigTypeJsonUnmarshaller();
        }
        return instance;
    }
}
