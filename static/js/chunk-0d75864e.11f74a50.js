; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-0d75864e'],
    {
        '0a26': function (e, t, n) {
            'use strict'
            n('d4a7')
        },
        '64f3': function (e, t, n) {
            'use strict'
            n('b17a')
        },
        a692: function (e, t, n) {
            'use strict'
            n.r(t)
            n.d(t, 'default', function () {
                return x
            })
            var o = n('5530'),
                s = n('d4ec'),
                r = n('bee2'),
                i = n('262e'),
                a = n('2caf'),
                c = n('b6c9'),
                u = function () {
                    var e = this,
                        t = e._self._c
                    return e.visible
                        ? t('ne-fill-blanks', {
                            staticClass: 'fillBlanksContainer',
                            attrs: {
                                userConfig: e.userConfig,
                                judgeConfig: e.judgeConfig,
                                quesContent: e.quesContent,
                                countDownTime: e.countDownTime,
                                disableSubmit: e.disableSubmit,
                                showResultToast: e.showResultToast,
                                coin: e.rightCoin,
                                submitText: e.$t('common.submit'),
                            },
                            on: {
                                submit: e.submitAnswer,
                                changeAnswer: e.changeAnswer,
                                countDownComplete: e.countDownComplete,
                            },
                        })
                        : e._e()
                },
                l = [],
                m = n('c7eb'),
                p = n('1da1'),
                f = (n('b64b'), n('d3b7'), n('2909')),
                d = n('753a'),
                h = n('d4be'),
                b = n('8bbf'),
                v = n.n(b),
                g = n('d0db'),
                w = (function (e) {
                    Object(i.a)(n, e)
                    var t = Object(a.a)(n)
                    function n() {
                        var e,
                            o =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 FillBlanks(opts)',
                                o,
                                'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/fillBlanks.js'
                            ),
                            Object(s.a)(this, n),
                            (e = t.call(this)),
                            (e.options = o),
                            e
                        )
                    }
                    return (
                        Object(r.a)(n, [
                            {
                                key: 'initCountdownTime',
                                value: function () {
                                    var e = +new Date(),
                                        t =
                                            this.options.roomMessage.roomInfo.commonOption.timeOffset,
                                        n =
                                            1000 * this.options.ircMsg.countDownTime -
                                            (e + t - this.options.ircMsg.currentTime)
                                    return n
                                },
                            },
                            {
                                key: 'submitAnswer',
                                value: (function () {
                                    var e = Object(p.a)(
                                        Object(m.a)().mark(function e(t) {
                                            var n, s, r, i, a, c
                                            return Object(m.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (n = {
                                                                        planId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.planId,
                                                                        interactId: this.options.ircMsg.interactId,
                                                                        questionId: this.options.ircMsg.quesId,
                                                                        classId:
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.classId,
                                                                        isRight: t.isRight,
                                                                        userAnswer: Object(f.a)(t.answerData),
                                                                        userAnswerResult: {
                                                                            userAnswer: Object(f.a)(t.answerData),
                                                                            userAnswerResult: Object(f.a)(
                                                                                t.judgeData
                                                                            ),
                                                                        },
                                                                        userName:
                                                                            this.options.roomMessage.roomInfo.stuInfo
                                                                                .nickName,
                                                                    }),
                                                                    (e.next = 4),
                                                                    Object(h.c)(n).catch(function (e) {
                                                                        console.info(
                                                                            '箭头函数 submit的catch(err)',
                                                                            e,
                                                                            'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/fillBlanks.js'
                                                                        )
                                                                        g.a.send({
                                                                            tag: 'http',
                                                                            content: {
                                                                                msg: '接口报错:提交答案:',
                                                                                err: e,
                                                                                params: n,
                                                                            },
                                                                            level: 'error',
                                                                        })
                                                                    })
                                                                )
                                                            case 4:
                                                                return (
                                                                    (s = e.sent),
                                                                    (r = s.code),
                                                                    (i = s.data),
                                                                    (a = Object(o.a)(
                                                                        Object(o.a)({}, i),
                                                                        {},
                                                                        {
                                                                            isRight: t.isRight,
                                                                            isFillBank: true,
                                                                        }
                                                                    )),
                                                                    v.a.prototype.$bus.$emit(
                                                                        'continuousCorrect',
                                                                        a
                                                                    ),
                                                                    (c = {
                                                                        params: n,
                                                                        response: s,
                                                                        code: r,
                                                                        isSubmit: 0 === r,
                                                                        rightCoin: i.rightCoin || 0,
                                                                    }),
                                                                    i.rightCoin &&
                                                                    v.a.prototype.$bus.$emit(
                                                                        'updateAchievement',
                                                                        'add',
                                                                        i.rightCoin
                                                                    ),
                                                                    e.abrupt('return', c)
                                                                )
                                                            case 13:
                                                                return (
                                                                    (e.prev = 13),
                                                                    (e.t0 = e.catch(0)),
                                                                    console.error('submitAnswer', e.t0),
                                                                    e.abrupt('return', {
                                                                        code: -1,
                                                                        errMsg: e.t0,
                                                                    })
                                                                )
                                                            case 17:
                                                            case 'end':
                                                                return e.stop()
                                                        }
                                                    }
                                                },
                                                e,
                                                this,
                                                [[0, 13]]
                                            )
                                        })
                                    )
                                    function t(t) {
                                        return (
                                            console.info(
                                                '函数申明 submitAnswer(_x)',
                                                t,
                                                'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/fillBlanks.js'
                                            ),
                                            e.apply(this, arguments)
                                        )
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'interactOpen',
                                value: (function () {
                                    var e = Object(p.a)(
                                        Object(m.a)().mark(function e() {
                                            var t
                                            return Object(m.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (t = {
                                                                        planId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.planId,
                                                                        classId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.classId,
                                                                        interactId: this.options.ircMsg.interactId,
                                                                    }),
                                                                    (e.next = 3),
                                                                    Object(h.b)(t)
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
                                                '函数申明 interactOpen, filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/fillBlanks.js'
                                            ),
                                            e.apply(this, arguments)
                                        )
                                    }
                                    return t
                                })(),
                            },
                            {
                                key: 'getStatus',
                                value: (function () {
                                    var e = Object(p.a)(
                                        Object(m.a)().mark(function e() {
                                            var t, n
                                            return Object(m.a)().wrap(
                                                function (e) {
                                                    while (1) {
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (t = {
                                                                        planId:
                                                                            1 *
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.planId,
                                                                        interactId: this.options.ircMsg.interactId,
                                                                        classId:
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.classId,
                                                                        courseId:
                                                                            this.options.roomMessage.roomInfo
                                                                                .stuLiveInfo.courseId,
                                                                    }),
                                                                    (e.next = 4),
                                                                    Object(h.a)(t)
                                                                )
                                                            case 4:
                                                                return (n = e.sent), e.abrupt('return', n)
                                                            case 8:
                                                                return (
                                                                    (e.prev = 8),
                                                                    (e.t0 = e.catch(0)),
                                                                    console.error('获取题目数据', e.t0),
                                                                    e.abrupt('return', {
                                                                        code: -1,
                                                                        errMsg: e.t0,
                                                                    })
                                                                )
                                                            case 12:
                                                            case 'end':
                                                                return e.stop()
                                                        }
                                                    }
                                                },
                                                e,
                                                this,
                                                [[0, 8]]
                                            )
                                        })
                                    )
                                    function t() {
                                        return (
                                            console.info(
                                                '函数申明 getStatus, filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/fillBlanks.js'
                                            ),
                                            e.apply(this, arguments)
                                        )
                                    }
                                    return t
                                })(),
                            },
                        ]),
                        n
                    )
                })(d.a),
                C = n('e39c'),
                I = n('c02a'),
                j = {
                    name: 'FillBlanks',
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
                            showResultToast: false,
                            judgeConfig: { halfRight: false },
                            userConfig: null,
                            quesContent: null,
                            disableSubmit: true,
                            userAnswerData: null,
                            countDownTime: 0,
                            isSubmit: false,
                            isRight: 3,
                            rightCoin: 0,
                            visible: false,
                        }
                    },
                    created: function () {
                        var e = this
                        return Object(p.a)(
                            Object(m.a)().mark(function t() {
                                var n, s, r
                                return Object(m.a)().wrap(function (t) {
                                    while (1) {
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    e.$bus.$emit('initClose'),
                                                    (e.fillBlanks = new w(Object(o.a)({}, e.options))),
                                                    (e.countDownTime =
                                                        e.fillBlanks.initCountdownTime() || 0),
                                                    (t.next = 5),
                                                    e.fillBlanks.getStatus()
                                                )
                                            case 5:
                                                if (
                                                    ((n = t.sent),
                                                        (s = n.data),
                                                        (r = n.code),
                                                        0 === r && s)
                                                ) {
                                                    t.next = 10
                                                    break
                                                }
                                                return t.abrupt('return')
                                            case 10:
                                                4 === s.questionType &&
                                                    (e.quesContent = JSON.parse(s.questionContent)),
                                                    (e.isSubmit = s.isSubmit),
                                                    e.initEventListener()
                                            case 13:
                                            case 'end':
                                                return t.stop()
                                        }
                                    }
                                }, t)
                            })
                        )()
                    },
                    mounted: function () {
                        var e = this
                        console.log(this.options, 'options')
                        this.userConfig = {
                            org: 'haiwaifenxiao',
                            sys: 'zaixianketang',
                            stuId: this.options.roomMessage.roomInfo.stuInfo.id,
                        }
                        this.$nextTick(function () {
                            Object(C.a)(
                                document.getElementById('interactionController'),
                                'index-99'
                            )
                            window.TalqsInteraction.lang = 'en'
                            e.fillBlanks.interactOpen()
                            e.sendLogger({
                                msg: '收到互动',
                                stage: 'start',
                            })
                        })
                    },
                    watch: {
                        quesContent: {
                            handler: function (e) {
                                console.info(
                                    '对象函数 handler(newVal)',
                                    e,
                                    'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                                )
                                e && !this.isSubmit && (this.visible = true)
                            },
                            deep: true,
                        },
                    },
                    methods: {
                        countDownComplete: function () {
                            console.info(
                                '对象函数 countDownComplete,filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                            )
                            this.destroyInteraction()
                        },
                        initEventListener: function () {
                            var e = this
                            console.info(
                                '对象函数 initEventListener,filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                            )
                            this.$bus.$on('closeContinusCorrect', function (t) {
                                console.info(
                                    '箭头函数 监听 closeContinusCorrect(data)',
                                    t,
                                    'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                                )
                                t && ((e.showResultToast = false), e.destroyInteraction())
                            })
                        },
                        submitAnswer: function (e) {
                            var t = this
                            return Object(p.a)(
                                Object(m.a)().mark(function n() {
                                    var o, s, r, i, a, c, u, l
                                    return Object(m.a)().wrap(function (n) {
                                        while (1) {
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 submitAnswer(userAnswerData)',
                                                            e,
                                                            'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                                                        ),
                                                        (t.disableSubmit = true),
                                                        (n.next = 4),
                                                        t.fillBlanks.submitAnswer(e)
                                                    )
                                                case 4:
                                                    if (
                                                        ((s = n.sent),
                                                            (r = s.params),
                                                            (i = s.response),
                                                            (a = s.code),
                                                            (c = s.rightCoin),
                                                            (u = s.isSubmit),
                                                            t.sendLogger({
                                                                msg: '提交答案结果',
                                                                params: r,
                                                                response: i,
                                                            }),
                                                            0 === a)
                                                    ) {
                                                        n.next = 13
                                                        break
                                                    }
                                                    return n.abrupt('return')
                                                case 13:
                                                    ; (l = e.isRight),
                                                        (t.showResultToast = true),
                                                        (t.rightCoin = c),
                                                        (t.isRight = l),
                                                        (t.isSubmit = u),
                                                        I.f(
                                                            null === (o = t.options) || void 0 === o
                                                                ? void 0
                                                                : o.ircMsg,
                                                            '4',
                                                            l
                                                        )
                                                case 19:
                                                case 'end':
                                                    return n.stop()
                                            }
                                        }
                                    }, n)
                                })
                            )()
                        },
                        changeAnswer: function (e) {
                            console.info(
                                '对象函数 changeAnswer(userAnswerData)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                            )
                            this.disableSubmit = e.answerData.every(function (e) {
                                return !e
                            })
                            this.sendLogger({
                                msg: '课件填空题-输入答案更改',
                                params: {
                                    answerData: e.answerData,
                                    disableSubmit: this.disableSubmit,
                                },
                            })
                        },
                        sendLogger: function (e) {
                            var t = e.msg,
                                n = void 0 === t ? '' : t,
                                o = e.stage,
                                s = void 0 === o ? '' : o,
                                r = e.params,
                                i = void 0 === r ? {} : r,
                                a = e.response,
                                c = void 0 === a ? {} : a
                            g.a.send({
                                tag: 'student.Interact',
                                content: {
                                    msg: n,
                                    interactType: 'FillBlank',
                                    interactId: this.options.ircMsg.interactId,
                                    interactStage: s,
                                    params: JSON.stringify(i),
                                    response: JSON.stringify(c),
                                },
                            })
                        },
                        destroyInteraction: function () {
                            var e
                            console.info(
                                '对象函数 destroyInteraction,filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                            )
                            this.sendLogger({
                                msg: '结束互动',
                                stage: 'end',
                            })
                            this.$destroy()
                            null === (e = this.$el) ||
                                void 0 === e ||
                                null === (e = e.parentNode) ||
                                void 0 === e ||
                                e.removeChild(this.$el)
                            var t = document.getElementsByClassName('keyboardLayerOfPad')[0]
                            t && document.body.removeChild(t)
                            Object(C.y)(
                                document.getElementById('interactionController'),
                                'index-99'
                            )
                        },
                    },
                    beforeDestroy: function () {
                        console.info(
                            '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                        )
                        this.isSubmit ||
                            this.submitAnswer({
                                isRight: 3,
                                answerData: [],
                                judgeData: [],
                            })
                    },
                    destroyed: function () {
                        console.info(
                            '对象函数 destroyed,filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/app.vue'
                        )
                        this.$bus.$off('closeContinusCorrect')
                    },
                },
                k = j,
                O = (n('0a26'), n('64f3'), n('2877')),
                y = Object(O.a)(k, u, l, false, null, '3efc4a9e', null),
                B = y.exports,
                x = (function (e) {
                    Object(i.a)(n, e)
                    var t = Object(a.a)(n)
                    function n() {
                        var e,
                            o =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 FillBlanks(opts)',
                                o,
                                'filePath:renderer/components/Classroom/CommonInteractions/fillBlanks/index.js'
                            ),
                            Object(s.a)(this, n),
                            (e = t.call(this, B)),
                            (e.options = o),
                            (e.dom = o.roomMessage.roomInfo.interactionController),
                            e.initVmApp('填空题'),
                            e
                        )
                    }
                    return (
                        Object(r.a)(n, [
                            {
                                key: 'createPropsData',
                                value: function () {
                                    var e = {}
                                    return Object(o.a)({ options: this.options }, e)
                                },
                            },
                        ]),
                        n
                    )
                })(c.a)
        },
        b17a: function (e, t, n) { },
        b6c9: function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return u
            })
            var o = n('d4ec'),
                s = n('bee2'),
                r = (n('99af'), n('d9e2'), n('8bbf')),
                i = n.n(r),
                a = n('3898'),
                c = n('d0db'),
                u = (function () {
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
                        Object(s.a)(e, [
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
                                    var t = i.a.extend(e),
                                        n = this.createPropsData(),
                                        o = new t({
                                            i18n: a.b,
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
                                        t = e.submit,
                                        n = e.key,
                                        o = void 0 === n ? '' : n
                                    if (this.vm) {
                                        var s, r
                                        if (
                                            (t && this.vm.submit(),
                                                this.vm.$destroy(),
                                                'classRest' === o)
                                        ) {
                                            null === this ||
                                                void 0 === this ||
                                                null === (s = this.dom) ||
                                                void 0 === s ||
                                                s.removeChild(
                                                    null === this ||
                                                        void 0 === this ||
                                                        null === (r = this.vm) ||
                                                        void 0 === r
                                                        ? void 0
                                                        : r.$el
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
                                value: function (e, t) {
                                    return e[''.concat(t)].properties
                                },
                            },
                            {
                                key: 'handleMsg',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {}
                                    console.log(e)
                                },
                            },
                        ]),
                        e
                    )
                })()
        },
        d4a7: function (e, t, n) { },
        d4be: function (e, t, n) {
            'use strict'
            n.d(t, 'c', function () {
                return c
            })
            n.d(t, 'b', function () {
                return u
            })
            n.d(t, 'a', function () {
                return l
            })
            var o = n('c7eb'),
                s = n('1da1'),
                r = n('dc21'),
                i = n('e39c'),
                a = (function () {
                    var e = Object(s.a)(
                        Object(o.a)().mark(function e(t, n) {
                            var s, a, c
                            return Object(o.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (s = Object(i.h)()),
                                                (a = s.oversea),
                                                (e.next = 3),
                                                Object(r.a)({
                                                    url: t,
                                                    params: n,
                                                    apiDomain: a,
                                                })
                                            )
                                        case 3:
                                            return (c = e.sent), e.abrupt('return', c)
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
                c = (function () {
                    var e = Object(s.a)(
                        Object(o.a)().mark(function e(t) {
                            var n, s
                            return Object(o.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = '/classroom-hub/question/student/submit'),
                                                (e.next = 3),
                                                a(n, t)
                                            )
                                        case 3:
                                            return (s = e.sent), e.abrupt('return', s)
                                        case 5:
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
                u = (function () {
                    var e = Object(s.a)(
                        Object(o.a)().mark(function e(t) {
                            var n
                            return Object(o.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n =
                                                    '/classroom-hub/classroom/student/interact/partakereport'),
                                                (e.next = 3),
                                                a(n, t)
                                            )
                                        case 3:
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
                l = (function () {
                    var e = Object(s.a)(
                        Object(o.a)().mark(function e(t) {
                            var n, s
                            return Object(o.a)().wrap(function (e) {
                                while (1) {
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = '/classroom-hub/question/student/status'),
                                                (e.next = 3),
                                                a(n, t)
                                            )
                                        case 3:
                                            return (s = e.sent), e.abrupt('return', s)
                                        case 5:
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
                })()
        },
    },
])
