package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class UnsupportedUserStateException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public UnsupportedUserStateException(String str) {
        super(str);
    }
}
