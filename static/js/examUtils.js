; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-5b2ae432'],
  {
    '22de': function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return c
      })
      a.d(t, 'e', function () {
        return u
      })
      a.d(t, 'a', function () {
        return l
      })
      a.d(t, 'b', function () {
        return d
      })
      a.d(t, 'c', function () {
        return p
      })
      a.d(t, 'f', function () {
        return m
      })
      var s = a('c7eb'),
        n = a('1da1'),
        r = a('dc21'),
        i = a('e39c'),
        o = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a, n) {
              var o, c, u
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = Object(i.h)()),
                        (c = o.oversea),
                        (e.next = 3),
                        Object(r.a)({
                          url: a,
                          params: n,
                          apiDomain: c,
                        })
                      )
                    case 3:
                      return (u = e.sent), e.abrupt('return', u)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, a, s) {
            return e.apply(this, arguments)
          }
        })(),
        c = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a) {
              var n, r
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/homework-api/student/neirongyun/jumpUrl'),
                        (e.next = 3),
                        o(t, n, a)
                      )
                    case 3:
                      return (r = e.sent), e.abrupt('return', r)
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
        u = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a) {
              var n, r
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/homework-api/student/sync'),
                        (e.next = 3),
                        o(t, n, a)
                      )
                    case 3:
                      return (r = e.sent), e.abrupt('return', r)
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
        l = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a) {
              var n, r
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/homework-api/student/paperDetail'),
                        (e.next = 3),
                        o(t, n, a)
                      )
                    case 3:
                      return (r = e.sent), e.abrupt('return', r)
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
        d = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a) {
              var n, r
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/homework-api/student/paperOverview'),
                        (e.next = 3),
                        o(t, n, a)
                      )
                    case 3:
                      return (r = e.sent), e.abrupt('return', r)
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
        p = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a) {
              var n, r
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/beibo/student/paperOverview'),
                        (e.next = 3),
                        o(t, n, a)
                      )
                    case 3:
                      return (r = e.sent), e.abrupt('return', r)
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
        m = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a) {
              var n, r
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/api/beibo/student/watch'),
                        (e.next = 3),
                        o(t, n, a)
                      )
                    case 3:
                      return (r = e.sent), e.abrupt('return', r)
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
        })()
    },
    '41ef': function (e, t, a) {
      'use strict'
      a.r(t)
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          { staticClass: 'preview-wrapper' },
          [
            t('div', { staticClass: 'preview-inner' }, [
              t(
                'div',
                { staticClass: 'preview-content' },
                [
                  e.loading
                    ? t('Loading', { attrs: { 'margin-top': '200px' } })
                    : [
                      t('section', { staticClass: 'section-container' }, [
                        t('div', { staticClass: 'preview-class' }, [
                          t('div', { staticClass: 'syllabus-card' }, [
                            e._v(e._s(e.examData.title || '')),
                          ]),
                          t('div', { staticClass: 'time-card' }, [
                            t('div', { staticClass: 'left' }, [
                              t('span', { staticClass: 'type' }, [
                                t('span', { staticClass: 'line' }),
                                t('span', { staticClass: 'btn' }, [
                                  e._v(
                                    ' ' +
                                    e._s(
                                      e.$t(
                                        'courses.previewQuestion.deadlineTime'
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                              t('span', { staticClass: 'time' }, [
                                e._v(e._s(e.examData.deadline || '')),
                              ]),
                            ]),
                            t('span', { staticClass: 'cutline' }),
                            t('div', { staticClass: 'right' }, [
                              t('span', { staticClass: 'type' }, [
                                t('span', { staticClass: 'line' }),
                                t('span', { staticClass: 'btn' }, [
                                  e._v(
                                    ' ' +
                                    e._s(
                                      e.$t(
                                        'courses.previewQuestion.answerTimeName'
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                              t('span', { staticClass: 'time' }, [
                                e._v(e._s(e.examData.duration)),
                              ]),
                            ]),
                          ]),
                          t('div', { staticClass: 'problem-descriptors' }, [
                            t('div', { staticClass: 'desc' }, [
                              t('span', { staticClass: 'left' }, [
                                t('span', { staticClass: 'line' }),
                                t('label', [
                                  e._v(
                                    e._s(
                                      e.$t(
                                        'courses.previewQuestion.problemDescriptors[0]'
                                      )
                                    )
                                  ),
                                ]),
                              ]),
                              t('span', { staticClass: 'right' }, [
                                e._v(
                                  e._s(
                                    e.$t(
                                      'courses.previewQuestion.problemDescriptors[1]',
                                      { totalScore: e.examData.totalScore }
                                    )
                                  )
                                ),
                              ]),
                            ]),
                            t(
                              'div',
                              { staticClass: 'questions-type' },
                              [
                                e._l(e.examData.questions, function (a, s) {
                                  return [
                                    t('section', { key: s }, [
                                      t('div', {
                                        staticClass: 'type-icon',
                                      }),
                                      t(
                                        'div',
                                        { staticClass: 'type-desc' },
                                        [e._v(e._s(a.type))]
                                      ),
                                      t('span', [
                                        e._v('x' + e._s(a.count)),
                                      ]),
                                    ]),
                                  ]
                                }),
                              ],
                              2
                            ),
                          ]),
                        ]),
                      ]),
                    ],
                ],
                2
              ),
            ]),
            5 !== e.examData.homeworkStatus
              ? t('div', { staticClass: 'solutions-wrap' }, [
                t(
                  'div',
                  {
                    staticClass: 'solutions',
                    on: {
                      click: function (t) {
                        return e.showModal(e.examData.homeworkStatus)
                      },
                    },
                  },
                  [e._v(' ' + e._s(e.btnDesc) + ' ')]
                ),
                !e.examData.isReward ||
                  (2 != e.examData.homeworkStatus &&
                    1 != e.examData.homeworkStatus)
                  ? e._e()
                  : t('div', { staticClass: 'btnTip' }, [
                    t('span', { staticClass: 'tipIcon' }),
                    t('span', { staticClass: 'tipText' }, [
                      e._v(e._s(e.$t('courses.exam.coinsTip'))),
                    ]),
                  ]),
              ])
              : t('div', { staticClass: 'timeout-wrapper' }, [
                t('div', { staticClass: 'left-pop' }, [
                  t('div', { staticClass: 'text-box' }, [
                    t('div', { staticClass: 'top-text' }, [
                      t('div', { staticClass: 'text-bg' }),
                      t('div', { staticClass: 'text-con' }, [
                        e._v(
                          e._s(
                            e.$t('courses.previewQuestion.deadlineTitle')
                          )
                        ),
                      ]),
                    ]),
                    t('div', { staticClass: 'bottom-text' }, [
                      t('div', { staticClass: 'text-bg' }),
                      t('div', { staticClass: 'text-con' }, [
                        e._v(
                          e._s(e.$t('courses.previewQuestion.deadlineDesc'))
                        ),
                      ]),
                    ]),
                  ]),
                  t(
                    'div',
                    {
                      staticClass: 'timeout-btn',
                      on: {
                        click: function (t) {
                          return e.showModal(e.examData.homeworkStatus)
                        },
                      },
                    },
                    [e._v(e._s(e.btnDesc))]
                  ),
                ]),
                t('div', { staticClass: 'right-people' }),
              ]),
            t(
              'a-modal',
              {
                attrs: {
                  visible: e.visible,
                  closable: false,
                  footer: null,
                  'confirm-loading': e.confirmLoading,
                },
                on: { cancel: e.handleCancel },
              },
              [
                t('div', { staticClass: 'content' }, [
                  t('div', { staticClass: 'title-icon' }),
                  t('span', { staticClass: 'title' }, [
                    e._v(' ' + e._s(e.$t('courses.exam.confirmTitle')) + ' '),
                  ]),
                  t('span', { staticClass: 'sub-title' }, [
                    e._v(
                      ' ' +
                      e._s(
                        e.$t('courses.exam.confirmSubtitle', {
                          duration: e.examData.duration,
                        })
                      ) +
                      ' '
                    ),
                  ]),
                  t('div', { staticClass: 'btn' }, [
                    t(
                      'div',
                      {
                        staticClass: 'no',
                        on: { click: e.handleCancel },
                      },
                      [e._v(' ' + e._s(e.$t('courses.exam.cancelBtn')) + ' ')]
                    ),
                    t(
                      'div',
                      {
                        staticClass: 'yes',
                        on: { click: e.handleJump },
                      },
                      [
                        e._v(
                          ' ' + e._s(e.$t('courses.exam.confirmBtn')) + ' '
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
          ],
          1
        )
      },
        n = [],
        r = a('c7eb'),
        i = a('5530'),
        o = a('1da1'),
        c = (a('14d9'), a('99af'), a('a9e3'), a('22de')),
        u = a('bd12'),
        l = {
          data: function () {
            return {
              title: 'Preview question',
              courseDetailParams: {},
              examData: {},
              loading: false,
              visible: false,
            }
          },
          components: { Loading: u.a },
          computed: {
            btnDesc: function () {
              console.info(
                '对象函数 btnDesc,filePath:renderer/views/ExamIntro.vue'
              )
              var e = this.examData.homeworkStatus
              return 3 == e || 4 == e
                ? (console.info(
                  'if(homeworkStatus == 3 || homeworkStatus == 4)为true触发return,path: /renderer/views/ExamIntro.vue'
                ),
                  this.$t('courses.exam.report'))
                : 5 == e
                  ? (console.info(
                    'if(homeworkStatus == 5)为true触发return,path: /renderer/views/ExamIntro.vue'
                  ),
                    this.$t('courses.exam.solutions'))
                  : (console.info(
                    'if(homeworkStatus == 5)为false,触发return,path: /renderer/views/ExamIntro.vue'
                  ),
                    this.$t('courses.exam.start'))
            },
          },
          methods: {
            updateHeaderAttr: function () {
              console.info(
                '对象函数 updateHeaderAttr,filePath:renderer/views/ExamIntro.vue'
              )
              var e = ''
              e =
                'RECORD' === this.courseDetailParams.classType
                  ? '/record-courses-detail?studentCourseId='
                    .concat(
                      this.courseDetailParams.studentCourseId,
                      '&planId='
                    )
                    .concat(
                      this.courseDetailParams.planId,
                      '&isNeedBackToCurrentTap=true&from=exam'
                    )
                  : '/courses-detail?classId='
                    .concat(this.courseDetailParams.classId, '&planId=')
                    .concat(
                      this.courseDetailParams.planId,
                      '&isNeedBackToCurrentTap=true&from=exam'
                    )
              this.$bus.$emit('updateHeaderAttr', {
                title: this.$t('courses.exam.title'),
                showGoback: true,
                backUrl: e,
              })
            },
            getData: function () {
              if (
                (console.info(
                  '对象函数 getData,filePath:renderer/views/ExamIntro.vue'
                ),
                  'RECORD' === this.courseDetailParams.classType)
              ) {
                return (
                  console.info(
                    "if(this.courseDetailParams.classType === 'RECORD')为true触发return,path: /renderer/views/ExamIntro.vue"
                  ),
                  void this.getRecordData()
                )
              }
              this.getLiveData()
            },
            getLiveData: function () {
              var e = this
              return Object(o.a)(
                Object(r.a)().mark(function t() {
                  var a, s
                  return Object(r.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getLiveData,filePath:renderer/views/ExamIntro.vue'
                            ),
                            (e.loading = true),
                            (e.courseDetailParams.classId = Number(
                              e.courseDetailParams.classId
                            )),
                            (e.courseDetailParams.homeworkType = Number(
                              e.courseDetailParams.homeworkType
                            )),
                            (e.courseDetailParams.planId = Number(
                              e.courseDetailParams.planId
                            )),
                            (t.next = 7),
                            Object(c.b)(
                              e,
                              Object(i.a)(
                                Object(i.a)({}, e.courseDetailParams),
                                {},
                                { platform: '3' }
                              )
                            )
                          )
                        case 7:
                          ; (a = t.sent),
                            (e.loading = false),
                            e.$bus.$emit('reload-completed'),
                            (e.examData = a.data),
                            (s = e.examData.homeworkUrl),
                            s &&
                            (window.sessionStorage.setItem('iframeUrl', s),
                              window.sessionStorage.setItem(
                                'backUrl',
                                e.$route.fullPath
                              ))
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            getRecordData: function () {
              var e = this
              return Object(o.a)(
                Object(r.a)().mark(function t() {
                  var a, s, n, i, o, u
                  return Object(r.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getRecordData,filePath:renderer/views/ExamIntro.vue'
                            ),
                            (e.loading = true),
                            (t.next = 4),
                            Object(c.c)(e, {
                              homeworkType: Number(
                                e.courseDetailParams.homeworkType
                              ),
                              entityId: e.courseDetailParams.entityId,
                              bindType: 1,
                              platform: '3',
                            })
                          )
                        case 4:
                          ; (a = t.sent),
                            (e.loading = false),
                            e.$bus.$emit('reload-completed'),
                            (e.examData = a.data),
                            (s = e.courseDetailParams),
                            (n = s.expirationTime),
                            (i = s.permanent),
                            (e.examData.deadline = i
                              ? e.$t('courses.recordCourse.permanentTip')
                              : n),
                            (o = e.examData.homeworkUrl),
                            (u = JSON.parse(
                              window.localStorage.getItem('userInfo')
                            )),
                            o &&
                            (window.sessionStorage.setItem(
                              'iframeUrl',
                              ''
                                .concat(o, '&token=')
                                .concat(
                                  null === u || void 0 === u
                                    ? void 0
                                    : u.unifiedAccessToken
                                )
                            ),
                              window.sessionStorage.setItem(
                                'backUrl',
                                '/record-courses-detail?studentCourseId='
                                  .concat(
                                    e.courseDetailParams.studentCourseId,
                                    '&planId='
                                  )
                                  .concat(
                                    e.courseDetailParams.planId,
                                    '&isNeedBackToCurrentTap=true&from=exam'
                                  )
                              ))
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            showModal: function (e) {
              console.info(
                '对象函数 showModal(status)',
                e,
                'filePath:renderer/views/ExamIntro.vue'
              )
              2 == e && this.examData.limitTime
                ? (this.visible = true)
                : this.handleJump()
            },
            handleCancel: function () {
              console.info(
                '对象函数 handleCancel,filePath:renderer/views/ExamIntro.vue'
              )
              this.visible = false
            },
            handleJump: function () {
              console.info(
                '对象函数 handleJump,filePath:renderer/views/ExamIntro.vue'
              )
              this.$router.push({ path: '/examH5' })
            },
          },
          mounted: function () {
            var e = this
            this.courseDetailParams = this.$route.query
            this.getData()
            this.$bus.$on('reload', function () {
              console.info(
                '箭头函数 监听 reload,filePath:renderer/views/ExamIntro.vue'
              )
              e.getData()
            })
            this.updateHeaderAttr()
          },
          watch: {
            '$i18n.locale': function (e) {
              console.info(
                '对象函数 undefined(newValue)',
                e,
                'filePath:renderer/views/ExamIntro.vue'
              )
              e && this.updateHeaderAttr()
            },
          },
          destroyed: function () {
            console.info(
              '对象函数 destroyed,filePath:renderer/views/ExamIntro.vue'
            )
            this.$bus.$off('reload')
          },
        },
        d = l,
        p = (a('a857'), a('2877')),
        m = Object(p.a)(d, s, n, false, null, '409cd907', null)
      t.default = m.exports
    },
    6275: function (e, t, a) { },
    a857: function (e, t, a) {
      'use strict'
      a('6275')
    },
    bd12: function (e, t, a) {
      'use strict'
      var s = function () {
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
        n = [
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
        r = {
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
        i = r,
        o = (a('f761'), a('2877')),
        c = Object(o.a)(i, s, n, false, null, '92d727e8', null)
      t.a = c.exports
    },
    c63e: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP/DL//DLv/BL//DLv/EL//DL//DLv/DL//CLv/DL//DL//CLf/DL//DL//DL//DLv/DL//DMv/DMGSQIxsAAAATdFJOUwDwcSTeYM1AwICojww0SLNSmhsrwQ8LAAABI0lEQVRYw+3X2a6DIBCAYbaBYXXh/d/1aE3UxtbjMhdtOv+l6BeiiYAQ5+tzLwhK2oGKjTW1Vn/HyQV8NzlzF8HRkfVV10BX38Ygg18FptICKB+70OAWDD4GNPIMaJentyAuv4l8FKx7IIjYdB7a3CdBArplWFoMUYHTiQhcZdDTgqt3yyCDdgTlkBmy1iLeBIcJ7Q6fB2txzpGCYwz+HuhWAR4BcR98LhwAU6vGlXIDaruZexBwAJy35dN2WtadNX++iESbiK8BDRYyULWXT0AvwTsxyCCDnwJaUhAjaCrQBFWSuNsESoytFiRpYzqVxc/kh0Mipaemj2tDHE62iWKCh7daDDLI4CeDhRoUPXSWFHysASpIUnAsK6QFp+Pjf3f8AVRMjNs7xw9TAAAAAElFTkSuQmCC'
    },
    ebc2: function (e, t, a) { },
    f761: function (e, t, a) {
      'use strict'
      a('ebc2')
    },
  },
])
