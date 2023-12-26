package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AdminListUserAuthEventsResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class AdminListUserAuthEventsResultJsonUnmarshaller implements Unmarshaller<AdminListUserAuthEventsResult, JsonUnmarshallerContext> {
    private static AdminListUserAuthEventsResultJsonUnmarshaller instance;

    public AdminListUserAuthEventsResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AdminListUserAuthEventsResult adminListUserAuthEventsResult = new AdminListUserAuthEventsResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("AuthEvents")) {
                adminListUserAuthEventsResult.setAuthEvents(new ListUnmarshaller(AuthEventTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("NextToken")) {
                adminListUserAuthEventsResult.setNextToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return adminListUserAuthEventsResult;
    }

    public static AdminListUserAuthEventsResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AdminListUserAuthEventsResultJsonUnmarshaller();
        }
        return instance;
    }
}
