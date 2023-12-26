package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoLambdaValidationException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = 3986479981872163592L;

    public CognitoLambdaValidationException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoLambdaValidationException(String str) {
        super(str);
    }
}
