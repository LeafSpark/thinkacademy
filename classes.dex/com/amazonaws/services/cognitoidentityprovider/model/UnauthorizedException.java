package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class UnauthorizedException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public UnauthorizedException(String str) {
        super(str);
    }
}
