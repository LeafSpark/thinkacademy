; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-6616c64c'],
  {
    '1cc9': function (e, t, n) {
      'use strict'
      n.r(t)
      var s = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          { staticClass: 'page-wrapper' },
          [
            t('Toolbar'),
            t('div', { staticClass: 'lessonReport' }, [
              t('iframe', {
                staticClass: 'iframe',
                attrs: {
                  id: 'lessonReport',
                  src: e.lessonReportUrl,
                },
              }),
            ]),
          ],
          1
        )
      },
        r = [],
        o = n('c7eb'),
        a = n('1da1'),
        i = (n('14d9'), n('dfa8')),
        c = n('309f'),
        u = {
          name: 'LessonReport',
          components: { Toolbar: i.a },
          data: function () {
            return {
              backUrl: '',
              lessonReportUrl: '',
              params: null,
            }
          },
          mounted: function () {
            var e = this
            return Object(a.a)(
              Object(o.a)().mark(function t() {
                return Object(o.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), Object(c.a)()
                      case 2:
                        ; (e.params = t.sent), e.bindEvent(), e.initRouteParams()
                      case 5:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          methods: {
            updateHeaderAttr: function () {
              console.info(
                '对象函数 updateHeaderAttr,filePath:renderer/views/h5/LessonReport.vue'
              )
              this.$bus.$emit('updateHeaderAttr', {
                title: this.$t('courses.lessonReport.title'),
                showGoback: true,
                backUrl: this.backUrl,
              })
            },
            initRouteParams: function () {
              console.info(
                '对象函数 initRouteParams,filePath:renderer/views/h5/LessonReport.vue'
              )
              var e = this.$route.query
              this.lessonReportUrl = e.lessonReportUrl
              this.backUrl = e.backUrl
              this.updateHeaderAttr()
            },
            sendMessageToH5: function (e) {
              console.info(
                '对象函数 sendMessageToH5(e)',
                e,
                'filePath:renderer/views/h5/LessonReport.vue'
              )
              var t = e.data || {},
                n = t.type
              'common.init' == n &&
                document
                  .getElementById('lessonReport')
                  .contentWindow.postMessage(
                    {
                      type: 'common.init',
                      params: this.params,
                    },
                    '*'
                  )
              'common.backToClient' == n &&
                this.$router.push({ path: this.backUrl })
            },
            bindEvent: function () {
              console.info(
                '对象函数 bindEvent,filePath:renderer/views/h5/LessonReport.vue'
              )
              window.addEventListener('message', this.sendMessageToH5, false)
            },
          },
          watch: {
            '$i18n.locale': function (e) {
              console.info(
                '对象函数 undefined(newValue)',
                e,
                'filePath:renderer/views/h5/LessonReport.vue'
              )
              e && this.updateHeaderAttr()
            },
          },
          destroyed: function () {
            console.info(
              '对象函数 destroyed,filePath:renderer/views/h5/LessonReport.vue'
            )
            window.removeEventListener('message', this.sendMessageToH5)
          },
        },
        d = u,
        p = (n('e61a'), n('2877')),
        l = Object(p.a)(d, s, r, false, null, '618e394d', null)
      t.default = l.exports
    },
    '309f': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var s = n('c7eb'),
        r = n('1da1'),
        o = n('92e5'),
        a = n('90dc'),
        i = n('e39c'),
        c = n('02fc'),
        u = (function () {
          var e = Object(r.a)(
            Object(s.a)().mark(function e() {
              var t, n, r, u, d, p, l, f, h, b
              return Object(s.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (t = {}), (e.next = 3), Object(o.a)()
                    case 3:
                      return (
                        (n = e.sent),
                        (r = n.unifiedAccessToken),
                        (u = n.uid),
                        (e.next = 8),
                        Object(a.a)()
                      )
                    case 8:
                      return (
                        (d = e.sent),
                        (p = d.appName),
                        (l = d.appVersion),
                        (e.next = 13),
                        Object(c.f)()
                      )
                    case 13:
                      return (f = e.sent), (e.next = 16), Object(c.g)()
                    case 16:
                      return (
                        (h = e.sent),
                        (b = Object(i.k)()),
                        (t.Authorization = r),
                        (t.appName = p),
                        (t.uid = u),
                        (t.appVersion = l),
                        (t.platform = b),
                        (t.schoolCode = f),
                        (t.timezone = h),
                        e.abrupt('return', t)
                      )
                    case 26:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })()
    },
    b7f8: function (e, t, n) { },
    e61a: function (e, t, n) {
      'use strict'
      n('b7f8')
    },
  },
])
