package com.amazonaws.mobile.client.results;

import com.amazonaws.mobileconnectors.cognitoidentityprovider.util.CognitoJWTParser;
import java.util.Date;

public class Token {
    public static final int MILLIS_PER_SEC = 1000;
    private final String token;

    public Token(String str) {
        this.token = str;
    }

    public String getTokenString() {
        return this.token;
    }

    public Date getExpiration() {
        return getClaimDate("exp");
    }

    public Date getNotBefore() {
        return getClaimDate("nbf");
    }

    public Date getIssuedAt() {
        return getClaimDate("iat");
    }

    /* access modifiers changed from: package-private */
    public Date getClaimDate(String str) {
        try {
            String claim = CognitoJWTParser.getClaim(this.token, str);
            if (claim == null) {
                return null;
            }
            return new Date(Long.parseLong(claim) * 1000);
        } catch (Exception e) {
            throw new RuntimeException("Failed to get claim from token", e);
        }
    }

    public String getClaim(String str) {
        return CognitoJWTParser.getClaim(this.token, str);
    }
}
