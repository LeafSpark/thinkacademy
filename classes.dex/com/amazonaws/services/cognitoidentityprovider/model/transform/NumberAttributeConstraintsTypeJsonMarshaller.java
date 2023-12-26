package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.NumberAttributeConstraintsType;
import com.amazonaws.util.json.AwsJsonWriter;

class NumberAttributeConstraintsTypeJsonMarshaller {
    private static NumberAttributeConstraintsTypeJsonMarshaller instance;

    NumberAttributeConstraintsTypeJsonMarshaller() {
    }

    public void marshall(NumberAttributeConstraintsType numberAttributeConstraintsType, AwsJsonWriter awsJsonWriter) throws Exception {
        awsJsonWriter.beginObject();
        if (numberAttributeConstraintsType.getMinValue() != null) {
            String minValue = numberAttributeConstraintsType.getMinValue();
            awsJsonWriter.name("MinValue");
            awsJsonWriter.value(minValue);
        }
        if (numberAttributeConstraintsType.getMaxValue() != null) {
            String maxValue = numberAttributeConstraintsType.getMaxValue();
            awsJsonWriter.name("MaxValue");
            awsJsonWriter.value(maxValue);
        }
        awsJsonWriter.endObject();
    }

    public static NumberAttributeConstraintsTypeJsonMarshaller getInstance() {
        if (instance == null) {
            instance = new NumberAttributeConstraintsTypeJsonMarshaller();
        }
        return instance;
    }
}
