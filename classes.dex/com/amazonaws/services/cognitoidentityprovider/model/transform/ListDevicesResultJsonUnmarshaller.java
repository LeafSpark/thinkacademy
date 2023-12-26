package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ListDevicesResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class ListDevicesResultJsonUnmarshaller implements Unmarshaller<ListDevicesResult, JsonUnmarshallerContext> {
    private static ListDevicesResultJsonUnmarshaller instance;

    public ListDevicesResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        ListDevicesResult listDevicesResult = new ListDevicesResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("Devices")) {
                listDevicesResult.setDevices(new ListUnmarshaller(DeviceTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("PaginationToken")) {
                listDevicesResult.setPaginationToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return listDevicesResult;
    }

    public static ListDevicesResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ListDevicesResultJsonUnmarshaller();
        }
        return instance;
    }
}
