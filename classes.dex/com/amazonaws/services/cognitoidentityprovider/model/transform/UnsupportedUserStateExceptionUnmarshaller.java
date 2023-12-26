package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.http.JsonErrorResponseHandler;
import com.amazonaws.services.cognitoidentityprovider.model.UnsupportedUserStateException;
import com.amazonaws.transform.JsonErrorUnmarshaller;

public class UnsupportedUserStateExceptionUnmarshaller extends JsonErrorUnmarshaller {
    public UnsupportedUserStateExceptionUnmarshaller() {
        super(UnsupportedUserStateException.class);
    }

    public boolean match(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        return jsonErrorResponse.getErrorCode().equals("UnsupportedUserStateException");
    }

    public AmazonServiceException unmarshall(JsonErrorResponseHandler.JsonErrorResponse jsonErrorResponse) throws Exception {
        UnsupportedUserStateException unsupportedUserStateException = (UnsupportedUserStateException) UnsupportedUserStateExceptionUnmarshaller.super.unmarshall(jsonErrorResponse);
        unsupportedUserStateException.setErrorCode("UnsupportedUserStateException");
        return unsupportedUserStateException;
    }
}
