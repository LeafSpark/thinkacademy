package com.tal.app.thinkacademy.common.entity;

import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\b\u0018\u00002\u00020\u0001B%\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0012\b\u0002\u0010\u0004\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0003\u0018\u00010\u0005¢\u0006\u0002\u0010\u0006J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0013\u0010\f\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0003\u0018\u00010\u0005HÆ\u0003J)\u0010\r\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\u0012\b\u0002\u0010\u0004\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0003\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u001b\u0010\u0004\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u0003\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0014"}, d2 = {"Lcom/tal/app/thinkacademy/common/entity/VideoPreloadCourseInfo;", "", "courseId", "", "urls", "", "(Ljava/lang/String;Ljava/util/List;)V", "getCourseId", "()Ljava/lang/String;", "getUrls", "()Ljava/util/List;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "common_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: VideoPreloadListBean.kt */
public final class VideoPreloadCourseInfo {
    private final String courseId;
    private final List<String> urls;

    public VideoPreloadCourseInfo() {
        this((String) null, (List) null, 3, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ VideoPreloadCourseInfo copy$default(VideoPreloadCourseInfo videoPreloadCourseInfo, String str, List<String> list, int i, Object obj) {
        if ((i & 1) != 0) {
            str = videoPreloadCourseInfo.courseId;
        }
        if ((i & 2) != 0) {
            list = videoPreloadCourseInfo.urls;
        }
        return videoPreloadCourseInfo.copy(str, list);
    }

    public final String component1() {
        return this.courseId;
    }

    public final List<String> component2() {
        return this.urls;
    }

    public final VideoPreloadCourseInfo copy(String str, List<String> list) {
        return new VideoPreloadCourseInfo(str, list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof VideoPreloadCourseInfo)) {
            return false;
        }
        VideoPreloadCourseInfo videoPreloadCourseInfo = (VideoPreloadCourseInfo) obj;
        return Intrinsics.areEqual(this.courseId, videoPreloadCourseInfo.courseId) && Intrinsics.areEqual(this.urls, videoPreloadCourseInfo.urls);
    }

    public int hashCode() {
        String str = this.courseId;
        int i = 0;
        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
        List<String> list = this.urls;
        if (list != null) {
            i = list.hashCode();
        }
        return hashCode + i;
    }

    public String toString() {
        return "VideoPreloadCourseInfo(courseId=" + this.courseId + ", urls=" + this.urls + ')';
    }

    public VideoPreloadCourseInfo(String str, List<String> list) {
        this.courseId = str;
        this.urls = list;
    }

    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public /* synthetic */ VideoPreloadCourseInfo(String str, List list, int i, DefaultConstructorMarker defaultConstructorMarker) {
        this((i & 1) != 0 ? null : str, (i & 2) != 0 ? null : list);
    }

    public final String getCourseId() {
        return this.courseId;
    }

    public final List<String> getUrls() {
        return this.urls;
    }
}
