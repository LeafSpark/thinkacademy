package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoCodeExpiredException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = 2414443500383441666L;

    public CognitoCodeExpiredException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoCodeExpiredException(String str) {
        super(str);
    }
}
