package com.amazonaws.mobileconnectors.cognitoidentityprovider.handlers;

import com.amazonaws.mobileconnectors.cognitoidentityprovider.continuations.ForgotPasswordContinuation;

public interface ForgotPasswordHandler {
    void getResetCode(ForgotPasswordContinuation forgotPasswordContinuation);

    void onFailure(Exception exc);

    void onSuccess();
}
