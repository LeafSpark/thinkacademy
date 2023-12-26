package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoNotAuthorizedException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = -4496852554085318906L;

    public CognitoNotAuthorizedException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoNotAuthorizedException(String str) {
        super(str);
    }
}
