package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class InvalidSmsRoleAccessPolicyException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public InvalidSmsRoleAccessPolicyException(String str) {
        super(str);
    }
}