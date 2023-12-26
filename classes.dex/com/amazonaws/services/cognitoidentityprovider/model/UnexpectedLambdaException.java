package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class UnexpectedLambdaException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public UnexpectedLambdaException(String str) {
        super(str);
    }
}
