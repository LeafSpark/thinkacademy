package net.lucode.hackware.magicindicator.buildins.commonnavigator.titles.badge;

import android.content.Context;
import android.view.View;
import android.widget.FrameLayout;
import net.lucode.hackware.magicindicator.buildins.commonnavigator.abs.IMeasurablePagerTitleView;
import net.lucode.hackware.magicindicator.buildins.commonnavigator.abs.IPagerTitleView;

public class BadgePagerTitleView extends FrameLayout implements IMeasurablePagerTitleView {
    private boolean mAutoCancelBadge = true;
    private View mBadgeView;
    private IPagerTitleView mInnerPagerTitleView;
    private BadgeRule mXBadgeRule;
    private BadgeRule mYBadgeRule;

    public BadgePagerTitleView(Context context) {
        super(context);
    }

    public void onSelected(int i, int i2) {
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if (iPagerTitleView != null) {
            iPagerTitleView.onSelected(i, i2);
        }
        if (this.mAutoCancelBadge) {
            setBadgeView((View) null);
        }
    }

    public void onDeselected(int i, int i2) {
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if (iPagerTitleView != null) {
            iPagerTitleView.onDeselected(i, i2);
        }
    }

    public void onLeave(int i, int i2, float f, boolean z) {
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if (iPagerTitleView != null) {
            iPagerTitleView.onLeave(i, i2, f, z);
        }
    }

    public void onEnter(int i, int i2, float f, boolean z) {
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if (iPagerTitleView != null) {
            iPagerTitleView.onEnter(i, i2, f, z);
        }
    }

    public IPagerTitleView getInnerPagerTitleView() {
        return this.mInnerPagerTitleView;
    }

    public void setInnerPagerTitleView(IPagerTitleView iPagerTitleView) {
        if (this.mInnerPagerTitleView != iPagerTitleView) {
            this.mInnerPagerTitleView = iPagerTitleView;
            removeAllViews();
            if (this.mInnerPagerTitleView instanceof View) {
                addView((View) this.mInnerPagerTitleView, new FrameLayout.LayoutParams(-1, -1));
            }
            if (this.mBadgeView != null) {
                addView(this.mBadgeView, new FrameLayout.LayoutParams(-2, -2));
            }
        }
    }

    public View getBadgeView() {
        return this.mBadgeView;
    }

    public void setBadgeView(View view) {
        if (this.mBadgeView != view) {
            this.mBadgeView = view;
            removeAllViews();
            if (this.mInnerPagerTitleView instanceof View) {
                addView((View) this.mInnerPagerTitleView, new FrameLayout.LayoutParams(-1, -1));
            }
            if (this.mBadgeView != null) {
                addView(this.mBadgeView, new FrameLayout.LayoutParams(-2, -2));
            }
        }
    }

    /* access modifiers changed from: protected */
    public void onLayout(boolean z, int i, int i2, int i3, int i4) {
        super.onLayout(z, i, i2, i3, i4);
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if ((iPagerTitleView instanceof View) && this.mBadgeView != null) {
            int[] iArr = new int[14];
            View view = (View) iPagerTitleView;
            iArr[0] = view.getLeft();
            iArr[1] = view.getTop();
            iArr[2] = view.getRight();
            iArr[3] = view.getBottom();
            IPagerTitleView iPagerTitleView2 = this.mInnerPagerTitleView;
            if (iPagerTitleView2 instanceof IMeasurablePagerTitleView) {
                IMeasurablePagerTitleView iMeasurablePagerTitleView = (IMeasurablePagerTitleView) iPagerTitleView2;
                iArr[4] = iMeasurablePagerTitleView.getContentLeft();
                iArr[5] = iMeasurablePagerTitleView.getContentTop();
                iArr[6] = iMeasurablePagerTitleView.getContentRight();
                iArr[7] = iMeasurablePagerTitleView.getContentBottom();
            } else {
                for (int i5 = 4; i5 < 8; i5++) {
                    iArr[i5] = iArr[i5 - 4];
                }
            }
            iArr[8] = view.getWidth() / 2;
            iArr[9] = view.getHeight() / 2;
            iArr[10] = iArr[4] / 2;
            iArr[11] = iArr[5] / 2;
            iArr[12] = iArr[6] + ((iArr[2] - iArr[6]) / 2);
            iArr[13] = iArr[7] + ((iArr[3] - iArr[7]) / 2);
            BadgeRule badgeRule = this.mXBadgeRule;
            if (badgeRule != null) {
                int offset = iArr[badgeRule.getAnchor().ordinal()] + this.mXBadgeRule.getOffset();
                View view2 = this.mBadgeView;
                view2.offsetLeftAndRight(offset - view2.getLeft());
            }
            BadgeRule badgeRule2 = this.mYBadgeRule;
            if (badgeRule2 != null) {
                int offset2 = iArr[badgeRule2.getAnchor().ordinal()] + this.mYBadgeRule.getOffset();
                View view3 = this.mBadgeView;
                view3.offsetTopAndBottom(offset2 - view3.getTop());
            }
        }
    }

