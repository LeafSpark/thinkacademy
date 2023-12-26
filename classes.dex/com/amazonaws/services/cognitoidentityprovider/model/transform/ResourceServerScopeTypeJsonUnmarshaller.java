package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ResourceServerScopeType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class ResourceServerScopeTypeJsonUnmarshaller implements Unmarshaller<ResourceServerScopeType, JsonUnmarshallerContext> {
    private static ResourceServerScopeTypeJsonUnmarshaller instance;

    ResourceServerScopeTypeJsonUnmarshaller() {
    }

    public ResourceServerScopeType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        ResourceServerScopeType resourceServerScopeType = new ResourceServerScopeType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("ScopeName")) {
                resourceServerScopeType.setScopeName(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("ScopeDescription")) {
                resourceServerScopeType.setScopeDescription(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return resourceServerScopeType;
    }

    public static ResourceServerScopeTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ResourceServerScopeTypeJsonUnmarshaller();
        }
        return instance;
    }
}
