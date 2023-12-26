package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.UpdateDeviceStatusResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;

public class UpdateDeviceStatusResultJsonUnmarshaller implements Unmarshaller<UpdateDeviceStatusResult, JsonUnmarshallerContext> {
    private static UpdateDeviceStatusResultJsonUnmarshaller instance;

    public UpdateDeviceStatusResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        return new UpdateDeviceStatusResult();
    }

    public static UpdateDeviceStatusResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new UpdateDeviceStatusResultJsonUnmarshaller();
        }
        return instance;
    }
}
