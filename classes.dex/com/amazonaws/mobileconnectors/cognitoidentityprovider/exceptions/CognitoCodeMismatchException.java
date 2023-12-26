package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoCodeMismatchException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = -267743909862371391L;

    public CognitoCodeMismatchException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoCodeMismatchException(String str) {
        super(str);
    }
}
