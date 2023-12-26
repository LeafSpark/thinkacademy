package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoAuthenticationFailedException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = 8165822545734303030L;

    public CognitoAuthenticationFailedException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoAuthenticationFailedException(String str) {
        super(str);
    }
}
