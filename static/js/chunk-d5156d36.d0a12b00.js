; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-d5156d36', 'chunk-21cb9dbc'],
    {
        '0b38': function (e, t, n) {
            e.exports = n.p + 'static/media/startSpeech.4c463dd4.wav'
        },
        '176c': function (e, t, n) {
            e.exports = n.p + 'static/media/join.e5ac6e9f.wav'
        },
        '230e': function (e, t, n) {
            'use strict'
            var r = n('8bbf'),
                o = n.n(r),
                i = function () {
                    var e = this,
                        t = e._self._c
                    return t(
                        'transition',
                        { on: { 'after-leave': e.handleAfterLeave } },
                        [
                            t(
                                'div',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.visible,
                                            expression: 'visible',
                                        },
                                    ],
                                    staticClass: 'ne-tips',
                                    attrs: { id: 'toast_' + e.uuid },
                                },
                                [
                                    t('div', { staticClass: 'ne-tips__content' }, [
                                        e.msg
                                            ? t('p', {
                                                staticClass: 'ne-tips__content--text',
                                                domProps: { textContent: e._s(e.msg) },
                                            })
                                            : e._e(),
                                    ]),
                                ]
                            ),
                        ]
                    )
                },
                a = [],
                s =
                    (n('d3b7'),
                        n('25f0'),
                        n('a9e3'),
                    {
                        name: 'NeTips',
                        data: function () {
                            return { uuid: Math.random().toString(36).substring(3, 20) }
                        },
                        props: {
                            msg: {
                                type: [String, Number],
                                default: '',
                            },
                            duration: {
                                type: Number,
                                default: 3000,
                            },
                            callback: Function,
                            visible: Boolean,
                        },
                        beforeDestroy: function () {
                            console.info(
                                '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                            )
                            this.$_timer && clearTimeout(this.$_timer)
                            this.visible && this.closeTips()
                        },
                        methods: {
                            handleAfterLeave: function () {
                                var e, t
                                console.info(
                                    '对象函数 handleAfterLeave,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                                )
                                this.$destroy(true)
                                null === (e = this.$el) ||
                                    void 0 === e ||
                                    null === (t = e.parentNode) ||
                                    void 0 === t ||
                                    t.removeChild(this.$el)
                                'function' == typeof this.callback && this.callback()
                            },
                            fire: function () {
                                var e = this
                                console.info(
                                    '对象函数 fire,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                                )
                                this.$_timer && clearTimeout(this.$_timer)
                                this.visible &&
                                    this.duration > 0 &&
                                    (this.$_timer = setTimeout(function () {
                                        e.closeTips()
                                    }, this.duration))
                            },
                            showTips: function () {
                                console.info(
                                    '对象函数 showTips,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                                )
                                this.visible = true
                                this.fire()
                            },
                            closeTips: function () {
                                console.info(
                                    '对象函数 closeTips,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                                )
                                this.visible = false
                                this.handleAfterLeave()
                            },
                        },
                    }),
                c = s,
                u = (n('e80a'), n('2877')),
                l = Object(u.a)(c, i, a, false, null, '7ff65c7c', null),
                f = l.exports,
                p = function e(t) {
                    var n = t.msg,
                        r = void 0 === n ? '' : n,
                        i = t.duration,
                        a = void 0 === i ? 3000 : i,
                        s = t.callback,
                        c = void 0 === s ? null : s,
                        u = t.parentNode,
                        l =
                            void 0 === u
                                ? document.getElementById('collectiveSpeechContainer')
                                : u
                    console.info(
                        '箭头函数 Tips(msg, duration, callback, parentNode)',
                        r,
                        a,
                        c,
                        l,
                        'filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/index.js'
                    )
                    var p = e._instance,
                        h = o.a.extend(f)
                    return (
                        (p = e._instance =
                            new h({
                                propsData: {
                                    msg: r,
                                    duration: a,
                                    callback: c,
                                },
                            }).$mount()),
                        p.$el.parentNode || l.appendChild(p.$el),
                        (p.msg = r),
                        (p.duration = a),
                        (p.callback = c),
                        p.showTips(),
                        p
                    )
                }
            p._instance = null
            p.close = function () {
                var e = o.a.extend(f)
                p._instance instanceof e &&
                    p._instance.visible &&
                    p._instance.closeTips()
            }
            p.tips = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                    t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 3000,
                    n =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null
                return p({
                    msg: e,
                    duration: t,
                    callback: n,
                })
            }
            p.component = f
            t.a = p
        },
        3709: function (e, t, n) {
            !(function (t, n) {
                e.exports = n()
            })('undefined' !== typeof self && self, function () {
                return (function (e) {
                    var t = {
                        r:
                            t[r] &&
                                '[object Object]' === t[r].toString() &&
                                n[r] &&
                                '[object Object]' === n[r].toString()
                                ? e(t[r], n[r])
                                : (t[r] = n[r]),
                        state: 1,
                        next: 13,
                        default: D,
                    }
                    function n(r) {
                        if (t[r]) {
                            return t[r].exports
                        }
                        var o = (t[r] = {
                            i: r,
                            l: false,
                            exports: {},
                        })
                        return (
                            e[r].call(o.exports, o, o.exports, n), (o.l = true), o.exports
                        )
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function (e, t, r) {
                            n.o(e, t) ||
                                Object.defineProperty(e, t, {
                                    enumerable: true,
                                    get: r,
                                })
                        }),
                        (n.r = function (e) {
                            'undefined' !== typeof Symbol &&
                                Symbol.toStringTag &&
                                Object.defineProperty(e, Symbol.toStringTag, {
                                    value: 'Module',
                                })
                            Object.defineProperty(e, '__esModule', { value: true })
                        }),
                        (n.t = function (e, t) {
                            if ((1 & t && (e = n(e)), 8 & t)) {
                                return e
                            }
                            if (4 & t && 'object' === typeof e && e && e.__esModule) {
                                return e
                            }
                            var r = Object.create(null)
                            if (
                                (n.r(r),
                                    Object.defineProperty(r, 'default', {
                                        enumerable: true,
                                        value: e,
                                    }),
                                    2 & t && 'string' != typeof e)
                            ) {
                                for (var o in e)
                                    n.d(
                                        r,
                                        o,
                                        function (t) {
                                            return e[t]
                                        }.bind(null, o)
                                    )
                            }
                            return r
                        }),
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                        return e.default
                                    }
                                    : function () {
                                        return e
                                    }
                            return n.d(t, 'a', t), t
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }),
                        (n.p = './'),
                        n((n.s = 0))
                    )
                })({
                    '/0p4': function (e, t) {
                        e.exports = n('ff4a')
                    },
                    0: function (e, t, n) {
                        e.exports = n('tjUo')
                    },
                    dvlR: function (e, t) {
                        e.exports = n('a34a')
                    },
                    tjUo: function (e, t, n) {
                        'use strict'
                        n.r(t)
                        var r = n('dvlR'),
                            o = n.n(r),
                            i = n('/0p4'),
                            a = function () { },
                            s = function () { },
                            c = function e(t, n) {
                                var r
                                for (r in n);
                                return t
                            }
                        function u(e, t, n, r, o, i, a) {
                            try {
                                var s = e[i](a),
                                    c = s.value
                            } catch (u) {
                                return void n(u)
                            }
                            s.done ? t(c) : Promise.resolve(c).then(r, o)
                        }
                        function l(e) {
                            return function () {
                                var t = this,
                                    n = arguments
                                return new Promise(function (r, o) {
                                    var i = e.apply(t, n)
                                    function a(e) {
                                        u(i, r, o, a, s, 'next', e)
                                    }
                                    function s(e) {
                                        u(i, r, o, a, s, 'throw', e)
                                    }
                                    a(void 0)
                                })
                            }
                        }
                        var f = 0,
                            p = {
                                e: t,
                                h: s[d],
                                h: C + (S - C) * x,
                            }
                        a.Sync = {
                            open: 9,
                            close: 9,
                        }
                        a.BufferSize = 4096
                        var h = function (e) {
                            this.id = ++f
                            var t = {
                                type: 'wav',
                                bitRate: 16,
                                sampleRate: 16000,
                                onProcess: s,
                            }
                            for (var n in e)
                                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            this.config = t
                            this._S = 9
                        }
                        a.init = function (e) {
                            return new h(e)
                        }
                        a.IsOpen = function () {
                            var e = a.Stream
                            if (e) {
                                var t = ((e.getTracks && e.getTracks()) ||
                                    e.audioTracks ||
                                    [])[0]
                                if (t) {
                                    var n = t.readyState
                                    return 'live' === n || n === t.LIVE
                                }
                            }
                            return false
                        }
                        a.Destroy = function () {
                            for (var e in p)
                                Object.prototype.hasOwnProperty.call(p, e) && p[e]()
                        }
                        a.BindDestroy = function (e, t) { }
                        a.Support = function () {
                            var e = window.AudioContext
                            if ((e || (e = window.webkitAudioContext), !e)) {
                                return false
                            }
                            var t = navigator.mediaDevices || {}
                            return (
                                t.getUserMedia ||
                                (t = navigator).getUserMedia ||
                                (t.getUserMedia =
                                    t.webkitGetUserMedia ||
                                    t.mozGetUserMedia ||
                                    t.msGetUserMedia),
                                !!t.getUserMedia &&
                                ((a.Scope = t),
                                    (a.Ctx && 'closed' !== a.Ctx.state) ||
                                    ((a.Ctx = new e()),
                                        a.BindDestroy('Ctx', function () {
                                            var e = a.Ctx
                                            e && e.close && e.close()
                                        })),
                                    true)
                            )
                        }
                        var d = function () {
                            var e = a.Ctx,
                                t = a.Stream,
                                n = (t._m = e.createMediaStreamSource(t)),
                                r = (t._p = (
                                    e.createScriptProcessor || e.createJavaScriptNode
                                ).call(e, a.BufferSize, 1, 1))
                            n.connect(r)
                            r.connect(e.destination)
                            var o = t._call
                            r.onaudioprocess = function (e) {
                                for (var t in o)
                                    if (Object.prototype.hasOwnProperty.call(o, t)) {
                                        for (
                                            var n = e.inputBuffer.getChannelData(0),
                                            r = n.length,
                                            i = new Int16Array(r),
                                            a = 0,
                                            s = 0;
                                            s < r;
                                            s++
                                        ) {
                                            var c = Math.max(-1, Math.min(1, n[s]))
                                            c = c < 0 ? 32768 * c : 32767 * c
                                            i[s] = c
                                            a += Math.abs(c)
                                        }
                                        for (var u in o)
                                            Object.prototype.hasOwnProperty.call(o, u) && o[u](i, a)
                                        return
                                    }
                            }
                        },
                            v = function () {
                                var e = a.Stream
                                e._m &&
                                    (e._m.disconnect(),
                                        e._p.disconnect(),
                                        (e._p.onaudioprocess = e._p = e._m = null))
                            }
                        a.SampleData = function (e, t, n, r, o) {
                            r || (r = {})
                            var i = r.index || 0,
                                a = r.offset || 0,
                                s = r.frameNext || []
                            o || (o = {})
                            var c = o.frameSize || 1
                            o.frameType && (c = 'mp3' === o.frameType ? 1152 : 1)
                            for (var u = 0, l = i; l < e.length; l++) {
                                u += e[l].length
                            }
                            u = Math.max(0, u - Math.floor(a))
                            var f = t / n
                            f > 1 ? (u = Math.floor(u / f)) : ((f = 1), (n = t))
                            u += s.length
                            for (var p = new Int16Array(u), h = 0, d = 0; d < s.length; d++) {
                                h++
                            }
                            for (var v = e.length; i < v; i++) {
                                for (var m = e[i], g = a, b = m.length; g < b;) {
                                    var y = Math.floor(g),
                                        w = Math.ceil(g),
                                        x = g - y,
                                        C = m[y],
                                        S = w < b ? m[w] : (e[i + 1] || [C])[0] || 0
                                    h++
                                    g += f
                                }
                                a = g - b
                            }
                            s = null
                            var k = p.length % c
                            if (k > 0) {
                                var I = 2 * (p.length - k)
                                s = new Int16Array(p.buffer.slice(I))
                                p = new Int16Array(p.buffer.slice(0, I))
                            }
                            return {
                                index: i,
                                offset: a,
                                frameNext: s,
                                sampleRate: n,
                                data: p,
                            }
                        }
                        a.PowerLevel = function (e, t) {
                            var n = e / t || 0
                            return n < 1251
                                ? Math.round((n / 1250) * 10)
                                : Math.round(
                                    Math.min(
                                        100,
                                        Math.max(
                                            0,
                                            100 * (1 + Math.log(n / 10000) / Math.log(10))
                                        )
                                    )
                                )
                        }
                        a.prototype = h.prototype = {
                            openRecord: function () {
                                var e =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null,
                                    t =
                                        arguments.length > 1 && void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null,
                                    n = this,
                                    r = function (e, n) {
                                        n = !!n
                                        t && t(e, n)
                                    },
                                    o = function () {
                                        e && e()
                                        n._SO = 0
                                    },
                                    i = function (e, t) {
                                        try {
                                            window.top.a
                                        } catch (o) {
                                            return void r(
                                                '无权录音(跨域\uFF0C请尝试给iframe添加麦克风访问策略\uFF0C如allow="camera;microphone")'
                                            )
                                        }
                                        return /Permission|Allow/i.test(e)
                                            ? r('用户拒绝了录音权限')
                                            : false === window.isSecureContext
                                                ? r('无权录音(需https)')
                                                : /Found/i.test(e)
                                                    ? r(t + '\uFF0C无可用麦克风')
                                                    : r(t)
                                    },
                                    s = a.Sync,
                                    c = ++s.open,
                                    u = s.close
                                n._O = n._O_ = c
                                n._SO = n._S
                                var l = function () {
                                    if (u !== s.close || !n._O) {
                                        var e = '录音机被取消'
                                        return c === s.open ? n.close() : (e = '录音机被中断'), t(e)
                                    }
                                }
                                if (a.IsOpen()) {
                                    return o()
                                }
                                if (!a.Support()) {
                                    return i('', '此浏览器不支持录音')
                                }
                                var f = n.envCheck({
                                    envName: 'H5',
                                    canProcess: true,
                                })
                                if (f) {
                                    return r('不能录音\uFF1A' + f)
                                }
                                var p = function (e) {
                                    a.Stream = e
                                    e._call = {}
                                    l() ||
                                        setTimeout(function () {
                                            if (!l()) {
                                                return a.IsOpen()
                                                    ? (d(), o())
                                                    : r('录音功能无效\uFF1A无音频流')
                                            }
                                        }, 100)
                                },
                                    h = function (e) {
                                        var t = e.name || e.message || e.code + ':' + e
                                        return i(t, '无法录音\uFF1A' + t)
                                    },
                                    v = a.Scope.getUserMedia({ audio: true }, p, h)
                                v && v.then && v.then(p)[e && 'catch'](h)
                            },
                            startRecord: (function () {
                                var e = l(
                                    o.a.mark(function e() {
                                        var t, n, r
                                        return o.a.wrap(
                                            function (e) {
                                                for (; ;) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (a.IsOpen()) {
                                                                e.next = 2
                                                                break
                                                            }
                                                            return e.abrupt('return', {
                                                                errCode: -1,
                                                                errMsg: '用户拒绝了录音权限',
                                                            })
                                                        case 2:
                                                            if (
                                                                ((n = a.Ctx),
                                                                    (t = this)._stop(),
                                                                    (t.state = 0),
                                                                    t.envStart(null, n.sampleRate),
                                                                    !t._SO || t._SO + 1 === t._S)
                                                            ) {
                                                                e.next = 9
                                                                break
                                                            }
                                                            return e.abrupt('return', {
                                                                errCode: -1,
                                                                errMsg: 'start被中断',
                                                            })
                                                        case 9:
                                                            return (
                                                                (t._SO = 0),
                                                                (r = function () {
                                                                    t.resumeRecord()
                                                                }),
                                                                'suspended' === n.state
                                                                    ? n.resume().then(function () {
                                                                        r()
                                                                    })
                                                                    : r(),
                                                                e.abrupt('return', {
                                                                    errCode: 0,
                                                                    errMsg: 'success',
                                                                })
                                                            )
                                                        case 13:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            },
                                            e,
                                            this
                                        )
                                    })
                                )
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            closeRecord: (function () {
                                var e = l(
                                    o.a.mark(function e() {
                                        var t,
                                            n,
                                            r,
                                            i,
                                            s,
                                            c,
                                            u,
                                            l = arguments
                                        return o.a.wrap(
                                            function (e) {
                                                for (; ;) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((t =
                                                                    l.length > 0 && void 0 !== l[0]
                                                                        ? l[0]
                                                                        : null),
                                                                    (n = this)._stop(),
                                                                    (r = a.Sync),
                                                                    (n._O = 0),
                                                                    n._O_ === r.open)
                                                            ) {
                                                                e.next = 8
                                                                break
                                                            }
                                                            return (
                                                                t && t(),
                                                                e.abrupt('return', {
                                                                    errCode: -1,
                                                                    errMsg: 'close被忽略',
                                                                })
                                                            )
                                                        case 8:
                                                            if ((r.close++, (i = a.Stream))) {
                                                                for (
                                                                    v(),
                                                                    s =
                                                                    (i.getTracks && i.getTracks()) ||
                                                                    i.audioTracks ||
                                                                    [],
                                                                    c = 0;
                                                                    c < s.length;
                                                                    c++
                                                                ) {
                                                                    ; (u = s[c]).stop && u.stop()
                                                                }
                                                                i.stop && i.stop()
                                                            }
                                                            return (
                                                                (a.Stream = 0),
                                                                t && t(),
                                                                e.abrupt('return', {
                                                                    errCode: 0,
                                                                    errMsg: 'success',
                                                                })
                                                            )
                                                        case 14:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            },
                                            e,
                                            this
                                        )
                                    })
                                )
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            pauseRecord: (function () {
                                var e = l(
                                    o.a.mark(function e() {
                                        var t
                                        return o.a.wrap(
                                            function (e) {
                                                for (; ;) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (!(t = this).state) {
                                                                e.next = 5
                                                                break
                                                            }
                                                            return (
                                                                (t.state = 2),
                                                                delete a.Stream._call[t.id],
                                                                e.abrupt('return', true)
                                                            )
                                                        case 5:
                                                            return e.abrupt('return', false)
                                                        case 6:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            },
                                            e,
                                            this
                                        )
                                    })
                                )
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            resumeRecord: (function () {
                                var e = l(
                                    o.a.mark(function e() {
                                        var t
                                        return o.a.wrap(
                                            function (e) {
                                                for (; ;) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (!(t = this).state) {
                                                                e.next = 6
                                                                break
                                                            }
                                                            return (
                                                                (t.state = 1),
                                                                t.envResume(),
                                                                (a.Stream._call[t.id] = function (e, n) {
                                                                    1 === t.state && t.envIn(e, n)
                                                                }),
                                                                e.abrupt('return', true)
                                                            )
                                                        case 6:
                                                            return e.abrupt('return', false)
                                                        case 7:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            },
                                            e,
                                            this
                                        )
                                    })
                                )
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            stopRecord: (function () {
                                var e = l(
                                    o.a.mark(function e(t, n, r) {
                                        var i, s, c, u, l, f, p, h, d, v, m
                                        return o.a.wrap(
                                            function (e) {
                                                for (; ;) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((s = (i = this).config),
                                                                    (c = function () {
                                                                        i._stop()
                                                                        r && i.closeRecord()
                                                                    }),
                                                                    (u = function (e) {
                                                                        return (
                                                                            n && n(e),
                                                                            c(),
                                                                            {
                                                                                errCode: -1,
                                                                                errMsg: e,
                                                                            }
                                                                        )
                                                                    }),
                                                                    (l = function (e, n) {
                                                                        if (s.takeoffEncodeChunk) {
                                                                            console.warn(
                                                                                '启用takeoffEncodeChunk后stop返回的blob长度为0不提供音频数据'
                                                                            )
                                                                        } else {
                                                                            if (e.size < Math.max(100, n / 2)) {
                                                                                return u(
                                                                                    '生成的 '.concat(s.type, ' 无效')
                                                                                )
                                                                            }
                                                                        }
                                                                        return (
                                                                            t && t(e, n),
                                                                            c(),
                                                                            {
                                                                                errCode: 0,
                                                                                errMsg: 'success',
                                                                                data: {
                                                                                    blob: e,
                                                                                    duration: n,
                                                                                },
                                                                            }
                                                                        )
                                                                    }),
                                                                    i.isMock)
                                                            ) {
                                                                e.next = 9
                                                                break
                                                            }
                                                            if (i.state) {
                                                                e.next = 8
                                                                break
                                                            }
                                                            return e.abrupt('return', u('未开始录音'))
                                                        case 8:
                                                            i._stop(true)
                                                        case 9:
                                                            if (i.recSize) {
                                                                e.next = 12
                                                                break
                                                            }
                                                            return e.abrupt('return', u('未采集到录音'))
                                                        case 12:
                                                            if (i.buffers[0]) {
                                                                e.next = 14
                                                                break
                                                            }
                                                            return e.abrupt('return', u('音频被释放'))
                                                        case 14:
                                                            if (i[s.type]) {
                                                                e.next = 16
                                                                break
                                                            }
                                                            return e.abrupt(
                                                                'return',
                                                                u('未加载 '.concat(s.type, ' 编码器'))
                                                            )
                                                        case 16:
                                                            if (
                                                                ((f = i.engineCtx),
                                                                    !i[s.type + '_complete'] || !f)
                                                            ) {
                                                                e.next = 21
                                                                break
                                                            }
                                                            return (
                                                                (p = Math.round(
                                                                    (f.pcmSize / s.sampleRate) * 1000
                                                                )),
                                                                i[s.type + '_complete'](
                                                                    f,
                                                                    function (e) {
                                                                        l(e, p)
                                                                    },
                                                                    u
                                                                ),
                                                                e.abrupt('return')
                                                            )
                                                        case 21:
                                                            if (
                                                                ((h = a.SampleData(
                                                                    i.buffers,
                                                                    i.srcSampleRate,
                                                                    s.sampleRate
                                                                )),
                                                                    (s.sampleRate = h.sampleRate),
                                                                    (d = h.data),
                                                                    (v = Math.round(
                                                                        (d.length / s.sampleRate) * 1000
                                                                    )),
                                                                    !(m = i[s.type](d)))
                                                            ) {
                                                                e.next = 31
                                                                break
                                                            }
                                                            return (i.blob = m), e.abrupt('return', l(m, v))
                                                        case 31:
                                                            return e.abrupt('return', u('生成 blob 文件失败'))
                                                        case 32:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            },
                                            e,
                                            this
                                        )
                                    })
                                )
                                return function (t, n, r) {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            getRecordBlob: (function () {
                                var e = l(
                                    o.a.mark(function e() {
                                        var t, n
                                        return o.a.wrap(
                                            function (e) {
                                                for (; ;) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t = this),
                                                                (e.prev = 1),
                                                                (e.next = 4),
                                                                t.stopRecord()
                                                            )
                                                        case 4:
                                                            return (n = e.sent), e.abrupt('return', n)
                                                        case 8:
                                                            return (
                                                                (e.prev = 8),
                                                                (e.t0 = e.catch(1)),
                                                                e.abrupt('return', {
                                                                    errCode: -1,
                                                                    errMsg: e.t0,
                                                                })
                                                            )
                                                        case 11:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            },
                                            e,
                                            this,
                                            [[1, 8]]
                                        )
                                    })
                                )
                                return function () {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            playRecord: function (e) {
                                var t = this
                                return l(
                                    o.a.mark(function n() {
                                        var r, i, a
                                        return o.a.wrap(
                                            function (n) {
                                                for (; ;) {
                                                    switch ((n.prev = n.next)) {
                                                        case 0:
                                                            return (
                                                                (r = t),
                                                                (n.prev = 1),
                                                                (n.next = 4),
                                                                r.getRecordBlob()
                                                            )
                                                        case 4:
                                                            return (
                                                                (i = n.sent),
                                                                (a = i.data),
                                                                (e.src = window.URL.createObjectURL(a.blob)),
                                                                n.abrupt('return', {
                                                                    errCode: 0,
                                                                    errMsg: 'success',
                                                                    data: {
                                                                        src: window.URL.createObjectURL(a.blob),
                                                                    },
                                                                })
                                                            )
                                                        case 10:
                                                            return (
                                                                (n.prev = 10),
                                                                (n.t0 = n.catch(1)),
                                                                n.abrupt('return', {
                                                                    errCode: -1,
                                                                    errMsg: ''.concat(n.t0.message),
                                                                })
                                                            )
                                                        case 13:
                                                        case 'end':
                                                            return n.stop()
                                                    }
                                                }
                                            },
                                            n,
                                            null,
                                            [[1, 10]]
                                        )
                                    })
                                )()
                            },
                            getRecordSrc: function (e) {
                                var t = this
                                return l(
                                    o.a.mark(function n() {
                                        var r, i, a, s
                                        return o.a.wrap(function (n) {
                                            for (; ;) {
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        if (((r = t), !e)) {
                                                            n.next = 5
                                                            break
                                                        }
                                                        ; (i = window.URL.createObjectURL(e)), (n.next = 10)
                                                        break
                                                    case 5:
                                                        return (n.next = 7), r.getRecordBlob()
                                                    case 7:
                                                        ; (a = n.sent),
                                                            (s = a.data),
                                                            window.URL.createObjectURL(s.blob)
                                                    case 10:
                                                        return n.abrupt('return', {
                                                            errCode: 0,
                                                            errMsg: 'success',
                                                            data: { src: i },
                                                        })
                                                    case 11:
                                                    case 'end':
                                                        return n.stop()
                                                }
                                            }
                                        }, n)
                                    })
                                )()
                            },
                            destroyRecord: function () {
                                this.closeRecord()
                                a.Destroy()
                            },
                            _stop: function (e) {
                                var t = this.config
                                this.isMock || this._S++
                                this.state && (this.pauseRecord(), (this.state = 0))
                                !e &&
                                    this[t.type + '_stop'] &&
                                    (this[t.type + '_stop'](this.engineCtx), (this.engineCtx = 0))
                            },
                            envCheck: function (e) {
                                var t,
                                    n = this.config
                                return (
                                    t ||
                                    (this[n.type + '_envCheck']
                                        ? (t = this[n.type + '_envCheck'](e, n))
                                        : n.takeoffEncodeChunk &&
                                        (t = n.type + '类型不支持设置takeoffEncodeChunk')),
                                    t || ''
                                )
                            },
                            envStart: function (e, t) {
                                var n = this.config
                                if (
                                    ((this.isMock = e ? 1 : 0),
                                        (this.mockEnvInfo = e),
                                        (this.buffers = []),
                                        (this.recSize = 0),
                                        (this.envInLast = 0),
                                        (this.envInFirst = 0),
                                        (this.envInFix = 0),
                                        (this.envInFixTs = []),
                                        (n.sampleRate = Math.min(t, n.sampleRate)),
                                        (this.srcSampleRate = t),
                                        (this.engineCtx = 0),
                                        this[n.type + '_start'])
                                ) {
                                    var r = (this.engineCtx = this[n.type + '_start'](n))
                                    r && ((r.pcmDatas = []), (r.pcmSize = 0))
                                }
                            },
                            envResume: function () {
                                this.envInFixTs = []
                            },
                            envIn: function (e, t) {
                                var n = this,
                                    r = n.config,
                                    o = n.engineCtx,
                                    i = n.srcSampleRate,
                                    s = e.length,
                                    c = a.PowerLevel(t, s),
                                    u = n.buffers,
                                    l = u.length
                                u.push(e)
                                var f = u,
                                    p = l,
                                    h = Date.now(),
                                    d = Math.round((s / i) * 1000)
                                n.envInLast = h
                                1 === n.buffers.length && (n.envInFirst = h - d)
                                var v = n.envInFixTs
                                v.splice(0, 0, {
                                    t: h,
                                    d: d,
                                })
                                for (var m = h, g = 0, b = 0; b < v.length; b++) {
                                    var y = v[b]
                                    if (h - y.t > 3000) {
                                        v.length = b
                                        break
                                    }
                                    m = y.t
                                    g += y.d
                                }
                                var w = v[1],
                                    x = h - m
                                if (x - g > x / 3 && ((w && x > 1000) || v.length >= 6)) {
                                    var C = h - w.t - d
                                    if (C > d / 5) {
                                        var S = !r.disableEnvInFix
                                        if (
                                            (console.warn(
                                                '[' + h + ']' + (S ? '' : '未') + '补偿' + C + 'ms'
                                            ),
                                                (n.envInFix += C),
                                                S)
                                        ) {
                                            var k = new Int16Array((C * i) / 1000)
                                            s += k.length
                                            u.push(k)
                                        }
                                    }
                                }
                                var I = n.recSize,
                                    M = s,
                                    O = I + M
                                if (((n.recSize = O), o)) {
                                    var j = a.SampleData(u, i, r.sampleRate, o.chunkInfo)
                                    o.chunkInfo = j
                                    O = (I = o.pcmSize) + (M = j.data.length)
                                    o.pcmSize = O
                                    u = o.pcmDatas
                                    l = u.length
                                    u.push(j.data)
                                    i = j.sampleRate
                                }
                                var _ = Math.round((O / i) * 1000),
                                    T = u.length,
                                    L = f.length,
                                    R = function () {
                                        for (
                                            var e = P ? 0 : -M, t = null === u[0], i = l;
                                            i < T;
                                            i++
                                        ) {
                                            var a = u[i]
                                            null === a
                                                ? (t = 1)
                                                : ((e += a.length),
                                                    o && a.length && n[r.type + '_encode'](o, a))
                                        }
                                        if (t && o) {
                                            var s = p
                                            for (f[0] && (s = 0); s < L; s++) {
                                                f[s] = null
                                            }
                                        }
                                        t && ((e = P ? M : 0), (u[0] = null))
                                        o ? (o.pcmSize += e) : (n.recSize += e)
                                    },
                                    P = r.onProcess(u, c, _, i, l, R)
                                if (true === P) {
                                    for (var D = 0, E = l; E < T; E++) {
                                        null === u[E] ? (D = 1) : (u[E] = new Int16Array(0))
                                    }
                                    D
                                        ? console.warn('未进入异步前不能清除buffers')
                                        : o
                                            ? (o.pcmSize -= M)
                                            : (n.recSize -= M)
                                } else {
                                    R()
                                }
                            },
                        }
                        var m = a
                        a.prototype.enc_wav = {
                            stable: true,
                            testmsg: '比特率取值范围8位\u300116位',
                        }
                        a.prototype.wav = function (e) {
                            var t = this.config,
                                n = e.length,
                                r = t.sampleRate,
                                o = 8 === t.bitRate ? 8 : 16,
                                i = n * (o / 8),
                                a = new ArrayBuffer(44 + i),
                                s = new DataView(a),
                                c = 0,
                                u = function (e) {
                                    for (var t = 0; t < e.length; t++, c++) {
                                        s.setUint8(c, e.charCodeAt(t))
                                    }
                                },
                                l = function (e) {
                                    s.setUint16(c, e, true)
                                    c += 2
                                },
                                f = function (e) {
                                    s.setUint32(c, e, true)
                                    c += 4
                                }
                            if (
                                (u('RIFF'),
                                    f(36 + i),
                                    u('WAVE'),
                                    u('fmt '),
                                    f(16),
                                    l(1),
                                    l(1),
                                    f(r),
                                    f(r * (o / 8)),
                                    l(o / 8),
                                    l(o),
                                    u('data'),
                                    f(i),
                                    8 === o)
                            ) {
                                for (var p = 0; p < n; p++, c++) {
                                    var h = 128 + (e[p] >> 8)
                                    s.setInt8(c, h, true)
                                }
                            } else {
                                for (var d = 0; d < n; d++, c += 2) {
                                    s.setInt16(c, e[d], true)
                                }
                            }
                            if (n) {
                                return new Blob([s.buffer], { type: 'audio/wav' })
                            }
                        }
                        var g = function (e) {
                            return new b(e)
                        },
                            b = function (e) {
                                var t = {
                                    scale: 1,
                                    speed: 8,
                                    lineWidth: 2,
                                    linearColor1: [
                                        0,
                                        'rgba(150,96,238,1)',
                                        0.2,
                                        'rgba(170,79,249,1)',
                                        1,
                                        'rgba(53,199,253,1)',
                                    ],
                                    linearColor2: [
                                        0,
                                        'rgba(209,130,255,0.6)',
                                        1,
                                        'rgba(53,199,255,0.6)',
                                    ],
                                    linearColorBg: [
                                        0,
                                        'rgba(255,255,255,0.2)',
                                        1,
                                        'rgba(54,197,252,0.2)',
                                    ],
                                }
                                for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                this.set = e = t
                                var r = e.elem
                                r &&
                                    ('string' === typeof r
                                        ? (r = document.getElementById(r))
                                        : r.length && (r = r[0]))
                                r && ((e.width = r.offsetWidth), (e.height = r.offsetHeight))
                                var o = e.scale,
                                    i = e.width * o,
                                    a = e.height * o,
                                    s = (this.elem = document.createElement('div')),
                                    c = [
                                        '',
                                        'transform-origin:0 0;',
                                        'transform:scale(' + 1 / o + ');',
                                    ]
                                s.innerHTML =
                                    '<div style="width:' +
                                    e.width +
                                    'px;height:' +
                                    e.height +
                                    'px;overflow:hidden"><div style="width:' +
                                    i +
                                    'px;height:' +
                                    a +
                                    'px;' +
                                    c.join('-webkit-') +
                                    c.join('-ms-') +
                                    c.join('-moz-') +
                                    c.join('') +
                                    '"><canvas/></div></div>'
                                var u = (this.canvas = s.querySelector('canvas')),
                                    l = (this.ctx = u.getContext('2d'))
                                u.width = i
                                u.height = a
                                this.linear1 = this.genLinear(l, i, e.linearColor1)
                                this.linear2 = this.genLinear(l, i, e.linearColor2)
                                this.linearBg = this.genLinear(l, a, e.linearColorBg, true)
                                r && ((r.innerHTML = ''), r.appendChild(s))
                                this._phase = 0
                            }
                        b.prototype = g.prototype = {
                            genLinear: function (e, t, n, r) {
                                for (
                                    var o = e.createLinearGradient(0, 0, r ? 0 : t, r ? t : 0),
                                    i = 0;
                                    i < n.length;

                                ) {
                                    o.addColorStop(n[i++], n[i++])
                                }
                                return o
                            },
                            genPath: function (e, t, n) {
                                for (
                                    var r = [],
                                    o = this.set,
                                    i = o.scale,
                                    a = o.width * i,
                                    s = (o.height * i) / 2,
                                    c = 0;
                                    c < a;
                                    c += i
                                ) {
                                    var u =
                                        ((1 + Math.cos(Math.PI + (c / a) * 2 * Math.PI)) / 2) *
                                        s *
                                        t *
                                        Math.sin(2 * Math.PI * (c / a) * e + n) +
                                        s
                                    r.push(u)
                                }
                                return r
                            },
                            input: function (e, t, n) {
                                var r,
                                    o,
                                    i = this.set,
                                    a = this.ctx,
                                    s = i.scale,
                                    c = i.width * s,
                                    u = i.height * s,
                                    l = (i.speed * e.length) / n,
                                    f = (this._phase -= l),
                                    p = t / 100,
                                    h = this.genPath(2, p, f),
                                    d = this.genPath(1.8, p, f + 5 * l)
                                for (
                                    a.clearRect(0, 0, c, u), a.beginPath(), r = 0, o = 0;
                                    o < c;
                                    r++, o += s
                                ) {
                                    0 === o ? a.moveTo(o, h[r]) : a.lineTo(o, h[r])
                                }
                                r--
                                for (var v = c - 1; v >= 0; r--, v -= s) {
                                    a.lineTo(v, d[r])
                                }
                                a.closePath()
                                a.fillStyle = this.linearBg
                                a.fill()
                                this.drawPath(d, this.linear2)
                                this.drawPath(h, this.linear1)
                            },
                            drawPath: function (e, t) {
                                var n = this.set,
                                    r = this.ctx,
                                    o = n.scale,
                                    i = n.width * o
                                r.beginPath()
                                for (var a = 0, s = 0; s < i; a++, s += o) {
                                    0 === s ? r.moveTo(s, e[a]) : r.lineTo(s, e[a])
                                }
                                r.lineWidth = n.lineWidth * o
                                r.strokeStyle = t
                                r.stroke()
                            },
                        }
                        var y = g,
                            w = function (e) {
                                return new x(e)
                            },
                            x = function (e) {
                                var t = {
                                    scale: 1,
                                    fps: 20,
                                    lineRound: false,
                                    lineCount: 4,
                                    lineRatio: 0.5,
                                    spaceWidth: 0,
                                    minHeight: 1,
                                    position: -1,
                                    mirror: false,
                                    stripe: false,
                                    stripeHeight: 3,
                                    stripeMargin: 6,
                                    fallDuration: 1000,
                                    stripeFallDuration: 3500,
                                    linearColor: [
                                        0,
                                        'rgba(0,187,17,1)',
                                        0.5,
                                        'rgba(255,215,0,1)',
                                        1,
                                        'rgba(255,102,0,1)',
                                    ],
                                    fillColor: 'rgba(255,255,255,1)',
                                    stripeLinear: null,
                                    shadowBlur: 0,
                                    shadowColor: '#bbb',
                                    stripeShadowBlur: -1,
                                    stripeShadowColor: '',
                                    onDraw: function () { },
                                }
                                for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                this.set = e = t
                                var r = e.elem
                                r &&
                                    ('string' === typeof r
                                        ? (r = document.getElementById(r))
                                        : r.length && (r = r[0]))
                                r && ((e.width = r.offsetWidth), (e.height = r.offsetHeight))
                                var o = e.scale,
                                    i = e.width * o,
                                    a = e.height * o,
                                    s = (this.elem = document.createElement('div')),
                                    c = [
                                        '',
                                        'transform-origin:0 0;',
                                        'transform:scale(' + 1 / o + ');',
                                    ]
                                s.innerHTML =
                                    '<div style="width:' +
                                    e.width +
                                    'px;height:' +
                                    e.height +
                                    'px;overflow:hidden"><div style="width:' +
                                    i +
                                    'px;height:' +
                                    a +
                                    'px;' +
                                    c.join('-webkit-') +
                                    c.join('-ms-') +
                                    c.join('-moz-') +
                                    c.join('') +
                                    '"><canvas/></div></div>'
                                var u = (this.canvas = s.querySelector('canvas'))
                                this.ctx = u.getContext('2d')
                                u.width = i
                                u.height = a
                                r && ((r.innerHTML = ''), r.appendChild(s))
                                this.fft = (function (e) {
                                    var t, n, r, o, i, a, s, c
                                    return (
                                        (function (e) {
                                            var u, l, f, p, h
                                            for (
                                                t = Math.round(Math.log(e) / Math.log(2)),
                                                r = ((n = 1 << t) << 2) * Math.sqrt(2),
                                                o = [],
                                                i = [],
                                                a = [0],
                                                s = [0],
                                                c = [],
                                                u = 0;
                                                u < n;
                                                u++
                                            ) {
                                                for (f = u, l = 0, p = 0; l !== t; l++) {
                                                    p <<= 1
                                                    p |= 1 & f
                                                    f >>>= 1
                                                }
                                                c[u] = p
                                            }
                                            var d = (2 * Math.PI) / n
                                            for (u = (n >> 1) - 1; u > 0; u--) {
                                                h = u * d
                                                s[u] = Math.cos(h)
                                                a[u] = Math.sin(h)
                                            }
                                        })(e),
                                        {
                                            transform: function (e) {
                                                var u,
                                                    l,
                                                    f,
                                                    p,
                                                    h,
                                                    d,
                                                    v,
                                                    m,
                                                    g = 1,
                                                    b = t - 1
                                                for (u = 0; u !== n; u++) {
                                                    o[u] = e[c[u]]
                                                    i[u] = 0
                                                }
                                                for (u = t; 0 !== u; u--) {
                                                    for (l = 0; l !== g; l++) {
                                                        for (
                                                            h = s[l << b], d = a[l << b], f = l;
                                                            f < n;
                                                            f += g << 1
                                                        ) {
                                                            v = h * o[(p = f + g)] - d * i[p]
                                                            m = h * i[p] + d * o[p]
                                                            o[p] = o[f] - v
                                                            i[p] = i[f] - m
                                                            o[f] += v
                                                            i[f] += m
                                                        }
                                                    }
                                                    g <<= 1
                                                    b--
                                                }
                                                l = n >> 1
                                                var y = new Float64Array(l)
                                                for (d = r, h = -r, u = l; 0 !== u; u--) {
                                                    v = o[u]
                                                    m = i[u]
                                                    y[u - 1] =
                                                        v > h && v < d && m > h && m < d
                                                            ? 0
                                                            : Math.round(v * v + m * m)
                                                }
                                                return y
                                            },
                                            bufferSize: n,
                                        }
                                    )
                                })(1024)
                                this.lastH = []
                                this.stripesH = []
                            }
                        x.prototype = w.prototype = {
                            genLinear: function (e, t, n, r) {
                                for (
                                    var o = e.createLinearGradient(0, n, 0, r), i = 0;
                                    i < t.length;

                                ) {
                                    o.addColorStop(t[i++], t[i++])
                                }
                                return o
                            },
                            input: function (e, t, n) {
                                this.sampleRate = n
                                this.pcmData = e
                                this.pcmPos = 0
                                this.inputTime = Date.now()
                                this.schedule()
                            },
                            schedule: function () {
                                var e = this,
                                    t = e.set,
                                    n = Math.floor(1000 / t.fps)
                                e.timer ||
                                    (e.timer = setInterval(function () {
                                        e.schedule()
                                    }, n))
                                var r = Date.now(),
                                    o = e.drawTime || 0
                                if (r - e.inputTime > 1.3 * t.stripeFallDuration) {
                                    return clearInterval(e.timer), void (e.timer = 0)
                                }
                                if (!(r - o < n)) {
                                    e.drawTime = r
                                    for (
                                        var i = e.fft.bufferSize,
                                        a = e.pcmData,
                                        s = e.pcmPos,
                                        c = new Int16Array(i),
                                        u = 0;
                                        u < i && s < a.length;
                                        u++, s++
                                    ) {
                                        c[u] = a[s]
                                    }
                                    e.pcmPos = s
                                    var l = e.fft.transform(c)
                                    e.draw(l, e.sampleRate)
                                }
                            },
                            draw: function (e, t) {
                                var n = this.set,
                                    r = this.ctx,
                                    o = n.scale,
                                    i = n.width * o,
                                    a = n.height * o,
                                    s = n.lineCount,
                                    c = this.fft.bufferSize,
                                    u = n.position,
                                    l = Math.abs(u),
                                    f = 1 === u ? 0 : a,
                                    p = a
                                l < 1 &&
                                    ((f = p /= 2),
                                        (p = Math.floor(p * (1 + l))),
                                        (f = Math.floor(u > 0 ? f * (1 - l) : f * (1 + l))))
                                for (
                                    var h = this.lastH,
                                    d = this.stripesH,
                                    v = Math.ceil(p / (n.fallDuration / (1000 / n.fps))),
                                    m = Math.ceil(p / (n.stripeFallDuration / (1000 / n.fps))),
                                    g = n.stripeMargin * o,
                                    b = 1 << (Math.round(Math.log(c) / Math.log(2) + 3) << 1),
                                    y = Math.log(b) / Math.log(10),
                                    w = (20 * Math.log(32767)) / Math.log(10),
                                    x = c / 2,
                                    C = Math.min(x, Math.floor((5000 * x) / (t / 2))),
                                    S = C === x,
                                    k = S ? s : Math.round(0.8 * s),
                                    I = C / k,
                                    M = S ? 0 : (x - C) / (s - k),
                                    O = 0,
                                    j = 0;
                                    j < s;
                                    j++
                                ) {
                                    var _ = Math.ceil(O)
                                    O += j < k ? I : M
                                    for (
                                        var T = Math.min(Math.ceil(O), x), L = 0, R = _;
                                        R < T;
                                        R++
                                    ) {
                                        L = Math.max(L, Math.abs(e[R]))
                                    }
                                    var P =
                                        L > b
                                            ? Math.floor(17 * (Math.log(L) / Math.log(10) - y))
                                            : 0,
                                        D = p * Math.min(P / w, 1)
                                    h[j] = (h[j] || 0) - v
                                    D < h[j] && (D = h[j])
                                    D < 0 && (D = 0)
                                    h[j] = D
                                    var E = d[j] || 0
                                    if (D && D + g > E) {
                                        d[j] = D + g
                                    } else {
                                        var A = E - m
                                        A < 0 && (A = 0)
                                        d[j] = A
                                    }
                                }
                                r.clearRect(0, 0, i, a)
                                var $ = this.genLinear(r, n.linearColor, f, f - p),
                                    B =
                                        (n.stripeLinear &&
                                            this.genLinear(r, n.stripeLinear, f, f - p)) ||
                                        $,
                                    N = this.genLinear(r, n.linearColor, f, f + p),
                                    z =
                                        (n.stripeLinear &&
                                            this.genLinear(r, n.stripeLinear, f, f + p)) ||
                                        N
                                r.shadowBlur = n.shadowBlur * o
                                r.shadowColor = n.shadowColor
                                var F = n.mirror,
                                    U = F ? 2 * s - 1 : s,
                                    H = n.lineRatio,
                                    G = n.spaceWidth * o
                                0 !== G && (H = (i - G * (U + 1)) / i)
                                for (
                                    var J,
                                    W,
                                    V,
                                    q = Math.max(Number(o), Math.floor((i * H) / U)),
                                    Y = (i - U * q) / (U + 1),
                                    K = n.minHeight * o,
                                    Q = F ? i / 2 - (Y + q / 2) : 0,
                                    X = 0,
                                    Z = Q;
                                    X < s;
                                    X++
                                ) {
                                    Z += Y
                                    J = n.lineRound && !F ? Math.floor(Z) + q / 2 : Math.floor(Z)
                                    V = Math.max(h[X], K)
                                    0 !== f &&
                                        ((W = f - V),
                                            n.lineRound
                                                ? ((r.strokeStyle = n.fillColor),
                                                    r.beginPath(),
                                                    0 === u
                                                        ? (r.moveTo(J, n.height / 2), r.lineTo(J, W))
                                                        : -1 === u &&
                                                        (r.moveTo(J, n.height - q / 2),
                                                            r.lineTo(J, W - q / 2 < 0 ? 0 : W - q / 2)),
                                                    (r.lineCap = 'round'),
                                                    (r.lineWidth = q),
                                                    r.stroke())
                                                : ((r.fillStyle = $), r.fillRect(J, W, q, V), r.fill()))
                                    f !== a &&
                                        (n.lineRound
                                            ? ((r.strokeStyle = n.fillColor),
                                                r.beginPath(),
                                                0 === u
                                                    ? (r.moveTo(J, n.height / 2),
                                                        r.lineTo(J, n.height / 2 + V))
                                                    : 1 === u &&
                                                    (r.moveTo(J, q / 2),
                                                        r.lineTo(J, V - q / 2 > 0 ? V - q / 2 : q / 2)),
                                                (r.lineCap = 'round'),
                                                (r.lineWidth = q),
                                                r.stroke())
                                            : ((r.fillStyle = N), r.fillRect(J, f, q, V)))
                                    Z += q
                                }
                                if (n.stripe && !n.lineRound) {
                                    var ee = n.stripeShadowBlur
                                    r.shadowBlur = (-1 === ee ? n.shadowBlur : ee) * o
                                    r.shadowColor = n.stripeShadowColor || n.shadowColor
                                    for (
                                        var te, ne, re, oe = n.stripeHeight * o, ie = 0, ae = Q;
                                        ie < s;
                                        ie++
                                    ) {
                                        ae += Y
                                        te = Math.floor(ae)
                                        re = d[ie]
                                        0 !== f &&
                                            ((ne = f - re - oe) < 0 && (ne = 0),
                                                (r.fillStyle = B),
                                                r.fillRect(te, ne, q, oe))
                                        f !== a &&
                                            ((ne = f + re) + oe > a && (ne = a - oe),
                                                (r.fillStyle = z),
                                                r.fillRect(te, ne, q, oe))
                                        ae += q
                                    }
                                }
                                if (F) {
                                    var se,
                                        ce = Math.floor(i / 2)
                                    se = n.lineRound ? q - ce : -ce
                                    r.save()
                                    r.scale(-1, 1)
                                    r.drawImage(
                                        this.canvas,
                                        Math.ceil(i / 2),
                                        0,
                                        ce,
                                        a,
                                        se,
                                        0,
                                        ce,
                                        a
                                    )
                                    r.restore()
                                }
                                n.onDraw(e, t)
                            },
                        }
                        var C,
                            S = w
                        function k(e) {
                            return (k =
                                'function' === typeof Symbol &&
                                    'symbol' === typeof Symbol.iterator
                                    ? function (e) {
                                        return typeof e
                                    }
                                    : function (e) {
                                        return e &&
                                            'function' === typeof Symbol &&
                                            e.constructor === Symbol &&
                                            e !== Symbol.prototype
                                            ? 'symbol'
                                            : typeof e
                                    })(e)
                        }
                        function I(e, t, n, r, o, i, a) {
                            try {
                                var s = e[i](a),
                                    c = s.value
                            } catch (u) {
                                return void n(u)
                            }
                            s.done ? t(c) : Promise.resolve(c).then(r, o)
                        }
                        function M(e) {
                            return function () {
                                var t = this,
                                    n = arguments
                                return new Promise(function (r, o) {
                                    var i = e.apply(t, n)
                                    function a(e) {
                                        I(i, r, o, a, s, 'next', e)
                                    }
                                    function s(e) {
                                        I(i, r, o, a, s, 'throw', e)
                                    }
                                    a(void 0)
                                })
                            }
                        }
                        function O(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n]
                                r.enumerable = r.enumerable || false
                                r.configurable = true
                                'value' in r && (r.writable = true)
                                Object.defineProperty(e, r.key, r)
                            }
                        }
                        function j(e, t) {
                            return (j =
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e
                                })(e, t)
                        }
                        function _(e) {
                            var t = (function () {
                                if ('undefined' === typeof Reflect || !Reflect.construct) {
                                    return false
                                }
                                if (Reflect.construct.sham) {
                                    return false
                                }
                                if ('function' === typeof Proxy) {
                                    return true
                                }
                                try {
                                    return (
                                        Date.prototype.toString.call(
                                            Reflect.construct(Date, [], function () { })
                                        ),
                                        true
                                    )
                                } catch (e) {
                                    return false
                                }
                            })()
                            return function () {
                                var n,
                                    r = L(e)
                                if (t) {
                                    var o = L(this).constructor
                                    n = Reflect.construct(r, arguments, o)
                                } else {
                                    n = r.apply(this, arguments)
                                }
                                return T(this, n)
                            }
                        }
                        function T(e, t) {
                            return !t || ('object' !== k(t) && 'function' !== typeof t)
                                ? (function (e) {
                                    if (void 0 === e) {
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        )
                                    }
                                    return e
                                })(e)
                                : t
                        }
                        function L(e) {
                            return (L = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function (e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                        }
                        var R = {},
                            P = (function (e) {
                                !(function (e, t) {
                                    if ('function' !== typeof t && null !== t) {
                                        throw new TypeError(
                                            'Super expression must either be null or a function'
                                        )
                                    }
                                    e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            writable: true,
                                            configurable: true,
                                        },
                                    })
                                    t && j(e, t)
                                })(n, e)
                                var t = _(n)
                                function n() {
                                    var e
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) {
                                                throw new TypeError('Cannot call a class as a function')
                                            }
                                        })(this, n),
                                        ((e = t.call(this)).version = 1),
                                        (e.updateTime = Number(new Date())),
                                        (e.apiName = 'Recorder'),
                                        (e.deviceChangeTimes = 0),
                                        (e.audioInputList = []),
                                        (e.audioOutputList = []),
                                        (e.defaultAudioInputDeviceId = null),
                                        (e.currentAudioInputDeviceId = null),
                                        e
                                    )
                                }
                                return (
                                    (function (e, t, n) {
                                        t && O(e.prototype, t)
                                        n && O(e, n)
                                    })(n, [
                                        {
                                            key: 'sleep',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e(t) {
                                                        return o.a.wrap(function (e) {
                                                            for (; ;) {
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        return e.abrupt(
                                                                            'return',
                                                                            new Promise(function (e) {
                                                                                return setTimeout(e, t)
                                                                            })
                                                                        )
                                                                    case 1:
                                                                    case 'end':
                                                                        return e.stop()
                                                                }
                                                            }
                                                        }, e)
                                                    })
                                                )
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'removeListeners',
                                            value: function () {
                                                var e = this
                                                    ;[
                                                        'init',
                                                        'input',
                                                        'open',
                                                        'close',
                                                        'stop',
                                                        'start',
                                                        'pause',
                                                        'resume',
                                                        'getBlob',
                                                        'play',
                                                        'getSrc',
                                                    ].forEach(function (t) {
                                                        e.removeAllListeners(t)
                                                    })
                                            },
                                        },
                                        {
                                            key: 'init',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t,
                                                            n,
                                                            r,
                                                            i,
                                                            a,
                                                            s = this,
                                                            u = arguments
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (
                                                                                (t =
                                                                                    u.length > 0 && void 0 !== u[0]
                                                                                        ? u[0]
                                                                                        : {}),
                                                                                this.removeListeners(),
                                                                                this.isSupport() ||
                                                                                this.emit('init', false),
                                                                                (e.next = 5),
                                                                                this.getDeviceLists()
                                                                            )
                                                                        case 5:
                                                                            if (
                                                                                ((n = e.sent),
                                                                                    (r = n.inputLists) && 0 !== r.length)
                                                                            ) {
                                                                                e.next = 9
                                                                                break
                                                                            }
                                                                            return e.abrupt('return')
                                                                        case 9:
                                                                            return (
                                                                                (e.next = 11),
                                                                                this.getComputerDefaultInput()
                                                                            )
                                                                        case 11:
                                                                            return (
                                                                                (i = e.sent),
                                                                                ((a = c(
                                                                                    (a = {
                                                                                        type: 'wav',
                                                                                        sampleRate: 16000,
                                                                                        bitRate: 16,
                                                                                        autoOpen: true,
                                                                                        effective: 0,
                                                                                        waveConfig: {
                                                                                            type: 'histogram',
                                                                                            elem: 'waveContent',
                                                                                        },
                                                                                    }),
                                                                                    t
                                                                                )).onProcess = function (e, n, r, o) {
                                                                                    a.effective &&
                                                                                        n > a.effective &&
                                                                                        s.emit('input', n)
                                                                                    t.waveConfig &&
                                                                                        t.waveConfig.length > 0 &&
                                                                                        t.waveConfig.forEach(function (
                                                                                            t,
                                                                                            r
                                                                                        ) {
                                                                                            'wave' === t.type
                                                                                                ? (R[r] = y(t))
                                                                                                : (R[r] = S(t))
                                                                                            R[r].input(e[e.length - 1], n, o)
                                                                                        })
                                                                                }),
                                                                                (e.next = 17),
                                                                                m.init(a)
                                                                            )
                                                                        case 17:
                                                                            if (!(C = e.sent)) {
                                                                                e.next = 26
                                                                                break
                                                                            }
                                                                            return (e.next = 21), this.deviceChange()
                                                                        case 21:
                                                                            if (
                                                                                (this.emit('init', i.deviceId),
                                                                                    a.autoOpen)
                                                                            ) {
                                                                                e.next = 24
                                                                                break
                                                                            }
                                                                            return e.abrupt('return')
                                                                        case 24:
                                                                            return (e.next = 26), this.open()
                                                                        case 26:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'isSupport',
                                            value: function () {
                                                return m.Support()
                                            },
                                        },
                                        {
                                            key: 'open',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t = this
                                                        return o.a.wrap(function (e) {
                                                            for (; ;) {
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        C.openRecord(
                                                                            function () {
                                                                                return (
                                                                                    t.emit('open', true),
                                                                                    {
                                                                                        errCode: 0,
                                                                                        errMsg: 'openRecord:success',
                                                                                    }
                                                                                )
                                                                            },
                                                                            function (e) {
                                                                                return (
                                                                                    t.emit('open', false),
                                                                                    {
                                                                                        errCode: -1,
                                                                                        errMsg: e,
                                                                                    }
                                                                                )
                                                                            }
                                                                        )
                                                                    case 1:
                                                                    case 'end':
                                                                        return e.stop()
                                                                }
                                                            }
                                                        }, e)
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'start',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            if (C) {
                                                                                e.next = 2
                                                                                break
                                                                            }
                                                                            return e.abrupt('return')
                                                                        case 2:
                                                                            return (e.next = 4), C.startRecord()
                                                                        case 4:
                                                                            return (
                                                                                (t = e.sent),
                                                                                this.emit('start', t),
                                                                                e.abrupt('return', t)
                                                                            )
                                                                        case 7:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'stop',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t,
                                                            n,
                                                            r,
                                                            i,
                                                            a = arguments
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            if (
                                                                                ((t =
                                                                                    a.length > 0 && void 0 !== a[0]
                                                                                        ? a[0]
                                                                                        : null),
                                                                                    (n =
                                                                                        a.length > 1 && void 0 !== a[1]
                                                                                            ? a[1]
                                                                                            : null),
                                                                                    (r =
                                                                                        a.length > 2 &&
                                                                                        void 0 !== a[2] &&
                                                                                        a[2]),
                                                                                    C)
                                                                            ) {
                                                                                e.next = 5
                                                                                break
                                                                            }
                                                                            return e.abrupt('return')
                                                                        case 5:
                                                                            return (e.next = 7), C.stopRecord(t, n, r)
                                                                        case 7:
                                                                            return (
                                                                                (i = e.sent),
                                                                                this.emit('stop', i),
                                                                                e.abrupt('return', i)
                                                                            )
                                                                        case 10:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'close',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t,
                                                            n,
                                                            r = arguments
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            if (
                                                                                ((t =
                                                                                    r.length > 0 && void 0 !== r[0]
                                                                                        ? r[0]
                                                                                        : null),
                                                                                    C)
                                                                            ) {
                                                                                e.next = 3
                                                                                break
                                                                            }
                                                                            return e.abrupt('return')
                                                                        case 3:
                                                                            return (e.next = 5), C.closeRecord(t)
                                                                        case 5:
                                                                            return (
                                                                                (n = e.sent),
                                                                                this.emit('close', n),
                                                                                e.abrupt('return', n)
                                                                            )
                                                                        case 8:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'pause',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (e.next = 2), C.pauseRecord()
                                                                        case 2:
                                                                            return (
                                                                                (t = e.sent),
                                                                                this.emit('pause', t),
                                                                                e.abrupt('return', t)
                                                                            )
                                                                        case 5:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'destroy',
                                            value: function () {
                                                C.destroyRecord()
                                                C = null
                                            },
                                        },
                                        {
                                            key: 'resume',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (
                                                                                this.emit('resume'),
                                                                                e.abrupt('return', C.resumeRecord())
                                                                            )
                                                                        case 2:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'getBlob',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (e.next = 2), C.getRecordBlob()
                                                                        case 2:
                                                                            return (
                                                                                (t = e.sent),
                                                                                this.emit('getBlob', t),
                                                                                e.abrupt('return', t)
                                                                            )
                                                                        case 5:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'play',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e(t) {
                                                        var n
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (e.next = 2), C.playRecord(t)
                                                                        case 2:
                                                                            return (
                                                                                (n = e.sent),
                                                                                this.emit('play', n),
                                                                                e.abrupt('return', n)
                                                                            )
                                                                        case 5:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'getSrc',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e() {
                                                        var t,
                                                            n,
                                                            r = arguments
                                                        return o.a.wrap(
                                                            function (e) {
                                                                for (; ;) {
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (
                                                                                (t =
                                                                                    r.length > 0 && void 0 !== r[0]
                                                                                        ? r[0]
                                                                                        : ''),
                                                                                (e.next = 3),
                                                                                C.getRecordSrc(t)
                                                                            )
                                                                        case 3:
                                                                            return (
                                                                                (n = e.sent),
                                                                                this.emit('getSrc', n),
                                                                                e.abrupt('return', n)
                                                                            )
                                                                        case 6:
                                                                        case 'end':
                                                                            return e.stop()
                                                                    }
                                                                }
                                                            },
                                                            e,
                                                            this
                                                        )
                                                    })
                                                )
                                                return function () {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'getDeviceLists',
                                            value: (function () {
                                                var e = M(
                                                    o.a.mark(function e(t) {
                                                        var n = this
                                                        return o.a.wrap(function (e) {
                                                            for (; ;) {
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        return e.abrupt(
                                                                            'return',
                                                                            new Promise(function (e, r) {
                                                                                navigator.mediaDevices
                                                                                    .enumerateDevices()
                                                                                    .then(function (r) {
                                                                                        var o = r.filter(function (e) {
                                                                                            return 'audioinput' === e.kind
                                                                                        }),
                                                                                            i = r.filter(function (e) {
                                                                                                return 'audiooutput' === e.kind
                                                                                            })
                                                                                        n.audioInputList = o
                                                                                        n.audioOutputList = i
                                                                                        var a = {
                                                                                            inputLists: i,
                                                                                            outputLists: o,
                                                                                        }
                                                                                        t && t(a)
                                                                                        e(a)
                                                                                    })
                                                                                    .catch(function (e) {
                                                                                        r(e)
                                                                                    })
                                                                            })
                                                                        )
                                                                    case 1:
                                                                    case 'end':
                                                                        return e.stop()
                                                                }
                                                            }
                                                        }, e)
                                                    })
                                                )
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            })(),
                                        },
                                        {
                                            key: 'deviceChange',
                                            value: function () {
                                                var e = this
                                                navigator.mediaDevices.ondevicechange = M(
                                                    o.a.mark(function t() {
                                                        var n, r, i, a
                                                        return o.a.wrap(function (t) {
                                                            for (; ;) {
                                                                switch ((t.prev = t.next)) {
                                                                    case 0:
                                                                        if (
                                                                            (e.deviceChangeTimes++,
                                                                                e.deviceChangeTimes % 2 !== 0)
                                                                        ) {
                                                                            break
                                                                        }
                                                                        return (t.next = 4), e.getDeviceLists()
                                                                    case 4:
                                                                        return (
                                                                            (n = t.sent),
                                                                            (r = n.inputLists),
                                                                            (i = n.outputLists),
                                                                            (t.next = 9),
                                                                            e.getComputerDefaultInput()
                                                                        )
                                                                    case 9:
                                                                        ; (a = t.sent),
                                                                            e.emit('deviceChange', {
                                                                                defaultDeviceId: a.deviceId || '',
                                                                                inputLists: r || [],
                                                                                outputLists: i || [],
                                                                            }),
                                                                            (t.next = 15)
                                                                        break
                                                                    case 13:
                                                                        ; (e.lastAudioInputList = JSON.parse(
                                                                            JSON.stringify(e.audioInputList)
                                                                        )),
                                                                            (e.lastAudioInputDeviceId =
                                                                                e.currentAudioInputDeviceId)
                                                                    case 15:
                                                                    case 'end':
                                                                        return t.stop()
                                                                }
                                                            }
                                                        }, t)
                                                    })
                                                )
                                            },
                                        },
                                        {
                                            key: 'getComputerDefaultInput',
                                            value: function () {
                                                var e = this.audioInputList || []
                                                if (0 === e.length) {
                                                    return false
                                                }
                                                var t = e.filter(function (e) {
                                                    return 'default' === e.deviceId
                                                })[0].groupId,
                                                    n = e.filter(function (e) {
                                                        return e.groupId === t && 'default' !== e.deviceId
                                                    })[0]
                                                return (
                                                    n && (this.defaultAudioInputDeviceId = n.deviceId), n
                                                )
                                            },
                                        },
                                    ]),
                                    n
                                )
                            })(i.EventEmitter),
                            D = new Proxy(new P(), {
                                get: function (e, t, n) {
                                    return Reflect.get(e, t, n)
                                },
                            })
                    },
                }).default
            })
        },
        '57da': function (e, t, n) {
            e.exports = n.p + 'static/media/notjoin.fde0d219.wav'
        },
        '6c1a': function (e, t, n) { },
        '74b7': function (e, t, n) {
            'use strict'
            n('e0a9')
        },
        '7ec2': function (e, t, n) {
            n('d9e2')
            n('14d9')
            n('a4d3')
            n('e01a')
            n('d3b7')
            n('d28b')
            n('e260')
            n('3ca3')
            n('ddb0')
            n('b636')
            n('944a')
            n('0c47')
            n('23dc')
            n('3410')
            n('159b')
            n('b0c0')
            n('131a')
            n('e6cf')
            n('fb6a')
            var r = n('7037').default
            function o() {
                'use strict'
                e.exports = o = function () {
                    return t
                }
                e.exports.__esModule = true
                e.exports.default = e.exports
                var t = {
                    wrap: p,
                    type: 'normal',
                },
                    n = Object.prototype,
                    i = n.hasOwnProperty,
                    a =
                        Object.defineProperty ||
                        function (e, t, n) {
                            e[t] = n.value
                        },
                    s = 'function' == typeof Symbol ? Symbol : {},
                    c = s.iterator || '@@iterator',
                    u = s.asyncIterator || '@@asyncIterator',
                    l = s.toStringTag || '@@toStringTag'
                function f(e, t, n) {
                    return (
                        Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        }),
                        e[t]
                    )
                }
                try {
                    f({}, '')
                } catch (L) {
                    f = function (e, t, n) {
                        return (e[t] = n)
                    }
                }
                function p(e, t, n, r) {
                    var o = t && t.prototype instanceof v ? t : v,
                        i = Object.create(o.prototype),
                        s = new j(r || [])
                    return a(i, '_invoke', { value: k(e, n, s) }), i
                }
                function h(e, t, n) {
                    try {
                        return {
                            type: 'normal',
                            arg: e.call(t, n),
                        }
                    } catch (L) {
                        return {
                            type: 'throw',
                            arg: L,
                        }
                    }
                }
                var d = {}
                function v() { }
                function m() { }
                function g() { }
                var b = {}
                f(b, c, function () {
                    return this
                })
                var y = Object.getPrototypeOf,
                    w = y && y(y(_([])))
                w && w !== n && i.call(w, c) && (b = w)
                var x = (g.prototype = v.prototype = Object.create(b))
                function C(e) {
                    ;['next', 'throw', 'return'].forEach(function (t) {
                        f(e, t, function (e) {
                            return this._invoke(t, e)
                        })
                    })
                }
                function S(e, t) {
                    function n(o, a, s, c) {
                        var u = h(e[o], e, a)
                        if ('throw' !== u.type) {
                            var l = u.arg,
                                f = l.value
                            return f && 'object' == r(f) && i.call(f, '__await')
                                ? t.resolve(f.__await).then(
                                    function (e) {
                                        n('next', e, s, c)
                                    },
                                    function (e) {
                                        n('throw', e, s, c)
                                    }
                                )
                                : t.resolve(f).then(
                                    function (e) {
                                        l.value = e
                                        s(l)
                                    },
                                    function (e) {
                                        return n('throw', e, s, c)
                                    }
                                )
                        }
                        c(u.arg)
                    }
                    var o
                    a(this, '_invoke', {
                        value: function (e, r) {
                            function i() {
                                return new t(function (t, o) {
                                    n(e, r, t, o)
                                })
                            }
                            return (o = o ? o.then(i, i) : i())
                        },
                    })
                }
                function k(e, t, n) {
                    var r = 'suspendedStart'
                    return function (o, i) {
                        if ('executing' === r) {
                            throw new Error('Generator is already running')
                        }
                        if ('completed' === r) {
                            if ('throw' === o) {
                                throw i
                            }
                            return T()
                        }
                        for (n.method = o, n.arg = i; ;) {
                            var a = n.delegate
                            if (a) {
                                var s = I(a, n)
                                if (s) {
                                    if (s === d) {
                                        continue
                                    }
                                    return s
                                }
                            }
                            if ('next' === n.method) {
                                n.sent = n._sent = n.arg
                            } else {
                                if ('throw' === n.method) {
                                    if ('suspendedStart' === r) {
                                        throw ((r = 'completed'), n.arg)
                                    }
                                    n.dispatchException(n.arg)
                                } else {
                                    'return' === n.method && n.abrupt('return', n.arg)
                                }
                            }
                            r = 'executing'
                            var c = h(e, t, n)
                            if ('normal' === c.type) {
                                if (
                                    ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                                ) {
                                    continue
                                }
                                return {
                                    value: c.arg,
                                    done: n.done,
                                }
                            }
                            'throw' === c.type &&
                                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
                        }
                    }
                }
                function I(e, t) {
                    var n = t.method,
                        r = e.iterator[n]
                    if (void 0 === r) {
                        return (
                            (t.delegate = null),
                            ('throw' === n &&
                                e.iterator.return &&
                                ((t.method = 'return'),
                                    (t.arg = void 0),
                                    I(e, t),
                                    'throw' === t.method)) ||
                            ('return' !== n &&
                                ((t.method = 'throw'),
                                    (t.arg = new TypeError(
                                        "The iterator does not provide a '" + n + "' method"
                                    )))),
                            d
                        )
                    }
                    var o = h(r, e.iterator, t.arg)
                    if ('throw' === o.type) {
                        return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), d
                    }
                    var i = o.arg
                    return i
                        ? i.done
                            ? ((t[e.resultName] = i.value),
                                (t.next = e.nextLoc),
                                'return' !== t.method &&
                                ((t.method = 'next'), (t.arg = void 0)),
                                (t.delegate = null),
                                d)
                            : i
                        : ((t.method = 'throw'),
                            (t.arg = new TypeError('iterator result is not an object')),
                            (t.delegate = null),
                            d)
                }
                function M(e) {
                    var t = { tryLoc: e[0] }
                    1 in e && (t.catchLoc = e[1])
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3]))
                    this.tryEntries.push(t)
                }
                function O(e) {
                    var t = e.completion || {}
                    delete t.arg
                    e.completion = t
                }
                function j(e) {
                    this.tryEntries = [{ tryLoc: 'root' }]
                    e.forEach(M, this)
                    this.reset(true)
                }
                function _(e) {
                    if (e) {
                        var t = e[c]
                        if (t) {
                            return t.call(e)
                        }
                        if ('function' == typeof e.next) {
                            return e
                        }
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;) {
                                        if (i.call(e, n)) {
                                            return (t.value = e[n]), (t.done = false), t
                                        }
                                    }
                                    return (t.value = void 0), (t.done = true), t
                                }
                            return (r.next = r)
                        }
                    }
                    return { next: T }
                }
                function T() {
                    return {
                        value: void 0,
                        done: true,
                    }
                }
                return (
                    (m.prototype = g),
                    a(x, 'constructor', {
                        value: g,
                        configurable: true,
                    }),
                    a(g, 'constructor', {
                        value: m,
                        configurable: true,
                    }),
                    (m.displayName = f(g, l, 'GeneratorFunction')),
                    (t.isGeneratorFunction = function (e) {
                        var t = 'function' == typeof e && e.constructor
                        return (
                            !!t &&
                            (t === m || 'GeneratorFunction' === (t.displayName || t.name))
                        )
                    }),
                    (t.mark = function (e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, g)
                                : ((e.__proto__ = g), f(e, l, 'GeneratorFunction')),
                            (e.prototype = Object.create(x)),
                            e
                        )
                    }),
                    (t.awrap = function (e) {
                        return { __await: e }
                    }),
                    C(S.prototype),
                    f(S.prototype, u, function () {
                        return this
                    }),
                    (t.AsyncIterator = S),
                    (t.async = function (e, n, r, o, i) {
                        void 0 === i && (i = Promise)
                        var a = new S(p(e, n, r, o), i)
                        return t.isGeneratorFunction(n)
                            ? a
                            : a.next().then(function (e) {
                                return e.done ? e.value : a.next()
                            })
                    }),
                    C(x),
                    f(x, l, 'Generator'),
                    f(x, c, function () {
                        return this
                    }),
                    f(x, 'toString', function () {
                        return '[object Generator]'
                    }),
                    (t.keys = function (e) {
                        var t = Object(e),
                            n = []
                        for (var r in t) n.push(r)
                        return (
                            n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var r = n.pop()
                                    if (r in t) {
                                        return (e.value = r), (e.done = false), e
                                    }
                                }
                                return (e.done = true), e
                            }
                        )
                    }),
                    (t.values = _),
                    (j.prototype = {
                        constructor: j,
                        reset: function (e) {
                            if (
                                ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = void 0),
                                    (this.done = false),
                                    (this.delegate = null),
                                    (this.method = 'next'),
                                    (this.arg = void 0),
                                    this.tryEntries.forEach(O),
                                    !e)
                            ) {
                                for (var t in this)
                                    't' === t.charAt(0) &&
                                        i.call(this, t) &&
                                        !isNaN(+t.slice(1)) &&
                                        (this[t] = void 0)
                            }
                        },
                        stop: function () {
                            this.done = true
                            var e = this.tryEntries[0].completion
                            if ('throw' === e.type) {
                                throw e.arg
                            }
                            return this.rval
                        },
                        dispatchException: function (e) {
                            if (this.done) {
                                throw e
                            }
                            var t = this
                            function n(n, r) {
                                return (
                                    (a.type = 'throw'),
                                    (a.arg = e),
                                    (t.next = n),
                                    r && ((t.method = 'next'), (t.arg = void 0)),
                                    !!r
                                )
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r],
                                    a = o.completion
                                if ('root' === o.tryLoc) {
                                    return n('end')
                                }
                                if (o.tryLoc <= this.prev) {
                                    var s = i.call(o, 'catchLoc'),
                                        c = i.call(o, 'finallyLoc')
                                    if (s && c) {
                                        if (this.prev < o.catchLoc) {
                                            return n(o.catchLoc, true)
                                        }
                                        if (this.prev < o.finallyLoc) {
                                            return n(o.finallyLoc)
                                        }
                                    } else {
                                        if (s) {
                                            if (this.prev < o.catchLoc) {
                                                return n(o.catchLoc, true)
                                            }
                                        } else {
                                            if (!c) {
                                                throw new Error(
                                                    'try statement without catch or finally'
                                                )
                                            }
                                            if (this.prev < o.finallyLoc) {
                                                return n(o.finallyLoc)
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n]
                                if (
                                    r.tryLoc <= this.prev &&
                                    i.call(r, 'finallyLoc') &&
                                    this.prev < r.finallyLoc
                                ) {
                                    var o = r
                                    break
                                }
                            }
                            o &&
                                ('break' === e || 'continue' === e) &&
                                o.tryLoc <= t &&
                                t <= o.finallyLoc &&
                                (o = null)
                            var a = o ? o.completion : {}
                            return (
                                (a.type = e),
                                (a.arg = t),
                                o
                                    ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
                                    : this.complete(a)
                            )
                        },
                        complete: function (e, t) {
                            if ('throw' === e.type) {
                                throw e.arg
                            }
                            return (
                                'break' === e.type || 'continue' === e.type
                                    ? (this.next = e.arg)
                                    : 'return' === e.type
                                        ? ((this.rval = this.arg = e.arg),
                                            (this.method = 'return'),
                                            (this.next = 'end'))
                                        : 'normal' === e.type && t && (this.next = t),
                                d
                            )
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t]
                                if (n.finallyLoc === e) {
                                    return this.complete(n.completion, n.afterLoc), O(n), d
                                }
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t]
                                if (n.tryLoc === e) {
                                    var r = n.completion
                                    if ('throw' === r.type) {
                                        var o = r.arg
                                        O(n)
                                    }
                                    return o
                                }
                            }
                            throw new Error('illegal catch attempt')
                        },
                        delegateYield: function (e, t, n) {
                            return (
                                (this.delegate = {
                                    iterator: _(e),
                                    resultName: t,
                                    nextLoc: n,
                                }),
                                'next' === this.method && (this.arg = void 0),
                                d
                            )
                        },
                    }),
                    t
                )
            }
            e.exports = o
            e.exports.__esModule = true
            e.exports.default = e.exports
        },
        a34a: function (e, t, n) {
            function r(e) {
                return (
                    (r =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e
                            }
                            : function (e) {
                                return e &&
                                    'function' == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype
                                    ? 'symbol'
                                    : typeof e
                            }),
                    r(e)
                )
            }
            n('8fe5')
            n('a4d3')
            n('e01a')
            n('d3b7')
            n('d28b')
            n('e260')
            n('3ca3')
            n('ddb0')
            var o = n('7ec2')()
            e.exports = o
            try {
                regeneratorRuntime = o
            } catch (i) {
                'object' ===
                    ('undefined' === typeof globalThis ? 'undefined' : r(globalThis))
                    ? (globalThis.regeneratorRuntime = o)
                    : Function('r', 'regeneratorRuntime = r')(o)
            }
        },
        b6c9: function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return u
            })
            var r = n('d4ec'),
                o = n('bee2'),
                i = (n('99af'), n('d9e2'), n('8bbf')),
                a = n.n(i),
                s = n('3898'),
                c = n('d0db'),
                u = (function () {
                    function e(t) {
                        console.info(
                            '函数申明 InteractionBase(app)',
                            t,
                            'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
                        )
                        Object(r.a)(this, e)
                        this.app = t
                        this.vm = null
                        this.keepOtherDom = false
                    }
                    return (
                        Object(o.a)(e, [
                            {
                                key: 'initVmApp',
                                value: function (e) {
                                    if (!this.dom) {
                                        throw Error('互动的dom容器不存在')
                                    }
                                    this.dom.children.length > 0 &&
                                        !this.keepOtherDom &&
                                        (c.a.send({
                                            tag: 'tempInteractionTest',
                                            content: {
                                                msg: '清空互动容器\uFF0C由'
                                                    .concat(e, '触发清空\uFF0C清空')
                                                    .concat(this.dom.children[0].className),
                                            },
                                        }),
                                            (this.dom.innerHTML = ''))
                                    this.vm = this.initVm(this.app)
                                    this.render(this.dom, this.vm)
                                },
                            },
                            {
                                key: 'initVm',
                                value: function (e) {
                                    var t = a.a.extend(e),
                                        n = this.createPropsData(),
                                        r = new t({
                                            i18n: s.b,
                                            propsData: n,
                                            store: this.store || {},
                                        })
                                    return r.$mount(), r
                                },
                            },
                            {
                                key: 'render',
                                value: function (e, t) {
                                    e.appendChild(t.$el)
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                        t = e.submit
                                    this.vm
                                        ? (t && this.vm.submit(),
                                            this.vm.$destroy(),
                                            (this.dom.innerHTML = ''),
                                            (this.vm = null),
                                            (this.app = null))
                                        : console.info(
                                            'if(!this.vm)为true触发return,path: /renderer/components/Classroom/CommonInteractions/interaction-base.js'
                                        )
                                },
                            },
                            {
                                key: 'getProperties',
                                value: function (e, t) {
                                    return e[''.concat(t)].properties
                                },
                            },
                            {
                                key: 'handleMsg',
                                value: function () { },
                            },
                        ]),
                        e
                    )
                })()
        },
        e0a9: function (e, t, n) { },
        e4a3: function (e, t, n) {
            'use strict'
            n('6c1a')
        },
        e80a: function (e, t, n) {
            'use strict'
            n('f168')
        },
        f168: function (e, t, n) { },
        fefe: function (e, t, n) {
            'use strict'
            n.r(t)
            n.d(t, 'default', function () {
                return J
            })
            var r,
                o = n('5530'),
                i = n('d4ec'),
                a = n('bee2'),
                s = n('262e'),
                c = n('2caf'),
                u = n('b6c9'),
                l = function () {
                    var e = this,
                        t = e._self._c
                    return t(
                        'div',
                        {
                            staticClass: 'collectiveSpeech-container',
                            attrs: { id: 'collectiveSpeechContainer' },
                        },
                        [
                            t('div', { staticClass: 'audio-container' }, [
                                t('audio', {
                                    ref: 'speechStart',
                                    attrs: { src: n('0b38') },
                                }),
                                t('audio', {
                                    ref: 'speechJoin',
                                    attrs: { src: n('176c') },
                                }),
                                t('audio', {
                                    ref: 'speechNotJoin',
                                    attrs: { src: n('57da') },
                                }),
                            ]),
                            t('div', { staticClass: 'microphone-container' }, [
                                e.microphoneAccess
                                    ? t('div', {
                                        staticClass: 'waveContent',
                                        attrs: { id: 'waveContent' },
                                    })
                                    : t('div', { staticClass: 'no-microphone-icon' }),
                            ]),
                            t('MediaSecurityAccess', {
                                attrs: {
                                    type: 'microphone',
                                    visible: true,
                                },
                            }),
                        ],
                        1
                    )
                },
                f = [],
                p = n('c7eb'),
                h = n('1da1'),
                d = n('0a4b'),
                v = n('3709'),
                m = n.n(v),
                g = n('753a'),
                b = n('dc21'),
                y = n('e39c'),
                w = (function () {
                    var e = Object(h.a)(
                        Object(p.a)().mark(function e(t, n) {
                            var r, o, i
                            return Object(p.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (r = Object(y.h)()),
                                                (o = r.oversea),
                                                (e.next = 3),
                                                Object(b.a)({
                                                    url: t,
                                                    params: n,
                                                    apiDomain: o,
                                                })
                                            )
                                        case 3:
                                            return (i = e.sent), e.abrupt('return', i)
                                        case 5:
                                        case 'end':
                                            return e.stop()
                                    }
                                }
                            }, e)
                        })
                    )
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                })(),
                x = (function () {
                    var e = Object(h.a)(
                        Object(p.a)().mark(function e(t) {
                            var n
                            return Object(p.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = '/classroom-hub/speech/student/submit'),
                                                (e.next = 3),
                                                w(n, t)
                                            )
                                        case 3:
                                            return e.abrupt('return', e.sent)
                                        case 4:
                                        case 'end':
                                            return e.stop()
                                    }
                                }
                            }, e)
                        })
                    )
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                })(),
                C = (function () {
                    var e = Object(h.a)(
                        Object(p.a)().mark(function e(t) {
                            var n
                            return Object(p.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n =
                                                    '/classroom-hub/classroom/student/interact/partakereport'),
                                                (e.next = 3),
                                                w(n, t)
                                            )
                                        case 3:
                                            return e.abrupt('return', e.sent)
                                        case 4:
                                        case 'end':
                                            return e.stop()
                                    }
                                }
                            }, e)
                        })
                    )
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                })(),
                S = (n('d3b7'), n('25f0'), n('8bbf')),
                k = n.n(S),
                I = function () {
                    var e = this,
                        t = e._self._c
                    return t(
                        'transition',
                        { on: { 'after-leave': e.handleAfterLeave } },
                        [
                            t(
                                'div',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.visible,
                                            expression: 'visible',
                                        },
                                    ],
                                    staticClass: 'collectiveSpeech-toast--container',
                                },
                                [
                                    t('div', {
                                        staticClass: 'collectiveSpeech-toast',
                                        class: [e.typeClass],
                                    }),
                                ]
                            ),
                        ]
                    )
                },
                M = [],
                j = {
                    data: function () {
                        return {
                            visible: false,
                            duration: 3000,
                            type: '',
                            timer: null,
                            onClose: null,
                            closed: false,
                        }
                    },
                    computed: {
                        typeClass: function () {
                            return (
                                console.info(
                                    '对象函数 typeClass,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/main.vue'
                                ),
                                'is-'.concat(O[this.type])
                            )
                        },
                    },
                    watch: {
                        closed: function (e) {
                            console.info(
                                '对象函数 closed(newVal)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/main.vue'
                            )
                            e && (this.visible = false)
                        },
                    },
                    mounted: function () {
                        this.startTimer()
                    },
                    methods: {
                        handleAfterLeave: function () {
                            var e, t
                            console.info(
                                '对象函数 handleAfterLeave,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/main.vue'
                            )
                            this.$destroy(true)
                            null === (e = this.$el) ||
                                void 0 === e ||
                                null === (t = e.parentNode) ||
                                void 0 === t ||
                                t.removeChild(this.$el)
                        },
                        close: function () {
                            console.info(
                                '对象函数 close,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/main.vue'
                            )
                            this.closed = true
                            'function' === typeof this.onClose && this.onClose(this)
                        },
                        clearTimer: function () {
                            console.info(
                                '对象函数 clearTimer,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/main.vue'
                            )
                            clearTimeout(this.timer)
                        },
                        startTimer: function () {
                            var e = this
                            console.info(
                                '对象函数 startTimer,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/main.vue'
                            )
                            this.duration > 0 &&
                                (this.timer = setTimeout(function () {
                                    e.closed || e.close()
                                }, this.duration))
                        },
                    },
                },
                _ = j,
                T = (n('74b7'), n('2877')),
                L = Object(T.a)(_, I, M, false, null, 'def8fa4c', null),
                R = L.exports,
                P = k.a.extend(R),
                D = function (e) {
                    console.info(
                        '箭头函数 Toast(options)',
                        e,
                        'filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/toast/index.js'
                    )
                    e = e || {}
                    'string' === typeof e && (e = { type: e })
                    var t = 'toast_' + Math.random().toString(36).substring(3, 20)
                    r = new P({ data: e })
                    r.id = t
                    r.$mount()
                    var n = document.getElementById('collectiveSpeechContainer')
                    return n && n.appendChild(r.$el), (r.visible = true), r
                }
            D.close = function () {
                r && (r.visible = false)
            }
            var E = D,
                A = (function (e) {
                    Object(s.a)(n, e)
                    var t = Object(c.a)(n)
                    function n() {
                        var e,
                            r =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 Main(opts)',
                                r,
                                'filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/collectiveSpeech.js'
                            ),
                            Object(i.a)(this, n),
                            (e = t.call(this)),
                            (e.options = r),
                            (e.vm = r.vm),
                            (e.isSubmiting = false),
                            e
                        )
                    }
                    return (
                        Object(a.a)(n, [
                            {
                                key: 'interactOpen',
                                value: (function () {
                                    var e = Object(h.a)(
                                        Object(p.a)().mark(function e() {
                                            var t
                                            return Object(p.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (t = {
                                                                        planId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .commonOption.planId,
                                                                        classId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .commonOption.classId,
                                                                        interactId: this.options.ircMsg.interactId,
                                                                    }),
                                                                    (e.next = 3),
                                                                    C(t)
                                                                )
                                                            case 3:
                                                            case 'end':
                                                                return e.stop()
                                                        }
                                                    }
                                                },
                                                e,
                                                this
                                            )
                                        })
                                    )
                                    function t() {
                                        return (
                                            console.info(
                                                '函数申明 interactOpen, filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/collectiveSpeech.js'
                                            ),
                                            e.apply(this, arguments)
                                        )
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'submitSpeech',
                                value: (function () {
                                    var e = Object(h.a)(
                                        Object(p.a)().mark(function e() {
                                            var t
                                            return Object(p.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (!this.isSubmiting) {
                                                                    break
                                                                }
                                                                return (
                                                                    console.info(
                                                                        'if(this.isSubmiting)为true触发return,path: /renderer/components/Classroom/CommonInteractions/collectiveSpeech/collectiveSpeech.js'
                                                                    ),
                                                                    e.abrupt('return')
                                                                )
                                                            case 3:
                                                                return (
                                                                    (this.isSubmiting = true),
                                                                    (t = {
                                                                        planId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .commonOption.planId,
                                                                        classId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .commonOption.classId,
                                                                        interactId: this.options.ircMsg.interactId,
                                                                    }),
                                                                    (e.next = 7),
                                                                    x(t)
                                                                )
                                                            case 7:
                                                                this.isSubmiting = false
                                                            case 8:
                                                            case 'end':
                                                                return e.stop()
                                                        }
                                                    }
                                                },
                                                e,
                                                this
                                            )
                                        })
                                    )
                                    function t() {
                                        return (
                                            console.info(
                                                '函数申明 submitSpeech, filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/collectiveSpeech.js'
                                            ),
                                            e.apply(this, arguments)
                                        )
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'closeToast',
                                value: function () {
                                    return E.close()
                                },
                            },
                        ]),
                        n
                    )
                })(g.a),
                $ = n('230e'),
                B = n('3b29'),
                N = n('3898'),
                z = n('d0db'),
                F = {
                    name: 'CollectiveSpeech',
                    i18n: N.b,
                    props: {
                        options: {
                            type: Object,
                            default: function () {
                                return {}
                            },
                        },
                    },
                    data: function () {
                        return {
                            encourageTimer: null,
                            hasAudio: false,
                            microphoneAccess: true,
                            mainTeacher: this.$t('common.MasterTeacher'),
                        }
                    },
                    components: { MediaSecurityAccess: B.a },
                    created: function () {
                        this.collectiveSpeech = new A(Object(o.a)({}, this.options))
                    },
                    mounted: function () {
                        var e = this
                        this.$nextTick(function () {
                            e.collectiveSpeech.interactOpen()
                            e.$bus.$emit('groupSpeakStatus', true)
                            e.initCollectiveSpeech()
                            e.sendLogger('开始互动', 'start')
                        })
                    },
                    methods: {
                        initCollectiveSpeech: function () {
                            var e = this
                            return Object(h.a)(
                                Object(p.a)().mark(function t() {
                                    var n
                                    return Object(p.a)().wrap(function (t) {
                                        while (1) {
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 initCollectiveSpeech,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                                                        ),
                                                        (t.next = 3),
                                                        d.nativeApi.getMediaAccessStatus('microphone')
                                                    )
                                                case 3:
                                                    if (((n = t.sent), 'granted' === n)) {
                                                        t.next = 10
                                                        break
                                                    }
                                                    return (
                                                        console.info(
                                                            "if(microphoneAccess !== 'granted')为true触发return,path: /renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue"
                                                        ),
                                                        e.sendLogger(
                                                            '集体发言初始化麦克风无权限\uFF0Ccode:'.concat(n),
                                                            'init'
                                                        ),
                                                        Object($.a)({
                                                            msg: e.$t(
                                                                'classroom.interactions.collectiveSpeech.permissionDeniedTips'
                                                            ),
                                                            duration: 0,
                                                        }),
                                                        (e.microphoneAccess = false),
                                                        t.abrupt('return')
                                                    )
                                                case 10:
                                                    e.$refs.speechStart.play(),
                                                        m.a.init({
                                                            autoOpen: true,
                                                            effective: 1,
                                                            waveConfig: [
                                                                {
                                                                    elem: 'waveContent',
                                                                    lineRound: true,
                                                                    lineCount: 4,
                                                                    lineRatio: 0.6,
                                                                    position: -1,
                                                                    strokeColor: '#ffffff',
                                                                },
                                                            ],
                                                        }),
                                                        m.a.on('open', function () {
                                                            console.info(
                                                                '箭头函数 监听 open,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                                                            )
                                                            m.a.start()
                                                            e.getEncourage()
                                                        }),
                                                        m.a.once('input', function () {
                                                            console.info(
                                                                '箭头函数 监听 input,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                                                            )
                                                            e.clearEncourageTimer()
                                                            e.collectiveSpeech.submitSpeech()
                                                        })
                                                case 14:
                                                case 'end':
                                                    return t.stop()
                                            }
                                        }
                                    }, t)
                                })
                            )()
                        },
                        getEncourage: function () {
                            console.info(
                                '对象函数 getEncourage,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                            )
                            this.clearEncourageTimer()
                            this.encourageTimer = setTimeout(function () {
                                E({ type: 'encourage' })
                            }, 3000)
                        },
                        clearEncourageTimer: function () {
                            console.info(
                                '对象函数 clearEncourageTimer,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                            )
                            this.encourageTimer &&
                                (clearTimeout(this.encourageTimer),
                                    (this.encourageTimer = null))
                        },
                        destroyInteraction: function () {
                            var e = this
                            console.info(
                                '对象函数 destroyInteraction,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                            )
                            this.$bus.$emit('groupSpeakStatus', false)
                            $.a.close()
                            this.collectiveSpeech.closeToast()
                            m.a.close()
                            this.clearEncourageTimer()
                            this.hasAudio
                                ? (this.$refs.speechJoin.play(), E({ type: 'join' }))
                                : (this.$refs.speechNotJoin.play(), E({ type: 'notjoin' }))
                            var t = setTimeout(function () {
                                e.collectiveSpeech.closeToast()
                                e.destroy()
                                clearTimeout(t)
                                t = null
                                e.sendLogger('结束互动', 'end')
                            }, 3000)
                        },
                        sendLogger: function (e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : ''
                            z.a.send({
                                tag: 'student.Interact',
                                content: {
                                    msg: e,
                                    interactType: 'Groupaudio',
                                    interactId: this.options.ircMsg.interactId,
                                    interactStage: t,
                                },
                            })
                        },
                        destroy: function () {
                            var e, t
                            console.info(
                                '对象函数 destroy,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/app.vue'
                            )
                            this.$destroy()
                            null === (e = this.$el) ||
                                void 0 === e ||
                                null === (t = e.parentNode) ||
                                void 0 === t ||
                                t.removeChild(this.$el)
                        },
                    },
                },
                U = F,
                H = (n('e4a3'), Object(T.a)(U, l, f, false, null, '2e7b38ce', null)),
                G = H.exports,
                J = (function (e) {
                    Object(s.a)(n, e)
                    var t = Object(c.a)(n)
                    function n() {
                        var e,
                            r =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 CollectiveSpeech(opts)',
                                r,
                                'filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/index.js'
                            ),
                            Object(i.a)(this, n),
                            (e = t.call(this, G)),
                            (e.options = r),
                            (e.dom = r.roomMessage.roomInfo.interactionController),
                            e.initVmApp('集体发言'),
                            e
                        )
                    }
                    return (
                        Object(a.a)(n, [
                            {
                                key: 'createPropsData',
                                value: function () {
                                    var e = {
                                        next: 3,
                                        hasAudio: true,
                                    }
                                    return Object(o.a)({ options: this.options }, e)
                                },
                            },
                        ]),
                        n
                    )
                })(u.a)
        },
    },
])
