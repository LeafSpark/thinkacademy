package com.amazonaws.services.cognitoidentityprovider.model;

import java.util.HashMap;
import java.util.Map;

public enum EmailSendingAccountType {
    COGNITO_DEFAULT("COGNITO_DEFAULT"),
    DEVELOPER("DEVELOPER");
    
    private static final Map<String, EmailSendingAccountType> enumMap = null;
    private String value;

    static {
        EmailSendingAccountType emailSendingAccountType;
        EmailSendingAccountType emailSendingAccountType2;
        HashMap hashMap = new HashMap();
        enumMap = hashMap;
        hashMap.put("COGNITO_DEFAULT", emailSendingAccountType);
        hashMap.put("DEVELOPER", emailSendingAccountType2);
    }

    private EmailSendingAccountType(String str) {
        this.value = str;
    }

    public String toString() {
        return this.value;
    }

    public static EmailSendingAccountType fromValue(String str) {
        if (str == null || str.isEmpty()) {
            throw new IllegalArgumentException("Value cannot be null or empty!");
        }
        Map<String, EmailSendingAccountType> map = enumMap;
        if (map.containsKey(str)) {
            return map.get(str);
        }
        throw new IllegalArgumentException("Cannot create enum from " + str + " value!");
    }
}
