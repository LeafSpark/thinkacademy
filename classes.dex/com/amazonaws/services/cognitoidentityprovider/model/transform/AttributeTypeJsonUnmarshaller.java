package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AttributeType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class AttributeTypeJsonUnmarshaller implements Unmarshaller<AttributeType, JsonUnmarshallerContext> {
    private static AttributeTypeJsonUnmarshaller instance;

    AttributeTypeJsonUnmarshaller() {
    }

    public AttributeType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        AttributeType attributeType = new AttributeType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("Name")) {
                attributeType.setName(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Value")) {
                attributeType.setValue(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return attributeType;
    }

    public static AttributeTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AttributeTypeJsonUnmarshaller();
        }
        return instance;
    }
}
