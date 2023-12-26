package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class UsernameExistsException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public UsernameExistsException(String str) {
        super(str);
    }
}
