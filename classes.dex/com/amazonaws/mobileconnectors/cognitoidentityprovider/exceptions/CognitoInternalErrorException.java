package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoInternalErrorException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = 1591505124709311863L;

    public CognitoInternalErrorException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoInternalErrorException(String str) {
        super(str);
    }
}
