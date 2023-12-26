package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.GetUserAttributeVerificationCodeResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class GetUserAttributeVerificationCodeResultJsonUnmarshaller implements Unmarshaller<GetUserAttributeVerificationCodeResult, JsonUnmarshallerContext> {
    private static GetUserAttributeVerificationCodeResultJsonUnmarshaller instance;

    public GetUserAttributeVerificationCodeResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        GetUserAttributeVerificationCodeResult getUserAttributeVerificationCodeResult = new GetUserAttributeVerificationCodeResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            if (reader.nextName().equals("CodeDeliveryDetails")) {
                getUserAttributeVerificationCodeResult.setCodeDeliveryDetails(CodeDeliveryDetailsTypeJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return getUserAttributeVerificationCodeResult;
    }

    public static GetUserAttributeVerificationCodeResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new GetUserAttributeVerificationCodeResultJsonUnmarshaller();
        }
        return instance;
    }
}
