package com.amazonaws.services.kms.model.transform;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.http.JsonErrorResponseHandler;
import com.amazonaws.services.kms.model.InvalidCiphertextException;
import com.amazonaws.transform.JsonErrorUnmarshaller;

public class InvalidCiphertextExceptionUnmarshaller extends JsonErrorUnmarshaller {
    public InvalidCiphertextExceptionUnmarshaller() {
        super(InvalidCiphertextException.class);
    }

    public boolean match(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        return jsonErrorResponse.getErrorCode().equals("InvalidCiphertextException");
    }

    public AmazonServiceException unmarshall(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        InvalidCiphertextException invalidCiphertextException = (InvalidCiphertextException) InvalidCiphertextExceptionUnmarshaller.super.unmarshall(jsonErrorResponse);
        invalidCiphertextException.setErrorCode("InvalidCiphertextException");
        return invalidCiphertextException;
    }
}