    public int getContentLeft() {
        if (this.mInnerPagerTitleView instanceof IMeasurablePagerTitleView) {
            return getLeft() + ((IMeasurablePagerTitleView) this.mInnerPagerTitleView).getContentLeft();
        }
        return getLeft();
    }

    public int getContentTop() {
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if (iPagerTitleView instanceof IMeasurablePagerTitleView) {
            return ((IMeasurablePagerTitleView) iPagerTitleView).getContentTop();
        }
        return getTop();
    }

    public int getContentRight() {
        if (this.mInnerPagerTitleView instanceof IMeasurablePagerTitleView) {
            return getLeft() + ((IMeasurablePagerTitleView) this.mInnerPagerTitleView).getContentRight();
        }
        return getRight();
    }

    public int getContentBottom() {
        IPagerTitleView iPagerTitleView = this.mInnerPagerTitleView;
        if (iPagerTitleView instanceof IMeasurablePagerTitleView) {
            return ((IMeasurablePagerTitleView) iPagerTitleView).getContentBottom();
        }
        return getBottom();
    }

    public BadgeRule getXBadgeRule() {
        return this.mXBadgeRule;
    }

    public void setXBadgeRule(BadgeRule badgeRule) {
        BadgeAnchor anchor;
        if (badgeRule == null || (anchor = badgeRule.getAnchor()) == BadgeAnchor.LEFT || anchor == BadgeAnchor.RIGHT || anchor == BadgeAnchor.CONTENT_LEFT || anchor == BadgeAnchor.CONTENT_RIGHT || anchor == BadgeAnchor.CENTER_X || anchor == BadgeAnchor.LEFT_EDGE_CENTER_X || anchor == BadgeAnchor.RIGHT_EDGE_CENTER_X) {
            this.mXBadgeRule = badgeRule;
            return;
        }
        throw new IllegalArgumentException("x badge rule is wrong.");
    }

    public BadgeRule getYBadgeRule() {
        return this.mYBadgeRule;
    }

    public void setYBadgeRule(BadgeRule badgeRule) {
        BadgeAnchor anchor;
        if (badgeRule == null || (anchor = badgeRule.getAnchor()) == BadgeAnchor.TOP || anchor == BadgeAnchor.BOTTOM || anchor == BadgeAnchor.CONTENT_TOP || anchor == BadgeAnchor.CONTENT_BOTTOM || anchor == BadgeAnchor.CENTER_Y || anchor == BadgeAnchor.TOP_EDGE_CENTER_Y || anchor == BadgeAnchor.BOTTOM_EDGE_CENTER_Y) {
            this.mYBadgeRule = badgeRule;
            return;
        }
        throw new IllegalArgumentException("y badge rule is wrong.");
    }

    public boolean isAutoCancelBadge() {
        return this.mAutoCancelBadge;
    }

    public void setAutoCancelBadge(boolean z) {
        this.mAutoCancelBadge = z;
    }
}
