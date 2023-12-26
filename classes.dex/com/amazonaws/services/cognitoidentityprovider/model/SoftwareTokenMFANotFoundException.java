package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class SoftwareTokenMFANotFoundException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public SoftwareTokenMFANotFoundException(String str) {
        super(str);
    }
}
