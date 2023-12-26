package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AnalyticsConfigurationType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class AnalyticsConfigurationTypeJsonUnmarshaller implements Unmarshaller<AnalyticsConfigurationType, JsonUnmarshallerContext> {
    private static AnalyticsConfigurationTypeJsonUnmarshaller instance;

    AnalyticsConfigurationTypeJsonUnmarshaller() {
    }

    public AnalyticsConfigurationType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        AnalyticsConfigurationType analyticsConfigurationType = new AnalyticsConfigurationType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("ApplicationId")) {
                analyticsConfigurationType.setApplicationId(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("ApplicationArn")) {
                analyticsConfigurationType.setApplicationArn(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("RoleArn")) {
                analyticsConfigurationType.setRoleArn(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("ExternalId")) {
                analyticsConfigurationType.setExternalId(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("UserDataShared")) {
                analyticsConfigurationType.setUserDataShared(SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return analyticsConfigurationType;
    }

    public static AnalyticsConfigurationTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AnalyticsConfigurationTypeJsonUnmarshaller();
        }
        return instance;
    }
}
