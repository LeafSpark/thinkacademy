package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoParameterInvalidException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = -551253513463692597L;

    public CognitoParameterInvalidException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoParameterInvalidException(String str) {
        super(str);
    }
}
