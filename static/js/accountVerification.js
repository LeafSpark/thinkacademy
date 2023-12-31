; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-0b22331a'],
  {
    '3d55': function (e, t, a) { },
    5351: function (e, t, a) {
      'use strict'
      a.r(t)
      var i = function () {
        var e = this,
          t = e._self._c
        return t(
          'div',
          {
            staticClass: 'page-wrapper',
            attrs: { 'data-log': '设置密码页面' },
          },
          [
            e.isLoading
              ? t('Loading', { attrs: { 'margin-top': '200px' } })
              : t(
                'div',
                { staticClass: 'password-setting__template' },
                [
                  e.verificationCode
                    ? t('PasswordSetting', {
                      attrs: {
                        title: e.$t('account.modifyPassword.title'),
                        subTitle: e.$t('account.modifyPassword.subTitle'),
                        description: e.$t(
                          'account.modifyPassword.modifyText'
                        ),
                        placeholder: e.$t(
                          'account.modifyPassword.placeholder'
                        ),
                        areaCode: e.areaCode,
                        phoneNumber: e.phoneNumber,
                        emailInput: e.emailInput,
                      },
                    })
                    : t('AccountVerification', {
                      attrs: {
                        account: e.localUserInfo,
                        title: e.$t('account.accountVerification.title'),
                        subTitle: e.$t(
                          'account.accountVerification.subTitle'
                        ),
                      },
                      on: { 'validation-success': e.validationSuccess },
                    }),
                ],
                1
              ),
          ],
          1
        )
      },
        o = [],
        n = a('c7eb'),
        s = a('1da1'),
        r = (a('7db0'), a('d3b7'), a('bd12')),
        c = a('83a1'),
        l = a('43d0'),
        d = a('a898'),
        u = {
          data: function () {
            return {
              isLoading: true,
              areaCode: '',
              phoneNumber: '',
              verificationCode: '',
              localUserInfo: {},
              emailInput: '',
              passwordLoginType: this.$store.state.login.passwordLoginType,
              emailReg: this.$store.state.login.emailInfoCache.emailReg,
            }
          },
          components: {
            Loading: r.a,
            AccountVerification: c.a,
            PasswordSetting: l.a,
          },
          mounted: function () {
            var e = this,
              t = setTimeout(function () {
                clearTimeout(t)
                t = null
                e.isLoading = false
              }, 500)
            this.getLocalUserInfo()
            this.updateHeaderAttr()
          },
          methods: {
            updateHeaderAttr: function () {
              console.info(
                '对象函数 updateHeaderAttr,filePath:renderer/views/MyPasswordSettings.vue'
              )
              this.$bus.$emit('updateHeaderAttr', {
                title: this.$t('account.modifyPassword.title'),
                showGoback: true,
                reloadDisabled: true,
                backUrl: '/my-account',
              })
            },
            findPhoneReg: function (e) {
              console.info(
                '对象函数 findPhoneReg(value)',
                e,
                'filePath:renderer/views/MyPasswordSettings.vue'
              )
              var t = d.a.find(function (t) {
                return (
                  console.info(
                    '箭头函数 find(item)',
                    t,
                    'filePath:renderer/views/MyPasswordSettings.vue'
                  ),
                  t.value === e
                )
              }),
                a = t.reg
              return a
            },
            getLocalUserInfo: function () {
              var e = this
              return Object(s.a)(
                Object(n.a)().mark(function t() {
                  var a, i, o, s, r
                  return Object(n.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          console.info(
                            '对象函数 getLocalUserInfo,filePath:renderer/views/MyPasswordSettings.vue'
                          ),
                            (a = e.$route.query),
                            (i = a.emailOrMobileStatus),
                            (o = a.phoneNumber),
                            (s = a.email),
                            (r = a.countryCallingCode),
                            (e.localUserInfo =
                              1 == i
                                ? {
                                  areaCode: r,
                                  phoneNumber: o,
                                  phoneReg: e.findPhoneReg(r),
                                }
                                : {
                                  emailInput: s,
                                  emailReg: e.emailReg,
                                })
                        case 3:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            validationSuccess: function (e) {
              console.info(
                '对象函数 validationSuccess(val)',
                e,
                'filePath:renderer/views/MyPasswordSettings.vue'
              )
              this.areaCode = e.areaCode
              this.phoneNumber = e.phoneNumber
              this.verificationCode = e.verificationCode
              this.emailInput = e.emailInput
            },
          },
        },
        f = u,
        m = (a('5eb40'), a('2877')),
        p = Object(m.a)(f, i, o, false, null, 'f006d1ce', null)
      t.default = p.exports
    },
    '5eb40': function (e, t, a) {
      'use strict'
      a('3d55')
    },
    bd12: function (e, t, a) {
      'use strict'
      var i = function () {
        var e = this,
          t = e._self._c
        return e.show
          ? t(
            'div',
            {
              staticClass: 'loading-wrapper',
              class: e.className,
              style: e.loadingStyle,
            },
            [e._m(0)]
          )
          : e._e()
      },
        o = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'loading-contenter' }, [
              t('div', { staticClass: 'loading-logo' }, [
                t('img', { attrs: { src: a('c63e') } }),
              ]),
              t('div', { staticClass: 'loading-animation' }),
            ])
          },
        ],
        n = {
          name: 'Loading',
          props: {
            show: {
              default: true,
              type: Boolean,
            },
            size: {
              default: 'default',
              type: String,
              validator: function (e) {
                return (
                  console.info(
                    '对象函数 validator(value)',
                    e,
                    'filePath:renderer/components/Common/Loading.vue'
                  ),
                  -1 !== ['small', 'default'].indexOf(e)
                )
              },
            },
            marginTop: {
              default: '0',
              type: String,
            },
            marginBottom: {
              default: '0',
              type: String,
            },
          },
          computed: {
            className: function () {
              return (
                console.info(
                  '对象函数 className,filePath:renderer/components/Common/Loading.vue'
                ),
                'loading-'.concat(this.size)
              )
            },
            loadingStyle: function () {
              return (
                console.info(
                  '对象函数 loadingStyle,filePath:renderer/components/Common/Loading.vue'
                ),
                {
                  marginTop: this.marginTop,
                  marginBottom: this.marginBottom,
                }
              )
            },
          },
        },
        s = n,
        r = (a('f761'), a('2877')),
        c = Object(r.a)(s, i, o, false, null, '92d727e8', null)
      t.a = c.exports
    },
    c63e: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP/DL//DLv/BL//DLv/EL//DL//DLv/DL//CLv/DL//DL//CLf/DL//DL//DL//DLv/DL//DMv/DMGSQIxsAAAATdFJOUwDwcSTeYM1AwICojww0SLNSmhsrwQ8LAAABI0lEQVRYw+3X2a6DIBCAYbaBYXXh/d/1aE3UxtbjMhdtOv+l6BeiiYAQ5+tzLwhK2oGKjTW1Vn/HyQV8NzlzF8HRkfVV10BX38Ygg18FptICKB+70OAWDD4GNPIMaJentyAuv4l8FKx7IIjYdB7a3CdBArplWFoMUYHTiQhcZdDTgqt3yyCDdgTlkBmy1iLeBIcJ7Q6fB2txzpGCYwz+HuhWAR4BcR98LhwAU6vGlXIDaruZexBwAJy35dN2WtadNX++iESbiK8BDRYyULWXT0AvwTsxyCCDnwJaUhAjaCrQBFWSuNsESoytFiRpYzqVxc/kh0Mipaemj2tDHE62iWKCh7daDDLI4CeDhRoUPXSWFHysASpIUnAsK6QFp+Pjf3f8AVRMjNs7xw9TAAAAAElFTkSuQmCC'
    },
    ebc2: function (e, t, a) { },
    f761: function (e, t, a) {
      'use strict'
      a('ebc2')
    },
  },
])
