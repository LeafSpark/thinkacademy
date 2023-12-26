package com.amazonaws.services.kms.model.transform;

import com.amazonaws.services.kms.model.DescribeKeyResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class DescribeKeyResultJsonUnmarshaller implements Unmarshaller<DescribeKeyResult, JsonUnmarshallerContext> {
    private static DescribeKeyResultJsonUnmarshaller instance;

    public DescribeKeyResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        DescribeKeyResult describeKeyResult = new DescribeKeyResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            if (reader.nextName().equals("KeyMetadata")) {
                describeKeyResult.setKeyMetadata(KeyMetadataJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return describeKeyResult;
    }

    public static DescribeKeyResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new DescribeKeyResultJsonUnmarshaller();
        }
        return instance;
    }
}
