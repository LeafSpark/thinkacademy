; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-7bd0aea8'],
  {
    '0a06a': function (e, t, a) {
      'use strict'
      a.d(t, 'g', function () {
        return n
      })
      a.d(t, 'j', function () {
        return o
      })
      a.d(t, 'k', function () {
        return r
      })
      a.d(t, 'i', function () {
        return i
      })
      a.d(t, 'c', function () {
        return c
      })
      a.d(t, 'b', function () {
        return l
      })
      a.d(t, 'a', function () {
        return d
      })
      a.d(t, 'f', function () {
        return u
      })
      a.d(t, 'h', function () {
        return f
      })
      a.d(t, 'd', function () {
        return p
      })
      a.d(t, 'e', function () {
        return m
      })
      a('b680')
      var s = a('2f5c'),
        n = function (e) {
          Object(s.a)('osta_login', { hw_user_id: ''.concat(e) })
        },
        o = function (e) {
          try {
            Object(s.a)('osta_update_new_version', {
              new_version: null === e || void 0 === e ? void 0 : e.newVersion,
              is_force_update: !(
                null === e ||
                void 0 === e ||
                !e.needForceUpgrade
              ),
            })
          } catch (t) {
            console.error('神策埋点报错:', t)
          }
        },
        r = function (e) {
          Object(s.a)('osta_update_skip', {
            new_version:
              (null === e || void 0 === e ? void 0 : e.newVersion) || '',
          })
        },
        i = function (e) {
          Object(s.a)('osta_update_install', {
            new_version: null === e || void 0 === e ? void 0 : e.newVersion,
          })
        },
        c = function (e) {
          Object(s.a)('osta_do_pre_test', { plan_id: ''.concat(e) })
        },
        l = function (e) {
          Object(s.a)('osta_do_homework', { plan_id: ''.concat(e) })
        },
        d = function (e) {
          Object(s.a)('osta_class_report', { plan_id: ''.concat(e) })
        },
        u = function (e) {
          Object(s.a)('osta_leraning_material', { plan_id: ''.concat(e) })
        },
        f = function (e) {
          try {
            Object(s.a)('osta_sign_in', {
              plan_id: ''.concat(e.planId),
              coins_count: e.coins,
              start_difference: new Date().getTime() - 1000 * e.time,
            })
          } catch (t) {
            console.error('神策埋点报错:', t)
          }
        },
        p = function (e, t, a) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
          try {
            Object(s.a)('osta_enter_classroom', {
              time_offset: n,
              plan_id: ''.concat(e.planId),
              class_type: 2 == e.subPlatformType ? 'small' : 'dual',
              class_id: ''.concat(e.classId),
              is_camera_ok: !t.camDetecting,
              is_mic_ok: !t.micDetecting,
              network_quality:
                0 === t.netDetecting
                  ? 'good'
                  : 1 === e.networkStatus
                    ? 'poor'
                    : 'unknown',
              courseware_localcache_exit: a.exit,
              courseware_download_size: a.exit ? 0 : +a.size.toFixed(2),
              courseware_download_time: a.exit
                ? 0
                : (a.endTime - a.startTime) / 1000,
              start_difference:
                new Date().getTime() + n - 1000 * a.courseStartTime,
            })
          } catch (o) {
            console.error('神策埋点报错:', o)
          }
        },
        m = function (e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          try {
            Object(s.a)('osta_enter_playback', {
              plan_id: ''.concat(e.planId),
              class_id: ''.concat(e.classId),
              courseware_localcache_exit: t.exit,
              courseware_download_size: t.exit ? 0 : +t.size.toFixed(2),
              courseware_download_time: t.exit
                ? 0
                : (t.endTime - t.startTime) / 1000,
              end_difference: new Date().getTime() + a - 1000 * t.courseEndTime,
            })
          } catch (n) {
            console.error('神策埋点报错:', n)
          }
        }
    },
    '17c8': function (e, t, a) { },
    '24ba': function (e, t) {
      e.exports = {
        functional: true,
        render(e, t) {
          const { _c: a, _v: s, data: n, children: o = [] } = t,
            {
              class: r,
              staticClass: i,
              style: c,
              staticStyle: l,
              attrs: d = {},
              ...u
            } = n
          return a(
            'svg',
            {
              class: [r, i],
              style: [c, l],
              attrs: Object.assign(
                {
                  width: '18',
                  height: '18',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                d
              ),
              ...u,
            },
            o.concat([
              a('path', {
                attrs: {
                  d: 'M9 0a9 9 0 110 18A9 9 0 019 0zm0 12a1.125 1.125 0 100 2.25A1.125 1.125 0 009 12zm0-9a1.07 1.07 0 00-1.069 1.124l.282 5.627a.788.788 0 001.574 0l.282-5.627A1.07 1.07 0 009 3z',
                  fill: '#FF503F',
                  'fill-rule': 'evenodd',
                },
              }),
            ])
          )
        },
      }
    },
    '2f5c': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var s = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        window.$sensors.track(e, t)
      }
    },
    '340d': function (e, t, a) {
      'use strict'
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'a-modal',
          {
            attrs: {
              width: e.width,
              maskClosable: false,
              centered: true,
              keyboard: false,
              closable: false,
              footer: null,
              dialogClass: e.classes,
              destroyOnClose: e.destroyOnClose,
              zIndex: e.zIndex,
            },
            model: {
              value: e.isShowModal,
              callback: function (t) {
                e.isShowModal = t
              },
              expression: 'isShowModal',
            },
          },
          [
            t('div', { staticClass: 'common-model-wrapper' }, [
              t('div', { staticClass: 'top-wrapper' }, [
                t('div', { staticClass: 'title' }, [e._v(e._s(e.title))]),
                t('div', { staticClass: 'sub-title' }, [
                  e._v(e._s(e.subTitle)),
                ]),
              ]),
              e.$slots.default
                ? t(
                  'div',
                  { staticClass: 'content-wrapper' },
                  [e._t('default')],
                  2
                )
                : e._e(),
              e.showFooter
                ? t(
                  'div',
                  { staticClass: 'bottom-wrapper' },
                  [
                    e.showLeftBtn
                      ? t(
                        'a-button',
                        {
                          staticClass: 'btn left-btn',
                          attrs: {
                            type: 'primary',
                            shape: 'round',
                            size: 'large',
                            loading: e.leftLoading,
                          },
                          on: {
                            click: function (t) {
                              return e.leftOperation()
                            },
                          },
                        },
                        [e._v(' ' + e._s(e.leftBtnText) + ' ')]
                      )
                      : e._e(),
                    e.showRightBtn
                      ? t(
                        'a-button',
                        {
                          staticClass: 'btn right-btn',
                          attrs: {
                            type: 'primary',
                            shape: 'round',
                            size: 'large',
                            disabled: e.disabled,
                            loading: e.rightLoading,
                          },
                          on: {
                            click: function (t) {
                              return e.rightOperation()
                            },
                          },
                        },
                        [e._v(' ' + e._s(e.rightBtnText) + ' ')]
                      )
                      : e._e(),
                  ],
                  1
                )
                : e._e(),
            ]),
          ]
        )
      },
        n = [],
        o =
          (a('a9e3'),
            a('a15b'),
          {
            props: {
              width: {
                type: Number,
                default: 343,
              },
              title: {
                type: String,
                default: '',
              },
              isShowModal: {
                type: Boolean,
                default: false,
              },
              subTitle: {
                type: String,
                default: '',
              },
              leftBtnText: {
                type: String,
                default: '',
              },
              rightBtnText: {
                type: String,
                default: '',
              },
              showLeftBtn: {
                type: Boolean,
                default: true,
              },
              showRightBtn: {
                type: Boolean,
                default: true,
              },
              dialogClass: {
                type: String || Array,
                default: '',
              },
              showFooter: {
                type: Boolean,
                default: true,
              },
              destroyOnClose: {
                type: Boolean,
                default: false,
              },
              zIndex: {
                type: Number,
                default: 1000,
              },
              disabled: {
                type: Boolean,
                default: false,
              },
              leftLoading: {
                type: Boolean,
                default: false,
              },
              rightLoading: {
                type: Boolean,
                default: false,
              },
            },
            computed: {
              classes: function () {
                console.info(
                  '对象函数 classes,filePath:renderer/components/Common/Model.vue'
                )
                var e = this.dialogClass
                return (
                  Array.isArray(this.dialogClass) &&
                  (e = this.dialogClass.join(' ')),
                  'common-model-cls '.concat(e)
                )
              },
            },
            methods: {
              leftOperation: function () {
                console.info(
                  '对象函数 leftOperation,filePath:renderer/components/Common/Model.vue'
                )
                this.$emit('leftBtnOperation')
              },
              rightOperation: function () {
                console.info(
                  '对象函数 rightOperation,filePath:renderer/components/Common/Model.vue'
                )
                this.$emit('rightBtnOperation')
              },
            },
          }),
        r = o,
        i = (a('9d48'), a('2877')),
        c = Object(i.a)(r, s, n, false, null, null, null)
      t.a = c.exports
    },
    '374d': function (e, t, a) { },
    '3aa1': function (e, t, a) {
      'use strict'
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          { staticClass: 'lottie-emoticon-icon' },
          [
            t('lottie-player', {
              ref: 'emoji',
              style: e.emoticonStyle,
              attrs: {
                mode: 'normal',
                autoplay: '',
                loop: e.loopLottie,
                src: e.lottieUrl,
              },
              on: { complete: e.onLottieComplete },
            }),
          ],
          1
        )
      },
        n = [],
        o = (a('a9e3'), a('a717'), a('e39c')),
        r = {
          props: {
            type: {
              type: Number,
              default: 2,
            },
            width: {
              type: Number,
              default: 70,
            },
            height: {
              type: Number,
              default: 70,
            },
            lottieUrl: {
              type: String,
              default: '',
            },
            loopLottie: {
              type: Boolean,
              default: false,
            },
          },
          computed: {
            emoticonStyle: function () {
              return (
                console.info(
                  '对象函数 emoticonStyle,filePath:renderer/components/Classroom/SmallClass/Common/LottieEmoticon/index.vue'
                ),
                {
                  width: ''.concat(Object(o.v)(this.width)),
                  height: ''.concat(Object(o.v)(this.height)),
                }
              )
            },
          },
          methods: {
            onLottieComplete: function () {
              console.info(
                '对象函数 onLottieComplete,filePath:renderer/components/Classroom/SmallClass/Common/LottieEmoticon/index.vue'
              )
              this.$emit('animationComplete')
            },
          },
          watch: {
            lottieUrl: function (e) {
              var t = this
              e &&
                this.$nextTick(function () {
                  return t.$refs.emoji.load(e)
                })
            },
          },
        },
        i = r,
        c = a('2877'),
        l = Object(c.a)(i, s, n, false, null, null, null)
      t.a = l.exports
    },
    5010: function (e, t, a) { },
    5029: function (e, t, a) { },
    '51e97': function (e, t, a) {
      'use strict'
      a('ae5c')
    },
    '5af0': function (e, t, a) {
      'use strict'
      a.r(t)
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          {
            staticClass: 'ready-class',
            attrs: { id: 'ready-class' },
          },
          [
            t('Toolbar'),
            t('ReadyClass', {
              attrs: {
                enterUrl: e.enterUrl,
                playback: e.isPlayBack,
              },
            }),
          ],
          1
        )
      },
        n = [],
        o = a('c7eb'),
        r = a('1da1'),
        i = (a('99af'), a('dfa8')),
        c = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { attrs: { 'data-log': '课前准备页' } },
            [
              e.isError
                ? [
                  t('ErrorStatus', {
                    attrs: {
                      showBack: true,
                      backUrl: e.backUrl,
                      scene: e.playback
                        ? 'PlaybackReadyClass'
                        : 'LivingReadyClass',
                    },
                    on: { 'click-refresh': e.handleRefresh },
                  }),
                ]
                : e.isLoading
                  ? [
                    e.isLoading
                      ? t('Loading', { attrs: { 'margin-top': '300px' } })
                      : e._e(),
                  ]
                  : [
                    t(
                      'div',
                      { staticClass: 'ready-class-content-wrapper' },
                      [
                        t('Header', {
                          attrs: {
                            'back-url': e.backUrl,
                            showSignIn: e.showSignIn,
                            signStatus: e.sign.status,
                            startTime: e.startTime,
                            rightCoin: e.sign.rightCoin,
                          },
                        }),
                        t(
                          'div',
                          { staticClass: 'ready-class-content' },
                          [
                            t('AudioTest', {
                              staticClass: 'content-item',
                              attrs: {
                                'data-log': '测试音频',
                                hasMicrophone: e.hasMicrophone,
                              },
                              on: { getAudioStatus: e.getAudioStatus },
                            }),
                            t('VideoTest', {
                              staticClass: 'content-item',
                              attrs: {
                                hasCamera: e.hasCamera,
                                'data-log': '测试视频',
                              },
                              on: { getCameraStatus: e.getCameraStatus },
                            }),
                            t('TestInternetSpeed', {
                              staticClass: 'content-item',
                              attrs: {
                                'data-log': '测试网络',
                                speedStandard: e.speedStandard,
                              },
                              on: { getNetworkStatus: e.getNetworkStatus },
                            }),
                            !e.needModifyNickname || e.isParent || e.isAudition
                              ? e._e()
                              : t('SetNickName', {
                                staticClass: 'content-item',
                                attrs: {
                                  username: e.username,
                                  'data-log': '修改昵称',
                                },
                              }),
                          ],
                          1
                        ),
                        t(
                          'div',
                          { staticClass: 'footer' },
                          [
                            t('CoursewareDownloading', {
                              staticClass: 'content-item',
                              attrs: { coursewareInfo: e.courseware },
                              on: {
                                completeDownload: e.completeDownload,
                                backToPrev: function (t) {
                                  return e.backToPrev()
                                },
                                enterClass: function (t) {
                                  return e.enterClass()
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
            ],
            2
          )
        },
        l = [],
        d =
          (a('14d9'),
            a('a9e3'),
            function () {
              var e = this,
                t = e._self._c
              return t(
                'div',
                {
                  staticClass: 'courseware-downloading',
                  attrs: { 'data-log': '课件下载进度' },
                },
                [
                  e._m(0),
                  t(
                    'div',
                    { staticClass: 'courseware-downloading-status' },
                    [
                      'exists' == e.state || 'complete' == e.state
                        ? t('div', { staticClass: 'tips' }, [
                          e._v(
                            ' ' +
                            e._s(e.$t('prepareClass.coursewareDownload')) +
                            ' '
                          ),
                        ])
                        : 'progress' == e.state || 'start' == e.state
                          ? t('div', { staticClass: 'tips' }, [
                            e._v(' ' + e._s(e.downloadTip) + ' '),
                          ])
                          : t(
                            'div',
                            { staticClass: 'failed tips' },
                            [
                              t('a-icon', {
                                staticClass: 'icon-speed-status',
                                attrs: { component: e.IconFailed },
                              }),
                              e._v(
                                ' ' +
                                e._s(
                                  e.$t('prepareClass.coursewareDownloadWeek')
                                ) +
                                ' '
                              ),
                            ],
                            1
                          ),
                      t('a-progress', {
                        attrs: {
                          'stroke-color': {
                            '0%': '#ffd518',
                            '100%': '#ffaa0a',
                          },
                          showInfo: false,
                          strokeLinecap: e.square,
                          percent: e.percent,
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'div',
                    { staticClass: 'courseware-downloading-right' },
                    [
                      t(
                        'a-button',
                        {
                          staticClass: 'btn check-btn',
                          class: {
                            'is-waiting':
                              'exists' != e.state && 'complete' != e.state,
                          },
                          attrs: {
                            type: 'primary',
                            shape: 'round',
                            size: 'large',
                            loading: e.loading,
                            'data-log': e.$t('prepareClass.enterClassroom'),
                          },
                          on: { click: e.joinClass },
                        },
                        [
                          e._v(
                            ' ' + e._s(e.$t('prepareClass.enterClassroom')) + ' '
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  t('Model', {
                    attrs: {
                      dialogClass: 'ready-class-access download-fail',
                      isShowModal: e.showModal,
                      leftBtnText: e.$t('prepareClass.onlineCourseware'),
                      rightBtnText: e.$t('prepareClass.redownload'),
                      title: e.$t('prepareClass.coursewareDownloadWeekTitle'),
                      subTitle: e.$t(
                        'prepareClass.coursewareDownloadWeekContent'
                      ),
                      zIndex: 9999,
                      'data-log': '下载失败弹窗',
                    },
                    on: {
                      leftBtnOperation: e.onlineAccess,
                      rightBtnOperation: e.confirmAccess,
                    },
                  }),
                  t('Model', {
                    attrs: {
                      dialogClass: 'ready-class-access',
                      isShowModal: e.showOnlineModal,
                      leftBtnText: e.$t('common.cancel'),
                      rightBtnText: e.$t('prepareClass.confirmUser'),
                      title: e.$t('prepareClass.onlineCourseware'),
                      subTitle: e.$t('prepareClass.onlineCoursewareContent'),
                      zIndex: 9999,
                      'data-log': '课前准备页协议弹窗',
                    },
                    on: {
                      leftBtnOperation: e.onlineCancelAccess,
                      rightBtnOperation: e.onlineConfirmAccess,
                    },
                  }),
                ],
                1
              )
            }),
        u = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'courseware-downloading-left' }, [
              t('span', { staticClass: 'icon-courseware' }),
            ])
          },
        ],
        f = a('5530'),
        p = (a('ac1f'), a('5319'), a('24ba')),
        m = a.n(p),
        h = a('6e1f'),
        w = a.n(h),
        C = a('2103'),
        v = a('d0db'),
        g = a('340d'),
        b = a('e39c'),
        k = a('bc8a'),
        S = a('b047'),
        y = a.n(S),
        x = {
          props: {
            enterUrl: {
              type: String,
              default: '',
            },
            coursewareInfo: {
              default: function () { },
              type: Object,
            },
            isPlayBack: {
              type: Boolean,
              default: false,
            },
          },
          components: { Model: g.a },
          computed: {
            downloadTip: function () {
              var e = this
              return (
                console.info(
                  '对象函数 downloadTip,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                ),
                this.$t('prepareClass.coursewareDownloading', {
                  speed: this.speed,
                  minutes: (function () {
                    try {
                      var t =
                        Object(b.l)(e.receivedSize) +
                        Object(b.l)(e.commonCoursewareReceivedSize),
                        a =
                          Object(b.l)(e.totalSize) +
                          Object(b.l)(e.commonCoursewareTotalSize),
                        s = Math.max(
                          Object(b.n)(e.speed),
                          Object(b.n)(e.commonCoursewareSpeed)
                        )
                      if (
                        (0 !== a && (e.percent = (100 * t) / a),
                          (e.coursewareSensorData.size = 1024 * a),
                          0 == s)
                      ) {
                        return (
                          console.info(
                            'if(currentSpeed == 0)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                          ),
                          e.$t('prepareClass.coursewareDownloadingSlow')
                        )
                      }
                      var n = Math.ceil((a - t) / s)
                      return n < 60
                        ? (console.info(
                          'if(times < 60)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                        ),
                          n + e.$t('prepareClass.second'))
                        : n >= 60
                          ? (console.info(
                            'if(times >= 60)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                          ),
                            Math.floor(n / 60) +
                            e.$t('prepareClass.minute') +
                            (n % 60) +
                            e.$t('prepareClass.second'))
                          : (console.info(
                            'if(times >= 60)为false,触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                          ),
                            e.$t('prepareClass.coursewareDownloadingSlow'))
                    } catch (o) {
                      return (
                        console.error(
                          e.$t('prepareClass.coursewareDownloadingSlow'),
                          o
                        ),
                        e.$t('prepareClass.coursewareDownloadingSlow')
                      )
                    }
                  })(),
                })
              )
            },
          },
          data: function () {
            return {
              showModal: false,
              showOnlineModal: false,
              loading: false,
              isOnlineCourseware: false,
              percent: 0,
              receivedSize: '0M',
              speed: '0KB/S',
              totalSize: '0M',
              commonCoursewareReceivedSize: '0M',
              commonCoursewareSpeed: '0KB/S',
              commonCoursewareTotalSize: '0M',
              state: 'start',
              baseZipUrl: '',
              baseZipMd5: '',
              IconFailed: m.a,
              IconSuccess: w.a,
              isExistCourseware: false,
              catalog: '',
              downloading: false,
              isOffline: false,
              startTime: new Date().getTime(),
              clickNumber: 0,
              currentDownloadIndex: 0,
              needDownloadFileCount: 0,
              courseWarePackages: {},
              planId: null,
              coursewareSensorData: {
                exit: false,
                size: 0,
                startTime: new Date().getTime(),
                endTime: new Date().getTime(),
                courseEndTime: 0,
              },
            }
          },
          watch: {
            state: function (e) {
              ; ('complete' !== e && 'exists' !== e) ||
                ((this.coursewareSensorData.endTime = new Date().getTime()),
                  this.$emit('completeDownload', this.coursewareSensorData))
              'fail' === e && (this.showModal = true)
              'fail' != e || this.isOffline || this.sensorsTrack('fail')
            },
            clickNumber: function (e) {
              10 == e && ((this.showOnlineModal = true), (this.clickNumber = 0))
            },
            currentDownloadIndex: function (e) {
              e === this.needDownloadFileCount &&
                ((this.state = 'complete'),
                  (this.percent = 100),
                  this.sensorsTrack('success'))
            },
          },
          methods: {
            onlineAccess: function () {
              console.info(
                '对象函数 onlineAccess,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              this.showModal = false
              this.showOnlineModal = true
            },
            onlineConfirmAccess: function () {
              console.info(
                '对象函数 onlineConfirmAccess,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              this.showOnlineModal = false
              this.isOnlineCourseware = true
              this.joinClass()
            },
            onlineCancelAccess: function () {
              console.info(
                '对象函数 onlineCancelAccess,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              this.showOnlineModal = false
              this.clickNumber = 0
            },
            confirmAccess: function () {
              console.info(
                '对象函数 confirmAccess,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              this.showModal = false
              this.reloadCourseware()
            },
            getInfo: function () {
              console.info(
                '对象函数 getInfo,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              this.$Message.info(this.$t('prepareClass.waiting'))
            },
            reloadCourseware: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          console.info(
                            '对象函数 reloadCourseware,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                          ),
                            e.coursewareInfo &&
                            C.a.removeListener(e.coursewareInfo.baseZipUrl),
                            (e.currentDownloadIndex = 0),
                            (e.speed = '0KB/S'),
                            (e.commonCoursewareSpeed = '0KB/S'),
                            e.startDown()
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            getCommonCourseware: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getCommonCourseware,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                            ),
                            (t.next = 3),
                            Object(k.e)().catch(function (e) {
                              return (
                                console.info(
                                  '箭头函数 initConfigApi的catch(err)',
                                  e,
                                  'filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                                ),
                                v.a.send({
                                  tag: 'coursewareDownload',
                                  content: {
                                    msg: '获取基础包下载链接错误',
                                    err: e,
                                  },
                                }),
                                e || {}
                              )
                            })
                          )
                        case 3:
                          if (((a = t.sent), a && 0 == a.code)) {
                            t.next = 9
                            break
                          }
                          return (
                            console.info(
                              'if(!res || res.code != 0)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                            ),
                            (e.state = 'fail'),
                            v.a.send({
                              tag: 'coursewareDownload',
                              content: {
                                msg: '获取基础包下载链接错误,code不为0',
                                res: a,
                              },
                            }),
                            t.abrupt('return')
                          )
                        case 9:
                          ; (s = a.data || {}),
                            (e.courseWarePackages =
                              s.courseWarePackages &&
                                s.courseWarePackages.length
                                ? s.courseWarePackages[1]
                                : {}),
                            e.courseWarePackages,
                            e.courseWarePackages.url &&
                            (e.needDownloadFileCount += 1)
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            downloadCommonCourseware: function () {
              var e = this
              console.info(
                '对象函数 downloadCommonCourseware,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              C.a.downloadCourseware({
                fileURL: this.courseWarePackages.url,
                fileMD5: this.courseWarePackages.zipMd5,
                retry: 2,
                timeout: 10000,
                start: function (e) { },
                progress: function (t) {
                  e.commonCoursewareReceivedSize = t.receivedSize
                  e.commonCoursewareSpeed = t.speed.replace('NaN', '0')
                  e.commonCoursewareTotalSize = t.totalSize
                },
                complete: function (t) {
                  e.currentDownloadIndex++
                },
                fail: function (t) {
                  e.state = 'fail'
                },
                exists: function (t) {
                  e.currentDownloadIndex++
                },
              })
            },
            downloadCourseware: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 downloadCourseware,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                            ),
                              e.coursewareInfo)
                          ) {
                            t.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(!_this5.coursewareInfo)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                            ),
                            t.abrupt('return')
                          )
                        case 4:
                          return (
                            (t.next = 6),
                            C.a.downloadCourseware({
                              fileURL: e.coursewareInfo.baseZipUrl,
                              fileMD5: e.coursewareInfo.baseZipMd5,
                              retry: 2,
                              timeout: 10000,
                              start: function (e) { },
                              progress: function (t) {
                                e.receivedSize = t.receivedSize
                                e.speed = t.speed.replace('NaN', '0')
                                e.totalSize = t.totalSize
                              },
                              complete: function (t) {
                                e.currentDownloadIndex++
                                e.downLoadCallBack(t)
                              },
                              fail: function (t) {
                                e.state = 'fail'
                                e.downLoadCallBack(t)
                              },
                              exists: function (t) {
                                e.coursewareSensorData.exit = true
                                e.currentDownloadIndex++
                              },
                              extract: function (e) { },
                            })
                          )
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            downLoadCallBack: function (e) {
              console.info(
                '对象函数 downLoadCallBack(res)',
                e,
                'filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
              )
              var t = this.$route.query.planId,
                a = 'complete' == e.state ? 1 : 0,
                s = {
                  planId: t,
                  coursewareId: this.coursewareInfo.id,
                  url: this.coursewareInfo.baseZipUrl,
                  packageSize: this.coursewareInfo.baseZipSize,
                  downloadCost: parseInt(e.uptime / 1000),
                  packageMd5: this.coursewareInfo.baseZipMd5,
                  downloadPackageMd5: e.MD5 || '',
                }
              v.a.send({
                tag: '课前准备页',
                content: Object(f.a)(
                  Object(f.a)({}, s),
                  {},
                  {
                    msg: '课前课件下载',
                    isSuccess: a,
                  }
                ),
              })
              this.$sensors.track(
                'pc_courseware_download',
                Object(f.a)(
                  Object(f.a)({}, s),
                  {},
                  { statusDesc: a ? 'success' : 'fail' }
                )
              )
              this.$sensors.track('pc_ready_class_check', {
                checkType: '课件下载状态',
                result: a ? 'success' : 'fail',
              })
            },
            sensorsTrack: function (e) {
              this.$sensors.track('coursewareDownload', {
                planId: this.planId,
                downloadResult: e,
                plan_mode: '直播',
              })
            },
            testOfflineStatus: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          console.info(
                            '对象函数 testOfflineStatus,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                          ),
                            window.addEventListener('offline', function () {
                              console.info(
                                '箭头函数 监听 offline,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                              )
                              'complete' !== e.state &&
                                'exists' !== e.state &&
                                (e.state = 'fail')
                              e.isOffline = true
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
            testOnlineStatus: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          console.info(
                            '对象函数 testOnlineStatus,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                          ),
                            window.addEventListener('online', function () {
                              console.info(
                                '箭头函数 监听 online,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                              )
                              e.isOffline = false
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
            joinClass: y()(function () {
              var e = this.state,
                t = this.isOnlineCourseware,
                a = this.clickNumber,
                s = this.enterUrl
              return (
                v.a.send({
                  tag: 'action',
                  content: {
                    msg: '课前准备页-点击进入教室',
                    state: e,
                    isOnlineCourseware: t,
                    clickNumber: a,
                    enterUrl: s,
                  },
                }),
                'exists' === e || 'complete' === e || t
                  ? this.isOffline
                    ? (console.info(
                      'if(this.isOffline)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                    ),
                      void this.$Message.error({
                        content: this.$t('prepareClass.enterClassroomError'),
                        duration: 1,
                      }))
                    : ((this.loading = true),
                      this.$sensors.track('useCoursewareType', {
                        coursewareType: t ? 'online' : 'local',
                      }),
                      void this.$emit('enterClass'))
                  : (console.info(
                    "if(state !== 'exists' && state !== 'complete' && !isOnlineCourseware)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue"
                  ),
                    (this.clickNumber += 1),
                    void (10 != this.clickNumber && this.getInfo()))
              )
            }, 1100),
            startDown: function () {
              if (
                (console.info(
                  '对象函数 startDown,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                ),
                  (this.state = 'progress'),
                  0 === this.needDownloadFileCount)
              ) {
                return (
                  console.info(
                    'if(this.needDownloadFileCount === 0)为true触发return,path: /renderer/components/ReadyClass/CoursewareDownloading/index.vue'
                  ),
                  void (this.state = 'complete')
                )
              }
              this.downloadCourseware()
              this.downloadCommonCourseware()
            },
          },
          mounted: function () {
            var e = this
            this.planId = this.$route.query.planId
            this.$nextTick(
              Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            null !== (a = e.coursewareInfo) &&
                            void 0 !== a &&
                            a.baseZipUrl &&
                            ((e.needDownloadFileCount += 1),
                              (e.totalSize =
                                ((null === (s = e.coursewareInfo) ||
                                  void 0 === s
                                  ? void 0
                                  : s.baseZipSize) || 0) + 'B')),
                            (t.next = 3),
                            e.getCommonCourseware()
                          )
                        case 3:
                          e.startDown(),
                            e.testOfflineStatus(),
                            e.testOnlineStatus()
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )
            )
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/ReadyClass/CoursewareDownloading/index.vue'
            )
            this.coursewareInfo &&
              C.a.removeListener(this.coursewareInfo.baseZipUrl)
          },
        },
        _ = x,
        O = (a('9e2e'), a('2877')),
        I = Object(O.a)(_, d, u, false, null, '73140e45', null),
        T = I.exports,
        D = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'test-video' },
            [
              e._m(0),
              'testing' === e.cameraStatus
                ? [
                  t(
                    'div',
                    { staticClass: 'test-video-right' },
                    [
                      t('LottieEmoticon', {
                        attrs: {
                          lottieUrl: e.lottieUrl,
                          width: 18,
                          height: 18,
                          loopLottie: true,
                        },
                      }),
                    ],
                    1
                  ),
                ]
                : 'good' === e.cameraStatus && e.hasCamera
                  ? [
                    t(
                      'div',
                      { staticClass: 'test-video-right' },
                      [
                        t('p', { staticClass: 'item-title' }, [
                          e._v(e._s(e.$t('prepareClass.great'))),
                        ]),
                        t('a-icon', {
                          staticClass: 'icon-speed-status',
                          attrs: { component: e.iconSpeedStatus },
                        }),
                      ],
                      1
                    ),
                  ]
                  : [
                    e.hasCamera
                      ? t(
                        'div',
                        {
                          staticClass: 'test-video-right cursor',
                          on: { click: e.setCamera },
                        },
                        [
                          t('p', { staticClass: 'item-title' }, [
                            e._v(e._s(e.$t('prepareClass.cameraAccess'))),
                          ]),
                          t('a-icon', {
                            staticClass: 'icon-speed-status',
                            attrs: { component: e.iconSpeedStatus },
                          }),
                        ],
                        1
                      )
                      : t(
                        'div',
                        { staticClass: 'test-video-right' },
                        [
                          t('p', { staticClass: 'item-title' }, [
                            e._v(e._s(e.$t('prepareClass.cameraAvailable'))),
                          ]),
                          t('a-icon', {
                            staticClass: 'icon-speed-status',
                            attrs: { component: e.iconSpeedStatus },
                          }),
                        ],
                        1
                      ),
                  ],
              t('Model', {
                attrs: {
                  dialogClass: 'ready-class-access',
                  isShowModal: e.showModal,
                  leftBtnText: e.$t('common.cancel'),
                  rightBtnText: e.$t('classroom.modules.checkDevice.去设置'),
                  title: e.$t('prepareClass.cameraAccessWindow'),
                  subTitle: e.$t('prepareClass.cameraAccessContent'),
                  zIndex: 9999,
                },
                on: {
                  leftBtnOperation: e.cancelAccess,
                  rightBtnOperation: e.confirmAccess,
                },
              }),
            ],
            2
          )
        },
        P = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'test-video-left' }, [
              t('div', { staticClass: 'icon-item icon_audio' }),
            ])
          },
        ],
        j = a('099c'),
        N = a('0a4b'),
        M = a('9e65'),
        $ = a.n(M),
        R = a('3aa1'),
        A = {
          components: {
            LottieEmoticon: R.a,
            Model: g.a,
          },
          props: {
            hasCamera: {
              style: Boolean,
              default: true,
            },
          },
          data: function () {
            return {
              IconFailed: m.a,
              IconSuccess: w.a,
              IconNormal: $.a,
              showModal: false,
              cameraStatus: 'testing',
              lottieUrl: '/lottiefiles/readyClass/check_data.json',
              cameraAccess: '',
            }
          },
          computed: {
            iconSpeedStatus: function () {
              return (
                console.info(
                  '对象函数 iconSpeedStatus,filePath:renderer/components/ReadyClass/VideoTest/index.vue'
                ),
                'good' == this.cameraStatus && this.hasCamera
                  ? w.a
                  : 'weak' != this.cameraStatus && this.hasCamera
                    ? 'normal' == this.cameraStatus
                      ? $.a
                      : ''
                    : m.a
              )
            },
          },
          methods: {
            cancelAccess: function () {
              console.info(
                '对象函数 cancelAccess,filePath:renderer/components/ReadyClass/VideoTest/index.vue'
              )
              this.showModal = false
            },
            confirmAccess: function () {
              console.info(
                '对象函数 confirmAccess,filePath:renderer/components/ReadyClass/VideoTest/index.vue'
              )
              this.showModal = false
              N.nativeApi.openPreferences('security', 'camera')
            },
            setCamera: function () {
              console.info(
                '对象函数 setCamera,filePath:renderer/components/ReadyClass/VideoTest/index.vue'
              )
              this.showModal = true
            },
            checkCameraAccess: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 checkCameraAccess,filePath:renderer/components/ReadyClass/VideoTest/index.vue'
                            ),
                            (t.next = 3),
                            Object(j.b)()
                          )
                        case 3:
                          if (((a = t.sent), 'granted' !== a)) {
                            t.next = 8
                            break
                          }
                          ; (e.cameraStatus = 'good'), (t.next = 21)
                          break
                        case 8:
                          if ('not-determined' !== a) {
                            t.next = 20
                            break
                          }
                          if ('mac' !== e.platform) {
                            t.next = 15
                            break
                          }
                          return (t.next = 12), Object(j.a)()
                        case 12:
                          ; (t.t0 = t.sent), (t.next = 16)
                          break
                        case 15:
                          t.t0 = true
                        case 16:
                          ; (e.cameraAccess = t.t0),
                            e.cameraAccess
                              ? (e.cameraStatus = 'good')
                              : (e.cameraStatus = 'weak'),
                            (t.next = 21)
                          break
                        case 20:
                          e.cameraStatus = 'weak'
                        case 21:
                          e.$emit('getCameraStatus', e.cameraStatus)
                        case 22:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
          },
          mounted: function () {
            var e = this
            return Object(r.a)(
              Object(o.a)().mark(function t() {
                return Object(o.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        ; (e.platform = Object(b.k)()), e.checkCameraAccess()
                      case 2:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/ReadyClass/VideoTest/index.vue'
            )
          },
        },
        B = A,
        L = (a('e71a'), Object(O.a)(B, D, P, false, null, '23063c1c', null)),
        z = L.exports,
        U = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'test-audio' },
            [
              e._m(0),
              'testing' === e.audioStatus
                ? [
                  t(
                    'div',
                    { staticClass: 'test-audio-right' },
                    [
                      t('LottieEmoticon', {
                        attrs: {
                          lottieUrl: e.lottieUrl,
                          width: 18,
                          height: 18,
                          loopLottie: true,
                        },
                      }),
                    ],
                    1
                  ),
                ]
                : 'good' === e.audioStatus && e.hasMicrophone
                  ? [
                    t(
                      'div',
                      { staticClass: 'test-audio-right' },
                      [
                        t('p', { staticClass: 'item-title' }, [
                          e._v(e._s(e.$t('prepareClass.great'))),
                        ]),
                        t('a-icon', {
                          staticClass: 'icon-speed-status',
                          attrs: { component: e.iconSpeedStatus },
                        }),
                      ],
                      1
                    ),
                  ]
                  : [
                    e.hasMicrophone
                      ? t(
                        'div',
                        {
                          staticClass: 'test-audio-right cursor',
                          on: { click: e.setAudio },
                        },
                        [
                          t('p', { staticClass: 'item-title' }, [
                            e._v(e._s(e.$t('prepareClass.audioAccess'))),
                          ]),
                          t('a-icon', {
                            staticClass: 'icon-speed-status',
                            attrs: { component: e.iconSpeedStatus },
                          }),
                        ],
                        1
                      )
                      : t(
                        'div',
                        { staticClass: 'test-audio-right' },
                        [
                          t('p', { staticClass: 'item-title' }, [
                            e._v(e._s(e.$t('prepareClass.audioAvailable'))),
                          ]),
                          t('a-icon', {
                            staticClass: 'icon-speed-status',
                            attrs: { component: e.iconSpeedStatus },
                          }),
                        ],
                        1
                      ),
                  ],
              t('Model', {
                attrs: {
                  dialogClass: 'ready-class-access',
                  isShowModal: e.showModal,
                  leftBtnText: e.$t('common.cancel'),
                  rightBtnText: e.$t('classroom.modules.checkDevice.去设置'),
                  title: e.$t('prepareClass.audioAccessWindow'),
                  subTitle: e.$t('prepareClass.audioAccessContent'),
                  zIndex: 9999,
                },
                on: {
                  leftBtnOperation: e.cancelAccess,
                  rightBtnOperation: e.confirmAccess,
                },
              }),
            ],
            2
          )
        },
        E = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'test-audio-left' }, [
              t('div', { staticClass: 'icon-item icon_audio' }),
            ])
          },
        ],
        F = {
          components: {
            LottieEmoticon: R.a,
            Model: g.a,
          },
          props: {
            hasMicrophone: {
              style: Boolean,
              default: true,
            },
          },
          data: function () {
            return {
              IconFailed: m.a,
              IconSuccess: w.a,
              IconNormal: $.a,
              showModal: false,
              audioStatus: 'testing',
              lottieUrl: '/lottiefiles/readyClass/check_data.json',
              microphoneAccess: '',
            }
          },
          computed: {
            iconSpeedStatus: function () {
              return (
                console.info(
                  '对象函数 iconSpeedStatus,filePath:renderer/components/ReadyClass/AudioTest/index.vue'
                ),
                'good' == this.audioStatus && this.hasMicrophone
                  ? w.a
                  : 'weak' != this.audioStatus && this.hasMicrophone
                    ? 'normal' == this.audioStatus
                      ? $.a
                      : ''
                    : m.a
              )
            },
          },
          methods: {
            cancelAccess: function () {
              console.info(
                '对象函数 cancelAccess,filePath:renderer/components/ReadyClass/AudioTest/index.vue'
              )
              this.showModal = false
            },
            confirmAccess: function () {
              console.info(
                '对象函数 confirmAccess,filePath:renderer/components/ReadyClass/AudioTest/index.vue'
              )
              this.showModal = false
              N.nativeApi.openPreferences('security', 'microphone')
            },
            setAudio: function () {
              console.info(
                '对象函数 setAudio,filePath:renderer/components/ReadyClass/AudioTest/index.vue'
              )
              this.showModal = true
            },
            checkMicrophoneAccess: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 checkMicrophoneAccess,filePath:renderer/components/ReadyClass/AudioTest/index.vue'
                            ),
                            (t.next = 3),
                            Object(j.e)()
                          )
                        case 3:
                          if (((a = t.sent), 'granted' !== a)) {
                            t.next = 8
                            break
                          }
                          ; (e.audioStatus = 'good'), (t.next = 21)
                          break
                        case 8:
                          if ('not-determined' !== a) {
                            t.next = 20
                            break
                          }
                          if ('mac' !== e.platform) {
                            t.next = 15
                            break
                          }
                          return (t.next = 12), Object(j.d)()
                        case 12:
                          ; (t.t0 = t.sent), (t.next = 16)
                          break
                        case 15:
                          t.t0 = true
                        case 16:
                          ; (e.microphoneAccess = t.t0),
                            e.microphoneAccess
                              ? (e.audioStatus = 'good')
                              : (e.audioStatus = 'weak'),
                            (t.next = 21)
                          break
                        case 20:
                          e.audioStatus = 'weak'
                        case 21:
                          e.$emit('getAudioStatus', e.audioStatus)
                        case 22:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
          },
          mounted: function () {
            this.platform = Object(b.k)()
            this.checkMicrophoneAccess()
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/ReadyClass/AudioTest/index.vue'
            )
          },
        },
        W = F,
        q = (a('51e97'), Object(O.a)(W, U, E, false, null, '710187aa', null)),
        V = q.exports,
        Z = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            {
              staticClass: 'test-internet',
              attrs: { 'data-log': '测试网络' },
            },
            [
              e._m(0),
              t(
                'div',
                { staticClass: 'test-internet-right' },
                [
                  t('div', { staticClass: 'item-text' }, [
                    'good' === e.rtcStatus || 'testing' === e.rtcStatus
                      ? t('p', { staticClass: 'item-title' })
                      : t('p', { staticClass: 'item-title' }, [
                        e._v(e._s(e.$t('prepareClass.networkWeek'))),
                      ]),
                  ]),
                  'testing' === e.rtcStatus
                    ? [
                      t(
                        'div',
                        { staticClass: 'test-internet-right' },
                        [
                          t('LottieEmoticon', {
                            attrs: {
                              lottieUrl: e.lottieUrl,
                              width: 18,
                              height: 18,
                              loopLottie: true,
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                    : 'good' === e.rtcStatus
                      ? [
                        t(
                          'div',
                          {
                            staticClass: 'test-internet-right cursor',
                            on: { click: e.getInfo },
                          },
                          [
                            t('p', { staticClass: 'item-title' }, [
                              e._v(e._s(e.$t('prepareClass.great'))),
                            ]),
                            t('a-icon', {
                              staticClass: 'icon-speed-status',
                              attrs: { component: e.iconSpeedStatus },
                            }),
                          ],
                          1
                        ),
                      ]
                      : [
                        t(
                          'div',
                          {
                            staticClass: 'test-internet-right cursor',
                            on: { click: e.setNetwork },
                          },
                          [
                            t('a-icon', {
                              staticClass: 'icon-speed-status',
                              attrs: { component: e.iconSpeedStatus },
                            }),
                          ],
                          1
                        ),
                      ],
                ],
                2
              ),
              t('Model', {
                attrs: {
                  dialogClass: 'ready-class-access',
                  isShowModal: e.showModal,
                  leftBtnText: e.$t('prepareClass.retestNetwork'),
                  rightBtnText: e.$t('common.gotIt'),
                  title: e.$t('prepareClass.networkWeek'),
                  subTitle: e.$t('prepareClass.networkWeekContent'),
                  zIndex: 9999,
                  'data-log': '测速弹窗',
                },
                on: {
                  leftBtnOperation: e.confirmAccess,
                  rightBtnOperation: e.cancelAccess,
                },
              }),
              t('Model', {
                attrs: {
                  dialogClass: 'ready-class-access got-info',
                  isShowModal: e.showGoodModal,
                  rightBtnText: e.$t('common.gotIt'),
                  title: e.$t('prepareClass.networkGood'),
                  subTitle: e.$t('prepareClass.networkGoodContent'),
                  zIndex: 9999,
                  'data-log': '测速网络良好弹窗',
                },
                on: { rightBtnOperation: e.cancelAccessNetwork },
              }),
            ],
            1
          )
        },
        G = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'test-internet-left' }, [
              t('div', { staticClass: 'icon-item icon_audio' }),
            ])
          },
        ],
        H = a('5880'),
        J = a('d15d'),
        K = a('383d'),
        Q = {
          components: {
            LottieEmoticon: R.a,
            Model: g.a,
          },
          data: function () {
            return {
              IconFailed: m.a,
              IconSuccess: w.a,
              IconNormal: $.a,
              showModal: false,
              showGoodModal: false,
              rtcStatus: 'testing',
              rtcToken: null,
              thinkClass: null,
              reservedTimer: null,
              reservedTime: 15000,
              lottieUrl: '/lottiefiles/readyClass/check_data.json',
            }
          },
          props: {
            speedStandard: {
              default: function () { },
              type: Object,
            },
          },
          computed: Object(f.a)(
            Object(f.a)(
              {},
              Object(H.mapGetters)({
                deviceCheckData: 'common/deviceCheckData',
              })
            ),
            {},
            {
              iconSpeedStatus: function () {
                return (
                  console.info(
                    '对象函数 iconSpeedStatus,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                  ),
                  'good' == this.rtcStatus
                    ? w.a
                    : 'weak' == this.rtcStatus
                      ? m.a
                      : 'normal' == this.rtcStatus
                        ? $.a
                        : ''
                )
              },
              statusConfig: function () {
                return (
                  console.info(
                    '对象函数 statusConfig,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                  ),
                  this.$t('classroom.modules.networkStatus.statusMap')
                )
              },
            }
          ),
          methods: {
            cancelAccessNetwork: function () {
              console.info(
                '对象函数 cancelAccessNetwork,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
              )
              this.showGoodModal = false
            },
            cancelAccess: function () {
              console.info(
                '对象函数 cancelAccess,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
              )
              this.showModal = false
            },
            getInfo: function () {
              console.info(
                '对象函数 getInfo,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
              )
              this.showGoodModal = true
            },
            setNetwork: function () {
              console.info(
                '对象函数 setNetwork,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
              )
              this.showModal = true
            },
            confirmAccess: function () {
              console.info(
                '对象函数 confirmAccess,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
              )
              this.showModal = false
              this.thinkClass &&
                (this.thinkClass.release(), (this.thinkClass = null))
              this.rtcTestSpeed()
            },
            getDeviceCheckData: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getDeviceCheckData,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                            ),
                            (t.next = 3),
                            Object(K.d)()
                          )
                        case 3:
                          if (
                            ((a = t.sent),
                              0 !==
                              (null === a || void 0 === a ? void 0 : a.code))
                          ) {
                            t.next = 7
                            break
                          }
                          return (
                            console.info(
                              'if(res?.code === 0)为true触发return,path: /renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                            ),
                            t.abrupt(
                              'return',
                              (e.rtcToken =
                                null === a ||
                                  void 0 === a ||
                                  null === (s = a.data) ||
                                  void 0 === s
                                  ? void 0
                                  : s.rtcToken)
                            )
                          )
                        case 7:
                          e.$Modal.warning({
                            centered: true,
                            class: 'modal-simple modal-service-data',
                            content: e.$t(
                              'common.components.errorStatus.message'
                            ),
                            width: '380px',
                            okText: e.$t('common.gotIt'),
                          })
                        case 8:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            rtcTestSpeed: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s, n
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 rtcTestSpeed,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                            ),
                              (e.rtcToken =
                                (null === (a = e.speedStandard) || void 0 === a
                                  ? void 0
                                  : a.rtcToken) ||
                                (null === (s = e.deviceCheckData) || void 0 === s
                                  ? void 0
                                  : s.rtcToken)),
                              e.rtcToken)
                          ) {
                            t.next = 5
                            break
                          }
                          return (t.next = 5), e.getDeviceCheckData()
                        case 5:
                          ; (n = new J.a({
                            rtcConfig: {
                              token: e.rtcToken,
                              teacherUid: parseInt(
                                10000 * Math.random() + 1,
                                10
                              ),
                            },
                          })),
                            (e.thinkClass = n),
                            n.on('ready', function () {
                              console.info(
                                '箭头函数 监听 ready,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                              )
                              n.enableLastmileTest()
                            }),
                            n.on('lastMileQuality', function (t) {
                              var a = t
                              e.rtcStatus =
                                1 === a || 2 === a || 3 === a
                                  ? 'good'
                                  : 4 === a || 5 === a || 6 === a
                                    ? 'weak'
                                    : 'testing'
                              e.$emit('getNetworkStatus', e.rtcStatus)
                              'good' !== e.rtcStatus &&
                                v.a.send({
                                  tag: 'userRtcQuality',
                                  content: { result: e.rtcStatus },
                                })
                            }),
                            n.on('localVideoStateChanged', function (t, a) {
                              console.info(
                                '箭头函数 监听 localVideoStateChanged(state, err)',
                                t,
                                a,
                                'filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                              )
                                ; (6 != a && 7 != a) ||
                                  e.$bus.$emit('setMediaStateEvent', {
                                    key: 'hasCamera',
                                    value: false,
                                  })
                            }),
                            n.on('localAudioStateChanged', function (t, a) {
                              console.info(
                                '箭头函数 监听 localAudioStateChanged(state, err)',
                                t,
                                a,
                                'filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
                              )
                                ; (6 != a && 7 != a) ||
                                  e.$bus.$emit('setMediaStateEvent', {
                                    key: 'hasMicrophone',
                                    value: false,
                                  })
                            })
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
          },
          mounted: function () {
            this.rtcTestSpeed()
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/ReadyClass/TestInternetSpeed/index.vue'
            )
            this.thinkClass &&
              (this.thinkClass.release(), (this.thinkClass = null))
          },
        },
        X = Q,
        Y = (a('a054'), Object(O.a)(X, Z, G, false, null, '2d32ab08', null)),
        ee = Y.exports,
        te = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'set-nickname' },
            [
              t('div', { staticClass: 'set-nickname-left' }, [
                t('div', {
                  staticClass: 'icon-item icon-avatar',
                  style: {
                    backgroundImage: 'url('.concat(e.avatarUrl, ')'),
                    backgroundSize: '100% 100%',
                  },
                }),
              ]),
              t(
                'div',
                {
                  staticClass: 'set-nickname-right',
                  on: { click: e.setNickname },
                },
                [
                  e.newName
                    ? t('p', { staticClass: 'item-title new-name' }, [
                      e._v(e._s(e.newName)),
                    ])
                    : t('p', { staticClass: 'item-title' }, [
                      e._v(e._s(e.$t('prepareClass.setNickName'))),
                    ]),
                  t('a-icon', {
                    staticClass: 'icon-status',
                    attrs: { component: e.iconStatus },
                  }),
                ],
                1
              ),
              t(
                'Model',
                {
                  attrs: {
                    dialogClass: 'ready-class-access',
                    isShowModal: e.showModal,
                    leftBtnText: e.$t('common.cancel'),
                    rightBtnText: e.$t('common.confirm'),
                    title: e.$t('prepareClass.setNickName'),
                    zIndex: 9,
                    disabled: e.isDisable,
                    rightLoading: e.isLoading,
                  },
                  on: {
                    leftBtnOperation: e.cancelAccess,
                    rightBtnOperation: e.save,
                  },
                },
                [
                  t(
                    'a-form-model',
                    {
                      ref: 'nickNameForm',
                      attrs: {
                        model: e.formData,
                        rules: e.rules,
                        colon: false,
                      },
                    },
                    [
                      t(
                        'a-form-model-item',
                        { attrs: { prop: 'nickName' } },
                        [
                          t('a-input', {
                            attrs: {
                              maxlength: 10,
                              allowClear: '',
                            },
                            on: { change: e.validateNickName },
                            model: {
                              value: e.formData.nickName,
                              callback: function (t) {
                                e.$set(e.formData, 'nickName', t)
                              },
                              expression: 'formData.nickName',
                            },
                          }),
                          e.isDisable
                            ? t('a-icon', {
                              staticClass: 'icon-warning-edit',
                              attrs: { component: e.iconWarningEdit },
                            })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t('p', { staticClass: 'tips' }, [
                    e._v(e._s(e.$t('prepareClass.setNickNameTip'))),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        ae = [],
        se = (a('498a2'), a('fb6a'), a('ae3f')),
        ne = a('92e5'),
        oe = {
          components: { Model: g.a },
          props: {
            username: {
              type: String,
              default: '',
            },
          },
          data: function () {
            return {
              formData: { nickName: '' },
              isDisable: true,
              isLoading: false,
              initName: '',
              preName: '',
              newName: '',
              avatarUrl: '',
              rules: {
                nickName: [
                  {
                    pattern: /^[a-zA-Z0-9\s\u4e00-\u9fa5]{0,16}$/,
                    message: this.$t('prepareClass.validateInput'),
                    trigger: 'change',
                  },
                ],
              },
              showModal: false,
              hasSubmit: false,
            }
          },
          computed: {
            iconStatus: function () {
              return (
                console.info(
                  '对象函数 iconStatus,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
                ),
                this.hasSubmit ? w.a : m.a
              )
            },
          },
          methods: {
            getLocalUserInfo: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s, n
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getLocalUserInfo,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
                            ),
                            (t.next = 3),
                            Object(ne.a)()
                          )
                        case 3:
                          ; (a = t.sent),
                            (s = a.nickName),
                            (n = a.avatar),
                            (e.initName = s),
                            (e.avatarUrl = n)
                        case 8:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            validateNickName: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          console.info(
                            '对象函数 validateNickName,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
                          ),
                            e.$refs.nickNameForm.validate(function (t) {
                              console.info(
                                '箭头函数 validate(valid)',
                                t,
                                'filePath:renderer/components/ReadyClass/SetNickName/index.vue'
                              )
                              e.isDisable = !t
                              '' == e.formData.nickName.trim() &&
                                (e.isDisable = true)
                              t
                                ? (e.preName = e.formData.nickName)
                                : e.formData.nickName &&
                                ((e.formData.nickName = e.preName),
                                  '' !== e.preName.trim() &&
                                  (e.isDisable = false))
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
            save: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 save,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
                            ),
                              (a = e.formData.nickName.trim()),
                              a != e.initName)
                          ) {
                            t.next = 5
                            break
                          }
                          return (
                            console.info(
                              'if(newName == _this3.initName)为true触发return,path: /renderer/components/ReadyClass/SetNickName/index.vue'
                            ),
                            t.abrupt('return')
                          )
                        case 5:
                          return (
                            (e.isLoading = true),
                            (t.next = 8),
                            Object(se.f)({ nickName: a }).catch(function (e) {
                              return (
                                console.info(
                                  '箭头函数 modifyUserInfoApi的catch(err)',
                                  e,
                                  'filePath:renderer/components/ReadyClass/SetNickName/index.vue'
                                ),
                                console.error('修改昵称接口报错', e),
                                e
                              )
                            })
                          )
                        case 8:
                          if (((s = t.sent), 0 === +s.code)) {
                            t.next = 14
                            break
                          }
                          return (
                            console.info(
                              'if(+res.code !== 0)为true触发return,path: /renderer/components/ReadyClass/SetNickName/index.vue'
                            ),
                            e.$Message.error({
                              content: e.$t('prepareClass.setNickNameError'),
                              duration: 3,
                            }),
                            (e.isLoading = false),
                            t.abrupt('return')
                          )
                        case 14:
                          ; (e.hasSubmit = true),
                            (e.newName = a),
                            e.$Message.config({
                              getContainer: function () {
                                return document.getElementById('ready-class')
                              },
                              top: '300px',
                            }),
                            (e.isLoading = false),
                            (e.initName = a),
                            (e.formData.nickName = a),
                            (e.showModal = false)
                        case 21:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            cancelAccess: function () {
              console.info(
                '对象函数 cancelAccess,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
              )
              this.newName && (this.formData.nickName = this.newName)
              this.validateNickName()
              this.showModal = false
            },
            setNickname: function () {
              console.info(
                '对象函数 setNickname,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
              )
              this.showModal = true
            },
          },
          mounted: function () {
            this.getLocalUserInfo()
            this.username &&
              ((this.formData.nickName = this.username.slice(0, 16)),
                (this.isDisable = false))
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/ReadyClass/SetNickName/index.vue'
            )
          },
        },
        re = oe,
        ie =
          (a('6e22'), Object(O.a)(re, te, ae, false, null, '4f86ffda', null)),
        ce = ie.exports,
        le = a('aaf0'),
        de = a('5e24'),
        ue = a('bd12'),
        fe = a('e79d'),
        pe = a('0a06a'),
        me = a('2b6b'),
        he = {
          components: {
            Loading: ue.a,
            Header: fe.a,
            CoursewareDownloading: T,
            AudioTest: V,
            VideoTest: z,
            TestInternetSpeed: ee,
            SetNickName: ce,
            ErrorStatus: le.a,
          },
          props: ['enterUrl', 'playback'],
          data: function () {
            return {
              isAudition: false,
              isParent: false,
              needModifyNickname: false,
              changeMinutes: 0,
              isLoading: true,
              speedStandard: {},
              isCompleteDownload: false,
              isError: false,
              audioStatus: 0,
              cameraStatus: 0,
              networkStatus: 0,
              networkStatusDesc: '',
              backUrl: this.$route.query.backUrl || '/courses',
              courseware: {},
              sign: {},
              hasCamera: true,
              hasMicrophone: true,
              username: '',
              startTime: 0,
              coursewareInfo: {},
            }
          },
          computed: {
            showSignIn: function () {
              return (
                console.info(
                  '对象函数 showSignIn,filePath:renderer/components/ReadyClass/index.vue'
                ),
                !this.isAudition && !this.isParent && 1 === this.sign.status
              )
            },
          },
          methods: {
            enterClass: function () {
              var e,
                t,
                a,
                s,
                n,
                o = this
              console.info(
                '对象函数 enterClass,filePath:renderer/components/ReadyClass/index.vue'
              )
              this.$sensors.track('pc_ready_class_enter', {
                type: 'liveClass',
                isCompleteDownload: this.isCompleteDownload,
                networkStatus: this.networkStatusDesc,
              })
              var r = {
                micDetecting: this.audioStatus,
                camDetecting: this.cameraStatus,
                netDetecting: this.networkStatus,
              }
              this.$sensors.track('Stu_PreparePageDetecting', r)
              Object(me.setPlanId)(
                null === (e = this.$route) || void 0 === e ? void 0 : e.query,
                true
              )
              pe.d(
                null === (t = this.$route) || void 0 === t ? void 0 : t.query,
                r,
                this.coursewareInfo,
                null === (a = this.$store) ||
                  void 0 === a ||
                  null === (s = a.state) ||
                  void 0 === s ||
                  null === (n = s.common) ||
                  void 0 === n
                  ? void 0
                  : n.timeOffset
              )
              setTimeout(function () {
                var e,
                  t = o.enterUrl
                if (null !== (e = o.courseware) && void 0 !== e && e.id) {
                  var a = o.$route.query,
                    s = a.classId,
                    n = a.planId,
                    r = a.bizId,
                    i = a.lessonType,
                    c = a.from,
                    l = a.subPlatformType,
                    d = void 0 === l ? 0 : l,
                    u = a.isParent,
                    f = void 0 === u ? 0 : u,
                    p = a.backUrl
                  o.$route.query
                  var m = 'classId='
                    .concat(s, '&planId=')
                    .concat(n, '&bizId=')
                    .concat(r, '&subPlatformType=')
                    .concat(d, '&isParent=')
                    .concat(f, '&lessonType=')
                    .concat(i, '&from=')
                    .concat(c, '&coursewareId=')
                    .concat(o.courseware.id, '&backUrl=')
                    .concat(p),
                    w = h[d] || 'largeClass.html'
                  t = '/'.concat(w, '?').concat(m)
                }
                window.location.href = t
                v.a.send({
                  tag: 'userTrack',
                  content: {
                    msg: '课前准备页-点击进入课堂',
                    url: t,
                  },
                })
              }, 200)
            },
            backToPrev: function () {
              console.info(
                '对象函数 backToPrev,filePath:renderer/components/ReadyClass/index.vue'
              )
              this.$router.push({ path: '/courses' })
              v.a.send({
                tag: 'userTrack',
                content: { msg: '退出课前准备页' },
              })
            },
            getAudioStatus: function (e) {
              console.info(
                '对象函数 getAudioStatus(status)',
                e,
                'filePath:renderer/components/ReadyClass/index.vue'
              )
              this.audioStatus = 'good' === e && this.hasMicrophone ? 0 : 1
            },
            getCameraStatus: function (e) {
              console.info(
                '对象函数 getCameraStatus(status)',
                e,
                'filePath:renderer/components/ReadyClass/index.vue'
              )
              this.cameraStatus = 'good' === e && this.hasCamera ? 0 : 1
            },
            getNetworkStatus: function (e) {
              this.networkStatus = 'good' === e ? 0 : 'weak' === e ? 1 : 2
              this.networkStatusDesc = e
            },
            handleRefresh: function () {
              console.info(
                '对象函数 handleRefresh,filePath:renderer/components/ReadyClass/index.vue'
              )
              this.isError = false
              this.queryPreClassPrepare()
            },
            completeDownload: function (e) {
              console.info(
                '对象函数 completeDownload(coursewareInfo)',
                e,
                'filePath:renderer/components/ReadyClass/index.vue'
              )
              this.coursewareInfo = e
              this.coursewareInfo.courseStartTime = this.startTime
              this.isCompleteDownload = true
            },
            queryPreClassPrepare: function () {
              var e = this
              return Object(r.a)(
                Object(o.a)().mark(function t() {
                  var a, s, n, r, i, c, l, d, u, f, p, m, h
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 queryPreClassPrepare,filePath:renderer/components/ReadyClass/index.vue'
                            ),
                            (s = e.$route.query),
                            (n = s.planId),
                            (r = s.classId),
                            (e.isLoading = true),
                            (t.next = 5),
                            Object(de.a)(e, {
                              planId: 1 * n,
                              classId: 1 * r,
                            }).catch(function (t) {
                              return (
                                console.info(
                                  '箭头函数 _queryPreClassPrepare的catch(err)',
                                  t,
                                  'filePath:renderer/components/ReadyClass/index.vue'
                                ),
                                console.error(
                                  '课前准备基础数据请求接口报错',
                                  t
                                ),
                                (e.isError = true),
                                t || {}
                              )
                            })
                          )
                        case 5:
                          if (
                            ((i = t.sent),
                              (e.isLoading = false),
                              0 == (null === i || void 0 === i ? void 0 : i.code))
                          ) {
                            t.next = 12
                            break
                          }
                          return (
                            console.info(
                              'if(res?.code != 0)为true触发return,path: /renderer/components/ReadyClass/index.vue'
                            ),
                            console.error(
                              '课前准备基础数据请求接口code不等于0',
                              i
                            ),
                            (e.isError = true),
                            t.abrupt('return')
                          )
                        case 12:
                          ; (c = i.data),
                            (l = c.deviceDetection),
                            (d = c.sign),
                            (u = c.courseware),
                            (f = c.needModifyNickname),
                            (p = c.timestamp),
                            (m = c.username),
                            (h = c.startTime),
                            (e.needModifyNickname = f),
                            (e.username = m || ''),
                            (e.speedStandard = l),
                            (e.startTime = h),
                            (e.sign = d),
                            (e.courseware = u),
                            Object(me.setTimeOffset)(
                              1000 * p - new Date().getTime()
                            ),
                            e.$store.dispatch('common/setTimeOffset', p),
                            e.$route.query,
                            e.enterUrl,
                            e.enterUrl,
                            '&coursewareId='.concat(
                              null === (a = e.courseware) || void 0 === a
                                ? void 0
                                : a.id
                            )
                        case 22:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            setMediaState: function (e) {
              console.info(
                '对象函数 setMediaState(data)',
                e,
                'filePath:renderer/components/ReadyClass/index.vue'
              )
              this[e.key] = e.value
            },
          },
          created: function () {
            var e = this.$route.query,
              t = e.isAudition,
              a = e.isParent
            this.isAudition = !!Number(t)
            this.isParent = !!Number(a)
          },
          mounted: function () {
            var e = this
            return Object(r.a)(
              Object(o.a)().mark(function t() {
                return Object(o.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          v.a.send({
                            tag: 'userTrack',
                            content: { msg: '进入课前准备页' },
                          }),
                          (t.next = 3),
                          e.queryPreClassPrepare()
                        )
                      case 3:
                        e.$bus.$on('setMediaStateEvent', e.setMediaState)
                      case 4:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          unmounted: function () {
            console.info(
              '对象函数 unmounted,filePath:renderer/components/ReadyClass/index.vue'
            )
            this.$bus.$off('setMediaStateEvent', this.setMediaState)
          },
        },
        we = he,
        Ce = (a('d44c'), Object(O.a)(we, c, l, false, null, null, null)),
        ve = Ce.exports,
        ge = {
          components: {
            Toolbar: i.a,
            ReadyClass: ve,
          },
          data: function () {
            return {
              enterUrl: '',
              isPlayBack: 0,
            }
          },
          beforeRouteEnter: function (e, t, a) {
            return Object(r.a)(
              Object(o.a)().mark(function s() {
                var n, r, i, c, l, d, u, f, p, m, h, w, C, v, g, b, k, S
                return Object(o.a)().wrap(function (s) {
                  while (1) {
                    switch ((s.prev = s.next)) {
                      case 0:
                        ; (n = e.query),
                          (r = n.classId),
                          (i = n.planId),
                          (c = n.bizId),
                          (l = n.lessonType),
                          (d = n.from),
                          (u = n.subPlatformType),
                          (f = void 0 === u ? 0 : u),
                          (p = n.playback),
                          (m = void 0 === p ? 0 : p),
                          (h = n.isParent),
                          (w = void 0 === h ? 0 : h),
                          (C = n.backUrl),
                          (v = m),
                          (g = 'classId='
                            .concat(r, '&planId=')
                            .concat(i, '&bizId=')
                            .concat(c, '&subPlatformType=')
                            .concat(f, '&isParent=')
                            .concat(w, '&lessonType=')
                            .concat(l, '&from=')
                            .concat(d, '&backUrl=')
                            .concat(C)),
                          (b = {
                            0: 'largeClass.html',
                            1: 'largeClass.html',
                            2: 'smallClass.html',
                          }),
                          (k = b[f] || 'largeClass.html'),
                          (S = '/'.concat(k, '?').concat(g)),
                          console.info('路由跳转', e.fullPath, t.fullPath, S),
                          a(function (e) {
                            e.isPlayBack = v
                            e.enterUrl = S
                          })
                      case 8:
                      case 'end':
                        return s.stop()
                    }
                  }
                }, s)
              })
            )()
          },
        },
        be = ge,
        ke = (a('a14d'), Object(O.a)(be, s, n, false, null, null, null))
      t.default = ke.exports
    },
    '5e24': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      var s = a('c7eb'),
        n = a('1da1'),
        o = a('dc21'),
        r = a('e39c'),
        i = (function () {
          var e = Object(n.a)(
            Object(s.a)().mark(function e(t, a, n) {
              var i, c, l
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = Object(r.h)()),
                        (c = i.oversea),
                        (e.next = 3),
                        Object(o.a)({
                          url: a,
                          params: n,
                          apiDomain: c,
                        })
                      )
                    case 3:
                      return (l = e.sent), e.abrupt('return', l)
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
        })()
      function c(e, t) {
        return i(e, '/api/hub/classroom/student/preClassPrepare', t)
      }
    },
    '6e1f': function (e, t) {
      e.exports = {
        functional: true,
        render(e, t) {
          const { _c: a, _v: s, data: n, children: o = [] } = t,
            {
              class: r,
              staticClass: i,
              style: c,
              staticStyle: l,
              attrs: d = {},
              ...u
            } = n
          return a(
            'svg',
            {
              class: [r, i],
              style: [c, l],
              attrs: Object.assign(
                {
                  width: '18',
                  height: '18',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                d
              ),
              ...u,
            },
            o.concat([
              a('path', {
                attrs: {
                  d: 'M9 0a9 9 0 109 9 9 9 0 00-9-9zm4.314 6.62l-5.197 5.727a.714.714 0 01-1.125-.062L4.635 9.034a.714.714 0 01.113-.968l.208-.191a.714.714 0 01.984.05l1.519 1.581a.197.197 0 00.27 0l4.595-3.937a.714.714 0 01.996 1.024l-.006.028z',
                  fill: '#02CA8A',
                  'fill-rule': 'nonzero',
                },
              }),
            ])
          )
        },
      }
    },
    '6e22': function (e, t, a) {
      'use strict'
      a('374d')
    },
    '90d7': function (e, t, a) { },
    9991: function (e, t, a) { },
    '9c38': function (e, t, a) {
      'use strict'
      a('90d7')
    },
    '9d48': function (e, t, a) {
      'use strict'
      a('9991')
    },
    '9e2e': function (e, t, a) {
      'use strict'
      a('f96fc')
    },
    '9e65': function (e, t) {
      e.exports = {
        functional: true,
        render(e, t) {
          const { _c: a, _v: s, data: n, children: o = [] } = t,
            {
              class: r,
              staticClass: i,
              style: c,
              staticStyle: l,
              attrs: d = {},
              ...u
            } = n
          return a(
            'svg',
            {
              class: [r, i],
              style: [c, l],
              attrs: Object.assign(
                {
                  width: '18',
                  height: '18',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                d
              ),
              ...u,
            },
            o.concat([
              a('path', {
                attrs: {
                  d: 'M9 0a9 9 0 109 9 9 9 0 00-9-9zm4.314 6.62l-5.197 5.727a.714.714 0 01-1.125-.062L4.635 9.034a.714.714 0 01.113-.968l.208-.191a.714.714 0 01.984.05l1.519 1.581a.197.197 0 00.27 0l4.595-3.937a.714.714 0 01.996 1.024l-.006.028z',
                  fill: '#FFAA0A',
                  'fill-rule': 'evenodd',
                },
              }),
            ])
          )
        },
      }
    },
    '9e7a': function (e, t, a) {
      'use strict'
      a('5010')
    },
    a054: function (e, t, a) {
      'use strict'
      a('a1ec')
    },
    a14d: function (e, t, a) {
      'use strict'
      a('5029')
    },
    a1ec: function (e, t, a) { },
    aaf0: function (e, t, a) {
      'use strict'
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          {
            class: ['error-wrapper', e.bgWhiteAuth ? 'bg-white' : ''],
          },
          [
            t('div', { staticClass: 'center' }, [
              t('div', { staticClass: 'error-status' }),
              t('div', { staticClass: 'message' }, [
                t('div', { staticClass: 'message-main' }, [
                  e._v(e._s(e.message)),
                ]),
                e.scene
                  ? t('p', { staticClass: 'message-sub' }, [
                    e._v(
                      ' ' +
                      e._s('Scene: '.concat(e.scene, '.')) +
                      ' ' +
                      e._s(e.subMessage) +
                      ' '
                    ),
                  ])
                  : e._e(),
              ]),
              t(
                'div',
                { staticClass: 'button-wrapper' },
                [
                  e.showRefresh
                    ? t(
                      'a-button',
                      {
                        class:
                          e.showBack || e.isClassLiveOrPlayback
                            ? 'mr40'
                            : '',
                        attrs: {
                          type: 'primary',
                          shape: 'round',
                          size: 'large',
                        },
                        on: { click: e.handleRefresh },
                      },
                      [e._v(' ' + e._s(e.$t('common.refresh')) + ' ')]
                    )
                    : e._e(),
                  e.showBack || e.isClassLiveOrPlayback
                    ? t(
                      'a-button',
                      {
                        staticClass: 'color-orange',
                        attrs: {
                          shape: 'round',
                          size: 'large',
                        },
                        on: { click: e.handleBack },
                      },
                      [
                        e._v(
                          ' ' +
                          e._s(
                            e.isClassLiveOrPlayback
                              ? e.$t(
                                'classroom.modules.systemError.backButtonName'
                              )
                              : e.$t('common.back')
                          ) +
                          ' '
                        ),
                      ]
                    )
                    : e._e(),
                ],
                1
              ),
            ]),
          ]
        )
      },
        n = [],
        o =
          (a('14d9'),
            a('caad'),
          {
            name: 'ErrorStatus',
            props: {
              message: {
                type: String,
                default: function () {
                  return (
                    console.info(
                      '对象函数 default,filePath:renderer/components/Common/ErrorStatus.vue'
                    ),
                    this.$t('common.components.errorStatus.message')
                  )
                },
              },
              isClassLiveOrPlayback: {
                type: Boolean,
                default: false,
              },
              scene: {
                type: String,
                default: '',
              },
              subMessage: {
                type: String,
                default: '',
              },
              showRefresh: {
                type: Boolean,
                default: true,
              },
              showBack: {
                type: Boolean,
                default: false,
              },
              backUrl: {
                type: String,
                default: '',
              },
            },
            computed: {
              bgWhiteAuth: function () {
                return (
                  console.info(
                    '对象函数 bgWhiteAuth,filePath:renderer/components/Common/ErrorStatus.vue'
                  ),
                  [
                    'ClassLiving',
                    'PlaybackReadyClass',
                    'LivingReadyClass',
                    'PlayBack',
                  ].includes(this.scene)
                )
              },
            },
            methods: {
              handleRefresh: function () {
                console.info(
                  '对象函数 handleRefresh,filePath:renderer/components/Common/ErrorStatus.vue'
                )
                this.isClassLiveOrPlayback
                  ? window.location.reload()
                  : this.$emit('click-refresh')
              },
              handleBack: function () {
                console.info(
                  '对象函数 handleBack,filePath:renderer/components/Common/ErrorStatus.vue'
                )
                this.isClassLiveOrPlayback
                  ? (window.location.href = ''.concat(
                    window.location.origin,
                    '/#/courses'
                  ))
                  : this.$router.push({ path: this.backUrl })
              },
            },
          }),
        r = o,
        i = (a('dc2d'), a('2877')),
        c = Object(i.a)(r, s, n, false, null, 'f910b7da', null)
      t.a = c.exports
    },
    ae5c: function (e, t, a) { },
    cfea: function (e, t) {
      e.exports = {
        functional: true,
        render(e, t) {
          const { _c: a, _v: s, data: n, children: o = [] } = t,
            {
              class: r,
              staticClass: i,
              style: c,
              staticStyle: l,
              attrs: d = {},
              ...u
            } = n
          return a(
            'svg',
            {
              class: ['icon', r, i],
              style: [c, l],
              attrs: Object.assign(
                {
                  viewBox: '0 0 1024 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '128',
                  height: '128',
                },
                d
              ),
              ...u,
            },
            o.concat([
              a('defs'),
              a('path', {
                attrs: {
                  d: 'M328.555 515.588L692.82 151.323c20.074-20.05 20.074-52.554 0-72.578-20.024-20.049-52.528-20.049-72.577 0l-399.25 399.226c-20.025 20.024-20.025 52.529 0 72.578 1.578 1.578 3.383 2.831 5.112 4.16.3.325.526.701.827 1.027l389.877 389.878c19.573 19.573 51.3 19.573 70.874 0s19.573-51.3 0-70.873L328.555 515.588z',
                },
              }),
            ])
          )
        },
      }
    },
    d44c: function (e, t, a) {
      'use strict'
      a('fe14')
    },
    d906: function (e, t, a) { },
    dc2d: function (e, t, a) {
      'use strict'
      a('17c8')
    },
    e71a: function (e, t, a) {
      'use strict'
      a('d906')
    },
    e79d: function (e, t, a) {
      'use strict'
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          {
            staticClass: 'header',
            attrs: { 'data-log': '课前准备页header' },
          },
          [
            t('div', { staticClass: 'icon-goback' }, [
              t(
                'div',
                {
                  staticClass: 'icon-wrapper',
                  attrs: { 'data-log': '返回' },
                  on: { click: e.backToPrev },
                },
                [t('a-icon', { attrs: { component: e.gobackSvg } })],
                1
              ),
            ]),
            e.showSignIn
              ? [
                t('SignIn', {
                  attrs: {
                    signStatus: e.signStatus,
                    rightCoin: e.rightCoin,
                    startTime: e.startTime,
                    'data-log': '签到',
                  },
                }),
              ]
              : e._e(),
          ],
          2
        )
      },
        n = [],
        o = (a('14d9'), a('a9e3'), a('cfea')),
        r = a.n(o),
        i = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            {
              staticClass: 'center',
              class: { upToDown: e.showAnimation },
            },
            [
              t('div', { staticClass: 'left-content' }, [
                t('div', { staticClass: 'icon-coin' }),
                t('p', { staticClass: 'check-title' }, [
                  e._v(e._s(e.$t('prepareClass.checkIn.onTime'))),
                ]),
              ]),
              t(
                'div',
                { staticClass: 'right-content' },
                [
                  t(
                    'div',
                    { staticClass: 'check-centent' },
                    [
                      e.showCoinAnimation
                        ? [
                          e.checkedSuccess
                            ? t(
                              'div',
                              {
                                staticClass: 'coins-animation',
                                class: { 'self-ani': e.checkedSuccess },
                              },
                              [
                                t('span', { staticClass: 'icon-smile' }),
                                e._m(0),
                              ]
                            )
                            : e._e(),
                          e.rightCoin
                            ? t('span', { staticClass: 'icon-number' }, [
                              e._v('+' + e._s(e.rightCoin)),
                            ])
                            : e._e(),
                        ]
                        : e._e(),
                    ],
                    2
                  ),
                  t(
                    'a-button',
                    {
                      staticClass: 'btn check-btn',
                      attrs: {
                        type: 'primary',
                        shape: 'round',
                        size: 'large',
                        loading: e.loading,
                        disabled: 2 == e.signStatus,
                      },
                      on: { click: e.handleSignIn },
                    },
                    [e._v(' ' + e._s(e.$t('prepareClass.gotIt')) + ' ')]
                  ),
                ],
                1
              ),
            ]
          )
        },
        c = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'coins-num-box' }, [
              t('div', { staticClass: 'icons-box' }, [
                t('div', { staticClass: 'top1' }),
                t('div', { staticClass: 'top2' }),
                t('div', { staticClass: 'top3' }),
                t('div', { staticClass: 'bottom1' }),
                t('div', { staticClass: 'bottom2' }),
                t('div', { staticClass: 'bottom3' }),
              ]),
            ])
          },
        ],
        l = a('c7eb'),
        d = a('1da1'),
        u = a('dc21'),
        f = a('e39c')
      function p(e, t, a) {
        return m.apply(this, arguments)
      }
      function m() {
        return (
          (m = Object(d.a)(
            Object(l.a)().mark(function e(t, a, s) {
              var n, o, r
              return Object(l.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = Object(f.h)()),
                        (o = n.oversea),
                        (e.next = 3),
                        Object(u.a)({
                          url: a,
                          params: s,
                          apiDomain: o,
                        })
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
          )),
          m.apply(this, arguments)
        )
      }
      function h(e, t) {
        return p(e, '/classroom-hub/sign/student/v2/arrive', t)
      }
      var w = a('d0db'),
        C = a('e417'),
        v = a('0a06a'),
        g = {
          props: {
            signStatus: {
              default: 0,
              type: Number,
            },
            rightCoin: {
              default: 0,
              type: Number,
            },
            startTime: {
              default: 0,
              type: Number,
            },
          },
          data: function () {
            return {
              checkedSuccess: false,
              loading: false,
              showAnimation: false,
              showCoinAnimation: true,
            }
          },
          methods: {
            buildSensorOption: function () {
              console.info(
                '对象函数 buildSensorOption,filePath:renderer/components/ReadyClass/SignIn/index.vue'
              )
              var e = this.$route.query,
                t = e.classId,
                a = e.planId,
                s = e.subPlatformType
              return {
                classId: t,
                planId: a,
                classType: s,
              }
            },
            reSensorEvent: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              console.info(
                '对象函数 reSensorEvent(eventName, params)',
                e,
                t,
                'filePath:renderer/components/ReadyClass/SignIn/index.vue'
              )
              var a = this.buildSensorOption()
              Object(C.e)(e, a, t)
            },
            handleSignIn: function () {
              var e = this
              return Object(d.a)(
                Object(l.a)().mark(function t() {
                  var a, s, n, o
                  return Object(l.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 handleSignIn,filePath:renderer/components/ReadyClass/SignIn/index.vue'
                            ),
                            e.reSensorEvent('hw_classroom_checkin_click', {
                              click_button: 1,
                            }),
                            (e.loading = true),
                            (a = e.$route.query),
                            (s = a.planId),
                            (n = a.classId),
                            v.h({
                              planId: s,
                              coins: e.rightCoin,
                              time: e.startTime,
                            }),
                            (t.next = 7),
                            h(e, {
                              planId: 1 * s,
                              classId: 1 * n,
                            }).catch(function (t) {
                              return (
                                console.info(
                                  '箭头函数 _handleSignIn的catch(err)',
                                  t,
                                  'filePath:renderer/components/ReadyClass/SignIn/index.vue'
                                ),
                                e.sendLogger('接口报错:签到失败:', t, 'error'),
                                t
                              )
                            })
                          )
                        case 7:
                          if (
                            ((o = t.sent),
                              0 == (null === o || void 0 === o ? void 0 : o.code))
                          ) {
                            t.next = 14
                            break
                          }
                          return (
                            console.info(
                              'if(res?.code != 0)为true触发return,path: /renderer/components/ReadyClass/SignIn/index.vue'
                            ),
                            e.sendLogger(
                              '签到失败, res: '.concat(JSON.stringify(o)),
                              'submit'
                            ),
                            e.$Message.error({
                              content: e.$t('prepareClass.checkIn.checkInFail'),
                              duration: 3,
                            }),
                            (e.loading = false),
                            t.abrupt('return')
                          )
                        case 14:
                          ; (e.loading = false),
                            (e.signStatus = 2),
                            (e.checkedSuccess = true),
                            setTimeout(function () {
                              e.showCoinAnimation = false
                            }, 3000),
                            e.sendLogger(
                              '签到成功, res: '.concat(JSON.stringify(o)),
                              'submit'
                            ),
                            e.$Message.success({
                              content: e.$t(
                                'prepareClass.checkIn.checkInSuccess'
                              ),
                              duration: 3,
                            })
                        case 20:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            sendLogger: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'info'
              w.a.send({
                tag: 'student.Interact',
                content: {
                  msg: e,
                  interactType: 'Checkin',
                  interactId: '',
                  interactStage: t,
                },
                level: a,
              })
            },
          },
          mounted: function () {
            var e = this
            setTimeout(function () {
              e.showAnimation = true
            })
          },
        },
        b = g,
        k = (a('9c38'), a('2877')),
        S = Object(k.a)(b, i, c, false, null, '5621b0b4', null),
        y = S.exports,
        x = {
          props: {
            backUrl: {
              default: '',
              type: String,
            },
            showSignIn: {
              default: false,
              type: Boolean,
            },
            signStatus: {
              default: 1,
              type: Number,
            },
            rightCoin: {
              default: 0,
              type: Number,
            },
            startTime: {
              default: 0,
              type: Number,
            },
          },
          components: { SignIn: y },
          data: function () {
            return { gobackSvg: r.a }
          },
          computed: {},
          methods: {
            backToPrev: function () {
              console.info(
                '对象函数 backToPrev,filePath:renderer/components/ReadyClass/Header/index.vue'
              )
              this.$router.push({ path: this.backUrl })
            },
          },
          mounted: function () { },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/ReadyClass/Header/index.vue'
            )
          },
        },
        _ = x,
        O = (a('9e7a'), Object(k.a)(_, s, n, false, null, '5efde760', null))
      t.a = O.exports
    },
    f96fc: function (e, t, a) { },
    fe14: function (e, t, a) { },
  },
])
