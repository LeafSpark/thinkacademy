package com.amazonaws.services.cognitoidentityprovider.model;

import java.io.Serializable;

public class SMSMfaSettingsType implements Serializable {
    private Boolean enabled;
    private Boolean preferredMfa;

    public Boolean isEnabled() {
        return this.enabled;
    }

    public Boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(Boolean bool) {
        this.enabled = bool;
    }

    public SMSMfaSettingsType withEnabled(Boolean bool) {
        this.enabled = bool;
        return this;
    }

    public Boolean isPreferredMfa() {
        return this.preferredMfa;
    }

    public Boolean getPreferredMfa() {
        return this.preferredMfa;
    }

    public void setPreferredMfa(Boolean bool) {
        this.preferredMfa = bool;
    }

    public SMSMfaSettingsType withPreferredMfa(Boolean bool) {
        this.preferredMfa = bool;
        return this;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        if (getEnabled() != null) {
            sb.append("Enabled: " + getEnabled() + ",");
        }
        if (getPreferredMfa() != null) {
            sb.append("PreferredMfa: " + getPreferredMfa());
        }
        sb.append("}");
        return sb.toString();
    }

    public int hashCode() {
        int i = 0;
        int hashCode = ((getEnabled() == null ? 0 : getEnabled().hashCode()) + 31) * 31;
        if (getPreferredMfa() != null) {
            i = getPreferredMfa().hashCode();
        }
        return hashCode + i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof SMSMfaSettingsType)) {
            return false;
        }
        SMSMfaSettingsType sMSMfaSettingsType = (SMSMfaSettingsType) obj;
        if ((sMSMfaSettingsType.getEnabled() == null) ^ (getEnabled() == null)) {
            return false;
        }
        if (sMSMfaSettingsType.getEnabled() != null && !sMSMfaSettingsType.getEnabled().equals(getEnabled())) {
            return false;
        }
        if ((sMSMfaSettingsType.getPreferredMfa() == null) ^ (getPreferredMfa() == null)) {
            return false;
        }
        return sMSMfaSettingsType.getPreferredMfa() == null || sMSMfaSettingsType.getPreferredMfa().equals(getPreferredMfa());
    }
}
