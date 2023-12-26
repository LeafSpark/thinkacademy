package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AdminListDevicesResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class AdminListDevicesResultJsonUnmarshaller implements Unmarshaller<AdminListDevicesResult, JsonUnmarshallerContext> {
    private static AdminListDevicesResultJsonUnmarshaller instance;

    public AdminListDevicesResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AdminListDevicesResult adminListDevicesResult = new AdminListDevicesResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("Devices")) {
                adminListDevicesResult.setDevices(new ListUnmarshaller(DeviceTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("PaginationToken")) {
                adminListDevicesResult.setPaginationToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return adminListDevicesResult;
    }

    public static AdminListDevicesResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AdminListDevicesResultJsonUnmarshaller();
        }
        return instance;
    }
}
