package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class UserNotFoundException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public UserNotFoundException(String str) {
        super(str);
    }
}
