package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.RespondToAuthChallengeResult;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.MapUnmarshaller;
import com.amazonaws.transform.SimpleTypeJsonUnmarshallers;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

public class RespondToAuthChallengeResultJsonUnmarshaller implements Unmarshaller<RespondToAuthChallengeResult, JsonUnmarshallerContext> {
    private static RespondToAuthChallengeResultJsonUnmarshaller instance;

    public RespondToAuthChallengeResult unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        RespondToAuthChallengeResult respondToAuthChallengeResult = new RespondToAuthChallengeResult();
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        reader.beginObject();
        while (reader.hasNext()) {
            String nextName = reader.nextName();
            if (nextName.equals("ChallengeName")) {
                respondToAuthChallengeResult.setChallengeName(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("Session")) {
                respondToAuthChallengeResult.setSession(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("ChallengeParameters")) {
                respondToAuthChallengeResult.setChallengeParameters(new MapUnmarshaller(SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else if (nextName.equals("AuthenticationResult")) {
                respondToAuthChallengeResult.setAuthenticationResult(AuthenticationResultTypeJsonUnmarshaller.getInstance().unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return respondToAuthChallengeResult;
    }

    public static RespondToAuthChallengeResultJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new RespondToAuthChallengeResultJsonUnmarshaller();
        }
        return instance;
    }
}
