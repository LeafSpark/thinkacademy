package com.amazonaws.mobile.client;

public class SignOutOptions {
    private final Builder builder;

    SignOutOptions(Builder builder2) {
        this.builder = builder2;
    }

    public boolean isSignOutGlobally() {
        return this.builder.signOutGlobally;
    }

    public boolean isInvalidateTokens() {
        return this.builder.invalidateTokens;
    }

    public String getBrowserPackage() {
        return this.builder.browserPackage;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        /* access modifiers changed from: private */
        public String browserPackage;
        /* access modifiers changed from: private */
        public boolean invalidateTokens;
        /* access modifiers changed from: private */
        public boolean signOutGlobally;

        public Builder signOutGlobally(boolean z) {
            this.signOutGlobally = z;
            return this;
        }

        public Builder browserPackage(String str) {
            this.browserPackage = str;
            return this;
        }

        public Builder invalidateTokens(boolean z) {
            this.invalidateTokens = z;
            return this;
        }

        public SignOutOptions build() {
            return new SignOutOptions(this);
        }
    }
}
