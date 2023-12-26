package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ListUserPoolsResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class ListUserPoolsResultJsonUnmarshaller implements Unmarshaller<ListUserPoolsResult, JsonUnmarshallerContext> {
    private static ListUserPoolsResultJsonUnmarshaller instance;

    public ListUserPoolsResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        ListUserPoolsResult listUserPoolsResult = new ListUserPoolsResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("UserPools")) {
                listUserPoolsResult.setUserPools(new ListUnmarshaller(UserPoolDescriptionTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("NextToken")) {
                listUserPoolsResult.setNextToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return listUserPoolsResult;
    }

    public static ListUserPoolsResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ListUserPoolsResultJsonUnmarshaller();
        }
        return instance;
    }
}
