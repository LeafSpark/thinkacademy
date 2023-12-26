package com.amazonaws.mobileconnectors.cognitoidentityprovider.util;

import android.util.Base64;
import com.amazonaws.mobileconnectors.cognitoidentityprovider.exceptions.CognitoParameterInvalidException;
import com.amazonaws.services.s3.internal.Constants;
import java.io.UnsupportedEncodingException;
import org.json.JSONException;
import org.json.JSONObject;

public class CognitoJWTParser {
    private static final int HEADER = 0;
    private static final int JWT_PARTS = 3;
    private static final int PAYLOAD = 1;
    private static final int SIGNATURE = 2;

    public static JSONObject getHeader(String str) {
        try {
            validateJWT(str);
            return new JSONObject(new String(Base64.decode(str.split("\\.")[0], 8), Constants.DEFAULT_ENCODING));
        } catch (UnsupportedEncodingException e) {
            throw new CognitoParameterInvalidException(e.getMessage());
        } catch (JSONException e2) {
            throw new CognitoParameterInvalidException(e2.getMessage());
        } catch (Exception unused) {
            throw new CognitoParameterInvalidException("error in parsing JSON");
        }
    }

    public static JSONObject getPayload(String str) {
        try {
            validateJWT(str);
            return new JSONObject(new String(Base64.decode(str.split("\\.")[1], 8), Constants.DEFAULT_ENCODING));
        } catch (UnsupportedEncodingException e) {
            throw new CognitoParameterInvalidException(e.getMessage());
        } catch (JSONException e2) {
            throw new CognitoParameterInvalidException(e2.getMessage());
        } catch (Exception unused) {
            throw new CognitoParameterInvalidException("error in parsing JSON");
        }
    }

    public static String getSignature(String str) {
        try {
            validateJWT(str);
            return new String(Base64.decode(str.split("\\.")[2], 8), Constants.DEFAULT_ENCODING);
        } catch (Exception unused) {
            throw new CognitoParameterInvalidException("error in parsing JSON");
        }
    }

    public static String getClaim(String str, String str2) {
        try {
            Object obj = getPayload(str).get(str2);
            if (obj != null) {
                return obj.toString();
            }
            return null;
        } catch (Exception unused) {
            throw new CognitoParameterInvalidException("invalid token");
        }
    }

    public static boolean hasClaim(String str, String str2) {
        try {
            return getPayload(str).has(str2);
        } catch (Exception unused) {
            return false;
        }
    }

    public static void validateJWT(String str) {
        if (str.split("\\.").length != 3) {
            throw new CognitoParameterInvalidException("not a JSON Web Token");
        }
    }
}
