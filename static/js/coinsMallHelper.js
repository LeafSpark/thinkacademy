; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-38b4c118'],
  {
    '309f': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var a = n('c7eb'),
        s = n('1da1'),
        r = n('92e5'),
        i = n('90dc'),
        o = n('e39c'),
        c = n('02fc'),
        u = (function () {
          var e = Object(s.a)(
            Object(a.a)().mark(function e() {
              var t, n, s, u, l, d, f, p, m, b
              return Object(a.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (t = {}), (e.next = 3), Object(r.a)()
                    case 3:
                      return (
                        (n = e.sent),
                        (s = n.unifiedAccessToken),
                        (u = n.uid),
                        (e.next = 8),
                        Object(i.a)()
                      )
                    case 8:
                      return (
                        (l = e.sent),
                        (d = l.appName),
                        (f = l.appVersion),
                        (e.next = 13),
                        Object(c.f)()
                      )
                    case 13:
                      return (p = e.sent), (e.next = 16), Object(c.g)()
                    case 16:
                      return (
                        (m = e.sent),
                        (b = Object(o.k)()),
                        (t.Authorization = s),
                        (t.appName = d),
                        (t.uid = u),
                        (t.appVersion = f),
                        (t.platform = b),
                        (t.schoolCode = p),
                        (t.timezone = m),
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
    '4dc1': function (e, t, n) { },
    '51f0': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          { staticClass: 'page-wrapper' },
          [
            t('Toolbar'),
            t('Header', {
              attrs: {
                title: e.$t('coinsMall.title'),
                'show-goback': true,
                'back-url': '/courses',
                'reload-disabled': true,
              },
            }),
            t('div', { staticClass: 'coins-mall' }, [
              t('iframe', {
                staticClass: 'iframe',
                attrs: {
                  id: 'coins-mall',
                  src: e.coinsMallurl,
                },
              }),
            ]),
          ],
          1
        )
      },
        s = [],
        r = n('c7eb'),
        i = n('1da1'),
        o = (n('14d9'), n('dfa8')),
        c = n('309f'),
        u = {
          name: 'CoinsMall',
          components: { Toolbar: o.a },
          data: function () {
            return {
              coinsMallurl: '',
              params: null,
            }
          },
          mounted: function () {
            var e = this
            return Object(i.a)(
              Object(r.a)().mark(function t() {
                return Object(r.a)().wrap(function (t) {
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
            initRouteParams: function () {
              console.info(
                '对象函数 initRouteParams,filePath:renderer/views/h5/CoinsMall.vue'
              )
              var e = this.$route.query
              this.coinsMallurl = e.coinsMallurl
              this.backUrl = e.backUrl
            },
            sendMessageToH5: function (e) {
              console.info(
                '对象函数 sendMessageToH5(e)',
                e,
                'filePath:renderer/views/h5/CoinsMall.vue'
              )
              var t = e.data || {},
                n = t.type
              'common.init' == n &&
                document.getElementById('coins-mall').contentWindow.postMessage(
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
                '对象函数 bindEvent,filePath:renderer/views/h5/CoinsMall.vue'
              )
              window.addEventListener('message', this.sendMessageToH5, false)
            },
          },
          destroyed: function () {
            console.info(
              '对象函数 destroyed,filePath:renderer/views/h5/CoinsMall.vue'
            )
            window.removeEventListener('message', this.sendMessageToH5)
          },
        },
        l = u,
        d = (n('ae1e'), n('2877')),
        f = Object(d.a)(l, a, s, false, null, '734a8312', null)
      t.default = f.exports
    },
    ae1e: function (e, t, n) {
      'use strict'
      n('4dc1')
    },
  },
])
