; (window.webpackJsonp = window.webpackJsonp || []).push([
    ['chunk-256b7dac'],
    {
        '4d30': function (e, t, n) {
            'use strict'
            n.r(t)
            n.d(t, 'default', function () {
                return I
            })
            var o = n('5530'),
                a = n('d4ec'),
                r = n('bee2'),
                s = n('262e'),
                i = n('2caf'),
                c = n('b6c9'),
                l = function () {
                    var e = this,
                        t = e._self._c
                    return e.showGame
                        ? t('NeGamecourseware', {
                            attrs: {
                                gameUrl: e.gameUrl,
                                nickName: e.nickName,
                                role: e.role,
                                isAnswer: e.isAnswer,
                                lang: e.lang,
                                showResultToast: e.showResultToast,
                            },
                            on: {
                                exit: e.destroy,
                                loaded: e.gameLoaded,
                                reload: e.gameReload,
                                fail: e.gameFail,
                            },
                        })
                        : e._e()
                },
                m = [],
                u = n('c7eb'),
                d = n('1da1'),
                p = (n('99af'), n('d3b7'), n('159b'), n('ac1f'), n('1276'), n('0a4b')),
                g = n('ceab'),
                h = n('c5ee'),
                f = n('e39c'),
                v = n('d0db'),
                b = n('e417'),
                y = {
                    name: 'GameCourseware',
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
                            gameUrl: null,
                            nickName: '',
                            role: 'student',
                            lang: 'en',
                            showGame: false,
                            isAnswer: 2,
                            userCoin: null,
                            interactStatus: 1,
                            showResultToast: false,
                            isSubmiting: false,
                        }
                    },
                    created: function () {
                        var e = this
                        return Object(d.a)(
                            Object(u.a)().mark(function t() {
                                var n
                                return Object(u.a)().wrap(function (t) {
                                    while (1) {
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    e.changefullPageStyle(true),
                                                    (t.next = 3),
                                                    e.getGameServe()
                                                )
                                            case 3:
                                                ; (n = t.sent),
                                                    (e.nickName =
                                                        e.options.roomMessage.roomInfo.stuInfo.nickName),
                                                    (e.gameUrl = ''
                                                        .concat(n, '/')
                                                        .concat(e.options.ircMsg.interactiveTemplatePath)),
                                                    e.sendLogger({
                                                        msg: '收到互动, 加载互动游戏地址: '.concat(
                                                            JSON.stringify(e.gameUrl)
                                                        ),
                                                        stage: 'start',
                                                    }),
                                                    (e.showGame = true)
                                            case 8:
                                            case 'end':
                                                return t.stop()
                                        }
                                    }
                                }, t)
                            })
                        )()
                    },
                    methods: {
                        getGameServe: function () {
                            var e = this
                            return Object(d.a)(
                                Object(u.a)().mark(function t() {
                                    var n, o, a, r, s, i, c, l, m
                                    return Object(u.a)().wrap(function (t) {
                                        while (1) {
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        console.info(
                                                            '对象函数 getGameServe,filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                                                        ),
                                                        (n = {}),
                                                        (o = Object(f.o)('planId')),
                                                        (t.next = 5),
                                                        p.nativeApi.getClientInfo()
                                                    )
                                                case 5:
                                                    return (
                                                        (a = t.sent),
                                                        (r = a.CW_SERVER_ADDRESS),
                                                        (s = a.CW_WEBROOT),
                                                        (t.next = 10),
                                                        Object(g.b)(1 * o)
                                                    )
                                                case 10:
                                                    if (
                                                        ((i = t.sent),
                                                            0 === i.code && 0 !== i.data.list.length)
                                                    ) {
                                                        t.next = 15
                                                        break
                                                    }
                                                    return (
                                                        console.info(
                                                            'if(courseware.code !== 0 || courseware.data.list.length === 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                                                        ),
                                                        e.$Message.info('COURSESWARE ERROR'),
                                                        t.abrupt('return')
                                                    )
                                                case 15:
                                                    return (
                                                        i.data.list.forEach(function (e) {
                                                            16 == e.id && (n = e)
                                                        }),
                                                        (c = ''.concat(r).concat(n.detail.catalog)),
                                                        e.sendLogger({
                                                            msg: '游戏本地服务域名: '
                                                                .concat(JSON.stringify(r))
                                                                .concat(JSON.stringify(n.detail.catalog)),
                                                        }),
                                                        (t.next = 20),
                                                        Object(h.a)(
                                                            n.detail.baseZipUrl,
                                                            n.detail.baseZipMd5,
                                                            s
                                                        )
                                                    )
                                                case 20:
                                                    return (
                                                        (l = t.sent),
                                                        l ||
                                                        ((m = n.detail.compressIndexUrl.split(
                                                            n.detail.catalog
                                                        )),
                                                            (c = ''.concat(m[0]).concat(n.detail.catalog)),
                                                            e.sendLogger({
                                                                msg: '游戏远端服务域名: '
                                                                    .concat(JSON.stringify(m[0]))
                                                                    .concat(JSON.stringify(n.detail.catalog)),
                                                            })),
                                                        t.abrupt('return', c)
                                                    )
                                                case 23:
                                                case 'end':
                                                    return t.stop()
                                            }
                                        }
                                    }, t)
                                })
                            )()
                        },
                        gameLoaded: function () {
                            console.info(
                                '对象函数 gameLoaded,filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                            )
                            this.sendLogger({ msg: '游戏加载成功' })
                        },
                        gameReload: function () {
                            console.info(
                                '对象函数 gameReload,filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                            )
                            this.sendLogger({ msg: '重新加载游戏' })
                        },
                        gameFail: function () {
                            console.info(
                                '对象函数 gameFail,filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                            )
                            this.sendLogger({ msg: '游戏加载失败' })
                        },
                        destroy: function () {
                            var e, t
                            console.info(
                                '对象函数 destroy,filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                            )
                            Object(b.e)(
                                'hw_classroom_interact_game_quit',
                                this.options.roomMessage.roomInfo.commonOption,
                                { interact_id: this.options.ircMsg.interactId }
                            )
                            this.$destroy()
                            null === (e = this.$el) ||
                                void 0 === e ||
                                null === (t = e.parentNode) ||
                                void 0 === t ||
                                t.removeChild(this.$el)
                        },
                        changefullPageStyle: function (e) {
                            console.info(
                                '对象函数 changefullPageStyle(status)',
                                e,
                                'filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                            )
                            var t = document.getElementById('interactionGame'),
                                n = this.options.roomMessage.roomInfo.commonOption.classType
                            e
                                ? ((t.style.zIndex = 2 == n ? 2001 : 1003),
                                    (t.style.height = '100%'),
                                    (t.style.backgroundColor = '#000000'))
                                : ((t.style.zIndex = 1),
                                    (t.style.height = 'auto'),
                                    (t.style.backgroundColor = 'transparent'))
                        },
                        sendLogger: function (e) {
                            var t = e.msg,
                                n = void 0 === t ? '' : t,
                                o = e.stage,
                                a = void 0 === o ? '' : o,
                                r = e.params,
                                s = void 0 === r ? {} : r,
                                i = e.response,
                                c = void 0 === i ? {} : i
                            v.a.send({
                                tag: 'student.Interact',
                                content: {
                                    msg: n,
                                    interactType: 'Game',
                                    interactId: this.options.ircMsg.interactId,
                                    interactStage: a,
                                    params: JSON.stringify(s),
                                    response: JSON.stringify(c),
                                },
                            })
                        },
                    },
                    destroyed: function () {
                        console.info(
                            '对象函数 destroyed,filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/app.vue'
                        )
                        this.sendLogger({
                            msg: '结束互动',
                            stage: 'end',
                        })
                        this.showGame = false
                        this.changefullPageStyle(false)
                    },
                },
                C = y,
                w = n('2877'),
                O = Object(w.a)(C, l, m, false, null, null, null),
                k = O.exports,
                I = (function (e) {
                    Object(s.a)(n, e)
                    var t = Object(i.a)(n)
                    function n() {
                        var e,
                            o =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {}
                        return (
                            console.info(
                                '函数申明 GameCourseware(opts)',
                                o,
                                'filePath:renderer/components/Classroom/CommonInteractions/playBackGameCourseware/index.js'
                            ),
                            Object(a.a)(this, n),
                            (e = t.call(this, k)),
                            (e.options = o),
                            (e.dom = o.roomMessage.roomInfo.interactionGame),
                            e.initVmApp('游戏课件'),
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
        b6c9: function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return l
            })
            var o = n('d4ec'),
                a = n('bee2'),
                r = (n('99af'), n('d9e2'), n('8bbf')),
                s = n.n(r),
                i = n('3898'),
                c = n('d0db'),
                l = (function () {
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
                        Object(a.a)(e, [
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
                                    var t = s.a.extend(e),
                                        n = this.createPropsData(),
                                        o = new t({
                                            i18n: i.b,
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
