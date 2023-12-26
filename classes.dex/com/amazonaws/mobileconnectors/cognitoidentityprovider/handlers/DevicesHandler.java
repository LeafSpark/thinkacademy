package com.amazonaws.mobileconnectors.cognitoidentityprovider.handlers;

import com.amazonaws.mobileconnectors.cognitoidentityprovider.CognitoDevice;
import java.util.List;

public interface DevicesHandler {
    void onFailure(Exception exc);

    void onSuccess(List<CognitoDevice> list);
}
