; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-728975b4'],
  {
    '0e7b': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = function () {
        var e = this,
          t = e._self._c
        return t('div', { staticClass: 'page-wrapper' }, [
          t('div', { staticClass: 'assignment' }, [
            t('iframe', {
              staticClass: 'iframe',
              attrs: {
                id: 'assignment',
                src: e.assignmentUrl,
              },
            }),
          ]),
        ])
      },
        s = [],
        r = n('c7eb'),
        i = n('1da1'),
        o = n('92e5'),
        c = n('90dc'),
        u = n('e39c'),
        m = n('02fc'),
        p = {
          name: 'Homework',
          components: {},
          data: function () {
            return {
              title: 'Homework',
              backUrl: '',
              assignmentUrl: '',
              params: {
                Authorization: '',
                appName: '',
                appVersion: '',
                platform: '',
                schoolCode: '',
              },
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
                        return (t.next = 2), e.initMessageParams()
                      case 2:
                        e.bindEvent(), e.initRouteParams()
                      case 4:
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
                '对象函数 updateHeaderAttr,filePath:renderer/views/h5/Assignment.vue'
              )
              this.$bus.$emit('updateHeaderAttr', {
                title: this.$t('courses.assignment.title'),
                showGoback: true,
                backUrl: this.backUrl,
              })
            },
            initMessageParams: function () {
              var e = this
              return Object(i.a)(
                Object(r.a)().mark(function t() {
                  var n, a, s, i, p, d, l
                  return Object(r.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 initMessageParams,filePath:renderer/views/h5/Assignment.vue'
                            ),
                            (t.next = 3),
                            Object(o.a)()
                          )
                        case 3:
                          return (
                            (n = t.sent),
                            (a = n.unifiedAccessToken),
                            (t.next = 7),
                            Object(c.a)()
                          )
                        case 7:
                          return (
                            (s = t.sent),
                            (i = s.appName),
                            (p = s.appVersion),
                            (t.next = 12),
                            Object(m.f)()
                          )
                        case 12:
                          ; (d = t.sent),
                            (l = Object(u.k)()),
                            (e.params.Authorization = a),
                            (e.params.appName = i),
                            (e.params.appVersion = p),
                            (e.params.platform = l),
                            (e.params.schoolCode = d)
                        case 19:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            initRouteParams: function () {
              console.info(
                '对象函数 initRouteParams,filePath:renderer/views/h5/Assignment.vue'
              )
              var e = this.$route.query
              this.assignmentUrl = e.assignmentUrl
              this.backUrl = e.backUrl
              this.updateHeaderAttr()
            },
            bindEvent: function () {
              var e = this
              console.info(
                '对象函数 bindEvent,filePath:renderer/views/h5/Assignment.vue'
              )
              window.addEventListener(
                'message',
                function (t) {
                  console.info(
                    '箭头函数 监听 message(e)',
                    t,
                    'filePath:renderer/views/h5/Assignment.vue'
                  )
                  var n = t.data || {},
                    a = n.type
                  'homework.init' == a &&
                    document
                      .getElementById('assignment')
                      .contentWindow.postMessage(
                        {
                          type: 'homework.init',
                          params: e.params,
                        },
                        '*'
                      )
                },
                false
              )
            },
          },
        },
        d = p,
        l = (n('2fe0'), n('2877')),
        f = Object(l.a)(d, a, s, false, null, '6e9c9ee8', null)
      t.default = f.exports
    },
    2097: function (e, t, n) { },
    '2fe0': function (e, t, n) {
      'use strict'
      n('2097')
    },
  },
])
