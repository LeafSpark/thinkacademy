; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-09d4164c'],
  {
    2399: function (t, e, s) { },
    a053: function (t, e, s) {
      'use strict'
      s('2399')
    },
    b6c9: function (t, e, s) {
      'use strict'
      s.d(e, 'a', function () {
        return l
      })
      var n = s('d4ec'),
        o = s('bee2'),
        i = (s('99af'), s('d9e2'), s('8bbf')),
        r = s.n(i),
        a = s('3898'),
        c = s('d0db'),
        l = (function () {
          function t(e) {
            console.info(
              '函数申明 InteractionBase(app)',
              e,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(n.a)(this, t)
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
                    (c.a.send({
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
                  var e = r.a.extend(t),
                    s = this.createPropsData(),
                    n = new e({
                      i18n: a.b,
                      propsData: s,
                      store: this.store || {},
                    })
                  return n.$mount(), n
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
    c913: function (t, e, s) {
      'use strict'
      s.r(e)
      s.d(e, 'default', function () {
        return C
      })
      var n = s('5530'),
        o = s('d4ec'),
        i = s('bee2'),
        r = s('262e'),
        a = s('2caf'),
        c = s('b6c9'),
        l = function () {
          var t = this,
            e = t._self._c
          return t.options.ircMsg.beginTime
            ? e('transition', { attrs: { name: 'fade' } }, [
              e(
                'div',
                {
                  staticClass: 'class-rest',
                  attrs: { id: 'classRest' },
                },
                [
                  e('p', { staticClass: 'title' }, [
                    t._v(
                      ' ' +
                      t._s(t.$t('classroom.interactions.classRest.title')) +
                      ' '
                    ),
                  ]),
                  e('p', { staticClass: 'time-minuts' }, [
                    t._v(' ' + t._s(t.getMinutes) + ' '),
                  ]),
                  e('p', { staticClass: 'time-split' }),
                  e('p', { staticClass: 'time-seconds' }, [
                    t._v(' ' + t._s(t.getSeconds) + ' '),
                  ]),
                  e('audio', {
                    ref: 'classRestSound',
                    attrs: { src: s('db4c') },
                  }),
                ]
              ),
            ])
            : t._e()
        },
        m = [],
        u = s('0a4b'),
        f = s('d0db'),
        p = {
          props: {
            options: {
              type: Object,
              default: function () {
                return {
                  ircMsg: {},
                  roomMessage: { roomInfo: { commonOption: {} } },
                }
              },
            },
          },
          data: function () {
            return {
              leftTime: 0,
              timer: null,
            }
          },
          mounted: function () {
            this.getLeftTime()
            this.$nextTick(function () {
              u.nativeApi.elementDrag({
                dragDom: 'classRest',
                areaDom: 'interactionController',
              })
            })
            this.sendLogger('老师开启课间休息')
          },
          computed: {
            getMinutes: function () {
              console.info(
                '对象函数 getMinutes,filePath:renderer/components/Classroom/CommonInteractions/classRest/app.vue'
              )
              var t = Math.floor(this.leftTime / 60)
              return (t = t >= 10 ? t : '0' + t), t
            },
            getSeconds: function () {
              console.info(
                '对象函数 getSeconds,filePath:renderer/components/Classroom/CommonInteractions/classRest/app.vue'
              )
              var t = Math.floor(this.leftTime - 60 * this.getMinutes)
              return (
                (t = t >= 10 ? t : '0' + t),
                5 === this.leftTime && this.$refs.classRestSound.play(),
                t
              )
            },
          },
          methods: {
            getLeftTime: function () {
              if (
                (console.info(
                  '对象函数 getLeftTime,filePath:renderer/components/Classroom/CommonInteractions/classRest/app.vue'
                ),
                  isNaN(this.options.ircMsg.type))
              ) {
                var t = new Date().getTime()
                this.leftTime =
                  this.options.ircMsg.duration -
                  (this.options.roomMessage.roomInfo.nowTime -
                    this.options.ircMsg.beginTime) -
                  parseInt((t - window._requestBasicTime) / 1000)
              } else {
                this.leftTime = this.options.ircMsg.duration
              }
              this.startCountDown()
            },
            startCountDown: function () {
              var t = this
              if (
                (console.info(
                  '对象函数 startCountDown,filePath:renderer/components/Classroom/CommonInteractions/classRest/app.vue'
                ),
                  this.leftTime <= 1)
              ) {
                return (
                  console.info(
                    'if(this.leftTime <= 1)为true触发return,path: /renderer/components/Classroom/CommonInteractions/classRest/app.vue'
                  ),
                  (this.leftTime = 0),
                  void this.resetCountDown()
                )
              }
              this.leftTime > 1 &&
                ((this.leftTime = this.leftTime - 1),
                  (this.timer = setTimeout(function () {
                    t.startCountDown()
                  }, 1000)))
            },
            resetCountDown: function () {
              var t, e
              console.info(
                '对象函数 resetCountDown,filePath:renderer/components/Classroom/CommonInteractions/classRest/app.vue'
              )
              clearTimeout(this.timer)
              this.timer = null
              null === (t = this.$el) ||
                void 0 === t ||
                null === (e = t.parentNode) ||
                void 0 === e ||
                e.removeChild(this.$el)
            },
            sendLogger: function (t) {
              f.a.send({
                tag: 'classRest',
                content: {
                  msg: t,
                  interactType: 'classRest',
                },
              })
            },
          },
          beforeDestroy: function () {
            console.info(
              '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/classRest/app.vue'
            )
            this.sendLogger('老师结束课间休息')
          },
        },
        h = p,
        d = (s('a053'), s('2877')),
        v = Object(d.a)(h, l, m, false, null, '6659a5c0', null),
        g = v.exports,
        C = (function (t) {
          Object(r.a)(s, t)
          var e = Object(a.a)(s)
          function s() {
            var t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 ClassRest(opts)',
                n,
                'filePath:renderer/components/Classroom/CommonInteractions/classRest/index.js'
              ),
              Object(o.a)(this, s),
              (t = e.call(this, g)),
              (t.options = n),
              (t.dom = n.roomMessage.roomInfo.interactionController),
              t.initVmApp('课间休息'),
              t
            )
          }
          return (
            Object(i.a)(s, [
              {
                key: 'createPropsData',
                value: function () {
                  var t = {}
                  return Object(n.a)({ options: this.options }, t)
                },
              },
            ]),
            s
          )
        })(c.a)
    },
    db4c: function (t, e, s) {
      t.exports = s.p + 'static/media/class-rest.adaef843.mp3'
    },
  },
])
