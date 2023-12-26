package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class AliasExistsException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public AliasExistsException(String str) {
        super(str);
    }
}
