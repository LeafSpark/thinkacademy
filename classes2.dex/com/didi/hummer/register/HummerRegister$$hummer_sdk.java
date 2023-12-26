package com.didi.hummer.register;

import com.didi.hummer.context.HummerContext;
import com.didi.hummer.meta.ComponentInvokerIndex;
import com.didi.hummer.meta.ComponentJsCodeInfo;
import com.didi.hummer.module.Memory$$Invoker;
import com.didi.hummer.module.Navigator$$Invoker;
import com.didi.hummer.module.Request$$Invoker;
import com.didi.hummer.module.Storage$$Invoker;
import com.didi.hummer.module.Timer$$Invoker;
import com.didi.hummer.module.Tracker$$Invoker;
import com.didi.hummer.module.WebSocket$$Invoker;
import com.didi.hummer.render.component.anim.BasicAnimation$$Invoker;
import com.didi.hummer.render.component.anim.KeyframeAnimation$$Invoker;
import java.util.HashSet;
import java.util.Set;

public class HummerRegister$$hummer_sdk implements ComponentInvokerIndex {
    public static final String JS_CODE = "var Storage = class Storage extends Base {\n    constructor(...args) {\n        super('Storage', ...args);\n    }\n    static set(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Storage', 0, 'set', ...args);\n    }\n    static get(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Storage', 0, 'get', ...args);\n    }\n    static remove(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Storage', 0, 'remove', ...args);\n    }\n    static removeAll(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Storage', 0, 'removeAll', ...args);\n    }\n    static getAll(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Storage', 0, 'getAll', ...args);\n    }\n    static allKeys(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Storage', 0, 'allKeys', ...args);\n    }\n    static exist(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Storage', 0, 'exist', ...args);\n    }\n}\n__GLOBAL__.Storage = Storage;\nvar Navigator = class Navigator extends Base {\n    constructor(...args) {\n        super('Navigator', ...args);\n    }\n    static openPage(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Navigator', 0, 'openPage', ...args);\n    }\n    static popPage(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Navigator', 0, 'popPage', ...args);\n    }\n    static popToPage(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Navigator', 0, 'popToPage', ...args);\n    }\n    static popToRootPage(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Navigator', 0, 'popToRootPage', ...args);\n    }\n    static popBack(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Navigator', 0, 'popBack', ...args);\n    }\n}\n__GLOBAL__.Navigator = Navigator;\nvar Timer = class Timer extends Base {\n    constructor(...args) {\n        super('Timer', ...args);\n    }\n    setInterval(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Timer', this.objID, 'setInterval', ...args);\n    }\n    clearInterval(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Timer', this.objID, 'clearInterval', ...args);\n    }\n    setTimeout(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Timer', this.objID, 'setTimeout', ...args);\n    }\n    clearTimeout(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Timer', this.objID, 'clearTimeout', ...args);\n    }\n}\n__GLOBAL__.Timer = Timer;\nvar WebSocket = class WebSocket extends Base {\n    constructor(...args) {\n        super('WebSocket', ...args);\n    }\n    close(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('WebSocket', this.objID, 'close', ...args);\n    }\n    send(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('WebSocket', this.objID, 'send', ...args);\n    }\n    addEventListener(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('WebSocket', this.objID, 'addEventListener', ...args);\n    }\n    set url(arg) {\n        this._url = arg;\n        arg = transSingleArg(arg);\n        invoke('WebSocket', this.objID, 'setUrl', arg);\n    }\n    get url() {\n        return invoke('WebSocket', this.objID, 'getUrl');\n    }\n    set onopen(arg) {\n        this._onopen = arg;\n        arg = transSingleArg(arg);\n        invoke('WebSocket', this.objID, 'setOnopen', arg);\n    }\n    get onopen() {\n        return this._onopen;\n    }\n    set onmessage(arg) {\n        this._onmessage = arg;\n        arg = transSingleArg(arg);\n        invoke('WebSocket', this.objID, 'setOnmessage', arg);\n    }\n    get onmessage() {\n        return this._onmessage;\n    }\n    set onclose(arg) {\n        this._onclose = arg;\n        arg = transSingleArg(arg);\n        invoke('WebSocket', this.objID, 'setOnclose', arg);\n    }\n    get onclose() {\n        return this._onclose;\n    }\n    set onerror(arg) {\n        this._onerror = arg;\n        arg = transSingleArg(arg);\n        invoke('WebSocket', this.objID, 'setOnerror', arg);\n    }\n    get onerror() {\n        return this._onerror;\n    }\n}\n__GLOBAL__.WebSocket = WebSocket;\nvar Memory = class Memory extends Base {\n    constructor(...args) {\n        super('Memory', ...args);\n    }\n    static set(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Memory', 0, 'set', ...args);\n    }\n    static get(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Memory', 0, 'get', ...args);\n    }\n    static remove(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Memory', 0, 'remove', ...args);\n    }\n    static removeAll(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Memory', 0, 'removeAll', ...args);\n    }\n    static getAll(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Memory', 0, 'getAll', ...args);\n    }\n    static allKeys(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Memory', 0, 'allKeys', ...args);\n    }\n    static exist(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        return invoke('Memory', 0, 'exist', ...args);\n    }\n}\n__GLOBAL__.Memory = Memory;\nvar Tracker = class Tracker extends Base {\n    constructor(...args) {\n        super('Tracker', ...args);\n    }\n    static trackPerformance(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Tracker', 0, 'trackPerformance', ...args);\n    }\n    static trackException(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Tracker', 0, 'trackException', ...args);\n    }\n}\n__GLOBAL__.Tracker = Tracker;\nvar Request = class Request extends Base {\n    constructor(...args) {\n        super('Request', ...args);\n    }\n    set url(arg) {\n        this._url = arg;\n        arg = transSingleArg(arg);\n        invoke('Request', this.objID, 'setUrl', arg);\n    }\n    get url() {\n        return this._url;\n    }\n    set method(arg) {\n        this._method = arg;\n        arg = transSingleArg(arg);\n        invoke('Request', this.objID, 'setMethod', arg);\n    }\n    get method() {\n        return this._method;\n    }\n    set timeout(arg) {\n        this._timeout = arg;\n        arg = transSingleArg(arg);\n        invoke('Request', this.objID, 'setTimeout', arg);\n    }\n    get timeout() {\n        return this._timeout;\n    }\n    set header(arg) {\n        this._header = arg;\n        arg = transSingleArg(arg);\n        invoke('Request', this.objID, 'setHeader', arg);\n    }\n    get header() {\n        return this._header;\n    }\n    set param(arg) {\n        this._param = arg;\n        arg = transSingleArg(arg);\n        invoke('Request', this.objID, 'setParam', arg);\n    }\n    get param() {\n        return this._param;\n    }\n    send(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('Request', this.objID, 'send', ...args);\n    }\n}\n__GLOBAL__.Request = Request;\nvar BasicAnimation = class BasicAnimation extends Base {\n    constructor(...args) {\n        super('BasicAnimation', ...args);\n    }\n    set from(arg) {\n        this._from = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setFrom', arg);\n    }\n    get from() {\n        return this._from;\n    }\n    set value(arg) {\n        this._value = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setValue', arg);\n    }\n    get value() {\n        return this._value;\n    }\n    set duration(arg) {\n        this._duration = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setDuration', arg);\n    }\n    get duration() {\n        return this._duration;\n    }\n    set delay(arg) {\n        this._delay = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setDelay', arg);\n    }\n    get delay() {\n        return this._delay;\n    }\n    set easing(arg) {\n        this._easing = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setEasing', arg);\n    }\n    get easing() {\n        return this._easing;\n    }\n    set repeatCount(arg) {\n        this._repeatCount = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setRepeatCount', arg);\n    }\n    get repeatCount() {\n        return this._repeatCount;\n    }\n    set repeatMode(arg) {\n        this._repeatMode = arg;\n        arg = transSingleArg(arg);\n        invoke('BasicAnimation', this.objID, 'setRepeatMode', arg);\n    }\n    get repeatMode() {\n        return this._repeatMode;\n    }\n    on(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('BasicAnimation', this.objID, 'on', ...args);\n    }\n}\n__GLOBAL__.BasicAnimation = BasicAnimation;\nvar KeyframeAnimation = class KeyframeAnimation extends Base {\n    constructor(...args) {\n        super('KeyframeAnimation', ...args);\n    }\n    set keyframes(arg) {\n        this._keyframes = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setKeyframes', arg);\n    }\n    get keyframes() {\n        return this._keyframes;\n    }\n    set from(arg) {\n        this._from = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setFrom', arg);\n    }\n    get from() {\n        return this._from;\n    }\n    set value(arg) {\n        this._value = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setValue', arg);\n    }\n    get value() {\n        return this._value;\n    }\n    set duration(arg) {\n        this._duration = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setDuration', arg);\n    }\n    get duration() {\n        return this._duration;\n    }\n    set delay(arg) {\n        this._delay = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setDelay', arg);\n    }\n    get delay() {\n        return this._delay;\n    }\n    set easing(arg) {\n        this._easing = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setEasing', arg);\n    }\n    get easing() {\n        return this._easing;\n    }\n    set repeatCount(arg) {\n        this._repeatCount = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setRepeatCount', arg);\n    }\n    get repeatCount() {\n        return this._repeatCount;\n    }\n    set repeatMode(arg) {\n        this._repeatMode = arg;\n        arg = transSingleArg(arg);\n        invoke('KeyframeAnimation', this.objID, 'setRepeatMode', arg);\n    }\n    get repeatMode() {\n        return this._repeatMode;\n    }\n    on(...args) {\n        let stash = args;\n        args = transArgs(...args);\n        invoke('KeyframeAnimation', this.objID, 'on', ...args);\n    }\n}\n__GLOBAL__.KeyframeAnimation = KeyframeAnimation;\n";
    private ComponentJsCodeInfo CODE_INDEX = new ComponentJsCodeInfo();
    private Set INVOKER_INDEX = new HashSet();

