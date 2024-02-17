; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-0c1aef76'],
    {
        1059: function (t, e, i) {
            'use strict'
            i.r(e)
            i.d(e, 'default', function () {
                return I
            })
            var s = i('5530'),
                n = i('d4ec'),
                a = i('bee2'),
                o = i('262e'),
                c = i('2caf'),
                r = i('b6c9'),
                d = function () {
                    var t = this,
                        e = t._self._c
                    return e(
                        'div',
                        { attrs: { id: 'randomVideoLink' } },
                        [
                            e(
                                'div',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: t.showMinimize,
                                            expression: 'showMinimize',
                                        },
                                    ],
                                    staticClass: 'video-link-container video-minimize',
                                },
                                [
                                    e('div', { staticClass: 'minimize-contenter' }, [
                                        e('div', {
                                            staticClass: 'icon-maximize',
                                            on: {
                                                click: function (e) {
                                                    return t.handleMinimize(false)
                                                },
                                            },
                                        }),
                                        t.studentName
                                            ? e(
                                                'div',
                                                {
                                                    staticClass: 'student-name',
                                                    class: [{ 'remote-student': 3 == t.status }],
                                                },
                                                [t._v(' ' + t._s(t.studentName) + ' ')]
                                            )
                                            : t._e(),
                                        e(
                                            'div',
                                            { staticClass: 'audio-waves-wrapper' },
                                            [
                                                e('AudioWaves', {
                                                    attrs: { animation: t.isShowAudioIcon },
                                                }),
                                            ],
                                            1
                                        ),
                                    ]),
                                ]
                            ),
                            e(
                                'div',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: t.showMaximize,
                                            expression: 'showMaximize',
                                        },
                                    ],
                                    staticClass: 'video-link-container video-maximize',
                                },
                                [
                                    e(
                                        'div',
                                        {
                                            directives: [
                                                {
                                                    name: 'show',
                                                    rawName: 'v-show',
                                                    value: 2 == t.status || 3 == t.status,
                                                    expression: 'status == 2 || status == 3',
                                                },
                                            ],
                                            staticClass: 'status-connect',
                                        },
                                        [
                                            e('div', {
                                                staticClass: 'icon-minimize',
                                                on: {
                                                    click: function (e) {
                                                        return t.handleMinimize(true)
                                                    },
                                                },
                                            }),
                                            e(
                                                'div',
                                                {
                                                    directives: [
                                                        {
                                                            name: 'show',
                                                            rawName: 'v-show',
                                                            value: 2 == t.status,
                                                            expression: 'status == 2',
                                                        },
                                                    ],
                                                    staticClass: 'video-wrapper',
                                                },
                                                [
                                                    e('div', {
                                                        staticClass: 'video-contenter',
                                                        attrs: { id: 'localVideoContenter' },
                                                    }),
                                                ]
                                            ),
                                            e(
                                                'div',
                                                {
                                                    directives: [
                                                        {
                                                            name: 'show',
                                                            rawName: 'v-show',
                                                            value: 3 == t.status,
                                                            expression: 'status == 3',
                                                        },
                                                    ],
                                                    staticClass: 'video-wrapper',
                                                },
                                                [
                                                    e('div', {
                                                        directives: [
                                                            {
                                                                name: 'show',
                                                                rawName: 'v-show',
                                                                value: t.remoteVideoStatus,
                                                                expression: 'remoteVideoStatus',
                                                            },
                                                        ],
                                                        staticClass: 'video-contenter',
                                                        attrs: { id: 'remoteVideoContenter' },
                                                    }),
                                                ]
                                            ),
                                            e('div', { staticClass: 'video-info' }, [
                                                e('div', { staticClass: 'info-head' }, [
                                                    e(
                                                        'div',
                                                        {
                                                            staticClass: 'student-name',
                                                            class: [{ 'remote-student': 3 == t.status }],
                                                        },
                                                        [t._v(' ' + t._s(t.studentName) + ' ')]
                                                    ),
                                                    e(
                                                        'div',
                                                        { staticClass: 'audio-waves-wrapper' },
                                                        [
                                                            e('AudioWaves', {
                                                                attrs: { animation: t.isShowAudioIcon },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                ]),
                                            ]),
                                        ]
                                    ),
                                ]
                            ),
                            e('MediaSecurityAccess', {
                                ref: 'MediaSecurityAccess',
                                attrs: { visible: false },
                            }),
                        ],
                        1
                    )
                },
                l = [],
                u = i('c7eb'),
                h = i('1da1'),
                m = (i('b0c0'), i('d81d'), i('caad'), i('2532'), i('a9e3'), i('099c')),
                v = i('d0db'),
                p = i('3b29'),
                f = i('217d'),
                C = (function () {
                    function t() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {}
                        console.info(
                            '函数申明 _default(opts)',
                            e,
                            'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/rtcClass.js'
                        )
                        Object(n.a)(this, t)
                        this.options = e.options
                        this.rtcEngine = window.RTC_COMMON.rtcEngine
                        this.teacherRtcChannel = window.RTC_COMMON.teacherRtcChannel
                    }
                    return (
                        Object(a.a)(t, [
                            {
                                key: 'localVideoStart',
                                value: function (t) {
                                    if (
                                        (this.teacherRtcChannel.setClientRole(1),
                                            this.teacherRtcChannel.muteLocalAudioStream(false),
                                            t)
                                    ) {
                                        this.teacherRtcChannel.muteLocalVideoStream(false)
                                        var e = document.getElementById('localVideoContenter')
                                        e.innerHTML = ''
                                        this.rtcEngine.setupLocalVideo(e)
                                    } else {
                                        this.teacherRtcChannel.muteLocalVideoStream(true)
                                    }
                                },
                            },
                            {
                                key: 'unpublish',
                                value: function () {
                                    this.teacherRtcChannel.setClientRole(0)
                                    this.teacherRtcChannel.muteLocalAudioStream(true)
                                    this.teacherRtcChannel.muteLocalVideoStream(true)
                                },
                            },
                            {
                                key: 'setupRemoteVideo',
                                value: function (t) {
                                    var e = document.getElementById('remoteVideoContenter')
                                    e.innerHTML = ''
                                    this.teacherRtcChannel.setupRemoteVideo(Number(t), e)
                                },
                            },
                        ]),
                        t
                    )
                })(),
                w = (function () {
                    function t() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {}
                        console.info(
                            '函数申明 _default(opts)',
                            e,
                            'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/smallRtcClass.js'
                        )
                        Object(n.a)(this, t)
                        this.options = e.options
                        this.rtcEngine = window.RTC_COMMON.rtcEngine
                        this.teacherRtcChannel = window.RTC_COMMON.classRtcChannel
                    }
                    return (
                        Object(a.a)(t, [
                            {
                                key: 'localVideoStart',
                                value: function (t) {
                                    if (t) {
                                        this.teacherRtcChannel.muteLocalVideoStream(false)
                                        var e = document.getElementById('localVideoContenter')
                                        e.innerHTML = ''
                                        this.rtcEngine.setupLocalVideo(e)
                                    }
                                },
                            },
                            {
                                key: 'unpublish',
                                value: function () { },
                            },
                            {
                                key: 'setupRemoteVideo',
                                value: function (t) {
                                    var e = document.getElementById('remoteVideoContenter')
                                    e.innerHTML = ''
                                    this.teacherRtcChannel.setupRemoteVideo(Number(t), e)
                                },
                            },
                        ]),
                        t
                    )
                })(),
                g = i('c02a'),
                V = null,
                S = {
                    components: {
                        MediaSecurityAccess: p.a,
                        AudioWaves: f.a,
                    },
                    props: {
                        options: {
                            type: Object,
                            default: function () {
                                return {
                                    ircMsg: {},
                                    roomMessage: {
                                        roomInfo: {
                                            commonOption: {},
                                            planInfo: {},
                                            stuInfo: {},
                                        },
                                    },
                                }
                            },
                        },
                    },
                    data: function () {
                        return {
                            ircMsg: this.options.ircMsg,
                            status: 0,
                            studentName: '',
                            isShowAudioIcon: false,
                            cameraStatus: true,
                            cameraSettingStatus: false,
                            microphoneStatus: false,
                            localDisplayVideoStatus: true,
                            remoteVideoStatus: false,
                            isMinimize: false,
                            remoteVideoStatusCache: {},
                            highEncoderConfig: {
                                width: 320,
                                height: 240,
                                bitrate: 120,
                                frameRate: 10,
                            },
                            lowEncoderConfig: {
                                bitrate: 80,
                                frameRate: 10,
                                width: 160,
                                height: 120,
                            },
                        }
                    },
                    computed: {
                        showMinimize: function () {
                            return this.isMinimize
                        },
                        showMaximize: function () {
                            return !this.isMinimize
                        },
                    },
                    mounted: function () {
                        var t = this
                        console.log('randomVideoLink-options', this.options)
                        this.$bus.$emit('getLocalDisplayVideoStatus', function (e) { })
                        this.$bus.$on('updateLocalDisplayVideoStatus', function (e) { })
                        this.$refs.MediaSecurityAccess.checkAccess()
                        var e = this.options.roomMessage.roomInfo.commonOption.classType
                        this.rtcClass = 2 == e ? new w(this.options) : new C(this.options)
                        this.initRtcEvent()
                        this.videoLinkMessage(this.options.ircMsg)
                    },
                    beforeDestroy: function () {
                        var t
                        null === (t = window.RTC_COMMON) ||
                            void 0 === t ||
                            null === (t = t.classRtcChannel) ||
                            void 0 === t ||
                            t.setVideoEncoderConfiguration(this.lowEncoderConfig)
                        this.rtcClass.teacherRtcChannel.off(
                            'remoteVideoStateChanged',
                            this.listenRemoteVideoStateChanged
                        )
                        this.rtcClass.rtcEngine.off(
                            'groupAudioVolumeIndication',
                            this.listenGroupAudioVolumeIndication
                        )
                        this.$bus.$off('updateLocalDisplayVideoStatus')
                    },
                    methods: {
                        initRtcEvent: function () {
                            this.rtcClass.teacherRtcChannel.on(
                                'remoteVideoStateChanged',
                                this.listenRemoteVideoStateChanged
                            )
                            this.rtcClass.rtcEngine.on(
                                'groupAudioVolumeIndication',
                                this.listenGroupAudioVolumeIndication
                            )
                        },
                        listenRemoteVideoStateChanged: function (t, e, i) {
                            console.log('randomVideoLink-remoteVideoStateChanged', t, e, i)
                            var s =
                                this.options.roomMessage.roomInfo.configs.rtcConfig
                                    .teacherVideoUid
                            if (t != s) {
                                var n = this.getInteractData()
                                2 === e && n.id == t
                                    ? (this.rtcClass.setupRemoteVideo(t),
                                        (this.remoteVideoStatus = true),
                                        (this.remoteVideoStatusCache[t] = true))
                                    : (this.remoteVideoStatus = false)
                            }
                        },
                        listenGroupAudioVolumeIndication: function (t) {
                            console.log('randomVideoLink-groupAudioVolumeIndication', t)
                            this.handleAudioIcon(t)
                        },
                        videoLinkMessage: function (t) {
                            console.log('randomVideoLink-videoLinkMessage', t)
                            this.sendLogger(
                                '开始随机视频连麦互动: '.concat(JSON.stringify(t)),
                                'start'
                            )
                            this.ircMsg = t
                            var e,
                                i = this.options.roomMessage.roomInfo.stuInfo || {},
                                s = this.getInteractData()
                                ; (this.$bus.$emit('videoLinkStatus', true), s.id == i.id)
                                    ? (null === (e = window.RTC_COMMON) ||
                                        void 0 === e ||
                                        null === (e = e.classRtcChannel) ||
                                        void 0 === e ||
                                        e.setVideoEncoderConfiguration(this.highEncoderConfig),
                                        this.localVideoStart())
                                    : this.remoteVideoStart()
                        },
                        localVideoStart: function () {
                            var t = this
                            return Object(h.a)(
                                Object(u.a)().mark(function e() {
                                    var i
                                    return Object(u.a)().wrap(function (e) {
                                        while (1) {
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        console.log(
                                                            'randomVideoLink-localVideoStart',
                                                            t.ircMsg
                                                        ),
                                                        t.$bus.$emit('localVideoLinkStatus', true),
                                                        (e.next = 4),
                                                        t.getMediaStatus()
                                                    )
                                                case 4:
                                                    ; (t.studentName = t.$t('common.me')),
                                                        (t.status = 2),
                                                        t.$nextTick(function () {
                                                            var e =
                                                                t.localDisplayVideoStatus && t.cameraStatus
                                                            t.rtcClass.localVideoStart(e)
                                                        }),
                                                        g.o(
                                                            null === (i = t.ircMsg) || void 0 === i
                                                                ? void 0
                                                                : i.interactId,
                                                            '',
                                                            true
                                                        )
                                                case 8:
                                                case 'end':
                                                    return e.stop()
                                            }
                                        }
                                    }, e)
                                })
                            )()
                        },
                        localVideoEnd: function () {
                            var t
                            this.rtcClass.unpublish()
                            this.$bus.$emit('localVideoLinkStatus', false)
                            console.log('randomVideoLink-localVideoEnd')
                            g.o(
                                null === (t = this.ircMsg) || void 0 === t
                                    ? void 0
                                    : t.interactId,
                                '',
                                false
                            )
                        },
                        remoteVideoStart: function () {
                            var t = this
                            console.log('randomVideoLink-remoteVideoStart', this.ircMsg)
                            var e = this.getInteractData()
                            this.studentName = e.name
                            this.status = 3
                            this.remoteVideoStatus = !!this.remoteVideoStatusCache[e.id]
                            this.$nextTick(function () {
                                t.rtcClass.setupRemoteVideo(e.id)
                            })
                        },
                        handleAudioIcon: function (t) {
                            var e = t.map(function (t) {
                                return t.uid
                            }),
                                i = this.getInteractData(),
                                s = i.id,
                                n = t.map(function (t) {
                                    return 0 === t.uid ? t.volume : 0
                                })[0]
                            s && e.includes(Number(s)) && this.showRemoteAudioIcon()
                            this.showLocalAudioIcon(n)
                        },
                        showRemoteAudioIcon: function () {
                            var t = this
                            3 == this.status &&
                                ((this.isShowAudioIcon = true),
                                    clearTimeout(V),
                                    (V = setTimeout(function () { }, 500)))
                        },
                        showLocalAudioIcon: function (t) {
                            2 == this.status &&
                                (0 != t
                                    ? this.isShowAudioIcon || (this.isShowAudioIcon = true)
                                    : this.isShowAudioIcon && (this.isShowAudioIcon = false))
                        },
                        getInteractData: function () {
                            return this.ircMsg.data && this.ircMsg.data[0]
                                ? this.ircMsg.data[0]
                                : {}
                        },
                        getMediaStatus: function () {
                            var t = this
                            return Object(h.a)(
                                Object(u.a)().mark(function e() {
                                    return Object(u.a)().wrap(function (e) {
                                        while (1) {
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), Object(m.c)()
                                                case 2:
                                                    return (
                                                        (t.cameraStatus = e.sent),
                                                        (e.next = 5),
                                                        Object(m.f)()
                                                    )
                                                case 5:
                                                case 6:
                                                case 'end':
                                                    return e.stop()
                                            }
                                        }
                                    }, e)
                                })
                            )()
                        },
                        handleMinimize: function (t) {
                            this.isMinimize = t
                        },
                        sendLogger: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : ''
                            v.a.send({
                                tag: 'student.Interact',
                                content: {
                                    msg: t,
                                    interactType: 'RandomLinkMic',
                                    interactId: this.options.ircMsg.interactId,
                                    interactStage: e,
                                },
                            })
                        },
                        destroyInteraction: function () {
                            var t
                            this.$bus.$emit('videoLinkStatus', false)
                            this.sendLogger(
                                '结束随机视频连麦互动: '.concat(JSON.stringify(this.ircMsg)),
                                'end'
                            )
                            2 == this.status && this.localVideoEnd()
                            this.$destroy()
                            null === (t = this.$el) ||
                                void 0 === t ||
                                null === (t = t.parentNode) ||
                                void 0 === t ||
                                t.removeChild(this.$el)
                        },
                    },
                },
                b = S,
                M = (i('ab76'), i('2877')),
                k = Object(M.a)(b, d, l, false, null, '26053a0a', null),
                y = k.exports,
                I = (function (t) {
                    Object(o.a)(i, t)
                    var e = Object(c.a)(i)
                    function i() {
                        var t,
                            s =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 VideoLink(opts)',
                                s,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/index.js'
                            ),
                            Object(n.a)(this, i),
                            (t = e.call(this, y)),
                            (t.options = s),
                            (t.dom = s.roomMessage.roomInfo.interactionController),
                            t.initVmApp('随机连麦'),
                            t
                        )
                    }
                    return (
                        Object(a.a)(i, [
                            {
                                key: 'createPropsData',
                                value: function () {
                                    var t = {
                                        localDisplayVideoStatus: e,
                                        localDisplayVideoStatus: e,
                                        isShowAudioIcon: false,
                                        microphoneStatus: e.sent,
                                    }
                                    return Object(s.a)({ options: this.options }, t)
                                },
                            },
                        ]),
                        i
                    )
                })(r.a)
        },
        '217d': function (t, e, i) {
            'use strict'
            var s = function () {
                var t = this,
                    e = t._self._c
                return e(
                    'div',
                    {
                        staticClass: 'audio-waves',
                        class: [t.skinClass, t.size],
                    },
                    [
                        t.animation
                            ? e('div', { staticClass: 'waves-wrapper' }, [
                                e('span', {
                                    staticClass: 'waves-item waves-animation waves1',
                                    class: t.animationTypeClass,
                                }),
                                e('span', {
                                    staticClass: 'waves-item waves-animation waves2',
                                    class: t.animationTypeClass,
                                }),
                                e('span', {
                                    staticClass: 'waves-item waves-animation waves3',
                                    class: t.animationTypeClass,
                                }),
                                e('span', {
                                    staticClass: 'waves-item waves-animation waves4',
                                    class: t.animationTypeClass,
                                }),
                                'large' === t.size
                                    ? e('span', {
                                        staticClass: 'waves-item waves-animation waves5',
                                        class: t.animationTypeClass,
                                    })
                                    : t._e(),
                                'large' === t.size
                                    ? e('span', {
                                        staticClass: 'waves-item waves-animation waves6',
                                        class: t.animationTypeClass,
                                    })
                                    : t._e(),
                            ])
                            : e('div', { staticClass: 'waves-wrapper' }, [
                                e('span', { staticClass: 'waves-item default-bg waves1' }),
                                e('span', { staticClass: 'waves-item default-bg waves2' }),
                                e('span', { staticClass: 'waves-item default-bg waves3' }),
                                e('span', { staticClass: 'waves-item default-bg waves4' }),
                                'large' === t.size
                                    ? e('span', {
                                        staticClass: 'waves-item default-bg waves5',
                                    })
                                    : t._e(),
                                'large' === t.size
                                    ? e('span', {
                                        staticClass: 'waves-item default-bg waves6',
                                    })
                                    : t._e(),
                            ]),
                    ]
                )
            },
                n = [],
                a = {
                    props: {
                        animation: {
                            default: false,
                            type: Boolean,
                        },
                        animationType: {
                            default: 'liner',
                            type: String,
                        },
                        size: {
                            default: 'large',
                            type: String,
                        },
                        skin: {
                            default: 'orange',
                            type: String,
                        },
                    },
                    computed: {
                        skinClass: function () {
                            return (
                                console.info(
                                    '对象函数 skinClass,filePath:renderer/components/Common/AudioWaves.vue'
                                ),
                                'skin-'.concat(this.skin)
                            )
                        },
                        animationTypeClass: function () {
                            return (
                                console.info(
                                    '对象函数 animationTypeClass,filePath:renderer/components/Common/AudioWaves.vue'
                                ),
                                'animation-'.concat(this.animationType)
                            )
                        },
                    },
                },
                o = a,
                c = (i('29df'), i('2877')),
                r = Object(c.a)(o, s, n, false, null, '1051bd64', null)
            e.a = r.exports
        },
        '29df': function (t, e, i) {
            'use strict'
            i('5ddf')
        },
        '5ddf': function (t, e, i) { },
        '798e6': function (t, e, i) { },
        ab76: function (t, e, i) {
            'use strict'
            i('798e6')
        },
        b6c9: function (t, e, i) {
            'use strict'
            i.d(e, 'a', function () {
                return d
            })
            var s = i('d4ec'),
                n = i('bee2'),
                a = (i('99af'), i('d9e2'), i('8bbf')),
                o = i.n(a),
                c = i('3898'),
                r = i('d0db'),
                d = (function () {
                    function t(e) {
                        console.info(
                            '函数申明 InteractionBase(app)',
                            e,
                            'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
                        )
                        Object(s.a)(this, t)
                        this.app = e
                        this.vm = null
                        this.keepOtherDom = false
                    }
                    return (
                        Object(n.a)(t, [
                            {
                                key: 'initVmApp',
                                value: function (t) {
                                    if (!this.dom) {
                                        throw Error('互动的dom容器不存在')
                                    }
                                    this.dom.children.length > 0 &&
                                        !this.keepOtherDom &&
                                        (r.a.send({
                                            tag: 'tempInteractionTest',
                                            content: {
                                                msg: '清空互动容器\uFF0C由'
                                                    .concat(t, '触发清空\uFF0C清空')
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
                                value: function (t) {
                                    var e = o.a.extend(t),
                                        i = this.createPropsData(),
                                        s = new e({
                                            i18n: c.b,
                                            propsData: i,
                                            store: this.store || {},
                                        })
                                    return s.$mount(), s
                                },
                            },
                            {
                                key: 'render',
                                value: function (t, e) {
                                    t.appendChild(e.$el)
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                        e = t.submit,
                                        i = t.key,
                                        s = void 0 === i ? '' : i
                                    if (this.vm) {
                                        var n, a
                                        if (
                                            (e && this.vm.submit(),
                                                this.vm.$destroy(),
                                                'classRest' === s)
                                        ) {
                                            null === this ||
                                                void 0 === this ||
                                                null === (n = this.dom) ||
                                                void 0 === n ||
                                                n.removeChild(
                                                    null === this ||
                                                        void 0 === this ||
                                                        null === (a = this.vm) ||
                                                        void 0 === a
                                                        ? void 0
                                                        : a.$el
                                                )
                                        } else {
                                            this.dom.innerHTML = ''
                                        }
                                        this.vm = null
                                        this.app = null
                                    }
                                },
                            },
                            {
                                key: 'getProperties',
                                value: function (t, e) {
                                    return t[''.concat(e)].properties
                                },
                            },
                            {
                                key: 'handleMsg',
                                value: function () {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {}
                                    console.log(t)
                                },
                            },
                        ]),
                        t
                    )
                })()
        },
    },
])
