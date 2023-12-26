package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ResourceServerType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class ResourceServerTypeJsonUnmarshaller implements Unmarshaller<ResourceServerType, JsonUnmarshallerContext> {
    private static ResourceServerTypeJsonUnmarshaller instance;

    ResourceServerTypeJsonUnmarshaller() {
    }

    public ResourceServerType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        ResourceServerType resourceServerType = new ResourceServerType();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("UserPoolId")) {
                resourceServerType.setUserPoolId(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Identifier")) {
                resourceServerType.setIdentifier(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Name")) {
                resourceServerType.setName(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Scopes")) {
                resourceServerType.setScopes(new ListUnmarshaller(ResourceServerScopeTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return resourceServerType;
    }

    public static ResourceServerTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new ResourceServerTypeJsonUnmarshaller();
        }
        return instance;
    }
}
