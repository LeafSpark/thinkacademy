; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-2d0d67ce'],
  {
    7384: function (n, o, e) {
      'use strict'
      e.r(o)
      e.d(o, 'default', function () {
        return d
      })
      var t = e('5530'),
        a = e('d4ec'),
        r = e('bee2'),
        c = e('262e'),
        i = e('2caf'),
        s = e('b6c9'),
        l = e('b7b5'),
        d = (function (n) {
          Object(c.a)(e, n)
          var o = Object(i.a)(e)
          function e() {
            var n,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 RandomCall(opts)',
                t,
                'filePath:renderer/components/Classroom/CommonInteractions/randomCall/index.js'
              ),
              Object(a.a)(this, e),
              (n = o.call(this, l.a)),
              (n.options = t),
              (n.dom = t.roomMessage.roomInfo.interactionController),
              n.initVmApp('大班随机点名'),
              n
            )
          }
          return (
            Object(r.a)(e, [
              {
                key: 'createPropsData',
                value: function () {
                  var n = {}
                  return Object(t.a)(
                    {
                      msgType: 'random_call',
                      options: this.options,
                    },
                    n
                  )
                },
              },
            ]),
            e
          )
        })(s.a)
    },
  },
])
