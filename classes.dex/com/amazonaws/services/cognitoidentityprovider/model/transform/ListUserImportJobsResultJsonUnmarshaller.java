package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ListUserImportJobsResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class ListUserImportJobsResultJsonUnmarshaller implements Unmarshaller<ListUserImportJobsResult, JsonUnmarshallerContext> {
    private static ListUserImportJobsResultJsonUnmarshaller instance;

    public ListUserImportJobsResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        ListUserImportJobsResult listUserImportJobsResult = new ListUserImportJobsResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("UserImportJobs")) {
                listUserImportJobsResult.setUserImportJobs(new ListUnmarshaller(UserImportJobTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("PaginationToken")) {
                listUserImportJobsResult.setPaginationToken(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return listUserImportJobsResult;
    }

    public static ListUserImportJobsResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ListUserImportJobsResultJsonUnmarshaller();
        }
        return instance;
    }
}
