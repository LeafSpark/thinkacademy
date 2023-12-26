package com.tal.app.thinkacademy.business.shop.widget.dialog;

import com.tal.app.thinkacademy.business.shop.bean.ShopClassTeacherData;
import kotlin.Metadata;

@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J\u0012\u0010\u0002\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005H&J\u0012\u0010\u0006\u001a\u00020\u00032\b\u0010\u0007\u001a\u0004\u0018\u00010\bH&J\u0012\u0010\t\u001a\u00020\u00032\b\u0010\n\u001a\u0004\u0018\u00010\u0005H&¨\u0006\u000b"}, d2 = {"Lcom/tal/app/thinkacademy/business/shop/widget/dialog/OnTabItemClickListener;", "", "onDayItemClick", "", "day", "", "onTeacherItemClick", "teacher", "Lcom/tal/app/thinkacademy/business/shop/bean/ShopClassTeacherData;", "onTimeItemClick", "time", "bus_shop_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: ClassFilterAdapter.kt */
public interface OnTabItemClickListener {
    void onDayItemClick(String str);

    void onTeacherItemClick(ShopClassTeacherData shopClassTeacherData);

    void onTimeItemClick(String str);
}
