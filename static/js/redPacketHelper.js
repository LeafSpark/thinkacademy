; (window.webpackJsonp = window.webpackJsonp || []).push([
  ['chunk-5125c77c'],
  {
    '5afe': function (e, t, n) { },
    6040: function (e, t, n) {
      'use strict'
      n('9995')
    },
    '8e82': function (e, t, n) {
      e.exports = n.p + 'static/media/show-red-package.b0ec20b3.mp3'
    },
    9571: function (e, t, n) {
      'use strict'
      n.r(t)
      n.d(t, 'default', function () {
        return $
      })
      var o = n('c7eb'),
        a = n('1da1'),
        r = n('5530'),
        i = n('d4ec'),
        s = n('bee2'),
        c = n('262e'),
        d = n('2caf'),
        l = (n('99af'), n('b6c9')),
        u = function () {
          var e = this,
            t = e._self._c
          return e.isAqual
            ? t(
              'div',
              {
                staticClass: 'red-package-wrapper',
                attrs: { 'data-log': '均等红包wrapper' },
              },
              [
                t('audio', {
                  ref: 'showRedMus',
                  staticClass: 'hiden',
                  attrs: { src: n('8e82') },
                }),
                t('audio', {
                  ref: 'getCoinMus',
                  staticClass: 'hiden',
                  attrs: { src: n('ebcc') },
                }),
                'open' == e.redPackageStep
                  ? t('div', { attrs: { 'data-log': '红包open' } }, [
                    'large' == e.redPackageShowStatus
                      ? t(
                        'div',
                        {
                          staticClass: 'red',
                          class: { isCenter: e.redResultType },
                          attrs: { 'data-log': '大红包' },
                          on: {
                            click: function (t) {
                              return e.openRedPackage(1)
                            },
                          },
                        },
                        [e._m(0)]
                      )
                      : e._e(),
                    'small' == e.redPackageShowStatus
                      ? t('div', {
                        staticClass: 'red-small',
                        attrs: { 'data-log': '小红包' },
                        on: {
                          click: function (t) {
                            return e.openRedPackage(0)
                          },
                        },
                      })
                      : e._e(),
                  ])
                  : 'opened' == e.redPackageStep && e.redResultType
                    ? t(
                      'div',
                      {
                        staticClass: 'get-red-result',
                        class: [e.redResultType],
                        attrs: { 'data-log': '红包opened' },
                      },
                      [
                        t('div', { staticClass: 'red-result' }, [
                          t('div', {
                            staticClass: 'red-tips',
                            domProps: {
                              innerHTML: e._s(e.tips[e.redResultType]),
                            },
                          }),
                        ]),
                        t(
                          'div',
                          {
                            staticClass: 'close-red-package',
                            on: { click: e.closeRedPackage },
                          },
                          [t('i', { staticClass: 'icon-close-red-package' })]
                        ),
                      ]
                    )
                    : 'showResult' == e.redPackageStep
                      ? t('div', { staticClass: 'show-red-result' }, [
                        t(
                          'div',
                          {
                            staticClass: 'close-red-package-result',
                            on: { click: e.closeRedPackage },
                          },
                          [
                            t('i', {
                              staticClass: 'icon-close-red-package-result',
                            }),
                          ]
                        ),
                        t('div', { staticClass: 'cur-stu-info' }, [
                          t('div', { staticClass: 'cur-stu-coin' }, [
                            t('span', { staticClass: 'plus-coin-num' }, [
                              e._v('+' + e._s(e.currentStuInfo.coin)),
                            ]),
                            t('span', { staticClass: 'unit' }, [
                              e._v(e._s(e.$t('common.coins'))),
                            ]),
                          ]),
                          t('div', { staticClass: 'cur-stu-avatar' }, [
                            t('img', {
                              attrs: {
                                src: e.currentStuInfo.avatar,
                                alt: e.currentStuInfo.userName,
                              },
                            }),
                          ]),
                        ]),
                        t(
                          'div',
                          { staticClass: 'stu-list' },
                          e._l(e.redResult.list, function (n) {
                            return t('ul', { key: n.userName }, [
                              t('li', [
                                t('div', { staticClass: 'stu-avatar' }, [
                                  t('img', {
                                    attrs: {
                                      src: n.avatar,
                                      alt: n.userName,
                                    },
                                  }),
                                ]),
                                t('div', { staticClass: 'stu-username' }, [
                                  t('span', [e._v(e._s(n.userName))]),
                                ]),
                                t('div', { staticClass: 'stu-coin' }, [
                                  t('span', [e._v('+' + e._s(n.coin))]),
                                ]),
                              ]),
                            ])
                          }),
                          0
                        ),
                        t(
                          'div',
                          {
                            staticClass: 'percentage-of-red-envelopes-received',
                          },
                          [
                            t('p', [
                              e._v(
                                ' ' +
                                e._s(
                                  e.$t(
                                    'classroom.interactions.redPacket.received'
                                  )
                                ) +
                                ' ' +
                                e._s(e.redResult.grabNum) +
                                '/' +
                                e._s(e.redResult.redbagNum) +
                                ' '
                              ),
                            ]),
                          ]
                        ),
                      ])
                      : e._e(),
                'opened' == e.redPackageStep ||
                  'showResult' == e.redPackageStep
                  ? t('div', { staticClass: 'result-mask' })
                  : e._e(),
              ]
            )
            : e.isRain
              ? t(
                'div',
                {
                  staticClass: 'red-rain-wrapper',
                  style: { width: e.rainWidth },
                  attrs: { 'data-log': '红包雨' },
                },
                [
                  t('audio', {
                    ref: 'rainPot',
                    staticClass: 'hidden',
                    attrs: { src: n('b43b') },
                  }),
                  t('audio', {
                    ref: 'redRainClick',
                    staticClass: 'hidden',
                    attrs: { src: n('ab1e') },
                  }),
                  t('audio', {
                    ref: 'coinFly',
                    staticClass: 'hidden',
                    attrs: { src: n('f5b3') },
                  }),
                  e.rainGameShow && e.rainSrc
                    ? t('iframe', {
                      ref: 'rainRed',
                      attrs: {
                        src: e.rainSrc,
                        width: e.rainWidth,
                        height: e.rainHeight,
                        frameborder: '0',
                        allow: 'autoplay',
                      },
                    })
                    : e._e(),
                  e.rainLoading
                    ? t('div', { staticClass: 'redpacket-loading' }, [
                      t(
                        'div',
                        {
                          style: Object(r.a)(
                            {
                              position: 'absolute',
                              width: ''.concat(e.getLoadingWidth, 'px'),
                              height: ''.concat(e.getLoadingHeight, 'px'),
                            },
                            e.getLoadingMargin
                          ),
                        },
                        [
                          t('lottie-player', {
                            attrs: {
                              mode: 'normal',
                              loop: '',
                              autoplay: '',
                              src: '/lottiefiles/redRain/loading/index.json',
                            },
                          }),
                          t('div', { staticClass: 'redpacked-loading-tip' }, [
                            e._v(
                              e._s(
                                e.$t('classroom.interactions.redRain.loading')
                              )
                            ),
                          ]),
                        ],
                        1
                      ),
                    ])
                    : e._e(),
                  t('div', {
                    directives: [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: e.rainPotShow || e.rainCoinShow,
                        expression: 'rainPotShow || rainCoinShow',
                      },
                    ],
                    staticClass: 'mask',
                  }),
                  t(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.rainPotShow,
                          expression: 'rainPotShow',
                        },
                      ],
                      ref: 'potWrap',
                      class: [
                        'red-rain-pot',
                        { 'pot-move': !e.potRemove },
                        { 'pot-remove': e.potRemove },
                      ],
                      style: Object(r.a)(
                        {
                          width: ''.concat(e.getPotWidth, 'px'),
                          height: ''.concat(e.getPotHeight, 'px'),
                        },
                        e.getPotMargin
                      ),
                      on: { animationend: e.potWarpEnd },
                    },
                    [
                      t('lottie-player', {
                        attrs: {
                          id: 'pot',
                          loop: '',
                          mode: 'normal',
                          src: '/lottiefiles/redRain/pot/index.json',
                        },
                      }),
                      t(
                        'div',
                        {
                          staticClass: 'rain-coin',
                          style: e.getRainCoinStyle,
                        },
                        [e._v('+' + e._s(e.rainCoin))]
                      ),
                      t(
                        'div',
                        {
                          ref: 'rainPotBtn',
                          staticClass: 'rain-button',
                          style: e.getRainBtnStyle,
                          on: {
                            pointerdown: e.rainPotBtnDown,
                            pointerup: e.rainPotBtnUp,
                          },
                        },
                        [
                          t('span', { style: e.getRainBtnText }, [
                            e._v(
                              e._s(
                                e.$t('classroom.interactions.redRain.collect')
                              ) +
                              ' (' +
                              e._s(e.rainTime) +
                              's)'
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  t(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.rainCoinShow,
                          expression: 'rainCoinShow',
                        },
                      ],
                      ref: 'rainCoin',
                      staticClass: 'red-rain-pot',
                      style: Object(r.a)(
                        {
                          width: ''.concat(e.getCoinWidth, 'px'),
                          height: ''.concat(e.getCoinHeight, 'px'),
                        },
                        e.getCoinMargin
                      ),
                    },
                    [
                      t('lottie-player', {
                        attrs: {
                          id: 'coinPlay',
                          mode: 'normal',
                          src: '/lottiefiles/redRain/coin/index.json',
                        },
                        on: { complete: e.onLottieComplete },
                      }),
                    ],
                    1
                  ),
                  e.rainCoinShow
                    ? t('Coin', {
                      attrs: {
                        x: e.coinX,
                        y: e.coinY,
                        coin: e.rainCoin,
                      },
                    })
                    : e._e(),
                ],
                1
              )
              : e._e()
        },
        p = [
          function () {
            var e = this,
              t = e._self._c
            return t('div', { staticClass: 'red-package' }, [
              t('div', { staticClass: 'open-red' }),
            ])
          },
        ],
        m = n('b85c'),
        h = (n('caad'), n('2532'), n('d3b7'), n('e6cf'), n('4de4'), n('6ce8')),
        f = n('dbc1'),
        g = n('d0db'),
        C = n('02fc'),
        v = n('e417'),
        k =
          (n('a717'),
            function () {
              var e = this,
                t = e._self._c
              return t(
                'div',
                {
                  staticClass: 'coin',
                  style: e.coinStyle,
                },
                [
                  t('div', {
                    staticClass: 'top1',
                    style: e.targetStyle,
                    on: { animationend: e.addCoinStart },
                  }),
                  t('div', {
                    staticClass: 'top2',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'top3',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'mid1',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'mid2',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'mid3',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'bottom1',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'bottom2',
                    style: e.targetStyle,
                  }),
                  t('div', {
                    staticClass: 'bottom3',
                    style: e.targetStyle,
                  }),
                ]
              )
            }),
        P = [],
        b =
          (n('a9e3'),
          {
            props: {
              x: {
                type: Number,
                default: 0,
              },
              y: {
                type: Number,
                default: 0,
              },
              coin: {
                type: Number,
                default: 0,
              },
            },
            computed: {
              coinStyle: function () {
                return (
                  console.info(
                    '对象函数 coinStyle,filePath:renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                  ),
                  {
                    left: ''.concat(this.x, 'px'),
                    top: ''.concat(this.y, 'px'),
                  }
                )
              },
              getTarget: function () {
                if (
                  (console.info(
                    '对象函数 getTarget,filePath:renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                  ),
                    location.pathname.includes('largeClass.html'))
                ) {
                  console.info(
                    "if(location.pathname.includes('largeClass.html'))为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue"
                  )
                  var e = document.querySelector(
                    '.achievement-container .coins-icon'
                  )
                  if (e) {
                    return (
                      console.info(
                        'if(coin)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                      ),
                      {
                        left: e.left,
                        top: e.top,
                        height: 26,
                        width: 26,
                      }
                    )
                  }
                  var t = document
                    .querySelector('.video-local')
                    .getBoundingClientRect(),
                    n = t.left,
                    o = t.top
                  return {
                    left: n,
                    top: o,
                    height: 22,
                    width: 22,
                  }
                }
                return (
                  console.info(
                    "if(location.pathname.includes('largeClass.html'))为false,触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue"
                  ),
                  document.querySelector('.icon-coins').getBoundingClientRect()
                )
              },
              targetX: function () {
                console.info(
                  '对象函数 targetX,filePath:renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                )
                var e = this.getTarget,
                  t = e.left,
                  n = e.width
                return t - this.x - n / 2
              },
              targetY: function () {
                console.info(
                  '对象函数 targetY,filePath:renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                )
                var e = this.getTarget,
                  t = e.top,
                  n = e.height
                return this.y - t + n / 2
              },
            },
            data: function () {
              return { targetStyle: {} }
            },
            methods: {
              addCoinStart: function () {
                console.info(
                  '对象函数 addCoinStart,filePath:renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                )
                this.$bus.$emit('addCoin', true, this.coin)
              },
            },
            watch: {
              x: function (e) {
                console.info(
                  '对象函数 x(val)',
                  e,
                  'filePath:renderer/components/Classroom/CommonInteractions/redPacket/Coin.vue'
                )
                e &&
                  (this.targetStyle = {
                    left: ''.concat(this.targetX, 'px'),
                    bottom: ''.concat(this.targetY, 'px'),
                  })
              },
            },
          }),
        w = b,
        I = (n('ab09'), n('2877')),
        S = Object(I.a)(w, k, P, false, null, '5d63d60b', null),
        y = S.exports,
        R = n('612a'),
        x = n('c02a'),
        O = null,
        j = {
          components: { Coin: y },
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
          computed: {
            packType: function () {
              return (
                console.info(
                  '对象函数 packType,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                this.options.ircMsg.packType
              )
            },
            rainSrc: function () {
              if (
                (console.info(
                  '对象函数 rainSrc,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                  this.rainHost)
              ) {
                console.info(
                  'if(this.rainHost)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                )
                var e = this.options.ircMsg,
                  t = e.redbagDuration,
                  n = e.redbagQueue,
                  o = e.bombQueue,
                  a = e.action,
                  r = e.parameter,
                  i = ''
                    .concat(this.rainHost, '?redbagDuration=')
                    .concat(t, '&redbagQueue=[')
                    .concat(n, ']&bombQueue=[')
                    .concat(o, ']&action=')
                    .concat(a)
                    .concat(r ? '&' + r : '', '&schoolCode=')
                    .concat(this.schoolCode)
                return (
                  this.sendLogger('加载红包雨Src\uFF1A'.concat(i)), encodeURI(i)
                )
              }
              return ''
            },
            isAqual: function () {
              return (
                console.info(
                  '对象函数 isAqual,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                1 === this.packType
              )
            },
            isRain: function () {
              return (
                console.info(
                  '对象函数 isRain,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                1 !== this.packType
              )
            },
            containerSize: function () {
              if (
                (console.info(
                  '对象函数 containerSize,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                  location.pathname.includes('largeClass.html'))
              ) {
                console.info(
                  "if(location.pathname.includes('largeClass.html'))为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue"
                )
                var e = document.getElementById('interactionController')
                return {
                  width: e.offsetWidth,
                  height: e.offsetHeight,
                }
              }
              return {
                width: R.a.state.smallClass.coursesPosition.width,
                height: R.a.state.smallClass.coursesPosition.height,
              }
            },
            rainWidth: function () {
              return (
                console.info(
                  '对象函数 rainWidth,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                ''.concat(this.containerSize.width, 'px')
              )
            },
            rainHeight: function () {
              return (
                console.info(
                  '对象函数 rainHeight,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                ''.concat(this.containerSize.height, 'px')
              )
            },
            getPotWidth: function () {
              console.info(
                '对象函数 getPotWidth,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              var e = this.containerSize.width / this.containerSize.height
              if (e > 1.167) {
                console.info(
                  'if(ratio > 1.167)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                )
                var t = this.containerSize.height - 64
                return 1.167 * t
              }
              console.info(
                'if(ratio > 1.167)为false,触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              var n = this.containerSize.width - 168
              return n / 1.167
            },
            getPotHeight: function () {
              return (
                console.info(
                  '对象函数 getPotHeight,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                this.getPotWidth / 1.167
              )
            },
            getPotMargin: function () {
              return (
                console.info(
                  '对象函数 getPotMargin,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                {
                  top: ''.concat(
                    (this.containerSize.height - this.getPotHeight) / 2,
                    'px'
                  ),
                  left: ''.concat(
                    (this.containerSize.width - this.getPotWidth) / 2,
                    'px'
                  ),
                }
              )
            },
            getLoadingWidth: function () {
              console.info(
                '对象函数 getLoadingWidth,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              var e = this.containerSize.width / this.containerSize.height
              if (e > 1.108) {
                console.info(
                  'if(ratio > 1.108)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                )
                var t = this.containerSize.height - 235
                return 1.108 * t
              }
              console.info(
                'if(ratio > 1.108)为false,触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              var n = this.containerSize.width - 418
              return n / 1.108
            },
            getLoadingHeight: function () {
              return (
                console.info(
                  '对象函数 getLoadingHeight,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                this.getLoadingWidth / 1.108
              )
            },
            getLoadingMargin: function () {
              return (
                console.info(
                  '对象函数 getLoadingMargin,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                {
                  top: ''.concat(
                    0.38 * (this.containerSize.height - this.getLoadingHeight),
                    'px'
                  ),
                  left: ''.concat(
                    (this.containerSize.width - this.getLoadingWidth) / 2,
                    'px'
                  ),
                }
              )
            },
            getRainCoinStyle: function () {
              return (
                console.info(
                  '对象函数 getRainCoinStyle,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                {
                  left: ''.concat(0.4595959595959596 * this.getPotWidth, 'px'),
                  top: ''.concat(0.41846758349705304 * this.getPotHeight, 'px'),
                  fontSize: ''.concat(
                    0.08644400785854617 * this.getPotHeight,
                    'px'
                  ),
                  lineHeight: ''.concat(
                    0.08644400785854617 * this.getPotHeight,
                    'px'
                  ),
                }
              )
            },
            getRainBtnStyle: function () {
              return (
                console.info(
                  '对象函数 getRainBtnStyle,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                {
                  width: ''.concat(0.2760942760942761 * this.getPotWidth, 'px'),
                  height: ''.concat(
                    0.11984282907662082 * this.getPotHeight,
                    'px'
                  ),
                  top: ''.concat(0.5913555992141454 * this.getPotHeight, 'px'),
                  left: ''.concat(0.36195286195286197 * this.getPotWidth, 'px'),
                }
              )
            },
            getRainBtnText: function () {
              return (
                console.info(
                  '对象函数 getRainBtnText,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                {
                  marginTop: '-'.concat(
                    0.015717092337917484 * this.getPotHeight,
                    'px'
                  ),
                  fontSize: ''.concat(
                    0.03536345776031434 * this.getPotHeight,
                    'px'
                  ),
                }
              )
            },
            getCoinWidth: function () {
              console.info(
                '对象函数 getCoinWidth,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              var e = this.containerSize.width / this.containerSize.height
              if (e > 1.046) {
                console.info(
                  'if(ratio > 1.046)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                )
                var t = 0.40034965034965037 * this.containerSize.height
                return 1.046 * t
              }
              console.info(
                'if(ratio > 1.046)为false,触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              var n = 0.3145478374836173 * this.containerSize.width
              return n / 1.046
            },
            getCoinHeight: function () {
              return (
                console.info(
                  '对象函数 getCoinHeight,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                this.getCoinWidth / 1.046
              )
            },
            getCoinMargin: function () {
              return (
                console.info(
                  '对象函数 getCoinMargin,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                {
                  top: ''.concat(
                    (this.containerSize.height - this.getCoinHeight) / 2,
                    'px'
                  ),
                  left: ''.concat(
                    (this.containerSize.width - this.getCoinWidth) / 2,
                    'px'
                  ),
                }
              )
            },
          },
          mounted: function () {
            var e = this
            return Object(a.a)(
              Object(o.a)().mark(function t() {
                return Object(o.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.$nextTick(function () {
                          e.isAqual
                            ? (e.userTrackLogger('普通红包启动'), e.initAqual())
                            : e.isRain &&
                            (e.userTrackLogger('红包雨启动'), e.initRandom())
                        })
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
            var e
              ; (console.info(
                '对象函数 destroyed,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              ),
                this.isRain)
                ? (this.userTrackLogger('红包雨结束'),
                  null === (e = O) || void 0 === e || e.disconnect(),
                  (O = null),
                  window.removeEventListener('message', this.rainLoad, false))
                : (this.userTrackLogger('普通红包结束'), this.closeRedPackage())
          },
          created: function () {
            var e = this
            return Object(a.a)(
              Object(o.a)().mark(function t() {
                return Object(o.a)().wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), Object(f.a)()
                      case 2:
                        ; (e.rainHost = t.sent),
                          e.sendLogger('红包雨游戏地址:'.concat(e.rainHost))
                      case 4:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          data: function () {
            var e = this.options.roomMessage.roomInfo.stuInfo.id,
              t = this.options.roomMessage.roomInfo.commonOption.planId,
              n = this.options.roomMessage.roomInfo.commonOption.classId,
              o =
                this.options.ircMsg.interactId ||
                this.options.ircMsg.redPacket.interactId,
              a = this.$t(
                'classroom.interactions.redPacket.unfortunatelyRedNotice'
              ),
              r = this.$t('classroom.interactions.redPacket.oopsRedNotice')
            return {
              schoolCode: '',
              rainLoading: true,
              rainStatus: '',
              rainCoin: 0,
              rainTime: 3,
              rainTimer: null,
              rainPotShow: false,
              rainCoinShow: false,
              rainGameShow: true,
              coinX: 0,
              coinY: 0,
              rainHost: '',
              rainDestory: null,
              rainStartTime: Date.now(),
              isAddingCoin: false,
              potRemove: false,
              needPlay: false,
              redPackageStep: '',
              redPackageShowStatus: 'large',
              redResultType: '',
              currentStudentId: e,
              isPlayBack: this.options.roomMessage.roomInfo.isPlayBack,
              currentStuInfo: {},
              params: {
                classId: n,
                planId: t,
                interactId: o,
              },
              redResult: {
                redbagNum: 100,
                grabNum: 10,
                list: [
                  {
                    userId: 101,
                    coin: 10,
                  },
                ],
              },
              tips: {
                'unfortunately-red':
                  '\n          <p style="color:#FFEBEA">\n            '
                    .concat(
                      a[0],
                      '\n          </p>\n          <p style="color:#FFEBEA">\n          '
                    )
                    .concat(a[1], '\n          </p>'),
                'congrats-red': '',
                'oops-red': '<p style="color:#FFEBEA">'.concat(r, '</p>'),
              },
              timer: 0,
              isAttendGrabRedPacket: false,
              isRedGrabing: false,
              disapperTime: 35000,
            }
          },
          methods: {
            initRandom: function () {
              var e = this
              return Object(a.a)(
                Object(o.a)().mark(function t() {
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 initRandom,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            e.$sensors.track('hw_red_package_rain_load', {
                              result: 'start',
                              url: e.rainSrc,
                              is_local: e.rainHost.includes('localhost'),
                            }),
                            localStorage.setItem('redPacketRainStatus', ''),
                            e.onOpenSendData(),
                            Object(f.a)(),
                            (t.next = 7),
                            Object(C.f)()
                          )
                        case 7:
                          ; (e.schoolCode = t.sent),
                            window.addEventListener(
                              'message',
                              e.rainLoad,
                              false
                            ),
                            (O = new ResizeObserver(function (t) {
                              var n,
                                o = Object(m.a)(t)
                              try {
                                for (o.s(); !(n = o.n()).done;) {
                                  var a = n.value,
                                    r = a.contentRect,
                                    i = r.width,
                                    s = r.height
                                  if (0 !== i && 0 !== s) {
                                    var c =
                                      e.$refs.rainCoin.getBoundingClientRect(),
                                      d = c.left,
                                      l = c.top,
                                      u = c.width,
                                      p = c.height
                                    e.coinX = d + (u - 59) / 2
                                    e.coinY = l + (p - 59) / 2
                                  }
                                }
                              } catch (h) {
                                o.e(h)
                              } finally {
                                o.f()
                              }
                            })),
                            O.observe(e.$refs.rainCoin)
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            playCoinLottie: function () {
              if (
                (console.info(
                  '对象函数 playCoinLottie,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                  (this.potRemove = true),
                  (this.rainTime = 3),
                  (this.rainTimer = null),
                  0 === +this.rainCoin)
              ) {
                return (
                  console.info(
                    'if(+this.rainCoin === 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                  ),
                  (this.isAddingCoin = false),
                  (this.rainGameShow = false),
                  void (this.rainDestory && this.rainDestory())
                )
              }
              this.rainCoinShow = true
              this.sendLogger('展示飞金币动效'.concat(this.rainCoinShow))
              this.$refs.coinFly.play()
              document.getElementById('coinPlay').play()
            },
            onLottieComplete: function () {
              console.info(
                '对象函数 onLottieComplete,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.sendLogger('飞金币动效完成')
              this.rainCoinShow = false
              this.rainGameShow = false
              this.isAddingCoin = false
              this.rainDestory && this.rainDestory()
            },
            getCoinStatus: function () {
              var e = this
              return (
                console.info(
                  '对象函数 getCoinStatus,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                new Promise(function (t) {
                  e.rainDestory = t
                })
              )
            },
            getPushData: function () {
              var e = this
              return (
                console.info(
                  '对象函数 getPushData,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                new Promise(function (t) {
                  try {
                    e.$refs.rainRed.contentWindow.postMessage(
                      { type: 'getData' },
                      '*'
                    )
                  } catch (n) {
                    e.sendLogger('红包雨message信息', 'error', {
                      err: 'dom加载失败',
                      meg: n,
                      dom: 'rainRed:'.concat(e.rainSrc),
                    })
                  }
                  e.rainDestory = t
                })
              )
            },
            play: function () {
              if (
                (console.info(
                  '对象函数 play,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                ),
                  (this.rainStatus = 'play'),
                  this.$refs.rainRed && !this.rainLoading)
              ) {
                try {
                  this.$refs.rainRed.contentWindow.postMessage(
                    { type: 'play' },
                    '*'
                  )
                } catch (e) {
                  console.error(e)
                  this.sendLogger('红包雨message信息', 'error', {
                    err: 'dom加载失败',
                    meg: e,
                    dom: 'rainRed:'.concat(this.rainSrc),
                  })
                }
              } else {
                this.needPlay = true
              }
            },
            rainLoad: function (e) {
              var t = this
              return Object(a.a)(
                Object(o.a)().mark(function n() {
                  var a, r, i, s, c, d, l
                  return Object(o.a)().wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 rainLoad(event)',
                              e,
                              'filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                              (t.rainLoading = false),
                              t.needPlay && ((t.needPlay = false), t.play()),
                              (a = e.data.type),
                              t.sendLogger(
                                '红包雨message信息',
                                'error' == a ? 'error' : 'info',
                                { data: e.data }
                              ),
                              'init' !== a)
                          ) {
                            n.next = 11
                            break
                          }
                          'start' === t.options.ircMsg.action
                            ? (t.rainStatus = 'start')
                            : (t.rainStatus = 'play'),
                            t.sendLogger('红包雨init成功'),
                            t.$sensors.track('hw_red_package_rain_load', {
                              result: 'success',
                              url: t.rainSrc,
                              is_local: t.rainHost.includes('localhost'),
                              load_duration: Date.now() - t.rainStartTime,
                            }),
                            (n.next = 31)
                          break
                        case 11:
                          if ('push' !== a) {
                            n.next = 30
                            break
                          }
                          return (
                            clearTimeout(t.rainTimer),
                            (r = t.options.roomMessage.roomInfo.commonOption),
                            (i = r.planId),
                            (s = r.classId),
                            (c = t.options.ircMsg.interactId),
                            (d = {
                              planId: i,
                              classId: s,
                              interactId: c,
                              userId: t.currentStudentId,
                              coin: e.data.coin,
                              grabRedbagQueue: e.data.grabRedbagQueue,
                              grabBombQueue: e.data.grabBombQueue,
                            }),
                            (t.rainCoin = e.data.coin),
                            (t.rainPotShow = true),
                            (t.rainStatus = 'end'),
                            (t.isAddingCoin = true),
                            t.$refs.rainPot.play(),
                            t.sendLogger(
                              '红包雨游戏push完成'.concat(JSON.stringify(d))
                            ),
                            t.countDown(),
                            (n.next = 25),
                            Object(h.f)(t, d)
                          )
                        case 25:
                          ; (l = n.sent),
                            0 !== +l.code &&
                            500 !== +l.code &&
                            (t.$Message.error(l.msg),
                              localStorage.setItem(
                                'redPacketRainReportError',
                                JSON.stringify(d)
                              )),
                            x.h(c, t.rainCoin),
                            (n.next = 31)
                          break
                        case 30:
                          'error' === a &&
                            t.$sensors.track('hw_red_package_rain_load', {
                              result: 'fail',
                              url: t.rainSrc,
                              is_local: t.rainHost.includes('localhost'),
                            })
                        case 31:
                          localStorage.setItem(
                            'redPacketRainKey',
                            t.params.interactId
                          ),
                            localStorage.setItem(
                              'redPacketRainStatus',
                              t.rainStatus
                            )
                        case 33:
                        case 'end':
                          return n.stop()
                      }
                    }
                  }, n)
                })
              )()
            },
            countDown: function () {
              var e = this
              console.info(
                '对象函数 countDown,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              0 === this.rainTime
                ? (this.sendLogger('游戏结束倒计时开始收金币动效'),
                  this.playCoinLottie())
                : (this.rainTimer = setTimeout(function () {
                  e.rainTime--
                  e.countDown()
                }, 1000))
            },
            potWarpEnd: function () {
              console.info(
                '对象函数 potWarpEnd,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.sendLogger('展示获得金币数量弹窗')
              this.potRemove &&
                ((this.rainPotShow = false), (this.potRemove = false))
              document.getElementById('pot').play()
            },
            rainPotBtnDown: function () {
              console.info(
                '对象函数 rainPotBtnDown,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.$refs.rainPotBtn.style.transform = 'scale(0.9)'
            },
            rainPotBtnUp: function () {
              console.info(
                '对象函数 rainPotBtnUp,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.$refs.rainPotBtn.style.transform = 'scale(1)'
              this.rainTimer && setTimeout(this.rainPotClick, 200)
            },
            rainPotClick: function () {
              console.info(
                '对象函数 rainPotClick,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.rainTimer && clearTimeout(this.rainTimer)
              this.sendLogger('游戏结束点击collect按钮开始收金币动效')
              this.rainTimer && this.$refs.redRainClick.play()
              this.playCoinLottie()
            },
            initAqual: function () {
              console.info(
                '对象函数 initAqual,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.getstudentRedBagStatus()
              this.onOpenSendData()
            },
            onOpenSendData: function () {
              var e = this
              return Object(a.a)(
                Object(o.a)().mark(function t() {
                  var n, a, r, i, s, c
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 onOpenSendData,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            (n = e.options.roomMessage.roomInfo.commonOption),
                            (a = n.planId),
                            (r = n.classId),
                            (i = e.options.ircMsg.interactId),
                            (s = {
                              planId: a,
                              classId: r,
                              interactId: i,
                            }),
                            (t.next = 6),
                            Object(h.e)(e, s)
                          )
                        case 6:
                          ; (c = t.sent), c.code, e.sendLogger('上报数据成功')
                        case 9:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            disapperRedPacket: function () {
              var e = this
              console.info(
                '对象函数 disapperRedPacket,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.timer = setTimeout(function () {
                'open' == e.redPackageStep &&
                  (e.sendLogger(
                    '超出时间'.concat(
                      e.disapperTime,
                      '未点击\uFF0C删除红包状态'
                    )
                  ),
                    e.closeRedPackage())
              }, this.disapperTime)
            },
            getstudentRedBagStatus: function () {
              var e = this
              return Object(a.a)(
                Object(o.a)().mark(function t() {
                  var n
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 getstudentRedBagStatus,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            (t.next = 3),
                            Object(f.b)()
                          )
                        case 3:
                          if (
                            ((n = t.sent),
                              e.sendLogger(
                                '初始化红包出现判断红包状态'.concat(
                                  JSON.stringify(n)
                                )
                              ),
                              e.isPlayBack)
                          ) {
                            t.next = 14
                            break
                          }
                          if (
                            (console.info(
                              'if(!_this10.isPlayBack)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                              !n || !n.id || n.id !== e.options.ircMsg.interactId)
                          ) {
                            t.next = 10
                            break
                          }
                          return (
                            console.info(
                              'if(redPacketInteractionInfo && redPacketInteractionInfo.id && redPacketInteractionInfo.id === _this10.options.ircMsg.interactId)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            t.abrupt('return', false)
                          )
                        case 10:
                          return (
                            (t.next = 12),
                            Object(f.d)(e.options.ircMsg.interactId)
                          )
                        case 12:
                          return e.openRedPackageOp(), t.abrupt('return', false)
                        case 14:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            openRedPackageOp: function () {
              var e = this
              console.info(
                '对象函数 openRedPackageOp,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.sendLogger('显示红包')
              this.redPackageStep = 'open'
              this.$nextTick(function () {
                e.$refs.showRedMus.play()
              })
              this.disapperRedPacket()
              setTimeout(function () {
                e.sendLogger('缩略小红包')
                e.redPackageShowStatus = 'small'
              }, 5000)
            },
            openRedPackage: function (e) {
              var t = this
              return Object(a.a)(
                Object(o.a)().mark(function n() {
                  var a, r, i
                  return Object(o.a)().wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (console.info(
                              '对象函数 openRedPackage(clickButton)',
                              e,
                              'filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                              Object(v.e)(
                                'hw_classroom_interact_red_packet_click',
                                t.options.roomMessage.roomInfo.commonOption,
                                {
                                  interact_id: t.options.ircMsg.interactId,
                                  click_button: e,
                                }
                              ),
                              t.sendLogger(
                                '点击'.concat(1 === e ? '大' : '小', '红包')
                              ),
                              !t.isRedGrabing)
                          ) {
                            n.next = 6
                            break
                          }
                          return (
                            console.info(
                              'if(_this12.isRedGrabing)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            n.abrupt('return', false)
                          )
                        case 6:
                          return (
                            (t.isRedGrabing = true),
                            (n.next = 9),
                            Object(h.c)(t, t.params)
                          )
                        case 9:
                          if (
                            ((i = n.sent),
                              x.n(
                                null === (a = t.options) ||
                                  void 0 === a ||
                                  null === (r = a.ircMsg) ||
                                  void 0 === r
                                  ? void 0
                                  : r.interactId,
                                i
                              ),
                              (t.isRedGrabing = false),
                              t.sendLogger(
                                '抢红包结果, res: '.concat(JSON.stringify(i))
                              ),
                              41001 != i.code)
                          ) {
                            n.next = 18
                            break
                          }
                          return (
                            console.info(
                              'if(res.code == 41001)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            (t.redPackageStep = 'opened'),
                            (t.redResultType = 'oops-red'),
                            n.abrupt('return', false)
                          )
                        case 18:
                          if (41002 != i.code) {
                            n.next = 23
                            break
                          }
                          return (
                            console.info(
                              'if(res.code == 41002)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            (t.redPackageStep = 'opened'),
                            (t.redResultType = 'unfortunately-red'),
                            n.abrupt('return', false)
                          )
                        case 23:
                          if (0 == i.code) {
                            n.next = 27
                            break
                          }
                          return (
                            console.info(
                              'if(res.code != 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            t.$Message.warn(i.msg),
                            n.abrupt('return')
                          )
                        case 27:
                          ; (t.redPackageStep = 'opened'),
                            i.data.coin &&
                            ((t.redResultType = 'congrats-red'),
                              (t.tips['congrats-red'] =
                                "<p><span class='get-coin'>+"
                                  .concat(
                                    i.data.coin,
                                    '</span><span class="unit">'
                                  )
                                  .concat(t.$t('common.coins'), '</span></p>')),
                              t.$refs.getCoinMus && t.$refs.getCoinMus.play(),
                              t.$bus.$emit(
                                'updateAchievement',
                                'add',
                                i.data.coin
                              )),
                            clearTimeout(t.timer),
                            (t.timer = setTimeout(function () {
                              t.closeRedPackage()
                            }, 5000))
                        case 31:
                        case 'end':
                          return n.stop()
                      }
                    }
                  }, n)
                })
              )()
            },
            checkResults: function () {
              var e = this
              return Object(a.a)(
                Object(o.a)().mark(function t() {
                  var n
                  return Object(o.a)().wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.info(
                              '对象函数 checkResults,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            (t.next = 3),
                            Object(h.d)(e, e.params)
                          )
                        case 3:
                          if (((n = t.sent), 0 == n.code)) {
                            t.next = 8
                            break
                          }
                          return (
                            console.info(
                              'if(res.code != 0)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                            ),
                            e.$Message.info(n.msg),
                            t.abrupt('return')
                          )
                        case 8:
                          ; (e.redPackageStep = 'showResult'),
                            (e.redResult.redbagNum = n.data.redbagNum),
                            (e.redResult.grabNum = n.data.grabNum),
                            (e.redResult.list = n.data.list),
                            (e.currentStuInfo = n.data.list.filter(function (
                              t
                            ) {
                              if (t.userId === e.currentStudentId) {
                                return (
                                  console.info(
                                    'if(item.userId === _this13.currentStudentId)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                                  ),
                                  console.info(
                                    'if(item.userId === _this13.currentStudentId)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
                                  ),
                                  t
                                )
                              }
                            })),
                            (e.currentStuInfo = e.currentStuInfo[0])
                        case 14:
                        case 'end':
                          return t.stop()
                      }
                    }
                  }, t)
                })
              )()
            },
            closeRedPackage: function () {
              console.info(
                '对象函数 closeRedPackage,filePath:renderer/components/Classroom/CommonInteractions/redPacket/app.vue'
              )
              this.sendLogger('点击关闭红包')
              this.timer && clearTimeout(this.timer)
              this.redPackageStep = ''
              this.isAqual = false
            },
            sendLogger: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'info',
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
              g.a.send({
                tag: 'student.Interact',
                level: t,
                content: Object(r.a)(
                  {
                    msg: e,
                    interactType: 'Redpacket',
                    interactId: this.options.ircMsg.interactId,
                  },
                  n
                ),
              })
            },
            userTrackLogger: function (e) {
              g.a.send({
                tag: 'userTrack',
                content: {
                  msg: e,
                  tag: 'student.Interact',
                  interactType: 'Redpacket',
                },
              })
            },
          },
        },
        _ = j,
        T = (n('6040'), Object(I.a)(_, u, p, false, null, null, null)),
        L = T.exports,
        M = n('3898'),
        D = n('230e'),
        $ = (function (e) {
          Object(c.a)(n, e)
          var t = Object(d.a)(n)
          function n() {
            var e,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            return (
              console.info(
                '函数申明 RedPacket(opts)',
                o,
                'filePath:renderer/components/Classroom/CommonInteractions/redPacket/index.js'
              ),
              Object(i.a)(this, n),
              (e = t.call(this, L)),
              (e.options = o),
              (e.dom = o.roomMessage.roomInfo.interactionController),
              e.initVmApp('红包'),
              e
            )
          }
          return (
            Object(s.a)(n, [
              {
                key: 'createPropsData',
                value: function () {
                  var e = {
                    next: 7,
                    next: 10,
                    next: 14,
                  }
                  return Object(r.a)({ options: this.options }, e)
                },
              },
              {
                key: 'clear',
                value: function () {
                  this.sendLogger('销毁互动')
                  this.vm.$destroy()
                  this.dom.innerHTML = ''
                  this.vm = null
                  this.app = null
                },
              },
              {
                key: 'destroy',
                value: (function () {
                  var e = Object(a.a)(
                    Object(o.a)().mark(function e() {
                      var t,
                        n,
                        a,
                        r = this,
                        i = arguments
                      return Object(o.a)().wrap(
                        function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    i.length > 0 && void 0 !== i[0]
                                      ? i[0]
                                      : {}),
                                    this.sendLogger(
                                      '老师结束了互动, 状态\uFF1A'
                                        .concat(
                                          this.vm.rainStatus,
                                          ', 是否是红包雨: '
                                        )
                                        .concat(this.vm.isRain, ',是否添加金币: ')
                                        .concat(this.vm.isAddingCoin)
                                    ),
                                    (n =
                                      'start' === this.vm.rainStatus ||
                                      'play' === this.vm.rainStatus),
                                    n &&
                                    Object(D.a)({
                                      msg: M.b.t(
                                        'classroom.interactions.redRain.toastTip'
                                      ),
                                      duration: 2000,
                                      parentNode: document.getElementById(
                                        'interactionController'
                                      ),
                                      callback: function () {
                                        'start' === r.vm.rainStatus && r.clear()
                                      },
                                    }),
                                    !this.vm.isRain ||
                                    'play' !== this.vm.rainStatus)
                                ) {
                                  break
                                }
                                return (e.next = 7), this.vm.getPushData()
                              case 7:
                                if (!this.vm.isAddingCoin) {
                                  break
                                }
                                return (e.next = 10), this.vm.getCoinStatus()
                              case 10:
                                if (((a = t.submit), this.vm)) {
                                  break
                                }
                                return (
                                  console.info(
                                    'if(!this.vm)为true触发return,path: /renderer/components/Classroom/CommonInteractions/redPacket/index.js'
                                  ),
                                  e.abrupt('return')
                                )
                              case 14:
                                a && this.vm.submit(),
                                  this.vm.rainStatus &&
                                  'start' !== this.vm.rainStatus &&
                                  this.clear()
                              case 16:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  function t() {
                    return (
                      console.info(
                        '函数申明 destroy, filePath:renderer/components/Classroom/CommonInteractions/redPacket/index.js'
                      ),
                      e.apply(this, arguments)
                    )
                  }
                  return t
                })(),
              },
              {
                key: 'sendLogger',
                value: function (e) {
                  g.a.send({
                    tag: 'student.Interact',
                    content: {
                      msg: e,
                      interactType: 'Redpacket',
                      interactId: this.options.ircMsg.interactId,
                    },
                  })
                },
              },
            ]),
            n
          )
        })(l.a)
    },
    9995: function (e, t, n) { },
    ab09: function (e, t, n) {
      'use strict'
      n('5afe')
    },
    ab1e: function (e, t, n) {
      e.exports = n.p + 'static/media/red-rain-click.ff533fb7.mp3'
    },
    b43b: function (e, t, n) {
      e.exports = n.p + 'static/media/rain-pot.6fc336b1.mp3'
    },
    b6c9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var o = n('d4ec'),
        a = n('bee2'),
        r = (n('99af'), n('d9e2'), n('8bbf')),
        i = n.n(r),
        s = n('3898'),
        c = n('d0db'),
        d = (function () {
          function e(t) {
            console.info(
              '函数申明 InteractionBase(app)',
              t,
              'filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js'
            )
            Object(o.a)(this, e)
            this.app = t
            this.vm = null
            this.keepOtherDom = false
          }
          return (
            Object(a.a)(e, [
              {
                key: 'initVmApp',
                value: function (e) {
                  if (!this.dom) {
                    throw Error('互动的dom容器不存在')
                  }
                  this.dom.children.length > 0 &&
                    !this.keepOtherDom &&
                    (c.a.send({
                      tag: 'tempInteractionTest',
                      content: {
                        msg: '清空互动容器\uFF0C由'
                          .concat(e, '触发清空\uFF0C清空')
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
                value: function (e) {
                  var t = i.a.extend(e),
                    n = this.createPropsData(),
                    o = new t({
                      i18n: s.b,
                      propsData: n,
                      store: this.store || {},
                    })
                  return o.$mount(), o
                },
              },
              {
                key: 'render',
                value: function (e, t) {
                  e.appendChild(t.$el)
                },
              },
              {
                key: 'destroy',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                    t = e.submit
                  this.vm
                    ? (t && this.vm.submit(),
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
                value: function (e, t) {
                  return e[''.concat(t)].properties
                },
              },
              {
                key: 'handleMsg',
                value: function () { },
              },
            ]),
            e
          )
        })()
    },
    dbc1: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return P
      })
      n.d(t, 'b', function () {
        return b
      })
      n.d(t, 'c', function () {
        return w
      })
      n.d(t, 'a', function () {
        return I
      })
      var o = n('5530'),
        a = n('c7eb'),
        r = n('1da1'),
        i = (n('fb6a'), n('99af'), n('0a4b')),
        s = n('2103'),
        c = n('92e5'),
        d = n('6ce8'),
        l = n('e39c'),
        u = n('9b0f'),
        p = n('a32b'),
        m = n('d0db'),
        h = n('8bbf'),
        f = n.n(h),
        g = void 0,
        C = null,
        v = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {},
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 'error'
          m.a.send({
            tag: 'http',
            level: o,
            content: {
              msg: e,
              err: t,
              interactType: 'Redpacket',
              params: n,
            },
          })
        },
        k = function () {
          return Object(p.join)(s.a.appUserDataPath, 'courseware')
        },
        P = (function () {
          var e = Object(r.a)(
            Object(a.a)().mark(function e(t) {
              var n, o
              return Object(a.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(c.a)()
                    case 2:
                      return (
                        (n = e.sent),
                        (o = n.unifiedAccessToken),
                        (e.next = 6),
                        window.thinkApi.ipc.invoke(
                          'setStoreValue',
                          'red_packet_interaction_info',
                          {
                            id: t,
                            unifiedAccessToken: o,
                          }
                        )
                      )
                    case 6:
                    case 'end':
                      return e.stop()
                  }
                }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        b = (function () {
          var e = Object(r.a)(
            Object(a.a)().mark(function e() {
              return Object(a.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        window.thinkApi.ipc.invoke(
                          'getStoreValue',
                          'red_packet_interaction_info'
                        )
                      )
                    case 2:
                      return e.abrupt('return', e.sent)
                    case 3:
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
        })(),
        w = (function () {
          var e = Object(r.a)(
            Object(a.a)().mark(function e() {
              var t, n, r, i, c, h, P, b, w
              return Object(a.a)().wrap(
                function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = localStorage.getItem(
                            'redPacketRainReportError'
                          )),
                            !t)
                        ) {
                          e.next = 20
                          break
                        }
                        return (
                          (e.prev = 2),
                          (t = JSON.parse(t)),
                          (e.next = 6),
                          Object(d.b)({
                            interactId: t.interactId,
                            planId: t.planId,
                            userId: t.userId,
                          })
                        )
                      case 6:
                        if (((n = e.sent), !n)) {
                          e.next = 11
                          break
                        }
                        localStorage.setItem('redPacketRainReportError', ''),
                          (e.next = 15)
                        break
                      case 11:
                        return (e.next = 13), Object(d.f)(g, t)
                      case 13:
                        ; (r = e.sent),
                          0 === r.code &&
                          localStorage.setItem('redPacketRainReportError', '')
                      case 15:
                        e.next = 20
                        break
                      case 17:
                        ; (e.prev = 17),
                          (e.t0 = e.catch(2)),
                          console.error('[红包]json解析error', e.t0)
                      case 20:
                        return (
                          (e.next = 22),
                          Object(d.a)().catch(function (e) {
                            return v('红包雨接口报错:', e), e
                          })
                        )
                      case 22:
                        if (
                          ((i = e.sent),
                            (c = i.code),
                            (h = i.data.redbagrainPackage),
                            0 === +c)
                        ) {
                          e.next = 27
                          break
                        }
                        return e.abrupt('return')
                      case 27:
                        ; (C = h),
                          (P = Object(l.i)(C.offlineZipPath)),
                          (b = k()),
                          Object(u.existsSync)(Object(p.join)(b, P)) ||
                          ((w = {
                            url: h.offlineZipPath,
                            packageSize: h.offlineZipSize,
                            packageMd5: h.offlineZipMd5,
                          }),
                            s.a.downloadCourseware({
                              timeout: 2000,
                              fileURL: h.offlineZipPath,
                              fileMD5: h.offlineZipMd5,
                              start: function (e) { },
                              progress: function (e) { },
                              complete: function (e) {
                                m.a.send({
                                  tag: 'coursewareDownload',
                                  content: Object(o.a)(
                                    Object(o.a)({}, w),
                                    {},
                                    {
                                      downloadCost: parseInt(e.uptime / 1000),
                                      downloadPackageMd5: e.MD5,
                                      isSuccess: 1,
                                    }
                                  ),
                                })
                                f.a.prototype.$sensors.track(
                                  'pc_courseware_download',
                                  Object(o.a)(
                                    Object(o.a)({}, w),
                                    {},
                                    {
                                      statusDesc: 'success',
                                      downloadCost: parseInt(e.uptime / 1000),
                                      downloadPackageMd5: e.MD5 || '',
                                    }
                                  )
                                )
                              },
                              fail: function (e) {
                                m.a.send({
                                  tag: 'coursewareDownload',
                                  content: Object(o.a)(
                                    Object(o.a)({}, w),
                                    {},
                                    {
                                      downloadCost: parseInt(e.uptime / 1000),
                                      downloadPackageMd5: e.MD5 || '',
                                      isSuccess: 0,
                                    }
                                  ),
                                })
                                f.a.prototype.$sensors.track(
                                  'pc_courseware_download',
                                  Object(o.a)(
                                    Object(o.a)({}, w),
                                    {},
                                    {
                                      statusDesc: 'fail',
                                      downloadCost: parseInt(e.uptime / 1000),
                                      downloadPackageMd5: e.MD5 || '',
                                    }
                                  )
                                )
                              },
                            }))
                      case 31:
                      case 'end':
                        return e.stop()
                    }
                  }
                },
                e,
                null,
                [[2, 17]]
              )
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        I = (function () {
          var e = Object(r.a)(
            Object(a.a)().mark(function e() {
              var t, n, o, r, c, u, p, m, h, g, P, b
              return Object(a.a)().wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (C) {
                        e.next = 11
                        break
                      }
                      return (
                        (e.next = 3),
                        Object(d.a)().catch(function (e) {
                          return v('接口报错:红包雨:', e), e || {}
                        })
                      )
                    case 3:
                      if (
                        ((t = e.sent),
                          (n = t.code),
                          (o = t.data),
                          (r = void 0 === o ? {} : o),
                          (c = r.redbagrainPackage),
                          0 === +n)
                      ) {
                        e.next = 10
                        break
                      }
                      return e.abrupt('return')
                    case 10:
                      C = c
                    case 11:
                      return (e.next = 13), i.nativeApi.getClientInfo()
                    case 13:
                      return (
                        (u = e.sent),
                        (p = u.CW_SERVER_ADDRESS),
                        (m = u.CW_WEBROOT),
                        (h = k()),
                        (g = Object(l.i)(C.offlineZipPath)),
                        (P = g.slice(0, g.lastIndexOf('.'))),
                        (e.next = 21),
                        s.a.checkCourseware(
                          g,
                          C.offlineZipMd5,
                          ''.concat(h, '/').concat(m, '/').concat(P)
                        )
                      )
                    case 21:
                      return (
                        (b = e.sent),
                        f.a.prototype.$sensors.track(
                          'pc_courseware_address_source',
                          {
                            type: '红包雨游戏',
                            source: b ? 'local' : 'online',
                          }
                        ),
                        e.abrupt(
                          'return',
                          b
                            ? ''
                              .concat(p)
                              .concat(P, '/redbagrainPackage/index.html')
                            : C.onlinePath
                        )
                      )
                    case 25:
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
    ebcc: function (e, t, n) {
      e.exports = n.p + 'static/media/get-coins.71310f30.mp3'
    },
    f5b3: function (e, t, n) {
      e.exports = n.p + 'static/media/coin-fly.46908c84.mp3'
    },
  },
])
