package com.tal.app.thinkacademy.business.shop.adapter.nodeprovider.teacherdetails;

import com.tal.app.thinkacademy.common.constants.SchoolConstants;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Lambda;

@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u000e\n\u0000\u0010\u0000\u001a\u00020\u0001H\n¢\u0006\u0002\b\u0002"}, d2 = {"<anonymous>", "", "invoke"}, k = 3, mv = {1, 6, 0}, xi = 48)
/* compiled from: TeacherClasslistItemProvider.kt */
final class TeacherClasslistItemProvider$mSchoolCode$2 extends Lambda implements Function0<String> {
    public static final TeacherClasslistItemProvider$mSchoolCode$2 INSTANCE = new TeacherClasslistItemProvider$mSchoolCode$2();

    TeacherClasslistItemProvider$mSchoolCode$2() {
        super(0);
    }

    public final String invoke() {
        return SchoolConstants.INSTANCE.schoolCode();
    }
}
