package com.tal.app.thinkacademy.business.study.study.speaker;

import kotlin.Metadata;

@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\b\b\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u000f\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n¨\u0006\u000b"}, d2 = {"Lcom/tal/app/thinkacademy/business/study/study/speaker/RecordedFinalExamStatus;", "", "type", "", "(Ljava/lang/String;ILjava/lang/String;)V", "getType", "()Ljava/lang/String;", "TO_BE_SUBMIT", "SUBMITTED", "EXPIRED", "REFUND", "bus_study_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ClassParams.kt */
public enum RecordedFinalExamStatus {
    TO_BE_SUBMIT("TO_BE_SUBMIT"),
    SUBMITTED("SUBMITTED"),
    EXPIRED("EXPIRED"),
    REFUND("REFUND");
    
    private final String type;

    private RecordedFinalExamStatus(String str) {
        this.type = str;
    }

    public final String getType() {
        return this.type;
    }
}
