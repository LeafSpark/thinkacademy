package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class AdminSetUserMFAPreferenceResult implements Serializable {
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
        if (obj == null || !(obj instanceof AdminSetUserMFAPreferenceResult)) {
            return false;
        }
        AdminSetUserMFAPreferenceResult adminSetUserMFAPreferenceResult = (AdminSetUserMFAPreferenceResult) obj;
        return true;
    }
}
