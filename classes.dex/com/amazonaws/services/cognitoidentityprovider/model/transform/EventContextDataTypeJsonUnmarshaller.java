package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.cognito.clientcontext.datacollection.DataRecordKey;
import com.amazonaws.services.cognitoidentityprovider.model.EventContextDataType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class EventContextDataTypeJsonUnmarshaller implements Unmarshaller<EventContextDataType, JsonUnmarshallerContext> {
    private static EventContextDataTypeJsonUnmarshaller instance;

    EventContextDataTypeJsonUnmarshaller() {
    }

    public EventContextDataType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        EventContextDataType eventContextDataType = new EventContextDataType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("IpAddress")) {
                eventContextDataType.setIpAddress(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals(DataRecordKey.MODEL)) {
                eventContextDataType.setDeviceName(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Timezone")) {
                eventContextDataType.setTimezone(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("City")) {
                eventContextDataType.setCity(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Country")) {
                eventContextDataType.setCountry(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return eventContextDataType;
    }

    public static EventContextDataTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new EventContextDataTypeJsonUnmarshaller();
        }
        return instance;
    }
}
