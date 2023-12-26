package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class InternalErrorException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public InternalErrorException(String str) {
        super(str);
    }
}
