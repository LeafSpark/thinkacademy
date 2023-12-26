package com.amazonaws.services.kms.model.transform;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.http.JsonErrorResponseHandler;
import com.amazonaws.services.kms.model.IncorrectTrustAnchorException;
import com.amazonaws.transform.JsonErrorUnmarshaller;

public class IncorrectTrustAnchorExceptionUnmarshaller extends JsonErrorUnmarshaller {
    public IncorrectTrustAnchorExceptionUnmarshaller() {
        super(IncorrectTrustAnchorException.class);
    }

    public boolean match(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        return jsonErrorResponse.getErrorCode().equals("IncorrectTrustAnchorException");
    }

    public AmazonServiceException unmarshall(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        IncorrectTrustAnchorException incorrectTrustAnchorException = (IncorrectTrustAnchorException) IncorrectTrustAnchorExceptionUnmarshaller.super.unmarshall(jsonErrorResponse);
        incorrectTrustAnchorException.setErrorCode("IncorrectTrustAnchorException");
        return incorrectTrustAnchorException;
    }
}
