package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.MFAOptionType;
import com.amazonaws.util.json.AwsJsonWriter;

class MFAOptionTypeJsonMarshaller {
    private static MFAOptionTypeJsonMarshaller instance;

    MFAOptionTypeJsonMarshaller() {
    }

    public void marshall(MFAOptionType mFAOptionType, AwsJsonWriter awsJsonWriter) throws Exception {
        awsJsonWriter.beginObject();
        if (mFAOptionType.getDeliveryMedium() != null) {
            String deliveryMedium = mFAOptionType.getDeliveryMedium();
            awsJsonWriter.name("DeliveryMedium");
            awsJsonWriter.value(deliveryMedium);
        }
        if (mFAOptionType.getAttributeName() != null) {
            String attributeName = mFAOptionType.getAttributeName();
            awsJsonWriter.name("AttributeName");
            awsJsonWriter.value(attributeName);
        }
        awsJsonWriter.endObject();
    }

    public static MFAOptionTypeJsonMarshaller getInstance() {
        if (instance == null) {
            instance = new MFAOptionTypeJsonMarshaller();
        }
        return instance;
    }
}
