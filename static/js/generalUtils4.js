; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-4cfb0224'],
  {
    '13f9': function (t, e, n) {
      'use strict'
      n('98b5')
    },
    '1e7f': function (t, e, n) {
      'use strict'
      n.r(e)
      n.d(e, 'default', function () {
        return b
      })
      var i = n('5530'),
        o = n('d4ec'),
        s = n('bee2'),
        a = n('262e'),
        r = n('2caf'),
        u = n('b6c9'),
        c = function () {
          var t = this,
            e = t._self._c
          return e(
            'div',
            t._l(t.data, function (n) {
              return e(
                'div',
                {
                  key: n.userId,
                  staticClass: 'student-item',
                  style: {
                    left:
                      t.diffInfo.w + t.pptratio.width * n.originXRatio + 'px',
                    top:
                      t.diffInfo.h + t.pptratio.height * n.originYRatio + 'px',
                    width: t.pptratio.width * n.WRatio + 'px',
                    height: t.pptratio.height * n.HRatio + 'px',
                  },
                },
                [
                  e('p', { staticClass: 'stu-name word-ellipsis' }, [
                    t._v(' ' + t._s(n.nickName) + ' '),
                  ]),
                  e('p', { staticClass: 'stu-img' }, [
                    e('img', {
                      attrs: {
                        src: n.avatar,
                        alt: '',
                      },
                    }),
                  ]),
                  4 === t.msgType && t.urlMap[n.addCoin] && t.isShowCoins
                    ? e('lottie-player', {
                      staticClass: 'lottie-player',
                      attrs: {
                        autoplay: '',
                        mode: 'normal',
                        src: t.urlMap[n.addCoin],
                      },
                    })
                    : t._e(),
                  e(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: n.isSay,
                          expression: 'item.isSay',
                        },
                      ],
                      staticClass: 'audio-box',
                    },
                    [
                      e('AudioWaves', {
                        staticClass: 'audio-waves',
                        attrs: {
                          animation: true,
                          size: 'small',
                          skin: 'green',
                          'animation-type': 'sound',
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            0
          )
        },
        d = [],
        l = n('3835'),
        m = n('b85c'),
        p = n('2909'),
        h =
          (n('14d9'),
            n('4de4'),
            n('d3b7'),
            n('159b'),
            n('e260'),
            n('4ec9'),
            n('3ca3'),
            n('ddb0'),
            n('99af'),
            n('d81d'),
            n('6062'),
            n('a434'),
            n('a9e3'),
            n('217d')),
        f =
          (n('a717'),
          {
            components: { AudioWaves: h.a },
            props: {
              options: {
                type: Object,
                default: function () {
                  return {
                    isHistory: false,
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
                stuId: this.options.roomMessage.roomInfo.stuInfo.id,
                urlMap: {
                  5: '/lottiefiles/coins/coins-add-5/data.json',
                  10: '/lottiefiles/coins/coins-add-10/data.json',
                },
                ircMsg: this.options.ircMsg,
                stuList: [],
                diffInfo: {},
                pptratio: {
                  width: '',
                  height: '',
                },
                boundingClientRect: {},
                data: [],
                isShowCoins: false,
                msgType: null,
              }
            },
            watch: {
              stuList: {
                handler: function (t, e) {
                  var n = this
                  switch (
                  (console.info(
                    '对象函数 handler(newVal, oldVal)',
                    t,
                    e,
                    'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                  ),
                    this.options.isHistory && this.upDownClass(t, e),
                    this.msgType)
                  ) {
                    case 2:
                    case 3:
                      if (this.options.isHistory) {
                        return void console.info(
                          'if(this.options.isHistory)为true触发return,path: /renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                        )
                      }
                      this.ircMsg,
                        this.options.isHistory,
                        this.upDownClass(t, e),
                        this.data
                      break
                    case 4:
                      var i = t.filter(function (t) {
                        return 0 !== t.addCoin
                      })
                      this.data.forEach(function (t) {
                        return (t.addCoin = 0)
                      }),
                        i.forEach(function (t) {
                          n.data.forEach(function (e) {
                            t.userId === e.userId && (e.addCoin = t.addCoin)
                          })
                          t.userId == n.stuId &&
                            n.$bus.$emit('updateAchievement', 'add', t.addCoin)
                        }),
                        (this.isShowCoins = true)
                      var o = null
                      if (o) {
                        return void console.info(
                          'if(timer)为true触发return,path: /renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                        )
                      }
                      o = setTimeout(function () {
                        n.isShowCoins = false
                        clearTimeout(o)
                        o = null
                      }, 4000)
                      break
                    case 5:
                      this.dragVideoView(t, e), this.$forceUpdate()
                      break
                    default:
                      break
                  }
                },
                deep: true,
              },
            },
            computed: {},
            mounted: function () {
              var t = this
              this.$bus.$emit('multVideoLinkStatus', {
                pub: true,
                status: 1,
              })
              this.$bus.$emit('raiseHandSendMessageToTeacher', { type: 127 })
              this.$nextTick(function () {
                t.getSize()
                window.addEventListener('resize', function () {
                  console.info(
                    '箭头函数 监听 resize,filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                  )
                  t.getSize()
                })
              })
              this.ircMsg
              this.options.isHistory
              this.receiveMessage(this.ircMsg)
              this.groupAudioVolumeIndication()
              this.bindRtcEvent()
            },
            beforeDestroy: function () {
              var t = this
              console.info(
                '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
              )
              this.$bus.$emit('multVideoLinkStatus', { pub: false })
              this.$bus.$emit('raiseHandForMultVideoLink', false)
              this.data.forEach(function (e) {
                e.userId == t.stuId && t.$bus.$emit('raiseHandDisabled', false)
                t.$bus.$emit('multVideoLinkStatus', {
                  pub: true,
                  status: 3,
                  stuId: e.userId,
                })
              })
              this.upDownClass([], this.data)
              this.rtcClass.teacherRtcChannel.off(
                'remoteVideoStateChanged',
                this.listenRemoteVideoStateChanged
              )
            },
            methods: {
              getUpDownStuObj: function (t, e) {
                console.info(
                  '对象函数 getUpDownStuObj(newVal, oldVal)',
                  t,
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                var n = new Map(),
                  i = [].concat(Object(p.a)(e), Object(p.a)(t))
                i.forEach(function (t) {
                  n.set(t.userId, t)
                })
                var o =
                  e.map(function (t) {
                    return t.userId
                  }) || [],
                  s =
                    t.map(function (t) {
                      return t.userId
                    }) || [],
                  a = new Set(s),
                  r = new Set(o),
                  u = o.filter(function (t) {
                    return !a.has(t)
                  }),
                  c = s.filter(function (t) {
                    return !r.has(t)
                  })
                return {
                  downstu: u,
                  upstu: c,
                  allList: n,
                }
              },
              upDownClass: function (t, e) {
                var n = this
                console.info(
                  '对象函数 upDownClass(newVal, oldVal)',
                  t,
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                var i = this.getUpDownStuObj(t, e)
                i.downstu.forEach(function (t) {
                  return i.allList.delete(t)
                })
                i.downstu.forEach(function (t) {
                  var e = null
                  n.data.forEach(function (n, i) {
                    t == n.userId && (e = i)
                  })
                  null != e && n.data.splice(e, 1)
                })
                i.upstu.forEach(function (t) {
                  n.data.length <= 4 && n.data.push(i.allList.get(t))
                })
                this.$nextTick(function () {
                  i.upstu
                  i.downstu
                  i.upstu.forEach(function (t) {
                    n.$bus.$emit('multVideoLinkStatus', {
                      pub: true,
                      status: 2,
                      stuId: t,
                    })
                    var e = 'mult-video-'.concat(t)
                    t == n.stuId
                      ? (n.$bus.$emit('raiseHandDisabled', true),
                        n.setupLocalVideo(e))
                      : setTimeout(function () {
                        n.setupRemoteVideo(t, e)
                        n.muteRemoteAudio(t, false)
                      }, 1700)
                  })
                  i.downstu.forEach(function (t) {
                    t == n.stuId && n.$bus.$emit('raiseHandDisabled', false)
                    n.$bus.$emit('multVideoLinkStatus', {
                      pub: true,
                      status: 3,
                      stuId: t,
                    })
                    n.muteRemoteAudio(t, true)
                  })
                })
              },
              receiveMessage: function (t) {
                console.info(
                  '对象函数 receiveMessage(noticeContent)',
                  t,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.msgType = t.status
                1 == this.msgType &&
                  this.$bus.$emit('raiseHandForMultVideoLink', true)
                this.stuList = t.data || []
              },
              dragVideoView: function (t, e) {
                var n = this
                return (
                  console.info(
                    '对象函数 dragVideoView(newVal, oldVal)',
                    t,
                    e,
                    'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                  ),
                  t.forEach(function (t, i) {
                    e.forEach(function (e) {
                      ; (t.originYRatio === e.originYRatio &&
                        t.originXRatio === e.originXRatio) ||
                        ((n.data[i].originYRatio = t.originYRatio),
                          (n.data[i].originXRatio = t.originXRatio))
                    })
                  }),
                  t
                )
              },
              switchSpking: function (t, e) {
                var n = this
                console.info(
                  '对象函数 switchSpking(type, id)',
                  t,
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                0 === e && (e = this.stuId)
                this.data.forEach(function (i) {
                  i.userId == e && ((i.isSay = 'off' !== t), n.$forceUpdate())
                })
              },
              strMapToObj: function (t) {
                console.info(
                  '对象函数 strMapToObj(strMap)',
                  t,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                var e,
                  n = Object.create(null),
                  i = Object(m.a)(t)
                try {
                  for (i.s(); !(e = i.n()).done;) {
                    var o = Object(l.a)(e.value, 2),
                      s = o[0],
                      a = o[1]
                    n[s] = a
                  }
                } catch (r) {
                  i.e(r)
                } finally {
                  i.f()
                }
                return n
              },
              getSize: function () {
                console.info(
                  '对象函数 getSize,filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.boundingClientRectController = document
                  .getElementById('interactionController')
                  .getBoundingClientRect()
                var t = (this.pptratio.width =
                  this.boundingClientRectController.width),
                  e = (this.pptratio.height =
                    this.boundingClientRectController.height)
                e / t > 0.75
                  ? ((this.diffInfo = {
                    h: (e - (t / 4) * 3) / 2,
                    w: 0,
                  }),
                    (this.pptratio.height = e - 2 * this.diffInfo.h))
                  : ((this.diffInfo = {
                    w: (t - (e / 3) * 4) / 2,
                    h: 0,
                  }),
                    (this.pptratio.width = t - 2 * this.diffInfo.w))
              },
              setupLocalVideo: function (t) {
                console.info(
                  '对象函数 setupLocalVideo(id)',
                  t,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.rtcEngine = window.RTC_COMMON.rtcEngine
                this.rtcEngine.setupLocalVideo(document.getElementById(t))
              },
              setupRemoteVideo: function (t, e) {
                console.info(
                  '对象函数 setupRemoteVideo(uid, id)',
                  t,
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.classRtcChannel = window.RTC_COMMON.classRtcChannel
                this.classRtcChannel.setupRemoteVideo(
                  Number(t),
                  document.getElementById(e)
                )
              },
              muteRemoteAudio: function (t, e) {
                console.info(
                  '对象函数 muteRemoteAudio(uid, mute)',
                  t,
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.classRtcChannel = window.RTC_COMMON.classRtcChannel
                this.classRtcChannel.muteRemoteAudioStream(Number(t), e)
              },
              groupAudioVolumeIndication: function () {
                var t = this
                console.info(
                  '对象函数 groupAudioVolumeIndication,filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                var e = {}
                this.rtcEngine = window.RTC_COMMON.rtcEngine
                this.rtcEngine.on('groupAudioVolumeIndication', function (n) {
                  console.info(
                    '箭头函数 监听 groupAudioVolumeIndication(speakers)',
                    n,
                    'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                  )
                  n.forEach(function (n) {
                    !e[n.uid] && (e[n.uid] = 1)
                    n.volume > 100
                      ? t.switchSpking('say', n.uid)
                      : ((e[n.uid] = e[n.uid] + 1),
                        5 === e[n.uid] &&
                        ((e = {}), t.switchSpking('off', n.uid)))
                  })
                })
              },
              bindRtcEvent: function () {
                console.info(
                  '对象函数 bindRtcEvent,filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.classRtcChannel = window.RTC_COMMON.classRtcChannel
                this.classRtcChannel.on(
                  'remoteVideoStateChanged',
                  this.listenRemoteVideoStateChanged
                )
              },
              listenRemoteVideoStateChanged: function (t, e, n) {
                console.info(
                  '对象函数 listenRemoteVideoStateChanged(uid, state, reason)',
                  t,
                  e,
                  n,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                this.data.forEach(function (e) {
                  t == e.userId &&
                    (e.cameraIsOpen = 3 == n || 5 == n || 7 == n ? 2 : 1)
                })
              },
              destroyInteraction: function (t) {
                var e, n
                console.info(
                  '对象函数 destroyInteraction(options)',
                  t,
                  'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/app.vue'
                )
                var i = t.ircMsg
                this.upDownClass(i.data, this.data)
                this.$destroy()
                null === (e = this.$el) ||
                  void 0 === e ||
                  null === (n = e.parentNode) ||
                  void 0 === n ||
                  n.removeChild(this.$el)
              },
            },
          }),
        C = f,
        v = (n('13f9'), n('2877')),
        w = Object(v.a)(C, c, d, false, null, '3f4d29da', null),
        g = w.exports,
        b = (function (t) {
          Object(a.a)(n, t)
          var e = Object(r.a)(n)
          function n() {
            var t,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 MultVideoLink(opts)',
                i,
                'filePath:renderer/components/Classroom/CommonInteractions/multVideoLink/index.js'
              ),
              Object(o.a)(this, n),
              (t = e.call(this, g)),
              (t.options = i),
              (t.dom = i.roomMessage.roomInfo.interactionController),
              t.initVmApp('多人连麦'),
              t
            )
          }
          return (
            Object(s.a)(n, [
              {
                key: 'createPropsData',
                value: function () {
                  var t = {}
                  return Object(i.a)({ options: this.options }, t)
                },
              },
            ]),
            n
          )
        })(u.a)
    },
    '217d': function (t, e, n) {
      'use strict'
      var i = function () {
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
        o = [],
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
        u = Object(r.a)(a, i, o, false, null, '1051bd64', null)
      e.a = u.exports
    },
    '29df': function (t, e, n) {
      'use strict'
      n('5ddf')
    },
    '5ddf': function (t, e, n) { },
    '98b5': function (t, e, n) { },
    b6c9: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      })
      var i = n('d4ec'),
        o = n('bee2'),
        s = (n('99af'), n('d9e2'), n('8bbf')),
        a = n.n(s),
        r = n('3898'),
        u = n('d0db'),
        c = (function () {
          function t(e) {
            console.info(
              '函数申明 InteractionBase(app)',
              e,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(i.a)(this, t)
            this.app = e
            this.vm = null
            this.keepOtherDom = false
          }
          return (
            Object(o.a)(t, [
              {
                key: 'initVmApp',
                value: function (t) {
                  if (!this.dom) {
                    throw Error('互动的dom容器不存在')
                  }
                  this.dom.children.length > 0 &&
                    !this.keepOtherDom &&
                    (u.a.send({
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
                    i = new e({
                      i18n: r.b,
                      propsData: n,
                      store: this.store || {},
                    })
                  return i.$mount(), i
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
  },
])
