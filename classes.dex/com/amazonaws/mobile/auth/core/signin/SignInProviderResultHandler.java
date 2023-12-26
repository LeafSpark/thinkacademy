package com.amazonaws.mobile.auth.core.signin;

import com.amazonaws.mobile.auth.core.IdentityProvider;

public interface SignInProviderResultHandler {
    void onCancel(IdentityProvider identityProvider);

    void onError(IdentityProvider identityProvider, Exception exc);

    void onSuccess(IdentityProvider identityProvider);
}
