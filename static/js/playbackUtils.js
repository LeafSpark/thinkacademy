; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-2630f156'],
  {
    3699: function (n, e, t) {
      'use strict'
      t.r(e)
      t.d(e, 'default', function () {
        return y
      })
      var o = t('5530'),
        i = t('d4ec'),
        s = t('bee2'),
        a = t('262e'),
        r = t('2caf'),
        c = t('b6c9'),
        l = function () {
          var n = this,
            e = n._self._c
          return n.visible
            ? e('ne-fill-blanks', {
              staticClass: 'fillBlanksContainer',
              attrs: {
                userConfig: n.userConfig,
                judgeConfig: n.judgeConfig,
                quesContent: n.quesContent,
                countDownTime: n.countDownTime,
                disableSubmit: n.disableSubmit,
                showResultToast: n.showResultToast,
                submitText: n.$t('common.submit'),
              },
              on: {
                submit: n.submitAnswer,
                changeAnswer: n.changeAnswer,
                countDownComplete: n.countDownComplete,
              },
            })
            : n._e()
        },
        u = [],
        m = t('c7eb'),
        d = t('1da1'),
        h = (t('d3b7'), t('753a')),
        f = (function (n) {
          Object(a.a)(t, n)
          var e = Object(r.a)(t)
          function t() {
            var n,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 FillBlanks(opts)',
                o,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/fillBlanks.js'
              ),
              Object(i.a)(this, t),
              (n = e.call(this)),
              (n.options = o),
              n.handleQuesInfo(),
              n
            )
          }
          return (
            Object(s.a)(t, [
              {
                key: 'handleQuesInfo',
                value: function () {
                  var n = this.options.ircMsg.quesContent
                  return n
                },
              },
              {
                key: 'initCountdownTime',
                value: function () {
                  return 1000 * this.options.ircMsg.countDownTime
                },
              },
              {
                key: 'submitAnswer',
                value: (function () {
                  var n = Object(d.a)(
                    Object(m.a)().mark(function n(e) {
                      var t
                      return Object(m.a)().wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (t = e.isRight), n.abrupt('return', t)
                            case 2:
                            case 'end':
                              return n.stop()
                          }
                        }
                      }, n)
                    })
                  )
                  function e(e) {
                    return (
                      console.info(
                        '函数申明 submitAnswer(_x)',
                        e,
                        'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/fillBlanks.js'
                      ),
                      n.apply(this, arguments)
                    )
                  }
                  return e
                })(),
              },
            ]),
            t
          )
        })(h.a),
        p = t('d0db'),
        b = t('e39c'),
        v = {
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
              visible: false,
            }
          },
          created: function () {
            var n = this
            return Object(d.a)(
              Object(m.a)().mark(function e() {
                return Object(m.a)().wrap(function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        ; (n.fillBlanks = new f(Object(o.a)({}, n.options))),
                          (n.countDownTime =
                            n.fillBlanks.initCountdownTime() || 0),
                          (n.quesContent = n.fillBlanks.handleQuesInfo())
                      case 3:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )()
          },
          mounted: function () {
            var n = this
            this.userConfig = {
              org: 'haiwaifenxiao',
              sys: 'zaixianketang',
              stuId: this.options.roomMessage.roomInfo.stuInfo.id,
            }
            this.$nextTick(function () {
              Object(b.a)(
                document.getElementById('interactionController'),
                'index-99'
              )
              window.TalqsInteraction.lang = 'en'
              n.sendLogger({
                msg: '收到互动',
                stage: 'start',
              })
            })
          },
          watch: {
            quesContent: {
              handler: function (n) {
                console.info(
                  '对象函数 handler(newVal)',
                  n,
                  'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
                )
                n && !this.isSubmit && (this.visible = true)
              },
              deep: true,
            },
          },
          methods: {
            countDownComplete: function () {
              console.info(
                '对象函数 countDownComplete,filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
              )
              this.destroyInteraction()
            },
            submitAnswer: function (n) {
              var e = this
              return Object(d.a)(
                Object(m.a)().mark(function t() {
                  return Object(m.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 submitAnswer(userAnswerData)',
                              n,
                              'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
                            ),
                            (e.disableSubmit = true),
                            (t.next = 4),
                            e.fillBlanks.submitAnswer(n)
                          )
                        case 4:
                          ; (e.isRight = t.sent),
                            (e.showResultToast = true),
                            (e.isSubmit = true),
                            e.autoCloseBoard(5000)
                        case 8:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            changeAnswer: function (n) {
              console.info(
                '对象函数 changeAnswer(userAnswerData)',
                n,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
              )
              this.disableSubmit = n.answerData.every(function (n) {
                return !n
              })
            },
            autoCloseBoard: function (n) {
              var e = this
              console.info(
                '对象函数 autoCloseBoard(timer)',
                n,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
              )
              var t = setTimeout(function () {
                e.destroyInteraction()
                clearTimeout(t)
                t = null
              }, n)
            },
            sendLogger: function (n) {
              var e = n.msg,
                t = void 0 === e ? '' : e,
                o = n.stage,
                i = void 0 === o ? '' : o,
                s = n.params,
                a = void 0 === s ? {} : s,
                r = n.response,
                c = void 0 === r ? {} : r
              p.a.send({
                tag: 'student.Interact',
                content: {
                  msg: t,
                  interactType: 'FillBlank',
                  interactId: this.options.ircMsg.interactId,
                  interactStage: i,
                  params: JSON.stringify(a),
                  response: JSON.stringify(c),
                },
              })
            },
            destroyInteraction: function () {
              var n, e
              console.info(
                '对象函数 destroyInteraction,filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
              )
              this.sendLogger({
                msg: '结束互动',
                stage: 'end',
              })
              this.$destroy()
              null === (n = this.$el) ||
                void 0 === n ||
                null === (e = n.parentNode) ||
                void 0 === e ||
                e.removeChild(this.$el)
              var t = document.getElementsByClassName('keyboardLayerOfPad')[0]
              t && document.body.removeChild(t)
              Object(b.w)(
                document.getElementById('interactionController'),
                'index-99'
              )
            },
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/app.vue'
            )
            this.isSubmit ||
              this.submitAnswer({
                isRight: 3,
                answerData: [],
                judgeData: [],
              })
          },
        },
        g = v,
        k = (t('cc3b'), t('fd39'), t('2877')),
        w = Object(k.a)(g, l, u, false, null, '846f65ba', null),
        C = w.exports,
        y = (function (n) {
          Object(a.a)(t, n)
          var e = Object(r.a)(t)
          function t() {
            var n,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 FillBlanks(opts)',
                o,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackFillBlanks/index.js'
              ),
              Object(i.a)(this, t),
              (n = e.call(this, C)),
              (n.options = o),
              (n.dom = o.roomMessage.roomInfo.interactionController),
              n.initVmApp('填空题'),
              n
            )
          }
          return (
            Object(s.a)(t, [
              {
                key: 'createPropsData',
                value: function () {
                  var n = {}
                  return Object(o.a)({ options: this.options }, n)
                },
              },
            ]),
            t
          )
        })(c.a)
    },
    '753a': function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return r
      })
      var o = t('d4ec'),
        i = t('bee2'),
        s = (t('d9e2'), t('8bbf')),
        a = t.n(s),
        r = (function () {
          function n(e) {
            Object(o.a)(this, n)
            this.app = e
            this.vm = null
          }
          return (
            Object(i.a)(n, [
              {
                key: 'initVmApp',
                value: function () {
                  if (!this.dom) {
                    throw Error('互动的dom容器不存在')
                  }
                  this.dom.children.length > 0 && (this.dom.innerHTML = '')
                  this.vm = this.initVm(this.app)
                  this.render(this.dom, this.vm)
                },
              },
              {
                key: 'initVm',
                value: function (n) {
                  var e = a.a.extend(n),
                    t = this.createPropsData(),
                    o = new e({ propsData: t })
                  return o.$mount(), o
                },
              },
              {
                key: 'render',
                value: function (n, e) {
                  n.appendChild(e.$el)
                },
              },
              {
                key: 'destroy',
                value: function () {
                  var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                    e = n.submit
                  this.vm &&
                    (e && this.vm.submit(),
                      this.vm.$destroy(),
                      (this.dom.innerHTML = ''),
                      (this.vm = null),
                      (this.app = null))
                },
              },
              {
                key: 'getProperties',
                value: function (n, e) {
                  return n[''.concat(e)].properties
                },
              },
              {
                key: 'handleMsg',
                value: function () { },
              },
            ]),
            n
          )
        })()
    },
    '9a29': function (n, e, t) { },
    b6c9: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return l
      })
      var o = t('d4ec'),
        i = t('bee2'),
        s = (t('99af'), t('d9e2'), t('8bbf')),
        a = t.n(s),
        r = t('3898'),
        c = t('d0db'),
        l = (function () {
          function n(e) {
            console.info(
              '函数申明 InteractionBase(app)',
              e,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(o.a)(this, n)
            this.app = e
            this.vm = null
            this.keepOtherDom = false
          }
          return (
            Object(i.a)(n, [
              {
                key: 'initVmApp',
                value: function (n) {
                  if (!this.dom) {
                    throw Error('互动的dom容器不存在')
                  }
                  this.dom.children.length > 0 &&
                    !this.keepOtherDom &&
                    (c.a.send({
                      tag: 'tempInteractionTest',
                      content: {
                        msg: '清空互动容器\uFF0C由'
                          .concat(n, '触发清空\uFF0C清空')
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
                value: function (n) {
                  var e = a.a.extend(n),
                    t = this.createPropsData(),
                    o = new e({
                      i18n: r.b,
                      propsData: t,
                      store: this.store || {},
                    })
                  return o.$mount(), o
                },
              },
              {
                key: 'render',
                value: function (n, e) {
                  n.appendChild(e.$el)
                },
              },
              {
                key: 'destroy',
                value: function () {
                  var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                    e = n.submit
                  this.vm
                    ? (e && this.vm.submit(),
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
                value: function (n, e) {
                  return n[''.concat(e)].properties
                },
              },
              {
                key: 'handleMsg',
                value: function () { },
              },
            ]),
            n
          )
        })()
    },
    bdb5: function (n, e, t) { },
    cc3b: function (n, e, t) {
      'use strict'
      t('9a29')
    },
    fd39: function (n, e, t) {
      'use strict'
      t('bdb5')
    },
  },
])
