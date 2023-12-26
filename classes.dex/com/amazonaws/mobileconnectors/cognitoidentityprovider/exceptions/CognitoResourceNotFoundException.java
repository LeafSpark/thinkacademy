package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoResourceNotFoundException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = -7875174258893803243L;

    public CognitoResourceNotFoundException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoResourceNotFoundException(String str) {
        super(str);
    }
}
