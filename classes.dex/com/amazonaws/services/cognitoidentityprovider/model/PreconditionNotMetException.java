package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class PreconditionNotMetException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public PreconditionNotMetException(String str) {
        super(str);
    }
}