    public HummerRegister$$hummer_sdk() {
        setInvokers();
        setCodes();
    }

    public static void init(HummerContext hummerContext) {
        hummerContext.registerInvoker(new Storage$$Invoker());
        hummerContext.registerInvoker(new Navigator$$Invoker());
        hummerContext.registerInvoker(new Timer$$Invoker());
        hummerContext.registerInvoker(new WebSocket$$Invoker());
        hummerContext.registerInvoker(new Memory$$Invoker());
        hummerContext.registerInvoker(new Tracker$$Invoker());
        hummerContext.registerInvoker(new Request$$Invoker());
        hummerContext.registerInvoker(new BasicAnimation$$Invoker());
        hummerContext.registerInvoker(new KeyframeAnimation$$Invoker());
        hummerContext.evaluateJavaScript(JS_CODE, "hummer_sdk.js");
    }

    private void setInvokers() {
        this.INVOKER_INDEX.add(new Storage$$Invoker());
        this.INVOKER_INDEX.add(new Navigator$$Invoker());
        this.INVOKER_INDEX.add(new Timer$$Invoker());
        this.INVOKER_INDEX.add(new WebSocket$$Invoker());
        this.INVOKER_INDEX.add(new Memory$$Invoker());
        this.INVOKER_INDEX.add(new Tracker$$Invoker());
        this.INVOKER_INDEX.add(new Request$$Invoker());
        this.INVOKER_INDEX.add(new BasicAnimation$$Invoker());
        this.INVOKER_INDEX.add(new KeyframeAnimation$$Invoker());
    }

    private void setCodes() {
        this.CODE_INDEX.set(JS_CODE, "hummer_sdk.js");
    }

    public Set getInvokerSet() {
        return this.INVOKER_INDEX;
    }

    public ComponentJsCodeInfo getJsCodeInfo() {
        return this.CODE_INDEX;
    }
}
