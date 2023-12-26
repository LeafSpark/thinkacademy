package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoLimitExceeded extends CognitoIdentityProviderException {
    private static final long serialVersionUID = -6536154083710077612L;

    public CognitoLimitExceeded(String str, Throwable th) {
        super(str, th);
    }

    public CognitoLimitExceeded(String str) {
        super(str);
    }
}
