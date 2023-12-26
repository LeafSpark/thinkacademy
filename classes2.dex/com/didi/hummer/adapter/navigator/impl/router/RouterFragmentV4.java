package com.didi.hummer.adapter.navigator.impl.router;

import android.content.Intent;
import android.os.Bundle;
import android.util.SparseArray;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import com.bonree.sdk.agent.engine.external.ActivityInfo;
import com.didi.hummer.adapter.navigator.impl.router.ActivityLauncher;
import com.facebook.soloader.MinElf;
import com.sensorsdata.analytics.android.sdk.autotrack.aop.FragmentTrackHelper;
import java.util.Random;

public class RouterFragmentV4 extends Fragment {
    private SparseArray<ActivityLauncher.Callback> mCallbacks = new SparseArray<>();
    private Random mCodeGenerator = new Random();

    public View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        return RouterFragmentV4.super.onCreateView(layoutInflater, viewGroup, bundle);
    }

    public void onHiddenChanged(boolean z) {
        ActivityInfo.startOnHiddenChanged(getActivity(), this, z);
        RouterFragmentV4.super.onHiddenChanged(z);
        FragmentTrackHelper.trackOnHiddenChanged(this, z);
        ActivityInfo.endOnHiddenChanged(getActivity(), this, z);
    }

    public void onPause() {
        ActivityInfo.startOnPauseFragment(getActivity(), this);
        RouterFragmentV4.super.onPause();
        FragmentTrackHelper.trackFragmentPause(this);
        ActivityInfo.endOnPauseFragment(getActivity(), this);
    }

    public void onResume() {
        ActivityInfo.startOnResumeFragment(getActivity(), this);
        RouterFragmentV4.super.onResume();
        FragmentTrackHelper.trackFragmentResume(this);
        ActivityInfo.endOnResumeFragment(getActivity(), this);
    }

    public void onStart() {
        ActivityInfo.startOnStartFragment(getActivity(), this);
        RouterFragmentV4.super.onStart();
        ActivityInfo.endOnStartFragment(getActivity(), this);
    }

    public void onViewCreated(View view, Bundle bundle) {
        RouterFragmentV4.super.onViewCreated(view, bundle);
        FragmentTrackHelper.onFragmentViewCreated(this, view, bundle);
    }

    public void setUserVisibleHint(boolean z) {
        ActivityInfo.startUserVisibleHint(getActivity(), this, z);
        RouterFragmentV4.super.setUserVisibleHint(z);
        FragmentTrackHelper.trackFragmentSetUserVisibleHint(this, z);
        ActivityInfo.endUserVisibleHint(getActivity(), this, z);
    }

    public static RouterFragmentV4 newInstance() {
        return new RouterFragmentV4();
    }

    public void onCreate(Bundle bundle) {
        ActivityInfo.startCreateFragment(getActivity(), this);
        RouterFragmentV4.super.onCreate(bundle);
        setRetainInstance(true);
        ActivityInfo.endCreateFragment(getActivity(), this);
    }

    public void startActivityForResult(Intent intent, ActivityLauncher.Callback callback) {
        int makeRequestCode = makeRequestCode();
        this.mCallbacks.put(makeRequestCode, callback);
        startActivityForResult(intent, makeRequestCode);
    }

    private int makeRequestCode() {
        int nextInt;
        int i = 0;
        do {
            nextInt = this.mCodeGenerator.nextInt(MinElf.PN_XNUM);
            i++;
            if (this.mCallbacks.indexOfKey(nextInt) < 0 || i >= 10) {
                return nextInt;
            }
            nextInt = this.mCodeGenerator.nextInt(MinElf.PN_XNUM);
            i++;
            break;
        } while (i >= 10);
        return nextInt;
    }

    public void onActivityResult(int i, int i2, Intent intent) {
        RouterFragmentV4.super.onActivityResult(i, i2, intent);
        ActivityLauncher.Callback callback = this.mCallbacks.get(i);
        this.mCallbacks.remove(i);
        if (callback != null) {
            callback.onActivityResult(i2, intent);
        }
    }
}