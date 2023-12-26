package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.DeviceConfigurationType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class DeviceConfigurationTypeJsonUnmarshaller implements Unmarshaller<DeviceConfigurationType, JsonUnmarshallerContext> {
    private static DeviceConfigurationTypeJsonUnmarshaller instance;

    DeviceConfigurationTypeJsonUnmarshaller() {
    }

    public DeviceConfigurationType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        DeviceConfigurationType deviceConfigurationType = new DeviceConfigurationType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("ChallengeRequiredOnNewDevice")) {
                deviceConfigurationType.setChallengeRequiredOnNewDevice(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("DeviceOnlyRememberedOnUserPrompt")) {
                deviceConfigurationType.setDeviceOnlyRememberedOnUserPrompt(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return deviceConfigurationType;
    }

    public static DeviceConfigurationTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new DeviceConfigurationTypeJsonUnmarshaller();
        }
        return instance;
    }
}
