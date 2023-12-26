package com.didi.hummer.component.input;

import com.didi.hummer.core.engine.JSValue;
import com.didi.hummer.render.component.view.BaseInvoker;

public class Input$$Invoker extends BaseInvoker<Input> {
    public String getName() {
        return "Input";
    }

    /* access modifiers changed from: protected */
    public Input createInstance(JSValue jSValue, Object[] objArr) {
        return new Input(this.mHummerContext, jSValue, (objArr.length <= 0 || objArr[0] == null) ? null : String.valueOf(objArr[0]));
    }

    /* access modifiers changed from: protected */
    public Object invoke(Input input, String str, Object[] objArr) {
        str.hashCode();
        boolean z = false;
        char c = 65535;
        switch (str.hashCode()) {
            case -2012343115:
                if (str.equals("setFocused")) {
                    c = 0;
                    break;
                }
                break;
            case -1813758031:
                if (str.equals("setPlaceholder")) {
                    c = 1;
                    break;
                }
                break;
            case -75125341:
                if (str.equals("getText")) {
                    c = 2;
                    break;
                }
                break;
            case 345818945:
                if (str.equals("getFocused")) {
                    c = 3;
                    break;
                }
                break;
            case 1984984239:
                if (str.equals("setText")) {
                    c = 4;
                    break;
                }
                break;
        }
        switch (c) {
            case 0:
                if (objArr.length > 0 && objArr[0] != null) {
                    z = objArr[0].booleanValue();
                }
                input.setFocused(z);
                return null;
            case 1:
                input.setPlaceholder((objArr.length <= 0 || objArr[0] == null) ? null : String.valueOf(objArr[0]));
                return null;
            case 2:
                return input.getText();
            case 3:
                return Boolean.valueOf(input.getFocused());
            case 4:
                input.setText((objArr.length <= 0 || objArr[0] == null) ? null : String.valueOf(objArr[0]));
                return null;
            default:
                return null;
        }
    }
}
