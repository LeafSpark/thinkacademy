package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.CustomDomainConfigType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class CustomDomainConfigTypeJsonUnmarshaller implements Unmarshaller<CustomDomainConfigType, JsonUnmarshallerContext> {
    private static CustomDomainConfigTypeJsonUnmarshaller instance;

    CustomDomainConfigTypeJsonUnmarshaller() {
    }

    public CustomDomainConfigType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        CustomDomainConfigType customDomainConfigType = new CustomDomainConfigType();
        reader.beginObject();
        while (reader.hasNext()) {
            if (reader.nextName().equals("CertificateArn")) {
                customDomainConfigType.setCertificateArn(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return customDomainConfigType;
    }

    public static CustomDomainConfigTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new CustomDomainConfigTypeJsonUnmarshaller();
        }
        return instance;
    }
}
