package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ChangePasswordResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;

public class ChangePasswordResultJsonUnmarshaller implements Unmarshaller<ChangePasswordResult, JsonUnmarshallerContext> {
    private static ChangePasswordResultJsonUnmarshaller instance;

    public ChangePasswordResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        return new ChangePasswordResult();
    }

    public static ChangePasswordResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ChangePasswordResultJsonUnmarshaller();
        }
        return instance;
    }
}
