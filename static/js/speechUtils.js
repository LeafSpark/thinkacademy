; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-21cb9dbc'],
  {
    '230e': function (e, n, t) {
      'use strict'
      var o = t('8bbf'),
        i = t.n(o),
        s = function () {
          var e = this,
            n = e._self._c
          return n(
            'transition',
            { on: { 'after-leave': e.handleAfterLeave } },
            [
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.visible,
                      expression: 'visible',
                    },
                  ],
                  staticClass: 'ne-tips',
                  attrs: { id: 'toast_' + e.uuid },
                },
                [
                  n('div', { staticClass: 'ne-tips__content' }, [
                    e.msg
                      ? n('p', {
                        staticClass: 'ne-tips__content--text',
                        domProps: { textContent: e._s(e.msg) },
                      })
                      : e._e(),
                  ]),
                ]
              ),
            ]
          )
        },
        a = [],
        c =
          (t('d3b7'),
            t('25f0'),
            t('a9e3'),
          {
            name: 'NeTips',
            data: function () {
              return { uuid: Math.random().toString(36).substring(3, 20) }
            },
            props: {
              msg: {
                type: [String, Number],
                default: '',
              },
              duration: {
                type: Number,
                default: 3000,
              },
              callback: Function,
              visible: Boolean,
            },
            beforeDestroy: function () {
              console.info(
                '对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
              )
              this.$_timer && clearTimeout(this.$_timer)
              this.visible && this.closeTips()
            },
            methods: {
              handleAfterLeave: function () {
                var e, n
                console.info(
                  '对象函数 handleAfterLeave,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                )
                this.$destroy(true)
                null === (e = this.$el) ||
                  void 0 === e ||
                  null === (n = e.parentNode) ||
                  void 0 === n ||
                  n.removeChild(this.$el)
                'function' == typeof this.callback && this.callback()
              },
              fire: function () {
                var e = this
                console.info(
                  '对象函数 fire,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                )
                this.$_timer && clearTimeout(this.$_timer)
                this.visible &&
                  this.duration > 0 &&
                  (this.$_timer = setTimeout(function () {
                    e.closeTips()
                  }, this.duration))
              },
              showTips: function () {
                console.info(
                  '对象函数 showTips,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                )
                this.visible = true
                this.fire()
              },
              closeTips: function () {
                console.info(
                  '对象函数 closeTips,filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/main.vue'
                )
                this.visible = false
                this.handleAfterLeave()
              },
            },
          }),
        l = c,
        r = (t('e80a'), t('2877')),
        m = Object(r.a)(l, s, a, false, null, '7ff65c7c', null),
        p = m.exports,
        u = function e(n) {
          var t = n.msg,
            o = void 0 === t ? '' : t,
            s = n.duration,
            a = void 0 === s ? 3000 : s,
            c = n.callback,
            l = void 0 === c ? null : c,
            r = n.parentNode,
            m =
              void 0 === r
                ? document.getElementById('collectiveSpeechContainer')
                : r
          console.info(
            '箭头函数 Tips(msg, duration, callback, parentNode)',
            o,
            a,
            l,
            m,
            'filePath:renderer/components/Classroom/CommonInteractions/collectiveSpeech/components/tips/index.js'
          )
          var u = e._instance,
            d = i.a.extend(p)
          return (
            (u = e._instance =
              new d({
                propsData: {
                  msg: o,
                  duration: a,
                  callback: l,
                },
              }).$mount()),
            u.$el.parentNode || m.appendChild(u.$el),
            (u.msg = o),
            (u.duration = a),
            (u.callback = l),
            u.showTips(),
            u
          )
        }
      u._instance = null
      u.close = function () {
        var e = i.a.extend(p)
        u._instance instanceof e &&
          u._instance.visible &&
          u._instance.closeTips()
      }
      u.tips = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3000,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null
        return u({
          msg: e,
          duration: n,
          callback: t,
        })
      }
      u.component = p
      n.a = u
    },
    e80a: function (e, n, t) {
      'use strict'
      t('f168')
    },
    f168: function (e, n, t) { },
  },
])
