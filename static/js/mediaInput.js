; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-9c43f55c'],
  {
    '07d8': function (t, e, n) {
      t.exports = n.p + 'static/media/xuanzhong.30a77ef5.mp3'
    },
    1108: function (t, e, n) { },
    5539: function (t, e, n) {
      'use strict'
      n('1108')
    },
    '75e8': function (t, e, n) {
      t.exports = n.p + 'static/media/weixuanzhong.0caa6906.mp3'
    },
    '96fb': function (t, e, n) {
      var o
      o = function () {
        var t = Object.prototype.hasOwnProperty,
          e = function (e, n) {
            return t.call(e, n)
          },
          n = function () {
            this._events = {}
          }
        n.prototype.on = function (t, e) {
          this._events ||
            Object.defineProperty(this._events, {
              value: {},
              enumerable: false,
              configurable: true,
              writable: true,
            })
          this._events[t] || (this._events[t] = [])
          this._events[t].push(e)
        }
        n.prototype.emit = function (t, n) {
          if (this._events && e(this._events, t)) {
            for (var o = 0; o < this._events[t].length; o++) {
              this._events[t][o](n)
            }
          }
        }
        n.prototype.removeListener = function (t) {
          this._events && e(this._events, t) && (this._events[t] = [])
        }
        n.prototype.removeAllListeners = function () {
          if (this._events) {
            for (var t in this._events)
              e(this._events, t) && (this._events[t] = [])
            this._events = {}
          }
        }
        var o = (function (t) {
          function e() {
            t.call(this)
            this.options = {
              selected: 0,
              containerClass: '',
              containerItemClass: '',
              count: 1,
              duration: 1,
              direction: 'alternate',
              placement: 1,
              delay: 0.3,
              group: 1,
              diffrentiation: 0,
              min: 0,
              items: [],
              placeholder: null,
              undreg: '',
            }
            this.width = null
            this.height = null
            this.removeAllListeners()
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.init = function (t) {
              var e = this
              for (var n in (void 0 === t && (t = {}), this.options))
                Object.prototype.hasOwnProperty.call(t, n) &&
                  (this.options[n] = t[n])
              document.querySelectorAll('[NeosScroll]').forEach(function (t) {
                t.style.overflow = 'hidden!important'
                e.initItemScroll(t)
              })
              this.emit('init')
            }),
            (e.prototype.initItemScroll = function (t) {
              this.width = t.offsetWidth
              this.height = t.offsetHeight
              var e = Number(
                t.getAttribute('selected') || this.options.selected || 0
              )
              parseInt(t.getAttribute('min') || this.options.min)
              var n = parseInt(e)
              if (!(isNaN(n) || n < 0)) {
                var o = t.querySelector('[NeosScroll-Container]')
                o ||
                  (((o = document.createElement('div')).className =
                    this.options.containerClass),
                    o.setAttribute('NeosScroll-Container', ''),
                    t.appendChild(o))
                var s = t.getAttribute('direction') || this.options.direction,
                  i = this.createItem(s),
                  a =
                    '<div class="' +
                    (this.options.containerItemClass || '') +
                    '" style="display:inline-block; vertical-align:top; position:relative;\n      width:' +
                    this.width +
                    'px;height:' +
                    this.height +
                    'px;line-height:' +
                    this.height +
                    'px;text-align: center; overflow: hidden;">\n      ' +
                    i +
                    '\n      </div>'
                o.innerHTML = a
              }
            }),
            (e.prototype.createItem = function (t) {
              for (var e = this.options.count, o = '', s = 0; s < e; s++) {
                o += this.createScrollItem()
              }
              return (
                '<div style="transform: translate3d(0, 0, 0); transition: transform ' +
                this.options.duration +
                's ease-in-out ' +
                this.options.delay +
                's; position: absolute; width: 100% ; height: auto; top: 0;" NeosScroll-Item direction="' +
                t +
                '">' +
                o +
                ' </div>'
              )
            }),
            (e.prototype.createScrollItem = function () {
              for (
                var t = this,
                e = '',
                n = this.options.items.filter(function (e, n) {
                  if (n != t.options.selected) {
                    return e
                  }
                }),
                o = 0;
                o < n.length;
                o++
              ) {
                e +=
                  '<div style="position: relative; width: 100 % ; height:' +
                  this.height +
                  'px; line-height:' +
                  this.height +
                  'px;overflow: hidden; padding: 0; margin: 0; left: 0; top: 0;">' +
                  this.options.items[o] +
                  '</div>'
              }
              return (
                e +
                '<div style="position: relative; width: 100 % ; height:' +
                this.height +
                'px; line-height:' +
                this.height +
                'px;overflow: hidden; padding: 0; margin-bottom: -' +
                this.height +
                'px; left: 0; top: 0;">' +
                this.options.items[this.options.selected] +
                '</div>'
              )
            }),
            (e.prototype.start = function () {
              return this.scroll()
            }),
            (e.prototype.scroll = function () {
              var t = this
              this.emit('start')
              var e = document.querySelectorAll('[NeosScroll-Item]'),
                n = setTimeout(function () {
                  e.forEach(function (e) {
                    'up' == e.getAttribute('direction')
                      ? (e.style.transform = 'translate3d(0,-100%,0)')
                      : (e.style.transform = 'translate3d(0,0,0)')
                    e.addEventListener('transitionend', function () {
                      t.emit('finished', t.options.selected)
                    })
                  })
                  clearTimeout(n)
                  n = null
                }, 300)
            }),
            e
          )
        })(n)
        return o
      }
      t.exports = o()
    },
    b6c9: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      })
      var o = n('d4ec'),
        s = n('bee2'),
        i = (n('99af'), n('d9e2'), n('8bbf')),
        a = n.n(i),
        r = n('3898'),
        l = n('d0db'),
        c = (function () {
          function t(e) {
            console.info(
              '函数申明 InteractionBase(app)',
              e,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(o.a)(this, t)
            this.app = e
            this.vm = null
            this.keepOtherDom = false
          }
          return (
            Object(s.a)(t, [
              {
                key: 'initVmApp',
                value: function (t) {
                  if (!this.dom) {
                    throw Error('互动的dom容器不存在')
                  }
                  this.dom.children.length > 0 &&
                    !this.keepOtherDom &&
                    (l.a.send({
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
                  var e = a.a.extend(t),
                    n = this.createPropsData(),
                    o = new e({
                      i18n: r.b,
                      propsData: n,
                      store: this.store || {},
                    })
                  return o.$mount(), o
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
                    e = t.submit
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
                value: function (t, e) {
                  return t[''.concat(e)].properties
                },
              },
              {
                key: 'handleMsg',
                value: function () { },
              },
            ]),
            t
          )
        })()
    },
    b7b5: function (t, e, n) {
      'use strict'
      n('b0c0')
      var o = function () {
        var t = this,
          e = t._self._c
        return e(
          'div',
          {
            class: [
              'randomCallContainer',
              'small_random_call' == t.msgType ? 'smallRandomStyle' : '',
            ],
            attrs: { id: 'randomCallContainer' },
          },
          [
            e('audio', {
              ref: 'xuanren',
              staticClass: 'hidden',
              attrs: { src: n('e23c') },
            }),
            e('audio', {
              ref: 'xuanzhong',
              staticClass: 'hidden',
              attrs: { src: n('07d8') },
            }),
            e('audio', {
              ref: 'weixuanzhong',
              staticClass: 'hidden',
              attrs: { src: n('75e8') },
            }),
            t.showMachine && !t.showWinner
              ? e('div', { staticClass: 'machineContainer' }, [
                e('h3', [
                  t._v(
                    t._s(t.$t('classroom.interactions.randomCall.title'))
                  ),
                ]),
                e(
                  'div',
                  {
                    ref: 'rocker',
                    staticClass: 'rocker',
                    attrs: { id: 'rocker' },
                  },
                  [t._v('摇杆')]
                ),
                e('div', {
                  staticClass: 'studentsRollContainer',
                  attrs: { NeosScroll: '' },
                }),
              ])
              : t._e(),
            t.showWinner && !t.showMachine && t.selected
              ? e(
                'div',
                { staticClass: 'winerContainer' },
                [
                  e('h3', [t._v(t._s(t.winnerMsg))]),
                  e('lottie-player', {
                    staticClass: 'lottie-player',
                    attrs: {
                      autoplay: '',
                      loop: '',
                      mode: 'normal',
                      src: '/lottiefiles/randomCall/data.json',
                    },
                  }),
                  e('div', { staticClass: 'winerInfo' }, [
                    e('i', {
                      staticClass: 'level',
                      class: t.level,
                    }),
                    e('span', { staticClass: 'word-ellipsis' }, [
                      t._v(t._s(t.selected.name)),
                    ]),
                  ]),
                  e('img', { attrs: { src: t.selected.avatar } }),
                  e('i', {
                    staticClass: 'close',
                    on: {
                      click: function (e) {
                        return t.destroyInteraction('close')
                      },
                    },
                  }),
                ],
                1
              )
              : t._e(),
          ]
        )
      },
        s = [],
        i = n('c7eb'),
        a = n('1da1'),
        r = n('e39c'),
        l = n('d4ec'),
        c = n('bee2'),
        d = n('262e'),
        u = n('2caf'),
        m = (n('d81d'), n('d3b7'), n('159b'), n('99af'), n('14d9'), n('753a')),
        h = (function (t) {
          Object(d.a)(n, t)
          var e = Object(u.a)(n)
          function n() {
            var t,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'random_call'
            return (
              console.info(
                '函数申明 Main(opts, msgType)',
                o,
                s,
                'filePath:renderer/components/Classroom/CommonInteractions/randomCall/randomCall.js'
              ),
              Object(l.a)(this, n),
              (t = e.call(this)),
              (t.options = o),
              'random_call' == s
                ? (t.students = o.ircMsg.students)
                : (o.ircMsg.students.push(o.ircMsg.selected),
                  (t.students = o.ircMsg.students.map(function (t) {
                    return (t.name = t.nickName), t
                  }))),
              (t.myself = o.roomMessage.roomInfo.stuInfo.id),
              t
            )
          }
          return (
            Object(c.a)(n, [
              {
                key: 'scrollItems',
                value: function () {
                  if (this.students) {
                    var t = []
                    return (
                      this.students.forEach(function (e) {
                        t.push(
                          '<div class="rollBg">\n          <div class="avatar">\n            <img src="'
                            .concat(
                              e.avatar,
                              '" />\n          </div>\n          <p class="name">'
                            )
                            .concat(e.name, '</p>\n        </div>')
                        )
                      }),
                      t
                    )
                  }
                  console.info(
                    'if(!this.students)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomCall/randomCall.js'
                  )
                },
              },
              {
                key: 'getInteractionChildDom',
                value: function () {
                  return document.getElementById('randomCallContainer')
                },
              },
            ]),
            n
          )
        })(m.a),
        p = n('96fb'),
        f = n.n(p),
        v = (n('a717'), n('bcaf')),
        C = n('099c'),
        g = n('d0db'),
        y = {
          name: 'RandomCall',
          props: {
            options: {
              type: Object,
              default: function () { },
            },
            msgType: {
              type: String,
              default: 'random_call',
            },
            studentList: {
              type: Array,
              default: function () {
                return []
              },
            },
          },
          data: function () {
            return {
              showMachine: true,
              showWinner: false,
              selected: null,
              winnerMsg: '',
              cameraStatus: true,
              cameraSettingStatus: false,
              microphoneStatus: false,
              localDisplayVideoStatus: true,
            }
          },
          created: function () {
            this.randomCall = new h(this.options, this.msgType)
          },
          mounted: function () {
            var t = this
            this.isBigClassRandomCall && this.randomCallInit()
            var e = new f.a()
            e.on('finished', function (e) {
              console.info(
                '箭头函数 监听 finished(item)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
              )
              t.selected = t.randomCall.students[e]
              t.selected.userId === t.randomCall.myself
                ? (t.$refs.xuanzhong.play(),
                  (t.winnerMsg = t.$t(
                    'classroom.interactions.randomCall.finishedNotice.self'
                  )))
                : (t.$refs.weixuanzhong.play(),
                  (t.winnerMsg = t.$t(
                    'classroom.interactions.randomCall.finishedNotice.other',
                    { name: t.selected.name }
                  )))
              t.showMachine = false
              t.showWinner = true
              t.isBigClassRandomCall &&
                t.sendPeerMessageToMain(t.selected.teacherIrcName)
            })
            this.$nextTick(function () {
              Object(r.a)(t.$refs.rocker, 'active')
              e.init({
                selected: t.randomCall.students.length - 1,
                count: 1,
                duration: 3.5,
                direction: 'up',
                items: t.randomCall.scrollItems(),
              })
              t.$refs.rocker.addEventListener('animationend', function () {
                console.info(
                  '箭头函数 监听 animationend,filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                )
                Object(r.w)(t.$refs.rocker, 'active')
                t.$refs.xuanren.play()
                e.start()
              })
            })
            this.sendLogger('开启随机点名')
          },
          computed: {
            isBigClassRandomCall: function () {
              return (
                console.info(
                  '对象函数 isBigClassRandomCall,filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                ),
                'random_call' == this.msgType
              )
            },
            level: function () {
              return (
                console.info(
                  '对象函数 level,filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                ),
                'level_'.concat(this.selected.level)
              )
            },
          },
          methods: {
            randomCallInit: function () {
              var t = this
              console.info(
                '对象函数 randomCallInit,filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
              )
              this.$bus.$emit('videoLinkStatus', true)
              this.$bus.$emit('getLocalDisplayVideoStatus', function (e) {
                console.info(
                  '箭头函数 监听 getLocalDisplayVideoStatus(status)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                )
                t.localDisplayVideoStatus = e
              })
              this.$bus.$on('updateLocalDisplayVideoStatus', function (e) {
                console.info(
                  '箭头函数 监听 updateLocalDisplayVideoStatus(status)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                )
                t.localDisplayVideoStatus = e
              })
            },
            getMediaStatus: function () {
              var t = this
              return Object(a.a)(
                Object(i.a)().mark(function e() {
                  return Object(i.a)().wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getMediaStatus,filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                            ),
                            (e.next = 3),
                            Object(C.c)()
                          )
                        case 3:
                          return (
                            (t.cameraStatus = e.sent),
                            (e.next = 6),
                            Object(C.f)()
                          )
                        case 6:
                          t.microphoneStatus = e.sent
                        case 7:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )()
            },
            sendPeerMessageToMain: function (t) {
              var e = this
              return Object(a.a)(
                Object(i.a)().mark(function n() {
                  var o, s
                  return Object(i.a)().wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 sendPeerMessageToMain(teacherIrcName)',
                              t,
                              'filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                            ),
                            (n.next = 3),
                            e.getMediaStatus()
                          )
                        case 3:
                          if (
                            ((o = JSON.stringify({
                              type: 125,
                              msg: 'randomCall',
                              id: e.randomCall.myself,
                              cameraAvailable: e.cameraStatus ? 1 : 0,
                              cameraIsOpen:
                                e.cameraStatus && e.localDisplayVideoStatus
                                  ? 1
                                  : 2,
                              mikeAvailable: e.microphoneStatus ? 1 : 0,
                            })),
                              (s =
                                window.ChatClient.PeerChatManager.sendPeerMessage(
                                  [{ nickname: t }],
                                  o,
                                  v.a.notice
                                )),
                              0 == s)
                          ) {
                            n.next = 9
                            break
                          }
                          return (
                            console.info(
                              'if(res != 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
                            ),
                            e.sendLogger(
                              '随机点名消息发送失败: irc消息响应结果: '.concat(
                                s
                              )
                            ),
                            n.abrupt('return')
                          )
                        case 9:
                        case 'end':
                          return n.stop()
                      }
                    }
                  }, n)
                })
              )()
            },
            destroyInteraction: function (t) {
              var e, n
              console.info(
                '对象函数 destroyInteraction(type)',
                t,
                'filePath:renderer/components/Classroom/CommonInteractions/randomCall/app.vue'
              )
              this.$destroy()
              this.isBigClassRandomCall &&
                ('close' !== t && this.$bus.$emit('videoLinkStatus', false),
                  this.$bus.$off('updateLocalDisplayVideoStatus'))
              this.randomCall.getInteractionChildDom() &&
                (null === (e = this.$el) ||
                  void 0 === e ||
                  null === (n = e.parentNode) ||
                  void 0 === n ||
                  n.removeChild(this.$el))
            },
            sendLogger: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ''
              g.a.send({
                tag: 'student.Interact',
                content: {
                  msg: t,
                  interactType: 'randomCall',
                  interactId: '',
                  interactStage: e,
                },
              })
            },
          },
        },
        b = y,
        w = (n('5539'), n('2877')),
        I = Object(w.a)(b, o, s, false, null, '7688c492', null)
      e.a = I.exports
    },
    e23c: function (t, e, n) {
      t.exports = n.p + 'static/media/xuanren.c5c10ba4.mp3'
    },
  },
])
