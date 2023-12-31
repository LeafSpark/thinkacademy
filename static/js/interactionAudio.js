; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-7f66cf6e'],
    {
        1059: function (e, t, n) {
            'use strict'
            n.r(t)
            n.d(t, 'default', function () {
                return L
            })
            var o = n('5530'),
                i = n('d4ec'),
                s = n('bee2'),
                a = n('262e'),
                r = n('2caf'),
                c = n('b6c9'),
                d = function () {
                    var e = this,
                        t = e._self._c
                    return t(
                        'div',
                        { attrs: { id: 'randomVideoLink' } },
                        [
                            t(
                                'div',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.showMinimize,
                                            expression: 'showMinimize',
                                        },
                                    ],
                                    staticClass: 'video-link-container video-minimize',
                                },
                                [
                                    t('div', { staticClass: 'minimize-contenter' }, [
                                        t('div', {
                                            staticClass: 'icon-maximize',
                                            on: {
                                                click: function (t) {
                                                    return e.handleMinimize(false)
                                                },
                                            },
                                        }),
                                        e.studentName
                                            ? t(
                                                'div',
                                                {
                                                    staticClass: 'student-name',
                                                    class: [{ 'remote-student': 3 == e.status }],
                                                },
                                                [e._v(' ' + e._s(e.studentName) + ' ')]
                                            )
                                            : e._e(),
                                        t(
                                            'div',
                                            { staticClass: 'audio-waves-wrapper' },
                                            [
                                                t('AudioWaves', {
                                                    attrs: { animation: e.isShowAudioIcon },
                                                }),
                                            ],
                                            1
                                        ),
                                    ]),
                                ]
                            ),
                            t(
                                'div',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.showMaximize,
                                            expression: 'showMaximize',
                                        },
                                    ],
                                    staticClass: 'video-link-container video-maximize',
                                },
                                [
                                    t(
                                        'div',
                                        {
                                            directives: [
                                                {
                                                    name: 'show',
                                                    rawName: 'v-show',
                                                    value: 2 == e.status || 3 == e.status,
                                                    expression: 'status == 2 || status == 3',
                                                },
                                            ],
                                            staticClass: 'status-connect',
                                        },
                                        [
                                            t('div', {
                                                staticClass: 'icon-minimize',
                                                on: {
                                                    click: function (t) {
                                                        return e.handleMinimize(true)
                                                    },
                                                },
                                            }),
                                            t(
                                                'div',
                                                {
                                                    directives: [
                                                        {
                                                            name: 'show',
                                                            rawName: 'v-show',
                                                            value: 2 == e.status,
                                                            expression: 'status == 2',
                                                        },
                                                    ],
                                                    staticClass: 'video-wrapper',
                                                },
                                                [
                                                    t('div', {
                                                        staticClass: 'video-contenter',
                                                        attrs: { id: 'localVideoContenter' },
                                                    }),
                                                ]
                                            ),
                                            t(
                                                'div',
                                                {
                                                    directives: [
                                                        {
                                                            name: 'show',
                                                            rawName: 'v-show',
                                                            value: 3 == e.status,
                                                            expression: 'status == 3',
                                                        },
                                                    ],
                                                    staticClass: 'video-wrapper',
                                                },
                                                [
                                                    t('div', {
                                                        directives: [
                                                            {
                                                                name: 'show',
                                                                rawName: 'v-show',
                                                                value: e.remoteVideoStatus,
                                                                expression: 'remoteVideoStatus',
                                                            },
                                                        ],
                                                        staticClass: 'video-contenter',
                                                        attrs: { id: 'remoteVideoContenter' },
                                                    }),
                                                ]
                                            ),
                                            t('div', { staticClass: 'video-info' }, [
                                                t('div', { staticClass: 'info-head' }, [
                                                    t(
                                                        'div',
                                                        {
                                                            staticClass: 'student-name',
                                                            class: [{ 'remote-student': 3 == e.status }],
                                                        },
                                                        [e._v(' ' + e._s(e.studentName) + ' ')]
                                                    ),
                                                    t(
                                                        'div',
                                                        { staticClass: 'audio-waves-wrapper' },
                                                        [
                                                            t('AudioWaves', {
                                                                attrs: { animation: e.isShowAudioIcon },
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
                            t('MediaSecurityAccess', {
                                ref: 'MediaSecurityAccess',
                                attrs: { visible: false },
                            }),
                        ],
                        1
                    )
                },
                l = [],
                m = n('c7eb'),
                u = n('1da1'),
                h = (n('b0c0'), n('d81d'), n('caad'), n('2532'), n('a9e3'), n('099c')),
                p = n('d0db'),
                v = n('3b29'),
                f = n('217d'),
                C = (function () {
                    function e() {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {}
                        console.info(
                            '函数申明 _default(opts)',
                            t,
                            'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/rtcClass.js'
                        )
                        Object(i.a)(this, e)
                        this.options = t.options
                        this.rtcEngine = window.RTC_COMMON.rtcEngine
                        this.teacherRtcChannel = window.RTC_COMMON.teacherRtcChannel
                    }
                    return (
                        Object(s.a)(e, [
                            {
                                key: 'localVideoStart',
                                value: function (e) {
                                    if (
                                        (this.teacherRtcChannel.setClientRole(1),
                                            this.teacherRtcChannel.muteLocalAudioStream(false),
                                            e)
                                    ) {
                                        this.teacherRtcChannel.muteLocalVideoStream(false)
                                        var t = document.getElementById('localVideoContenter')
                                        t.innerHTML = ''
                                        this.rtcEngine.setupLocalVideo(t)
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
                                value: function (e) {
                                    var t = document.getElementById('remoteVideoContenter')
                                    t.innerHTML = ''
                                    this.teacherRtcChannel.setupRemoteVideo(Number(e), t)
                                },
                            },
                        ]),
                        e
                    )
                })(),
                w = (function () {
                    function e() {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {}
                        console.info(
                            '函数申明 _default(opts)',
                            t,
                            'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/smallRtcClass.js'
                        )
                        Object(i.a)(this, e)
                        this.options = t.options
                        this.rtcEngine = window.RTC_COMMON.rtcEngine
                        this.teacherRtcChannel = window.RTC_COMMON.classRtcChannel
                    }
                    return (
                        Object(s.a)(e, [
                            {
                                key: 'localVideoStart',
                                value: function (e) {
                                    if (e) {
                                        this.teacherRtcChannel.muteLocalVideoStream(false)
                                        var t = document.getElementById('localVideoContenter')
                                        t.innerHTML = ''
                                        this.rtcEngine.setupLocalVideo(t)
                                    }
                                },
                            },
                            {
                                key: 'unpublish',
                                value: function () { },
                            },
                            {
                                key: 'setupRemoteVideo',
                                value: function (e) {
                                    var t = document.getElementById('remoteVideoContenter')
                                    t.innerHTML = ''
                                    this.teacherRtcChannel.setupRemoteVideo(Number(e), t)
                                },
                            },
                        ]),
                        e
                    )
                })(),
                g = n('c02a'),
                V = null,
                I = {
                    components: {
                        MediaSecurityAccess: v.a,
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
                            return (
                                console.info(
                                    '对象函数 showMinimize,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                ),
                                this.isMinimize
                            )
                        },
                        showMaximize: function () {
                            return (
                                console.info(
                                    '对象函数 showMaximize,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                ),
                                !this.isMinimize
                            )
                        },
                    },
                    mounted: function () {
                        var e = this
                        this.options
                        this.$bus.$emit('getLocalDisplayVideoStatus', function (t) {
                            console.info(
                                '箭头函数 监听 getLocalDisplayVideoStatus(status)',
                                t,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                        })
                        this.$bus.$on('updateLocalDisplayVideoStatus', function (t) {
                            console.info(
                                '箭头函数 监听 updateLocalDisplayVideoStatus(status)',
                                t,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                        })
                        this.$refs.MediaSecurityAccess.checkAccess()
                        var t = this.options.roomMessage.roomInfo.commonOption.classType
                        this.rtcClass = 2 == t ? new w(this.options) : new C(this.options)
                        this.initRtcEvent()
                        this.videoLinkMessage(this.options.ircMsg)
                    },
                    beforeDestroy: function () {
                        var e, t
                        console.info(
                            '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                        )
                        null === (e = window.RTC_COMMON) ||
                            void 0 === e ||
                            null === (t = e.classRtcChannel) ||
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
                            console.info(
                                '对象函数 initRtcEvent,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.rtcClass.teacherRtcChannel.on(
                                'remoteVideoStateChanged',
                                this.listenRemoteVideoStateChanged
                            )
                            this.rtcClass.rtcEngine.on(
                                'groupAudioVolumeIndication',
                                this.listenGroupAudioVolumeIndication
                            )
                        },
                        listenRemoteVideoStateChanged: function (e, t, n) {
                            console.info(
                                '对象函数 listenRemoteVideoStateChanged(uid, state, reason)',
                                e,
                                t,
                                n,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            var o =
                                this.options.roomMessage.roomInfo.configs.rtcConfig
                                    .teacherVideoUid
                            if (e != o) {
                                var i = this.getInteractData()
                                2 === t && i.id == e
                                    ? (this.rtcClass.setupRemoteVideo(e),
                                        (this.remoteVideoStatus = true),
                                        (this.remoteVideoStatusCache[e] = true))
                                    : (this.remoteVideoStatus = false)
                            } else {
                                console.info(
                                    'if(uid == teacherVideoUid)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                )
                            }
                        },
                        listenGroupAudioVolumeIndication: function (e) {
                            console.info(
                                '对象函数 listenGroupAudioVolumeIndication(speakers)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.handleAudioIcon(e)
                        },
                        videoLinkMessage: function (e) {
                            console.info(
                                '对象函数 videoLinkMessage(ircMsg)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.sendLogger(
                                '开始随机视频连麦互动: '.concat(JSON.stringify(e)),
                                'start'
                            )
                            this.ircMsg = e
                            var t,
                                n,
                                o = this.options.roomMessage.roomInfo.stuInfo || {},
                                i = this.getInteractData()
                                ; (this.$bus.$emit('videoLinkStatus', true), i.id == o.id)
                                    ? (null === (t = window.RTC_COMMON) ||
                                        void 0 === t ||
                                        null === (n = t.classRtcChannel) ||
                                        void 0 === n ||
                                        n.setVideoEncoderConfiguration(this.highEncoderConfig),
                                        this.localVideoStart())
                                    : this.remoteVideoStart()
                        },
                        localVideoStart: function () {
                            var e = this
                            return Object(u.a)(
                                Object(m.a)().mark(function t() {
                                    var n
                                    return Object(m.a)().wrap(function (t) {
                                        while (1) {
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 localVideoStart,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                                        ),
                                                        e.ircMsg,
                                                        e.$bus.$emit('localVideoLinkStatus', true),
                                                        (t.next = 5),
                                                        e.getMediaStatus()
                                                    )
                                                case 5:
                                                    ; (e.studentName = e.$t('common.me')),
                                                        (e.status = 2),
                                                        e.$nextTick(function () {
                                                            var t =
                                                                e.localDisplayVideoStatus && e.cameraStatus
                                                            e.rtcClass.localVideoStart(t)
                                                        }),
                                                        g.o(
                                                            null === (n = e.ircMsg) || void 0 === n
                                                                ? void 0
                                                                : n.interactId,
                                                            '',
                                                            true
                                                        )
                                                case 9:
                                                case 'end':
                                                    return t.stop()
                                            }
                                        }
                                    }, t)
                                })
                            )()
                        },
                        localVideoEnd: function () {
                            var e
                            console.info(
                                '对象函数 localVideoEnd,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.rtcClass.unpublish()
                            this.$bus.$emit('localVideoLinkStatus', false)
                            g.o(
                                null === (e = this.ircMsg) || void 0 === e
                                    ? void 0
                                    : e.interactId,
                                '',
                                false
                            )
                        },
                        remoteVideoStart: function () {
                            var e = this
                            console.info(
                                '对象函数 remoteVideoStart,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.ircMsg
                            var t = this.getInteractData()
                            this.studentName = t.name
                            this.status = 3
                            this.remoteVideoStatus = !!this.remoteVideoStatusCache[t.id]
                            this.$nextTick(function () {
                                e.rtcClass.setupRemoteVideo(t.id)
                            })
                        },
                        handleAudioIcon: function (e) {
                            console.info(
                                '对象函数 handleAudioIcon(speakers)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            var t = e.map(function (e) {
                                return e.uid
                            }),
                                n = this.getInteractData(),
                                o = n.id,
                                i = e.map(function (e) {
                                    return 0 === e.uid
                                        ? (console.info(
                                            'if(item.uid === 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                        ),
                                            e.volume)
                                        : (console.info(
                                            'if(item.uid === 0)为false,触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                        ),
                                            0)
                                })[0]
                            o && t.includes(Number(o)) && this.showRemoteAudioIcon()
                            this.showLocalAudioIcon(i)
                        },
                        showRemoteAudioIcon: function () {
                            var e = this
                            console.info(
                                '对象函数 showRemoteAudioIcon,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            3 == this.status
                                ? ((this.isShowAudioIcon = true),
                                    clearTimeout(V),
                                    (V = setTimeout(function () { }, 500)))
                                : console.info(
                                    'if(this.status != 3)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                )
                        },
                        showLocalAudioIcon: function (e) {
                            if (
                                (console.info(
                                    '对象函数 showLocalAudioIcon(val)',
                                    e,
                                    'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                ),
                                    2 == this.status)
                            ) {
                                return 0 == e
                                    ? (console.info(
                                        'if(val == 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                    ),
                                        void (
                                            this.isShowAudioIcon && (this.isShowAudioIcon = false)
                                        ))
                                    : void (this.isShowAudioIcon || (this.isShowAudioIcon = true))
                            }
                            console.info(
                                'if(this.status != 2)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                        },
                        getInteractData: function () {
                            return (
                                console.info(
                                    '对象函数 getInteractData,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                ),
                                this.ircMsg.data
                                    ? (console.info(
                                        'if(this.ircMsg.data)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                    ),
                                        this.ircMsg.data[0] ? this.ircMsg.data[0] : {})
                                    : {}
                            )
                        },
                        getMediaStatus: function () {
                            var e = this
                            return Object(u.a)(
                                Object(m.a)().mark(function t() {
                                    return Object(m.a)().wrap(function (t) {
                                        while (1) {
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 getMediaStatus,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                                                        ),
                                                        (t.next = 3),
                                                        Object(h.c)()
                                                    )
                                                case 3:
                                                    return (
                                                        (e.cameraStatus = t.sent),
                                                        (t.next = 6),
                                                        Object(h.f)()
                                                    )
                                                case 6:
                                                case 7:
                                                case 'end':
                                                    return t.stop()
                                            }
                                        }
                                    }, t)
                                })
                            )()
                        },
                        handleMinimize: function (e) {
                            console.info(
                                '对象函数 handleMinimize(status)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.isMinimize = e
                        },
                        sendLogger: function (e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : ''
                            p.a.send({
                                tag: 'student.Interact',
                                content: {
                                    msg: e,
                                    interactType: 'RandomLinkMic',
                                    interactId: this.options.ircMsg.interactId,
                                    interactStage: t,
                                },
                            })
                        },
                        destroyInteraction: function () {
                            var e, t
                            console.info(
                                '对象函数 destroyInteraction,filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/app.vue'
                            )
                            this.$bus.$emit('videoLinkStatus', false)
                            this.sendLogger(
                                '结束随机视频连麦互动: '.concat(JSON.stringify(this.ircMsg)),
                                'end'
                            )
                            2 == this.status && this.localVideoEnd()
                            this.$destroy()
                            null === (e = this.$el) ||
                                void 0 === e ||
                                null === (t = e.parentNode) ||
                                void 0 === t ||
                                t.removeChild(this.$el)
                        },
                    },
                },
                k = I,
                S = (n('8c9b6'), n('2877')),
                b = Object(S.a)(k, d, l, false, null, '1baac84e', null),
                M = b.exports,
                L = (function (e) {
                    Object(a.a)(n, e)
                    var t = Object(r.a)(n)
                    function n() {
                        var e,
                            o =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 VideoLink(opts)',
                                o,
                                'filePath:renderer/components/Classroom/CommonInteractions/randomVideoLink/index.js'
                            ),
                            Object(i.a)(this, n),
                            (e = t.call(this, M)),
                            (e.options = o),
                            (e.dom = o.roomMessage.roomInfo.interactionController),
                            e.initVmApp('随机连麦'),
                            e
                        )
                    }
                    return (
                        Object(s.a)(n, [
                            {
                                key: 'createPropsData',
                                value: function () {
                                    var e = {
                                        localDisplayVideoStatus: t,
                                        localDisplayVideoStatus: t,
                                        isShowAudioIcon: false,
                                        microphoneStatus: t.sent,
                                    }
                                    return Object(o.a)({ options: this.options }, e)
                                },
                            },
                        ]),
                        n
                    )
                })(c.a)
        },
        '217d': function (e, t, n) {
            'use strict'
            var o = function () {
                var e = this,
                    t = e._self._c
                return t(
                    'div',
                    {
                        staticClass: 'audio-waves',
                        class: [e.skinClass, e.size],
                    },
                    [
                        e.animation
                            ? t('div', { staticClass: 'waves-wrapper' }, [
                                t('span', {
                                    staticClass: 'waves-item waves-animation waves1',
                                    class: e.animationTypeClass,
                                }),
                                t('span', {
                                    staticClass: 'waves-item waves-animation waves2',
                                    class: e.animationTypeClass,
                                }),
                                t('span', {
                                    staticClass: 'waves-item waves-animation waves3',
                                    class: e.animationTypeClass,
                                }),
                                t('span', {
                                    staticClass: 'waves-item waves-animation waves4',
                                    class: e.animationTypeClass,
                                }),
                                'large' === e.size
                                    ? t('span', {
                                        staticClass: 'waves-item waves-animation waves5',
                                        class: e.animationTypeClass,
                                    })
                                    : e._e(),
                                'large' === e.size
                                    ? t('span', {
                                        staticClass: 'waves-item waves-animation waves6',
                                        class: e.animationTypeClass,
                                    })
                                    : e._e(),
                            ])
                            : t('div', { staticClass: 'waves-wrapper' }, [
                                t('span', { staticClass: 'waves-item default-bg waves1' }),
                                t('span', { staticClass: 'waves-item default-bg waves2' }),
                                t('span', { staticClass: 'waves-item default-bg waves3' }),
                                t('span', { staticClass: 'waves-item default-bg waves4' }),
                                'large' === e.size
                                    ? t('span', {
                                        staticClass: 'waves-item default-bg waves5',
                                    })
                                    : e._e(),
                                'large' === e.size
                                    ? t('span', {
                                        staticClass: 'waves-item default-bg waves6',
                                    })
                                    : e._e(),
                            ]),
                    ]
                )
            },
                i = [],
                s = {
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
                a = s,
                r = (n('29df'), n('2877')),
                c = Object(r.a)(a, o, i, false, null, '1051bd64', null)
            t.a = c.exports
        },
        '29df': function (e, t, n) {
            'use strict'
            n('5ddf')
        },
        '5ddf': function (e, t, n) { },
        7062: function (e, t, n) { },
        '8c9b6': function (e, t, n) {
            'use strict'
            n('7062')
        },
        b6c9: function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return d
            })
            var o = n('d4ec'),
                i = n('bee2'),
                s = (n('99af'), n('d9e2'), n('8bbf')),
                a = n.n(s),
                r = n('3898'),
                c = n('d0db'),
                d = (function () {
                    function e(t) {
                        console.info(
                            '函数申明 InteractionBase(app)',
                            t,
                            'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
                        )
                        Object(o.a)(this, e)
                        this.app = t
                        this.vm = null
                        this.keepOtherDom = false
                    }
                    return (
                        Object(i.a)(e, [
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
                                        o = new t({
                                            i18n: r.b,
                                            propsData: n,
                                            store: this.store || {},
                                        })
                                    return o.$mount(), o
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
    },
])
