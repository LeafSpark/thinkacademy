package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class GroupExistsException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public GroupExistsException(String str) {
        super(str);
    }
}
