package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class UserImportInProgressException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public UserImportInProgressException(String str) {
        super(str);
    }
}
