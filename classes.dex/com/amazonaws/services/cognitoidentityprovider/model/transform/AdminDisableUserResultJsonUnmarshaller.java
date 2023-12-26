package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AdminDisableUserResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;

public class AdminDisableUserResultJsonUnmarshaller implements Unmarshaller<AdminDisableUserResult, JsonUnmarshallerContext> {
    private static AdminDisableUserResultJsonUnmarshaller instance;

    public AdminDisableUserResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        return new AdminDisableUserResult();
    }

    public static AdminDisableUserResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AdminDisableUserResultJsonUnmarshaller();
        }
        return instance;
    }
}
