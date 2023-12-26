package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class ExpiredCodeException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public ExpiredCodeException(String str) {
        super(str);
    }
}
