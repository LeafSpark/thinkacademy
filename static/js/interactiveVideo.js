; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-6e54407c'],
  {
    '217d': function (e, t, o) {
      'use strict'
      var i = function () {
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
        n = [],
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
        r = (o('29df'), o('2877')),
        c = Object(r.a)(a, i, n, false, null, '1051bd64', null)
      t.a = c.exports
    },
    '29df': function (e, t, o) {
      'use strict'
      o('5ddf')
    },
    '5ddf': function (e, t, o) { },
    b6c9: function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return d
      })
      var i = o('d4ec'),
        n = o('bee2'),
        s = (o('99af'), o('d9e2'), o('8bbf')),
        a = o.n(s),
        r = o('3898'),
        c = o('d0db'),
        d = (function () {
          function e(t) {
            console.info(
              '函数申明 InteractionBase(app)',
              t,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(i.a)(this, e)
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
                    o = this.createPropsData(),
                    i = new t({
                      i18n: r.b,
                      propsData: o,
                      store: this.store || {},
                    })
                  return i.$mount(), i
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
    ca26: function (e, t, o) { },
    e29a: function (e, t, o) {
      'use strict'
      o.r(t)
      o.d(t, 'default', function () {
        return O
      })
      var i = o('5530'),
        n = o('d4ec'),
        s = o('bee2'),
        a = o('262e'),
        r = o('2caf'),
        c = o('b6c9'),
        d = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { class: { hide: e.hideVideoLink } },
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
                          value: 0 == e.status,
                          expression: 'status == 0',
                        },
                      ],
                      staticClass: 'status-join',
                    },
                    [
                      t('div', { staticClass: 'video-wrapper' }, [
                        t('div', { staticClass: 'message-wrapper' }, [
                          t('div', { staticClass: 'message' }, [
                            e._v(
                              ' ' +
                              e._s(
                                e.$t(
                                  'classroom.interactions.videoLink.joinMessage'
                                )
                              ) +
                              ' '
                            ),
                          ]),
                        ]),
                      ]),
                      t('div', { staticClass: 'btn-wrapper' }, [
                        t(
                          'div',
                          {
                            staticClass: 'btn-join',
                            on: { click: e.handleJoin },
                          },
                          [
                            e._v(
                              ' ' +
                              e._s(
                                e.$t(
                                  'classroom.interactions.videoLink.joinButtonName'
                                )
                              ) +
                              ' '
                            ),
                          ]
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
                          value: 1 == e.status,
                          expression: 'status == 1',
                        },
                      ],
                      staticClass: 'status-wait',
                    },
                    [
                      t('div', { staticClass: 'video-wrapper' }, [
                        t('div', { staticClass: 'message-wrapper' }, [
                          t('div', { staticClass: 'message' }, [
                            e._v(
                              ' ' +
                              e._s(
                                e.$t(
                                  'classroom.interactions.videoLink.waitMessage'
                                )
                              ) +
                              ' '
                            ),
                          ]),
                        ]),
                      ]),
                      t('div', { staticClass: 'btn-wrapper' }, [
                        t(
                          'div',
                          {
                            staticClass: 'btn-cancel-join',
                            on: { click: e.handleCancelJoin },
                          },
                          [
                            e._v(
                              ' ' +
                              e._s(
                                e.$t(
                                  'classroom.interactions.videoLink.cancelButton'
                                )
                              ) +
                              ' '
                            ),
                          ]
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
                        t('div', { staticClass: 'info-button' }, [
                          2 == e.status
                            ? t('div', [
                              t('div', { staticClass: 'btn-cancel-join' }, [
                                e._v(
                                  ' ' +
                                  e._s(
                                    e.$t(
                                      'classroom.interactions.videoLink.speaking'
                                    )
                                  ) +
                                  ' '
                                ),
                              ]),
                            ])
                            : e._e(),
                          e.isTargeted || 3 != e.status
                            ? e._e()
                            : t('div', [
                              e.isRaiseHand
                                ? t(
                                  'div',
                                  {
                                    staticClass: 'btn-cancel-join',
                                    on: { click: e.handleCancelJoin },
                                  },
                                  [
                                    e._v(
                                      ' ' +
                                      e._s(e.$t('common.cancel')) +
                                      ' '
                                    ),
                                  ]
                                )
                                : t(
                                  'div',
                                  {
                                    staticClass: 'btn-join',
                                    on: { click: e.handleJoin },
                                  },
                                  [
                                    e._v(
                                      ' ' +
                                      e._s(
                                        e.$t(
                                          'classroom.interactions.videoLink.raiseHandButton'
                                        )
                                      ) +
                                      ' '
                                    ),
                                  ]
                                ),
                            ]),
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
        u = o('c7eb'),
        m = o('1da1'),
        h = (o('b0c0'), o('d81d'), o('caad'), o('2532'), o('a9e3'), o('bcaf')),
        p = o('099c'),
        v =
          (o('d3b7'),
            o('159b'),
            function (e, t) {
              console.info(
                '箭头函数 hasCurrentStudent(stuId, stuList)',
                e,
                t,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/utils.js'
              )
              var o = false
              return (
                t.forEach(function (t) {
                  t.id == e && (o = true)
                }),
                o
              )
            }),
        f = o('d0db'),
        C = o('3b29'),
        g = o('217d'),
        w = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            console.info(
              '函数申明 _default(opts)',
              t,
              'filePath:renderer/components/Classroom/CommonInteractions/videoLink/rtcClass.js'
            )
            Object(n.a)(this, e)
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
        k = o('e417'),
        I = o('c02a'),
        L = null,
        S = null,
        b = {
          components: {
            MediaSecurityAccess: C.a,
            AudioWaves: g.a,
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
              isTargeted: false,
              status: 0,
              isRaiseHand: false,
              planName: this.options.roomMessage.roomInfo.planInfo.name,
              studentName: '',
              isShowAudioIcon: false,
              cameraStatus: true,
              cameraSettingStatus: false,
              microphoneStatus: false,
              localDisplayVideoStatus: true,
              remoteVideoStatus: false,
              isMinimize: false,
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
            hideVideoLink: function () {
              return (
                console.info(
                  '对象函数 hideVideoLink,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                ),
                this.isTargeted && (0 == this.status || 1 == this.status)
              )
            },
            showMinimize: function () {
              return (
                console.info(
                  '对象函数 showMinimize,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                ),
                this.isMinimize && (2 == this.status || 3 == this.status)
              )
            },
            showMaximize: function () {
              return (
                console.info(
                  '对象函数 showMaximize,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                ),
                !this.isMinimize ||
                (this.isMinimize && (0 == this.status || 1 == this.status))
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
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
            })
            this.$bus.$on('updateLocalDisplayVideoStatus', function (t) {
              console.info(
                '箭头函数 监听 updateLocalDisplayVideoStatus(status)',
                t,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
            })
            this.$refs.MediaSecurityAccess.checkAccess()
            this.rtcClass = new w(this.options)
            this.initMinimize()
            this.initRtcEvent()
            this.videoLinkMessage(this.options.ircMsg)
          },
          beforeDestroy: function () {
            var e, t
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
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
            initMinimize: function () {
              console.info(
                '对象函数 initMinimize,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              null !== S
                ? (this.isMinimize = S)
                : console.info(
                  'if(videoLinkMinimizeStatus === null)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                )
            },
            initRtcEvent: function () {
              console.info(
                '对象函数 initRtcEvent,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
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
            listenRemoteVideoStateChanged: function (e, t, o) {
              console.info(
                '对象函数 listenRemoteVideoStateChanged(uid, state, reason)',
                e,
                t,
                o,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              var i =
                this.options.roomMessage.roomInfo.configs.rtcConfig
                  .teacherVideoUid
              if (e != i) {
                var n = this.getRemoteStuInfo()
                2 === t && n.id == e
                  ? (this.rtcClass.setupRemoteVideo(e),
                    (this.remoteVideoStatus = true))
                  : (this.remoteVideoStatus = false)
              } else {
                console.info(
                  'if(uid == teacherVideoUid)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                )
              }
            },
            listenGroupAudioVolumeIndication: function (e) {
              console.info(
                '对象函数 listenGroupAudioVolumeIndication(speakers)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              this.handleAudioIcon(e)
            },
            handleJoin: function (e) {
              var t = this
              return Object(m.a)(
                Object(u.a)().mark(function o() {
                  var i, n, s, a, r, c
                  return Object(u.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (i = e.autoJoin),
                            (n = void 0 !== i && i),
                            console.info(
                              '对象函数 handleJoin(autoJoin)',
                              n,
                              'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                            ),
                            (o.next = 4),
                            t.getMediaStatus()
                          )
                        case 4:
                          if (n || t.microphoneStatus) {
                            o.next = 9
                            break
                          }
                          return (
                            console.info(
                              'if(!autoJoin && !_this2.microphoneStatus)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                            ),
                            t.$refs.MediaSecurityAccess.checkAccess(),
                            t.sendLogger(
                              '举手失败, 失败原因: 未开启麦克风权限'
                            ),
                            o.abrupt('return')
                          )
                        case 9:
                          if (
                            (n ||
                              Object(k.e)(
                                'hw_classroom_interact_video_chat_control',
                                t.options.roomMessage.roomInfo.commonOption,
                                {
                                  interact_id: t.options.ircMsg.interactId,
                                  control_type: '举手',
                                }
                              ),
                              (s = t.options.roomMessage.roomInfo.stuInfo || {}),
                              (a = t.options.ircMsg),
                              (r = JSON.stringify({
                                type: 125,
                                status: 6,
                                id: s.id,
                                name: s.nickName,
                                image: s.avatar,
                                classId:
                                  t.options.roomMessage.roomInfo.stuLiveInfo
                                    .classId,
                                cameraAvailable: t.cameraStatus ? 1 : 0,
                                cameraIsOpen:
                                  t.cameraStatus && t.localDisplayVideoStatus
                                    ? 1
                                    : 2,
                                mikeAvailable: t.microphoneStatus ? 1 : 0,
                              })),
                              (c =
                                window.ChatClient.PeerChatManager.sendPeerMessage(
                                  [{ nickname: a.from }],
                                  r,
                                  h.a.notice
                                )),
                              0 == c)
                          ) {
                            o.next = 20
                            break
                          }
                          return (
                            console.info(
                              'if(res != 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                            ),
                            t.sendLogger(
                              '举手消息发送失败: irc消息响应结果: '.concat(c)
                            ),
                            o.abrupt('return')
                          )
                        case 20:
                          0 == t.status && (t.status = 1),
                            (t.isRaiseHand = true),
                            t.sendLogger('举手消息发送成功')
                        case 23:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            handleCancelJoin: function () {
              console.info(
                '对象函数 handleCancelJoin,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              Object(k.e)(
                'hw_classroom_interact_video_chat_control',
                this.options.roomMessage.roomInfo.commonOption,
                {
                  interact_id: this.options.ircMsg.interactId,
                  control_type: '取消举手',
                }
              )
              var e = this.options.roomMessage.roomInfo.stuInfo || {},
                t = this.options.ircMsg,
                o = JSON.stringify({
                  type: 125,
                  status: 7,
                  id: e.id,
                }),
                i = window.ChatClient.PeerChatManager.sendPeerMessage(
                  [{ nickname: t.from }],
                  o,
                  h.a.notice
                )
              if (0 != i) {
                return (
                  console.info(
                    'if(res != 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                  ),
                  void this.sendLogger(
                    '取消举手消息发送失败: irc消息响应结果: '.concat(i)
                  )
                )
              }
              1 == this.status && (this.status = 0)
              this.isRaiseHand = false
              this.sendLogger('取消举手消息发送成功')
            },
            videoLinkMessage: function (e) {
              console.info(
                '对象函数 videoLinkMessage(ircMsg)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              this.sendLogger(
                '收到视频连麦互动消息: '.concat(JSON.stringify(e))
              )
              this.ircMsg = e
              var t = this.options.roomMessage.roomInfo.stuInfo || {},
                o = e.status,
                i = e.targeted
              if (
                (i &&
                  ((this.isTargeted = true),
                    this.handleJoin({ autoJoin: true })),
                  1 === o && this.$bus.$emit('videoLinkStatus', true),
                  2 === o &&
                  (this.$bus.$emit('videoLinkStatus', false),
                    this.sendLogger(
                      '结束视频连麦互动: '.concat(JSON.stringify(e)),
                      'end'
                    ),
                    this.localVideoEnd(),
                    this.destroy()),
                  4 === o)
              ) {
                var n, s, a, r
                if (
                  (this.sendLogger(
                    '开始视频连麦互动: '.concat(JSON.stringify(e)),
                    'start'
                  ),
                    v(t.id, e.data))
                ) {
                  return (
                    console.info(
                      'if(hasCurrentStudent(stuInfo.id, ircMsg.data))为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                    ),
                    null === (n = window.RTC_COMMON) ||
                    void 0 === n ||
                    null === (s = n.classRtcChannel) ||
                    void 0 === s ||
                    s.setVideoEncoderConfiguration(this.highEncoderConfig),
                    void this.localVideoStart(e)
                  )
                }
                null === (a = window.RTC_COMMON) ||
                  void 0 === a ||
                  null === (r = a.classRtcChannel) ||
                  void 0 === r ||
                  r.setVideoEncoderConfiguration(this.lowEncoderConfig)
                this.remoteVideoStart(e)
              }
            },
            localVideoStart: function (e) {
              var t = this
              return Object(m.a)(
                Object(u.a)().mark(function o() {
                  var i
                  return Object(u.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 localVideoStart(ircMsg)',
                              e,
                              'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                            ),
                            t.$bus.$emit('localVideoLinkStatus', true),
                            (o.next = 5),
                            t.getMediaStatus()
                          )
                        case 5:
                          ; (t.status = 2),
                            (t.isRaiseHand = false),
                            (t.studentName = t.$t('common.me')),
                            t.$nextTick(function () {
                              var e =
                                t.localDisplayVideoStatus && t.cameraStatus
                              t.showLinkVideoEvent(e)
                              t.rtcClass.localVideoStart(e)
                            }),
                            I.o(
                              null === (i = t.ircMsg) || void 0 === i
                                ? void 0
                                : i.interactId,
                              '',
                              true
                            )
                        case 10:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            localVideoEnd: function () {
              var e
              console.info(
                '对象函数 localVideoEnd,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              this.rtcClass.unpublish()
              this.$bus.$emit('localVideoLinkStatus', false)
              I.o(
                null === (e = this.ircMsg) || void 0 === e
                  ? void 0
                  : e.interactId,
                '',
                false
              )
            },
            remoteVideoStart: function (e) {
              var t = this
              console.info(
                '对象函数 remoteVideoStart(ircMsg)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              2 == this.status && this.localVideoEnd()
              var o = this.getRemoteStuInfo()
              o.id
                ? ((this.studentName = o.name),
                  (this.status = 3),
                  (this.remoteVideoStatus = 1 == o.cameraIsOpen),
                  this.$nextTick(function () {
                    t.showLinkVideoEvent(t.remoteVideoStatus)
                    t.rtcClass.setupRemoteVideo(o.id)
                  }))
                : console.info(
                  'if(!remoteStuInfo.id)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                )
            },
            showLinkVideoEvent: function (e) {
              console.info(
                '对象函数 showLinkVideoEvent(videoState)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              Object(k.e)(
                'hw_classroom_interact_video_chat',
                this.options.roomMessage.roomInfo.commonOption,
                {
                  interact_id: this.options.ircMsg.interactId,
                  video_chat_type: this.isTargeted ? 2 : 1,
                  video_state: e ? 1 : 0,
                  voice_state: this.microphoneStatus ? 1 : 0,
                }
              )
            },
            handleAudioIcon: function (e) {
              console.info(
                '对象函数 handleAudioIcon(speakers)',
                e,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              var t = e.map(function (e) {
                return e.uid
              }),
                o = this.getRemoteStuInfo(),
                i = o.id,
                n = e.map(function (e) {
                  return 0 === e.uid
                    ? (console.info(
                      'if(item.uid === 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                    ),
                      e.volume)
                    : (console.info(
                      'if(item.uid === 0)为false,触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                    ),
                      0)
                })[0]
              i && t.includes(Number(i)) && this.showRemoteAudioIcon()
              this.showLocalAudioIcon(n)
            },
            showRemoteAudioIcon: function () {
              var e = this
              console.info(
                '对象函数 showRemoteAudioIcon,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              3 == this.status
                ? ((this.isShowAudioIcon = true),
                  clearTimeout(L),
                  (L = setTimeout(function () { }, 500)))
                : console.info(
                  'if(this.status != 3)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                )
            },
            showLocalAudioIcon: function (e) {
              if (
                (console.info(
                  '对象函数 showLocalAudioIcon(val)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                ),
                  2 == this.status)
              ) {
                return 0 == e
                  ? (console.info(
                    'if(val == 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                  ),
                    void (
                      this.isShowAudioIcon && (this.isShowAudioIcon = false)
                    ))
                  : void (this.isShowAudioIcon || (this.isShowAudioIcon = true))
              }
              console.info(
                'if(this.status != 2)为true触发return,path: /renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
            },
            getRemoteStuInfo: function () {
              return (
                console.info(
                  '对象函数 getRemoteStuInfo,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                ),
                this.ircMsg.data.length ? this.ircMsg.data[0] : {}
              )
            },
            getMediaStatus: function () {
              var e = this
              return Object(m.a)(
                Object(u.a)().mark(function t() {
                  return Object(u.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getMediaStatus,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
                            ),
                            (t.next = 3),
                            Object(p.c)()
                          )
                        case 3:
                          return (
                            (e.cameraStatus = t.sent),
                            (t.next = 6),
                            Object(p.f)()
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
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              this.isMinimize = e
              S = e
            },
            sendLogger: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ''
              f.a.send({
                tag: 'student.Interact',
                content: {
                  msg: e,
                  interactType: 'LinkMic',
                  interactId: this.options.ircMsg.interactId,
                  interactStage: t,
                },
              })
            },
            destroy: function () {
              var e, t
              console.info(
                '对象函数 destroy,filePath:renderer/components/Classroom/CommonInteractions/videoLink/app.vue'
              )
              this.$destroy()
              null === (e = this.$el) ||
                void 0 === e ||
                null === (t = e.parentNode) ||
                void 0 === t ||
                t.removeChild(this.$el)
            },
          },
        },
        M = b,
        V = (o('f70b'), o('2877')),
        y = Object(V.a)(M, d, l, false, null, '01e90cce', null),
        _ = y.exports,
        O = (function (e) {
          Object(a.a)(o, e)
          var t = Object(r.a)(o)
          function o() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 VideoLink(opts)',
                i,
                'filePath:renderer/components/Classroom/CommonInteractions/videoLink/index.js'
              ),
              Object(n.a)(this, o),
              (e = t.call(this, _)),
              (e.options = i),
              (e.dom = i.roomMessage.roomInfo.interactionController),
              e.initVmApp('视频连麦'),
              e
            )
          }
          return (
            Object(s.a)(o, [
              {
                key: 'createPropsData',
                value: function () {
                  var e = {
                    localDisplayVideoStatus: t,
                    localDisplayVideoStatus: t,
                    isShowAudioIcon: false,
                    microphoneStatus: t.sent,
                  }
                  return Object(i.a)({ options: this.options }, e)
                },
              },
            ]),
            o
          )
        })(c.a)
    },
    f70b: function (e, t, o) {
      'use strict'
      o('ca26')
    },
  },
])
