package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoLambdaResponseInvalidException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = -7555105550171515590L;

    public CognitoLambdaResponseInvalidException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoLambdaResponseInvalidException(String str) {
        super(str);
    }
}
