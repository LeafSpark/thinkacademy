package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class CodeDeliveryFailureException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public CodeDeliveryFailureException(String str) {
        super(str);
    }
}
