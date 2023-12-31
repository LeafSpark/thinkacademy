; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-84a61f34'],
  {
    '43d0': function (e, o, n) {
      'use strict'
      n('99af')
      n('fb6a')
      n('a4d3')
      n('e01a')
      var t = function () {
        var e = this,
          o = e._self._c
        return o(
          'div',
          {
            staticClass: 'ne-passwordSetting',
            class: e.darkClass,
          },
          [
            o('div', { staticClass: 'ne-passwordSetting__header' }, [
              o('h2', [e._v(e._s(e.title))]),
              o('p', [e._v(e._s(e.subTitle))]),
            ]),
            o('div', { staticClass: 'ne-passwordSetting__body' }, [
              o('div', { staticClass: 'ne-passwordSetting__body-item' }, [
                'checkbox' === e.passwordType
                  ? o('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.form.newPassword,
                        expression: 'form.newPassword',
                      },
                    ],
                    class: e.inputClass,
                    attrs: {
                      name: 'newPassword',
                      placeholder: e.placeholder[0],
                      maxLength: 20,
                      type: 'checkbox',
                    },
                    domProps: {
                      checked: Array.isArray(e.form.newPassword)
                        ? e._i(e.form.newPassword, null) > -1
                        : e.form.newPassword,
                    },
                    on: {
                      input: e.trimPassword,
                      change: function (o) {
                        var n = e.form.newPassword,
                          t = o.target,
                          r = !!t.checked
                        if (Array.isArray(n)) {
                          var s = e._i(n, null)
                          t.checked
                            ? s < 0 &&
                            e.$set(
                              e.form,
                              'newPassword',
                              n.concat([null])
                            )
                            : s > -1 &&
                            e.$set(
                              e.form,
                              'newPassword',
                              n.slice(0, s).concat(n.slice(s + 1))
                            )
                        } else {
                          e.$set(e.form, 'newPassword', r)
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
                          value: e.form.newPassword,
                          expression: 'form.newPassword',
                        },
                      ],
                      class: e.inputClass,
                      attrs: {
                        name: 'newPassword',
                        placeholder: e.placeholder[0],
                        maxLength: 20,
                        type: 'radio',
                      },
                      domProps: { checked: e._q(e.form.newPassword, null) },
                      on: {
                        input: e.trimPassword,
                        change: function (o) {
                          return e.$set(e.form, 'newPassword', null)
                        },
                      },
                    })
                    : o('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: e.form.newPassword,
                          expression: 'form.newPassword',
                        },
                      ],
                      class: e.inputClass,
                      attrs: {
                        name: 'newPassword',
                        placeholder: e.placeholder[0],
                        maxLength: 20,
                        type: e.passwordType,
                      },
                      domProps: { value: e.form.newPassword },
                      on: {
                        input: [
                          function (o) {
                            o.target.composing
                              ? console.info(
                                'if($event.target.composing)为true触发return,path: /renderer/components/Common/PasswordSetting.vue'
                              )
                              : e.$set(e.form, 'newPassword', o.target.value)
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
                o('p', [e._v(e._s(e.description[0]))]),
              ]),
              o('div', { staticClass: 'ne-passwordSetting__body-item' }, [
                'checkbox' === e.confirmPasswordType
                  ? o('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.form.confirmPassword,
                        expression: 'form.confirmPassword',
                      },
                    ],
                    class: e.inputClass,
                    attrs: {
                      name: 'confirmPassword',
                      placeholder: e.placeholder[1],
                      maxLength: 20,
                      type: 'checkbox',
                    },
                    domProps: {
                      checked: Array.isArray(e.form.confirmPassword)
                        ? e._i(e.form.confirmPassword, null) > -1
                        : e.form.confirmPassword,
                    },
                    on: {
                      input: e.trimConfirmPassword,
                      change: function (o) {
                        var n = e.form.confirmPassword,
                          t = o.target,
                          r = !!t.checked
                        if (Array.isArray(n)) {
                          var s = e._i(n, null)
                          t.checked
                            ? s < 0 &&
                            e.$set(
                              e.form,
                              'confirmPassword',
                              n.concat([null])
                            )
                            : s > -1 &&
                            e.$set(
                              e.form,
                              'confirmPassword',
                              n.slice(0, s).concat(n.slice(s + 1))
                            )
                        } else {
                          e.$set(e.form, 'confirmPassword', r)
                        }
                      },
                    },
                  })
                  : 'radio' === e.confirmPasswordType
                    ? o('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: e.form.confirmPassword,
                          expression: 'form.confirmPassword',
                        },
                      ],
                      class: e.inputClass,
                      attrs: {
                        name: 'confirmPassword',
                        placeholder: e.placeholder[1],
                        maxLength: 20,
                        type: 'radio',
                      },
                      domProps: {
                        checked: e._q(e.form.confirmPassword, null),
                      },
                      on: {
                        input: e.trimConfirmPassword,
                        change: function (o) {
                          return e.$set(e.form, 'confirmPassword', null)
                        },
                      },
                    })
                    : o('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: e.form.confirmPassword,
                          expression: 'form.confirmPassword',
                        },
                      ],
                      class: e.inputClass,
                      attrs: {
                        name: 'confirmPassword',
                        placeholder: e.placeholder[1],
                        maxLength: 20,
                        type: e.confirmPasswordType,
                      },
                      domProps: { value: e.form.confirmPassword },
                      on: {
                        input: [
                          function (o) {
                            o.target.composing
                              ? console.info(
                                'if($event.target.composing)为true触发return,path: /renderer/components/Common/PasswordSetting.vue'
                              )
                              : e.$set(
                                e.form,
                                'confirmPassword',
                                o.target.value
                              )
                          },
                          e.trimConfirmPassword,
                        ],
                      },
                    }),
                o('span', {
                  class: {
                    'icon-eye': e.showConfirmPassword,
                    'icon-eye-hide': !e.showConfirmPassword,
                  },
                  on: { click: e.handleShowConfirmPassword },
                }),
                o('p', [e._v(e._s(e.description[1]))]),
              ]),
            ]),
            o(
              'div',
              { staticClass: 'ne-passwordSetting__footer' },
              [
                o(
                  'a-button',
                  {
                    attrs: {
                      type: 'primary',
                      size: 'large',
                      shape: 'round',
                      loading: e.loading,
                    },
                    on: { click: e.confirmModifyPassword },
                  },
                  [
                    e._v(
                      ' ' + e._s(e.$t('account.modifyPassword.confirm')) + ' '
                    ),
                  ]
                ),
              ],
              1
            ),
            e.errorMessage
              ? o('div', { staticClass: 'error-message' }, [
                e._v(' ' + e._s(e.errorMessage) + ' '),
              ])
              : e._e(),
          ]
        )
      },
        r = [],
        i = n('c7eb'),
        s = n('1da1'),
        a =
          (n('14d9'),
            n('a9e3'),
            n('4d63'),
            n('ac1f'),
            n('25f0'),
            n('d3b7'),
            n('72fe')),
        c = n.n(a),
        d = n('ae3f'),
        m = n('e39c'),
        u = null,
        f = {
          name: 'PasswordSetting',
          data: function () {
            return {
              form: {
                newPassword: '',
                confirmPassword: '',
              },
              loading: false,
              showPassword: false,
              showConfirmPassword: false,
              errorMessage: '',
              passwordLoginType: this.$store.state.login.passwordLoginType,
            }
          },
          props: {
            title: {
              type: String,
              default: 'Password Settings',
            },
            subTitle: {
              type: String,
              default: 'Please set a password for mobile number',
            },
            areaCode: {
              type: Number,
              default: 0,
            },
            phoneNumber: {
              type: Number,
              default: 0,
            },
            emailInput: {
              type: String,
              default: '',
            },
            verificationCode: {
              type: Number,
              default: 0,
            },
            placeholder: {
              type: Array,
              default: function () {
                return ['New Password', 'Confirm Password']
              },
            },
            description: {
              type: Array,
              default: function () {
                return [
                  'This password is shared by all student accounts in your family. ',
                  'Please enter 6-20 characters, contains at least one letter and one number. Only letters and numbers are accepted.',
                ]
              },
            },
            dark: {
              type: Boolean,
              default: false,
            },
          },
          computed: {
            darkClass: function () {
              return (
                console.info(
                  '对象函数 darkClass,filePath:renderer/components/Common/PasswordSetting.vue'
                ),
                this.dark && 'is-dark'
              )
            },
            passwordType: function () {
              return (
                console.info(
                  '对象函数 passwordType,filePath:renderer/components/Common/PasswordSetting.vue'
                ),
                this.showPassword ? 'text' : 'password'
              )
            },
            confirmPasswordType: function () {
              return (
                console.info(
                  '对象函数 confirmPasswordType,filePath:renderer/components/Common/PasswordSetting.vue'
                ),
                this.showConfirmPassword ? 'text' : 'password'
              )
            },
          },
          methods: {
            handleShowPassword: function () {
              console.info(
                '对象函数 handleShowPassword,filePath:renderer/components/Common/PasswordSetting.vue'
              )
              this.showPassword = !this.showPassword
            },
            handleShowConfirmPassword: function () {
              console.info(
                '对象函数 handleShowConfirmPassword,filePath:renderer/components/Common/PasswordSetting.vue'
              )
              this.showConfirmPassword = !this.showConfirmPassword
            },
            trimPassword: function () {
              console.info(
                '对象函数 trimPassword,filePath:renderer/components/Common/PasswordSetting.vue'
              )
              this.form.newPassword = Object(m.B)(this.form.newPassword)
            },
            trimConfirmPassword: function () {
              console.info(
                '对象函数 trimConfirmPassword,filePath:renderer/components/Common/PasswordSetting.vue'
              )
              this.form.confirmPassword = Object(m.B)(this.form.confirmPassword)
            },
            showMessage: function (e) {
              var o = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null
              console.info(
                '对象函数 showMessage(msg, callback)',
                e,
                n,
                'filePath:renderer/components/Common/PasswordSetting.vue'
              )
              this.errorMessage = e
              clearTimeout(u)
              u = setTimeout(function () {
                o.errorMessage = ''
                n && n()
              }, 3000)
            },
            validationPassword: function () {
              console.info(
                '对象函数 validationPassword,filePath:renderer/components/Common/PasswordSetting.vue'
              )
              var e = new RegExp(
                "(?=.*[0-9])(?=.*[a-zA-Z])(?!.*[`~!@#$^&*()=|{}':;',\\[\\].<>\u300A\u300B/?~\uFF01@#\uFFE5\u2026\u2026&*\uFF08\uFF09\u2014\u2014|{}\u3010\u3011\u2018\uFF1B\uFF1A\u201D\u201C'\u3002\uFF0C\u3001\uFF1F])(^[^一-龥]+$)"
              )
              return this.form.newPassword.length > 20 ||
                this.form.newPassword.length < 6
                ? (console.info(
                  'if(this.form.newPassword.length > 20 || this.form.newPassword.length < 6)为true触发return,path: /renderer/components/Common/PasswordSetting.vue'
                ),
                  this.showMessage(
                    this.$t('account.modifyPassword.lengthError')
                  ),
                  false)
                : this.form.newPassword !== this.form.confirmPassword
                  ? (console.info(
                    'if(this.form.newPassword !== this.form.confirmPassword)为true触发return,path: /renderer/components/Common/PasswordSetting.vue'
                  ),
                    this.showMessage(this.$t('account.modifyPassword.notMatch')),
                    false)
                  : !!e.test(this.form.newPassword) ||
                  (console.info(
                    'if(!pwdRegExp.test(this.form.newPassword))为true触发return,path: /renderer/components/Common/PasswordSetting.vue'
                  ),
                    this.showMessage(this.$t('account.modifyPassword.notFormat')),
                    false)
            },
            confirmModifyPassword: function () {
              var e = this
              return Object(s.a)(
                Object(i.a)().mark(function o() {
                  var n, t, r
                  return Object(i.a)().wrap(
                    function (o) {
                      while (1) {
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              (console.info(
                                '对象函数 confirmModifyPassword,filePath:renderer/components/Common/PasswordSetting.vue'
                              ),
                                e.validationPassword())
                            ) {
                              o.next = 4
                              break
                            }
                            return (
                              console.info(
                                'if(!_this2.validationPassword())为true触发return,path: /renderer/components/Common/PasswordSetting.vue'
                              ),
                              o.abrupt('return')
                            )
                          case 4:
                            if (
                              ((o.prev = 4),
                                (e.loading = true),
                                (n = c()(
                                  c()(e.form.confirmPassword).toString()
                                ).toString()),
                                (t = ''),
                                !e.verificationCode || !e.dark)
                            ) {
                              o.next = 15
                              break
                            }
                            return (
                              (r =
                                'email' == e.passwordLoginType
                                  ? {
                                    accountName: e.emailInput,
                                    type: 2,
                                    verificationCode: e.verificationCode,
                                    password: n,
                                  }
                                  : {
                                    accountName: e.phoneNumber,
                                    countryCallingCode: e.areaCode,
                                    verificationCode: e.verificationCode,
                                    type: 0,
                                    password: n,
                                  }),
                              (o.next = 12),
                              Object(d.e)(r)
                            )
                          case 12:
                            ; (t = o.sent), (o.next = 18)
                            break
                          case 15:
                            return (o.next = 17), Object(d.e)({ password: n })
                          case 17:
                            t = o.sent
                          case 18:
                            t && 0 === t.code
                              ? e.showMessage(
                                e.$t('account.modifyPassword.successMessage'),
                                function () {
                                  console.info(
                                    '箭头函数 showMessage,filePath:renderer/components/Common/PasswordSetting.vue'
                                  )
                                  e.$emit('reset-success', t.data)
                                  e.dark ||
                                    e.$router.push({ path: '/my-account' })
                                }
                              )
                              : e.showMessage(
                                t.msg ||
                                e.$t('account.modifyPassword.failMessage')
                              ),
                              (e.loading = false),
                              (o.next = 27)
                            break
                          case 22:
                            ; (o.prev = 22),
                              (o.t0 = o.catch(4)),
                              console.error(
                                e.$t('common.systemErrorTryAgain'),
                                o.t0
                              ),
                              e.showMessage(
                                e.$t('common.systemErrorTryAgain') + ' ' + o.t0
                              ),
                              (e.loading = false)
                          case 27:
                          case 'end':
                            return o.stop()
                        }
                      }
                    },
                    o,
                    null,
                    [[4, 22]]
                  )
                })
              )()
            },
          },
        },
        l = f,
        h = (n('e56b'), n('2877')),
        p = Object(h.a)(l, t, r, false, null, null, null)
      o.a = p.exports
    },
    '6f04': function (e, o) {
      e.exports = {
        functional: true,
        render(e, o) {
          const { _c: n, _v: t, data: r, children: i = [] } = o,
            {
              class: s,
              staticClass: a,
              style: c,
              staticStyle: d,
              attrs: m = {},
              ...u
            } = r
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
                m
              ),
              ...u,
            },
            i.concat([
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
    '7c78': function (e, o, n) { },
    '83a1': function (e, o, n) {
      'use strict'
      n('b0c0')
      var t = function () {
        var e = this,
          o = e._self._c
        return o(
          'div',
          {
            staticClass: 'ne-accountVerification',
            class: e.darkClass,
          },
          [
            o('div', { staticClass: 'ne-accountVerification__header' }, [
              o('h2', [e._v(e._s(e.title))]),
              o('p', [e._v(e._s(e.subTitle))]),
            ]),
            o('div', { staticClass: 'ne-accountVerification__body' }, [
              'email' !== e.passwordLoginType
                ? o(
                  'div',
                  {
                    staticClass:
                      'ne-accountVerification__body-item form-item-phone',
                  },
                  [
                    o(
                      'a-dropdown',
                      {
                        class: { 'is-disabled': e.disabledInput },
                        attrs: {
                          trigger: ['click'],
                          getPopupContainer: e.getDropdownContainer,
                          disabled: e.disabledInput,
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
                                  e._v(
                                    ' ' + e._s('+'.concat(n.value)) + ' '
                                  ),
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
                      staticClass: 'dropdown-area-code',
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
                      staticClass: 'input-phone',
                      attrs: {
                        type: 'text',
                        maxlength: '20',
                        placeholder: e.$t('login.common.phoneNumber'),
                        disabled: e.disabledInput,
                      },
                      domProps: { value: e.form.phoneNumber },
                      on: {
                        keyup: function (o) {
                          return !o.type.indexOf('key') &&
                            e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                            ? (console.info(
                              "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Common/AccountVerification.vue"
                            ),
                              null)
                            : e.doVerification.apply(null, arguments)
                        },
                        input: [
                          function (o) {
                            o.target.composing
                              ? console.info(
                                'if($event.target.composing)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                              )
                              : e.$set(
                                e.form,
                                'phoneNumber',
                                o.target.value
                              )
                          },
                          e.trimPhoneNumber,
                        ],
                      },
                    }),
                  ],
                  1
                )
                : o(
                  'div',
                  {
                    staticClass:
                      'ne-accountVerification__body-item form-item-emailInput',
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
                        disabled: e.disabledInput,
                      },
                      domProps: { value: e.form.emailInput },
                      on: {
                        input: [
                          function (o) {
                            o.target.composing
                              ? console.info(
                                'if($event.target.composing)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                              )
                              : e.$set(e.form, 'emailInput', o.target.value)
                          },
                          e.trimEmail,
                        ],
                      },
                    }),
                  ]
                ),
              o(
                'div',
                {
                  staticClass:
                    'ne-accountVerification__body-item form-item-verification-code',
                },
                [
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
                    attrs: {
                      type: 'text',
                      maxlength: '6',
                      placeholder: e.$t(
                        'login.common.verificationCodePlaceholder'
                      ),
                    },
                    domProps: { value: e.form.verificationCode },
                    on: {
                      keyup: function (o) {
                        return !o.type.indexOf('key') &&
                          e._k(o.keyCode, 'enter', 13, o.key, 'Enter')
                          ? (console.info(
                            "if(!$event.type.indexOf('key') && _vm._k($event.keyCode, 'enter', 13, $event.key, 'Enter'))为true触发return,path: /renderer/components/Common/AccountVerification.vue"
                          ),
                            null)
                          : e.doVerification.apply(null, arguments)
                      },
                      input: [
                        function (o) {
                          o.target.composing
                            ? console.info(
                              'if($event.target.composing)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                            )
                            : e.$set(
                              e.form,
                              'verificationCode',
                              o.target.value
                            )
                        },
                        e.trimVerificationCode,
                      ],
                    },
                  }),
                ]
              ),
            ]),
            o(
              'div',
              { staticClass: 'ne-accountVerification__footer' },
              [
                o(
                  'a-button',
                  {
                    attrs: {
                      type: 'primary',
                      size: 'large',
                      shape: 'round',
                      loading: e.loading,
                      disabled: e.disabledVerificationButton,
                    },
                    on: { click: e.handleVerificationSMSCode },
                  },
                  [
                    e._v(
                      ' ' +
                      e._s(e.$t('account.accountVerification.nextStep')) +
                      ' '
                    ),
                  ]
                ),
              ],
              1
            ),
            e.errorMessage
              ? o('div', { staticClass: 'error-message' }, [
                e._v(' ' + e._s(e.errorMessage) + ' '),
              ])
              : e._e(),
          ]
        )
      },
        r = [],
        i = n('c7eb'),
        s = n('1da1'),
        a = (n('ac1f'), n('4d63'), n('25f0'), n('d3b7'), n('159b'), n('6f04')),
        c = n.n(a),
        d = n('a898'),
        m = n('02fc'),
        u = n('ae3f'),
        f = n('e39c'),
        l = void 0,
        h = null,
        p = null,
        w = {
          name: 'AccountVerification',
          data: function () {
            return {
              form: {
                areaCode: '',
                phoneReg: '',
                phoneNumber: '',
                verificationCode: '',
                emailInput: '',
                emailReg: '',
              },
              passwordLoginType: this.$store.state.login.passwordLoginType,
              errorMessage: '',
              arrowBottomSvg: c.a,
              loading: false,
              isSendVerificationCode: false,
              isSending: false,
              countdownNum: 0,
              getDropdownContainer: function () {
                return document.getElementById('dropdown-area-code')
              },
            }
          },
          props: {
            title: {
              type: String,
              default: function () {
                return l.$t('account.accountVerification.title')
              },
            },
            subTitle: {
              type: String,
              default: function () {
                return l.$t('account.accountVerification.subTitle')
              },
            },
            dark: {
              type: Boolean,
              default: false,
            },
            account: {
              type: Object,
              default: function () { },
            },
          },
          computed: {
            disabledInput: function () {
              return (
                console.info(
                  '对象函数 disabledInput,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                !this.dark && !Object(f.q)(this.account)
              )
            },
            darkClass: function () {
              return (
                console.info(
                  '对象函数 darkClass,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                this.dark && 'is-dark'
              )
            },
            areaCodeList: function () {
              return (
                console.info(
                  '对象函数 areaCodeList,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                this.$store.state.common.areaCodeList
              )
            },
            countdownText: function () {
              return (
                console.info(
                  '对象函数 countdownText,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                ''.concat(this.countdownNum, 's')
              )
            },
            sendButtonText: function () {
              console.info(
                '对象函数 sendButtonText,filePath:renderer/components/Common/AccountVerification.vue'
              )
              var e = this.$t('login.verificationCodePage.reSend'),
                o = this.$t('login.verificationCodePage.send')
              return this.isSendVerificationCode
                ? (console.info(
                  'if(this.isSendVerificationCode)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                ),
                  e)
                : (console.info(
                  'if(this.isSendVerificationCode)为false,触发return,path: /renderer/components/Common/AccountVerification.vue'
                ),
                  o)
            },
            showCountdown: function () {
              return (
                console.info(
                  '对象函数 showCountdown,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                this.countdownNum > 0 &&
                (console.info(
                  'if(this.countdownNum > 0)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                ),
                  true)
              )
            },
            disabledSendButton: function () {
              return (
                console.info(
                  '对象函数 disabledSendButton,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                this.isSending
                  ? (console.info(
                    'if(this.isSending)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                  ),
                    true)
                  : (this.countdownNum > 0 || !this.vaildAccount) && this.dark
                    ? (console.info(
                      'if((this.countdownNum > 0 || !this.vaildAccount) && this.dark)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                    ),
                      true)
                    : (Object(f.q)(this.account) ||
                      this.dark ||
                      console.info(
                        'if(!isEmpty(this.account) && !this.dark)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                      ),
                      false)
              )
            },
            disabledVerificationButton: function () {
              console.info(
                '对象函数 disabledVerificationButton,filePath:renderer/components/Common/AccountVerification.vue'
              )
              return Object(f.q)(this.account)
                ? !this.vaildAccount ||
                !/^[0-9]{6,6}$/.test(this.form.verificationCode)
                : (console.info(
                  'if(!isEmpty(this.account))为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                ),
                  !this.form.verificationCode ||
                  !/^[0-9]{6,6}$/.test(this.form.verificationCode))
            },
            vaildAccount: function () {
              console.info(
                '对象函数 vaildAccount,filePath:renderer/components/Common/AccountVerification.vue'
              )
              var e = new RegExp(this.form.phoneReg).test(
                this.form.phoneNumber
              ),
                o = new RegExp(this.form.emailReg).test(this.form.emailInput)
              return 'email' == this.passwordLoginType ? o : e
            },
          },
          mounted: function () {
            this.setAccountFormData()
            this.dark
          },
          methods: {
            setAccountFormData: function () {
              console.info(
                '对象函数 setAccountFormData,filePath:renderer/components/Common/AccountVerification.vue'
              )
              'email' === this.passwordLoginTyp ||
                this.account.areaCode ||
                this.initAreaCode()
              this.form = this.account
            },
            trimPhoneNumber: function () {
              console.info(
                '对象函数 trimPhoneNumber,filePath:renderer/components/Common/AccountVerification.vue'
              )
              this.form.phoneNumber = Object(f.B)(this.form.phoneNumber)
            },
            trimEmail: function () {
              console.info(
                '对象函数 trimEmail,filePath:renderer/components/Common/AccountVerification.vue'
              )
              this.form.emailInput = Object(f.B)(this.form.emailInput)
            },
            trimVerificationCode: function () {
              console.info(
                '对象函数 trimVerificationCode,filePath:renderer/components/Common/AccountVerification.vue'
              )
              this.form.verificationCode = Object(f.B)(
                this.form.verificationCode
              )
            },
            validation: function () {
              if (
                (console.info(
                  '对象函数 validation,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                  'email' == this.passwordLoginType)
              ) {
                if (!this.form.emailInput && !this.form.verificationCode) {
                  return (
                    console.info(
                      'if(!this.form.emailInput && !this.form.verificationCode)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
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
                      'if(!this.form.emailInput)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
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
                  !new RegExp(this.form.emailReg).test(this.form.emailInput) &&
                  this.dark
                ) {
                  return (
                    console.info(
                      'if(!new RegExp(this.form.emailReg).test(this.form.emailInput) && this.dark)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
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
                      'if(!this.form.phoneNumber && !this.form.verificationCode)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
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
                      'if(!this.form.phoneNumber)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
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
                      'if(!new RegExp(this.form.phoneReg).test(this.form.phoneNumber))为true触发return,path: /renderer/components/Common/AccountVerification.vue'
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
              return (
                !!this.form.verificationCode ||
                (console.info(
                  'if(!this.form.verificationCode)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                ),
                  this.showMessage(
                    this.$t('account.accountVerification.validationNotices[3]')
                  ),
                  false)
              )
            },
            countdown: function () {
              var e = this
              console.info(
                '对象函数 countdown,filePath:renderer/components/Common/AccountVerification.vue'
              )
              0 === this.countdownNum && (this.countdownNum = 60)
              clearTimeout(p)
              p = setTimeout(function () {
                if ((e.countdownNum--, 0 === e.countdownNum)) {
                  return (
                    console.info(
                      'if(_this2.countdownNum === 0)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                    ),
                    void (e.isSending = false)
                  )
                }
                e.countdown()
              }, 1000)
            },
            initAreaCode: function () {
              var e = this
              return Object(s.a)(
                Object(i.a)().mark(function o() {
                  var n, t
                  return Object(i.a)().wrap(function (o) {
                    while (1) {
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 initAreaCode,filePath:renderer/components/Common/AccountVerification.vue'
                            ),
                            (o.next = 3),
                            Object(m.c)()
                          )
                        case 3:
                          ; (n = o.sent),
                            (t = 0),
                            d.a.forEach(function (e, o) {
                              e.code === n && (t = o)
                            }),
                            e.handleSelectAreaCode({ key: t })
                        case 7:
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
                'filePath:renderer/components/Common/AccountVerification.vue'
              )
              var n = d.a[o]
              this.form.countryCode = n.code
              this.form.areaCode = n.value
              this.form.phoneReg = n.reg
            },
            handleMenuItem: function (e) {
              console.info(
                '对象函数 handleMenuItem(item)',
                e,
                'filePath:renderer/components/Common/AccountVerification.vue'
              )
              this.form.countryCode = e.code
              this.form.areaCode = e.value
              this.form.phoneReg = e.reg
            },
            handleSendButton: function () {
              var e = this
              if (
                (console.info(
                  '对象函数 handleSendButton,filePath:renderer/components/Common/AccountVerification.vue'
                ),
                  this.disabledSendButton)
              ) {
                console.info(
                  'if(this.disabledSendButton)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                )
              } else {
                var o =
                  'email' == this.passwordLoginType
                    ? {
                      contactInfo: this.form.emailInput,
                      type: 2,
                      scene: 14,
                    }
                    : {
                      contactInfo: this.form.phoneNumber,
                      countryCallingCode: this.form.areaCode,
                      type: 1,
                      scene: 14,
                    }
                this.isSending = true
                Object(u.i)(o)
                  .then(function (o) {
                    if (
                      (console.info(
                        '箭头函数 sendVerificationCodeApi的then(res)',
                        o,
                        'filePath:renderer/components/Common/AccountVerification.vue'
                      ),
                        !o || 0 !== o.code)
                    ) {
                      return (
                        console.info(
                          'if(!res || res.code !== 0)为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                        ),
                        e.showMessage(
                          o.msg ||
                          e.$t(
                            'account.accountVerification.sendFailedTryAgain'
                          )
                        ),
                        (e.isSending = false)
                      )
                    }
                    e.isSendVerificationCode = true
                    e.countdown()
                  })
                  .catch(function (o) {
                    console.info(
                      '箭头函数 catch(err)',
                      o,
                      'filePath:renderer/components/Common/AccountVerification.vue'
                    )
                    e.isSending = false
                    e.showMessage(e.$t('common.systemErrorTryAgain') + ' ' + o)
                    console.error('发送验证码接口失败', o)
                  })
              }
            },
            showMessage: function (e) {
              var o = this
              console.info(
                '对象函数 showMessage(msg)',
                e,
                'filePath:renderer/components/Common/AccountVerification.vue'
              )
              this.errorMessage = e
              clearTimeout(h)
              h = setTimeout(function () {
                o.errorMessage = ''
              }, 3000)
            },
            handleVerificationSMSCode: function () {
              var e = this
              return Object(s.a)(
                Object(i.a)().mark(function o() {
                  var n, t
                  return Object(i.a)().wrap(
                    function (o) {
                      while (1) {
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              (console.info(
                                '对象函数 handleVerificationSMSCode,filePath:renderer/components/Common/AccountVerification.vue'
                              ),
                                !e.dark || e.validation())
                            ) {
                              o.next = 4
                              break
                            }
                            return (
                              console.info(
                                'if(_this6.dark && !_this6.validation())为true触发return,path: /renderer/components/Common/AccountVerification.vue'
                              ),
                              o.abrupt('return')
                            )
                          case 4:
                            return (
                              (o.prev = 4),
                              (e.loading = true),
                              (n =
                                'email' == e.passwordLoginType
                                  ? {
                                    contactInfo: e.form.emailInput,
                                    scene: 14,
                                    verificationCode: e.form.verificationCode,
                                    type: 2,
                                  }
                                  : {
                                    contactInfo: e.form.phoneNumber,
                                    countryCallingCode: e.form.areaCode,
                                    scene: 14,
                                    verificationCode: e.form.verificationCode,
                                    type: 0,
                                  }),
                              (o.next = 9),
                              Object(u.k)(n)
                            )
                          case 9:
                            ; (t = o.sent),
                              t && 0 === t.code
                                ? e.$emit('validation-success', {
                                  areaCode: e.form.areaCode,
                                  phoneNumber: e.form.phoneNumber,
                                  verificationCode: e.form.verificationCode,
                                  emailInput: e.form.emailInput,
                                })
                                : e.showMessage(t.msg),
                              (e.loading = false),
                              (o.next = 19)
                            break
                          case 14:
                            ; (o.prev = 14),
                              (o.t0 = o.catch(4)),
                              console.error(
                                e.$t('common.systemErrorTryAgain'),
                                o.t0
                              ),
                              e.showMessage(
                                e.$t('common.systemErrorTryAgain') + ' ' + o.t0
                              ),
                              (e.loading = false)
                          case 19:
                          case 'end':
                            return o.stop()
                        }
                      }
                    },
                    o,
                    null,
                    [[4, 14]]
                  )
                })
              )()
            },
            handleSubmit: function () {
              console.info(
                '对象函数 handleSubmit,filePath:renderer/components/Common/AccountVerification.vue'
              )
            },
            handleEmailBlur: function () {
              console.info(
                '对象函数 handleEmailBlur,filePath:renderer/components/Common/AccountVerification.vue'
              )
            },
          },
        },
        v = w,
        g = (n('8acb'), n('2877')),
        C = Object(g.a)(v, t, r, false, null, null, null)
      o.a = C.exports
    },
    '85bb': function (e, o, n) { },
    '8acb': function (e, o, n) {
      'use strict'
      n('7c78')
    },
    e56b: function (e, o, n) {
      'use strict'
      n('85bb')
    },
  },
])
