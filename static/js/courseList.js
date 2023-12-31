; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-53d50342'],
  {
    '0c70': function (e, t, r) {
      'use strict'
      r('0cba')
    },
    '0cba': function (e, t, r) { },
    '11ba': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          { staticClass: 'record-courses-video' },
          [
            t('Toolbar', {
              staticClass: 'toolbar',
              attrs: { 'dark-theme': true },
            }),
            t('RecordCourseVideo'),
          ],
          1
        )
      },
        o = [],
        s = r('dfa8'),
        i =
          (r('caad'),
            function () {
              var e = this,
                t = e._self._c
              return t('div', [
                t(
                  'div',
                  {
                    ref: 'videoTitle',
                    staticClass: 'video-title',
                  },
                  [
                    t('i', {
                      staticClass: 'icon-back',
                      on: { click: e.goBack },
                    }),
                    e._v(' ' + e._s(e.recordLesson.lessonName) + ' '),
                  ]
                ),
                t('div', { staticClass: 'video-wrapper' }, [
                  'error' === e.showState
                    ? t('div', { staticClass: 'video-error' }, [
                      t('div', { staticClass: 'video-title titleZindex' }, [
                        t('i', {
                          staticClass: 'icon-back',
                          on: { click: e.goBack },
                        }),
                        e._v(' ' + e._s(e.recordLesson.lessonName) + ' '),
                      ]),
                      t('i', { staticClass: 'icon-error' }),
                      t('p', { staticClass: 'title' }, [
                        e._v(
                          ' ' +
                          e._s(e.$t('courses.recordCourse.loadFailed')) +
                          ' '
                        ),
                      ]),
                      t('p', { staticClass: 'errCode' }, [
                        e._v('(Error code: ' + e._s(e.errorCode) + ')'),
                      ]),
                      t(
                        'div',
                        {
                          staticClass: 'reload-btn',
                          on: { click: e.getRecordCourseVideo },
                        },
                        [
                          t('i', { staticClass: 'icon-btn' }),
                          e._v(e._s(e.$t('courses.recordCourse.reload')) + ' '),
                        ]
                      ),
                    ])
                    : e._e(),
                  t('video', {
                    ref: 'recordVideoPlayer',
                    staticClass: 'video-js vjs-big-play-centered',
                    attrs: {
                      'data-setup': '{"language":"default-language"}',
                      crossorigin: 'anonymous',
                    },
                  }),
                  e.imgUrl
                    ? t('div', { staticClass: 'shotScreen-img' }, [
                      t('img', { attrs: { src: e.imgUrl } }),
                    ])
                    : e._e(),
                  t(
                    'div',
                    {
                      ref: 'linkPopop',
                      staticClass: 'link-popup',
                    },
                    [
                      t('div', { staticClass: 'link-popup-title' }, [
                        t('i', { staticClass: 'link-icon' }),
                        e._v(
                          ' ' +
                          e._s(e.$t('courses.recordCourse.switchChannel')) +
                          ' '
                        ),
                      ]),
                      e.sourceList.length
                        ? t(
                          'ul',
                          { staticClass: 'link-list' },
                          e._l(e.sourceList[0].urls, function (r, n) {
                            return t(
                              'li',
                              {
                                key: 'video-'.concat(n),
                                class: { current: e.currentIndex === n },
                                on: {
                                  click: function (t) {
                                    return e.switchChannel(n)
                                  },
                                },
                              },
                              [e._v(' ' + e._s(r.routeName) + ' ')]
                            )
                          }),
                          0
                        )
                        : e._e(),
                    ]
                  ),
                  t(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: [1, 2].includes(e.showToastState),
                          expression: '[1, 2].includes(showToastState)',
                        },
                      ],
                      class: [
                        'toast',
                        { 'toast-left': 1 === e.showToastState },
                        { 'toast-right': 2 === e.showToastState },
                      ],
                    },
                    [t('span', [e._v(e._s(e.showToastText) + 's')])]
                  ),
                  e.isShowNextPlayBtn
                    ? t(
                      'div',
                      {
                        ref: 'nextBtn',
                        staticClass: 'next-btn',
                        on: { click: e.handlerNext },
                      },
                      [
                        t('span', [
                          e._v(
                            e._s(e.$t('courses.recordCourse.playNextVideo'))
                          ),
                        ]),
                        t('i', { staticClass: 'icon-next' }),
                      ]
                    )
                    : e._e(),
                ]),
              ])
            }),
        a = [],
        c = r('5530'),
        u = r('c7eb'),
        d = r('1da1'),
        l =
          (r('14d9'),
            r('b65f'),
            r('c740'),
            r('7db0'),
            r('d3b7'),
            r('99af'),
            r('4de4'),
            r('b0c0'),
            r('159b'),
            r('f0e2')),
        h = r('02fc'),
        p = {
          data: function () {
            return {
              player: null,
              videoOptions: {
                fluid: false,
                bigPlayButton: true,
                autoplay: true,
                controls: true,
                preload: 'auto',
                playbackRates: [2, 1.5, 1.25, 1, 0.75, 0.5],
                controlBar: {
                  children: [
                    'playToggle',
                    'currentTimeDisplay',
                    'timeDivider',
                    'durationDisplay',
                    'progressControl',
                    { name: 'playbackRateMenuButton' },
                    {
                      name: 'volumePanel',
                      inline: false,
                    },
                  ],
                },
              },
              volume: localStorage.getItem('recordVolume') || 0.5,
              IntervalTime: 10,
              limitNum: 99,
              IntervalNum: 0,
              timeControlInterval: null,
              IntervalVolume: 0.01,
              imgUrl: '',
              showToastState: 0,
              toastMap: {
                hidden: 0,
                rewind: 1,
                forward: 2,
              },
              showToastText: '',
              clickBtns: [
                '.rewind-button',
                '.forward-button',
                '.shotScreen-button',
                '.vjs-mute-control',
                '.link-button',
              ],
            }
          },
          destroyed: function () {
            console.info(
              '对象函数 destroyed,filePath:renderer/components/RecordCourseVideo/mixin.js'
            )
            document.onkeydown = null
          },
          methods: {
            initPlayer: function (e) {
              var t = this
              return Object(d.a)(
                Object(u.a)().mark(function r() {
                  return Object(u.a)().wrap(function (r) {
                    while (1) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 initPlayer(callback)',
                              e,
                              'filePath:renderer/components/RecordCourseVideo/mixin.js'
                            ),
                            (r.next = 3),
                            t.init(e)
                          )
                        case 3:
                          t.registerEvent(),
                            t.keyCodeEvent(),
                            t.registerBlurEvent()
                        case 6:
                        case 'end':
                          return r.stop()
                      }
                    }
                  }, r)
                })
              )()
            },
            registerBlurEvent: function () {
              var e = this
              console.info(
                '对象函数 registerBlurEvent,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              this.clickBtns.forEach(function (t) {
                document
                  .querySelector(t)
                  .addEventListener('click', e.blurEventFun)
              })
            },
            unRegisterBlurEvent: function () {
              var e = this
              console.info(
                '对象函数 unRegisterBlurEvent,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              this.clickBtns.forEach(function (t) {
                document
                  .querySelector(t)
                  .removeEventListener('click', e.blurEventFun)
              })
            },
            blurEventFun: function (e) {
              console.info(
                '对象函数 blurEventFun(e)',
                e,
                'filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var t = e.target
              'SPAN' == t.nodeName && (t = e.target.parentNode)
              t.blur()
            },
            init: function (e) {
              var t = this
              return Object(d.a)(
                Object(u.a)().mark(function r() {
                  return Object(u.a)().wrap(function (r) {
                    while (1) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 init(callback)',
                              e,
                              'filePath:renderer/components/RecordCourseVideo/mixin.js'
                            ),
                            (r.next = 3),
                            Object(h.c)()
                          )
                        case 3:
                          l.a.addLanguage('default-language', {
                            Play: t.$t('courses.recordPlayerTips')[0],
                            Pause: t.$t('courses.recordPlayerTips')['0-1'],
                            Mute: t.$t('classroom.largeClass.players.mute'),
                            Unmute: t.$t('classroom.largeClass.players.unmute'),
                          }),
                            (t.player = Object(l.a)(
                              t.$refs.recordVideoPlayer,
                              t.videoOptions
                            )),
                            e(),
                            t.player.tech_.off('dblclick'),
                            t.setVolume(t.volume)
                        case 8:
                        case 'end':
                          return r.stop()
                      }
                    }
                  }, r)
                })
              )()
            },
            createButton: function (e, t, r) {
              console.info(
                '对象函数 createButton(desc, className, index)',
                e,
                t,
                r,
                'filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var n = l.a.getComponent('Button'),
                o = new n(this.player)
              return (
                o.controlText(e),
                o.addClass(t),
                this.player.controlBar.addChild(o, {}, r),
                o
              )
            },
            registerEvent: function () {
              var e = this
              console.info(
                '对象函数 registerEvent,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var t = this.createButton(
                this.$t('courses.recordPlayerTips')[1],
                'rewind-button',
                1
              )
              t.on('click', this.fastRewind)
              var r = this.createButton(
                this.$t('courses.recordPlayerTips')[2],
                'forward-button',
                2
              )
              r.on('click', this.fastForward)
              var n = this.createButton(
                this.$t('courses.recordPlayerTips')[9],
                'shotScreen-button',
                9
              )
              n.on('click', this.shotScreen)
              this.createButton(
                this.$t('courses.recordCourse.switchChannel'),
                'link-button',
                10
              )
              this.player.el_
                .getElementsByTagName('video')[0]
                .after(this.$refs.videoTitle)
              this.player.on('volumechange', function () {
                console.info(
                  '箭头函数 监听 volumechange,filePath:renderer/components/RecordCourseVideo/mixin.js'
                )
                var t = e.player.muted() ? 0 : e.player.volume()
                e.setVolume(t)
                localStorage.setItem('recordVolume', t)
              })
              document
                .getElementsByClassName('vjs-volume-vertical')[0]
                .addEventListener('mouseleave', function () {
                  console.info(
                    '箭头函数 监听 mouseleave,filePath:renderer/components/RecordCourseVideo/mixin.js'
                  )
                  var t = e.player.muted() ? 0 : e.player.volume()
                  e.setVolume(t)
                })
              var o = this.player.controlBar.children_
              o.forEach(function (t, r) {
                ;[0, 1, 2, 9].includes(r) && e.addToastText(t, r)
                10 === r && t.el_.append(e.$refs.linkPopop)
                0 === r && e.addToastText(t, '0-1')
              })
              this.player.on('ratechange', function () {
                console.info(
                  '箭头函数 监听 ratechange,filePath:renderer/components/RecordCourseVideo/mixin.js'
                )
                e.sentPlaybackRateSensorsData()
                document
                  .querySelector('.vjs-playback-rate')
                  .querySelector('button')
                  .blur()
              })
            },
            addToastText: function (e, t) {
              console.info(
                '对象函数 addToastText(element, index)',
                e,
                t,
                'filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var r = document.createElement('div')
              r.className = 'tips'
              r.innerHTML = this.$t('courses.recordPlayerTips')[t]
              e.el_.appendChild(r)
            },
            fastForward: function () {
              console.info(
                '对象函数 fastForward,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              this.fastControlTime(this.toastMap.forward)
            },
            fastRewind: function () {
              console.info(
                '对象函数 fastRewind,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              this.fastControlTime(this.toastMap.rewind)
            },
            fastControlTime: function (e) {
              var t = this
              if (
                (console.info(
                  '对象函数 fastControlTime(operation)',
                  e,
                  'filePath:renderer/components/RecordCourseVideo/mixin.js'
                ),
                  this.showToastState != e && (this.IntervalNum = 0),
                  this.IntervalNum > this.limitNum)
              ) {
                console.info(
                  'if(this.IntervalNum > this.limitNum)为true触发return,path: /renderer/components/RecordCourseVideo/mixin.js'
                )
              } else {
                this.IntervalNum += 1
                var r =
                  e == this.toastMap.rewind
                    ? 0 - this.IntervalTime
                    : this.IntervalTime,
                  n = this.player.currentTime() + r
                this.player.currentTime(n)
                this.showToastState = e
                this.showToastText = this.IntervalNum * r
                clearTimeout(this.timeControlInterval)
                this.timeControlInterval = setTimeout(function () {
                  t.showToastState = 0
                }, 1000)
              }
            },
            increaseVolume: function () {
              console.info(
                '对象函数 increaseVolume,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var e = this.player.volume()
              e += this.IntervalVolume
              var t = parseInt(100 * e, 10)
              t > 100
                ? console.info(
                  'if(volumeText > 100)为true触发return,path: /renderer/components/RecordCourseVideo/mixin.js'
                )
                : this.setVolume(e)
            },
            reduceVolume: function () {
              console.info(
                '对象函数 reduceVolume,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var e = this.player.volume()
              e -= this.IntervalVolume
              e < 0
                ? console.info(
                  'if(currentVolume < 0)为true触发return,path: /renderer/components/RecordCourseVideo/mixin.js'
                )
                : this.setVolume(e)
            },
            setVolume: function (e) {
              console.info(
                '对象函数 setVolume(currentVolume)',
                e,
                'filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              this.player.volume(e)
              document.getElementsByClassName(
                'vjs-volume-tooltip'
              )[0].innerHTML = ''.concat(parseInt(100 * e, 10), '%')
            },
            shotScreen: function () {
              var e = this
              console.info(
                '对象函数 shotScreen,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              var t = this.player.el_.getElementsByTagName('video'),
                r = t && t.length >= 1 ? t[0] : null
              if (null !== r) {
                var n = document.createElement('canvas')
                n.width = r.videoWidth
                n.height = r.videoHeight
                n.getContext('2d').drawImage(r, 0, 0, n.width, n.height)
                this.imgUrl = n.toDataURL()
                this.player.pause()
                var o = document.createElement('a')
                o.download = 'Screenshot_Think Academy_'.concat(Date.now())
                o.href = this.imgUrl
                setTimeout(function () {
                  e.imgUrl = ''
                  o.click()
                  o.remove()
                }, 1000)
                this.sentShotScreenSensorsData()
              }
            },
            switchChannel: function (e) {
              if (
                (console.info(
                  '对象函数 switchChannel(index)',
                  e,
                  'filePath:renderer/components/RecordCourseVideo/mixin.js'
                ),
                  this.currentIndex != e)
              ) {
                var t = this.player.currentTime()
                this.currentIndex = e
                this.player.src(
                  this.sourceList[0].urls[e].mp4Url ||
                  this.sourceList[0].urls[e].url
                )
                this.player.currentTime(t)
                this.player.play()
                document.querySelector('.link-button').blur()
              } else {
                console.info(
                  'if(this.currentIndex == index)为true触发return,path: /renderer/components/RecordCourseVideo/mixin.js'
                )
              }
            },
            keyCodeEvent: function () {
              var e = this
              console.info(
                '对象函数 keyCodeEvent,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              document.onkeydown = function (t) {
                switch ((t.preventDefault(), t.keyCode, t.keyCode)) {
                  case 37:
                    e.fastRewind()
                    break
                  case 38:
                    e.increaseVolume()
                    break
                  case 39:
                    e.fastForward()
                    break
                  case 40:
                    e.reduceVolume()
                    break
                  case 32:
                    e.player.paused() ? e.player.play() : e.player.pause()
                    break
                  default:
                    break
                }
              }
            },
            onReload: function () {
              console.info(
                '对象函数 onReload,filePath:renderer/components/RecordCourseVideo/mixin.js'
              )
              this.player.load()
            },
          },
        },
        f = (r('737a'), r('22de')),
        v = r('7e54'),
        m = r('35ac'),
        b = r('d0db'),
        y = {
          mixins: [p],
          data: function () {
            return {
              courseDetail: {},
              recordLesson: {},
              nextRecordLesson: [],
              sourceList: [],
              showState: 'loading',
              errorCode: '',
              currentIndex: 0,
              sendTimer: null,
              sentSensorsTimer: null,
              watchIntervalTime: 250,
              sendIntervalTime: 1000,
              sendSensorIntervalTime: 59000,
              isShowNextPlayBtn: false,
              currentVideoIndex: '',
              isLoading: false,
              currentInterval: -1,
            }
          },
          mounted: function () {
            var e = this
            return Object(d.a)(
              Object(u.a)().mark(function t() {
                return Object(u.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.initPlayer(e.initData)
                      case 1:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          destroyed: function () {
            console.info(
              '对象函数 destroyed,filePath:renderer/components/RecordCourseVideo/index.vue'
            )
            this.sendEnterAndLeave(0)
            window.clearInterval(this.sentSensorsTimer)
            window.clearInterval(this.sendTimer)
          },
          methods: {
            sendLogger: function (e, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'info'
              b.a.send({
                tag: 'student.playback',
                content: Object(c.a)(Object(c.a)({}, t), {}, { msg: e }),
                level: r,
              })
            },
            initData: function () {
              var e = this
              return Object(d.a)(
                Object(u.a)().mark(function t() {
                  var r, n, o
                  return Object(u.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 initData,filePath:renderer/components/RecordCourseVideo/index.vue'
                            ),
                              (r = e.$store.state.courses.recordCourseDetail),
                              (n = r.course),
                              (o = r.scheduleList),
                              n && o)
                          ) {
                            t.next = 7
                            break
                          }
                          return (t.next = 5), e.getRecordCourseVideo()
                        case 5:
                          t.next = 8
                          break
                        case 7:
                          e.setData(e.$store.state.courses.recordCourseDetail)
                        case 8:
                          e.handlerEvent(),
                            window.clearInterval(e.sendTimer),
                            (e.sendTimer = setInterval(function () {
                              var t = Math.trunc(e.player.currentTime() / 60)
                              e.currentInterval != t &&
                                ((e.currentInterval = t),
                                  e.sendData(),
                                  e.sendHotData())
                            }, e.sendIntervalTime)),
                            e.sendEnterAndLeave(1)
                        case 12:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            getRecordCourseVideo: function () {
              var e = this
              return Object(d.a)(
                Object(u.a)().mark(function t() {
                  var r
                  return Object(u.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 getRecordCourseVideo,filePath:renderer/components/RecordCourseVideo/index.vue'
                            ),
                              !e.isLoading)
                          ) {
                            t.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(_this3.isLoading)为true触发return,path: /renderer/components/RecordCourseVideo/index.vue'
                            ),
                            t.abrupt('return')
                          )
                        case 4:
                          return (
                            (e.isLoading = true),
                            (t.next = 7),
                            Object(v.d)(e, {
                              studentCourseId: e.$route.query.studentCourseId,
                            }).catch(function (t) {
                              console.info(
                                '箭头函数 getSchedule的catch(err)',
                                t,
                                'filePath:renderer/components/RecordCourseVideo/index.vue'
                              )
                              e.showState = 'error'
                              e.isLoading = false
                              e.sendLogger(
                                '获取录播课讲次列表接口报错:',
                                { err: t },
                                'error'
                              )
                            })
                          )
                        case 7:
                          ; (r = t.sent),
                            (e.isLoading = false),
                            null !== r && void 0 !== r && r.data
                              ? (e.$store.dispatch(
                                'courses/setRecordCoursesDetail',
                                r.data
                              ),
                                e.setData(
                                  null === r || void 0 === r ? void 0 : r.data
                                ))
                              : (e.showState = 'error')
                        case 10:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            setData: function (e) {
              var t,
                r,
                n,
                o,
                s,
                i = this
              console.info(
                '对象函数 setData(recordCourseDetail)',
                e,
                'filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              var a = this.$route.query.lessonId,
                c = e.course,
                u = e.scheduleList
              this.courseDetail = c
              this.currentVideoIndex = u.findIndex(function (e) {
                return parseInt(e.recordLesson.lessonId, 10) === parseInt(a, 10)
              })
              this.recordLesson = u[this.currentVideoIndex].recordLesson
              this.nextRecordLesson =
                null === (t = u[this.currentVideoIndex + 1]) || void 0 === t
                  ? void 0
                  : t.recordLesson
              this.sourceList = this.recordLesson.resourceList
              this.player.src(
                (null === (r = this.sourceList[0]) ||
                  void 0 === r ||
                  null === (n = r.urls[0]) ||
                  void 0 === n
                  ? void 0
                  : n.mp4Url) ||
                (null === (o = this.sourceList[0]) ||
                  void 0 === o ||
                  null === (s = o.urls[0]) ||
                  void 0 === s
                  ? void 0
                  : s.url)
              )
              var d = Object(m.c)('RECORD_COURSE_VIDEO_PLAY_DATA') || [],
                l = d.find(function (e) {
                  return (
                    e.lessonId === ''.concat(i.courseDetail.id, '-').concat(a)
                  )
                })
              null !== l &&
                void 0 !== l &&
                l.playTime &&
                this.player.currentTime(l.playTime)
            },
            handlerEvent: function () {
              var e = this
              console.info(
                '对象函数 handlerEvent,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.player.on('error', function (t) {
                console.info(
                  '箭头函数 监听 error(event)',
                  t,
                  'filePath:renderer/components/RecordCourseVideo/index.vue'
                )
                e.showState = 'error'
                e.errorCode = t.target.player.error().code
              })
              this.player.on('play', function () {
                console.info(
                  '箭头函数 监听 play,filePath:renderer/components/RecordCourseVideo/index.vue'
                )
                e.showState = 'play'
                e.sendData()
              })
              this.player.on('ended', function () {
                console.info(
                  '箭头函数 监听 ended,filePath:renderer/components/RecordCourseVideo/index.vue'
                )
                window.clearInterval(e.sendTimer)
              })
              this.player.on('timeupdate', function () {
                console.info(
                  '箭头函数 监听 timeupdate,filePath:renderer/components/RecordCourseVideo/index.vue'
                )
                e.handlerNextPlayBtn()
              })
              window.clearInterval(this.sentSensorsTimer)
              this.sentSensorsTimer = setInterval(function () {
                e.sentSensorsData()
              }, this.sendSensorIntervalTime)
            },
            handlerNextPlayBtn: function () {
              var e
              console.info(
                '对象函数 handlerNextPlayBtn,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              var t = Math.trunc(this.player.duration()),
                r = Math.trunc(this.player.currentTime()),
                n = t - r
              n >= 0 &&
                n <= 60 &&
                'NORMAL' ===
                (null === (e = this.nextRecordLesson) || void 0 === e
                  ? void 0
                  : e.displayStatus)
                ? (this.isShowNextPlayBtn = true)
                : (this.isShowNextPlayBtn = false)
            },
            handlerNext: function () {
              var e, t, r, n, o
              console.info(
                '对象函数 handlerNext,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.isShowNextPlayBtn = false
              var s = this.$store.state.courses.recordCourseDetail.scheduleList
              this.currentVideoIndex += 1
              this.recordLesson = s[this.currentVideoIndex].recordLesson
              this.nextRecordLesson =
                null === (e = s[this.currentVideoIndex + 1]) || void 0 === e
                  ? void 0
                  : e.recordLesson
              this.sourceList = this.recordLesson.resourceList
              this.player.src(
                (null === (t = this.sourceList[0]) ||
                  void 0 === t ||
                  null === (r = t.urls[0]) ||
                  void 0 === r
                  ? void 0
                  : r.mp4Url) ||
                (null === (n = this.sourceList[0]) ||
                  void 0 === n ||
                  null === (o = n.urls[0]) ||
                  void 0 === o
                  ? void 0
                  : o.url)
              )
              this.currentIndex = 0
            },
            goBack: function () {
              console.info(
                '对象函数 goBack,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.unRegisterBlurEvent()
              var e = this.$route.query,
                t = e.studentCourseId,
                r = e.lessonId
              this.$router.push(
                '/record-courses-detail?studentCourseId='.concat(t)
              )
              this.setPLayTime(r)
            },
            setPLayTime: function (e) {
              console.info(
                '对象函数 setPLayTime(lessonId)',
                e,
                'filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              var t = Object(m.c)('RECORD_COURSE_VIDEO_PLAY_DATA') || [],
                r = {
                  lessonId: ''.concat(this.courseDetail.id, '-').concat(e),
                  playTime: this.player.currentTime(),
                },
                n = t.filter(function (e) {
                  return e.lessonId !== r.lessonId
                })
              if (this.player.currentTime() === this.player.duration()) {
                return (
                  console.info(
                    'if(this.player.currentTime() === this.player.duration())为true触发return,path: /renderer/components/RecordCourseVideo/index.vue'
                  ),
                  void Object(m.g)('RECORD_COURSE_VIDEO_PLAY_DATA', n)
                )
              }
              n.push(r)
              Object(m.g)('RECORD_COURSE_VIDEO_PLAY_DATA', n)
            },
            sentPlaybackRateSensorsData: function () {
              var e, t
              console.info(
                '对象函数 sentPlaybackRateSensorsData,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.$sensors.track('hw_recorded_course_speed', {
                course_id: this.courseDetail.id,
                content_teacher_id:
                  (null === (e = this.courseDetail.teachers) || void 0 === e
                    ? void 0
                    : e.length) && this.courseDetail.teachers[0].id,
                content_teacher:
                  ((null === (t = this.courseDetail.teachers) || void 0 === t
                    ? void 0
                    : t.length) &&
                    this.courseDetail.teachers[0].name) ||
                  '',
                plan_id: this.recordLesson.lessonId,
                speed_value: this.player.playbackRate(),
                rightnow_play_progress: parseInt(
                  (this.player.currentTime() / this.player.duration()) * 100,
                  10
                ),
              })
            },
            sentShotScreenSensorsData: function () {
              var e, t
              console.info(
                '对象函数 sentShotScreenSensorsData,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.$sensors.track('hw_recorded_course_screenshot', {
                course_id: this.courseDetail.id,
                content_teacher_id:
                  (null === (e = this.courseDetail.teachers) || void 0 === e
                    ? void 0
                    : e.length) && this.courseDetail.teachers[0].id,
                content_teacher:
                  ((null === (t = this.courseDetail.teachers) || void 0 === t
                    ? void 0
                    : t.length) &&
                    this.courseDetail.teachers[0].name) ||
                  '',
                plan_id: this.recordLesson.lessonId,
                rightnow_play_progress: parseInt(
                  (this.player.currentTime() / this.player.duration()) * 100,
                  10
                ),
              })
            },
            sentSensorsData: function () {
              var e, t
              console.info(
                '对象函数 sentSensorsData,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.$sensors.track('hw_recorded_course_duration', {
                course_id: this.courseDetail.id,
                content_teacher_id:
                  (null === (e = this.courseDetail.teachers) || void 0 === e
                    ? void 0
                    : e.length) && this.courseDetail.teachers[0].id,
                content_teacher:
                  ((null === (t = this.courseDetail.teachers) || void 0 === t
                    ? void 0
                    : t.length) &&
                    this.courseDetail.teachers[0].name) ||
                  '',
                plan_id: this.recordLesson.lessonId,
                rightnow_play_status: this.player.paused() ? 0 : 1,
                rightnow_play_progress: parseInt(
                  (this.player.currentTime() / this.player.duration()) * 100,
                  10
                ),
              })
            },
            sendHotData: function () {
              var e, t
              console.info(
                '对象函数 sendHotData,filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.$sensors.track('hw_recorded_course_heat_map', {
                course_id: this.courseDetail.id,
                content_teacher_id:
                  (null === (e = this.courseDetail.teachers) || void 0 === e
                    ? void 0
                    : e.length) && this.courseDetail.teachers[0].id,
                content_teacher:
                  ((null === (t = this.courseDetail.teachers) || void 0 === t
                    ? void 0
                    : t.length) &&
                    this.courseDetail.teachers[0].name) ||
                  '',
                plan_id: this.recordLesson.lessonId,
                content_heat_map:
                  parseInt(this.player.currentTime() / 60, 10) + 1,
              })
            },
            sendEnterAndLeave: function (e) {
              var t, r
              console.info(
                '对象函数 sendEnterAndLeave(type)',
                e,
                'filePath:renderer/components/RecordCourseVideo/index.vue'
              )
              this.$sensors.track('hw_recorded_course', {
                course_id: this.courseDetail.id,
                content_teacher_id:
                  (null === (t = this.courseDetail.teachers) || void 0 === t
                    ? void 0
                    : t.length) && this.courseDetail.teachers[0].id,
                content_teacher:
                  ((null === (r = this.courseDetail.teachers) || void 0 === r
                    ? void 0
                    : r.length) &&
                    this.courseDetail.teachers[0].name) ||
                  '',
                plan_id: this.recordLesson.lessonId,
                play_status: e,
              })
            },
            sendData: function () {
              var e = this
              return Object(d.a)(
                Object(u.a)().mark(function t() {
                  var r
                  return Object(u.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 sendData,filePath:renderer/components/RecordCourseVideo/index.vue'
                            ),
                            (t.next = 3),
                            Object(f.f)(e, {
                              planId: e.recordLesson.lessonId,
                              courseId: e.courseDetail.id,
                              contentTeacherId:
                                ((null === (r = e.courseDetail.teachers) ||
                                  void 0 === r
                                  ? void 0
                                  : r.length) &&
                                  e.courseDetail.teachers[0].id) ||
                                '',
                              watchDuration: parseInt(
                                e.player.currentTime(),
                                10
                              ),
                              duration: parseInt(e.player.duration(), 10) || 1,
                              rightnowPlayProgress: parseInt(
                                (e.player.currentTime() / e.player.duration()) *
                                100,
                                10
                              ),
                              resourceId: e.sourceList[0].id,
                              sessionId: e.courseDetail.sessionId,
                            }).catch(function (t) {
                              console.info(
                                '箭头函数 watchRecorded的catch(err)',
                                t,
                                'filePath:renderer/components/RecordCourseVideo/index.vue'
                              )
                              e.sendLogger(
                                '录播课视频上报接口报错:',
                                { err: t },
                                'error'
                              )
                            })
                          )
                        case 3:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
          },
        },
        w = y,
        x = (r('0c70'), r('2877')),
        C = Object(x.a)(w, i, a, false, null, '4557c3c1', null),
        g = C.exports,
        j = {
          components: {
            Toolbar: s.a,
            RecordCourseVideo: g,
          },
        },
        _ = j,
        O = (r('b89f'), Object(x.a)(_, n, o, false, null, '3ad0c4be', null))
      t.default = O.exports
    },
    '22de': function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return c
      })
      r.d(t, 'e', function () {
        return u
      })
      r.d(t, 'a', function () {
        return d
      })
      r.d(t, 'b', function () {
        return l
      })
      r.d(t, 'c', function () {
        return h
      })
      r.d(t, 'f', function () {
        return p
      })
      var n = r('c7eb'),
        o = r('1da1'),
        s = r('dc21'),
        i = r('e39c'),
        a = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r, o) {
              var a, c, u
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = Object(i.h)()),
                        (c = a.oversea),
                        (e.next = 3),
                        Object(s.a)({
                          url: r,
                          params: o,
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
          return function (t, r, n) {
            return e.apply(this, arguments)
          }
        })(),
        c = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/homework-api/student/neirongyun/jumpUrl'),
                        (e.next = 3),
                        a(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        u = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/homework-api/student/sync'),
                        (e.next = 3),
                        a(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        d = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/homework-api/student/paperDetail'),
                        (e.next = 3),
                        a(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        l = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/homework-api/student/paperOverview'),
                        (e.next = 3),
                        a(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        h = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/beibo/student/paperOverview'),
                        (e.next = 3),
                        a(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        p = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/api/beibo/student/watch'),
                        (e.next = 3),
                        a(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })()
    },
    '5cee': function (e, t, r) { },
    '737a': function (e, t, r) { },
    '7e54': function (e, t, r) {
      'use strict'
      r.d(t, 'g', function () {
        return u
      })
      r.d(t, 'h', function () {
        return d
      })
      r.d(t, 'f', function () {
        return l
      })
      r.d(t, 'c', function () {
        return h
      })
      r.d(t, 'e', function () {
        return p
      })
      r.d(t, 'b', function () {
        return f
      })
      r.d(t, 'a', function () {
        return v
      })
      r.d(t, 'd', function () {
        return m
      })
      var n = r('c7eb'),
        o = r('1da1'),
        s = (r('14d9'), r('dc21')),
        i = r('92e5'),
        a = r('e39c'),
        c = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r, o) {
              var c, u, d
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (c = Object(a.h)()),
                        (u = c.one),
                        (e.next = 3),
                        Object(s.a)({
                          url: r,
                          params: o,
                          apiDomain: u,
                        })
                      )
                    case 3:
                      if (((d = e.sent), !d || 9 != d.code)) {
                        e.next = 8
                        break
                      }
                      return (e.next = 7), Object(i.b)()
                    case 7:
                      t.$router.push('/login')
                    case 8:
                      return e.abrupt('return', d)
                    case 9:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r, n) {
            return e.apply(this, arguments)
          }
        })(),
        u = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/classList/v3'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        d = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/scheduleList'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        l = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/teachMethod'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        h = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/common/getReminder'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        p = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/signup/getSwitchOptions'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        f = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o =
                          '/v1/studyCenter/signup/getCurrentSchoolSignUpStatus'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        v = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/record/getCourseList'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        m = (function () {
          var e = Object(o.a)(
            Object(n.a)().mark(function e(t, r) {
              var o, s
              return Object(n.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = '/v1/studyCenter/record/getSchedule'),
                        (e.next = 3),
                        c(t, o, r)
                      )
                    case 3:
                      return (s = e.sent), e.abrupt('return', s)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })()
    },
    b65f: function (e, t, r) {
      var n = r('23e7'),
        o = r('b42e')
      n(
        {
          target: 'Math',
          stat: true,
        },
        { trunc: o }
      )
    },
    b89f: function (e, t, r) {
      'use strict'
      r('5cee')
    },
  },
])
