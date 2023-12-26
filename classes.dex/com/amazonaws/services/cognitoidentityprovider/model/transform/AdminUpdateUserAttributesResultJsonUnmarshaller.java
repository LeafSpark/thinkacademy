package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AdminUpdateUserAttributesResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;

public class AdminUpdateUserAttributesResultJsonUnmarshaller implements Unmarshaller<AdminUpdateUserAttributesResult, JsonUnmarshallerContext> {
    private static AdminUpdateUserAttributesResultJsonUnmarshaller instance;

    public AdminUpdateUserAttributesResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        return new AdminUpdateUserAttributesResult();
    }

    public static AdminUpdateUserAttributesResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AdminUpdateUserAttributesResultJsonUnmarshaller();
        }
        return instance;
    }
}
