package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class DuplicateProviderException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public DuplicateProviderException(String str) {
        super(str);
    }
}
