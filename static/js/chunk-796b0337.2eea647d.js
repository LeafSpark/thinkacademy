; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-796b0337'],
    {
        1276: function (e, t, a) {
            'use strict'
            var n = a('2ba4'),
                o = a('c65b'),
                s = a('e330'),
                r = a('d784'),
                i = a('825a'),
                l = a('7234'),
                c = a('44e7'),
                d = a('1d80'),
                u = a('4840'),
                f = a('8aa5'),
                p = a('50c4'),
                h = a('577e'),
                m = a('dc4a'),
                v = a('4dae'),
                w = a('14c3'),
                g = a('9263'),
                b = a('9f7f'),
                y = a('d039'),
                C = b.UNSUPPORTED_Y,
                A = Math.min,
                _ = [].push,
                k = s(/./.exec),
                P = s(_),
                L = s(''.slice),
                x = !y(function () {
                    var t = /(?:)/.exec
                        ; /(?:)/.exec = function () {
                            return t.apply(this, arguments)
                        }
                    var a = 'ab'.split(/(?:)/)
                    return 2 !== a.length || 'a' !== a[0] || 'b' !== a[1]
                })
            r(
                'split',
                function (e, t, a) {
                    var s
                    return (
                        (s =
                            'c' == 'abbc'.split(/(b)*/)[1] ||
                                4 != 'test'.split(/(?:)/, -1).length ||
                                2 != 'ab'.split(/(?:ab)*/).length ||
                                4 != '.'.split(/(.?)(.?)/).length ||
                                '.'.split(/()()/).length > 1 ||
                                ''.split(/.?/).length
                                ? function (e, a) {
                                    var s = h(d(this)),
                                        r = void 0 === a ? 4294967295 : a >>> 0
                                    if (0 === r) {
                                        return []
                                    }
                                    if (void 0 === e) {
                                        return [s]
                                    }
                                    if (!c(e)) {
                                        return o(t, s, e, r)
                                    }
                                    var i,
                                        l,
                                        u,
                                        f = [],
                                        p =
                                            (e.ignoreCase ? 'i' : '') +
                                            (e.multiline ? 'm' : '') +
                                            (e.unicode ? 'u' : '') +
                                            (e.sticky ? 'y' : ''),
                                        m = 0,
                                        w = new RegExp(e.source, p + 'g')
                                    while ((i = o(g, w, s))) {
                                        if (
                                            ((l = w.lastIndex),
                                                l > m &&
                                                (P(f, L(s, m, i.index)),
                                                    i.length > 1 &&
                                                    i.index < s.length &&
                                                    n(_, f, v(i, 1)),
                                                    (u = i[0].length),
                                                    (m = l),
                                                    f.length >= r))
                                        ) {
                                            break
                                        }
                                        w.lastIndex === i.index && w.lastIndex++
                                    }
                                    return (
                                        m === s.length
                                            ? (!u && k(w, '')) || P(f, '')
                                            : P(f, L(s, m)),
                                        f.length > r ? v(f, 0, r) : f
                                    )
                                }
                                : '0'.split(void 0, 0).length
                                    ? function (e, a) {
                                        return void 0 === e && 0 === a ? [] : o(t, this, e, a)
                                    }
                                    : t),
                        [
                            function (t, a) {
                                var n = d(this),
                                    r = l(t) ? void 0 : m(t, e)
                                return r ? o(r, t, n, a) : o(s, h(n), t, a)
                            },
                            function (e, n) {
                                var o = i(this),
                                    r = h(e),
                                    l = a(s, o, r, n, s !== t)
                                if (l.done) {
                                    return l.value
                                }
                                var c = u(o, RegExp),
                                    d = o.unicode,
                                    m =
                                        (o.ignoreCase ? 'i' : '') +
                                        (o.multiline ? 'm' : '') +
                                        (o.unicode ? 'u' : '') +
                                        (C ? 'g' : 'y'),
                                    v = new c(C ? '^(?:' + o.source + ')' : o, m),
                                    g = void 0 === n ? 4294967295 : n >>> 0
                                if (0 === g) {
                                    return []
                                }
                                if (0 === r.length) {
                                    return null === w(v, r) ? [r] : []
                                }
                                var b = 0,
                                    y = 0,
                                    _ = []
                                while (y < r.length) {
                                    v.lastIndex = C ? 0 : y
                                    var k,
                                        x = w(v, C ? L(r, y) : r)
                                    if (
                                        null === x ||
                                        (k = A(p(v.lastIndex + (C ? y : 0)), r.length)) === b
                                    ) {
                                        y = f(r, y, d)
                                    } else {
                                        if ((P(_, L(r, b, y)), _.length === g)) {
                                            return _
                                        }
                                        for (var I = 1; I <= x.length - 1; I++) {
                                            if ((P(_, x[I]), _.length === g)) {
                                                return _
                                            }
                                        }
                                        y = b = k
                                    }
                                }
                                return P(_, L(r, b)), _
                            },
                        ]
                    )
                },
                !x,
                C
            )
        },
        '17c8': function (e, t, a) { },
        '28bc': function (e, t, a) { },
        4753: function (e, t, a) { },
        '8f7c': function (e, t, a) {
            'use strict'
            a('28bc')
        },
        a9c5: function (e, t, a) {
            'use strict'
            a('4753')
        },
        aaf0: function (e, t, a) {
            'use strict'
            var n = function () {
                var e = this,
                    t = e._self._c
                return t(
                    'div',
                    {
                        class: ['error-wrapper', e.bgWhiteAuth ? 'bg-white' : ''],
                    },
                    [
                        t('div', { staticClass: 'center' }, [
                            t('div', { staticClass: 'error-status' }),
                            t('div', { staticClass: 'message' }, [
                                t('div', { staticClass: 'message-main' }, [
                                    e._v(e._s(e.message)),
                                ]),
                                e.scene
                                    ? t('p', { staticClass: 'message-sub' }, [
                                        e._v(
                                            ' ' +
                                            e._s('Scene: '.concat(e.scene, '.')) +
                                            ' ' +
                                            e._s(e.subMessage) +
                                            ' '
                                        ),
                                    ])
                                    : e._e(),
                            ]),
                            t(
                                'div',
                                { staticClass: 'button-wrapper' },
                                [
                                    e.showRefresh
                                        ? t(
                                            'a-button',
                                            {
                                                class:
                                                    e.showBack || e.isClassLiveOrPlayback
                                                        ? 'mr40'
                                                        : '',
                                                attrs: {
                                                    type: 'primary',
                                                    shape: 'round',
                                                    size: 'large',
                                                },
                                                on: { click: e.handleRefresh },
                                            },
                                            [e._v(' ' + e._s(e.$t('common.refresh')) + ' ')]
                                        )
                                        : e._e(),
                                    e.showBack || e.isClassLiveOrPlayback
                                        ? t(
                                            'a-button',
                                            {
                                                staticClass: 'color-orange',
                                                attrs: {
                                                    shape: 'round',
                                                    size: 'large',
                                                },
                                                on: { click: e.handleBack },
                                            },
                                            [
                                                e._v(
                                                    ' ' +
                                                    e._s(
                                                        e.isClassLiveOrPlayback
                                                            ? e.$t(
                                                                'classroom.modules.systemError.backButtonName'
                                                            )
                                                            : e.$t('common.back')
                                                    ) +
                                                    ' '
                                                ),
                                            ]
                                        )
                                        : e._e(),
                                ],
                                1
                            ),
                        ]),
                    ]
                )
            },
                o = [],
                s =
                    (a('14d9'),
                        a('caad'),
                    {
                        name: 'ErrorStatus',
                        props: {
                            message: {
                                type: String,
                                default: function () {
                                    return (
                                        console.info(
                                            '对象函数 default,filePath:renderer/components/Common/ErrorStatus.vue'
                                        ),
                                        this.$t('common.components.errorStatus.message')
                                    )
                                },
                            },
                            isClassLiveOrPlayback: {
                                type: Boolean,
                                default: false,
                            },
                            scene: {
                                type: String,
                                default: '',
                            },
                            subMessage: {
                                type: String,
                                default: '',
                            },
                            showRefresh: {
                                type: Boolean,
                                default: true,
                            },
                            showBack: {
                                type: Boolean,
                                default: false,
                            },
                            backUrl: {
                                type: String,
                                default: '',
                            },
                        },
                        computed: {
                            bgWhiteAuth: function () {
                                return (
                                    console.info(
                                        '对象函数 bgWhiteAuth,filePath:renderer/components/Common/ErrorStatus.vue'
                                    ),
                                    [
                                        'ClassLiving',
                                        'PlaybackReadyClass',
                                        'LivingReadyClass',
                                        'PlayBack',
                                    ].includes(this.scene)
                                )
                            },
                        },
                        methods: {
                            handleRefresh: function () {
                                console.info(
                                    '对象函数 handleRefresh,filePath:renderer/components/Common/ErrorStatus.vue'
                                )
                                this.isClassLiveOrPlayback
                                    ? window.location.reload()
                                    : this.$emit('click-refresh')
                            },
                            handleBack: function () {
                                console.info(
                                    '对象函数 handleBack,filePath:renderer/components/Common/ErrorStatus.vue'
                                )
                                this.isClassLiveOrPlayback
                                    ? (window.location.href = ''.concat(
                                        window.location.origin,
                                        '/#/courses'
                                    ))
                                    : this.$router.push({ path: this.backUrl })
                            },
                        },
                    }),
                r = s,
                i = (a('dc2d'), a('2877')),
                l = Object(i.a)(r, n, o, false, null, 'f910b7da', null)
            t.a = l.exports
        },
        bd12: function (e, t, a) {
            'use strict'
            var n = function () {
                var e = this,
                    t = e._self._c
                return e.show
                    ? t(
                        'div',
                        {
                            staticClass: 'loading-wrapper',
                            class: e.className,
                            style: e.loadingStyle,
                        },
                        [e._m(0)]
                    )
                    : e._e()
            },
                o = [
                    function () {
                        var e = this,
                            t = e._self._c
                        return t('div', { staticClass: 'loading-contenter' }, [
                            t('div', { staticClass: 'loading-logo' }, [
                                t('img', { attrs: { src: a('c63e') } }),
                            ]),
                            t('div', { staticClass: 'loading-animation' }),
                        ])
                    },
                ],
                s = {
                    name: 'Loading',
                    props: {
                        show: {
                            default: true,
                            type: Boolean,
                        },
                        size: {
                            default: 'default',
                            type: String,
                            validator: function (e) {
                                return (
                                    console.info(
                                        '对象函数 validator(value)',
                                        e,
                                        'filePath:renderer/components/Common/Loading.vue'
                                    ),
                                    -1 !== ['small', 'default'].indexOf(e)
                                )
                            },
                        },
                        marginTop: {
                            default: '0',
                            type: String,
                        },
                        marginBottom: {
                            default: '0',
                            type: String,
                        },
                    },
                    computed: {
                        className: function () {
                            return (
                                console.info(
                                    '对象函数 className,filePath:renderer/components/Common/Loading.vue'
                                ),
                                'loading-'.concat(this.size)
                            )
                        },
                        loadingStyle: function () {
                            return (
                                console.info(
                                    '对象函数 loadingStyle,filePath:renderer/components/Common/Loading.vue'
                                ),
                                {
                                    marginTop: this.marginTop,
                                    marginBottom: this.marginBottom,
                                }
                            )
                        },
                    },
                },
                r = s,
                i = (a('f761'), a('2877')),
                l = Object(i.a)(r, n, o, false, null, '92d727e8', null)
            t.a = l.exports
        },
        c63e: function (e, t) {
            e.exports =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP/DL//DLv/BL//DLv/EL//DL//DLv/DL//CLv/DL//DL//CLf/DL//DL//DL//DLv/DL//DMv/DMGSQIxsAAAATdFJOUwDwcSTeYM1AwICojww0SLNSmhsrwQ8LAAABI0lEQVRYw+3X2a6DIBCAYbaBYXXh/d/1aE3UxtbjMhdtOv+l6BeiiYAQ5+tzLwhK2oGKjTW1Vn/HyQV8NzlzF8HRkfVV10BX38Ygg18FptICKB+70OAWDD4GNPIMaJentyAuv4l8FKx7IIjYdB7a3CdBArplWFoMUYHTiQhcZdDTgqt3yyCDdgTlkBmy1iLeBIcJ7Q6fB2txzpGCYwz+HuhWAR4BcR98LhwAU6vGlXIDaruZexBwAJy35dN2WtadNX++iESbiK8BDRYyULWXT0AvwTsxyCCDnwJaUhAjaCrQBFWSuNsESoytFiRpYzqVxc/kh0Mipaemj2tDHE62iWKCh7daDDLI4CeDhRoUPXSWFHysASpIUnAsK6QFp+Pjf3f8AVRMjNs7xw9TAAAAAElFTkSuQmCC'
        },
        cf2d: function (e, t, a) {
            'use strict'
            a.r(t)
            a('b0c0')
            var n = function () {
                var e,
                    t,
                    a,
                    n,
                    o = this,
                    s = o._self._c
                return s(
                    'div',
                    { staticClass: 'resource-wrapper' },
                    [
                        o.isError
                            ? [
                                s('ErrorStatus', {
                                    attrs: { scene: 'StudyResources' },
                                    on: { 'click-refresh': o.getResourcesList },
                                }),
                            ]
                            : s('div', { staticClass: 'resource-inner' }, [
                                s(
                                    'div',
                                    { staticClass: 'resource-content' },
                                    [
                                        o.loading
                                            ? s('Loading', { attrs: { 'margin-top': '200px' } })
                                            : [
                                                o.courseDetailData.planInfo
                                                    ? s('div', { staticClass: 'syllabus-card' }, [
                                                        s('div', { staticClass: 'number' }, [
                                                            s('label'),
                                                            s('span', [
                                                                o._v(
                                                                    o._s(
                                                                        o.courseDetailData.planInfo.order
                                                                    )
                                                                ),
                                                            ]),
                                                        ]),
                                                        s('div', { staticClass: 'syllabus-info' }, [
                                                            s('div', { staticClass: 'title' }, [
                                                                o._v(
                                                                    ' ' +
                                                                    o._s(
                                                                        o.courseDetailData.planInfo.name
                                                                    ) +
                                                                    ' '
                                                                ),
                                                            ]),
                                                            s('div', { staticClass: 'datetime' }, [
                                                                s('span', { staticClass: 'content' }, [
                                                                    o._v(
                                                                        o._s(
                                                                            o.courseDetailData.planInfo
                                                                                .startTime
                                                                        )
                                                                    ),
                                                                ]),
                                                            ]),
                                                        ]),
                                                    ])
                                                    : o._e(),
                                                null !== (e = o.courseDetailData) &&
                                                    void 0 !== e &&
                                                    null !== (t = e.planBlackboards) &&
                                                    void 0 !== t &&
                                                    t.length
                                                    ? s('div', [
                                                        s(
                                                            'div',
                                                            { staticClass: 'download-title' },
                                                            [
                                                                o._v(
                                                                    o._s(
                                                                        o.$t('courses.detail.classNotes')
                                                                    )
                                                                ),
                                                            ]
                                                        ),
                                                        s(
                                                            'div',
                                                            { staticClass: 'download' },
                                                            o._l(
                                                                o.courseDetailData.planBlackboards,
                                                                function (e, t) {
                                                                    return s('DownloadCard', {
                                                                        key: t,
                                                                        staticClass: 'downloadCard',
                                                                        attrs: {
                                                                            downloadItem: e,
                                                                            burryPointData: o.burryPointData,
                                                                        },
                                                                        on: {
                                                                            openVideo: function (t) {
                                                                                return o.openVideo(
                                                                                    e.fileUrl,
                                                                                    e.name
                                                                                )
                                                                            },
                                                                        },
                                                                    })
                                                                }
                                                            ),
                                                            1
                                                        ),
                                                    ])
                                                    : o._e(),
                                                null !== (a = o.courseDetailData) &&
                                                    void 0 !== a &&
                                                    null !== (n = a.materials) &&
                                                    void 0 !== n &&
                                                    n.length
                                                    ? s('div', [
                                                        s(
                                                            'div',
                                                            { staticClass: 'download-title' },
                                                            [
                                                                o._v(
                                                                    o._s(
                                                                        o.$t(
                                                                            'courses.detail.learningMaterials'
                                                                        )
                                                                    )
                                                                ),
                                                            ]
                                                        ),
                                                        s(
                                                            'div',
                                                            { staticClass: 'download' },
                                                            o._l(
                                                                o.courseDetailData.materials,
                                                                function (e, t) {
                                                                    return s('DownloadCard', {
                                                                        key: t,
                                                                        staticClass: 'downloadCard',
                                                                        attrs: {
                                                                            downloadItem: e,
                                                                            burryPointData: o.burryPointData,
                                                                        },
                                                                        on: {
                                                                            openVideo: function (t) {
                                                                                return o.openVideo(
                                                                                    e.fileUrl,
                                                                                    e.name
                                                                                )
                                                                            },
                                                                        },
                                                                    })
                                                                }
                                                            ),
                                                            1
                                                        ),
                                                    ])
                                                    : o._e(),
                                            ],
                                    ],
                                    2
                                ),
                            ]),
                        s(
                            'section',
                            {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: o.showVideo,
                                        expression: 'showVideo',
                                    },
                                ],
                                on: { keydown: o.keyDown },
                            },
                            [
                                s('div', { staticClass: 'video-title' }, [
                                    s('span', [o._v(o._s(o.fileName))]),
                                    s('div', {
                                        staticClass: 'close',
                                        on: { click: o.closeVideo },
                                    }),
                                ]),
                                s(
                                    'video',
                                    {
                                        staticClass: 'video-js',
                                        attrs: { id: 'myVideo' },
                                    },
                                    [
                                        s('source', {
                                            attrs: {
                                                src: o.fileUrl,
                                                type: 'application/x-mpegURL',
                                            },
                                        }),
                                    ]
                                ),
                            ]
                        ),
                    ],
                    2
                )
            },
                o = [],
                s = a('c7eb'),
                r = a('1da1'),
                i = function () {
                    var e = this,
                        t = e._self._c
                    return e.downloadItem
                        ? t(
                            'div',
                            {
                                staticClass: 'download-wrapper',
                                class: e.downloadItem.fileExt
                                    ? ''.concat(e.downloadItem.fileExt, '_wrapper')
                                    : 'pdf_wrapper',
                            },
                            [
                                t('div', { staticClass: 'inner' }, [
                                    t('span', { staticClass: 'common_icon file_icon' }),
                                    t('div', { staticClass: 'classinfo' }, [
                                        t('span', { staticClass: 'title' }, [
                                            e._v(e._s(e.downloadItem.name)),
                                        ]),
                                        t('label', [
                                            t('span', [e._v(e._s(e.downloadItem.uploadTime))]),
                                            t('span', [e._v(e._s(e.downloadItem.size))]),
                                        ]),
                                    ]),
                                    t(
                                        'div',
                                        {
                                            staticClass: 'download_btn',
                                            on: {
                                                click: function (t) {
                                                    return e.downloadFile(e.downloadItem.fileCate)
                                                },
                                            },
                                        },
                                        [
                                            e.downloadLoading
                                                ? 1 == e.downloadItem.fileCate
                                                    ? t('a-icon', {
                                                        staticClass: 'downloadLoading',
                                                        staticStyle: { 'font-size': '14px' },
                                                        attrs: {
                                                            slot: 'indicator',
                                                            type: 'loading',
                                                            spin: '',
                                                        },
                                                        slot: 'indicator',
                                                    })
                                                    : e._e()
                                                : t('span'),
                                            t('span', [
                                                e._v(
                                                    e._s(
                                                        1 == e.downloadItem.fileCate
                                                            ? 'Download'
                                                            : 'Play videos'
                                                    )
                                                ),
                                            ]),
                                        ],
                                        1
                                    ),
                                ]),
                            ]
                        )
                        : e._e()
                },
                l = [],
                c = a('dc21'),
                d = a('e39c'),
                u = (function () {
                    var e = Object(r.a)(
                        Object(s.a)().mark(function e(t, a, n) {
                            var o, r, i
                            return Object(s.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (o = Object(d.h)()),
                                                (r = o.oversea),
                                                (e.next = 3),
                                                Object(c.a)({
                                                    url: a,
                                                    params: n,
                                                    apiDomain: r,
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
                    return function (t, a, n) {
                        return e.apply(this, arguments)
                    }
                })(),
                f = (function () {
                    var e = Object(r.a)(
                        Object(s.a)().mark(function e(t, a) {
                            var n, o
                            return Object(s.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = '/classroom-hub/material/student/view/increment'),
                                                (e.next = 3),
                                                u(t, n, a)
                                            )
                                        case 3:
                                            return (o = e.sent), e.abrupt('return', o)
                                        case 5:
                                        case 'end':
                                            return e.stop()
                                    }
                                }
                            }, e)
                        })
                    )
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                })(),
                p = a('0a4b'),
                h = a('2103'),
                m = {
                    data: function () {
                        return { downloadLoading: false }
                    },
                    props: {
                        downloadItem: {
                            type: Array,
                            default: function () {
                                return []
                            },
                        },
                        burryPointData: {
                            type: Object,
                            default: function () {
                                return {}
                            },
                        },
                    },
                    methods: {
                        downloadFile: function (e) {
                            var t = this
                            return Object(r.a)(
                                Object(s.a)().mark(function a() {
                                    var n
                                    return Object(s.a)().wrap(function (a) {
                                        while (1) {
                                            switch ((a.prev = a.next)) {
                                                case 0:
                                                    if (
                                                        (console.info(
                                                            '对象函数 downloadFile(fileCate)',
                                                            e,
                                                            'filePath:renderer/components/Courses/DownloadCard.vue'
                                                        ),
                                                            2 != e)
                                                    ) {
                                                        a.next = 5
                                                        break
                                                    }
                                                    return (
                                                        console.info(
                                                            'if(fileCate == 2)为true触发return,path: /renderer/components/Courses/DownloadCard.vue'
                                                        ),
                                                        t.$emit('openVideo', t.downloadItem.fileUrl),
                                                        a.abrupt('return')
                                                    )
                                                case 5:
                                                    return (
                                                        (a.next = 7),
                                                        p.nativeApi.openDirDialog({ title: '选择文件夹' })
                                                    )
                                                case 7:
                                                    if (((n = a.sent), !n)) {
                                                        a.next = 12
                                                        break
                                                    }
                                                    return (
                                                        (t.downloadLoading = true),
                                                        (a.next = 12),
                                                        h.a.downloadFile({
                                                            fileURL: t.downloadItem.fileUrl,
                                                            saveName: t.downloadItem.name,
                                                            savePath: n[0],
                                                            complete: function (e) {
                                                                t.$Message.success(
                                                                    'downloadFile, Download successfully'
                                                                )
                                                                t.downloadLoading = false
                                                                t.downloadFeedback()
                                                            },
                                                            fail: function (e) {
                                                                t.$Message.error('Download failed')
                                                                t.downloadLoading = false
                                                            },
                                                        })
                                                    )
                                                case 12:
                                                case 'end':
                                                    return a.stop()
                                            }
                                        }
                                    }, a)
                                })
                            )()
                        },
                        downloadFeedback: function () {
                            var e = this
                            return Object(r.a)(
                                Object(s.a)().mark(function t() {
                                    return Object(s.a)().wrap(function (t) {
                                        while (1) {
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 downloadFeedback,filePath:renderer/components/Courses/DownloadCard.vue'
                                                        ),
                                                        (t.next = 3),
                                                        f(e, {
                                                            materialIds: [e.downloadItem.materialId],
                                                        }).then(function (e) {
                                                            if (
                                                                (console.info(
                                                                    '箭头函数 _downloadFeedback的then(res)',
                                                                    e,
                                                                    'filePath:renderer/components/Courses/DownloadCard.vue'
                                                                ),
                                                                    !e || 0 != e.code)
                                                            ) {
                                                                return (
                                                                    console.info(
                                                                        'if(!res || res.code != 0)为true触发return,path: /renderer/components/Courses/DownloadCard.vue'
                                                                    ),
                                                                    void console.info(
                                                                        'if(!res || res.code != 0)为true触发return,path: /renderer/components/Courses/DownloadCard.vue'
                                                                    )
                                                                )
                                                            }
                                                        })
                                                    )
                                                case 3:
                                                case 'end':
                                                    return t.stop()
                                            }
                                        }
                                    }, t)
                                })
                            )()
                        },
                    },
                    mounted: function () { },
                },
                v = m,
                w = (a('8f7c'), a('2877')),
                g = Object(w.a)(v, i, l, false, null, '7d29fdf2', null),
                b = g.exports,
                y = a('383d'),
                C = a('bd12'),
                D = a('aaf0'),
                A = {
                    data: function () {
                        return {
                            courseDetailParams: {},
                            courseDetailData: {},
                            burryPointData: {},
                            loading: false,
                            isError: false,
                            showVideo: false,
                            myPlayer: null,
                            fileUrl: '',
                            fileName: '',
                        }
                    },
                    components: {
                        DownloadCard: b,
                        Loading: C.a,
                        ErrorStatus: D.a,
                    },
                    computed: {},
                    methods: {
                        updateHeaderAttr: function () {
                            console.info(
                                '对象函数 updateHeaderAttr,filePath:renderer/views/StudyResources.vue'
                            )
                            this.$bus.$emit('updateHeaderAttr', {
                                title: this.$t('courses.studyResources.title'),
                                showGoback: true,
                                backUrl: '/courses-detail?classId='.concat(
                                    this.courseDetailParams.classId
                                ),
                            })
                        },
                        getResourcesList: function () {
                            var e = this
                            return Object(r.a)(
                                Object(s.a)().mark(function t() {
                                    var a
                                    return Object(s.a)().wrap(function (t) {
                                        while (1) {
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 getResourcesList,filePath:renderer/views/StudyResources.vue'
                                                        ),
                                                        (e.loading = true),
                                                        (t.next = 4),
                                                        Object(y.e)({
                                                            planId: e.courseDetailParams.lessonId,
                                                        })
                                                    )
                                                case 4:
                                                    if (
                                                        ((a = t.sent),
                                                            e.$bus.$emit('reload-completed'),
                                                            a && 0 != !a.code)
                                                    ) {
                                                        t.next = 10
                                                        break
                                                    }
                                                    return (
                                                        console.info(
                                                            'if(!res || !res.code == 0)为true触发return,path: /renderer/views/StudyResources.vue'
                                                        ),
                                                        (e.isError = true),
                                                        t.abrupt('return')
                                                    )
                                                case 10:
                                                    ; (e.loading = false), (e.courseDetailData = a.data)
                                                case 12:
                                                case 'end':
                                                    return t.stop()
                                            }
                                        }
                                    }, t)
                                })
                            )()
                        },
                        openVideo: function (e, t) {
                            var a = this
                            console.info(
                                '对象函数 openVideo(fileUrl, name)',
                                e,
                                t,
                                'filePath:renderer/views/StudyResources.vue'
                            )
                            this.fileName = t
                            this.fileUrl = e
                            setTimeout(function () {
                                !a.myPlayer && a.initVideo()
                                a.myPlayer.load(a.fileUrl)
                                a.myPlayer.src({
                                    src: a.fileUrl,
                                    type: 'application/x-mpegURL',
                                })
                                a.showVideo = true
                            }, 300)
                        },
                        closeVideo: function () {
                            console.info(
                                '对象函数 closeVideo,filePath:renderer/views/StudyResources.vue'
                            )
                            this.showVideo = false
                            this.myPlayer.pause()
                        },
                        initVideo: function () {
                            console.info(
                                '对象函数 initVideo,filePath:renderer/views/StudyResources.vue'
                            )
                            this.myPlayer = this.$video('myVideo', {
                                controls: true,
                                autoplay: true,
                                preload: 'auto',
                            })
                        },
                        keyDown: function () {
                            console.info(
                                '对象函数 keyDown,filePath:renderer/views/StudyResources.vue'
                            )
                            this.myPlayer
                        },
                    },
                    mounted: function () {
                        var e = this
                        this.courseDetailParams = this.$route.query
                        this.updateHeaderAttr()
                        this.getResourcesList()
                        this.$bus.$on('reload', function () {
                            console.info(
                                '箭头函数 监听 reload,filePath:renderer/views/StudyResources.vue'
                            )
                            e.getResourcesList()
                        })
                    },
                    destroyed: function () {
                        console.info(
                            '对象函数 destroyed,filePath:renderer/views/StudyResources.vue'
                        )
                        this.$bus.$off('reload')
                        this.myPlayer && this.myPlayer.dispose()
                    },
                },
                _ = A,
                k = (a('a9c5'), Object(w.a)(_, n, o, false, null, null, null))
            t.default = k.exports
        },
        dc2d: function (e, t, a) {
            'use strict'
            a('17c8')
        },
        ebc2: function (e, t, a) { },
        f761: function (e, t, a) {
            'use strict'
            a('ebc2')
        },
    },
])
