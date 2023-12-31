; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-f823038e'],
  {
    '02ac': function (e, t, o) {
      e.exports = o.p + 'static/media/backgroundAudio.9b907a48.mp3'
    },
    '3aa6': function (e, t, o) {
      'use strict'
      o.r(t)
      o.d(t, 'default', function () {
        return w
      })
      var s = o('5530'),
        n = o('d4ec'),
        i = o('bee2'),
        a = o('262e'),
        r = o('2caf'),
        d = o('b6c9'),
        l = function () {
          var e = this,
            t = e._self._c
          return t('div', { staticClass: 'speedy-hand' }, [
            t(
              'div',
              { staticClass: 'speedy-hand-box' },
              [
                t('lottie-player', {
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'ready',
                    autoplay: '',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/01ready.json',
                  },
                  on: { complete: e.onLottieReadyComplete },
                }),
                t('audio', {
                  ref: 'readygoAudio',
                  staticClass: 'hide',
                  attrs: {
                    src: o('cc44'),
                    autoplay: '',
                  },
                }),
                t('audio', {
                  ref: 'backgroundAudio',
                  staticClass: 'hide',
                  attrs: {
                    src: o('02ac'),
                    autoplay: '',
                  },
                }),
                t('lottie-player', {
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'go',
                    autoplay: '',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/01go.json',
                  },
                  on: { complete: e.onLottieGoComplete },
                }),
                t('lottie-player', {
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'waitClickLottie',
                    loop: '',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/02wait.json',
                  },
                }),
                t('div', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.isShowBtn,
                      expression: 'isShowBtn',
                    },
                  ],
                  staticClass: 'mouseAction',
                  on: { click: e.onSpeedyHand },
                }),
                t('lottie-player', {
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'press',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/03press.json',
                  },
                }),
                t('audio', {
                  ref: 'pressAudio',
                  staticClass: 'hide',
                  attrs: { src: o('f5e7') },
                }),
                t('lottie-player', {
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'loading',
                    loop: '',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/04loading.json',
                  },
                }),
                t('lottie-player', {
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'result',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/05result.json',
                  },
                  on: { complete: e.onResultLottieComplete },
                }),
                t('audio', {
                  ref: 'resultAudio',
                  staticClass: 'hide',
                  attrs: { src: o('f7ca') },
                }),
                t('lottie-player', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.isShowResult,
                      expression: 'isShowResult',
                    },
                  ],
                  staticClass: 'lottie-player',
                  attrs: {
                    id: 'onStage',
                    loop: '',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/06onStage.json',
                  },
                }),
                t(
                  'div',
                  {
                    directives: [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: e.resultData.studentId > 0,
                        expression: 'resultData.studentId > 0',
                      },
                    ],
                    staticClass: 'result-student-img',
                  },
                  [
                    t('img', {
                      attrs: {
                        src: e.resultData.avatar,
                        width: '140',
                        height: '140',
                      },
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
                        value: e.resultData.studentId > 0,
                        expression: 'resultData.studentId > 0',
                      },
                    ],
                    staticClass: 'result-student-name',
                  },
                  [e._v(' ' + e._s(e.resultData.nickName) + ' ')]
                ),
                t(
                  'div',
                  {
                    directives: [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: e.isNoStudent,
                        expression: 'isNoStudent',
                      },
                    ],
                    staticClass: 'result-nostudent-tips',
                  },
                  [e._v(e._s(e.$t('common.speedyHand')))]
                ),
                t('lottie-player', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: true,
                      expression: 'true',
                    },
                  ],
                  staticClass: 'lottie-player pos',
                  attrs: {
                    id: 'errorLottie',
                    mode: 'normal',
                    src: '/lottiefiles/speedyHand/07error.json',
                  },
                }),
                t('audio', {
                  ref: 'errorLottieAudio',
                  staticClass: 'hide',
                  attrs: { src: o('729d') },
                }),
              ],
              1
            ),
          ])
        },
        u = [],
        c = o('c7eb'),
        p = o('1da1'),
        m = (o('4de4'), o('d3b7'), o('a717'), o('d0db')),
        h = o('c342'),
        y = o('3898'),
        v = o('230e'),
        f = {
          data: function () {
            return {
              isShowBtn: false,
              pressTimer: null,
              destroyInteractionTimer: null,
              isShowResult: false,
              isNoStudent: false,
              resultData: {
                studentId: '',
                nickName: '',
                avatar: o('9630'),
              },
              isPressSpeedyHand: false,
              halfWay: 'halfway',
              resultNoBody: 'nobody',
              resultHasBody: 'normal',
            }
          },
          props: {
            options: {
              type: Object,
              default: function () { },
            },
          },
          methods: {
            onLottieReadyComplete: function () {
              var e, t
              console.info(
                '对象函数 onLottieReadyComplete,filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
              )
              this.sendLogger(
                '\uFF08抢答\uFF09ready 播放完 onLottieReadyComplete',
                'onLottieReadyComplete'
              )
              null === (e = document.getElementById('ready')) ||
                void 0 === e ||
                e.destroy()
              null === (t = document.getElementById('go')) ||
                void 0 === t ||
                t.play()
              this.isShowBtn = true
            },
            onLottieGoComplete: function () {
              var e, t
              console.info(
                '对象函数 onLottieGoComplete,filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
              )
              this.sendLogger(
                '\uFF08抢答\uFF09go 播放完 onLottieGoComplete',
                'onLottieGoComplete'
              )
              null === (e = document.getElementById('go')) ||
                void 0 === e ||
                e.destroy()
              null === (t = document.getElementById('waitClickLottie')) ||
                void 0 === t ||
                t.play()
            },
            onResultLottieComplete: function () {
              var e,
                t,
                o = this
              console.info(
                '对象函数 onResultLottieComplete,filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
              )
              this.sendLogger(
                '\uFF08抢答\uFF09有人抢答 播放完 onResultLottieComplete',
                'onResultLottieComplete'
              )
              this.isShowResult = true
              null === (e = document.getElementById('result')) ||
                void 0 === e ||
                e.destroy()
              null === (t = document.getElementById('onStage')) ||
                void 0 === t ||
                t.play()
              var s,
                n = this.$store.state.smallClass.videoMicLinkUsers,
                i = n.filter(function (e) {
                  return e == o.resultData.studentId
                })
                ; (this.sendLogger(
                  '\uFF08抢答\uFF09有人抢答 播放完 onResultLottieComplete',
                  'onResultLottieComplete',
                  {
                    videoMicLinkUsers: n,
                    student: i,
                  }
                ),
                  i.length) &&
                  (null === (s = document.getElementById('onStage')) ||
                    void 0 === s ||
                    s.destroy(),
                    this.destroyInteraction(this.resultHasBody))
            },
            onSpeedyHand: function () {
              var e = this
              return Object(p.a)(
                Object(c.a)().mark(function t() {
                  var o, s, n, i, a, r, d, l
                  return Object(c.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 onSpeedyHand,filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                            ),
                              !e.isPressSpeedyHand)
                          ) {
                            t.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(_this2.isPressSpeedyHand)为true触发return,path: /renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                            ),
                            t.abrupt('return')
                          )
                        case 4:
                          return (
                            (e.isPressSpeedyHand = true),
                            e.sendLogger(
                              '\uFF08抢答\uFF09点击抢答--初始',
                              'onSpeedyHand'
                            ),
                            e.$refs.pressAudio.play(),
                            null === (o = document.getElementById('go')) ||
                            void 0 === o ||
                            o.destroy(),
                            null ===
                            (s =
                              document.getElementById('waitClickLottie')) ||
                            void 0 === s ||
                            s.destroy(),
                            null === (n = document.getElementById('press')) ||
                            void 0 === n ||
                            n.play(),
                            (a = {
                              planId:
                                e.options.roomMessage.roomInfo.planInfo.id,
                              classId:
                                e.options.roomMessage.roomInfo.commonOption
                                  .classId,
                              interactId: e.options.ircMsg.interactId,
                            }),
                            e.sendLogger(
                              '\uFF08抢答\uFF09点击抢答--params',
                              'onSpeedyHand',
                              a
                            ),
                            (t.next = 15),
                            Object(h.a)(a).catch(function (t) {
                              return (
                                console.info(
                                  '箭头函数 answerRob的catch(err)',
                                  t,
                                  'filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                                ),
                                e.sendLogger(
                                  '接口报错:抢答:',
                                  'onSpeedyHand',
                                  { err: t },
                                  'error'
                                ),
                                t
                              )
                            })
                          )
                        case 15:
                          ; (r = t.sent),
                            e.sendLogger(
                              '\uFF08抢答\uFF09点击抢答--res',
                              'onSpeedyHand',
                              r
                            ),
                            (d = r.code),
                            (l = r.data),
                            0 === d &&
                            (null === l ||
                              void 0 === l ||
                              null === (i = l.studentInfo) ||
                              void 0 === i
                              ? void 0
                              : i.userId) > 0 &&
                            ((e.isShowBtn = false),
                              e.resultStudent(l.studentInfo)),
                            (e.pressTimer = setTimeout(function () {
                              var t, o
                              clearTimeout(e.pressTimer)
                              null === (t = document.getElementById('press')) ||
                                void 0 === t ||
                                t.destroy()
                              null ===
                                (o = document.getElementById('loading')) ||
                                void 0 === o ||
                                o.play()
                            }, 800))
                        case 21:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            receiveMessage: function (e) {
              console.info(
                '对象函数 receiveMessage(noticeContent)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
              )
              this.sendLogger(
                '\uFF08抢答\uFF09接收消息--speedyHand-receiveMessage',
                'receiveMessage',
                e
              )
              var t,
                o,
                s,
                n = e.data,
                i = e.status
              if (3 === i) {
                return (
                  console.info(
                    'if(status === 3)为true触发return,path: /renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                  ),
                  void this.destroyInteraction(this.halfWay)
                )
              }
              2 !== i || n.studentId
                ? 1 === i &&
                (null === n || void 0 === n ? void 0 : n.studentId) > 0 &&
                (this.sendLogger(
                  '\uFF08抢答\uFF09有人抢答',
                  'receiveMessage',
                  n
                ),
                  (this.isShowBtn = false),
                  this.resultStudent(n))
                : (this.sendLogger(
                  '\uFF08抢答\uFF09无人抢答',
                  'receiveMessage',
                  n
                ),
                  (this.isShowBtn = false),
                  (this.isNoStudent = true),
                  null === (t = document.getElementById('errorLottie')) ||
                  void 0 === t ||
                  t.play(),
                  null === (o = this.$refs.errorLottieAudio) ||
                  void 0 === o ||
                  o.play(),
                  null === (s = this.$refs.backgroundAudio) ||
                  void 0 === s ||
                  s.pause(),
                  this.destoryLottie(),
                  this.destroyInteraction(this.resultNoBody))
            },
            destroyInteraction: function (e) {
              var t,
                o = this
              if (
                (console.info(
                  '对象函数 destroyInteraction(type)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                ),
                  this.sendLogger(
                    '\uFF08抢答\uFF09摧毁互动',
                    'destroyInteraction',
                    e
                  ),
                  (this.isPressSpeedyHand = false),
                  e === this.halfWay)
              ) {
                null === (t = this.$el.parentNode) ||
                  void 0 === t ||
                  t.removeChild(this.$el)
                this.$destroy()
                Object(v.a)({
                  msg: y.b.t('classroom.interactions.redRain.toastTip'),
                  duration: 2000,
                  parentNode: document.getElementById('interactionController'),
                })
              } else {
                if (e === this.resultNoBody) {
                  this.destroyInteractionTimer = setTimeout(function () {
                    var e
                    clearTimeout(o.destroyInteractionTimer)
                    null === (e = o.$el.parentNode) ||
                      void 0 === e ||
                      e.removeChild(o.$el)
                    o.$destroy()
                  }, 3500)
                } else {
                  if (e === this.resultHasBody) {
                    var s
                    null === (s = this.$el.parentNode) ||
                      void 0 === s ||
                      s.removeChild(this.$el)
                    this.$destroy()
                  }
                }
              }
            },
            resultStudent: function (e) {
              var t, s
              if (
                (console.info(
                  '对象函数 resultStudent(data)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                ),
                  this.resultData.studentId,
                  this.sendLogger('\uFF08抢答\uFF09有人抢答', 'resultStudent', e),
                  this.resultData.studentId)
              ) {
                console.info(
                  'if(this.resultData.studentId)为true触发return,path: /renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
                )
              } else {
                this.resultData.studentId
                var n = this.options.roomMessage.roomInfo.stuInfo.id,
                  i =
                    (null === e || void 0 === e ? void 0 : e.studentId) ||
                    (null === e || void 0 === e ? void 0 : e.userId),
                  a = ''
                a =
                  n === i
                    ? 'Me('.concat(
                      null === e || void 0 === e ? void 0 : e.nickName,
                      ')'
                    )
                    : null === e || void 0 === e
                      ? void 0
                      : e.nickName
                this.resultData.studentId = i
                this.resultData.nickName = a
                this.resultData.avatar =
                  (null === e || void 0 === e ? void 0 : e.avatar) || o('9630')
                this.resultData
                null === (t = this.$refs.resultAudio) ||
                  void 0 === t ||
                  t.play()
                null === (s = document.getElementById('result')) ||
                  void 0 === s ||
                  s.play()
                this.destoryLottie()
              }
            },
            destoryLottie: function () {
              var e, t, o
              console.info(
                '对象函数 destoryLottie,filePath:renderer/components/Classroom/CommonInteractions/speedyHand/app.vue'
              )
              this.sendLogger('\uFF08抢答\uFF09摧毁lottie', 'destoryLottie')
              null === (e = document.getElementById('waitClickLottie')) ||
                void 0 === e ||
                e.destroy()
              null === (t = document.getElementById('press')) ||
                void 0 === t ||
                t.destroy()
              null === (o = document.getElementById('loading')) ||
                void 0 === o ||
                o.destroy()
            },
            sendLogger: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 'info'
              m.a.send({
                tag: 'student.Interact',
                content: {
                  msg: e,
                  interactType: 'speedyHand',
                  interactId: this.options.ircMsg.interactId,
                  event: t,
                  others: o,
                },
                level: s,
              })
            },
          },
        },
        g = f,
        C = (o('a25b'), o('2877')),
        I = Object(C.a)(g, l, u, false, null, null, null),
        L = I.exports,
        w = (function (e) {
          Object(a.a)(o, e)
          var t = Object(r.a)(o)
          function o() {
            var e,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            return (
              console.info(
                '函数申明 SpeedyHand(opts, store)',
                s,
                i,
                'filePath:renderer/components/Classroom/CommonInteractions/speedyHand/index.js'
              ),
              Object(n.a)(this, o),
              (e = t.call(this, L)),
              (e.options = s),
              (e.store = i),
              (e.dom = s.roomMessage.roomInfo.interactionController),
              (e.keepOtherDom = s.keepOtherDom),
              e.initVmApp('抢答'),
              e
            )
          }
          return (
            Object(i.a)(o, [
              {
                key: 'createPropsData',
                value: function () {
                  var e = {}
                  return Object(s.a)({ options: this.options }, e)
                },
              },
            ]),
            o
          )
        })(d.a)
    },
    '659b': function (e, t, o) { },
    '729d': function (e, t, o) {
      e.exports = o.p + 'static/media/error.1a56d946.mp3'
    },
    9630: function (e, t, o) {
      e.exports = o.p + 'static/img/normal.2e99a41b.png'
    },
    a25b: function (e, t, o) {
      'use strict'
      o('659b')
    },
    b6c9: function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return l
      })
      var s = o('d4ec'),
        n = o('bee2'),
        i = (o('99af'), o('d9e2'), o('8bbf')),
        a = o.n(i),
        r = o('3898'),
        d = o('d0db'),
        l = (function () {
          function e(t) {
            console.info(
              '函数申明 InteractionBase(app)',
              t,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(s.a)(this, e)
            this.app = t
            this.vm = null
            this.keepOtherDom = false
          }
          return (
            Object(n.a)(e, [
              {
                key: 'initVmApp',
                value: function (e) {
                  if (!this.dom) {
                    throw Error('互动的dom容器不存在')
                  }
                  this.dom.children.length > 0 &&
                    !this.keepOtherDom &&
                    (d.a.send({
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
                    o = this.createPropsData(),
                    s = new t({
                      i18n: r.b,
                      propsData: o,
                      store: this.store || {},
                    })
                  return s.$mount(), s
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
    cc44: function (e, t, o) {
      e.exports = o.p + 'static/media/readygo1.a2e99275.mp3'
    },
    f5e7: function (e, t, o) {
      e.exports = o.p + 'static/media/press.48c61cf3.mp3'
    },
    f7ca: function (e, t, o) {
      e.exports = o.p + 'static/media/getResult.91e65299.mp3'
    },
  },
])
