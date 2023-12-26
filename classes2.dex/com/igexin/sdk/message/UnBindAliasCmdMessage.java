package com.igexin.sdk.message;

public class UnBindAliasCmdMessage extends GTCmdMessage {
    private String a;
    private String b;

    public UnBindAliasCmdMessage() {
    }

    public UnBindAliasCmdMessage(String str, String str2, int i) {
        super(i);
        this.a = str;
        this.b = str2;
    }

    public String getCode() {
        return this.b;
    }

    public String getSn() {
        return this.a;
    }

    public void setCode(String str) {
        this.b = str;
    }

    public void setSn(String str) {
        this.a = str;
    }

    public String toString() {
        return "UnBindAliasCmdMessage{sn='" + this.a + '\'' + ", code='" + this.b + '\'' + '}';
    }
}
