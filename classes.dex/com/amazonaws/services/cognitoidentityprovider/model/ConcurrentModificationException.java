package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class ConcurrentModificationException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public ConcurrentModificationException(String str) {
        super(str);
    }
}
