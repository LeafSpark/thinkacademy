; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-f9fead60'],
  {
    '0a06a': function (e, o, n) {
      'use strict'
      n.d(o, 'g', function () {
        return i
      })
      n.d(o, 'j', function () {
        return r
      })
      n.d(o, 'k', function () {
        return s
      })
      n.d(o, 'i', function () {
        return a
      })
      n.d(o, 'c', function () {
        return c
      })
      n.d(o, 'b', function () {
        return d
      })
      n.d(o, 'a', function () {
        return l
      })
      n.d(o, 'f', function () {
        return u
      })
      n.d(o, 'h', function () {
        return f
      })
      n.d(o, 'd', function () {
        return m
      })
      n.d(o, 'e', function () {
        return p
      })
      n('b680')
      var t = n('2f5c'),
        i = function (e) {
          Object(t.a)('osta_login', { hw_user_id: ''.concat(e) })
        },
        r = function (e) {
          try {
            Object(t.a)('osta_update_new_version', {
              new_version: null === e || void 0 === e ? void 0 : e.newVersion,
              is_force_update: !(
                null === e ||
                void 0 === e ||
                !e.needForceUpgrade
              ),
            })
          } catch (o) {
            console.error('神策埋点报错:', o)
          }
        },
        s = function (e) {
          Object(t.a)('osta_update_skip', {
            new_version:
              (null === e || void 0 === e ? void 0 : e.newVersion) || '',
          })
        },
        a = function (e) {
          Object(t.a)('osta_update_install', {
            new_version: null === e || void 0 === e ? void 0 : e.newVersion,
          })
        },
        c = function (e) {
          Object(t.a)('osta_do_pre_test', { plan_id: ''.concat(e) })
        },
        d = function (e) {
          Object(t.a)('osta_do_homework', { plan_id: ''.concat(e) })
        },
        l = function (e) {
          Object(t.a)('osta_class_report', { plan_id: ''.concat(e) })
        },
        u = function (e) {
          Object(t.a)('osta_leraning_material', { plan_id: ''.concat(e) })
        },
        f = function (e) {
          try {
            Object(t.a)('osta_sign_in', {
              plan_id: ''.concat(e.planId),
              coins_count: e.coins,
              start_difference: new Date().getTime() - 1000 * e.time,
            })
          } catch (o) {
            console.error('神策埋点报错:', o)
          }
        },
        m = function (e, o, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
          try {
            Object(t.a)('osta_enter_classroom', {
              time_offset: i,
              plan_id: ''.concat(e.planId),
              class_type: 2 == e.subPlatformType ? 'small' : 'dual',
              class_id: ''.concat(e.classId),
              is_camera_ok: !o.camDetecting,
              is_mic_ok: !o.micDetecting,
              network_quality:
                0 === o.netDetecting
                  ? 'good'
                  : 1 === e.networkStatus
                    ? 'poor'
                    : 'unknown',
              courseware_localcache_exit: n.exit,
              courseware_download_size: n.exit ? 0 : +n.size.toFixed(2),
              courseware_download_time: n.exit
                ? 0
                : (n.endTime - n.startTime) / 1000,
              start_difference:
                new Date().getTime() + i - 1000 * n.courseStartTime,
            })
          } catch (r) {
            console.error('神策埋点报错:', r)
          }
        },
        p = function (e, o) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          try {
            Object(t.a)('osta_enter_playback', {
              plan_id: ''.concat(e.planId),
              class_id: ''.concat(e.classId),
              courseware_localcache_exit: o.exit,
              courseware_download_size: o.exit ? 0 : +o.size.toFixed(2),
              courseware_download_time: o.exit
                ? 0
                : (o.endTime - o.startTime) / 1000,
              end_difference: new Date().getTime() + n - 1000 * o.courseEndTime,
            })
          } catch (i) {
            console.error('神策埋点报错:', i)
          }
        }
    },
    2327: function (e, o, n) {
      'use strict'
      n('d718')
    },
    '2f5c': function (e, o, n) {
      'use strict'
      n.d(o, 'a', function () {
        return t
      })
      var t = function (e) {
        var o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        window.$sensors.track(e, o)
      }
    },
    3444: function (e, o, n) {
      'use strict'
      n('ee7c')
    },
    '4be1': function (e, o, n) {
      'use strict'
      n.r(o)
      n('a4d3')
      n('e01a')
      var t,
        i = function () {
          var e = this,
            o = e._self._c
          return o(
            'div',
            {
              staticClass: 'page-login',
              class: e.loginType,
              attrs: { 'data-log': '登录页' },
            },
            [
              o('Toolbar', {
                attrs: {
                  transparent: true,
                  fixed: true,
                  whiteButton: true,
                  disabledMaximize: true,
                },
              }),
              o('div', { staticClass: 'login-header' }, [
                o('div', { staticClass: 'title' }, [
                  e._v(' ' + e._s(e.loginTypeInfo.headerName) + ' '),
                ]),
                o('div', { staticClass: 'description' }, [
                  e._v(' ' + e._s(e.loginTypeInfo.description) + ' '),
                ]),
              ]),
              o(
                'div',
                { staticClass: 'login-contenter' },
                [
                  'password' === e.loginType
                    ? o('PasswordLogin', {
                      ref: 'PasswordLogin',
                      on: {
                        'login-success': e.handleLoginSuccess,
                        'update-password-login-type':
                          e.updatePasswordLoginType,
                      },
                    })
                    : e._e(),
                  'verificationCode' === e.loginType
                    ? o('VerificationCodeLogin', {
                      ref: 'VerificationCodeLogin',
                      attrs: { 'mobile-info': e.mobileInfo },
                      on: {
                        'login-success': e.handleLoginSuccess,
                        changeVerificationCodetype:
                          e.changeVerificationCodetype,
                        'update-password-login-type':
                          e.updatePasswordLoginType,
                      },
                    })
                    : e._e(),
                  o('div', { staticClass: 'login-type' }, [
                    o(
                      'span',
                      {
                        staticClass: 'type-name',
                        on: { click: e.handleLoginType },
                      },
                      [e._v(' ' + e._s(e.loginTypeInfo.footerName) + ' ')]
                    ),
                    'password' === e.loginType
                      ? o(
                        'span',
                        {
                          staticClass: 'forgot-password',
                          on: { click: e.handleForgotPassword },
                        },
                        [
                          e._v(
                            ' ' + e._s(e.loginTypeInfo.forgotPassword) + ' '
                          ),
                        ]
                      )
                      : e._e(),
                  ]),
                  o(
                    'div',
                    {
                      staticClass: 'login-footer',
                      class:
                        'verificationCode' === e.loginType
                          ? 'otp-login'
                          : 'password-login',
                    },
                    [o('Policies')],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        },
        r = [],
        s = n('c7eb'),
        a = n('1da1'),
        c = n('5530'),
        d = (n('14d9'), n('dfa8')),
        l =
          (n('b0c0'),
            n('99af'),
            n('fb6a'),
            function () {
              var e = this,
                o = e._self._c
              return o('div', { staticClass: 'login-content' }, [
                o('div', { staticClass: 'passowrd-login' }, [
                  o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'mobile' === e.loginType,
                          expression: "loginType === 'mobile'",
                        },
                      ],
                      staticClass: 'form-item form-item-phone',
                    },
                    [
                      o(
                        'a-dropdown',
                        {
                          attrs: {
                            trigger: ['click'],
                            getPopupContainer: e.getAreaCodeDropdownContainer,
                          },
                        },
                        [
                          o(
                            'div',
                            { staticClass: 'area-code-wrapper' },
                            [
                              o('span', { staticClass: 'current-code' }, [
                                e._v('+' + e._s(e.form.areaCode)),
                              ]),
                              o('a-icon', {
                                staticClass: 'icon-arrow-bottom',
                                attrs: { component: e.arrowBottomSvg },
                              }),
                            ],
                            1
                          ),
                          o(
                            'a-menu',
                            {
                              attrs: {
                                slot: 'overlay',
                                selectable: '',
                                'selected-keys': [e.form.countryCode],
                              },
                              slot: 'overlay',
                            },
                            e._l(e.areaCodeList, function (n) {
                              return o(
                                'a-menu-item',
                                {
                                  key: n.code,
                                  on: {
                                    click: function (o) {
                                      return e.handleAreaCodeItem(n)
                                    },
                                  },
                                },
                                [
                                  o('span', { staticClass: 'country-name' }, [
                                    e._v(' ' + e._s(n.name) + ' '),
                                  ]),
                                  o('span', { staticClass: 'area-code' }, [
                                    e._v(' ' + e._s('+'.concat(n.value)) + ' '),
                                  ]),
                                ]
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                      o('div', {
                        staticClass: 'login-dropdown',
                        attrs: { id: 'dropdown-area-code' },
                      }),
                      o('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.form.phoneNumber,
                            expression: 'form.phoneNumber',
                          },
                        ],
                        staticClass: 'input input-phone',
                        attrs: {
                          type: 'text',
                          maxlength: '20',
                          placeholder: e.$t('login.common.phoneNumber'),
                        },
                        domProps: { value: e.form.phoneNumber },
                        on: {
                          keyup: function (o) {
                            return !o.type.indexOf('key') &&
                              e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                              ? (console.info(
                                "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                              ),
                                null)
                              : e.handleSubmit.apply(null, arguments)
                          },
                          input: [
                            function (o) {
                              o.target.composing
                                ? console.info(
                                  'if($event.target.composing)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                                )
                                : e.$set(e.form, 'phoneNumber', o.target.value)
                            },
                            e.trimPhoneNumber,
                          ],
                          blur: e.handleUpdateMobileInfo,
                        },
                      }),
                    ],
                    1
                  ),
                  o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'studentId' === e.loginType,
                          expression: "loginType === 'studentId'",
                        },
                      ],
                      staticClass: 'form-item form-item-username',
                    },
                    [
                      o(
                        'a-dropdown',
                        {
                          attrs: {
                            trigger: ['click'],
                            getPopupContainer: e.getStudentIdDropdownContainer,
                          },
                        },
                        [
                          o('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.form.username,
                                expression: 'form.username',
                              },
                            ],
                            staticClass: 'input',
                            attrs: {
                              type: 'text',
                              maxlength: '100',
                              placeholder: e.$t('login.common.studentId'),
                            },
                            domProps: { value: e.form.username },
                            on: {
                              keyup: function (o) {
                                return !o.type.indexOf('key') &&
                                  e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                                  ? (console.info(
                                    "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                                  ),
                                    null)
                                  : e.handleSubmit.apply(null, arguments)
                              },
                              input: [
                                function (o) {
                                  o.target.composing
                                    ? console.info(
                                      'if($event.target.composing)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                                    )
                                    : e.$set(e.form, 'username', o.target.value)
                                },
                                e.trimUsername,
                              ],
                              blur: e.handleUsernameBlur,
                            },
                          }),
                          o(
                            'a-menu',
                            {
                              attrs: {
                                slot: 'overlay',
                                selectable: '',
                                'selected-keys': [e.form.username],
                              },
                              slot: 'overlay',
                            },
                            e._l(e.studentIdList, function (n) {
                              return o(
                                'a-menu-item',
                                {
                                  key: n,
                                  on: {
                                    click: function (o) {
                                      return e.handleStudentIdItem(n)
                                    },
                                  },
                                },
                                [e._v(' ' + e._s(n) + ' ')]
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                      o('div', {
                        directives: [
                          {
                            name: 'show',
                            rawName: 'v-show',
                            value: e.studentIdList.length,
                            expression: 'studentIdList.length',
                          },
                        ],
                        staticClass: 'login-dropdown',
                        attrs: { id: 'dropdown-student-id' },
                      }),
                    ],
                    1
                  ),
                  o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'email' === e.loginType,
                          expression: "loginType === 'email'",
                        },
                      ],
                      staticClass: 'form-item form-item-emailInput',
                    },
                    [
                      o('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.form.emailInput,
                            expression: 'form.emailInput',
                          },
                        ],
                        staticClass: 'input',
                        attrs: {
                          type: 'text',
                          maxlength: '100',
                          placeholder: e.$t('login.common.emailAddress'),
                        },
                        domProps: { value: e.form.emailInput },
                        on: {
                          keyup: function (o) {
                            return !o.type.indexOf('key') &&
                              e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                              ? (console.info(
                                "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                              ),
                                null)
                              : e.handleSubmit.apply(null, arguments)
                          },
                          input: [
                            function (o) {
                              o.target.composing
                                ? console.info(
                                  'if($event.target.composing)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                                )
                                : e.$set(e.form, 'emailInput', o.target.value)
                            },
                            e.trimEmail,
                          ],
                          blur: e.handleEmailBlur,
                        },
                      }),
                    ]
                  ),
                  o('div', { staticClass: 'form-item form-item-password' }, [
                    'checkbox' === e.passwordType
                      ? o('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.form.password,
                            expression: 'form.password',
                          },
                        ],
                        staticClass: 'input',
                        attrs: {
                          placeholder: e.$t('login.common.passwordPlaceholder'),
                          type: 'checkbox',
                        },
                        domProps: {
                          checked: Array.isArray(e.form.password)
                            ? e._i(e.form.password, null) > -1
                            : e.form.password,
                        },
                        on: {
                          keyup: function (o) {
                            return !o.type.indexOf('key') &&
                              e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                              ? (console.info(
                                "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                              ),
                                null)
                              : e.handleSubmit.apply(null, arguments)
                          },
                          input: e.trimPassword,
                          change: function (o) {
                            var n = e.form.password,
                              t = o.target,
                              i = !!t.checked
                            if (Array.isArray(n)) {
                              var s = e._i(n, null)
                              t.checked
                                ? s < 0 &&
                                e.$set(e.form, 'password', n.concat([null]))
                                : s > -1 &&
                                e.$set(
                                  e.form,
                                  'password',
                                  n.slice(0, s).concat(n.slice(s + 1))
                                )
                            } else {
                              e.$set(e.form, 'password', i)
                            }
                          },
                        },
                      })
                      : 'radio' === e.passwordType
                        ? o('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.form.password,
                              expression: 'form.password',
                            },
                          ],
                          staticClass: 'input',
                          attrs: {
                            placeholder: e.$t('login.common.passwordPlaceholder'),
                            type: 'radio',
                          },
                          domProps: { checked: e._q(e.form.password, null) },
                          on: {
                            keyup: function (o) {
                              return !o.type.indexOf('key') &&
                                e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                                ? (console.info(
                                  "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                                ),
                                  null)
                                : e.handleSubmit.apply(null, arguments)
                            },
                            input: e.trimPassword,
                            change: function (o) {
                              return e.$set(e.form, 'password', null)
                            },
                          },
                        })
                        : o('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.form.password,
                              expression: 'form.password',
                            },
                          ],
                          staticClass: 'input',
                          attrs: {
                            placeholder: e.$t('login.common.passwordPlaceholder'),
                            type: e.passwordType,
                          },
                          domProps: { value: e.form.password },
                          on: {
                            keyup: function (o) {
                              return !o.type.indexOf('key') &&
                                e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                                ? (console.info(
                                  "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                                ),
                                  null)
                                : e.handleSubmit.apply(null, arguments)
                            },
                            input: [
                              function (o) {
                                o.target.composing
                                  ? console.info(
                                    'if($event.target.composing)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                                  )
                                  : e.$set(e.form, 'password', o.target.value)
                              },
                              e.trimPassword,
                            ],
                          },
                        }),
                    o('span', {
                      class: {
                        'icon-eye': e.showPassword,
                        'icon-eye-hide': !e.showPassword,
                      },
                      on: { click: e.handleShowPassword },
                    }),
                    o('div', { staticClass: 'error-message' }, [
                      e._v(' ' + e._s(e.errorMessage) + ' '),
                    ]),
                  ]),
                  o(
                    'div',
                    { staticClass: 'form-button' },
                    [
                      o(
                        'a-button',
                        {
                          attrs: {
                            type: 'primary',
                            loading: e.loading,
                            shape: 'round',
                            size: 'large',
                            block: '',
                            disabled: e.disabledLoginButton,
                          },
                          on: { click: e.handleSubmit },
                        },
                        [e._v(' ' + e._s(e.$t('login.common.signIn')) + ' ')]
                      ),
                    ],
                    1
                  ),
                ]),
                o('div', { staticClass: 'check-login-type' }, [
                  o('span', { staticClass: 'login-with-title' }, [
                    e._v(e._s(e.$t('login.passwordPage.otherLoginType'))),
                  ]),
                  o(
                    'div',
                    { staticClass: 'login-with-content' },
                    e._l(e.currentLoginTypeList, function (n, t) {
                      return o('i', {
                        key: t,
                        staticClass: 'icon',
                        class: 'icon-'.concat(n),
                        on: {
                          click: function (o) {
                            return e.changeLoginType(n)
                          },
                        },
                      })
                    }),
                    0
                  ),
                ]),
              ])
            }),
        u = [],
        f =
          (n('3c65'),
            n('ac1f'),
            n('4d63'),
            n('25f0'),
            n('d3b7'),
            n('159b'),
            n('caad'),
            n('2532'),
            n('a15b'),
            n('4de4'),
            n('6f04')),
        m = n.n(f),
        p = n('ae3f'),
        h = n('a898'),
        g = n('02fc'),
        v = n('e39c'),
        w = n('72fe'),
        y = n.n(w),
        L = {
          name: 'PasswordLogin',
          data: function () {
            var e = this.$store.state.login.mobileInfoCache,
              o = this.$store.state.login.emailInfoCache,
              n = this.$store.state.login.passwordLoginType
            return {
              arrowBottomSvg: m.a,
              loginType: n,
              form: {
                countryCode: e.countryCode,
                areaCode: e.areaCode,
                phoneNumber: e.phoneNumber,
                phoneReg: e.phoneReg,
                username: '',
                password: '',
                emailInput: o.emailInput || '',
                emailReg: o.emailReg,
              },
              loading: false,
              errorMessage: '',
              getAreaCodeDropdownContainer: function () {
                return document.getElementById('dropdown-area-code')
              },
              getStudentIdDropdownContainer: function () {
                return document.getElementById('dropdown-student-id')
              },
              getEmailDropdownContainer: function () {
                return document.getElementById('dropdown-email-id')
              },
              showPassword: false,
              usernameReg: /^\d{12,14}$/,
              studentIdList: [],
              loginTypeList: ['mobile', 'studentId', 'email'],
              currentLoginTypeList: [],
            }
          },
          computed: {
            isMobileType: function () {
              return (
                console.info(
                  '对象函数 isMobileType,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                'mobile' === this.loginType
              )
            },
            areaCodeList: function () {
              return (
                console.info(
                  '对象函数 areaCodeList,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                this.$store.state.common.areaCodeList
              )
            },
            checkedStatus: function () {
              return (
                console.info(
                  '对象函数 checkedStatus,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                this.$store.state.login.checkedStatus
              )
            },
            disabledLoginButton: function () {
              return (
                console.info(
                  '对象函数 disabledLoginButton,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                'mobile' === this.loginType
                  ? (console.info(
                    "if(this.loginType === 'mobile')为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                  ),
                    !new RegExp(this.form.phoneReg).test(
                      this.form.phoneNumber
                    ) || this.form.password.length < 6)
                  : 'studentId' === this.loginType
                    ? (console.info(
                      "if(this.loginType === 'studentId')为true触发return,path: /renderer/components/Login/PasswordLogin.vue"
                    ),
                      !this.usernameReg.test(this.form.username) ||
                      this.form.password.length < 6)
                    : (console.info(
                      "if(this.loginType === 'studentId')为false,触发return,path: /renderer/components/Login/PasswordLogin.vue"
                    ),
                      !new RegExp(this.form.emailReg).test(
                        this.form.emailInput
                      ) || this.form.password.length < 6)
              )
            },
            passwordType: function () {
              return (
                console.info(
                  '对象函数 passwordType,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                this.showPassword ? 'text' : 'password'
              )
            },
          },
          mounted: function () {
            this.initAreaCode()
            this.queryStudentIdHistoryRecord()
            this.filterLoginTypeList()
          },
          methods: {
            trimPhoneNumber: function () {
              console.info(
                '对象函数 trimPhoneNumber,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.phoneNumber = Object(v.B)(this.form.phoneNumber)
            },
            trimUsername: function () {
              console.info(
                '对象函数 trimUsername,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.username = Object(v.B)(this.form.username)
            },
            trimEmail: function () {
              console.info(
                '对象函数 trimEmail,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.emailInput = Object(v.B)(this.form.emailInput)
            },
            trimPassword: function () {
              console.info(
                '对象函数 trimPassword,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.password = Object(v.B)(this.form.password)
            },
            validation: function () {
              return (
                console.info(
                  '对象函数 validation,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                this.checkedStatus
                  ? 'mobile' !== this.loginType || this.form.phoneNumber
                    ? 'studentId' !== this.loginType || this.form.username
                      ? 'email' !== this.loginType ||
                        new RegExp(this.form.emailReg).test(
                          this.form.emailInput
                        )
                        ? !!this.form.password ||
                        (console.info(
                          'if(!this.form.password)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                        ),
                          false)
                        : (console.info(
                          'if(!new RegExp(this.form.emailReg).test(this.form.emailInput))为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                        ),
                          this.showMessage(this.$t('login.common.emailReg')),
                          false)
                      : (console.info(
                        'if(!this.form.username)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                      ),
                        false)
                    : (console.info(
                      'if(!this.form.phoneNumber)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                    ),
                      false)
                  : (console.info(
                    'if(!this.checkedStatus)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                  ),
                    this.showMessage(
                      this.$t('account.accountVerification.confirmPolicy')
                    ),
                    false)
              )
            },
            initAreaCode: function () {
              var e = this
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n, t
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 initAreaCode,filePath:renderer/components/Login/PasswordLogin.vue'
                            ),
                              !e.form.areaCode)
                          ) {
                            o.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(_this.form.areaCode)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                            ),
                            o.abrupt('return')
                          )
                        case 4:
                          return (o.next = 6), Object(g.c)()
                        case 6:
                          ; (n = o.sent),
                            (t = 0),
                            h.a.forEach(function (e, o) {
                              e.code === n && (t = o)
                            }),
                            e.handleSelectAreaCode({ key: t })
                        case 10:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            handleSelectAreaCode: function (e) {
              var o = e.key
              console.info(
                '对象函数 handleSelectAreaCode(key)',
                o,
                'filePath:renderer/components/Login/PasswordLogin.vue'
              )
              var n = h.a[o]
              this.form.countryCode = n.code
              this.form.areaCode = n.value
              this.form.phoneReg = n.reg
            },
            handleAreaCodeItem: function (e) {
              console.info(
                '对象函数 handleAreaCodeItem(item)',
                e,
                'filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.countryCode = e.code
              this.form.areaCode = e.value
              this.form.phoneReg = e.reg
              this.handleUpdateMobileInfo()
            },
            handleStudentIdItem: function (e) {
              console.info(
                '对象函数 handleStudentIdItem(studentId)',
                e,
                'filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.username = e
            },
            showMessage: function (e) {
              var o = this
              console.info(
                '对象函数 showMessage(msg)',
                e,
                'filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.errorMessage = e
              clearTimeout(t)
              t = setTimeout(function () {
                o.errorMessage = ''
              }, 3000)
            },
            handleSubmit: function () {
              var e = this
              if (
                (console.info(
                  '对象函数 handleSubmit,filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                  this.validation())
              ) {
                this.loading = true
                var o = this.getMd5Password(this.form.password),
                  n = { password: o }
                'mobile' == this.loginType
                  ? ((n.type = 0),
                    (n.countryCallingCode = this.form.areaCode),
                    (n.accountName = this.form.phoneNumber))
                  : 'studentId' == this.loginType
                    ? ((n.type = 1), (n.accountName = this.form.username))
                    : ((n.type = 2), (n.accountName = this.form.emailInput))
                Object(p.d)(n)
                  .then(function (o) {
                    if (
                      (console.info(
                        '箭头函数 loginApi的then(res)',
                        o,
                        'filePath:renderer/components/Login/PasswordLogin.vue'
                      ),
                        (e.loading = false),
                        !o || 0 !== o.code)
                    ) {
                      return (
                        console.info(
                          'if(!res || res.code !== 0)为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                        ),
                        void e.showMessage(
                          o.msg ||
                          e.$t('common.systemErrorTryAgain') + ' ' + o.code
                        )
                      )
                    }
                    'studentId' == e.loginType &&
                      e.updateStudentIdHistoryRecord()
                    e.$emit('login-success', o.data)
                  })
                  .catch(function (o) {
                    console.info(
                      '箭头函数 catch(err)',
                      o,
                      'filePath:renderer/components/Login/PasswordLogin.vue'
                    )
                    e.loading = false
                    e.showMessage(e.$t('common.systemErrorTryAgain') + ' ' + o)
                    console.error(e.$t('common.systemErrorTryAgain'), o)
                  })
              } else {
                console.info(
                  'if(!this.validation())为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                )
              }
            },
            handleShowPassword: function () {
              console.info(
                '对象函数 handleShowPassword,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.showPassword = !this.showPassword
            },
            handleUpdateMobileInfo: function () {
              console.info(
                '对象函数 handleUpdateMobileInfo,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.$store.dispatch('login/setMobileInfoCache', {
                countryCode: this.form.countryCode,
                areaCode: this.form.areaCode,
                phoneReg: this.form.phoneReg,
                phoneNumber: this.form.phoneNumber,
              })
            },
            handleUsernameBlur: function () {
              console.info(
                '对象函数 handleUsernameBlur,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              var e = this.usernameReg.test(this.form.username)
              this.form.username &&
                !e &&
                this.showMessage(this.$t('login.common.inputInvalid'))
            },
            handleEmailBlur: function () {
              console.info(
                '对象函数 handleEmailBlur,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.$store.dispatch('login/setEmailInfoCache', {
                emailInput: this.form.emailInput,
              })
            },
            getMd5Password: function (e) {
              return (
                console.info(
                  '对象函数 getMd5Password(password)',
                  e,
                  'filePath:renderer/components/Login/PasswordLogin.vue'
                ),
                y()(y()(e).toString().toLowerCase()).toString().toLowerCase()
              )
            },
            updateStudentIdHistoryRecord: function () {
              var e = this
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n, t
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 updateStudentIdHistoryRecord,filePath:renderer/components/Login/PasswordLogin.vue'
                            ),
                              (n = JSON.parse(JSON.stringify(e.studentIdList))),
                              !n.includes(e.form.username))
                          ) {
                            o.next = 5
                            break
                          }
                          return (
                            console.info(
                              'if(studentIdList.includes(_this4.form.username))为true触发return,path: /renderer/components/Login/PasswordLogin.vue'
                            ),
                            o.abrupt('return')
                          )
                        case 5:
                          return (
                            n.unshift(e.form.username),
                            (t = n.join('|')),
                            (o.next = 9),
                            window.thinkApi.ipc.invoke(
                              'setStoreValue',
                              'studentIdHistoryRecord',
                              t
                            )
                          )
                        case 9:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            queryStudentIdHistoryRecord: function () {
              var e = this
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 queryStudentIdHistoryRecord,filePath:renderer/components/Login/PasswordLogin.vue'
                            ),
                            (o.next = 3),
                            window.thinkApi.ipc.invoke(
                              'getStoreValue',
                              'studentIdHistoryRecord'
                            )
                          )
                        case 3:
                          ; (n = o.sent),
                            (e.studentIdList = n ? n.split('|') : [])
                        case 5:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            changeLoginType: function (e) {
              console.info(
                '对象函数 changeLoginType(type)',
                e,
                'filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.form.phoneNumber = ''
              this.form.emailInput = ''
              this.form.username = ''
              this.form.password = ''
              this.loginType = e
              this.filterLoginTypeList()
            },
            filterLoginTypeList: function () {
              var e = this
              console.info(
                '对象函数 filterLoginTypeList,filePath:renderer/components/Login/PasswordLogin.vue'
              )
              this.$emit('update-password-login-type', this.loginType)
              this.currentLoginTypeList = this.loginTypeList.filter(function (
                o
              ) {
                return o != e.loginType
              })
            },
          },
        },
        C = L,
        b = (n('2327'), n('2877')),
        P = Object(b.a)(C, l, u, false, null, '97f47f14', null),
        k = P.exports,
        _ = function () {
          var e = this,
            o = e._self._c
          return o('div', { staticClass: 'verification-code-login' }, [
            o('div', { staticClass: 'login-type-tab' }, [
              o(
                'div',
                {
                  staticClass: 'item',
                  class: { active: 'phoneNumber' === e.loginType },
                  on: {
                    click: function (o) {
                      return e.changeLoginType('phoneNumber')
                    },
                  },
                },
                [e._v(' ' + e._s(e.$t('login.common.phoneNumber')) + ' ')]
              ),
              o(
                'div',
                {
                  staticClass: 'item',
                  class: { active: 'email' === e.loginType },
                  on: {
                    click: function (o) {
                      return e.changeLoginType('email')
                    },
                  },
                },
                [e._v(' ' + e._s(e.$t('login.common.email')) + ' ')]
              ),
            ]),
            o(
              'div',
              {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: 'phoneNumber' === e.loginType,
                    expression: "loginType === 'phoneNumber'",
                  },
                ],
                staticClass: 'form-item form-item-phone',
              },
              [
                o(
                  'a-dropdown',
                  {
                    attrs: {
                      trigger: ['click'],
                      getPopupContainer: e.getDropdownContainer,
                    },
                  },
                  [
                    o(
                      'div',
                      { staticClass: 'area-code-wrapper' },
                      [
                        o('span', { staticClass: 'current-code' }, [
                          e._v('+' + e._s(e.form.areaCode)),
                        ]),
                        o('a-icon', {
                          staticClass: 'icon-arrow-bottom',
                          attrs: { component: e.arrowBottomSvg },
                        }),
                      ],
                      1
                    ),
                    o(
                      'a-menu',
                      {
                        attrs: {
                          slot: 'overlay',
                          selectable: '',
                          'selected-keys': [e.form.countryCode],
                        },
                        slot: 'overlay',
                      },
                      e._l(e.areaCodeList, function (n) {
                        return o(
                          'a-menu-item',
                          {
                            key: n.code,
                            on: {
                              click: function (o) {
                                return e.handleMenuItem(n)
                              },
                            },
                          },
                          [
                            o('span', { staticClass: 'country-name' }, [
                              e._v(' ' + e._s(n.name) + ' '),
                            ]),
                            o('span', { staticClass: 'area-code' }, [
                              e._v(' ' + e._s('+'.concat(n.value)) + ' '),
                            ]),
                          ]
                        )
                      }),
                      1
                    ),
                  ],
                  1
                ),
                o('div', {
                  staticClass: 'login-dropdown',
                  attrs: { id: 'dropdown-area-code' },
                }),
                o('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.form.phoneNumber,
                      expression: 'form.phoneNumber',
                    },
                  ],
                  staticClass: 'input input-phone',
                  attrs: {
                    type: 'text',
                    maxlength: '20',
                    placeholder: e.$t('login.common.phoneNumber'),
                  },
                  domProps: { value: e.form.phoneNumber },
                  on: {
                    keyup: function (o) {
                      return !o.type.indexOf('key') &&
                        e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                        ? (console.info(
                          "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue"
                        ),
                          null)
                        : e.handleSubmit.apply(null, arguments)
                    },
                    input: [
                      function (o) {
                        o.target.composing
                          ? console.info(
                            'if($event.target.composing)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                          )
                          : e.$set(e.form, 'phoneNumber', o.target.value)
                      },
                      e.trimPhoneNumber,
                    ],
                    blur: e.handleUpdateMobileInfo,
                  },
                }),
              ],
              1
            ),
            o(
              'div',
              {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: 'email' === e.loginType,
                    expression: "loginType === 'email'",
                  },
                ],
                staticClass: 'form-item form-item-emailInput',
              },
              [
                o(
                  'a-dropdown',
                  {
                    attrs: {
                      trigger: ['click'],
                      getPopupContainer: e.getEmailDropdownContainer,
                    },
                  },
                  [
                    o('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: e.form.emailInput,
                          expression: 'form.emailInput',
                        },
                      ],
                      staticClass: 'input',
                      attrs: {
                        type: 'text',
                        maxlength: '100',
                        placeholder: e.$t('login.common.emailAddress'),
                      },
                      domProps: { value: e.form.emailInput },
                      on: {
                        keyup: function (o) {
                          return !o.type.indexOf('key') &&
                            e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                            ? (console.info(
                              "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue"
                            ),
                              null)
                            : e.handleSubmit.apply(null, arguments)
                        },
                        input: [
                          function (o) {
                            o.target.composing
                              ? console.info(
                                'if($event.target.composing)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                              )
                              : e.$set(e.form, 'emailInput', o.target.value)
                          },
                          e.trimEmail,
                        ],
                        blur: e.handleEmailBlur,
                      },
                    }),
                    o(
                      'a-menu',
                      {
                        attrs: {
                          slot: 'overlay',
                          selectable: '',
                          'selected-keys': [e.form.emailInput],
                        },
                        slot: 'overlay',
                      },
                      e._l(e.cacheEmailList, function (n) {
                        return o(
                          'a-menu-item',
                          {
                            key: n,
                            on: {
                              click: function (o) {
                                return e.handleStudentIdItem(n)
                              },
                            },
                          },
                          [e._v(' ' + e._s(n) + ' ')]
                        )
                      }),
                      1
                    ),
                  ],
                  1
                ),
                o('div', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.cacheEmailList.length,
                      expression: 'cacheEmailList.length',
                    },
                  ],
                  staticClass: 'login-dropdown',
                  attrs: { id: 'dropdown-email-id' },
                }),
              ],
              1
            ),
            o('div', { staticClass: 'form-item form-item-verification-code' }, [
              o('div', { staticClass: 'send-info' }, [
                e.showCountdown
                  ? o('div', { staticClass: 'countdown' }, [
                    e._v(e._s(e.countdownText)),
                  ])
                  : e._e(),
                o(
                  'div',
                  {
                    staticClass: 'send-button',
                    class: [{ disabled: e.disabledSendButton }],
                    on: { click: e.handleSendButton },
                  },
                  [e._v(' ' + e._s(e.sendButtonText) + ' ')]
                ),
              ]),
              o('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: e.form.verificationCode,
                    expression: 'form.verificationCode',
                  },
                ],
                staticClass: 'input',
                attrs: {
                  type: 'text',
                  maxlength: '6',
                  placeholder: e.$t('login.common.verificationCodePlaceholder'),
                },
                domProps: { value: e.form.verificationCode },
                on: {
                  keyup: function (o) {
                    return !o.type.indexOf('key') &&
                      e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                      ? (console.info(
                        "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue"
                      ),
                        null)
                      : e.handleSubmit.apply(null, arguments)
                  },
                  input: [
                    function (o) {
                      o.target.composing
                        ? console.info(
                          'if($event.target.composing)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                        )
                        : e.$set(e.form, 'verificationCode', o.target.value)
                    },
                    e.trimVerificationCode,
                  ],
                },
              }),
              o('div', { staticClass: 'error-message' }, [
                e._v(' ' + e._s(e.errorMessage) + ' '),
              ]),
            ]),
            o(
              'div',
              { staticClass: 'form-button' },
              [
                o(
                  'a-button',
                  {
                    attrs: {
                      type: 'primary',
                      loading: e.loading,
                      shape: 'round',
                      size: 'large',
                      block: '',
                      disabled: e.disabledLoginButton,
                    },
                    on: { click: e.handleSubmit },
                  },
                  [e._v(' ' + e._s(e.$t('login.common.signIn')) + ' ')]
                ),
              ],
              1
            ),
          ])
        },
        I = [],
        T = null,
        $ = null,
        x = {
          name: 'VerificationCodeLogin',
          data: function () {
            var e = this.$store.state.login.mobileInfoCache,
              o = this.$store.state.login.emailInfoCache,
              n = e.phoneReg || '',
              t = ''
            return (
              n && n.test(e.phoneNumber) && (t = e.phoneNumber),
              {
                arrowBottomSvg: m.a,
                loading: false,
                loginType: 'phoneNumber',
                errorMessage: '',
                isSending: false,
                isSendVerificationCode: false,
                countdownNum: 0,
                form: {
                  countryCode: e.countryCode,
                  areaCode: e.areaCode,
                  phoneNumber: t,
                  phoneReg: e.phoneReg,
                  verificationCode: '',
                  emailInput: o.emailInput || '',
                  emailReg: o.emailReg,
                },
                cacheEmailList: [],
                getDropdownContainer: function () {
                  return document.getElementById('dropdown-area-code')
                },
                getEmailDropdownContainer: function () {
                  return document.getElementById('dropdown-email-id')
                },
              }
            )
          },
          computed: {
            checkedStatus: function () {
              return (
                console.info(
                  '对象函数 checkedStatus,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                this.$store.state.login.checkedStatus
              )
            },
            areaCodeList: function () {
              return (
                console.info(
                  '对象函数 areaCodeList,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                this.$store.state.common.areaCodeList
              )
            },
            countdownText: function () {
              return (
                console.info(
                  '对象函数 countdownText,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                ''.concat(this.countdownNum, 's')
              )
            },
            sendButtonText: function () {
              console.info(
                '对象函数 sendButtonText,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              var e = this.$t('login.verificationCodePage.reSend'),
                o = this.$t('login.verificationCodePage.send')
              return this.isSendVerificationCode
                ? (console.info(
                  'if(this.isSendVerificationCode)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  e)
                : (console.info(
                  'if(this.isSendVerificationCode)为false,触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  o)
            },
            showCountdown: function () {
              return (
                console.info(
                  '对象函数 showCountdown,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                this.countdownNum > 0
                  ? (console.info(
                    'if(this.countdownNum > 0)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                  ),
                    true)
                  : (console.info(
                    'if(this.countdownNum > 0)为false,触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                  ),
                    false)
              )
            },
            disabledSendButton: function () {
              return (
                console.info(
                  '对象函数 disabledSendButton,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                this.isSending ||
                this.countdownNum > 0 ||
                !this.testCodeValidate()
              )
            },
            disabledLoginButton: function () {
              return (
                console.info(
                  '对象函数 disabledLoginButton,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                !this.testCodeValidate() || !this.form.verificationCode
              )
            },
          },
          mounted: function () {
            this.initAreaCode()
            this.queryEmailHistoryRecord()
          },
          methods: {
            trimPhoneNumber: function () {
              console.info(
                '对象函数 trimPhoneNumber,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.form.phoneNumber = Object(v.B)(this.form.phoneNumber)
            },
            trimVerificationCode: function () {
              console.info(
                '对象函数 trimVerificationCode,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.form.verificationCode = Object(v.B)(
                this.form.verificationCode
              )
            },
            testCodeValidate: function () {
              return (
                console.info(
                  '对象函数 testCodeValidate,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                'phoneNumber' == this.loginType
                  ? new RegExp(this.form.phoneReg).test(this.form.phoneNumber)
                  : new RegExp(this.form.emailReg).test(this.form.emailInput)
              )
            },
            validation: function () {
              if (
                (console.info(
                  '对象函数 validation,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  'email' == this.loginType)
              ) {
                if (!this.form.emailInput && !this.form.verificationCode) {
                  return (
                    console.info(
                      'if(!this.form.emailInput && !this.form.verificationCode)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                    ),
                    this.showMessage(
                      this.$t(
                        'account.accountVerification.validationEmailNotices[0]'
                      )
                    ),
                    false
                  )
                }
                if (!this.form.emailInput) {
                  return (
                    console.info(
                      'if(!this.form.emailInput)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                    ),
                    this.showMessage(
                      this.$t(
                        'account.accountVerification.validationEmailNotices[1]'
                      )
                    ),
                    false
                  )
                }
                if (
                  !new RegExp(this.form.emailReg).test(this.form.emailInput)
                ) {
                  return (
                    console.info(
                      'if(!new RegExp(this.form.emailReg).test(this.form.emailInput))为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                    ),
                    this.showMessage(
                      this.$t(
                        'account.accountVerification.validationEmailNotices[2]'
                      )
                    ),
                    false
                  )
                }
              } else {
                if (!this.form.phoneNumber && !this.form.verificationCode) {
                  return (
                    console.info(
                      'if(!this.form.phoneNumber && !this.form.verificationCode)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                    ),
                    this.showMessage(
                      this.$t(
                        'account.accountVerification.validationNotices[0]'
                      )
                    ),
                    false
                  )
                }
                if (!this.form.phoneNumber) {
                  return (
                    console.info(
                      'if(!this.form.phoneNumber)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                    ),
                    this.showMessage(
                      this.$t(
                        'account.accountVerification.validationNotices[1]'
                      )
                    ),
                    false
                  )
                }
                if (
                  !new RegExp(this.form.phoneReg).test(this.form.phoneNumber)
                ) {
                  return (
                    console.info(
                      'if(!new RegExp(this.form.phoneReg).test(this.form.phoneNumber))为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                    ),
                    this.showMessage(
                      this.$t(
                        'account.accountVerification.validationNotices[2]'
                      )
                    ),
                    false
                  )
                }
              }
              return this.checkedStatus
                ? !!this.form.verificationCode ||
                (console.info(
                  'if(!this.form.verificationCode)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  this.showMessage(
                    this.$t(
                      'login.verificationCodePage.verificationTips.enterVerificationCode'
                    )
                  ),
                  false)
                : (console.info(
                  'if(!this.checkedStatus)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  this.showMessage(
                    this.$t(
                      'login.verificationCodePage.verificationTips.confirmPolicy'
                    )
                  ),
                  false)
            },
            validateEmail: function () {
              return (
                console.info(
                  '对象函数 validateEmail,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                new RegExp(this.form.emailReg).test(this.form.emailInput)
              )
            },
            showMessage: function (e) {
              var o = this
              console.info(
                '对象函数 showMessage(msg)',
                e,
                'filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.errorMessage = e
              clearTimeout(T)
              T = setTimeout(function () {
                o.errorMessage = ''
              }, 3000)
            },
            countdown: function () {
              var e = this
              console.info(
                '对象函数 countdown,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              0 === this.countdownNum && (this.countdownNum = 60)
              clearTimeout($)
              $ = setTimeout(function () {
                e.countdownNum--
                0 !== e.countdownNum
                  ? e.countdown()
                  : console.info(
                    'if(_this2.countdownNum === 0)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                  )
              }, 1000)
            },
            initAreaCode: function () {
              var e = this
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n, t
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 initAreaCode,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                            ),
                              !e.form.areaCode)
                          ) {
                            o.next = 4
                            break
                          }
                          return (
                            console.info(
                              'if(_this3.form.areaCode)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                            ),
                            o.abrupt('return')
                          )
                        case 4:
                          return (o.next = 6), Object(g.c)()
                        case 6:
                          ; (n = o.sent),
                            'tmc' === n && (n = 'cn'),
                            (t = 0),
                            h.a.forEach(function (e, o) {
                              e.code === n && (t = o)
                            }),
                            e.handleSelectAreaCode({ key: t })
                        case 11:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            handleSelectAreaCode: function (e) {
              var o = e.key
              console.info(
                '对象函数 handleSelectAreaCode(key)',
                o,
                'filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              var n = h.a[o]
              this.form.countryCode = n.code
              this.form.areaCode = n.value
              this.form.phoneReg = n.reg
            },
            handleMenuItem: function (e) {
              console.info(
                '对象函数 handleMenuItem(item)',
                e,
                'filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.form.countryCode = e.code
              this.form.areaCode = e.value
              this.form.phoneReg = e.reg
              this.handleUpdateMobileInfo()
            },
            handleUpdateMobileInfo: function () {
              console.info(
                '对象函数 handleUpdateMobileInfo,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.$store.dispatch('login/setMobileInfoCache', {
                countryCode: this.form.countryCode,
                areaCode: this.form.areaCode,
                phoneReg: this.form.phoneReg,
                phoneNumber: this.form.phoneNumber,
              })
            },
            handleSendButton: function () {
              var e = this
              if (
                (console.info(
                  '对象函数 handleSendButton,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  this.disabledSendButton)
              ) {
                console.info(
                  'if(this.disabledSendButton)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                )
              } else {
                if ('email' == this.loginType && !this.validateEmail()) {
                  return (
                    console.info(
                      "if(this.loginType == 'email' && !this.validateEmail())为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue"
                    ),
                    this.showMessage(this.$t('login.common.emailReg')),
                    false
                  )
                }
                this.isSending = true
                var o =
                  'phoneNumber' == this.loginType
                    ? {
                      contactInfo: this.form.phoneNumber,
                      countryCallingCode: this.form.areaCode,
                      type: 0,
                      scene: 1,
                    }
                    : {
                      contactInfo: this.form.emailInput,
                      type: 2,
                      scene: 1,
                    }
                Object(p.i)(o)
                  .then(function (o) {
                    if (
                      (console.info(
                        '箭头函数 sendVerificationCodeApi的then(res)',
                        o,
                        'filePath:renderer/components/Login/VerificationCodeLogin.vue'
                      ),
                        (e.isSending = false),
                        !o || 0 !== o.code)
                    ) {
                      return (
                        console.info(
                          'if(!res || res.code !== 0)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                        ),
                        void e.showMessage(
                          o.msg ||
                          e.$t(
                            'account.accountVerification.sendFailedTryAgain'
                          )
                        )
                      )
                    }
                    e.isSendVerificationCode = true
                    e.countdown()
                    e.$Message.info(o.msg)
                  })
                  .catch(function (o) {
                    console.info(
                      '箭头函数 catch(err)',
                      o,
                      'filePath:renderer/components/Login/VerificationCodeLogin.vue'
                    )
                    e.isSending = false
                    e.showMessage(e.$t('common.systemErrorTryAgain') + ' ' + o)
                    console.error('发送验证码接口报错', o)
                  })
              }
            },
            handleSubmit: function () {
              var e = this
              if (
                (console.info(
                  '对象函数 handleSubmit,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                ),
                  this.validation())
              ) {
                this.loading = true
                var o =
                  'phoneNumber' == this.loginType
                    ? {
                      phone: this.form.phoneNumber,
                      countryCallingCode: this.form.areaCode,
                      verificationCode: this.form.verificationCode,
                      type: 0,
                    }
                    : {
                      accountName: this.form.emailInput,
                      verificationCode: this.form.verificationCode,
                      type: 2,
                    }
                this.loading &&
                  Object(p.h)(o)
                    .then(function (o) {
                      if (
                        (console.info(
                          '箭头函数 quickLoginApi的then(res)',
                          o,
                          'filePath:renderer/components/Login/VerificationCodeLogin.vue'
                        ),
                          (e.loading = false),
                          !o || 0 !== o.code)
                      ) {
                        return (
                          console.info(
                            'if(!res || res.code !== 0)为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                          ),
                          void e.showMessage(o.msg)
                        )
                      }
                      'email' == e.loginType && e.updateEmailHistoryRecord()
                      e.$emit('login-success', o.data, e.form)
                    })
                    .catch(function (o) {
                      console.info(
                        '箭头函数 catch(err)',
                        o,
                        'filePath:renderer/components/Login/VerificationCodeLogin.vue'
                      )
                      e.loading = false
                      e.showMessage(
                        e.$t('common.systemErrorTryAgain') + ' ' + o
                      )
                      console.error('登录接口报错', o)
                    })
              } else {
                console.info(
                  'if(!this.validation())为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                )
              }
            },
            changeLoginType: function (e) {
              console.info(
                '对象函数 changeLoginType(type)',
                e,
                'filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.loginType = e
              this.form.password = ''
              this.$emit('changeVerificationCodetype', e)
            },
            trimEmail: function () {
              console.info(
                '对象函数 trimEmail,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.form.emailInput = Object(v.B)(this.form.emailInput)
            },
            handleEmailBlur: function () {
              console.info(
                '对象函数 handleEmailBlur,filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.$store.dispatch('login/setEmailInfoCache', {
                emailInput: this.form.emailInput,
              })
            },
            handleStudentIdItem: function (e) {
              console.info(
                '对象函数 handleStudentIdItem(studentId)',
                e,
                'filePath:renderer/components/Login/VerificationCodeLogin.vue'
              )
              this.form.emailInput = e
            },
            updateEmailHistoryRecord: function () {
              var e = this
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n, t
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 updateEmailHistoryRecord,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                            ),
                              (n = JSON.parse(JSON.stringify(e.cacheEmailList))),
                              !n.includes(e.form.emailInput))
                          ) {
                            o.next = 5
                            break
                          }
                          return (
                            console.info(
                              'if(cacheEmailList.includes(_this6.form.emailInput))为true触发return,path: /renderer/components/Login/VerificationCodeLogin.vue'
                            ),
                            o.abrupt('return')
                          )
                        case 5:
                          return (
                            n.unshift(e.form.emailInput),
                            (t = n.join('|')),
                            (o.next = 9),
                            window.thinkApi.ipc.invoke(
                              'setStoreValue',
                              'emailHistoryRecord',
                              t
                            )
                          )
                        case 9:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
            queryEmailHistoryRecord: function () {
              var e = this
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 queryEmailHistoryRecord,filePath:renderer/components/Login/VerificationCodeLogin.vue'
                            ),
                            (o.next = 3),
                            window.thinkApi.ipc.invoke(
                              'getStoreValue',
                              'emailHistoryRecord'
                            )
                          )
                        case 3:
                          ; (n = o.sent),
                            (e.cacheEmailList = n ? n.split('|') : [])
                        case 5:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
          },
        },
        N = x,
        S = (n('3444'), Object(b.a)(N, _, I, false, null, '45485e2f', null)),
        V = S.exports,
        O = function () {
          var e = this,
            o = e._self._c
          return o('div', { staticClass: 'policies-wrapper' }, [
            o(
              'div',
              { staticClass: 'policies' },
              [
                o('a-checkbox', {
                  staticClass: 'skin-white-checkbox policies-checkbox',
                  on: { change: e.handleChange },
                  model: {
                    value: e.checked,
                    callback: function (o) {
                      e.checked = o
                    },
                    expression: 'checked',
                  },
                }),
                e._v(' ' + e._s(e.policyDesc) + ' '),
                o(
                  'span',
                  {
                    on: {
                      click: function (o) {
                        return e.handleJumpPage('UserAgreement')
                      },
                    },
                  },
                  [e._v(e._s(e.temsOfUse))]
                ),
                'hk' !== e.local
                  ? o('label', [e._v(e._s(e.policyAnd))])
                  : o('label', [e._v(' \u3001')]),
                o(
                  'span',
                  {
                    on: {
                      click: function (o) {
                        return e.handleJumpPage('PrivacyAgreement')
                      },
                    },
                  },
                  [e._v(e._s(e.privacyPolicy))]
                ),
                'hk' == e.local
                  ? o('label', [e._v(e._s(e.policyAnd))])
                  : e._e(),
                'hk' == e.local
                  ? o(
                    'span',
                    {
                      on: {
                        click: function (o) {
                          return e.handleJumpPage('ChildPrivacy')
                        },
                      },
                    },
                    [e._v(e._s(e.childPolicy))]
                  )
                  : e._e(),
              ],
              1
            ),
          ])
        },
        E = [],
        j = n('0a4b'),
        R = {
          name: 'Policies',
          data: function () {
            return {
              checked: this.$store.state.login.checkedStatus,
              policyDesc: this.$t('login.policyInfo.desc'),
              policyAnd: this.$t('login.policyInfo.and'),
              temsOfUse: this.$t('setting.aboutUs.policyTips.temsOfUse'),
              privacyPolicy: this.$t(
                'setting.aboutUs.policyTips.privacyPolicy'
              ),
              internetSafetyPolicy: this.$t(
                'setting.aboutUs.policyTips.internetSafetyPolicy'
              ),
              childPolicy: this.$t('setting.aboutUs.policyTips.childPrivacy'),
              local: '',
            }
          },
          methods: {
            handleChange: function () {
              console.info(
                '对象函数 handleChange,filePath:renderer/components/Login/Policies.vue'
              )
              this.$store.dispatch('login/setCheckedStatus', this.checked)
            },
            handleJumpPage: function (e) {
              return Object(a.a)(
                Object(s.a)().mark(function o() {
                  var n, t
                  return Object(s.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 handleJumpPage(type)',
                              e,
                              'filePath:renderer/components/Login/Policies.vue'
                            ),
                            (o.next = 3),
                            Object(g.e)()
                          )
                        case 3:
                          ; (n = o.sent),
                            (t = {
                              UserAgreement: ''.concat(
                                n.officewebsiteDomain,
                                '/terms-of-use'
                              ),
                              PrivacyAgreement: ''.concat(
                                n.officewebsiteDomain,
                                '/privacy-policy'
                              ),
                              InternetSafetyPolicy: ''.concat(
                                n.officewebsiteDomain,
                                '/internet-safety-policy'
                              ),
                              ChildPrivacy: ''.concat(
                                n.officewebsiteDomain,
                                '/child-privacy'
                              ),
                            }),
                            j.nativeApi.jumpPage(t[e])
                        case 6:
                        case 'end':
                          return o.stop()
                      }
                    }
                  }, o)
                })
              )()
            },
          },
          mounted: function () {
            var e = this
            return Object(a.a)(
              Object(s.a)().mark(function o() {
                return Object(s.a)().wrap(function (o) {
                  while (1) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (o.next = 2), Object(g.c)()
                      case 2:
                        e.local = o.sent
                      case 3:
                      case 'end':
                        return o.stop()
                    }
                  }
                }, o)
              })
            )()
          },
        },
        M = R,
        A = (n('ac5b'), Object(b.a)(M, O, E, false, null, 'a918cf0a', null)),
        B = A.exports,
        U = n('92e5'),
        D = n('2b6b'),
        H = n('0a06a'),
        J = {
          name: 'Login',
          components: {
            Toolbar: d.a,
            PasswordLogin: k,
            VerificationCodeLogin: V,
            Policies: B,
          },
          data: function () {
            return {
              loginType: 'verificationCode',
              passwordLoginType: 'mobile',
              verificationCodetype: 'phoneNumber',
            }
          },
          computed: {
            loginTypeInfo: function () {
              console.info(
                '对象函数 loginTypeInfo,filePath:renderer/views/Login.vue'
              )
              var e = {
                password: {
                  headerName: this.$t('login.passwordPage.title'),
                  footerName: this.$t('login.verificationCodePage.footerTitle'),
                  forgotPassword: this.$t('login.passwordPage.forgotPassword'),
                  description: this.$t('login.passwordPage.mobileDescription'),
                },
                verificationCode: {
                  headerName: this.$t('login.verificationCodePage.title'),
                  footerName: this.$t('login.passwordPage.footerTitle'),
                  description:
                    'phoneNumber' === this.verificationCodetype
                      ? this.$t('login.verificationCodePage.description')
                      : this.$t('login.verificationCodePage.emailDesc'),
                },
              }
              return e[this.loginType]
            },
            mobileInfo: function () {
              return (
                console.info(
                  '对象函数 mobileInfo,filePath:renderer/views/Login.vue'
                ),
                this.$store.state.login.mobileInfoCache
              )
            },
            accountInfo: function () {
              console.info(
                '对象函数 accountInfo,filePath:renderer/views/Login.vue'
              )
              var e = this.$store.state.login.mobileInfoCache,
                o = this.$store.state.login.emailInfoCache
              return Object(c.a)(Object(c.a)({}, e), o)
            },
          },
          mounted: function () {
            var e = this.$route.query.loginType
              ; ('password' !== e && 'verificationCode' !== e) ||
                (this.loginType = e)
          },
          methods: {
            handleLoginType: function () {
              console.info(
                '对象函数 handleLoginType,filePath:renderer/views/Login.vue'
              )
              'password' === this.loginType
                ? (this.loginType = 'verificationCode')
                : (this.loginType = 'password')
              this.passwordLoginType = 'mobile'
            },
            updatePasswordLoginType: function (e) {
              console.info(
                '对象函数 updatePasswordLoginType(type)',
                e,
                'filePath:renderer/views/Login.vue'
              )
              this.passwordLoginType = e
              this.$store.dispatch('login/updatePasswordLoginType', { type: e })
            },
            changeVerificationCodetype: function (e) {
              console.info(
                '对象函数 changeVerificationCodetype(type)',
                e,
                'filePath:renderer/views/Login.vue'
              )
              this.verificationCodetype = e
            },
            handleLoginSuccess: function (e) {
              var o = this
              return Object(a.a)(
                Object(s.a)().mark(function n() {
                  var t
                  return Object(s.a)().wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 handleLoginSuccess(data)',
                              e,
                              'filePath:renderer/views/Login.vue'
                            ),
                            (n.next = 3),
                            Object(U.c)({
                              uid: e.uid,
                              avatar: e.avatar,
                              email: e.email,
                              nickName: e.nickName,
                              card: e.card,
                              countryCallingCode: e.countryCallingCode,
                              phone: e.phone,
                              unifiedAccessToken: e.unifiedAccessToken,
                            })
                          )
                        case 3:
                          return (
                            Object(D.setUserAttributes)(),
                            e.uid && H.g(e.uid),
                            (n.next = 7),
                            window.thinkApi.ipc.invoke(
                              'getStoreValue',
                              'skipPasswordSettings'
                            )
                          )
                        case 7:
                          ; (t = n.sent),
                            t ||
                              'verificationCode' !== o.loginType ||
                              false !== e.passwordModified
                              ? o.$router.push('/courses')
                              : o.$router.push({
                                name: 'ForgotPassword',
                                params: {
                                  type: 'passwordSettings',
                                  isLogin: true,
                                  accountInfo: {
                                    areaCode: e.countryCallingCode,
                                    phoneNumber: e.phone,
                                    emailInput: e.email,
                                  },
                                },
                              })
                        case 9:
                        case 'end':
                          return n.stop()
                      }
                    }
                  }, n)
                })
              )()
            },
            handleForgotPassword: function () {
              if (
                (console.info(
                  '对象函数 handleForgotPassword,filePath:renderer/views/Login.vue'
                ),
                  !this.$store.state.login.checkedStatus)
              ) {
                return (
                  console.info(
                    'if(!this.$store.state.login.checkedStatus)为true触发return,path: /renderer/views/Login.vue'
                  ),
                  this.$Message.destroy(),
                  void this.$Message.info(
                    this.$t('login.passwordPage.confirmPolicyTip')
                  )
                )
              }
              this.$router.push({
                name: 'ForgotPassword',
                params: {
                  type: 'accountVerification',
                  isLogin: false,
                  accountInfo: this.accountInfo,
                },
              })
            },
          },
        },
        q = J,
        z = (n('7e30'), Object(b.a)(q, i, r, false, null, 'dee68106', null))
      o.default = z.exports
    },
    '6f04': function (e, o) {
      e.exports = {
        functional: true,
        render(e, o) {
          const { _c: n, _v: t, data: i, children: r = [] } = o,
            {
              class: s,
              staticClass: a,
              style: c,
              staticStyle: d,
              attrs: l = {},
              ...u
            } = i
          return n(
            'svg',
            {
              class: [s, a],
              style: [c, d],
              attrs: Object.assign(
                {
                  width: '16',
                  height: '16',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                l
              ),
              ...u,
            },
            r.concat([
              n(
                'g',
                {
                  attrs: {
                    fill: 'none',
                    'fill-rule': 'evenodd',
                  },
                },
                [
                  n('path', { attrs: { d: 'M0 0h16v16H0z' } }),
                  n('path', {
                    attrs: {
                      d: 'M11.395 7.016l-2.251 3.21c-.409.582-1.252.75-1.883.373a1.314 1.314 0 01-.405-.373l-2.251-3.21c-.383-.546-.213-1.275.379-1.627.206-.124.447-.189.693-.189h4.646c.705 0 1.277.527 1.277 1.177 0 .226-.071.448-.205.639z',
                      fill: '#172B4D',
                    },
                  }),
                ]
              ),
            ])
          )
        },
      }
    },
    '7e30': function (e, o, n) {
      'use strict'
      n('9c38e')
    },
    '8e70': function (e, o, n) { },
    '9c38e': function (e, o, n) { },
    ac5b: function (e, o, n) {
      'use strict'
      n('8e70')
    },
    d718: function (e, o, n) { },
    ee7c: function (e, o, n) { },
  },
])
