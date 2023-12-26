package com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions;

import com.amazonaws.AmazonClientException;

public class CognitoIdentityProviderException extends AmazonClientException {
    private static final long serialVersionUID = 8038301061230088279L;

    public CognitoIdentityProviderException(String str, Throwable th) {
        super(str, th);
    }

    public CognitoIdentityProviderException(String str) {
        super(str);
    }
}
