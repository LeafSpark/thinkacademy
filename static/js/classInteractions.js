; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-20a1b1ce'],
  {
    '2fe5': function (e, t, n) {
      'use strict'
      n('f7d4')
    },
    '6a33': function (e, t, n) {
      e.exports = n.p + 'static/media/interact-success.bd430e73.mp3'
    },
    '6f0c': function (e, t, n) {
      e.exports = n.p + 'static/media/interact-submit.83bed748.mp3'
    },
    '753a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var s = n('d4ec'),
        o = n('bee2'),
        r = (n('d9e2'), n('8bbf')),
        a = n.n(r),
        i = (function () {
          function e(t) {
            Object(s.a)(this, e)
            this.app = t
            this.vm = null
          }
          return (
            Object(o.a)(e, [
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
                value: function (e) {
                  var t = a.a.extend(e),
                    n = this.createPropsData(),
                    s = new t({ propsData: n })
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
                  this.vm &&
                    (t && this.vm.submit(),
                      this.vm.$destroy(),
                      (this.dom.innerHTML = ''),
                      (this.vm = null),
                      (this.app = null))
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
    8449: function (e, t, n) {
      'use strict'
      n.r(t)
      n.d(t, 'default', function () {
        return G
      })
      var s,
        o = n('5530'),
        r = n('d4ec'),
        a = n('bee2'),
        i = n('262e'),
        c = n('2caf'),
        u = n('b6c9'),
        l = function () {
          var e = this,
            t = e._self._c
          return t(
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
              class:
                e.isSubmit && !e.isExceptionStatus
                  ? 'courseware-board-container-musk'
                  : 'courseware-board-container',
            },
            [
              t('audio', {
                ref: 'interactFail',
                staticClass: 'hide',
                attrs: { src: n('fb97') },
              }),
              t('audio', {
                ref: 'interactKeyTone',
                staticClass: 'hide',
                attrs: { src: n('fc4e') },
              }),
              t('audio', {
                ref: 'interactSubmit',
                staticClass: 'hide',
                attrs: { src: n('6f0c') },
              }),
              t('audio', {
                ref: 'interactSuccess',
                staticClass: 'hide',
                attrs: { src: n('6a33') },
              }),
              t(
                'div',
                {
                  ref: 'coursewareBoardBlock',
                  staticClass: 'courseware-board-block',
                  class: [e.isExpanded ? 'closeBoard' : 'openBoard'],
                },
                [
                  e.isSubmit
                    ? e._e()
                    : [
                      t(
                        'div',
                        {
                          staticClass: 'courseware-board-control',
                          on: {
                            click: function (t) { },
                          },
                        },
                        [
                          t('i', {
                            staticClass: 'ne-icon',
                            class: [e.iconClass],
                          }),
                        ]
                      ),
                      t(
                        'div',
                        { staticClass: 'courseware-board-content' },
                        [
                          t('QuestionOption', {
                            attrs: {
                              optionList: e.optionList,
                              quesTypeId: e.quesTypeId,
                            },
                            on: { change: e.upodateUserAnswer },
                          }),
                          t(
                            'button',
                            {
                              staticClass: 'submit-box',
                              class: { 'is-disabled': e.btnDisabled },
                              on: { click: e.submitAnswer },
                            },
                            [e._v(' ' + e._s(e.$t('common.submit')) + ' ')]
                          ),
                        ],
                        1
                      ),
                    ],
                  e.isSubmit && !e.isExceptionStatus
                    ? [
                      t(
                        'div',
                        { staticClass: 'courseware-board-content is-submit' },
                        [
                          t('QuestionJudge', {
                            attrs: {
                              quesTypeId: e.quesTypeId,
                              userAnswer: e.userAnswer,
                              quesAnswer: e.quesAnswer,
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                    : e._e(),
                ],
                2
              ),
            ]
          )
        },
        d = [],
        p = n('c7eb'),
        m = n('1da1'),
        f = n('2909'),
        h =
          (n('0481'),
            n('4069'),
            n('d3b7'),
            n('25f0'),
            n('4e82'),
            n('e260'),
            n('6062'),
            n('3ca3'),
            n('ddb0'),
            n('753a')),
        v = n('8bbf'),
        w = n.n(v),
        b = function () {
          var e = this,
            t = e._self._c
          return t(
            'transition',
            { on: { 'after-leave': e.handleAfterLeave } },
            [
              e.visible
                ? t(
                  'div',
                  {
                    staticClass: 'coursewae-toast',
                    class: [e.typeClass],
                    on: {
                      mouseenter: e.clearTimer,
                      mouseleave: e.startTimer,
                    },
                  },
                  [
                    t('h2', [e._v(e._s(e.title))]),
                    t('p', [e._v(e._s(e.message))]),
                    'right' === e.type
                      ? t('div', { staticClass: 'coins-number' }, [
                        t('i'),
                        e._v(' +' + e._s(e.coin)),
                      ])
                      : e._e(),
                  ]
                )
                : e._e(),
            ]
          )
        },
        C = [],
        B = {
          data: function () {
            return {
              visible: false,
              type: 'right',
              title: '',
              message: '',
              coin: 0,
              duration: 0,
              closed: false,
              onClose: null,
              timer: null,
            }
          },
          computed: {
            typeClass: function () {
              return (
                console.info(
                  '对象函数 typeClass,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/toast.vue'
                ),
                'is-'.concat(y[this.type])
              )
            },
          },
          mounted: function () {
            this.startTimer()
          },
          methods: {
            handleAfterLeave: function () {
              var e, t
              console.info(
                '对象函数 handleAfterLeave,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/toast.vue'
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
                '对象函数 close,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/toast.vue'
              )
              this.closed = true
              'function' === typeof this.onClose && this.onClose(this)
            },
            clearTimer: function () {
              console.info(
                '对象函数 clearTimer,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/toast.vue'
              )
              clearTimeout(this.timer)
            },
            startTimer: function () {
              var e = this
              console.info(
                '对象函数 startTimer,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/toast.vue'
              )
              this.duration > 0 &&
                (this.timer = setTimeout(function () {
                  e.closed || e.close()
                }, this.duration))
            },
          },
          watch: {
            closed: function (e) {
              console.info(
                '对象函数 closed(newVal)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/toast.vue'
              )
              e && (this.visible = false)
            },
          },
        },
        g = B,
        k = (n('96ec'), n('2877')),
        I = Object(k.a)(g, b, C, false, null, '7f8cef9a', null),
        A = I.exports,
        _ = w.a.extend(A),
        T = 1,
        x = function (e) {
          console.info(
            '箭头函数 ToastBox(options)',
            e,
            'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/toast/index.js'
          )
          e = e || {}
          'string' === typeof e && (e = { message: e })
          var t = 'toast_' + T++
          return (
            (s = new _({ data: e })),
            (s.id = t),
            s.$mount(),
            document.getElementById('interactionController').appendChild(s.$el),
            (s.visible = true),
            s
          )
        }
      x.close = function () {
        s && (s.visible = false)
      }
      var q = x,
        O = (function (e) {
          Object(i.a)(n, e)
          var t = Object(c.a)(n)
          function n() {
            var e,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 Main(opts)',
                s,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/coursewareBoard.js'
              ),
              Object(r.a)(this, n),
              (e = t.call(this)),
              (e.options = s),
              (e.vm = s.vm),
              (e.quesInfo = null),
              e.handleQuesInfo(),
              e
            )
          }
          return (
            Object(a.a)(n, [
              {
                key: 'handleQuesInfo',
                value: function () {
                  var e = this.options.ircMsg,
                    t = e.quesTypeId,
                    n = e.quesAnswer,
                    s = e.quesOptions,
                    o = e.quesId,
                    r = e.interactId,
                    a = e.rightCoin,
                    i = e.countDownTime,
                    c = this.options.roomMessage.roomInfo,
                    u = c.stuInfo,
                    l = c.teacherInfo,
                    d = c.stuLiveInfo
                  return (
                    (this.quesInfo = {
                      quesTypeId: 1 * t,
                      quesAnswer: n,
                      quesOptions: s.flat(),
                      quesId: o,
                      interactId: r,
                      rightCoin: a,
                      countDownTime: i,
                      stuInfo: u,
                      teacherInfo: l,
                      stuLiveInfo: d,
                    }),
                    this.quesInfo
                  )
                },
              },
              {
                key: 'handleCorrectQues',
                value: function (e, t) {
                  return e.length
                    ? Object(f.a)(new Set(e)).sort().toString() ===
                      Object(f.a)(new Set(t)).sort().toString()
                      ? 1
                      : 2
                    : (console.info(
                      'if(!userAnswer.length)为true触发return,path: /renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/coursewareBoard.js'
                    ),
                      3)
                },
              },
              {
                key: 'submitAnswer',
                value: function (e) {
                  var t = this.handleCorrectQues(e, this.quesInfo.quesAnswer)
                  return t
                },
              },
              {
                key: 'closeToast',
                value: function () {
                  return q.close()
                },
              },
            ]),
            n
          )
        })(h.a),
        j = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'options-box' },
            [
              1 === e.quesTypeId
                ? t(
                  'ne-radio-group',
                  {
                    staticClass: 'courseware-options',
                    on: { change: e.handleChange },
                    model: {
                      value: e.userAnswer,
                      callback: function (t) { },
                      expression: 'userAnswer',
                    },
                  },
                  e._l(e.optionList, function (e, n) {
                    return t('ne-radio-button', {
                      key: n,
                      attrs: { label: e },
                    })
                  }),
                  1
                )
                : e._e(),
              2 === e.quesTypeId
                ? t(
                  'ne-checkbox-group',
                  {
                    staticClass: 'courseware-options',
                    on: { change: e.handleChange },
                    model: {
                      value: e.userAnswer,
                      callback: function (t) { },
                      expression: 'userAnswer',
                    },
                  },
                  e._l(e.optionList, function (e) {
                    return t('ne-checkbox-button', {
                      key: e.id,
                      attrs: { label: e },
                    })
                  }),
                  1
                )
                : e._e(),
              5 === e.quesTypeId
                ? t(
                  'ne-radio-group',
                  {
                    staticClass: 'courseware-options courseware-options--tf',
                    on: { change: e.handleChange },
                    model: {
                      value: e.userAnswer,
                      callback: function (t) { },
                      expression: 'userAnswer',
                    },
                  },
                  [
                    t('ne-radio-button', { attrs: { label: 'T' } }, [
                      e._v(
                        ' ' +
                        e._s(
                          e.$t(
                            'classroom.interactions.coursewareBoard.true'
                          )
                        ) +
                        ' '
                      ),
                    ]),
                    t('ne-radio-button', { attrs: { label: 'F' } }, [
                      e._v(
                        ' ' +
                        e._s(
                          e.$t(
                            'classroom.interactions.coursewareBoard.false'
                          )
                        ) +
                        ' '
                      ),
                    ]),
                  ],
                  1
                )
                : e._e(),
            ],
            1
          )
        },
        $ = [],
        P =
          (n('a9e3'),
          {
            name: 'QuestionOption',
            props: {
              optionList: {
                type: Array,
                default: function () {
                  return []
                },
              },
              quesTypeId: {
                type: Number,
                default: 0,
              },
            },
            data: function () {
              return { userAnswer: [] }
            },
            methods: {
              handleChange: function (e) {
                console.info(
                  '对象函数 handleChange(val)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/question-option.vue'
                )
                this.$emit('change', e)
              },
            },
          }),
        S = P,
        D = Object(k.a)(S, j, $, false, null, null, null),
        L = D.exports,
        Q = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'answer-box' },
            [
              5 === e.quesTypeId
                ? [
                  e.theUserAnswer && e.theUserAnswer !== e.theQuesAnswer
                    ? t('div', { staticClass: 'my-answer-box' }, [
                      t('p', [
                        e._v(
                          e._s(
                            e.$t(
                              'classroom.interactions.coursewareBoard.yourAnswer'
                            )
                          )
                        ),
                      ]),
                      t(
                        'span',
                        [
                          [
                            e._v(
                              e._s(
                                'T' === e.theUserAnswer
                                  ? e.$t(
                                    'classroom.interactions.coursewareBoard.true'
                                  )
                                  : e.$t(
                                    'classroom.interactions.coursewareBoard.false'
                                  )
                              )
                            ),
                          ],
                        ],
                        2
                      ),
                    ])
                    : e._e(),
                  t('div', { staticClass: 'right-answer-box' }, [
                    t('p', [
                      e._v(
                        e._s(
                          e.$t(
                            'classroom.interactions.coursewareBoard.rightAnswer'
                          )
                        )
                      ),
                    ]),
                    t(
                      'span',
                      [
                        [
                          e._v(
                            e._s(
                              'T' === e.theQuesAnswer
                                ? e.$t(
                                  'classroom.interactions.coursewareBoard.true'
                                )
                                : e.$t(
                                  'classroom.interactions.coursewareBoard.false'
                                )
                            )
                          ),
                        ],
                      ],
                      2
                    ),
                  ]),
                ]
                : [
                  e.theUserAnswer && e.theUserAnswer !== e.theQuesAnswer
                    ? t('div', { staticClass: 'my-answer-box' }, [
                      t('p', [
                        e._v(
                          e._s(
                            e.$t(
                              'classroom.interactions.coursewareBoard.yourAnswer'
                            )
                          )
                        ),
                      ]),
                      t(
                        'span',
                        [
                          e._l(e.userAnswer, function (t) {
                            return [e._v(e._s(t[0]))]
                          }),
                        ],
                        2
                      ),
                    ])
                    : e._e(),
                  t('div', { staticClass: 'right-answer-box' }, [
                    t('p', [
                      e._v(
                        e._s(
                          e.$t(
                            'classroom.interactions.coursewareBoard.correctAnswer'
                          )
                        )
                      ),
                    ]),
                    t(
                      'span',
                      [
                        e._l(e.quesAnswer, function (t) {
                          return [e._v(e._s(t[0]))]
                        }),
                      ],
                      2
                    ),
                  ]),
                ],
            ],
            2
          )
        },
        E = [],
        M = {
          name: 'QuestionJudge',
          props: {
            quesTypeId: {
              type: Number,
              default: 0,
            },
            userAnswer: {
              type: Array,
              default: function () {
                return []
              },
            },
            quesAnswer: {
              type: Array,
              default: function () {
                return []
              },
            },
          },
          computed: {
            theUserAnswer: function () {
              return (
                console.info(
                  '对象函数 theUserAnswer,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/question-judge.vue'
                ),
                Object(f.a)(new Set(this.userAnswer)).sort().toString()
              )
            },
            theQuesAnswer: function () {
              return (
                console.info(
                  '对象函数 theQuesAnswer,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/components/question-judge.vue'
                ),
                Object(f.a)(new Set(this.quesAnswer)).sort().toString()
              )
            },
          },
          mounted: function () {
            this.theUserAnswer
          },
        },
        U = M,
        N = Object(k.a)(U, Q, E, false, null, null, null),
        V = N.exports,
        J = n('d0db'),
        H = {
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
              quesAnswer: [],
              optionList: [],
              quesTypeId: null,
              clickDisabled: false,
              btnDisabled: true,
              userAnswer: [],
              isExpanded: false,
              isSubmit: false,
              isExceptionStatus: false,
              countdownOptions: null,
              visible: true,
            }
          },
          components: {
            QuestionOption: L,
            QuestionJudge: V,
          },
          created: function () {
            var e = this
            return Object(m.a)(
              Object(p.a)().mark(function t() {
                return Object(p.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        ; (e.coursewareBoard = new O(
                          Object(o.a)({}, e.options)
                        )),
                          e.$nextTick(function () {
                            var t = e.coursewareBoard.quesInfo
                            e.sendLogger({
                              msg: '收到互动',
                              stage: 'start',
                            })
                          })
                      case 2:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          computed: {
            iconClass: function () {
              return (
                console.info(
                  '对象函数 iconClass,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
                ),
                this.isExpanded
                  ? 'ne-icon-courseware-arrow ne-icon-courseware-up'
                  : 'ne-icon-courseware-arrow'
              )
            },
          },
          methods: {
            upodateUserAnswer: function (e) {
              console.info(
                '对象函数 upodateUserAnswer(val)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
              )
              this.$refs.interactKeyTone.play()
              this.userAnswer = e
            },
            closeBoard: function () {
              var e = this
              console.info(
                '对象函数 closeBoard,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
              )
              this.isExpanded = true
              this.$refs.coursewareBoardBlock &&
                this.$refs.coursewareBoardBlock.addEventListener(
                  'transitionend',
                  function () {
                    console.info(
                      '箭头函数 监听 transitionend,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
                    )
                    e.destroy()
                  },
                  false
                )
            },
            submitAnswer: function (e) {
              var t = this
              return Object(m.a)(
                Object(p.a)().mark(function n() {
                  var s, o, r
                  return Object(p.a)().wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 submitAnswer(e)',
                              e,
                              'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
                            ),
                              !t.clickDisabled)
                          ) {
                            n.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(_this3.clickDisabled)为true触发return,path: /renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
                            ),
                            n.abrupt('return')
                          )
                        case 4:
                          ; (t.btnDisabled = true),
                            (t.clickDisabled = true),
                            t.$refs.interactSubmit &&
                            t.$refs.interactSubmit.play(),
                            (r = t.coursewareBoard.submitAnswer(t.userAnswer)),
                            (t.isSubmit = true),
                            (t.clickDisabled = false),
                            1 === r
                              ? null === (s = t.$refs.interactSuccess) ||
                              void 0 === s ||
                              s.play()
                              : null === (o = t.$refs.interactFail) ||
                              void 0 === o ||
                              o.play(),
                            t.autoCloseBoard(5000)
                        case 12:
                        case 'end':
                          return n.stop()
                      }
                    }
                  }, n)
                })
              )()
            },
            destroyInteraction: function () {
              console.info(
                '对象函数 destroyInteraction,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
              )
              this.destroy()
            },
            autoCloseBoard: function (e) {
              var t = this
              console.info(
                '对象函数 autoCloseBoard(timer)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
              )
              var n = setTimeout(function () {
                t.closeBoard()
                clearTimeout(n)
                n = null
              }, e)
            },
            sendLogger: function (e) {
              var t = e.msg,
                n = void 0 === t ? '' : t,
                s = e.stage,
                o = void 0 === s ? '' : s,
                r = e.params,
                a = void 0 === r ? {} : r,
                i = e.response,
                c = void 0 === i ? {} : i
              J.a.send({
                tag: 'student.Interact',
                content: {
                  msg: n,
                  interactType: u[this.quesTypeId],
                  interactId: this.options.ircMsg.interactId,
                  interactStage: o,
                  params: JSON.stringify(a),
                  response: JSON.stringify(c),
                },
              })
            },
            destroy: function () {
              var e, t
              console.info(
                '对象函数 destroy,filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
              )
              this.sendLogger({
                msg: '结束互动',
                stage: 'end',
              })
              this.$destroy()
              this.coursewareBoard.closeToast()
              null === (e = this.$el) ||
                void 0 === e ||
                null === (t = e.parentNode) ||
                void 0 === t ||
                t.removeChild(this.$el)
            },
          },
          watch: {
            userAnswer: function (e) {
              console.info(
                '对象函数 userAnswer(val)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/app.vue'
              )
              e.length > 0
                ? (this.btnDisabled = false)
                : (this.btnDisabled = true)
            },
          },
        },
        F = H,
        K = (n('2fe5'), Object(k.a)(F, l, d, false, null, null, null)),
        z = K.exports,
        G = (function (e) {
          Object(i.a)(n, e)
          var t = Object(c.a)(n)
          function n() {
            var e,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 CoursewareBoard(opts)',
                s,
                'filePath:renderer/components/Classroom/CommonInteractions/playBackCoursewareBoard/index.js'
              ),
              Object(r.a)(this, n),
              (e = t.call(this, z)),
              (e.options = s),
              (e.dom = s.roomMessage.roomInfo.interactionController),
              e.initVmApp('h5课件互动题'),
              e
            )
          }
          return (
            Object(a.a)(n, [
              {
                key: 'createPropsData',
                value: function () {
                  var e = {
                    isExpanded: !e.isExpanded,
                    userAnswer: t,
                    userAnswer: t,
                    userAnswer: t,
                    optionList: t.quesOptions,
                    quesAnswer: t.quesAnswer,
                    quesTypeId: t.quesTypeId,
                  }
                  return Object(o.a)({ options: this.options }, e)
                },
              },
            ]),
            n
          )
        })(u.a)
    },
    '96ec': function (e, t, n) {
      'use strict'
      n('ed37')
    },
    b6c9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var s = n('d4ec'),
        o = n('bee2'),
        r = (n('99af'), n('d9e2'), n('8bbf')),
        a = n.n(r),
        i = n('3898'),
        c = n('d0db'),
        u = (function () {
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
                    s = new t({
                      i18n: i.b,
                      propsData: n,
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
    ed37: function (e, t, n) { },
    f7d4: function (e, t, n) { },
    fb97: function (e, t, n) {
      e.exports = n.p + 'static/media/interact-fail.55547638.mp3'
    },
    fc4e: function (e, t, n) {
      e.exports = n.p + 'static/media/interact-key-tone.631f9373.mp3'
    },
  },
])
