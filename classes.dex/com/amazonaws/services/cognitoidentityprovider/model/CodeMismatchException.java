package com.amazonaws.services.cognitoidentityprovider.model;

import com.amazonaws.AmazonServiceException;

public class CodeMismatchException extends AmazonServiceException {
    private static final long serialVersionUID = 1;

    public CodeMismatchException(String str) {
        super(str);
    }
}
