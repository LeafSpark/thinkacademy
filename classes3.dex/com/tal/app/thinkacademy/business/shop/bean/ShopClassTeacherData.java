package com.tal.app.thinkacademy.business.shop.bean;

import kotlin.Metadata;

@Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u000e\n\u0002\u0010\b\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u0005¢\u0006\u0002\u0010\u0002R\u001c\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0005\u0010\u0006\"\u0004\b\u0007\u0010\bR\u001c\u0010\t\u001a\u0004\u0018\u00010\u0004X\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\n\u0010\u0006\"\u0004\b\u000b\u0010\bR\u001c\u0010\f\u001a\u0004\u0018\u00010\u0004X\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\r\u0010\u0006\"\u0004\b\u000e\u0010\bR\u001c\u0010\u000f\u001a\u0004\u0018\u00010\u0004X\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0006\"\u0004\b\u0011\u0010\bR\u001a\u0010\u0012\u001a\u00020\u0013X\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/tal/app/thinkacademy/business/shop/bean/ShopClassTeacherData;", "", "()V", "avatar", "", "getAvatar", "()Ljava/lang/String;", "setAvatar", "(Ljava/lang/String;)V", "education", "getEducation", "setEducation", "sysName", "getSysName", "setSysName", "teacherId", "getTeacherId", "setTeacherId", "teacherType", "", "getTeacherType", "()I", "setTeacherType", "(I)V", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ShopClassData.kt */
public final class ShopClassTeacherData {
    private String avatar;
    private String education;
    private String sysName;
    private String teacherId;
    private int teacherType;

    public final String getTeacherId() {
        return this.teacherId;
    }

    public final void setTeacherId(String str) {
        this.teacherId = str;
    }

    public final String getSysName() {
        return this.sysName;
    }

    public final void setSysName(String str) {
        this.sysName = str;
    }

    public final String getAvatar() {
        return this.avatar;
    }

    public final void setAvatar(String str) {
        this.avatar = str;
    }

    public final int getTeacherType() {
        return this.teacherType;
    }

    public final void setTeacherType(int i) {
        this.teacherType = i;
    }

    public final String getEducation() {
        return this.education;
    }

    public final void setEducation(String str) {
        this.education = str;
    }
}
