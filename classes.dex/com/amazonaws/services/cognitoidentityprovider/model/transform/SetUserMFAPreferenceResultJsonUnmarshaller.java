package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.SetUserMFAPreferenceResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;

public class SetUserMFAPreferenceResultJsonUnmarshaller implements Unmarshaller<SetUserMFAPreferenceResult, JsonUnmarshallerContext> {
    private static SetUserMFAPreferenceResultJsonUnmarshaller instance;

    public SetUserMFAPreferenceResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        return new SetUserMFAPreferenceResult();
    }

    public static SetUserMFAPreferenceResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new SetUserMFAPreferenceResultJsonUnmarshaller();
        }
        return instance;
    }
}
