package com.amazonaws.services.kms.model.transform;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.http.JsonErrorResponseHandler;
import com.amazonaws.services.kms.model.CustomKeyStoreHasCMKsException;
import com.amazonaws.transform.JsonErrorUnmarshaller;

public class CustomKeyStoreHasCMKsExceptionUnmarshaller extends JsonErrorUnmarshaller {
    public CustomKeyStoreHasCMKsExceptionUnmarshaller() {
        super(CustomKeyStoreHasCMKsException.class);
    }

    public boolean match(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        return jsonErrorResponse.getErrorCode().equals("CustomKeyStoreHasCMKsException");
    }

    public AmazonServiceException unmarshall(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        CustomKeyStoreHasCMKsException customKeyStoreHasCMKsException = (CustomKeyStoreHasCMKsException) CustomKeyStoreHasCMKsExceptionUnmarshaller.super.unmarshall(jsonErrorResponse);
        customKeyStoreHasCMKsException.setErrorCode("CustomKeyStoreHasCMKsException");
        return customKeyStoreHasCMKsException;
    }
}
