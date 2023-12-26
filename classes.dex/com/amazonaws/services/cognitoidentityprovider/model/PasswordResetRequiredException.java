package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class PasswordResetRequiredException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public PasswordResetRequiredException(String str) {
        super(str);
    }
}
