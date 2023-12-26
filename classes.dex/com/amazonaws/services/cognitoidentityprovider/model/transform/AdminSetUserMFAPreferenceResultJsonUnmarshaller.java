package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AdminSetUserMFAPreferenceResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;

public class AdminSetUserMFAPreferenceResultJsonUnmarshaller implements Unmarshaller<AdminSetUserMFAPreferenceResult, JsonUnmarshallerContext> {
    private static AdminSetUserMFAPreferenceResultJsonUnmarshaller instance;

    public AdminSetUserMFAPreferenceResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        return new AdminSetUserMFAPreferenceResult();
    }

    public static AdminSetUserMFAPreferenceResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AdminSetUserMFAPreferenceResultJsonUnmarshaller();
        }
        return instance;
    }
}
