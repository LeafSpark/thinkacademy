package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ListUsersInGroupResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class ListUsersInGroupResultJsonUnmarshaller implements Unmarshaller<ListUsersInGroupResult, JsonUnmarshallerContext> {
    private static ListUsersInGroupResultJsonUnmarshaller instance;

    public ListUsersInGroupResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        ListUsersInGroupResult listUsersInGroupResult = new ListUsersInGroupResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("Users")) {
                listUsersInGroupResult.setUsers(new ListUnmarshaller(UserTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("NextToken")) {
                listUsersInGroupResult.setNextToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return listUsersInGroupResult;
    }

    public static ListUsersInGroupResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ListUsersInGroupResultJsonUnmarshaller();
        }
        return instance;
    }
}
