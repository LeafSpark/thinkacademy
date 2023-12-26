package com.chad.library.adapter.base.listener;

import android.view.View;
import com.chad.library.adapter.base.BaseQuickAdapter;

public interface OnItemClickListener {
    void onItemClick(BaseQuickAdapter<?, ?> baseQuickAdapter, View view, int i);
}
