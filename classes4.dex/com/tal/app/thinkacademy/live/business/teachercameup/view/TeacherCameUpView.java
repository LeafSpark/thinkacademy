package com.tal.app.thinkacademy.live.business.teachercameup.view;

import android.content.Context;
import android.os.Handler;
import android.os.Message;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.SurfaceView;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.cardview.widget.CardView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.flyco.roundview.RoundRelativeLayout;
import com.tal.app.thinkacademy.live.business.databinding.LiveBusinessTeacherCameUpBinding;
import com.tal.app.thinkacademy.live.business.teachercameup.bean.TeacherCameUpBean;
import com.tal.app.thinkacademy.live.core.layout.LiveAreaContext;
import com.tal.app.thinkacademy.live.core.live.http.bean.TeacherInfo;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;

@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B%\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b¢\u0006\u0002\u0010\tJ \u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0017H\u0014J\u0010\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001bH\u0016J\u0010\u0010\u001c\u001a\u00020\u00192\u0006\u0010\u001d\u001a\u00020\u0017H\u0016J&\u0010\u001e\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010\u00102\b\u0010 \u001a\u0004\u0018\u00010!2\b\b\u0002\u0010\"\u001a\u00020\u0017H\u0002J\b\u0010#\u001a\u00020\u0019H\u0016J\u0018\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00172\u0006\u0010&\u001a\u00020\bH\u0016J\"\u0010'\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010(\u001a\u00020\u00172\b\u0010\u001f\u001a\u0004\u0018\u00010\u0010H\u0016R\u000e\u0010\n\u001a\u00020\bXD¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\bXD¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\bX\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u0010X\u000e¢\u0006\u0002\n\u0000¨\u0006)"}, d2 = {"Lcom/tal/app/thinkacademy/live/business/teachercameup/view/TeacherCameUpView;", "Lcom/tal/app/thinkacademy/live/business/teachercameup/view/BaseTeacherView;", "Lcom/tal/app/thinkacademy/live/business/databinding/LiveBusinessTeacherCameUpBinding;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "KCloseMic", "KUpdateMic", "currentStatus", "mHandler", "Landroid/os/Handler;", "mSurfaceView", "Landroid/view/SurfaceView;", "createViewBinding", "inflater", "Landroid/view/LayoutInflater;", "group", "Landroid/view/ViewGroup;", "attach", "", "onThePlatform", "", "bean", "Lcom/tal/app/thinkacademy/live/business/teachercameup/bean/TeacherCameUpBean;", "setPrivateCallLabelVisible", "isVisible", "setSurfaceView", "surfaceView", "surfaceViewParent", "Landroidx/cardview/widget/CardView;", "isUpdate", "underThePlatform", "updateMic", "isOpenMic", "volume", "videoOperation", "isOpenCamera", "bus_livebusiness_release"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* compiled from: TeacherCameUpView.kt */
public final class TeacherCameUpView extends BaseTeacherView<LiveBusinessTeacherCameUpBinding> {
    /* access modifiers changed from: private */
    public final int KCloseMic;
    /* access modifiers changed from: private */
    public final int KUpdateMic;
    private int currentStatus;
    private Handler mHandler;
    private SurfaceView mSurfaceView;

    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public TeacherCameUpView(Context context) {
        this(context, (AttributeSet) null, 0, 6, (DefaultConstructorMarker) null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public TeacherCameUpView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, (DefaultConstructorMarker) null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: this call moved to the top of the method (can break code semantics) */
    public /* synthetic */ TeacherCameUpView(Context context, AttributeSet attributeSet, int i, int i2, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i2 & 2) != 0 ? null : attributeSet, (i2 & 4) != 0 ? 0 : i);
    }

    /* JADX INFO: super call moved to the top of the method (can break code semantics) */
    public TeacherCameUpView(Context context, AttributeSet attributeSet, int i) {
        super(context, attributeSet, i);
        Intrinsics.checkNotNullParameter(context, "context");
        this.KUpdateMic = 1;
        this.mHandler = new TeacherCameUpView$mHandler$1(this);
    }

    /* access modifiers changed from: protected */
    public LiveBusinessTeacherCameUpBinding createViewBinding(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        Intrinsics.checkNotNullParameter(layoutInflater, "inflater");
        Intrinsics.checkNotNullParameter(viewGroup, "group");
        LiveBusinessTeacherCameUpBinding inflate = LiveBusinessTeacherCameUpBinding.inflate(layoutInflater, viewGroup, z);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(inflater, group, attach)");
        return inflate;
    }

    public void onThePlatform(TeacherCameUpBean teacherCameUpBean) {
        Intrinsics.checkNotNullParameter(teacherCameUpBean, "bean");
        TextView textView = this.mBinding.tvTeacherName1;
        String str = null;
        if (textView != null) {
            TeacherInfo mTeacherInfo = getMTeacherInfo();
            String name = mTeacherInfo == null ? null : mTeacherInfo.getName();
            if (name == null) {
                name = teacherCameUpBean.getTeacherName();
            }
            textView.setText(name);
        }
        TextView textView2 = this.mBinding.tvTeacherName2;
        if (textView2 != null) {
            TeacherInfo mTeacherInfo2 = getMTeacherInfo();
            if (mTeacherInfo2 != null) {
                str = mTeacherInfo2.getName();
            }
            if (str == null) {
                str = teacherCameUpBean.getTeacherName();
            }
            textView2.setText(str);
        }
        Integer status = teacherCameUpBean.getStatus();
        if (status != null && status.intValue() == 1) {
            RoundRelativeLayout roundRelativeLayout = this.mBinding.rlRoundView;
            if (roundRelativeLayout != null) {
                roundRelativeLayout.setVisibility(0);
            }
            RelativeLayout relativeLayout = this.mBinding.rlFullScreenView;
            if (relativeLayout != null) {
                relativeLayout.setVisibility(8);
            }
        } else if (status != null && status.intValue() == 2) {
            RoundRelativeLayout roundRelativeLayout2 = this.mBinding.rlRoundView;
            if (roundRelativeLayout2 != null) {
                roundRelativeLayout2.setVisibility(8);
            }
            RelativeLayout relativeLayout2 = this.mBinding.rlFullScreenView;
            if (relativeLayout2 != null) {
                relativeLayout2.setVisibility(0);
            }
        }
    }

    public void videoOperation(TeacherCameUpBean teacherCameUpBean, boolean z, SurfaceView surfaceView) {
        Intrinsics.checkNotNullParameter(teacherCameUpBean, "bean");
        Integer status = teacherCameUpBean.getStatus();
        boolean z2 = true;
        if (status != null && status.intValue() == 1) {
            float f = (float) LiveAreaContext.get().getPptLp().width;
            Float wRatio = teacherCameUpBean.getWRatio();
            float f2 = 0.0f;
            float floatValue = f * (wRatio == null ? 0.0f : wRatio.floatValue());
            float f3 = (float) LiveAreaContext.get().getPptLp().height;
            Float hRatio = teacherCameUpBean.getHRatio();
            float floatValue2 = f3 * (hRatio == null ? 0.0f : hRatio.floatValue());
            float f4 = (float) LiveAreaContext.get().getPptLp().width;
            Float originXRatio = teacherCameUpBean.getOriginXRatio();
            float floatValue3 = f4 * (originXRatio == null ? 0.0f : originXRatio.floatValue());
            float f5 = (float) LiveAreaContext.get().getPptLp().height;
            Float originYRatio = teacherCameUpBean.getOriginYRatio();
            if (originYRatio != null) {
                f2 = originYRatio.floatValue();
            }
            float f6 = f5 * f2;
            RoundRelativeLayout roundRelativeLayout = this.mBinding.rlRoundView;
            FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams((int) floatValue, (int) floatValue2);
            layoutParams.leftMargin = (int) floatValue3;
            layoutParams.topMargin = (int) f6;
            roundRelativeLayout.setLayoutParams(layoutParams);
        }
        int i = 0;
        if (!z || surfaceView == null) {
            Integer status2 = teacherCameUpBean.getStatus();
            if (status2 != null && status2.intValue() == 1) {
                CardView cardView = this.mBinding.cvRoundBg;
                if (cardView != null) {
                    cardView.setVisibility(0);
                }
                ConstraintLayout constraintLayout = this.mBinding.clFullScreenBg;
                if (constraintLayout != null) {
                    constraintLayout.setVisibility(8);
                }
            } else if (status2 != null && status2.intValue() == 2) {
                CardView cardView2 = this.mBinding.cvRoundBg;
                if (cardView2 != null) {
                    cardView2.setVisibility(8);
                }
                ConstraintLayout constraintLayout2 = this.mBinding.clFullScreenBg;
                if (constraintLayout2 != null) {
                    constraintLayout2.setVisibility(0);
                }
            }
        } else {
            Integer status3 = teacherCameUpBean.getStatus();
            if (status3 != null && status3.intValue() == 1) {
                CardView cardView3 = this.mBinding.cvSurfaceView;
                int i2 = this.currentStatus;
                Integer status4 = teacherCameUpBean.getStatus();
                if (status4 != null && i2 == status4.intValue()) {
                    z2 = false;
                }
                setSurfaceView(surfaceView, cardView3, z2);
                CardView cardView4 = this.mBinding.cvRoundBg;
                if (cardView4 != null) {
                    cardView4.setVisibility(8);
                }
            } else if (status3 != null && status3.intValue() == 2) {
                CardView cardView5 = this.mBinding.cvFullSurfaceView;
                int i3 = this.currentStatus;
                Integer status5 = teacherCameUpBean.getStatus();
                if (status5 != null && i3 == status5.intValue()) {
                    z2 = false;
                }
                setSurfaceView(surfaceView, cardView5, z2);
                ConstraintLayout constraintLayout3 = this.mBinding.clFullScreenBg;
                if (constraintLayout3 != null) {
                    constraintLayout3.setVisibility(8);
                }
            }
            Integer status6 = teacherCameUpBean.getStatus();
            if (status6 != null) {
                i = status6.intValue();
            }
            this.currentStatus = i;
        }
    }

    public void updateMic(boolean z, int i) {
        if (!z || i < 0) {
            Handler handler = this.mHandler;
            if (handler != null) {
                handler.removeMessages(this.KUpdateMic);
            }
            Handler handler2 = this.mHandler;
            if (handler2 != null) {
                handler2.sendEmptyMessageDelayed(this.KCloseMic, 0);
                return;
            }
            return;
        }
        Handler handler3 = this.mHandler;
        if (handler3 != null) {
            handler3.removeMessages(this.KCloseMic);
        }
        Handler handler4 = this.mHandler;
        if (handler4 != null) {
            Message obtain = Message.obtain();
            obtain.obj = Integer.valueOf(i);
            obtain.what = this.KUpdateMic;
            handler4.sendMessageDelayed(obtain, 0);
        }
    }

    public void underThePlatform() {
        RoundRelativeLayout roundRelativeLayout = this.mBinding.rlRoundView;
        if (roundRelativeLayout != null) {
            roundRelativeLayout.setVisibility(8);
        }
        RelativeLayout relativeLayout = this.mBinding.rlFullScreenView;
        if (relativeLayout != null) {
            relativeLayout.setVisibility(8);
        }
        this.currentStatus = 0;
    }

    static /* synthetic */ void setSurfaceView$default(TeacherCameUpView teacherCameUpView, SurfaceView surfaceView, CardView cardView, boolean z, int i, Object obj) {
        if ((i & 4) != 0) {
            z = false;
        }
        teacherCameUpView.setSurfaceView(surfaceView, cardView, z);
    }

    private final void setSurfaceView(SurfaceView surfaceView, CardView cardView, boolean z) {
        if (surfaceView != null && (!Intrinsics.areEqual(this.mSurfaceView, surfaceView) || z || !Intrinsics.areEqual(surfaceView.getParent(), cardView))) {
            ViewGroup viewGroup = (ViewGroup) surfaceView.getParent();
            if (viewGroup != null) {
                viewGroup.removeView(surfaceView);
            }
            if (cardView != null) {
                cardView.removeAllViews();
            }
            surfaceView.setZOrderMediaOverlay(true);
            if (cardView != null) {
                cardView.addView(surfaceView, 0);
            }
            if (surfaceView.getVisibility() != 0) {
                surfaceView.setVisibility(0);
            }
        }
        this.mSurfaceView = surfaceView;
    }

    public void setPrivateCallLabelVisible(boolean z) {
        if (z) {
            this.mBinding.privateCallLabel.setVisibility(0);
            this.mBinding.privateCallLabelFull.setVisibility(0);
            return;
        }
        this.mBinding.privateCallLabel.setVisibility(8);
        this.mBinding.privateCallLabelFull.setVisibility(8);
    }
}
