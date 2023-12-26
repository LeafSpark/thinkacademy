package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

public class CognitoPasswordInvalidException extends CognitoIdentityProviderException {
    private static final long serialVersionUID = 8828738916097130105L;

    public CognitoPasswordInvalidException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoPasswordInvalidException(String str) {
        super(str);
    }
}
