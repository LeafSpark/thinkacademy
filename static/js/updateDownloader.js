; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-1e986d02'],
    {
        '0094': function (e, t, n) {
            'use strict'
            var r,
                i = n('bb2f'),
                a = n('da84'),
                c = n('e330'),
                u = n('6964'),
                o = n('f183'),
                E = n('6d61'),
                _ = n('acac'),
                s = n('861d'),
                O = n('69f3').enforce,
                f = n('d039'),
                A = n('cdce'),
                l = Object,
                p = Array.isArray,
                R = l.isExtensible,
                d = l.isFrozen,
                D = l.isSealed,
                L = l.freeze,
                h = l.seal,
                N = {},
                T = {},
                S = !a.ActiveXObject && 'ActiveXObject' in a,
                v = function (e) {
                    return function () {
                        return e(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                I = E('WeakMap', v, _),
                W = I.prototype,
                b = c(W.set),
                C = function () {
                    return (
                        i &&
                        f(function () {
                            var e = L([])
                            return b(new I(), e, 1), !d(e)
                        })
                    )
                }
            if (A) {
                if (S) {
                    r = _.getConstructor(v, 'WeakMap', true)
                    o.enable()
                    var P = c(W.delete),
                        w = c(W.has),
                        j = c(W.get)
                    u(W, {
                        delete: function (e) {
                            if (s(e) && !R(e)) {
                                var t = O(this)
                                return (
                                    t.frozen || (t.frozen = new r()),
                                    P(this, e) || t.frozen.delete(e)
                                )
                            }
                            return P(this, e)
                        },
                        has: function (e) {
                            if (s(e) && !R(e)) {
                                var t = O(this)
                                return (
                                    t.frozen || (t.frozen = new r()),
                                    w(this, e) || t.frozen.has(e)
                                )
                            }
                            return w(this, e)
                        },
                        get: function (e) {
                            if (s(e) && !R(e)) {
                                var t = O(this)
                                return (
                                    t.frozen || (t.frozen = new r()),
                                    w(this, e) ? j(this, e) : t.frozen.get(e)
                                )
                            }
                            return j(this, e)
                        },
                        set: function (e, t) {
                            if (s(e) && !R(e)) {
                                var n = O(this)
                                n.frozen || (n.frozen = new r())
                                w(this, e) ? b(this, e, t) : n.frozen.set(e, t)
                            } else {
                                b(this, e, t)
                            }
                            return this
                        },
                    })
                } else {
                    C() &&
                        u(W, {
                            set: function (e, t) {
                                var n
                                return (
                                    p(e) && (d(e) ? (n = N) : D(e) && (n = T)),
                                    b(this, e, t),
                                    n == N && L(e),
                                    n == T && h(e),
                                    this
                                )
                            },
                        })
                }
            }
        },
        '10d1': function (e, t, n) {
            n('0094')
        },
        2103: function (e, t, n) {
            'use strict'
            var r = n('c7eb'),
                i = n('1da1'),
                a = n('d4ec'),
                c = n('bee2'),
                u = n('262e'),
                o = n('2caf'),
                E =
                    (n('f8c9'),
                        n('fb6a'),
                        n('ac1f'),
                        n('5319'),
                        n('caad'),
                        n('2532'),
                        n('5d41'),
                        n('d3b7'),
                        n('34bb')),
                _ = n('a32b'),
                s = n('ff4a'),
                A =
                    ('CHANGE_WINDOW_STATE',
                        'EXIT_APP',
                        'SET_WINDOW_SIZE',
                        'CLOSE_WINDOW',
                        'RELAUNCH_APP',
                        'SET_ALWAYS_ON_TOP',
                        'RELOAD_PAGE',
                        'SET_WINDOW_ABLE',
                        'SET_WINDOW_POSITION',
                        'SET_WINDOW_BOUNDS',
                        'SAVE_DIALOG_OPEN',
                        'OPEN_DIALOG',
                        'CLEAN_CACHE',
                        'EXTRACT_ZIP_NEW',
                        f.CHECK_NET_SPEED,
                        'GET_MEDIA_ACCESS',
                        'GET_COURSEWARE_URLS',
                        'CHECK_COURSEWARE',
                        'DOWNLOAD_COURSEWARE',
                        'DOWNLOAD_FILES',
                        n('5070')),
                l = n('83ef'),
                p = (function (e) {
                    Object(u.a)(n, e)
                    var t = Object(o.a)(n)
                    function n() {
                        var e
                        return (
                            Object(a.a)(this, n), (e = t.call(this)), e.getAppTempDir(), e
                        )
                    }
                    return (
                        Object(c.a)(n, [
                            {
                                key: 'getAppTempDir',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e() {
                                            return Object(r.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.next = 2),
                                                                    E.ipcRenderer.invoke('GET_APP_USERDATA_PATH')
                                                                )
                                                            case 2:
                                                                return (
                                                                    (this.appUserDataPath = e.sent),
                                                                    (e.next = 5),
                                                                    E.ipcRenderer.invoke('GET_APP_TEMP_PATH')
                                                                )
                                                            case 5:
                                                                this.appTempPath = e.sent
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
                                    function t() {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'removeListener',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : ''
                                    e && this.removeAllListeners(e)
                                },
                            },
                            {
                                key: '_emitEvents',
                                value: function (e, t) {
                                    var n = this,
                                        r = {
                                            start: function (e) {
                                                'function' === typeof t.start && t.start(e)
                                            },
                                            progress: function (e) {
                                                'function' === typeof t.progress && t.progress(e)
                                            },
                                            complete: function (n) {
                                                'function' === typeof t.complete && t.complete(n)
                                                !t.extract && E.ipcRenderer.removeAllListeners(e)
                                            },
                                            fail: function (n) {
                                                'function' === typeof t.fail && t.fail(n)
                                                E.ipcRenderer.removeAllListeners(e)
                                            },
                                            pause: function (e) {
                                                'function' === typeof t.pause && t.pause(e)
                                            },
                                            exists: function (n) {
                                                'function' === typeof t.exists && t.exists(n)
                                                E.ipcRenderer.removeAllListeners(e)
                                            },
                                            extract: function (n) {
                                                'function' === typeof t.extract && t.extract(n)
                                                E.ipcRenderer.removeAllListeners(e)
                                            },
                                        }
                                    E.ipcRenderer.removeAllListeners(e)
                                    E.ipcRenderer.on(e, function (t, i, a) {
                                        return n.emit(e, i), r[a](i)
                                    })
                                },
                            },
                            {
                                key: 'checkFileName',
                                value: function (e) {
                                    var t = e
                                    return (
                                        e.length && '.' === e[0] && (t = e.slice(1)),
                                        t.replace(/[<>:"\\/\\|?*]+/g, '')
                                    )
                                },
                            },
                            {
                                key: '_downloadFile',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e(t) {
                                            var n
                                            return Object(r.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    this._emitEvents(t.fileURL, t),
                                                                    (e.next = 3),
                                                                    E.ipcRenderer.invoke('DOWNLOAD_FILES', {
                                                                        fileURL: t.fileURL,
                                                                        fileMD5: t.fileMD5 || null,
                                                                        savePath: t.savePath,
                                                                        saveName: this.checkFileName(
                                                                            t.saveName || ''
                                                                        ),
                                                                        retry: t.retry || 10,
                                                                        interval: t.interval || 1000,
                                                                        headers: t.headers || {
                                                                            'User-Agent': 'neosjs-downloader',
                                                                        },
                                                                        timeout: t.timeout || 300000,
                                                                        needExtract: !(
                                                                            !t.needExtract && !t.extract
                                                                        ),
                                                                    })
                                                                )
                                                            case 3:
                                                                return (n = e.sent), e.abrupt('return', n)
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
                                    function t(t) {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'extractZip',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e(t, n) {
                                            var i,
                                                a,
                                                c,
                                                u = arguments
                                            return Object(r.a)().wrap(function (e) {
                                                while (1) {
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    !(u.length > 2 && void 0 !== u[2]) || u[2]),
                                                                    (a =
                                                                        u.length > 3 && void 0 !== u[3]
                                                                            ? u[3]
                                                                            : null),
                                                                    t && n)
                                                            ) {
                                                                e.next = 4
                                                                break
                                                            }
                                                            return e.abrupt(
                                                                'return',
                                                                Object(A.d)('Invalid params')
                                                            )
                                                        case 4:
                                                            return (
                                                                'function' === typeof i &&
                                                                ((a = i), (i = true)),
                                                                (e.next = 7),
                                                                E.ipcRenderer.invoke('EXTRACT_ZIP_NEW', {
                                                                    zipFilePath: t,
                                                                    destFolder: n,
                                                                    overwrite: i,
                                                                })
                                                            )
                                                        case 7:
                                                            return (
                                                                (c = e.sent),
                                                                Object(A.g)(a) && a(c),
                                                                e.abrupt('return', c)
                                                            )
                                                        case 10:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                                }
                                            }, e)
                                        })
                                    )
                                    function t(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'checkCourseware',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e(t, n) {
                                            var i,
                                                a,
                                                c,
                                                u,
                                                o,
                                                s = arguments
                                            return Object(r.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (
                                                                    ((i =
                                                                        s.length > 2 && void 0 !== s[2]
                                                                            ? s[2]
                                                                            : null),
                                                                        (a = s.length > 3 && void 0 !== s[3] && s[3]),
                                                                        t && n)
                                                                ) {
                                                                    e.next = 4
                                                                    break
                                                                }
                                                                return e.abrupt(
                                                                    'return',
                                                                    Object(A.d)('Invalid params')
                                                                )
                                                            case 4:
                                                                return (
                                                                    'boolean' === typeof i &&
                                                                    ((a = i), (i = null)),
                                                                    (c = Object(_.resolve)(
                                                                        this.appUserDataPath,
                                                                        'courseware'
                                                                    )),
                                                                    (u = Object(_.resolve)(c, t)),
                                                                    (e.next = 9),
                                                                    E.ipcRenderer.invoke('CHECK_COURSEWARE', {
                                                                        zipFilePath: u,
                                                                        fileMD5: n,
                                                                        needDel: a,
                                                                    })
                                                                )
                                                            case 9:
                                                                if (((o = e.sent), !o || !i)) {
                                                                    e.next = 13
                                                                    break
                                                                }
                                                                return (
                                                                    (e.next = 13), this.extractZip(u, i, true)
                                                                )
                                                            case 13:
                                                                return e.abrupt('return', o)
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
                                    function t(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'downloadCourseware',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e(t) {
                                            var n
                                            return Object(r.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (Object(A.h)(t) && t.fileURL && t.fileMD5) {
                                                                    e.next = 2
                                                                    break
                                                                }
                                                                return e.abrupt(
                                                                    'return',
                                                                    Object(A.d)('Invalid params')
                                                                )
                                                            case 2:
                                                                return (
                                                                    (n = Object(_.resolve)(
                                                                        this.appUserDataPath,
                                                                        'courseware'
                                                                    )),
                                                                    !Object(l.existsSync)(this.appUserDataPath) &&
                                                                    Object(l.mkdirSync)(this.appUserDataPath),
                                                                    Object(A.b)(n),
                                                                    (t.savePath = n),
                                                                    delete t.saveName,
                                                                    (e.next = 9),
                                                                    this._downloadFile(t)
                                                                )
                                                            case 9:
                                                                return e.abrupt('return', e.sent)
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
                                    function t(t) {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'downloadUpdates',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e(t) {
                                            var n, i
                                            return Object(r.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (Object(A.h)(t) && t.fileURL) {
                                                                    e.next = 2
                                                                    break
                                                                }
                                                                return e.abrupt(
                                                                    'return',
                                                                    Object(A.d)('Invalid params')
                                                                )
                                                            case 2:
                                                                if (
                                                                    ((n = Object(_.resolve)(
                                                                        this.appTempPath,
                                                                        'updates'
                                                                    )),
                                                                        Object(A.b)(n),
                                                                        Object(A.c)(n),
                                                                        (i = t.fileURL.includes('pc-client')),
                                                                        !i || 'darwin' !== Object(A.f)())
                                                                ) {
                                                                    e.next = 9
                                                                    break
                                                                }
                                                                return (
                                                                    (e.next = 9),
                                                                    this.downloadFile({
                                                                        fileURL:
                                                                            Object(A.e)(t.fileURL) + 'latest-mac.yml',
                                                                        savePath: n,
                                                                    })
                                                                )
                                                            case 9:
                                                                return (
                                                                    (t.savePath = n),
                                                                    (t.needExtract = !i),
                                                                    delete t.fileMD5,
                                                                    delete t.saveName,
                                                                    (e.next = 15),
                                                                    this._downloadFile(t)
                                                                )
                                                            case 15:
                                                                return e.abrupt('return', e.sent)
                                                            case 16:
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
                                    function t(t) {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'downloadFile',
                                value: (function () {
                                    var e = Object(i.a)(
                                        Object(r.a)().mark(function e(t) {
                                            return Object(r.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (Object(A.h)(t) && t.fileURL) {
                                                                    e.next = 2
                                                                    break
                                                                }
                                                                return e.abrupt(
                                                                    'return',
                                                                    Object(A.d)('Invalid params')
                                                                )
                                                            case 2:
                                                                return (e.next = 4), this._downloadFile(t)
                                                            case 4:
                                                                return e.abrupt('return', e.sent)
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
                                    function t(t) {
                                        return e.apply(this, arguments)
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'pause',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : ''
                                    E.ipcRenderer.send('DOWNLOAD_PAUSE', e)
                                },
                            },
                            {
                                key: 'resume',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : ''
                                    E.ipcRenderer.send('DOWNLOAD_RESUME', e)
                                },
                            },
                        ]),
                        n
                    )
                })(s.EventEmitter),
                R = new Proxy(new p(), {
                    get: function (e, t, n) {
                        return Reflect.get(e, t, n)
                    },
                })
            R.ApiName = 'DownLoader'
            R.version = '__VERSION__'
            R.updateTime = '__UPDATE_TIME__'
            t.a = R
        },
        '257e': function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return r
            })
            n('d9e2')
            function r(e) {
                if (void 0 === e) {
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    )
                }
                return e
            }
        },
        '262e': function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return i
            })
            n('d9e2')
            n('131a')
            function r(e, t) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                            return (e.__proto__ = t), e
                        }),
                    r(e, t)
                )
            }
            function i(e, t) {
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
                Object.defineProperty(e, 'prototype', { writable: false })
                t && r(e, t)
            }
        },
        '2caf': function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return o
            })
            n('f8c9')
            n('4ae1')
            n('d3b7')
            n('131a')
            n('3410')
            function r(e) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        }),
                    r(e)
                )
            }
            function i() {
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
                        Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () { })
                        ),
                        true
                    )
                } catch (e) {
                    return false
                }
            }
            n('d9e2')
            var a = n('53ca'),
                c = n('257e')
            function u(e, t) {
                if (t && ('object' === Object(a.a)(t) || 'function' === typeof t)) {
                    return t
                }
                if (void 0 !== t) {
                    throw new TypeError(
                        'Derived constructors may only return object or undefined'
                    )
                }
                return Object(c.a)(e)
            }
            function o(e) {
                var t = i()
                return function () {
                    var n,
                        i = r(e)
                    if (t) {
                        var a = r(this).constructor
                        n = Reflect.construct(i, arguments, a)
                    } else {
                        n = i.apply(this, arguments)
                    }
                    return u(this, n)
                }
            }
        },
        5070: function (e, t, n) {
            'use strict'
            n.d(t, 'd', function () {
                return E
            })
            n.d(t, 'e', function () {
                return s
            })
            n.d(t, 'a', function () {
                return O
            })
            n.d(t, 'b', function () {
                return f
            })
            n.d(t, 'c', function () {
                return A
            })
            n.d(t, 'f', function () {
                return l
            })
            n.d(t, 'h', function () {
                return p
            })
            n.d(t, 'g', function () {
                return R
            })
            var r = n('c7eb'),
                i = n('1da1'),
                a =
                    (n('53ca'),
                        n('14d9'),
                        n('ac1f'),
                        n('5319'),
                        n('d3b7'),
                        n('25f0'),
                        n('4d63'),
                        n('b680'),
                        n('a9e3'),
                        n('1276'),
                        n('e6cf'),
                        n('a15b'),
                        n('e260'),
                        n('3ca3'),
                        n('10d1'),
                        n('ddb0'),
                        n('b64b'),
                        n('8e57')),
                c = n('83ef'),
                u = function (e) {
                    var t = /^\\\\\?\\/.test(e),
                        n = /[^\u0000-\u0080]+/.test(e)
                    return t || n ? e : e.replace(/\\/g, '/')
                },
                o =
                    (Object.prototype.hasOwnProperty,
                        function (e) {
                            return null !== e && 'undefined' !== typeof e ? e.constructor : null
                        }),
                E = function (e) {
                    return [console.error('\u3010 ElectronIpc error \u3011: '.concat(e))]
                },
                _ = function (e) {
                    if (e) {
                        var t = e.split('/'),
                            n = t[t.length - 1]
                        return n
                    }
                },
                s = function (e) {
                    if (e) {
                        e = u(e)
                        var t = _(e),
                            n = e.split(t),
                            r = n[0]
                        return r
                    }
                },
                O = (function () {
                    var e = Object(i.a)(
                        Object(r.a)().mark(function e(t, n, i) {
                            var a, c, u, o
                            return Object(r.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (a = new Image()),
                                                (o = new Promise(function (e) {
                                                    return (a.onload = e)
                                                })),
                                                (a.src = t),
                                                e.abrupt(
                                                    'return',
                                                    o.then(function () {
                                                        c = a.width
                                                        u = a.height
                                                        var e = document.createElement('canvas'),
                                                            t = e.getContext('2d')
                                                        Math.max(c, u) > n
                                                            ? c > u
                                                                ? ((e.width = n), (e.height = (n * u) / c))
                                                                : ((e.height = n), (e.width = (n * c) / u))
                                                            : ((e.width = c), (e.height = u))
                                                        t.clearRect(0, 0, e.width, e.height)
                                                        t.drawImage(a, 0, 0, e.width, e.height)
                                                        var r = e.toDataURL('image/jpeg', i)
                                                        return r
                                                    })
                                                )
                                            )
                                        case 4:
                                        case 'end':
                                            return e.stop()
                                    }
                                }
                            }, e)
                        })
                    )
                    return function (t, n, r) {
                        return e.apply(this, arguments)
                    }
                })(),
                f = function (e) {
                    return !Object(c.existsSync)(e) && Object(c.mkdirSync)(e)
                },
                A = function (e) {
                    return Object(c.existsSync)(e) && Object(c.emptyDirSync)(e)
                },
                l = function () {
                    return Object(a.platform)()
                },
                p = function (e) {
                    return o(e) === Object
                },
                R = function (e) {
                    return o(e) === Function
                }
        },
        '5d41': function (e, t, n) {
            var r = n('23e7'),
                i = n('c65b'),
                a = n('861d'),
                c = n('825a'),
                u = n('c60d'),
                o = n('06cf'),
                E = n('e163')
            function _(e, t) {
                var n,
                    r,
                    s = arguments.length < 3 ? e : arguments[2]
                return c(e) === s
                    ? e[t]
                    : ((n = o.f(e, t)),
                        n
                            ? u(n)
                                ? n.value
                                : void 0 === n.get
                                    ? void 0
                                    : i(n.get, s)
                            : a((r = E(e)))
                                ? _(r, t, s)
                                : void 0)
            }
            r(
                {
                    target: 'Reflect',
                    stat: true,
                },
                { get: _ }
            )
        },
        acac: function (e, t, n) {
            'use strict'
            var r = n('e330'),
                i = n('6964'),
                a = n('f183').getWeakData,
                c = n('19aa'),
                u = n('825a'),
                o = n('7234'),
                E = n('861d'),
                _ = n('2266'),
                s = n('b727'),
                O = n('1a2d'),
                f = n('69f3'),
                A = f.set,
                l = f.getterFor,
                p = s.find,
                R = s.findIndex,
                d = r([].splice),
                D = 0,
                L = function (e) {
                    return e.frozen || (e.frozen = new h())
                },
                h = function () {
                    this.entries = []
                },
                N = function (e, t) {
                    return p(e.entries, function (e) {
                        return e[0] === t
                    })
                }
            h.prototype = {
                get: function (e) {
                    var t = N(this, e)
                    if (t) {
                        return t[1]
                    }
                },
                has: function (e) {
                    return !!N(this, e)
                },
                set: function (e, t) {
                    var n = N(this, e)
                    n ? (n[1] = t) : this.entries.push([e, t])
                },
                delete: function (e) {
                    var t = R(this.entries, function (t) {
                        return t[0] === e
                    })
                    return ~t && d(this.entries, t, 1), !!~t
                },
            }
            e.exports = {
                getConstructor: function (e, t, n, r) {
                    var s = e(function (e, i) {
                        c(e, f)
                        A(e, {
                            type: t,
                            id: D++,
                            frozen: void 0,
                        })
                        o(i) ||
                            _(i, e[r], {
                                that: e,
                                AS_ENTRIES: n,
                            })
                    }),
                        f = s.prototype,
                        p = l(t),
                        R = function (e, t, n) {
                            var r = p(e),
                                i = a(u(t), true)
                            return true === i ? L(r).set(t, n) : (i[r.id] = n), e
                        }
                    return (
                        i(f, {
                            delete: function (e) {
                                var t = p(this)
                                if (!E(e)) {
                                    return false
                                }
                                var n = a(e)
                                return true === n
                                    ? L(t).delete(e)
                                    : n && O(n, t.id) && delete n[t.id]
                            },
                            has: function (e) {
                                var t = p(this)
                                if (!E(e)) {
                                    return false
                                }
                                var n = a(e)
                                return true === n ? L(t).has(e) : n && O(n, t.id)
                            },
                        }),
                        i(
                            f,
                            n
                                ? {
                                    get: function (e) {
                                        var t = p(this)
                                        if (E(e)) {
                                            var n = a(e)
                                            return true === n ? L(t).get(e) : n ? n[t.id] : void 0
                                        }
                                    },
                                    set: function (e, t) {
                                        return R(this, e, t)
                                    },
                                }
                                : {
                                    add: function (e) {
                                        return R(this, e, true)
                                    },
                                }
                        ),
                        s
                    )
                },
            }
        },
        c60d: function (e, t, n) {
            var r = n('1a2d')
            e.exports = function (e) {
                return void 0 !== e && (r(e, 'value') || r(e, 'writable'))
            }
        },
    },
])
