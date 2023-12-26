package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ListGroupsResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class ListGroupsResultJsonUnmarshaller implements Unmarshaller<ListGroupsResult, JsonUnmarshallerContext> {
    private static ListGroupsResultJsonUnmarshaller instance;

    public ListGroupsResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        ListGroupsResult listGroupsResult = new ListGroupsResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("Groups")) {
                listGroupsResult.setGroups(new ListUnmarshaller(GroupTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("NextToken")) {
                listGroupsResult.setNextToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return listGroupsResult;
    }

    public static ListGroupsResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ListGroupsResultJsonUnmarshaller();
        }
        return instance;
    }
}
