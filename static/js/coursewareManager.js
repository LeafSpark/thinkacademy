; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-2e9cf93e'],
  {
    a611: function (e, t, n) {
      'use strict'
      n.r(t)
      n.d(t, 'default', function () {
        return N
      })
      var r = n('5530'),
        s = n('d4ec'),
        o = n('bee2'),
        a = n('262e'),
        i = n('2caf'),
        c = n('b6c9'),
        u = function () {
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
                rightCoin: e.rightCoin,
              },
              on: {
                submit: e.submitAnswer,
                exit: e.destroy,
                loaded: e.gameLoaded,
                reload: e.gameReload,
                fail: e.gameFail,
              },
            })
            : e._e()
        },
        m = [],
        l = n('c7eb'),
        p = n('1da1'),
        d =
          (n('14d9'),
            n('99af'),
            n('d3b7'),
            n('159b'),
            n('ac1f'),
            n('1276'),
            n('0a4b')),
        h = n('ceab'),
        g = n('c5ee'),
        f = n('e39c'),
        b = n('2909'),
        v = n('753a'),
        w = n('dc21'),
        I = (function () {
          var e = Object(p.a)(
            Object(l.a)().mark(function e(t, n) {
              var r, s, o
              return Object(l.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = Object(f.h)()),
                        (s = r.oversea),
                        (e.next = 3),
                        Object(w.a)({
                          url: t,
                          params: n,
                          apiDomain: s,
                        })
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
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        C = (function () {
          var e = Object(p.a)(
            Object(l.a)().mark(function e(t) {
              var n, r
              return Object(l.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/classroom-hub/question/student/game/status'),
                        (e.next = 3),
                        I(n, t)
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
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        O = (function () {
          var e = Object(p.a)(
            Object(l.a)().mark(function e(t) {
              var n, r
              return Object(l.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = '/classroom-hub/question/student/game/submit'),
                        (e.next = 3),
                        I(n, t)
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
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        j = (function () {
          var e = Object(p.a)(
            Object(l.a)().mark(function e(t) {
              var n, r
              return Object(l.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n =
                          '/classroom-hub/question/student/game/submitAsync'),
                        (e.next = 3),
                        I(n, t)
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
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        y = (function () {
          var e = Object(p.a)(
            Object(l.a)().mark(function e(t, n) {
              var r
              return Object(l.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r =
                          'open' === t
                            ? '/classroom-hub/classroom/student/interact/partakereport'
                            : '/classroom-hub/question/student/game/close'),
                        (e.next = 3),
                        I(r, n)
                      )
                    case 3:
                      return e.abrupt('return', e.sent)
                    case 4:
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
        x = (function (e) {
          Object(a.a)(n, e)
          var t = Object(i.a)(n)
          function n() {
            var e,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 Game(opts)',
                r,
                'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/game.js'
              ),
              Object(s.a)(this, n),
              (e = t.call(this)),
              (e.options = r),
              e
            )
          }
          return (
            Object(o.a)(n, [
              {
                key: 'submitPics',
                value: (function () {
                  var e = Object(p.a)(
                    Object(l.a)().mark(function e() {
                      var t,
                        n,
                        r = arguments
                      return Object(l.a)().wrap(
                        function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    r.length > 0 && void 0 !== r[0]
                                      ? r[0]
                                      : {}),
                                  (n = {
                                    planId:
                                      1 *
                                      this.options.roomMessage.roomInfo
                                        .stuLiveInfo.planId,
                                    interactId: this.options.ircMsg.interactId,
                                    gameImages: Object(b.a)(t.gameImages),
                                    userAnswerResult: Object(b.a)(
                                      t.userAnswerResult
                                    ),
                                  }),
                                  (e.next = 4),
                                  j(n)
                                )
                              case 4:
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
                        '函数申明 submitPics, filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/game.js'
                      ),
                      e.apply(this, arguments)
                    )
                  }
                  return t
                })(),
              },
              {
                key: 'submitAnswer',
                value: (function () {
                  var e = Object(p.a)(
                    Object(l.a)().mark(function e(t, n) {
                      var r, s
                      return Object(l.a)().wrap(
                        function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = {
                                    planId:
                                      1 *
                                      this.options.roomMessage.roomInfo
                                        .stuLiveInfo.planId,
                                    classId:
                                      this.options.roomMessage.roomInfo
                                        .stuLiveInfo.classId,
                                    interactId: this.options.ircMsg.interactId,
                                    rightRate: t,
                                    isAnswer: n,
                                  }),
                                  (e.next = 3),
                                  O(r)
                                )
                              case 3:
                                return (
                                  (s = e.sent),
                                  e.abrupt('return', {
                                    params: r,
                                    response: s,
                                  })
                                )
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
                  function t(t, n) {
                    return (
                      console.info(
                        '函数申明 submitAnswer(_x, _x2)',
                        t,
                        n,
                        'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/game.js'
                      ),
                      e.apply(this, arguments)
                    )
                  }
                  return t
                })(),
              },
              {
                key: 'interactReport',
                value: function (e) {
                  var t = {
                    classId:
                      1 * this.options.roomMessage.roomInfo.stuLiveInfo.classId,
                    planId:
                      1 * this.options.roomMessage.roomInfo.stuLiveInfo.planId,
                    interactId: this.options.ircMsg.interactId,
                  }
                  y(e, t)
                },
              },
              {
                key: 'getGameStatus',
                value: (function () {
                  var e = Object(p.a)(
                    Object(l.a)().mark(function e() {
                      var t
                      return Object(l.a)().wrap(
                        function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = {
                                    classId:
                                      1 *
                                      this.options.roomMessage.roomInfo
                                        .stuLiveInfo.classId,
                                    planId:
                                      1 *
                                      this.options.roomMessage.roomInfo
                                        .stuLiveInfo.planId,
                                    interactId: this.options.ircMsg.interactId,
                                  }),
                                  (e.next = 3),
                                  C(t)
                                )
                              case 3:
                                return e.abrupt('return', e.sent)
                              case 4:
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
                        '函数申明 getGameStatus, filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/game.js'
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
        })(v.a),
        k = n('d0db'),
        S = n('1a37'),
        P = n('e417'),
        M = n('c02a'),
        A = {
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
              interactStatus: 2,
              showResultToast: false,
              rightCoin: 0,
              isSubmiting: false,
            }
          },
          created: function () {
            var e = this
            return Object(p.a)(
              Object(l.a)().mark(function t() {
                var n, s, o, a
                return Object(l.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.game = new x(Object(r.a)({}, e.options))),
                          e.game.interactReport('open'),
                          (t.next = 4),
                          e.game.getGameStatus().catch(function (t) {
                            return (
                              console.info(
                                '箭头函数 catch(err)',
                                t,
                                'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                              ),
                              e.sendLogger(
                                {
                                  msg: '接口报错:开启游戏:',
                                  response: t,
                                },
                                'error'
                              ),
                              t
                            )
                          })
                        )
                      case 4:
                        if (
                          ((n = t.sent),
                            (s = n.code),
                            (o = n.data),
                            0 === s &&
                            1 * o.studentInteractStatus !== 2 &&
                            !o.isSubmit)
                        ) {
                          t.next = 10
                          break
                        }
                        return (
                          console.info(
                            'if(code !== 0 || data.studentInteractStatus * 1 === 2 || data.isSubmit)为true触发return,path: /renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                          ),
                          t.abrupt('return')
                        )
                      case 10:
                        return (
                          e.changefullPageStyle(true),
                          (t.next = 13),
                          e.getGameServe()
                        )
                      case 13:
                        ; (a = t.sent),
                          (e.interactStatus = 1 * o.studentInteractStatus),
                          (e.nickName =
                            e.options.roomMessage.roomInfo.stuInfo.nickName),
                          (e.gameUrl = ''
                            .concat(a, '/')
                            .concat(e.options.ircMsg.interactiveTemplatePath)),
                          e.sendLogger({
                            msg: '收到互动, 加载互动游戏地址: '.concat(
                              JSON.stringify(e.gameUrl)
                            ),
                            stage: 'start',
                          }),
                          (e.showGame = true)
                      case 19:
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
              return Object(p.a)(
                Object(l.a)().mark(function t() {
                  var n, r, s, o, a, i, c, u, m
                  return Object(l.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getGameServe,filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                            ),
                            (n = {}),
                            (r = Object(f.o)('planId')),
                            (t.next = 5),
                            d.nativeApi.getClientInfo()
                          )
                        case 5:
                          return (
                            (s = t.sent),
                            (o = s.CW_SERVER_ADDRESS),
                            (a = s.CW_WEBROOT),
                            (t.next = 10),
                            Object(h.b)(1 * r)
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
                            console.info( // Games
                              'if(courseware.code !== 0 || courseware.data.list.length === 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                            ),
                            e.$Message.info('COURSESWARE ERROR'),
                            t.abrupt('return')
                          )
                        case 15:
                          return (
                            i.data.list.forEach(function (e) {
                              16 == e.id && (n = e)
                            }),
                            (c = ''.concat(o).concat(n.detail.catalog)),
                            e.sendLogger({
                              msg: '游戏本地服务域名: '
                                .concat(JSON.stringify(o))
                                .concat(JSON.stringify(n.detail.catalog)),
                            }),
                            (t.next = 20),
                            Object(g.a)(
                              n.detail.baseZipUrl,
                              n.detail.baseZipMd5,
                              a
                            )
                          )
                        case 20:
                          return (
                            (u = t.sent),
                            u ||
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
            submitAnswer: function (e) {
              var t = this
              return Object(p.a)(
                Object(l.a)().mark(function n() {
                  var s, o, a, i, c, u, m, d, h, g, b, v, w, I
                  return Object(l.a)().wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 submitAnswer(answerData)',
                              e,
                              'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                            ),
                              !t.isSubmiting)
                          ) {
                            n.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(_this3.isSubmiting)为true触发return,path: /renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                            ),
                            n.abrupt('return')
                          )
                        case 4:
                          return (
                            (t.isSubmiting = true),
                            (s = []),
                            (o = []),
                            (a = e.answerPics),
                            (i = e.judge),
                            (c = e.rightRate),
                            (t.isAnswer = 1),
                            (n.next = 11),
                            t.game
                              .submitAnswer(c, t.isAnswer)
                              .catch(function (e) {
                                return (
                                  console.info(
                                    '箭头函数 catch(err)',
                                    e,
                                    'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                                  ),
                                  t.sendLogger(
                                    {
                                      msg: '接口报错:提交游戏数据:',
                                      response: e,
                                    },
                                    'error'
                                  ),
                                  e
                                )
                              })
                          )
                        case 11:
                          ; (u = n.sent),
                            (m = u.params),
                            (d = u.response),
                            t.sendLogger({
                              msg: '提交答案结果',
                              params: m,
                              response: d,
                            }),
                            (h = d.code),
                            (g = d.data),
                            0 == h &&
                            g &&
                            ((t.rightCoin = g.rightCoin),
                              (v = 100 == c ? 1 : 2 == t.isAnswer ? 3 : 2),
                              (w = Object(r.a)(
                                Object(r.a)({}, g),
                                {},
                                {
                                  isRight: v,
                                  isGameQuestion: true,
                                }
                              )),
                              t.$bus.$emit('continuousCorrect', w),
                              t.$bus.$emit(
                                'updateAchievement',
                                'add',
                                t.rightCoin
                              ),
                              M.f(
                                null === (b = t.options) || void 0 === b
                                  ? void 0
                                  : b.ircMsg,
                                '5',
                                v,
                                true
                              )),
                            a.forEach(function (e, n) {
                              o.push(Object(f.d)(e))
                              s.push(
                                ''
                                  .concat(t.options.ircMsg.interactId, '_')
                                  .concat(
                                    t.options.roomMessage.roomInfo.stuInfo.id,
                                    '_'
                                  )
                                  .concat(n, '.jpg')
                              )
                            }),
                            (I = new S.b({ scene: 'game' }))
                          try {
                            I.putFiles({
                              filePaths: s,
                              files: o,
                              success: (function () {
                                var e = Object(p.a)(
                                  Object(l.a)().mark(function e(n) {
                                    return Object(l.a)().wrap(function (e) {
                                      while (1) {
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              t.game.submitPics({
                                                gameImages: n.filePaths,
                                                userAnswerResult: i,
                                              })
                                            )
                                          case 2:
                                            t.isSubmiting = false
                                          case 3:
                                          case 'end':
                                            return e.stop()
                                        }
                                      }
                                    }, e)
                                  })
                                )
                                function n(t) {
                                  return (
                                    console.info(
                                      '函数申明 success(_x)',
                                      t,
                                      'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                                    ),
                                    console.info(
                                      '函数申明 success(_x)',
                                      t,
                                      'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
                                    ),
                                    e.apply(this, arguments)
                                  )
                                }
                                return n
                              })(),
                              fail: function () {
                                t.sendLogger({ msg: '上传游戏截图失败' })
                              },
                            })
                          } catch (C) {
                            console.error('catch上传游戏截图失败', C)
                          }
                        case 20:
                        case 'end':
                          return n.stop()
                      }
                    }
                  }, n)
                })
              )()
            },
            gameLoaded: function () {
              console.info(
                '对象函数 gameLoaded,filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
              )
              this.sendLogger({ msg: '游戏加载成功' })
            },
            gameReload: function () {
              console.info(
                '对象函数 gameReload,filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
              )
              this.sendLogger({ msg: '重新加载游戏' })
            },
            gameFail: function () {
              console.info(
                '对象函数 gameFail,filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
              )
              this.sendLogger({ msg: '游戏加载失败' })
            },
            destroy: function () {
              var e, t
              console.info(
                '对象函数 destroy,filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
              )
              Object(P.e)(
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
                'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
              )
              var t = document.getElementById('interactionGame'),
                n = document.getElementsByClassName(
                  'courseware-area-wrapper-top'
                )[0],
                r = this.options.roomMessage.roomInfo.commonOption.classType
              e
                ? (2 == r
                  ? ((t.style.zIndex = 2001), (n.style.zIndex = 2300))
                  : (t.style.zIndex = 1003),
                  (t.style.height = '100%'),
                  (t.style.backgroundColor = '#000000'))
                : ((t.style.zIndex = 1),
                  2 == r && (n.style.zIndex = 1003),
                  (t.style.height = 'auto'),
                  (t.style.backgroundColor = 'transparent'))
            },
            sendLogger: function (e) {
              var t = e.msg,
                n = void 0 === t ? '' : t,
                r = e.stage,
                s = void 0 === r ? '' : r,
                o = e.params,
                a = void 0 === o ? {} : o,
                i = e.response,
                c = void 0 === i ? {} : i,
                u =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'info'
              k.a.send({
                tag: 'student.Interact',
                content: {
                  msg: n,
                  interactType: 'Game',
                  interactId: this.options.ircMsg.interactId,
                  interactStage: s,
                  params: JSON.stringify(a),
                  response: JSON.stringify(c),
                },
                level: u,
              })
            },
          },
          destroyed: function () {
            if (
              (console.info(
                '对象函数 destroyed,filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/app.vue'
              ),
                2 === this.isAnswer && 2 !== this.interactStatus)
            ) {
              this.$bus.$emit('continuousCorrect', e)
              this.game.submitAnswer(0, 2)
            } else {
              this.$bus.$emit('continuousCorrect', false)
            }
            this.game.interactReport('close')
            this.sendLogger({
              msg: '结束互动',
              stage: 'end',
            })
            this.showGame = false
            this.changefullPageStyle(false)
          },
        },
        R = A,
        L = n('2877'),
        G = Object(L.a)(R, u, m, false, null, null, null),
        _ = G.exports,
        N = (function (e) {
          Object(a.a)(n, e)
          var t = Object(i.a)(n)
          function n() {
            var e,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 GameCourseware(opts)',
                r,
                'filePath:renderer/components/Classroom/CommonInteractions/gameCourseware/index.js'
              ),
              Object(s.a)(this, n),
              (e = t.call(this, _)),
              (e.options = r),
              (e.dom = r.roomMessage.roomInfo.interactionGame),
              e.initVmApp('游戏课件'),
              e
            )
          }
          return (
            Object(o.a)(n, [
              {
                key: 'createPropsData',
                value: function () {
                  var e = {}
                  return Object(r.a)({ options: this.options }, e)
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
        return u
      })
      var r = n('d4ec'),
        s = n('bee2'),
        o = (n('99af'), n('d9e2'), n('8bbf')),
        a = n.n(o),
        i = n('3898'),
        c = n('d0db'),
        u = (function () {
          function e(t) {
            console.info(
              '函数申明 InteractionBase(app)',
              t,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(r.a)(this, e)
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
                  var t = a.a.extend(e),
                    n = this.createPropsData(),
                    r = new t({
                      i18n: i.b,
                      propsData: n,
                      store: this.store || {},
                    })
                  return r.$mount(), r
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
