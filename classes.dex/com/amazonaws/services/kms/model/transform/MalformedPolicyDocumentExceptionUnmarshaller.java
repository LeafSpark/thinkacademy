package com.amazonaws.services.kms.model.transform;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.http.JsonErrorResponseHandler;
import com.amazonaws.services.kms.model.MalformedPolicyDocumentException;
import com.amazonaws.transform.JsonErrorUnmarshaller;

public class MalformedPolicyDocumentExceptionUnmarshaller extends JsonErrorUnmarshaller {
    public MalformedPolicyDocumentExceptionUnmarshaller() {
        super(MalformedPolicyDocumentException.class);
    }

    public boolean match(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        return jsonErrorResponse.getErrorCode().equals("MalformedPolicyDocumentException");
    }

    public AmazonServiceException unmarshall(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        MalformedPolicyDocumentException malformedPolicyDocumentException = (MalformedPolicyDocumentException) MalformedPolicyDocumentExceptionUnmarshaller.super.unmarshall(jsonErrorResponse);
        malformedPolicyDocumentException.setErrorCode("MalformedPolicyDocumentException");
        return malformedPolicyDocumentException;
    }
}