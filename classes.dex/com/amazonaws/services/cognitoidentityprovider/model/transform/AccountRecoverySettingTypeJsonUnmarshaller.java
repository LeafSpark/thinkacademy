package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.AccountRecoverySettingType;
import com.amazonaws.transform.JsonUnmarshallerContext;
import com.amazonaws.transform.ListUnmarshaller;
import com.amazonaws.transform.Unmarshaller;
import com.amazonaws.util.json.AwsJsonReader;

class AccountRecoverySettingTypeJsonUnmarshaller implements Unmarshaller<AccountRecoverySettingType, JsonUnmarshallerContext> {
    private static AccountRecoverySettingTypeJsonUnmarshaller instance;

    AccountRecoverySettingTypeJsonUnmarshaller() {
    }

    public AccountRecoverySettingType unmarshall(JsonUnmarshallerContext jsonUnmarshallerContext) throws Exception {
        AwsJsonReader reader = jsonUnmarshallerContext.getReader();
        if (!reader.isContainer()) {
            reader.skipValue();
            return null;
        }
        AccountRecoverySettingType accountRecoverySettingType = new AccountRecoverySettingType();
        reader.beginObject();
        while (reader.hasNext()) {
            if (reader.nextName().equals("RecoveryMechanisms")) {
                accountRecoverySettingType.setRecoveryMechanisms(new ListUnmarshaller(RecoveryOptionTypeJsonUnmarshaller.getInstance()).unmarshall(jsonUnmarshallerContext));
            } else {
                reader.skipValue();
            }
        }
        reader.endObject();
        return accountRecoverySettingType;
    }

    public static AccountRecoverySettingTypeJsonUnmarshaller getInstance() {
        if (instance == null) {
            instance = new AccountRecoverySettingTypeJsonUnmarshaller();
        }
        return instance;
    }
}
