package com.amazonaws.services.kms.model.transform;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.http.JsonErrorResponseHandler;
import com.amazonaws.services.kms.model.InvalidGrantTokenException;
import com.amazonaws.transform.JsonErrorUnmarshaller;

public class InvalidGrantTokenExceptionUnmarshaller extends JsonErrorUnmarshaller {
    public InvalidGrantTokenExceptionUnmarshaller() {
        super(InvalidGrantTokenException.class);
    }

    public boolean match(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        return jsonErrorResponse.getErrorCode().equals("InvalidGrantTokenException");
    }

    public AmazonServiceException unmarshall(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        InvalidGrantTokenException invalidGrantTokenException = (InvalidGrantTokenException) InvalidGrantTokenExceptionUnmarshaller.super.unmarshall(jsonErrorResponse);
        invalidGrantTokenException.setErrorCode("InvalidGrantTokenException");
        return invalidGrantTokenException;
    }
}
