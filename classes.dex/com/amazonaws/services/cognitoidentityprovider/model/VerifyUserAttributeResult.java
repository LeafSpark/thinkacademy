package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class VerifyUserAttributeResult implements Serializable {
    public int hashCode() {
        return 1;
    }

    public String toString() {
        return "{" + "}";
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof VerifyUserAttributeResult)) {
            return false;
        }
        VerifyUserAttributeResult verifyUserAttributeResult = (VerifyUserAttributeResult) obj;
        return true;
    }
}
