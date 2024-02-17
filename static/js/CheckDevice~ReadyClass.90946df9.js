; (window.webpackJsonp = window.webpackJsonp || []).push([
   ['CheckDevice~ReadyClass'],
   {
      '0402': function (e, t, n) {
         'use strict'
         var r = n('23e7'),
            i = n('da84'),
            o = n('2cf4').set,
            a = n('20cc'),
            c = i.setImmediate ? a(o, false) : o
         r(
            {
               global: true,
               bind: true,
               enumerable: true,
               forced: i.setImmediate !== c,
            },
            { setImmediate: c }
         )
      },
      '04e1': function (t, n, r) {
         'use strict'
         var i = r('7afa')
         function o(e) {
            this.message = e
         }
         o.prototype = new Error()
         o.prototype.name = 'InvalidTokenError'
         t.exports = function (t, n) {
            if ('string' !== typeof t) {
               throw new o('Invalid token specified')
            }
            n = n || {}
            var r = true === n.header ? 0 : 1
            try {
               return JSON.parse(i(t.split('.')[r]))
            } catch (e) {
               throw new o('Invalid token specified: ' + e.message)
            }
         }
         t.exports.InvalidTokenError = o
      },
      '072a': function (e, t) {
         e.exports = {
            vertex:
               'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n',
            fragment:
               '// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n',
            vertexStripe:
               'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n',
            fragmentStripe:
               "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n",
         }
      },
      '099c': function (e, t, n) {
         'use strict'
         n.d(t, 'b', function () {
            return a
         })
         n.d(t, 'e', function () {
            return c
         })
         n.d(t, 'a', function () {
            return u
         })
         n.d(t, 'd', function () {
            return s
         })
         n.d(t, 'f', function () {
            return l
         })
         n.d(t, 'c', function () {
            return d
         })
         var r = n('c7eb'),
            i = n('1da1'),
            o = n('34bb').remote.systemPreferences,
            a = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), o.getMediaAccessStatus('camera')
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
            c = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), o.getMediaAccessStatus('microphone')
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
            u = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), o.askForMediaAccess('camera')
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
            s = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), o.askForMediaAccess('microphone')
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
            l = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     var t
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), c()
                              case 2:
                                 return (
                                    (t = e.sent),
                                    console.log('getMicrophoneAccessStatus', t),
                                    e.abrupt('return', 'granted' === t)
                                 )
                              case 5:
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
            d = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     var t
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), a()
                              case 2:
                                 return (
                                    (t = e.sent),
                                    console.log('getCameraAccessStatus', t),
                                    e.abrupt('return', 'granted' === t)
                                 )
                              case 5:
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
      '130f': function (e, t, n) {
         'use strict'
         n('e20c')
         n('0402')
      },
      '143c': function (e, t, n) {
         'use strict'
         var r = n('74e8')
         r('Int32', function (e) {
            return function (t, n, r) {
               return e(this, t, n, r)
            }
         })
      },
      '1d1f': function (e, t, n) {
         'use strict'
         n.r(t)
         n.d(t, 'ResizeObserver', function () {
            return Z
         })
         n.d(t, 'ResizeObserverEntry', function () {
            return w
         })
         n.d(t, 'ResizeObserverSize', function () {
            return d
         })
         var r,
            i = [],
            o = function () {
               return i.some(function (e) {
                  return e.activeTargets.length > 0
               })
            },
            a = function () {
               return i.some(function (e) {
                  return e.skippedTargets.length > 0
               })
            },
            u = function () {
               var e
               'function' === typeof ErrorEvent
                  ? (e = new ErrorEvent('error', {
                     message:
                        'ResizeObserver loop completed with undelivered notifications.',
                  }))
                  : ((e = document.createEvent('Event')),
                     e.initEvent('error', false, false),
                     (e.message =
                        'ResizeObserver loop completed with undelivered notifications.'))
               window.dispatchEvent(e)
            }
            ; (function (e) {
               e.BORDER_BOX = 'border-box'
               e.CONTENT_BOX = 'content-box'
               e.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box'
            })(r || (r = {}))
         var s,
            l = function (e) {
               return Object.freeze(e)
            },
            d = (function () {
               function e(e, t) {
                  this.inlineSize = e
                  this.blockSize = t
                  l(this)
               }
               return e
            })(),
            h = (function () {
               function e(e, t, n, r) {
                  return (
                     (this.x = e),
                     (this.y = t),
                     (this.width = n),
                     (this.height = r),
                     (this.top = this.y),
                     (this.left = this.x),
                     (this.bottom = this.top + this.height),
                     (this.right = this.left + this.width),
                     l(this)
                  )
               }
               return (
                  (e.prototype.toJSON = function () {
                     var e = this,
                        t = e.x,
                        n = e.y,
                        r = e.top,
                        i = e.right,
                        o = e.bottom,
                        a = e.left,
                        c = e.width,
                        u = e.height
                     return {
                        x: t,
                        y: n,
                        top: r,
                        right: i,
                        bottom: o,
                        left: a,
                        width: c,
                        height: u,
                     }
                  }),
                  (e.fromRect = function (t) {
                     return new e(t.x, t.y, t.width, t.height)
                  }),
                  e
               )
            })(),
            f = function (e) {
               return e instanceof SVGElement && 'getBBox' in e
            },
            g = function (e) {
               if (f(e)) {
                  var t = e.getBBox(),
                     n = t.width,
                     r = t.height
                  return !n && !r
               }
               var i = e,
                  o = i.offsetWidth,
                  a = i.offsetHeight
               return !(o || a || e.getClientRects().length)
            },
            v = function (e) {
               var t
               if (e instanceof Element) {
                  return true
               }
               var n =
                  null ===
                     (t = null === e || void 0 === e ? void 0 : e.ownerDocument) ||
                     void 0 === t
                     ? void 0
                     : t.defaultView
               return !!(n && e instanceof n.Element)
            },
            m = function (e) {
               switch (e.tagName) {
                  case 'INPUT':
                     if ('image' !== e.type) {
                        break
                     }
                  case 'VIDEO':
                  case 'AUDIO':
                  case 'EMBED':
                  case 'OBJECT':
                  case 'CANVAS':
                  case 'IFRAME':
                  case 'IMG':
                     return true
               }
               return false
            },
            E = 'undefined' !== typeof window ? window : {},
            y = new WeakMap(),
            S = /msie|trident/i.test(E.navigator && E.navigator.userAgent),
            C = function (e) {
               return parseFloat(e || '0')
            },
            k = function (e, t, n) {
               return (
                  void 0 === e && (e = 0),
                  void 0 === t && (t = 0),
                  void 0 === n && (n = false),
                  new d((n ? t : e) || 0, (n ? e : t) || 0)
               )
            },
            A = l({
               devicePixelContentBoxSize: k(),
               borderBoxSize: k(),
               contentBoxSize: k(),
               contentRect: new h(0, 0, 0, 0),
            }),
            R = function (e, t) {
               if ((void 0 === t && (t = false), y.has(e) && !t)) {
                  return y.get(e)
               }
               if (g(e)) {
                  return y.set(e, A), A
               }
               var n = getComputedStyle(e),
                  r = f(e) && e.ownerSVGElement && e.getBBox(),
                  i = !S && 'border-box' === n.boxSizing,
                  o = /^tb|vertical/.test(n.writingMode || ''),
                  a = !r && /auto|scroll/.test(n.overflowY || ''),
                  c = !r && /auto|scroll/.test(n.overflowX || ''),
                  u = r ? 0 : C(n.paddingTop),
                  s = r ? 0 : C(n.paddingRight),
                  d = r ? 0 : C(n.paddingBottom),
                  v = r ? 0 : C(n.paddingLeft),
                  m = r ? 0 : C(n.borderTopWidth),
                  E = r ? 0 : C(n.borderRightWidth),
                  R = r ? 0 : C(n.borderBottomWidth),
                  T = r ? 0 : C(n.borderLeftWidth),
                  w = v + s,
                  P = u + d,
                  x = T + E,
                  D = m + R,
                  _ = c ? e.offsetHeight - D - e.clientHeight : 0,
                  L = a ? e.offsetWidth - x - e.clientWidth : 0,
                  V = i ? w + x : 0,
                  M = i ? P + D : 0,
                  U = r ? r.width : C(n.width) - V - L,
                  I = r ? r.height : C(n.height) - M - _,
                  O = U + w + L + x,
                  B = I + P + _ + D,
                  F = l({
                     devicePixelContentBoxSize: k(
                        Math.round(U * devicePixelRatio),
                        Math.round(I * devicePixelRatio),
                        o
                     ),
                     borderBoxSize: k(O, B, o),
                     contentBoxSize: k(U, I, o),
                     contentRect: new h(v, u, U, I),
                  })
               return y.set(e, F), F
            },
            T = function (e, t, n) {
               var i = R(e, n),
                  o = i.borderBoxSize,
                  a = i.contentBoxSize,
                  c = i.devicePixelContentBoxSize
               switch (t) {
                  case r.DEVICE_PIXEL_CONTENT_BOX:
                     return c
                  case r.BORDER_BOX:
                     return o
                  default:
                     return a
               }
            },
            w = (function () {
               function e(e) {
                  var t = R(e)
                  this.target = e
                  this.contentRect = t.contentRect
                  this.borderBoxSize = l([t.borderBoxSize])
                  this.contentBoxSize = l([t.contentBoxSize])
                  this.devicePixelContentBoxSize = l([t.devicePixelContentBoxSize])
               }
               return e
            })(),
            P = function (e) {
               if (g(e)) {
                  return null
               }
               var t = 0,
                  n = e.parentNode
               while (n) {
                  t += 1
                  n = n.parentNode
               }
               return t
            },
            x = function () {
               var e = 1e400,
                  t = []
               i.forEach(function (n) {
                  if (0 !== n.activeTargets.length) {
                     var r = []
                     n.activeTargets.forEach(function (t) {
                        var n = new w(t.target),
                           i = P(t.target)
                        r.push(n)
                        t.lastReportedSize = T(t.target, t.observedBox)
                        i < e && (e = i)
                     })
                     t.push(function () {
                        n.callback.call(n.observer, r, n.observer)
                     })
                     n.activeTargets.splice(0, n.activeTargets.length)
                  }
               })
               for (var n = 0, r = t; n < r.length; n++) {
                  var o = r[n]
                  o()
               }
               return e
            },
            D = function (e) {
               i.forEach(function (t) {
                  t.activeTargets.splice(0, t.activeTargets.length)
                  t.skippedTargets.splice(0, t.skippedTargets.length)
                  t.observationTargets.forEach(function (n) {
                     n.isActive() &&
                        (P(n.target) > e
                           ? t.activeTargets.push(n)
                           : t.skippedTargets.push(n))
                  })
               })
            },
            _ = function () {
               var e = 0
               D(e)
               while (o()) {
                  e = x()
                  D(e)
               }
               return a() && u(), e > 0
            },
            L = [],
            V = function () {
               return L.splice(0).forEach(function (e) {
                  return e()
               })
            },
            M = function (e) {
               if (!s) {
                  var t = 0,
                     n = document.createTextNode('')
                  new MutationObserver(function () {
                     return V()
                  }).observe(n, r)
                  s = function () {
                     n.textContent = ''.concat(t ? t-- : t++)
                  }
               }
               L.push(e)
               s()
            },
            U = function (e) {
               M(function () {
                  requestAnimationFrame(e)
               })
            },
            I = 0,
            O = function () {
               return !!I
            },
            j = [
               'resize',
               'load',
               'transitionend',
               'animationend',
               'animationstart',
               'animationiteration',
               'keyup',
               'keydown',
               'mouseup',
               'mousedown',
               'mouseover',
               'mouseout',
               'blur',
               'focus',
            ],
            N = function (e) {
               return void 0 === e && (e = 0), Date.now() + e
            },
            W = false,
            X = (function () {
               function e() {
                  var e = this
                  this.stopped = true
                  this.listener = function () {
                     return e.schedule()
                  }
               }
               return (
                  (e.prototype.run = function (e) {
                     var t = this
                     if ((void 0 === e && (e = 250), !W)) {
                        W = true
                        var n = N(e)
                        U(function () {
                           var r = false
                           try {
                              r = _()
                           } finally {
                              if (((W = false), (e = n - N()), !O())) {
                                 return
                              }
                              r ? t.run(1000) : e > 0 ? t.run(e) : t.start()
                           }
                        })
                     }
                  }),
                  (e.prototype.schedule = function () {
                     this.stop()
                     this.run()
                  }),
                  (e.prototype.observe = function () {
                     var e = this,
                        t = function () {
                           return e.observer && e.observer.observe(document.body, F)
                        }
                     document.body ? t() : E.addEventListener('DOMContentLoaded', t)
                  }),
                  (e.prototype.start = function () {
                     var e = this
                     this.stopped &&
                        ((this.stopped = false),
                           (this.observer = new MutationObserver(this.listener)),
                           this.observe(),
                           j.forEach(function (t) {
                              return E.addEventListener(t, e.listener, true)
                           }))
                  }),
                  (e.prototype.stop = function () {
                     var e = this
                     this.stopped ||
                        (this.observer && this.observer.disconnect(),
                           j.forEach(function (t) {
                              return E.removeEventListener(t, e.listener, true)
                           }),
                           (this.stopped = true))
                  }),
                  e
               )
            })(),
            H = new X(),
            z = function (e) {
               !I && e > 0 && H.start()
               I += e
               !I && H.stop()
            },
            G = function (e) {
               return !f(e) && !m(e) && 'inline' === getComputedStyle(e).display
            },
            Y = (function () {
               function e(e, t) {
                  this.target = e
                  this.observedBox = t || r.CONTENT_BOX
                  this.lastReportedSize = {
                     inlineSize: 0,
                     blockSize: 0,
                  }
               }
               return (
                  (e.prototype.isActive = function () {
                     var e = T(this.target, this.observedBox, true)
                     return (
                        G(this.target) && (this.lastReportedSize = e),
                        this.lastReportedSize.inlineSize !== e.inlineSize ||
                        this.lastReportedSize.blockSize !== e.blockSize
                     )
                  }),
                  e
               )
            })(),
            J = (function () {
               function e(e, t) {
                  this.activeTargets = []
                  this.skippedTargets = []
                  this.observationTargets = []
                  this.observer = e
                  this.callback = t
               }
               return e
            })(),
            Q = new WeakMap(),
            q = function (e, t) {
               for (var n = 0; n < e.length; n += 1) {
                  if (e[n].target === t) {
                     return n
                  }
               }
               return -1
            },
            K = (function () {
               function e() { }
               return (
                  (e.connect = function (e, t) {
                     var n = new J(e, t)
                     Q.set(e, n)
                  }),
                  (e.observe = function (e, t, n) {
                     var r = Q.get(e),
                        o = 0 === r.observationTargets.length
                     q(r.observationTargets, t) < 0 &&
                        (o && i.push(r),
                           r.observationTargets.push(new Y(t, n && n.box)),
                           z(1),
                           H.schedule())
                  }),
                  (e.unobserve = function (e, t) {
                     var n = Q.get(e),
                        r = q(n.observationTargets, t),
                        o = 1 === n.observationTargets.length
                     r >= 0 &&
                        (o && i.splice(i.indexOf(n), 1),
                           n.observationTargets.splice(r, 1),
                           z(-1))
                  }),
                  (e.disconnect = function (e) {
                     var t = this,
                        n = Q.get(e)
                     n.observationTargets.slice().forEach(function (n) {
                        return t.unobserve(e, n.target)
                     })
                     n.activeTargets.splice(0, n.activeTargets.length)
                  }),
                  e
               )
            })(),
            Z = (function () {
               function e(e) {
                  if (0 === arguments.length) {
                     throw new TypeError(
                        "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                     )
                  }
                  if ('function' !== typeof e) {
                     throw new TypeError(
                        "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                     )
                  }
                  K.connect(this, e)
               }
               return (
                  (e.prototype.observe = function (e, t) {
                     if (0 === arguments.length) {
                        throw new TypeError(
                           "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                        )
                     }
                     if (!v(e)) {
                        throw new TypeError(
                           "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                        )
                     }
                     K.observe(this, e, t)
                  }),
                  (e.prototype.unobserve = function (e) {
                     if (0 === arguments.length) {
                        throw new TypeError(
                           "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                        )
                     }
                     if (!v(e)) {
                        throw new TypeError(
                           "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                        )
                     }
                     K.unobserve(this, e)
                  }),
                  (e.prototype.disconnect = function () {
                     K.disconnect(this)
                  }),
                  (e.toString = function () {
                     return 'function ResizeObserver () { [polyfill code] }'
                  }),
                  e
               )
            })()
      },
      '20cc': function (e, t, n) {
         'use strict'
         var r = n('da84'),
            i = n('2ba4'),
            o = n('1626'),
            a = n('c6a7'),
            c = n('342f'),
            u = n('f36a'),
            s = n('d6d6'),
            l = r.Function,
            d =
               /MSIE .\./.test(c) ||
               (a &&
                  (function () {
                     var e = r.Bun.version.split('.')
                     return (
                        e.length < 3 ||
                        ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])))
                     )
                  })())
         e.exports = function (e, t) {
            var n = t ? 2 : 1
            return d
               ? function (r, a) {
                  var c = s(arguments.length, 1) > n,
                     d = o(r) ? r : l(r),
                     h = c ? u(arguments, n) : [],
                     f = c
                        ? function () {
                           i(d, this, h)
                        }
                        : d
                  return t ? e(f, a) : e(f)
               }
               : e
         }
      },
      '2ba8': function (e, t, n) {
         ; (function () {
            'use strict'
            var t = n('8a26')
            function r(e, n) {
               var r = 0 | e.format.width,
                  i = 0 | e.format.height,
                  o = 0 | t(e.format.width / e.format.chromaWidth),
                  a = 0 | t(e.format.height / e.format.chromaHeight),
                  c = e.y.bytes,
                  u = e.u.bytes,
                  s = e.v.bytes,
                  l = 0 | e.y.stride,
                  d = 0 | e.u.stride,
                  h = 0 | e.v.stride,
                  f = r << 2,
                  g = 0,
                  v = 0,
                  m = 0,
                  E = 0,
                  y = 0,
                  p = 0,
                  b = 0,
                  S = 0,
                  C = 0,
                  k = 0,
                  A = 0,
                  R = 0,
                  T = 0,
                  w = 0,
                  P = 0,
                  x = 0,
                  D = 0,
                  _ = 0
               if (1 == o && 1 == a) {
                  for (b = 0, S = f, _ = 0, x = 0; x < i; x += 2) {
                     for (
                        v = (x * l) | 0,
                        m = (v + l) | 0,
                        E = (_ * d) | 0,
                        y = (_ * h) | 0,
                        P = 0;
                        P < r;
                        P += 2
                     ) {
                        C = 0 | u[E++]
                        k = 0 | s[y++]
                        R = (((409 * k) | 0) - 57088) | 0
                        T = (((100 * C) | 0) + ((208 * k) | 0) - 34816) | 0
                        w = (((516 * C) | 0) - 70912) | 0
                        A = (298 * c[v++]) | 0
                        n[b] = (A + R) >> 8
                        n[b + 1] = (A - T) >> 8
                        n[b + 2] = (A + w) >> 8
                        b += 4
                        A = (298 * c[v++]) | 0
                        n[b] = (A + R) >> 8
                        n[b + 1] = (A - T) >> 8
                        n[b + 2] = (A + w) >> 8
                        b += 4
                        A = (298 * c[m++]) | 0
                        n[S] = (A + R) >> 8
                        n[S + 1] = (A - T) >> 8
                        n[S + 2] = (A + w) >> 8
                        S += 4
                        A = (298 * c[m++]) | 0
                        n[S] = (A + R) >> 8
                        n[S + 1] = (A - T) >> 8
                        n[S + 2] = (A + w) >> 8
                        S += 4
                     }
                     b += f
                     S += f
                     _++
                  }
               } else {
                  for (p = 0, x = 0; x < i; x++) {
                     for (
                        D = 0,
                        _ = x >> a,
                        g = (x * l) | 0,
                        E = (_ * d) | 0,
                        y = (_ * h) | 0,
                        P = 0;
                        P < r;
                        P++
                     ) {
                        D = P >> o
                        C = 0 | u[E + D]
                        k = 0 | s[y + D]
                        R = (((409 * k) | 0) - 57088) | 0
                        T = (((100 * C) | 0) + ((208 * k) | 0) - 34816) | 0
                        w = (((516 * C) | 0) - 70912) | 0
                        A = (298 * c[g++]) | 0
                        n[p] = (A + R) >> 8
                        n[p + 1] = (A - T) >> 8
                        n[p + 2] = (A + w) >> 8
                        p += 4
                     }
                  }
               }
            }
            e.exports = { convertYCbCr: r }
         })()
      },
      '2d0d': function (e, t, n) {
         n('f8c9')
         n('4ae1')
         n('d3b7')
         var r = n('36c6'),
            i = n('6f8f'),
            o = n('6b58')
         function a(e) {
            var t = i()
            return function () {
               var n,
                  i = r(e)
               if (t) {
                  var a = r(this).constructor
                  n = Reflect.construct(i, arguments, a)
               } else {
                  n = i.apply(this, arguments)
               }
               return o(this, n)
            }
         }
         e.exports = a
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '36c6': function (e, t, n) {
         function r(t) {
            return (
               (e.exports = r =
                  Object.setPrototypeOf
                     ? Object.getPrototypeOf.bind()
                     : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                     }),
               (e.exports.__esModule = true),
               (e.exports.default = e.exports),
               r(t)
            )
         }
         n('131a')
         n('3410')
         e.exports = r
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '3c96': function (e, t, n) {
         function r(e) {
            if (void 0 === e) {
               throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
               )
            }
            return e
         }
         n('d9e2')
         e.exports = r
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '4a4b': function (e, t, n) {
         function r(t, n) {
            return (
               (e.exports = r =
                  Object.setPrototypeOf
                     ? Object.setPrototypeOf.bind()
                     : function (e, t) {
                        return (e.__proto__ = t), e
                     }),
               (e.exports.__esModule = true),
               (e.exports.default = e.exports),
               r(t, n)
            )
         }
         n('131a')
         e.exports = r
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '5bc3': function (e, t, n) {
         var r = n('a395')
         function i(e, t) {
            for (var n = 0; n < t.length; n++) {
               var i = t[n]
               i.enumerable = i.enumerable || false
               i.configurable = true
               'value' in i && (i.writable = true)
               Object.defineProperty(e, r(i.key), i)
            }
         }
         function o(e, t, n) {
            return (
               t && i(e.prototype, t),
               n && i(e, n),
               Object.defineProperty(e, 'prototype', { writable: false }),
               e
            )
         }
         e.exports = o
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '60a7': function (e, t, n) {
         ; (function () {
            'use strict'
            var t = n('dbea'),
               r = n('b27e'),
               i = n('b461'),
               o = {
                  FrameSink: t,
                  SoftwareFrameSink: r,
                  WebGLFrameSink: i,
                  attach: function (e, t) {
                     t = t || {}
                     var n = 'webGL' in t ? t.webGL : i.isAvailable()
                     return n ? new i(e, t) : new r(e, t)
                  },
               }
            e.exports = o
         })()
      },
      6543: function (e, t, n) {
         'use strict'
         n.d(t, 'e', function () {
            return c
         })
         n.d(t, 'a', function () {
            return u
         })
         n.d(t, 'd', function () {
            return s
         })
         n.d(t, 'c', function () {
            return l
         })
         n.d(t, 'b', function () {
            return d
         })
         var r = n('c7eb'),
            i = n('1da1'),
            o = (n('7db0'), n('d3b7'), n('caad'), n('2532'), n('d0db')),
            a = function () {
               var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                     ? arguments[0]
                     : '',
                  t =
                     arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                  n =
                     arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 'info'
               o.a.send({
                  tag: 'device',
                  content: {
                     msg: e,
                     params: JSON.stringify(t),
                  },
                  level: n,
               })
            },
            c = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e(t) {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (
                                    (e.next = 2),
                                    window.thinkApi.ipc.invoke(
                                       'setStoreValue',
                                       'defaultVideoDevice',
                                       t
                                    )
                                 )
                              case 2:
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
            u = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e() {
                     var t
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (
                                    (e.next = 2),
                                    window.thinkApi.ipc.invoke(
                                       'getStoreValue',
                                       'defaultVideoDevice'
                                    )
                                 )
                              case 2:
                                 return (t = e.sent), e.abrupt('return', t || '')
                              case 4:
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
            s = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e(t) {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (
                                    (e.next = 2),
                                    window.thinkApi.ipc.invoke(
                                       'setStoreValue',
                                       'defaultAudioRecordingDevice',
                                       t
                                    )
                                 )
                              case 2:
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
            l = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e(t) {
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (
                                    (e.next = 2),
                                    window.thinkApi.ipc.invoke(
                                       'setStoreValue',
                                       'defaultAudioPlaybackDevice',
                                       t
                                    )
                                 )
                              case 2:
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
            d = (function () {
               var e = Object(i.a)(
                  Object(r.a)().mark(function e(t) {
                     var n, i, o, s, l, d, h, f
                     return Object(r.a)().wrap(function (e) {
                        while (1) {
                           switch ((e.prev = e.next)) {
                              case 0:
                                 return (e.next = 2), u()
                              case 2:
                                 ; (n = e.sent),
                                    (i = t.getVideoDevices()),
                                    (o = i.find(function (e) {
                                       return e.deviceid == n
                                    })),
                                    n && i && o
                                       ? (t.setVideoDevice(n), a('设置为缓存摄像头'))
                                       : ((s = t.getCurrentVideoDevice()),
                                          s
                                             ? (t.setVideoDevice(s),
                                                c(s),
                                                a('设置为当前摄像头', s))
                                             : a('摄像头不存在', {}, 'error')),
                                    (l = t.getAudioPlaybackDevices()),
                                    (d = t.getDefaultAudioPlaybackDevices()),
                                    d.deviceid
                                       ? ((h = d.devicename.toLowerCase()),
                                          h.includes('stereo') &&
                                          ((f = l.find(function (e) {
                                             var t = e.devicename.toLowerCase()
                                             if (t.includes('hands-free')) {
                                                return e
                                             }
                                          })),
                                             null !== f && void 0 !== f && f.deviceid
                                                ? (t.setAudioPlaybackDevice(f.deviceid),
                                                   a('设置hands-free扬声器'))
                                                : a(
                                                   '有立体声\uFF0C但列表中没有普通耳机设备\uFF0C不进行手动设置',
                                                   l,
                                                   'error'
                                                )))
                                       : a('获取扬声器设备失败', d, 'error')
                              case 9:
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
            })()
      },
      '6b58': function (e, t, n) {
         n('d9e2')
         var r = n('7037').default,
            i = n('3c96')
         function o(e, t) {
            if (t && ('object' === r(t) || 'function' === typeof t)) {
               return t
            }
            if (void 0 !== t) {
               throw new TypeError(
                  'Derived constructors may only return object or undefined'
               )
            }
            return i(e)
         }
         e.exports = o
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '6f8f': function (t, n, r) {
         function i() {
            if ('undefined' === typeof Reflect || !Reflect.construct) {
               return false
            }
            if (Reflect.construct.sham) {
               return false
            }
            if ('function' === typeof Proxy) {
               return true
            }
            try {
               return (
                  Boolean.prototype.valueOf.call(
                     Reflect.construct(Boolean, [], function () { })
                  ),
                  true
               )
            } catch (e) {
               return false
            }
         }
         r('d3b7')
         r('4ae1')
         r('f8c9')
         t.exports = i
         t.exports.__esModule = true
         t.exports.default = t.exports
      },
      7037: function (e, t, n) {
         function r(t) {
            return (
               (e.exports = r =
                  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                     ? function (e) {
                        return typeof e
                     }
                     : function (e) {
                        return e &&
                           'function' == typeof Symbol &&
                           e.constructor === Symbol &&
                           e !== Symbol.prototype
                           ? 'symbol'
                           : typeof e
                     }),
               (e.exports.__esModule = true),
               (e.exports.default = e.exports),
               r(t)
            )
         }
         n('a4d3')
         n('e01a')
         n('d3b7')
         n('d28b')
         n('e260')
         n('3ca3')
         n('ddb0')
         e.exports = r
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '734e': function (e, t, n) {
         'use strict'
         var r = n('970b').default,
            i = n('5bc3').default
         Object.defineProperty(t, '__esModule', { value: true })
         t.deprecate = t.Config = t.config = void 0
         var o = function (e) {
            console.warn(
               'This method will be deprecated soon. ',
               e ? 'Please use '.concat(e, ' instead') : ''
            )
         }
         t.deprecate = o
         var a = (function () {
            function e() {
               r(this, e)
               this.glDebug = false
            }
            return (
               i(e, [
                  {
                     key: 'setGlDebug',
                     value: function (e) {
                        this.glDebug = e
                     },
                  },
                  {
                     key: 'getGlDebug',
                     value: function () {
                        return this.glDebug
                     },
                  },
               ]),
               e
            )
         })()
         t.Config = a
         var c = new a()
         t.config = c
      },
      '7afa': function (e, t, n) {
         var r = n('9b81')
         function i(e) {
            return decodeURIComponent(
               r(e).replace(/(.)/g, function (e, t) {
                  var n = t.charCodeAt(0).toString(16).toUpperCase()
                  return n.length < 2 && (n = '0' + n), '%' + n
               })
            )
         }
         e.exports = function (e) {
            var t = e.replace(/-/g, '+').replace(/_/g, '/')
            switch (t.length % 4) {
               case 0:
                  break
               case 2:
                  t += '=='
                  break
               case 3:
                  t += '='
                  break
               default:
                  throw 'Illegal base64url string!'
            }
            try {
               return i(t)
            } catch (n) {
               return r(t)
            }
         }
      },
      '7f31': function (t, n, r) {
         'use strict'
         r('907a')
         r('986a')
         r('1d02')
         r('3c5d')
         r('6ce5')
         r('2834')
         r('4ea1')
         r('99af')
         r('e260')
         r('ace4')
         r('d3b7')
         r('cfc3')
         r('9a8c')
         r('a975')
         r('735e')
         r('c1ac')
         r('d139')
         r('3a7b')
         r('d5d6')
         r('82f8')
         r('e91f')
         r('60bd')
         r('5f96')
         r('3280')
         r('3fcc')
         r('ca91')
         r('25a1')
         r('cd26')
         r('3c5d')
         r('2954')
         r('649e')
         r('219c')
         r('170b')
         r('b39a')
         r('72f7')
         r('5cc6')
         Object.defineProperty(n, '__esModule', { value: true })
         var i = r('9a05').createProgramFromSources,
            o = r('ff4a').EventEmitter,
            a = r('734e'),
            c = a.config,
            u = function (t) {
               var n,
                  a,
                  u,
                  s,
                  l,
                  d,
                  h,
                  f,
                  g,
                  v,
                  m = function (e) {
                     return t(2, e, 'webgl render')
                  },
                  E = {
                     view: void 0,
                     mirrorView: false,
                     container: void 0,
                     canvas: void 0,
                     renderImageCount: 0,
                     initWidth: 0,
                     initHeight: 0,
                     initRotation: 0,
                     clientWidth: 0,
                     clientHeight: 0,
                     contentMode: 0,
                     event: new o(),
                     firstFrameRender: false,
                     lastImageWidth: 0,
                     lastImageHeight: 0,
                     lastImageRotation: 0,
                     videoBuffer: {},
                     gl: void 0,
                  }
               function y(e, t, r, i, o) {
                  var a
                  n.pixelStorei(n.UNPACK_ALIGNMENT, 1)
                  n.activeTexture(n.TEXTURE0)
                  n.bindTexture(n.TEXTURE_2D, d)
                  n.texImage2D(
                     n.TEXTURE_2D,
                     0,
                     n.LUMINANCE,
                     e,
                     t,
                     0,
                     n.LUMINANCE,
                     n.UNSIGNED_BYTE,
                     r
                  )
                  c.getGlDebug() &&
                     ((a = n.getError()),
                        a != n.NO_ERROR &&
                        console.log('upload y plane ', e, t, r.byteLength, ' error', a))
                  n.activeTexture(n.TEXTURE1)
                  n.bindTexture(n.TEXTURE_2D, h)
                  n.texImage2D(
                     n.TEXTURE_2D,
                     0,
                     n.LUMINANCE,
                     e / 2,
                     t / 2,
                     0,
                     n.LUMINANCE,
                     n.UNSIGNED_BYTE,
                     i
                  )
                  c.getGlDebug() &&
                     ((a = n.getError()),
                        a != n.NO_ERROR &&
                        console.log('upload y plane ', e, t, r.byteLength, ' error', a))
                  n.activeTexture(n.TEXTURE2)
                  n.bindTexture(n.TEXTURE_2D, f)
                  n.texImage2D(
                     n.TEXTURE_2D,
                     0,
                     n.LUMINANCE,
                     e / 2,
                     t / 2,
                     0,
                     n.LUMINANCE,
                     n.UNSIGNED_BYTE,
                     o
                  )
                  c.getGlDebug() &&
                     ((a = n.getError()),
                        a != n.NO_ERROR &&
                        console.log('upload y plane ', e, t, r.byteLength, ' error', a))
               }
               function p(e) {
                  e && n && n.deleteBuffer(e)
               }
               function b(e) {
                  e && n && n.deleteTexture(e)
               }
               E.setContentMode = function (e) {
                  E.contentMode = e
               }
               E.bind = function (e) {
                  k(
                     e,
                     E.mirrorView,
                     e.clientWidth,
                     e.clientHeight,
                     E.initRotation,
                     console.warn
                  )
                  var t =
                     window.ResizeObserver ||
                     r('1d1f').ResizeObserver ||
                     window.WebKitMutationObserver ||
                     window.MozMutationObserver
                  t &&
                     ((this.observer = new t(function () {
                        E.refreshCanvas && E.refreshCanvas()
                     })),
                        this.observer.observe(e))
               }
               E.unbind = function () {
                  this.observer &&
                     this.observer.unobserve &&
                     this.observer.disconnect()
                  u = void 0
                  s = void 0
                  l = void 0
                  b(d)
                  b(h)
                  b(f)
                  d = void 0
                  h = void 0
                  f = void 0
                  p(g)
                  p(v)
                  g = void 0
                  v = void 0
                  n = void 0
                  try {
                     E.container &&
                        E.canvas &&
                        E.canvas.parentNode === E.container &&
                        E.container.removeChild(E.canvas)
                     E.view &&
                        E.container &&
                        E.container.parentNode === E.view &&
                        E.view.removeChild(E.container)
                  } catch (e) {
                     console.warn(e)
                  }
                  E.canvas = void 0
                  E.container = void 0
                  E.view = void 0
                  E.mirrorView = false
               }
               E.refreshCanvas = function () {
                  E.lastImageWidth &&
                     R(E.lastImageRotation, E.lastImageWidth, E.lastImageHeight)
               }
               E.renderImage = function (e) {
                  if (n) {
                     if (
                        e.width != E.initWidth ||
                        e.height != E.initHeight ||
                        e.rotation != E.initRotation ||
                        e.mirror != E.mirrorView
                     ) {
                        var t = E.view
                        E.unbind()
                        k(t, e.mirror, e.width, e.height, e.rotation, function (t) {
                           console.error(
                              'init canvas '
                                 .concat(e.width, '*')
                                 .concat(e.height, ' rotation ')
                                 .concat(e.rotation, ' failed. ')
                                 .concat(t)
                           )
                        })
                     }
                     if (E.gl) {
                        n.bindBuffer(n.ARRAY_BUFFER, g)
                        var r = e.width + e.left + e.right,
                           i = e.height + e.top + e.bottom
                        n.bufferData(
                           n.ARRAY_BUFFER,
                           new Float32Array([
                              e.left / r,
                              e.bottom / i,
                              1 - e.right / r,
                              e.bottom / i,
                              e.left / r,
                              1 - e.top / i,
                              e.left / r,
                              1 - e.top / i,
                              1 - e.right / r,
                              e.bottom / i,
                              1 - e.right / r,
                              1 - e.top / i,
                           ]),
                           n.STATIC_DRAW
                        )
                        n.enableVertexAttribArray(l)
                        n.vertexAttribPointer(l, 2, n.FLOAT, false, 0, 0)
                        y(r, i, e.yplane, e.uplane, e.vplane)
                        T(e.rotation, e.width, e.height)
                        n.drawArrays(n.TRIANGLES, 0, 6)
                        E.renderImageCount += 1
                        E.firstFrameRender ||
                           ((E.firstFrameRender = true), E.event.emit('ready'))
                     }
                  } else {
                     console.log('!gl')
                  }
               }
               E.drawFrame = function (e) {
                  var t = e.header,
                     n = e.yUint8Array,
                     r = e.uUint8Array,
                     i = e.vUint8Array,
                     o = new DataView(t),
                     a = (o.getUint8(0), o.getUint8(1)),
                     c = o.getUint16(2),
                     u = o.getUint16(4),
                     s = o.getUint16(6),
                     l = o.getUint16(8),
                     d = o.getUint16(10),
                     h = o.getUint16(12),
                     f = o.getUint16(14),
                     g = (o.getUint32(16), c + s + d),
                     v = u + l + h,
                     y = g * v
                     ; (this.videoBuffer.hasOwnProperty('width') &&
                        this.videoBuffer.width == g &&
                        this.videoBuffer.height == v) ||
                        ((this.videoBuffer.width = g),
                           (this.videoBuffer.height = v),
                           (this.videoBuffer.yplane = new Uint8Array(y)),
                           (this.videoBuffer.uplane = new Uint8Array(y / 4)),
                           (this.videoBuffer.vplane = new Uint8Array(y / 4)))
                  this.videoBuffer.yplane.set(n)
                  this.videoBuffer.uplane.set(r)
                  this.videoBuffer.vplane.set(i)
                  try {
                     E.renderImage({
                        mirror: a,
                        width: c,
                        height: u,
                        left: s,
                        top: l,
                        right: d,
                        bottom: h,
                        rotation: f,
                        yplane: this.videoBuffer.yplane,
                        uplane: this.videoBuffer.uplane,
                        vplane: this.videoBuffer.vplane,
                     })
                  } catch (p) {
                     console.warn(p)
                  }
                  if (!E.gl) {
                     return m && m(this.contentMode), void (m = null)
                  }
                  Date.now()
               }
               function k(t, r, o, c, s, l) {
                  E.clientWidth = t.clientWidth
                  E.clientHeight = t.clientHeight
                  E.view = t
                  E.mirrorView = r
                  E.container = document.createElement('div')
                  E.container.style.width = '100%'
                  E.container.style.height = '100%'
                  E.container.style.display = 'flex'
                  E.container.style.justifyContent = 'center'
                  E.container.style.alignItems = 'center'
                  E.view.appendChild(E.container)
                  E.canvas = document.createElement('canvas')
                  0 == s || 180 == s
                     ? ((E.canvas.width = o), (E.canvas.height = c))
                     : ((E.canvas.width = c), (E.canvas.height = o))
                  E.initWidth = o
                  E.initHeight = c
                  E.initRotation = s
                  E.mirrorView && (E.canvas.style.transform = 'rotateY(180deg)')
                  E.container.appendChild(E.canvas)
                  try {
                     n =
                        E.canvas.getContext('webgl', { preserveDrawingBuffer: true }) ||
                        E.canvas.getContext('experimental-webgl')
                     a = function () {
                        try {
                           n = null
                           E.gl = null
                           E.canvas &&
                              E.canvas.removeEventListener('webglcontextlost', a, false)
                        } catch (e) {
                           console.warn('webglcontextlost error', e)
                        } finally {
                           console.warn('webglcontextlost')
                        }
                     }
                     E.canvas.addEventListener('webglcontextlost', a, false)
                  } catch (e) {
                     console.log(e)
                  }
                  if (!n) {
                     return (
                        (n = void 0),
                        (E.gl = void 0),
                        void l({ error: 'Browser not support! No WebGL detected.' })
                     )
                  }
                  E.gl = n
                  n.clearColor(0, 0, 0, 1)
                  n.enable(n.DEPTH_TEST)
                  n.depthFunc(n.LEQUAL)
                  n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
                  u = i(n, [
                     'attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;   vec2 zeroToTwo = zeroToOne * 2.0;   vec2 clipSpace = zeroToTwo - 1.0;   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}',
                     'precision mediump float;uniform sampler2D Ytex;uniform sampler2D Utex,Vtex;varying vec2 v_texCoord;void main(void) {  float nx,ny,r,g,b,y,u,v;  mediump vec4 txl,ux,vx;  nx=v_texCoord[0];  ny=v_texCoord[1];  y=texture2D(Ytex,vec2(nx,ny)).r;  u=texture2D(Utex,vec2(nx,ny)).r;  v=texture2D(Vtex,vec2(nx,ny)).r;  y=1.1643*(y-0.0625);  u=u-0.5;  v=v-0.5;  r=y+1.5958*v;  g=y-0.39173*u-0.81290*v;  b=y+2.017*u;  gl_FragColor=vec4(r,g,b,1.0);}',
                  ])
                  n.useProgram(u)
                  A()
               }
               function A() {
                  s = n.getAttribLocation(u, 'a_position')
                  l = n.getAttribLocation(u, 'a_texCoord')
                  v = n.createBuffer()
                  g = n.createBuffer()
                  n.activeTexture(n.TEXTURE0)
                  d = n.createTexture()
                  n.bindTexture(n.TEXTURE_2D, d)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST)
                  n.activeTexture(n.TEXTURE1)
                  h = n.createTexture()
                  n.bindTexture(n.TEXTURE_2D, h)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST)
                  n.activeTexture(n.TEXTURE2)
                  f = n.createTexture()
                  n.bindTexture(n.TEXTURE_2D, f)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST)
                  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST)
                  var e = n.getUniformLocation(u, 'Ytex')
                  n.uniform1i(e, 0)
                  var t = n.getUniformLocation(u, 'Utex')
                  n.uniform1i(t, 1)
                  var r = n.getUniformLocation(u, 'Vtex')
                  n.uniform1i(r, 2)
               }
               function R(t, n, r) {
                  E.clientWidth = E.view.clientWidth
                  E.clientHeight = E.view.clientHeight
                  try {
                     0 === E.contentMode
                        ? 0 === t || 180 === t
                           ? E.clientWidth / E.clientHeight > n / r
                              ? (E.canvas.style.zoom = E.clientWidth / n)
                              : (E.canvas.style.zoom = E.clientHeight / r)
                           : E.clientHeight / E.clientWidth > n / r
                              ? (E.canvas.style.zoom = E.clientHeight / n)
                              : (E.canvas.style.zoom = E.clientWidth / r)
                        : 0 === t || 180 === t
                           ? E.clientWidth / E.clientHeight > n / r
                              ? (E.canvas.style.zoom = E.clientHeight / r)
                              : (E.canvas.style.zoom = E.clientWidth / n)
                           : E.clientHeight / E.clientWidth > n / r
                              ? (E.canvas.style.zoom = E.clientWidth / r)
                              : (E.canvas.style.zoom = E.clientHeight / n)
                  } catch (e) {
                     return (
                        console.log('updateCanvas 00001 gone '.concat(E.canvas)),
                        console.log(E),
                        console.error(e),
                        false
                     )
                  }
                  return true
               }
               function T(e, t, r) {
                  if (
                     (t || r
                        ? ((E.lastImageWidth = t),
                           (E.lastImageHeight = r),
                           (E.lastImageRotation = e))
                        : ((t = E.lastImageWidth),
                           (r = E.lastImageHeight),
                           (e = E.lastImageRotation)),
                        R(e, t, r))
                  ) {
                     n.bindBuffer(n.ARRAY_BUFFER, v)
                     n.enableVertexAttribArray(s)
                     n.vertexAttribPointer(s, 2, n.FLOAT, false, 0, 0)
                     var o = {
                        x: t,
                        y: 0,
                     },
                        a = {
                           x: t,
                           y: r,
                        },
                        c = {
                           x: 0,
                           y: r,
                        },
                        l = i,
                        d = o,
                        h = a,
                        f = c
                     switch (e) {
                        case 0:
                           break
                        case 90:
                           ; (l = o), (d = a), (h = c), (f = i)
                           break
                        case 180:
                           ; (l = a), (d = c), (h = i), (f = o)
                           break
                        case 270:
                           ; (l = c), (d = i), (h = o), (f = a)
                           break
                        default:
                     }
                     n.bufferData(
                        n.ARRAY_BUFFER,
                        new Float32Array([
                           l.x,
                           l.y,
                           d.x,
                           d.y,
                           f.x,
                           f.y,
                           f.x,
                           f.y,
                           d.x,
                           d.y,
                           h.x,
                           h.y,
                        ]),
                        n.STATIC_DRAW
                     )
                     var g = n.getUniformLocation(u, 'u_resolution')
                     n.uniform2f(g, t, r)
                  }
               }
               return E
            }
         n.default = u
      },
      '84c3': function (e, t, n) {
         'use strict'
         var r = n('74e8')
         r('Uint16', function (e) {
            return function (t, n, r) {
               return e(this, t, n, r)
            }
         })
      },
      '8a26': function (e, t) {
         ; (function () {
            'use strict'
            function t(e) {
               var t = 0,
                  n = e >> 1
               while (0 != n) {
                  n >>= 1
                  t++
               }
               if (e !== 1 << t) {
                  throw (
                     'chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got ' +
                     e
                  )
               }
               return t
            }
            e.exports = t
         })()
      },
      '8b09': function (e, t, n) {
         'use strict'
         var r = n('74e8')
         r('Int16', function (e) {
            return function (t, n, r) {
               return e(this, t, n, r)
            }
         })
      },
      '970b': function (e, t, n) {
         function r(e, t) {
            if (!(e instanceof t)) {
               throw new TypeError('Cannot call a class as a function')
            }
         }
         n('d9e2')
         e.exports = r
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      '9a05': function (t, n, r) {
         'use strict'
         var i, o, a
         r('14d9')
         r('907a')
         r('986a')
         r('1d02')
         r('3c5d')
         r('6ce5')
         r('2834')
         r('4ea1')
         r('d3b7')
         r('159b')
         r('b64b')
         r('b0c0')
         r('25f0')
         r('d81d')
         r('c19f')
         r('ace4')
         r('e260')
         r('cfc3')
         r('9a8c')
         r('a975')
         r('735e')
         r('c1ac')
         r('d139')
         r('3a7b')
         r('d5d6')
         r('82f8')
         r('e91f')
         r('60bd')
         r('5f96')
         r('3280')
         r('3fcc')
         r('ca91')
         r('25a1')
         r('cd26')
         r('3c5d')
         r('2954')
         r('649e')
         r('219c')
         r('170b')
         r('b39a')
         r('72f7')
         r('4de4')
         r('fd87')
         r('5cc6')
         r('8b09')
         r('84c3')
         r('143c')
         r('fb2c')
            ; (function (e, r) {
               o = []
               i = r
               a = 'function' === typeof i ? i.apply(n, o) : i
               void 0 === a || (t.exports = a)
            })(0, function () {
               var t = this
               function n(e) {
                  t.console &&
                     (t.console.error
                        ? t.console.error(e)
                        : t.console.log && t.console.log(e))
               }
               function r(e) {
                  return (e = e || t), e !== e.top
               }
               function i(e) {
                  return (
                     '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">' +
                     e +
                     '</div></div></td></tr></table>'
                  )
               }
               function c(t, n) {
                  for (
                     var r = ['webgl', 'experimental-webgl'], i = null, o = 0;
                     o < r.length;
                     ++o
                  ) {
                     try {
                        i = t.getContext(r[o], n)
                     } catch (e) { }
                     if (i) {
                        break
                     }
                  }
                  return i
               }
               function u(e, n) {
                  function r(t) {
                     var n = e.parentNode
                     n && (n.innerHTML = i(t))
                  }
                  if (!t.WebGLRenderingContext) {
                     return (
                        r(
                           'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>'
                        ),
                        null
                     )
                  }
                  var u = c(e, n)
                  return (
                     u ||
                     r(
                        'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'
                     ),
                     u
                  )
               }
               function s() {
                  r() && (document.body.className = 'iframe')
               }
               function l(e, t, n) {
                  var i = n || {}
                  if (r()) {
                     if ((s(), !i.dontResize && false !== i.resize)) {
                        var o = e.clientWidth,
                           a = e.clientHeight
                        e.width = o
                        e.height = a
                     }
                  } else {
                     if (!i.noTitle && false !== i.title) {
                        var c = document.title,
                           l = document.createElement('h1')
                        l.innerText = c
                        document.body.insertBefore(l, document.body.children[0])
                     }
                  }
                  var d = u(e, t)
                  return d
               }
               function d(e, t, r, i) {
                  var o = i || n,
                     a = e.createShader(r)
                  e.shaderSource(a, t)
                  e.compileShader(a)
                  var c = e.getShaderParameter(a, e.COMPILE_STATUS)
                  if (!c) {
                     var u = e.getShaderInfoLog(a)
                     return (
                        o("*** Error compiling shader '" + a + "':" + u),
                        e.deleteShader(a),
                        null
                     )
                  }
                  return a
               }
               function h(e, t, r, i, o) {
                  var a = o || n,
                     c = e.createProgram()
                  t.forEach(function (t) {
                     e.attachShader(c, t)
                  })
                  r &&
                     obj_attrib.forEach(function (t, n) {
                        e.bindAttribLocation(c, i ? i[n] : n, t)
                     })
                  e.linkProgram(c)
                  var u = e.getProgramParameter(c, e.LINK_STATUS)
                  if (!u) {
                     var s = e.getProgramInfoLog(c)
                     return a('Error in program linking:' + s), e.deleteProgram(c), null
                  }
                  return c
               }
               function f(e, t, n, r) {
                  var i,
                     o = '',
                     a = document.getElementById(t)
                  if (!a) {
                     throw '*** Error: unknown script element' + t
                  }
                  if (((o = a.text), !n)) {
                     if ('x-shader/x-vertex' === a.type) {
                        i = e.VERTEX_SHADER
                     } else {
                        if ('x-shader/x-fragment' === a.type) {
                           i = e.FRAGMENT_SHADER
                        } else {
                           if (i !== e.VERTEX_SHADER && i !== e.FRAGMENT_SHADER) {
                              throw '*** Error: unknown shader type'
                           }
                        }
                     }
                  }
                  return d(e, o, n || i, r)
               }
               var g = ['VERTEX_SHADER', 'FRAGMENT_SHADER']
               function v(e, t, n, r, i) {
                  for (var o = [], a = 0; a < t.length; ++a) {
                     o.push(f(e, t[a], e[g[a]], i))
                  }
                  return h(e, o, n, r, i)
               }
               function m(e, t, n, r, i) {
                  for (var o = [], a = 0; a < t.length; ++a) {
                     o.push(d(e, t[a], e[g[a]], i))
                  }
                  return h(e, o, n, r, i)
               }
               function E(e, t) {
                  return t === e.SAMPLER_2D
                     ? e.TEXTURE_2D
                     : t === e.SAMPLER_CUBE
                        ? e.TEXTURE_CUBE_MAP
                        : void 0
               }
               function y(e, t) {
                  var n = 0
                  function r(t, r) {
                     var i = e.getUniformLocation(t, r.name),
                        o = r.type,
                        a = r.size > 1 && '[0]' === r.name.substr(-3)
                     if (o === e.FLOAT && a) {
                        return function (t) {
                           e.uniform1fv(i, t)
                        }
                     }
                     if (o === e.FLOAT) {
                        return function (t) {
                           e.uniform1f(i, t)
                        }
                     }
                     if (o === e.FLOAT_VEC2) {
                        return function (t) {
                           e.uniform2fv(i, t)
                        }
                     }
                     if (o === e.FLOAT_VEC3) {
                        return function (t) {
                           e.uniform3fv(i, t)
                        }
                     }
                     if (o === e.FLOAT_VEC4) {
                        return function (t) {
                           e.uniform4fv(i, t)
                        }
                     }
                     if (o === e.INT && a) {
                        return function (t) {
                           e.uniform1iv(i, t)
                        }
                     }
                     if (o === e.INT) {
                        return function (t) {
                           e.uniform1i(i, t)
                        }
                     }
                     if (o === e.INT_VEC2) {
                        return function (t) {
                           e.uniform2iv(i, t)
                        }
                     }
                     if (o === e.INT_VEC3) {
                        return function (t) {
                           e.uniform3iv(i, t)
                        }
                     }
                     if (o === e.INT_VEC4) {
                        return function (t) {
                           e.uniform4iv(i, t)
                        }
                     }
                     if (o === e.BOOL) {
                        return function (t) {
                           e.uniform1iv(i, t)
                        }
                     }
                     if (o === e.BOOL_VEC2) {
                        return function (t) {
                           e.uniform2iv(i, t)
                        }
                     }
                     if (o === e.BOOL_VEC3) {
                        return function (t) {
                           e.uniform3iv(i, t)
                        }
                     }
                     if (o === e.BOOL_VEC4) {
                        return function (t) {
                           e.uniform4iv(i, t)
                        }
                     }
                     if (o === e.FLOAT_MAT2) {
                        return function (t) {
                           e.uniformMatrix2fv(i, false, t)
                        }
                     }
                     if (o === e.FLOAT_MAT3) {
                        return function (t) {
                           e.uniformMatrix3fv(i, false, t)
                        }
                     }
                     if (o === e.FLOAT_MAT4) {
                        return function (t) {
                           e.uniformMatrix4fv(i, false, t)
                        }
                     }
                     if ((o === e.SAMPLER_2D || o === e.SAMPLER_CUBE) && a) {
                        for (var c = [], u = 0; u < info.size; ++u) {
                           c.push(n++)
                        }
                        return (function (t, n) {
                           return function (r) {
                              e.uniform1iv(i, n)
                              r.forEach(function (r, i) {
                                 e.activeTexture(e.TEXTURE0 + n[i])
                                 e.bindTexture(t, r)
                              })
                           }
                        })(E(e, o), c)
                     }
                     if (o === e.SAMPLER_2D || o === e.SAMPLER_CUBE) {
                        return (function (t, n) {
                           return function (r) {
                              e.uniform1i(i, n)
                              e.activeTexture(e.TEXTURE0 + n)
                              e.bindTexture(t, r)
                           }
                        })(E(e, o), n++)
                     }
                     throw 'unknown type: 0x' + o.toString(16)
                  }
                  for (
                     var i = { u: s },
                     o = e.getProgramParameter(t, e.ACTIVE_UNIFORMS),
                     a = 0;
                     a < o;
                     ++a
                  ) {
                     var c = e.getActiveUniform(t, a)
                     if (!c) {
                        break
                     }
                     var u = c.name
                     '[0]' === u.substr(-3) && (u = u.substr(0, u.length - 3))
                     var s = r(t, c)
                  }
                  return i
               }
               function p(e, t) {
                  Object.keys(t).forEach(function (n) {
                     var r = e[n]
                     r && r(t[n])
                  })
               }
               function b(e, t) {
                  var n = {}
                  function r(t) {
                     return function (n) {
                        e.bindBuffer(e.ARRAY_BUFFER, n.buffer)
                        e.enableVertexAttribArray(t)
                        e.vertexAttribPointer(
                           t,
                           n.numComponents || n.size,
                           n.type || e.FLOAT,
                           n.normalize || false,
                           n.stride || 0,
                           n.offset || 0
                        )
                     }
                  }
                  for (
                     var i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0;
                     o < i;
                     ++o
                  ) {
                     var a = e.getActiveAttrib(t, o)
                     if (!a) {
                        break
                     }
                     var c = e.getAttribLocation(t, a.name)
                     n[a.name] = r(c)
                  }
                  return n
               }
               function S(e, t) {
                  Object.keys(t).forEach(function (n) {
                     var r = e[n]
                     r && r(t[n])
                  })
               }
               function C(e, t, n, r, i) {
                  t = t.map(function (e) {
                     var t = document.getElementById(e)
                     return t ? t.text : e
                  })
                  var o = m(e, t, n, r, i)
                  if (!o) {
                     return null
                  }
                  var a = y(e, o),
                     c = b(e, o)
                  return {
                     program: o,
                     uniformSetters: a,
                     attribSetters: c,
                  }
               }
               function k(e, t, n) {
                  S(t, n.attribs)
                  n.indices && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.indices)
               }
               var A = ['', 'MOZ_', 'OP_', 'WEBKIT_']
               function R(e, t) {
                  for (var n = 0; n < A.length; ++n) {
                     var r = A[n] + t,
                        i = e.getExtension(r)
                     if (i) {
                        return i
                     }
                  }
               }
               function T(e, t) {
                  t = t || 1
                  var n = e.clientWidth * t,
                     r = e.clientHeight * t
                  return (
                     (e.width !== n || e.height !== r) &&
                     ((e.width = n), (e.height = r), true)
                  )
               }
               function w(e, t) {
                  var n = 0
                  return (
                     (e.push = function () {
                        for (var t = 0; t < arguments.length; ++t) {
                           var r = arguments[t]
                           if (
                              r instanceof Array ||
                              (r.buffer && r.buffer instanceof ArrayBuffer)
                           ) {
                              for (var i = 0; i < r.length; ++i) {
                                 e[n++] = r[i]
                              }
                           } else {
                              e[n++] = r
                           }
                        }
                     }),
                     (e.reset = function (e) {
                        n = e || 0
                     }),
                     (e.numComponents = t),
                     Object.defineProperty(e, 'numElements', {
                        get: function () {
                           return (this.length / this.numComponents) | 0
                        },
                     }),
                     e
                  )
               }
               function P(e, t, n) {
                  var r = n || Float32Array
                  return w(new r(e * t), e)
               }
               function x(e, t, n, r) {
                  n = n || e.ARRAY_BUFFER
                  var i = e.createBuffer()
                  return e.bindBuffer(n, i), e.bufferData(n, t, r || e.STATIC_DRAW), i
               }
               function D(e) {
                  return 'indices' !== e
               }
               function _(e) {
                  var t = {}
                  return (
                     Object.keys(e)
                        .filter(D)
                        .forEach(function (e) {
                           t['a_' + e] = e
                        }),
                     t
                  )
               }
               function L(e, t) {
                  if (t instanceof Int8Array) {
                     return e.BYTE
                  }
                  if (t instanceof Uint8Array) {
                     return e.UNSIGNED_BYTE
                  }
                  if (t instanceof Int16Array) {
                     return e.SHORT
                  }
                  if (t instanceof Uint16Array) {
                     return e.UNSIGNED_SHORT
                  }
                  if (t instanceof Int32Array) {
                     return e.INT
                  }
                  if (t instanceof Uint32Array) {
                     return e.UNSIGNED_INT
                  }
                  if (t instanceof Float32Array) {
                     return e.FLOAT
                  }
                  throw 'unsupported typed array type'
               }
               function V(e) {
                  return e instanceof Int8Array || e instanceof Uint8Array
               }
               function M(e) {
                  return e.buffer && e.buffer instanceof ArrayBuffer
               }
               function U(e, t) {
                  var n
                  if (
                     ((n =
                        e.indexOf('coord') >= 0 ? 2 : e.indexOf('color') >= 0 ? 4 : 3),
                        t % n > 0)
                  ) {
                     throw 'can not guess numComponents. You should specify it.'
                  }
                  return n
               }
               function I(e, t) {
                  if (M(e)) {
                     return e
                  }
                  Array.isArray(e) && (e = { data: e })
                  e.numComponents || (e.numComponents = U(t, e.length))
                  var n = e.type
                  n || ('indices' === t && (n = Uint16Array))
                  var r = P(e.numComponents, (e.data.length / e.numComponents) | 0, n)
                  return r.push(e.data), r
               }
               function O(e, t, n) {
                  var r = n || _(t),
                     i = {
                        n: {
                           buffer: x(e, a),
                           numComponents: a.numComponents || U(o),
                           type: L(e, a),
                           normalize: V(a),
                        },
                     }
                  return (
                     Object.keys(r).forEach(function (n) {
                        var o = r[n],
                           a = I(t[o], o)
                     }),
                     i
                  )
               }
               function B(e) {
                  var t = Object.keys(e)[0],
                     n = e[t]
                  return M(n) ? n.numElements : n.data.length / n.numComponents
               }
               function F(e, t, n) {
                  var r = { attribs: O(e, t, n) },
                     i = t.indices
                  return (
                     i
                        ? ((i = I(i, 'indices')),
                           (r.indices = x(e, i, e.ELEMENT_ARRAY_BUFFER)),
                           (r.numElements = i.length))
                        : (r.numElements = B(t)),
                     r
                  )
               }
               function j(e, t) {
                  var n = { r: x(e, o, i) }
                  return (
                     Object.keys(t).forEach(function (r) {
                        var i = 'indices' === r ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER,
                           o = I(t[r], name)
                     }),
                     t.indices
                        ? (n.numElements = t.indices.length)
                        : t.position && (n.numElements = t.position.length / 3),
                     n
                  )
               }
               function N(e, t, n, r, i) {
                  var o = n.indices,
                     a = void 0 === r ? n.numElements : r
                  i = void 0 === i ? i : 0
                  o ? e.drawElements(t, a, e.UNSIGNED_SHORT, i) : e.drawArrays(t, i, a)
               }
               function W(e, t) {
                  var n = null,
                     r = null
                  t.forEach(function (t) {
                     var i = t.programInfo,
                        o = t.bufferInfo,
                        a = false
                     i !== n && ((n = i), e.useProgram(i.program), (a = true))
                        ; (a || o !== r) && ((r = o), k(e, i.attribSetters, o))
                     p(i.uniformSetters, t.uniforms)
                     N(e, e.TRIANGLES, o)
                  })
               }
               return {
                  createAugmentedTypedArray: P,
                  createAttribsFromArrays: O,
                  createBuffersFromArrays: j,
                  createBufferInfoFromArrays: F,
                  createAttributeSetters: b,
                  createProgram: h,
                  createProgramFromScripts: v,
                  createProgramFromSources: m,
                  createProgramInfo: C,
                  createUniformSetters: y,
                  drawBufferInfo: N,
                  drawObjectList: W,
                  getWebGLContext: l,
                  updateCSSIfInIFrame: s,
                  getExtensionWithKnownPrefixes: R,
                  resizeCanvasToDisplaySize: T,
                  setAttributes: S,
                  setBuffersAndAttributes: k,
                  setUniforms: p,
                  setupWebGL: u,
               }
            })
      },
      '9b81': function (e, t) {
         var n =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
         function r(e) {
            this.message = e
         }
         function i(e) {
            var t = String(e).replace(/=+$/, '')
            if (t.length % 4 == 1) {
               throw new r(
                  "'atob' failed: The string to be decoded is not correctly encoded."
               )
            }
            for (
               var i, o, a = 0, c = 0, u = '';
               (o = t.charAt(c++));
               ~o && ((i = a % 4 ? 64 * i + o : o), a++ % 4)
                  ? (u += String.fromCharCode(255 & (i >> ((-2 * a) & 6))))
                  : 0
            ) {
               o = n.indexOf(o)
            }
            return u
         }
         r.prototype = new Error()
         r.prototype.name = 'InvalidCharacterError'
         e.exports =
            ('undefined' !== typeof window &&
               window.atob &&
               window.atob.bind(window)) ||
            i
      },
      a395: function (e, t, n) {
         var r = n('7037').default,
            i = n('e50d')
         function o(e) {
            var t = i(e, 'string')
            return 'symbol' === r(t) ? t : String(t)
         }
         e.exports = o
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      a9a6: function (e, t, n) {
         'use strict'
         n.d(t, 'a', function () {
            return u
         })
         var r = n('d4ec'),
            i = n('bee2'),
            o = n('262e'),
            a = n('2caf'),
            c = (n('99af'), n('ff4a')),
            u = (function (e) {
               Object(o.a)(n, e)
               var t = Object(a.a)(n)
               function n() {
                  return Object(r.a)(this, n), t.call(this)
               }
               return (
                  Object(i.a)(n, [
                     {
                        key: 'logger',
                        value: function (e) {
                           var t = e.type,
                              n = void 0 === t ? 'info' : t,
                              r = e.msg,
                              i = void 0 === r ? '' : r,
                              o = e.params,
                              a = void 0 === o ? {} : o
                           console[n](
                              '\u3010 ThinkClass '
                                 .concat(n, ' \u3011')
                                 .concat(i, ' ')
                                 .concat(JSON.stringify(a))
                           )
                           window.thinkApi.logger(
                              n,
                              {
                                 msg: i,
                                 params: a,
                              },
                              '\u3010ThinkClass\u3011'
                           )
                        },
                     },
                  ]),
                  n
               )
            })(c.EventEmitter)
      },
      b27e: function (e, t, n) {
         ; (function () {
            'use strict'
            var t = n('dbea'),
               r = n('2ba8')
            function i(e) {
               var t = this,
                  n = e.getContext('2d'),
                  i = null,
                  o = null,
                  a = null
               function c(e, t) {
                  i = n.createImageData(e, t)
                  for (var r = i.data, o = e * t * 4, a = 0; a < o; a += 4) {
                     r[a + 3] = 255
                  }
               }
               function u(e, t) {
                  o = document.createElement('canvas')
                  o.width = e
                  o.height = t
                  a = o.getContext('2d')
               }
               return (
                  (t.drawFrame = function (t) {
                     var s = t.format
                        ; (e.width === s.displayWidth && e.height === s.displayHeight) ||
                           ((e.width = s.displayWidth), (e.height = s.displayHeight))
                        ; (null !== i && i.width == s.width && i.height == s.height) ||
                           c(s.width, s.height)
                     r.convertYCbCr(t, i.data)
                     var l,
                        d =
                           s.cropWidth != s.displayWidth ||
                           s.cropHeight != s.displayHeight
                     d ? (o || u(s.cropWidth, s.cropHeight), (l = a)) : (l = n)
                     l.putImageData(
                        i,
                        -s.cropLeft,
                        -s.cropTop,
                        s.cropLeft,
                        s.cropTop,
                        s.cropWidth,
                        s.cropHeight
                     )
                     d && n.drawImage(o, 0, 0, s.displayWidth, s.displayHeight)
                  }),
                  (t.clear = function () {
                     n.clearRect(0, 0, e.width, e.height)
                  }),
                  t
               )
            }
            i.prototype = Object.create(t.prototype)
            e.exports = i
         })()
      },
      b461: function (t, n, r) {
         ; (function () {
            'use strict'
            var n = r('dbea'),
               i = r('072a')
            function o(e) {
               var t,
                  n,
                  r = this,
                  a = o.contextForCanvas(e)
               if (null === a) {
                  throw new Error('WebGL unavailable')
               }
               function c(e, t) {
                  var n = a.createShader(e)
                  if (
                     (a.shaderSource(n, t),
                        a.compileShader(n),
                        !a.getShaderParameter(n, a.COMPILE_STATUS))
                  ) {
                     var r = a.getShaderInfoLog(n)
                     throw (
                        (a.deleteShader(n),
                           new Error('GL shader compilation for ' + e + ' failed: ' + r))
                     )
                  }
                  return n
               }
               var u,
                  s,
                  l,
                  d,
                  h,
                  f,
                  g,
                  v,
                  m,
                  E,
                  y = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                  p = {},
                  b = {},
                  S = {}
               function C(e, t) {
                  return (p[e] && !t) || (p[e] = a.createTexture()), p[e]
               }
               function k(e, t, n, r, i) {
                  var c = !p[e] || t,
                     u = C(e, t)
                  if ((a.activeTexture(a.TEXTURE0), o.stripe)) {
                     var s = !p[e + '_temp'] || t,
                        l = C(e + '_temp', t)
                     a.bindTexture(a.TEXTURE_2D, l)
                     s
                        ? (a.texParameteri(
                           a.TEXTURE_2D,
                           a.TEXTURE_WRAP_S,
                           a.CLAMP_TO_EDGE
                        ),
                           a.texParameteri(
                              a.TEXTURE_2D,
                              a.TEXTURE_WRAP_T,
                              a.CLAMP_TO_EDGE
                           ),
                           a.texParameteri(
                              a.TEXTURE_2D,
                              a.TEXTURE_MIN_FILTER,
                              a.NEAREST
                           ),
                           a.texParameteri(
                              a.TEXTURE_2D,
                              a.TEXTURE_MAG_FILTER,
                              a.NEAREST
                           ),
                           a.texImage2D(
                              a.TEXTURE_2D,
                              0,
                              a.RGBA,
                              n / 4,
                              r,
                              0,
                              a.RGBA,
                              a.UNSIGNED_BYTE,
                              i
                           ))
                        : a.texSubImage2D(
                           a.TEXTURE_2D,
                           0,
                           0,
                           0,
                           n / 4,
                           r,
                           a.RGBA,
                           a.UNSIGNED_BYTE,
                           i
                        )
                     var d = p[e + '_stripe'],
                        h = !d || t
                     h && (d = C(e + '_stripe', t))
                     a.bindTexture(a.TEXTURE_2D, d)
                     h &&
                        (a.texParameteri(
                           a.TEXTURE_2D,
                           a.TEXTURE_WRAP_S,
                           a.CLAMP_TO_EDGE
                        ),
                           a.texParameteri(
                              a.TEXTURE_2D,
                              a.TEXTURE_WRAP_T,
                              a.CLAMP_TO_EDGE
                           ),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST),
                           a.texImage2D(
                              a.TEXTURE_2D,
                              0,
                              a.RGBA,
                              n,
                              1,
                              0,
                              a.RGBA,
                              a.UNSIGNED_BYTE,
                              T(n, 1)
                           ))
                  } else {
                     a.bindTexture(a.TEXTURE_2D, u)
                     c
                        ? (a.texParameteri(
                           a.TEXTURE_2D,
                           a.TEXTURE_WRAP_S,
                           a.CLAMP_TO_EDGE
                        ),
                           a.texParameteri(
                              a.TEXTURE_2D,
                              a.TEXTURE_WRAP_T,
                              a.CLAMP_TO_EDGE
                           ),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                           a.texImage2D(
                              a.TEXTURE_2D,
                              0,
                              a.ALPHA,
                              n,
                              r,
                              0,
                              a.ALPHA,
                              a.UNSIGNED_BYTE,
                              i
                           ))
                        : a.texSubImage2D(
                           a.TEXTURE_2D,
                           0,
                           0,
                           0,
                           n,
                           r,
                           a.ALPHA,
                           a.UNSIGNED_BYTE,
                           i
                        )
                  }
               }
               function A(e, t, r, i) {
                  var o = p[e]
                  a.useProgram(n)
                  var c = b[e]
                     ; (c && !t) ||
                        (a.activeTexture(a.TEXTURE0),
                           a.bindTexture(a.TEXTURE_2D, o),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                           a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                           a.texImage2D(
                              a.TEXTURE_2D,
                              0,
                              a.RGBA,
                              r,
                              i,
                              0,
                              a.RGBA,
                              a.UNSIGNED_BYTE,
                              null
                           ),
                           (c = b[e] = a.createFramebuffer()))
                  a.bindFramebuffer(a.FRAMEBUFFER, c)
                  a.framebufferTexture2D(
                     a.FRAMEBUFFER,
                     a.COLOR_ATTACHMENT0,
                     a.TEXTURE_2D,
                     o,
                     0
                  )
                  var g = p[e + '_temp']
                  a.activeTexture(a.TEXTURE1)
                  a.bindTexture(a.TEXTURE_2D, g)
                  a.uniform1i(f, 1)
                  var v = p[e + '_stripe']
                  a.activeTexture(a.TEXTURE2)
                  a.bindTexture(a.TEXTURE_2D, v)
                  a.uniform1i(h, 2)
                  a.bindBuffer(a.ARRAY_BUFFER, u)
                  a.enableVertexAttribArray(s)
                  a.vertexAttribPointer(s, 2, a.FLOAT, false, 0, 0)
                  a.bindBuffer(a.ARRAY_BUFFER, l)
                  a.enableVertexAttribArray(d)
                  a.vertexAttribPointer(d, 2, a.FLOAT, false, 0, 0)
                  a.viewport(0, 0, r, i)
                  a.drawArrays(a.TRIANGLES, 0, y.length / 2)
                  a.bindFramebuffer(a.FRAMEBUFFER, null)
               }
               function R(e, n, r) {
                  a.activeTexture(n)
                  a.bindTexture(a.TEXTURE_2D, p[e])
                  a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE)
                  a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)
                  a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR)
                  a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR)
                  a.uniform1i(a.getUniformLocation(t, e), r)
               }
               function T(e) {
                  if (S[e]) {
                     return S[e]
                  }
                  for (var t = e, n = new Uint32Array(t), r = 0; r < t; r += 4) {
                     n[r] = 255
                     n[r + 1] = 65280
                     n[r + 2] = 16711680
                     n[r + 3] = 4278190080
                  }
                  return (S[e] = new Uint8Array(n.buffer))
               }
               function w(e, t) {
                  var n = c(a.VERTEX_SHADER, e),
                     r = c(a.FRAGMENT_SHADER, t),
                     i = a.createProgram()
                  if (
                     (a.attachShader(i, n),
                        a.attachShader(i, r),
                        a.linkProgram(i),
                        !a.getProgramParameter(i, a.LINK_STATUS))
                  ) {
                     var o = a.getProgramInfoLog(i)
                     throw (
                        (a.deleteProgram(i),
                           new Error('GL program linking failed: ' + o))
                     )
                  }
                  return i
               }
               function P() {
                  if (o.stripe) {
                     n = w(i.vertexStripe, i.fragmentStripe)
                     a.getAttribLocation(n, 'aPosition')
                     l = a.createBuffer()
                     var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1])
                     a.bindBuffer(a.ARRAY_BUFFER, l)
                     a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW)
                     d = a.getAttribLocation(n, 'aTexturePosition')
                     h = a.getUniformLocation(n, 'uStripe')
                     f = a.getUniformLocation(n, 'uTexture')
                  }
                  t = w(i.vertex, i.fragment)
                  u = a.createBuffer()
                  a.bindBuffer(a.ARRAY_BUFFER, u)
                  a.bufferData(a.ARRAY_BUFFER, y, a.STATIC_DRAW)
                  s = a.getAttribLocation(t, 'aPosition')
                  g = a.createBuffer()
                  v = a.getAttribLocation(t, 'aLumaPosition')
                  m = a.createBuffer()
                  E = a.getAttribLocation(t, 'aChromaPosition')
               }
               return (
                  (r.drawFrame = function (n) {
                     var i = n.format,
                        c =
                           !t ||
                           e.width !== i.displayWidth ||
                           e.height !== i.displayHeight
                     if (
                        (c &&
                           ((e.width = i.displayWidth),
                              (e.height = i.displayHeight),
                              r.clear()),
                           t || P(),
                           c)
                     ) {
                        var l = function (e, t, n) {
                           var r = i.cropLeft / n,
                              o = (i.cropLeft + i.cropWidth) / n,
                              c = (i.cropTop + i.cropHeight) / i.height,
                              u = i.cropTop / i.height,
                              s = new Float32Array([r, c, o, c, r, u, r, u, o, c, o, u])
                           a.bindBuffer(a.ARRAY_BUFFER, e)
                           a.bufferData(a.ARRAY_BUFFER, s, a.STATIC_DRAW)
                        }
                        l(g, v, n.y.stride)
                        l(m, E, (n.u.stride * i.width) / i.chromaWidth)
                     }
                     k('uTextureY', c, n.y.stride, i.height, n.y.bytes)
                     k('uTextureCb', c, n.u.stride, i.chromaHeight, n.u.bytes)
                     k('uTextureCr', c, n.v.stride, i.chromaHeight, n.v.bytes)
                     o.stripe &&
                        (A('uTextureY', c, n.y.stride, i.height),
                           A('uTextureCb', c, n.u.stride, i.chromaHeight),
                           A('uTextureCr', c, n.v.stride, i.chromaHeight))
                     a.useProgram(t)
                     a.viewport(0, 0, e.width, e.height)
                     R('uTextureY', a.TEXTURE0, 0)
                     R('uTextureCb', a.TEXTURE1, 1)
                     R('uTextureCr', a.TEXTURE2, 2)
                     a.bindBuffer(a.ARRAY_BUFFER, u)
                     a.enableVertexAttribArray(s)
                     a.vertexAttribPointer(s, 2, a.FLOAT, false, 0, 0)
                     a.bindBuffer(a.ARRAY_BUFFER, g)
                     a.enableVertexAttribArray(v)
                     a.vertexAttribPointer(v, 2, a.FLOAT, false, 0, 0)
                     a.bindBuffer(a.ARRAY_BUFFER, m)
                     a.enableVertexAttribArray(E)
                     a.vertexAttribPointer(E, 2, a.FLOAT, false, 0, 0)
                     a.drawArrays(a.TRIANGLES, 0, y.length / 2)
                  }),
                  (r.clear = function () {
                     a.viewport(0, 0, e.width, e.height)
                     a.clearColor(0, 0, 0, 0)
                     a.clear(a.COLOR_BUFFER_BIT)
                  }),
                  r.clear(),
                  r
               )
            }
            o.stripe = false
            o.contextForCanvas = function (e) {
               return (
                  e.getContext('webgl', t) || e.getContext('experimental-webgl', t)
               )
            }
            o.isAvailable = function () {
               var t,
                  n = document.createElement('canvas')
               n.width = 1
               n.height = 1
               try {
                  t = o.contextForCanvas(n)
               } catch (e) {
                  return false
               }
               if (t) {
                  var r = t.TEXTURE0,
                     c = t.createTexture(),
                     u = new Uint8Array(16),
                     s = o.stripe ? 1 : 4,
                     l = o.stripe ? t.RGBA : t.ALPHA,
                     d = o.stripe ? t.NEAREST : t.LINEAR
                  t.activeTexture(r)
                  t.bindTexture(t.TEXTURE_2D, c)
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE)
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, d)
                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, d)
                  t.texImage2D(t.TEXTURE_2D, 0, l, s, 4, 0, l, t.UNSIGNED_BYTE, u)
                  var h = t.getError()
                  return !h
               }
               return false
            }
            o.prototype = Object.create(n.prototype)
            t.exports = o
         })()
      },
      bd12: function (e, t, n) {
         'use strict'
         var r = function () {
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
            i = [
               function () {
                  var e = this,
                     t = e._self._c
                  return t('div', { staticClass: 'loading-contenter' }, [
                     t('div', { staticClass: 'loading-logo' }, [
                        t('img', { attrs: { src: n('c63e') } }),
                     ]),
                     t('div', { staticClass: 'loading-animation' }),
                  ])
               },
            ],
            o = {
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
            a = o,
            c = (n('f761'), n('2877')),
            u = Object(c.a)(a, r, i, false, null, '92d727e8', null)
         t.a = u.exports
      },
      c19f: function (e, t, n) {
         'use strict'
         var r = n('23e7'),
            i = n('da84'),
            o = n('621a'),
            a = n('2626'),
            u = o.ArrayBuffer,
            s = i.ArrayBuffer
         r(
            {
               global: true,
               constructor: true,
               forced: s !== u,
            },
            { ArrayBuffer: u }
         )
         a('ArrayBuffer')
      },
      c1f6: function (e, t, n) {
         'use strict'
         n.d(t, 'a', function () {
            return f
         })
         var r = n('d4ec'),
            i = n('bee2'),
            o = n('262e'),
            a = n('2caf'),
            c = (n('d9e2'), n('99af'), n('b64b'), n('04e1')),
            u = n.n(c),
            s = (n('d3b7'), n('25f0'), n('ac1f'), n('4d63'), n('5319'), n('ff4a')),
            l = (function (e) {
               Object(o.a)(n, e)
               var t = Object(a.a)(n)
               function n() {
                  var e
                  return (
                     Object(r.a)(this, n),
                     (e = t.call(this)),
                     (e.sdkVersion = '3.7.2-rc.4-build.414'),
                     (e.build = null),
                     (e.version = null),
                     (e.updateTime = '__UPDATE_TIME__'),
                     e
                  )
               }
               return (
                  Object(i.a)(n, [
                     {
                        key: 'padZero',
                        value: function (e) {
                           var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                 ? arguments[1]
                                 : 2
                           return 2 === t
                              ? e >= 0 && e < 10
                                 ? '0'.concat(e)
                                 : String(e)
                              : e < 10
                                 ? '00'.concat(e)
                                 : e < 100
                                    ? '0'.concat(e)
                                    : String(e)
                        },
                     },
                     {
                        key: 'formatDate',
                        value: function (e) {
                           var t,
                              n =
                                 arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : ''
                           e = e || 'Y-m-d'
                           var r = n ? new Date(n) : new Date(),
                              i = {
                                 'Y+': r.getFullYear().toString(),
                                 'M+': this.padZero(r.getMonth() + 1).toString(),
                                 'D+': this.padZero(r.getDate()).toString(),
                                 'H+': this.padZero(r.getHours()).toString(),
                                 'm+': this.padZero(r.getMinutes()).toString(),
                                 's+': this.padZero(r.getSeconds()).toString(),
                                 'S+': this.padZero(r.getMilliseconds(), 3).toString(),
                              }
                           for (var o in i)
                              (t = new RegExp('(' + o + ')').exec(e)),
                                 t && (e = e.replace(t[1], i[o]))
                           return e
                        },
                     },
                     {
                        key: 'serialize',
                        value: function (e) {
                           return 'string' === typeof e ? e : JSON.stringify(e)
                        },
                     },
                     {
                        key: 'logger',
                        value: function (e, t) {
                           var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                 ? arguments[2]
                                 : '',
                              r =
                                 arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : 'AgoraRtcEngine'
                           console.log(
                              '%c '
                                 .concat(r, ' [')
                                 .concat(this.formatDate('HH:mm:ss.SSS'), '] %c [')
                                 .concat(t, '] %c ')
                                 .concat(this.serialize(n), ' '),
                              'background:#'.concat(
                                 'AgoraRtcEngine' === r ? '4c4c4c' : '576b95',
                                 '; padding: 2px; line-height:16px;border-radius: 3px 0 0 3px; color: #fff;'
                              ),
                              'background:#'.concat(
                                 'AgoraRtcEngine' === r ? '1BB934' : '539bf5',
                                 '; padding: 2px; line-height:16px;border-radius: 0;  color: #fff;'
                              ),
                              'background:#'.concat(
                                 'log' === e
                                    ? 'AgoraRtcEngine' === r
                                       ? '049be3'
                                       : '6cb6ff'
                                    : 'E1112C',
                                 '; padding: 2px; line-height:16px;border-radius: 0 3px 3px 0;  color: #fff;'
                              )
                           )
                        },
                     },
                  ]),
                  n
               )
            })(s.EventEmitter),
            d =
               (n('cca6'),
                  (function (e) {
                     Object(o.a)(n, e)
                     var t = Object(a.a)(n)
                     function n(e, i) {
                        var o
                        return (
                           Object(r.a)(this, n),
                           (o = t.call(this)),
                           (o.rtcChannel = null),
                           (o.rtcEngine = e),
                           (o.tokenData = i),
                           (o.channel = String(o.tokenData.room)),
                           o.init(),
                           o
                        )
                     }
                     return (
                        Object(i.a)(n, [
                           {
                              key: 'init',
                              value: function () {
                                 this.rtcChannel = this.rtcEngine.createChannel(this.channel)
                                 this.eventHandler()
                              },
                           },
                           {
                              key: 'eventHandler',
                              value: function () {
                                 var e = this
                                 this.rtcChannel.on('apiError', function (t, n) {
                                    e.logger(
                                       'error',
                                       'apiError',
                                       'funName: '.concat(t, ', msg: ').concat(n)
                                    )
                                 })
                                 this.rtcChannel.on('joinedChannel', function (t, n, r) {
                                    e.emit('joinedChannel', t, n, r)
                                    e.logger(
                                       'log',
                                       'joinedChannel',
                                       'channel: '
                                          .concat(t, ', uid: ')
                                          .concat(n, ', elapsed: ')
                                          .concat(r)
                                    )
                                 })
                                 this.rtcChannel.on('joinChannelSuccess', function (t, n) {
                                    e.emit('localJoinChannel', t, n)
                                    e.logger(
                                       'log',
                                       'joinChannelSuccess',
                                       'uid: '.concat(t, ', elapsed: ').concat(n)
                                    )
                                 })
                                 this.rtcChannel.on('rejoinChannelSuccess', function (t, n) {
                                    e.emit('rejoinChannelSuccess', t, n)
                                    e.logger(
                                       'log',
                                       'rejoinChannelSuccess',
                                       'uid: '.concat(t, ', elapsed: ').concat(n)
                                    )
                                 })
                                 this.rtcChannel.on('leaveChannel', function () {
                                    e.emit('localLeaveChannel')
                                 })
                                 this.rtcChannel.on('userJoined', function (t, n) {
                                    e.emit('remoteJoinChannel', t, n)
                                    e.logger(
                                       'log',
                                       'userJoined',
                                       'channel: '
                                          .concat(e.channel, ', uid: ')
                                          .concat(t, ', elapsed: ')
                                          .concat(n)
                                    )
                                 })
                                 this.rtcChannel.on('userOffline', function (t, n) {
                                    e.emit('remoteLeaveChannel', t, n)
                                    e.logger(
                                       'log',
                                       'userOffline',
                                       'channel: '
                                          .concat(e.channel, ', uid: ')
                                          .concat(t, ', reason: ')
                                          .concat(n)
                                    )
                                 })
                                 this.rtcChannel.on(
                                    'remoteAudioStateChanged',
                                    function (t, n, r, i) {
                                       e.emit('remoteAudioStateChanged', t, n, r, i)
                                       e.logger(
                                          'log',
                                          'remoteAudioStateChanged',
                                          'channel: '
                                             .concat(e.channel, ', uid: ')
                                             .concat(t, ', state: ')
                                             .concat(n, ', reason: ')
                                             .concat(r, ', elapsed: ')
                                             .concat(i)
                                       )
                                    }
                                 )
                                 this.rtcChannel.on(
                                    'remoteVideoStateChanged',
                                    function (t, n, r, i) {
                                       e.emit('remoteVideoStateChanged', t, n, r, i)
                                       e.logger(
                                          'log',
                                          'remoteVideoStateChanged',
                                          'channel: '
                                             .concat(e.channel, ', uid: ')
                                             .concat(t, ', state: ')
                                             .concat(n, ', reason: ')
                                             .concat(r, ', elapsed: ')
                                             .concat(i)
                                       )
                                    }
                                 )
                                 this.rtcChannel.on(
                                    'rtmpStreamingStateChanged',
                                    function (t, n, r) {
                                       e.emit('rtmpStreamingStateChanged', t, n, r)
                                    }
                                 )
                                 this.rtcChannel.on('streamPublished', function (t, n) {
                                    e.emit('streamPublished', n, t)
                                 })
                                 this.rtcChannel.on('networkQuality', function (t, n, r) {
                                    0 === t
                                       ? e.emit('localNetworkQuality', n, r)
                                       : e.emit('remoteNetworkQuality', n, r)
                                    e.emit('networkQuality', t, n, r)
                                 })
                                 this.rtcChannel.on(
                                    'connectionStateChanged',
                                    function (t, n) {
                                       e.emit('connectionStateChanged', t, n)
                                       e.logger(
                                          'log',
                                          'connectionStateChanged',
                                          'channel: '
                                             .concat(e.channel, ', state: ')
                                             .concat(t, ', reason: ')
                                             .concat(n)
                                       )
                                    }
                                 )
                                 this.rtcChannel.on('rtcStats', function (t) {
                                    e.emit('rtcStats', t)
                                 })
                                 this.rtcChannel.on('channelError', function (t, n) {
                                    e.emit('channelError', t, n)
                                    e.logger(
                                       'error',
                                       'channelError: ',
                                       'channel: '
                                          .concat(e.channel, ', err: ')
                                          .concat(t, ', msg: ')
                                          .concat(n)
                                    )
                                 })
                                 this.rtcChannel.on('userMuteAudio', function (t, n) {
                                    e.emit('userMuteAudio', t, n)
                                    e.logger(
                                       'log',
                                       'userMuteAudio: ',
                                       'uid: '.concat(t, ', muted: ').concat(n)
                                    )
                                 })
                                 this.rtcChannel.on('streamMessage', function (t, n, r) {
                                    e.emit('streamMessage', t, n, r)
                                 })
                                 this.rtcChannel.on(
                                    'streamMessageError',
                                    function (t, n, r, i, o) {
                                       e.emit('streamMessageError', t, n, r, i, o)
                                    }
                                 )
                              },
                           },
                           {
                              key: 'setVideoEncoderConfiguration',
                              value: function () {
                                 var e =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                       ? arguments[0]
                                       : {}
                                 e = Object.assign(
                                    {
                                       bitrate: 80,
                                       frameRate: 10,
                                       width: 160,
                                       height: 120,
                                    },
                                    e
                                 )
                                 var t = this.rtcEngine.setVideoEncoderConfiguration(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'setVideoEncoderConfiguration',
                                       ''.concat(JSON.stringify(e), ', state: ').concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'joinChannel',
                              value: function () {
                                 var e =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                       ? arguments[0]
                                       : {
                                          autoSubscribeAudio: true,
                                          autoSubscribeVideo: true,
                                          publishLocalAudio: true,
                                          publishLocalVideo: true,
                                       },
                                    t =
                                       arguments.length > 1 && void 0 !== arguments[1]
                                          ? arguments[1]
                                          : {}
                                 this.setVideoEncoderConfiguration(t)
                                 var n = this.rtcChannel.joinChannel(
                                    this.tokenData.token,
                                    null,
                                    this.tokenData.user,
                                    e
                                 )
                                 return (
                                    this.logger(
                                       'log',
                                       'joinChannel',
                                       'channel: '
                                          .concat(this.channel, ', state: ')
                                          .concat(n, '}, options: ')
                                          .concat(JSON.stringify(t))
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'leaveChannel',
                              value: function () {
                                 var e = this.rtcChannel.leaveChannel()
                                 return (
                                    this.logger(
                                       'log',
                                       'leaveChannel',
                                       'channel: '.concat(this.channel, ', res: ').concat(e)
                                    ),
                                    e
                                 )
                              },
                           },
                           {
                              key: 'publish',
                              value: function () {
                                 var e = this.rtcChannel.publish()
                                 return (
                                    this.logger(
                                       'log',
                                       'publish',
                                       'channel: '.concat(this.channel, ', state: ').concat(e)
                                    ),
                                    e
                                 )
                              },
                           },
                           {
                              key: 'setClientRole',
                              value: function (e) {
                                 var t = this.rtcChannel.setClientRole(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'setClientRole',
                                       'channel: '
                                          .concat(this.channel, ', role: ')
                                          .concat(e, ', state: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'setupRemoteVideo',
                              value: function (e, t) {
                                 var n = this.rtcEngine.setupRemoteVideo(e, t, this.channel)
                                 return (
                                    this.logger(
                                       'log',
                                       'setupRemoteVideo',
                                       'channel: '
                                          .concat(this.channel, ', uid: ')
                                          .concat(e, ', state: ')
                                          .concat(n)
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'destroyRemoteVideo',
                              value: function (e, t) {
                                 var n = this.rtcEngine.destroyRender(e, this.channel, t)
                                 return (
                                    this.logger(
                                       'log',
                                       'destroyRemoteVideo',
                                       'channel: '
                                          .concat(this.channel, ', uid: ')
                                          .concat(e, ', state: ')
                                          .concat(n)
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'muteLocalAudioStream',
                              value: function (e) {
                                 var t = this.rtcChannel.muteLocalAudioStream(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'muteLocalAudioStream',
                                       'channel: '
                                          .concat(this.channel, ', mute: ')
                                          .concat(e, ', state: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'muteLocalVideoStream',
                              value: function (e) {
                                 var t = this.rtcChannel.muteLocalVideoStream(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'muteLocalVideoStream',
                                       'channel: '
                                          .concat(this.channel, ', mute: ')
                                          .concat(e, ', state: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'muteRemoteAudioStream',
                              value: function (e, t) {
                                 var n = this.rtcChannel.muteRemoteAudioStream(e, t)
                                 return (
                                    this.logger(
                                       'log',
                                       'muteRemoteAudioStream',
                                       'channel: '
                                          .concat(this.channel, ', uid: ')
                                          .concat(e, ', mute: ')
                                          .concat(t, ', state: ')
                                          .concat(n)
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'muteRemoteVideoStream',
                              value: function (e, t) {
                                 var n = this.rtcChannel.muteRemoteVideoStream(e, t)
                                 return (
                                    this.logger(
                                       'log',
                                       'muteRemoteVideoStream',
                                       'channel: '
                                          .concat(this.channel, ', uid: ')
                                          .concat(e, ', mute: ')
                                          .concat(t, ', state: ')
                                          .concat(n)
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'setDefaultMuteAllRemoteAudioStreams',
                              value: function (e) {
                                 var t =
                                    this.rtcChannel.setDefaultMuteAllRemoteAudioStreams(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'setDefaultMuteAllRemoteAudioStreams',
                                       'channel: '
                                          .concat(this.channel, ', mute: ')
                                          .concat(e, ', res: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'setDefaultMuteAllRemoteVideoStreams',
                              value: function (e) {
                                 var t =
                                    this.rtcChannel.setDefaultMuteAllRemoteVideoStreams(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'setDefaultMuteAllRemoteVideoStreams',
                                       'channel: '
                                          .concat(this.channel, ', mute: ')
                                          .concat(e, ', state: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'setParameters',
                              value: function (e) {
                                 return this.rtcEngine.setParameters(e)
                              },
                           },
                           {
                              key: 'muteAllRemoteAudioStreams',
                              value: function (e) {
                                 var t = this.rtcChannel.muteAllRemoteAudioStreams(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'muteAllRemoteAudioStreams',
                                       'channel: '
                                          .concat(this.channel, ', mute: ')
                                          .concat(e, ', state: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'muteAllRemoteVideoStreams',
                              value: function (e) {
                                 var t = this.rtcChannel.muteAllRemoteVideoStreams(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'muteAllRemoteVideoStreams',
                                       'channel: '
                                          .concat(this.channel, ', mute: ')
                                          .concat(e, ', state: ')
                                          .concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'addPublishStreamUrl',
                              value: function (e, t) {
                                 var n = this.rtcChannel.addPublishStreamUrl(e, t)
                                 return (
                                    this.logger(
                                       'log',
                                       'addPublishStreamUrl',
                                       'url: '
                                          .concat(e, ', transcodingEnabled: ')
                                          .concat(t, ', state: ')
                                          .concat(n)
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'removePublishStreamUrl',
                              value: function (e) {
                                 var t = this.rtcChannel.removePublishStreamUrl(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'removePublishStreamUrl',
                                       'state: '.concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'sendStreamMessageWithArrayBuffer',
                              value: function (e, t) {
                                 var n = this.rtcChannel.sendStreamMessageWithArrayBuffer(
                                    e,
                                    t
                                 )
                                 return n
                              },
                           },
                           {
                              key: 'createDataStream',
                              value: function (e, t) {
                                 var n = this.rtcChannel.createDataStream(e, t)
                                 return (
                                    this.logger(
                                       'log',
                                       'createDataStream',
                                       'state: '.concat(n)
                                    ),
                                    n
                                 )
                              },
                           },
                           {
                              key: 'createDataStreamWithConfig',
                              value: function (e) {
                                 var t = this.rtcChannel.createDataStreamWithConfig(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'createDataStreamWithConfig',
                                       'state: '.concat(t)
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'setLiveTranscoding',
                              value: function (e) {
                                 var t = this.rtcChannel.setLiveTranscoding(e)
                                 return (
                                    this.logger(
                                       'log',
                                       'setLiveTranscoding',
                                       'transcoding:'
                                          .concat(JSON.stringify(e), ', state: ')
                                          .concat(t, ', ')
                                    ),
                                    t
                                 )
                              },
                           },
                           {
                              key: 'adjustUserPlaybackSignalVolume',
                              value: function (e) {
                                 var t =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                       ? arguments[1]
                                       : 100
                                 return this.rtcChannel.adjustUserPlaybackSignalVolume(e, t)
                              },
                           },
                        ]),
                        n
                     )
                  })(l)),
            h = n('c4ac').default,
            f = (function (e) {
               Object(o.a)(n, e)
               var t = Object(a.a)(n)
               function n(e, i) {
                  var o
                  Object(r.a)(this, n)
                  o = t.call(this)
                  o.tokenData = null
                  o.channel = null
                  o.appID = null
                  o.rtcEngine = null
                  var a = i || {},
                     c = a.logsPath
                  return (
                     (o.version = '__VERSION__'),
                     (o.token = e),
                     (o.logFile = ''.concat(c || './logs', '/agora/agora-sdk.log')),
                     (o.videoSourceLogFile = ''.concat(
                        c || './logs',
                        '/agora/agora-videosource.log'
                     )),
                     o.init(),
                     o
                  )
               }
               return (
                  Object(i.a)(n, [
                     {
                        key: 'init',
                        value: function () {
                           var e = u()(this.token)
                           this.tokenData = e
                           this.appID =
                              this.tokenData.attachAppid || this.tokenData.appid
                           this.channel = String(this.tokenData.room)
                           var t = new h()
                           return (
                              (this.rtcEngine = t),
                              t.initialize(this.appID),
                              t.setLogFileSize(5120),
                              t.setLogFile(this.logFile),
                              t.setParameters('{"rtc.enable_sole_udp_socket":true}'),
                              t.setChannelProfile(1),
                              t.setRenderMode(1),
                              t.enableAudioVolumeIndication(300, 3, true),
                              t.enableWebSdkInteroperability(true),
                              this.getVersion(),
                              this.eventHandler(),
                              this.logger(
                                 'log',
                                 'sdkInfo',
                                 'updateTime: '
                                    .concat(this.updateTime, ', agoraVersion: ')
                                    .concat(this.sdkVersion, ' build:')
                                    .concat(this.build, ', JSSDK_Version: v')
                                    .concat(this.version, ', logFile: ')
                                    .concat(this.logFile, ', videoSourceLogFile: ')
                                    .concat(this.videoSourceLogFile)
                              ),
                              this.logger('log', 'tokenData', e),
                              t
                           )
                        },
                     },
                     {
                        key: 'eventHandler',
                        value: function () {
                           var e = this
                           this.rtcEngine.on('warning', function (t, n) {
                              e.emit('warning', t, n)
                           })
                           this.rtcEngine.on('error', function (t, n) {
                              e.emit('error', t, n)
                           })
                           this.rtcEngine.on('apiError', function (t, n) {
                              e.logger(
                                 'error',
                                 'apiError',
                                 'funName: '.concat(t, ', msg: ').concat(n)
                              )
                           })
                           this.rtcEngine.on('joinedChannel', function (t, n, r) {
                              e.emit('joinedChannel', t, n, r)
                              e.logger(
                                 'log',
                                 'joinedChannel',
                                 'channel: '
                                    .concat(t, ', uid: ')
                                    .concat(n, ', elapsed: ')
                                    .concat(r)
                              )
                           })
                           this.rtcEngine.on(
                              'groupAudioVolumeIndication',
                              function (t, n, r) {
                                 e.emit('groupAudioVolumeIndication', t, n, r)
                              }
                           )
                           this.rtcEngine.on(
                              'audioDeviceStateChanged',
                              function (t, n, r) {
                                 e.emit('audioDeviceStateChanged', t, n, r)
                                 e.logger(
                                    'log',
                                    'audioDeviceStateChanged',
                                    'deviceId: '
                                       .concat(t, ', deviceType: ')
                                       .concat(n, ', deviceState: ')
                                       .concat(r)
                                 )
                              }
                           )
                           this.rtcEngine.on(
                              'videoDeviceStateChanged',
                              function (t, n, r) {
                                 e.emit('videoDeviceStateChanged', t, n, r)
                                 e.logger(
                                    'log',
                                    'videoDeviceStateChanged',
                                    'deviceId: '
                                       .concat(t, ', deviceType: ')
                                       .concat(n, ', deviceState: ')
                                       .concat(r)
                                 )
                              }
                           )
                           this.rtcEngine.on('localVideoStateChanged', function (t, n) {
                              e.emit('localVideoStateChanged', t, n)
                              e.logger(
                                 'log',
                                 'localVideoStateChanged',
                                 'state: '.concat(t, ', error: ').concat(n)
                              )
                           })
                           this.rtcEngine.on('localAudioStateChanged', function (t, n) {
                              e.emit('localAudioStateChanged', t, n)
                              e.logger(
                                 'log',
                                 'localAudioStateChanged',
                                 'state: '.concat(t, ', error: ').concat(n)
                              )
                           })
                           this.rtcEngine.on('userMuteVideo', function (t, n) {
                              e.emit('userMuteVideo', t, n)
                              e.logger(
                                 'log',
                                 'userMuteVideo: ',
                                 'uid: '.concat(t, ', muted: ').concat(n)
                              )
                           })
                           this.rtcEngine.on('videoSourceJoinedSuccess', function (t) {
                              e.emit('videoSourceJoinedSuccess', t)
                              e.logger(
                                 'log',
                                 'videoSourceJoinedSuccess',
                                 'uid: '.concat(t)
                              )
                           })
                           this.rtcEngine.on('videoSourceLeaveChannel', function () {
                              e.emit('videoSourceLeaveChannel')
                              e.logger('log', 'videoSourceLeaveChannel')
                           })
                           this.rtcEngine.on('streamMessage', function (t, n, r, i) {
                              e.emit('streamMessage', t, n, r, i)
                           })
                           this.rtcEngine.on(
                              'streamMessageError',
                              function (t, n, r, i, o) {
                                 e.emit('streamMessageError', t, n, r, i, o)
                              }
                           )
                           this.rtcEngine.on('lastMileQuality', function (t) {
                              e.emit('lastMileQuality', t)
                           })
                        },
                     },
                     {
                        key: 'getVersion',
                        value: function () {
                           var e = this.rtcEngine.getVersion(),
                              t = e.version,
                              n = e.build
                           return (this.sdkVersion = t), (this.build = n), t
                        },
                     },
                     {
                        key: 'createChannel',
                        value: function (e) {
                           var t = e
                              ? u()(e)
                              : JSON.parse(JSON.stringify(this.tokenData))
                           return new d(this.rtcEngine, t)
                        },
                     },
                     {
                        key: 'setParameters',
                        value: function (e) {
                           return this.rtcEngine.setParameters(e)
                        },
                     },
                     {
                        key: 'setupLocalVideo',
                        value: function (e) {
                           var t = this.rtcEngine.setupLocalVideo(e)
                           return (
                              this.logger('log', 'setupLocalVideo', 'state: '.concat(t)),
                              t
                           )
                        },
                     },
                     {
                        key: 'destroyLocalVideo',
                        value: function () {
                           var e = this.rtcEngine.destroyRender('local', this.channel)
                           return (
                              this.logger(
                                 'log',
                                 'destroyLocalVideo',
                                 'state: '.concat(e)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'setupRemoteVideo',
                        value: function (e, t) {
                           var n = this.rtcEngine.setupRemoteVideo(e, t, this.channel)
                           return (
                              this.logger(
                                 'log',
                                 'setupRemoteVideo',
                                 'channel: '
                                    .concat(this.channel, ', uid: ')
                                    .concat(e, ', state: ')
                                    .concat(n)
                              ),
                              n
                           )
                        },
                     },
                     {
                        key: 'destroyRemoteVideo',
                        value: function (e, t) {
                           var n = this.rtcEngine.destroyRender(e, this.channel, t)
                           return (
                              this.logger(
                                 'log',
                                 'destroyRemoteVideo',
                                 'channel: '.concat(this.channel, ', uid: ').concat(e)
                              ),
                              n
                           )
                        },
                     },
                     {
                        key: 'disableVideo',
                        value: function () {
                           var e = this.rtcEngine.disableVideo()
                           return (
                              this.logger('log', 'disableVideo', 'state: '.concat(e)), e
                           )
                        },
                     },
                     {
                        key: 'enableVideo',
                        value: function () {
                           var e = this.rtcEngine.enableVideo()
                           return (
                              this.logger('log', 'enableVideo', 'state: '.concat(e)), e
                           )
                        },
                     },
                     {
                        key: 'disableAudio',
                        value: function () {
                           var e = this.rtcEngine.disableAudio()
                           return (
                              this.logger('log', 'disableAudio', 'state: '.concat(e)), e
                           )
                        },
                     },
                     {
                        key: 'enableAudio',
                        value: function () {
                           var e = this.rtcEngine.enableAudio()
                           return (
                              this.logger('log', 'enableAudio', 'state: '.concat(e)), e
                           )
                        },
                     },
                     {
                        key: 'enableLocalVideo',
                        value: function (e) {
                           var t = this.rtcEngine.enableLocalVideo(e)
                           return (
                              this.logger(
                                 'log',
                                 'enableLocalVideo',
                                 'enable: '.concat(e, ' state: ').concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'setVideoDevice',
                        value: function (e) {
                           var t = this.rtcEngine.setVideoDevice(e)
                           return (
                              this.logger(
                                 'log',
                                 'setVideoDevice',
                                 'deviceId: '.concat(e, ' state: ').concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'getVideoDevices',
                        value: function () {
                           var e = this.rtcEngine.getVideoDevices()
                           return (
                              this.logger(
                                 'log',
                                 'getVideoDevices',
                                 'devices: '.concat(JSON.stringify(e))
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'getCurrentVideoDevice',
                        value: function () {
                           var e = this.rtcEngine.getCurrentVideoDevice()
                           return (
                              this.logger(
                                 'log',
                                 'getCurrentVideoDevice',
                                 'deviceId: '.concat(e)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'setAudioRecordingDevice',
                        value: function (e) {
                           var t = this.rtcEngine.setAudioRecordingDevice(e)
                           return (
                              this.logger(
                                 'log',
                                 'setAudioRecordingDevice',
                                 'deviceId: '.concat(e, ' state: ').concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'getAudioRecordingDevices',
                        value: function () {
                           var e = this.rtcEngine.getAudioRecordingDevices()
                           return (
                              this.logger(
                                 'log',
                                 'getAudioRecordingDevices',
                                 'devices: '.concat(JSON.stringify(e))
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'getCurrentAudioRecordingDevice',
                        value: function () {
                           var e = this.rtcEngine.getCurrentAudioRecordingDevice()
                           return (
                              this.logger(
                                 'log',
                                 'getCurrentAudioRecordingDevice',
                                 'deviceId: '.concat(e)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'getDefaultAudioRecordingDevices',
                        value: function () {
                           var e = this.rtcEngine.getDefaultAudioRecordingDevices()
                           return (
                              this.logger(
                                 'log',
                                 'getDefaultAudioRecordingDevices',
                                 'deviceId: '.concat(e.deviceid)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'setAudioPlaybackDevice',
                        value: function (e) {
                           var t = this.rtcEngine.setAudioPlaybackDevice(e)
                           return (
                              this.logger(
                                 'log',
                                 'setAudioPlaybackDevice',
                                 'deviceId: '.concat(e, ' state: ').concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'getAudioPlaybackDevices',
                        value: function () {
                           var e = this.rtcEngine.getAudioPlaybackDevices()
                           return (
                              this.logger(
                                 'log',
                                 'getAudioPlaybackDevices',
                                 'devices: '.concat(JSON.stringify(e))
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'getCurrentAudioPlaybackDevice',
                        value: function () {
                           var e = this.rtcEngine.getCurrentAudioPlaybackDevice()
                           return (
                              this.logger(
                                 'log',
                                 'getCurrentAudioRecordingDevice',
                                 'deviceId: '.concat(e)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'getDefaultAudioPlaybackDevices',
                        value: function () {
                           var e = this.rtcEngine.getDefaultAudioPlaybackDevices()
                           return (
                              this.logger(
                                 'log',
                                 'getDefaultAudioPlaybackDevices',
                                 'deviceId: '.concat(e.deviceid)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'enableLoopbackRecording',
                        value: function () {
                           var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                              t =
                                 arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : null,
                              n = this.rtcEngine.enableLoopbackRecording(e, t)
                           return (
                              this.logger(
                                 'log',
                                 'enableLoopbackRecording',
                                 'enable: '.concat(e, ', deviceName:').concat(t)
                              ),
                              n
                           )
                        },
                     },
                     {
                        key: 'setupViewContentMode',
                        value: function (e, t, n) {
                           var r = this.rtcEngine.setupViewContentMode(e, t, n)
                           return (
                              this.logger(
                                 'log',
                                 'setupViewContentMode',
                                 'uid: '
                                    .concat(e, ', mode:')
                                    .concat(t, ', channelId: ')
                                    .concat(n)
                              ),
                              r
                           )
                        },
                     },
                     {
                        key: 'sendStreamMessageWithArrayBuffer',
                        value: function (e, t) {
                           var n = this.rtcEngine.sendStreamMessageWithArrayBuffer(e, t)
                           return n
                        },
                     },
                     {
                        key: 'createDataStream',
                        value: function (e, t) {
                           var n = this.rtcEngine.createDataStream(e, t)
                           return (
                              this.logger('log', 'createDataStream', 'state: '.concat(n)),
                              n
                           )
                        },
                     },
                     {
                        key: 'addPublishStreamUrl',
                        value: function (e, t) {
                           var n = this.rtcEngine.addPublishStreamUrl(e, t)
                           return (
                              this.logger(
                                 'log',
                                 'addPublishStreamUrl',
                                 'state: '.concat(n)
                              ),
                              n
                           )
                        },
                     },
                     {
                        key: 'removePublishStreamUrl',
                        value: function (e) {
                           var t = this.rtcEngine.removePublishStreamUrl(e)
                           return (
                              this.logger(
                                 'log',
                                 'removePublishStreamUrl',
                                 'state: '.concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'setLiveTranscoding',
                        value: function (e) {
                           var t = this.rtcEngine.setLiveTranscoding(e)
                           return (
                              this.logger(
                                 'log',
                                 'setLiveTranscoding',
                                 'state: '
                                    .concat(t, ', transcoding:')
                                    .concat(JSON.stringify(e))
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'resizeRender',
                        value: function (e, t) {
                           t = t || this.channel
                           var n = this.rtcEngine.resizeRender(e, t)
                           this.logger(
                              'log',
                              'resizeRender',
                              'state: '
                                 .concat(n, '\uFF0Ckey:')
                                 .concat(e, ',channelId:')
                                 .concat(t)
                           )
                        },
                     },
                     {
                        key: 'release',
                        value: function (e) {
                           var t = this.rtcEngine.release(e)
                           return this.logger('log', 'release', 'state: '.concat(t)), t
                        },
                     },
                     {
                        key: 'videoSourceInit',
                        value: function (e) {
                           if (((e = e || this.appID), !e)) {
                              throw (
                                 (this.logger('error', 'videoSourceInit', 'miss appID'),
                                    new Error('miss appID'))
                              )
                           }
                           this.rtcEngine.videoSourceInitialize(e)
                           this.rtcEngine.videoSourceSetLogFile(this.videoSourceLogFile)
                        },
                     },
                     {
                        key: 'videoSourceInitialize',
                        value: function () {
                           var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                 ? arguments[0]
                                 : ''
                           if (((e = e || this.appID), !e)) {
                              throw (
                                 (this.logger(
                                    'error',
                                    'videoSourceInitialize',
                                    'miss appID'
                                 ),
                                    new Error('miss appID'))
                              )
                           }
                           return (
                              this.logger(
                                 'log',
                                 'videoSourceInitialize\t',
                                 'appId: '.concat(e)
                              ),
                              this.rtcEngine.videoSourceInitialize(e)
                           )
                        },
                     },
                     {
                        key: 'videoSourceJoin',
                        value: function (e) {
                           if (!e) {
                              throw (
                                 (this.logger('error', 'videoSourceJoin', 'miss token'),
                                    new Error('miss token'))
                              )
                           }
                           var t = u()(e)
                           return (
                              this.logger(
                                 'log',
                                 'videoSourceJoin',
                                 'videoSourceToken: '.concat(JSON.stringify(t))
                              ),
                              this.rtcEngine.videoSourceJoin(
                                 t.token,
                                 String(t.room),
                                 '',
                                 t.user
                              )
                           )
                        },
                     },
                     {
                        key: 'videoSourceLeave',
                        value: function () {
                           return this.rtcEngine.videoSourceLeave()
                        },
                     },
                     {
                        key: 'videoSourceEnableAudio',
                        value: function () {
                           return this.rtcEngine.videoSourceEnableAudio()
                        },
                     },
                     {
                        key: 'videoSourceRelease',
                        value: function () {
                           var e = this.rtcEngine.videoSourceRelease()
                           return (
                              this.logger(
                                 'log',
                                 'videoSourceRelease',
                                 'state: '.concat(e)
                              ),
                              e
                           )
                        },
                     },
                     {
                        key: 'setupLocalVideoSource',
                        value: function (e) {
                           var t = this.rtcEngine.setupLocalVideoSource(e)
                           return (
                              this.logger(
                                 'log',
                                 'setupLocalVideoSource',
                                 'state: '.concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'videoSourceSetVideoProfile',
                        value: function (e) {
                           var t =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                              n = this.rtcEngine.videoSourceSetVideoProfile(e, t)
                           return (
                              this.logger(
                                 'log',
                                 'videoSourceSetVideoProfile',
                                 'profile: '
                                    .concat(e, ', swapWidthAndHeight: ')
                                    .concat(t, ', state: ')
                                    .concat(n)
                              ),
                              n
                           )
                        },
                     },
                     {
                        key: 'videoSourceSetChannelProfile',
                        value: function (e) {
                           var t = this.rtcEngine.videoSourceSetChannelProfile(e)
                           return (
                              this.logger(
                                 'log',
                                 'videoSourceSetChannelProfile',
                                 'profile: '.concat(e, ', state: ').concat(t)
                              ),
                              t
                           )
                        },
                     },
                     {
                        key: 'getScreenWindowsInfo',
                        value: function (e) {
                           return this.rtcEngine.getScreenWindowsInfo(e)
                        },
                     },
                     {
                        key: 'getScreenDisplaysInfo',
                        value: function (e) {
                           return this.rtcEngine.getScreenDisplaysInfo(e)
                        },
                     },
                     {
                        key: 'startScreenCapturePreview',
                        value: function () {
                           return this.rtcEngine.startScreenCapturePreview()
                        },
                     },
                     {
                        key: 'stopScreenCapturePreview',
                        value: function () {
                           return this.rtcEngine.stopScreenCapturePreview()
                        },
                     },
                     {
                        key: 'startScreenCaptureByWindow',
                        value: function (e, t, n) {
                           if (!e) {
                              throw new Error('miss windowSymbol')
                           }
                           return this.rtcEngine.startScreenCaptureByWindow(e, t, n)
                        },
                     },
                     {
                        key: 'startScreenCaptureByScreen',
                        value: function (e, t, n) {
                           if (!e) {
                              throw new Error('miss screenSymbol')
                           }
                           return this.rtcEngine.startScreenCaptureByScreen(e, t, n)
                        },
                     },
                     {
                        key: 'stopScreenCapture',
                        value: function () {
                           return this.rtcEngine.stopScreenCapture()
                        },
                     },
                     {
                        key: 'stopScreenCapture2',
                        value: function () {
                           return this.rtcEngine.stopScreenCapture2()
                        },
                     },
                     {
                        key: 'updateScreenCaptureParameters',
                        value: function (e) {
                           return this.rtcEngine.updateScreenCaptureParameters(e)
                        },
                     },
                     {
                        key: 'setScreenCaptureContentHint',
                        value: function (e) {
                           return this.rtcEngine.setScreenCaptureContentHint(e)
                        },
                     },
                     {
                        key: 'videoSourceEnableDualStreamMode',
                        value: function (e) {
                           return this.rtcEngine.videoSourceEnableDualStreamMode(e)
                        },
                     },
                     {
                        key: 'videoSourceSetParameters',
                        value: function (e) {
                           return this.rtcEngine.videoSourceSetParameter(e)
                        },
                     },
                     {
                        key: 'videoSourceUpdateScreenCaptureRegion',
                        value: function (e) {
                           return this.rtcEngine.videoSourceUpdateScreenCaptureRegion(e)
                        },
                     },
                     {
                        key: 'videoSourceEnableLoopbackRecording',
                        value: function () {
                           var e =
                              !(arguments.length > 0 && void 0 !== arguments[0]) ||
                              arguments[0]
                           return this.rtcEngine.videoSourceEnableLoopbackRecording(e)
                        },
                     },
                     {
                        key: 'videoSourceStartScreenCaptureByScreen',
                        value: function (e, t, n) {
                           if (!e) {
                              throw new Error('miss screenSymbol')
                           }
                           return this.rtcEngine.videoSourceStartScreenCaptureByScreen(
                              e,
                              t,
                              n
                           )
                        },
                     },
                     {
                        key: 'videoSourceStartScreenCaptureByDisplayId',
                        value: function (e, t, n) {
                           if (!e) {
                              throw new Error('miss displayId')
                           }
                           return this.rtcEngine.videoSourceStartScreenCaptureByDisplayId(
                              e,
                              t,
                              n
                           )
                        },
                     },
                     {
                        key: 'videoSourceStartScreenCaptureByWindow',
                        value: function (e, t, n) {
                           if (!e) {
                              throw new Error('miss screenSymbol')
                           }
                           return this.rtcEngine.videoSourceStartScreenCaptureByWindow(
                              e,
                              t,
                              n
                           )
                        },
                     },
                     {
                        key: 'videoSourceUpdateScreenCaptureParameters',
                        value: function (e) {
                           return this.rtcEngine.videosourceUpdateScreenCaptureParameters(
                              e
                           )
                        },
                     },
                     {
                        key: 'videoSourceSetScreenCaptureContentHint',
                        value: function (e) {
                           return this.rtcEngine.videosourceSetScreenCaptureContentHint(
                              e
                           )
                        },
                     },
                     {
                        key: 'subscribe',
                        value: function (e, t) {
                           return this.rtcEngine.subscribe(e, t)
                        },
                     },
                     {
                        key: 'enableLastmileTest',
                        value: function () {
                           return this.rtcEngine.enableLastmileTest()
                        },
                     },
                     {
                        key: 'disableLastmileTest',
                        value: function () {
                           return this.rtcEngine.disableLastmileTest()
                        },
                     },
                     {
                        key: 'setBeautyEffectOptions',
                        value: function () {
                           var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                              t =
                                 arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {}
                           return this.rtcEngine.setBeautyEffectOptions(e, t)
                        },
                     },
                     {
                        key: 'playEffect',
                        value: function (e) {
                           var t = this.rtcEngine.playEffect(1, e, 0, 1, 0, 100, true)
                           return (
                              this.logger(
                                 'log',
                                 'playEffect',
                                 'filePath: '.concat(e, ', state: ').concat(t)
                              ),
                              t
                           )
                        },
                     },
                  ]),
                  n
               )
            })(l)
      },
      c4ac: function (t, n, r) {
         'use strict'
         var i = r('970b').default,
            o = r('5bc3').default,
            a = r('ed6d').default,
            c = r('2d0d').default
         r('130f')
         r('14d9')
         r('a15b')
         r('e260')
         r('4ec9')
         r('d3b7')
         r('3ca3')
         r('ddb0')
         r('130f')
         r('99af')
         r('159b')
         r('4de4')
         r('d81d')
         Object.defineProperty(n, '__esModule', { value: true })
         var u,
            s = r('e950'),
            l = r('ff4a'),
            d = r('734e'),
            h = r('a32b')
         r('8e57')
         u = window.require(
            h.join(
               require('electron').remote.app.getAppPath(),
               '../agora/agora_node_ext.node'
            )
         )
         var f = (function (t) {
            a(r, t)
            var n = c(r)
            function r() {
               var e
               return (
                  i(this, r),
                  (e = n.call(this)),
                  (e.rtcEngine = new u.NodeRtcEngine()),
                  e.initEventHandler(),
                  (e.streams = new Map()),
                  (e.renderMode = e._checkWebGL() && e._checkWebGL2() ? 1 : 2),
                  (e.customRenderer = s.CustomRenderer),
                  (e.pauseRender = false),
                  e
               )
            }
            return (
               o(r, [
                  {
                     key: 'getConfigObject',
                     value: function () {
                        return d.config
                     },
                  },
                  {
                     key: 'setRenderMode',
                     value: function () {
                        var e =
                           arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1
                        this.renderMode = e
                     },
                  },
                  {
                     key: 'setPauseRenderer',
                     value: function () {
                        var e =
                           arguments.length > 0 &&
                           void 0 !== arguments[0] &&
                           arguments[0]
                        this.pauseRender = e
                     },
                  },
                  {
                     key: 'setCustomRenderer',
                     value: function (e) {
                        this.customRenderer = e
                     },
                  },
                  {
                     key: '_checkWebGL',
                     value: function () {
                        var t,
                           n = document.createElement('canvas')
                        n.width = 1
                        n.height = 1
                        try {
                           t =
                              n.getContext('webgl', r) ||
                              n.getContext('experimental-webgl', r)
                        } catch (e) {
                           return false
                        }
                        return !!t
                     },
                  },
                  {
                     key: '_checkWebGL2',
                     value: function () {
                        var t,
                           n = document.createElement('canvas')
                        n.width = 1
                        n.height = 1
                        try {
                           t =
                              n.getContext('webgl', r) ||
                              n.getContext('experimental-webgl', r)
                        } catch (e) {
                           return false
                        }
                        return !!t
                     },
                  },
                  {
                     key: 'initEventHandler',
                     value: function () {
                        var e = this,
                           t = this,
                           n = function (t) {
                              for (
                                 var n = arguments.length,
                                 r = new Array(n > 1 ? n - 1 : 0),
                                 i = 1;
                                 i < n;
                                 i++
                              ) {
                                 r[i - 1] = arguments[i]
                              }
                              setImmediate(function () {
                                 e.emit.apply(e, [t].concat(r))
                              })
                           }
                        this.rtcEngine.onEvent('apierror', function (e) {
                           console.error(
                              'api '.concat(
                                 e,
                                 ' failed. this is an error\n              thrown by c++ addon layer. it often means sth is\n              going wrong with this function call and it refused\n              to do what is asked. kindly check your parameter types\n              to see if it matches properly.'
                              )
                           )
                        })
                        this.rtcEngine.onEvent('joinchannel', function (e, t, r) {
                           n('joinedchannel', e, t, r)
                           n('joinedChannel', e, t, r)
                        })
                        this.rtcEngine.onEvent('rejoinchannel', function (e, t, r) {
                           n('rejoinedchannel', e, t, r)
                           n('rejoinedChannel', e, t, r)
                        })
                        this.rtcEngine.onEvent('warning', function (e, t) {
                           n('warning', e, t)
                        })
                        this.rtcEngine.onEvent('error', function (e, t) {
                           n('error', e, t)
                        })
                        this.rtcEngine.onEvent(
                           'audiovolumeindication',
                           function (e, t, r) {
                              n('audioVolumeIndication', e, t, r)
                              n('groupAudioVolumeIndication', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent('leavechannel', function (e) {
                           n('leavechannel', e)
                           n('leaveChannel', e)
                        })
                        this.rtcEngine.onEvent('rtcstats', function (e) {
                           n('rtcstats', e)
                           n('rtcStats', e)
                        })
                        this.rtcEngine.onEvent('localvideostats', function (e) {
                           n('localvideostats', e)
                           n('localVideoStats', e)
                        })
                        this.rtcEngine.onEvent('localAudioStats', function (e) {
                           n('localAudioStats', e)
                        })
                        this.rtcEngine.onEvent('remotevideostats', function (e) {
                           n('remotevideostats', e)
                           n('remoteVideoStats', e)
                        })
                        this.rtcEngine.onEvent('remoteAudioStats', function (e) {
                           n('remoteAudioStats', e)
                        })
                        this.rtcEngine.onEvent(
                           'remoteAudioTransportStats',
                           function (e, t, r, i) {
                              n('remoteAudioTransportStats', {
                                 uid: e,
                                 delay: t,
                                 lost: r,
                                 rxKBitRate: i,
                              })
                           }
                        )
                        this.rtcEngine.onEvent(
                           'remoteVideoTransportStats',
                           function (e, t, r, i) {
                              n('remoteVideoTransportStats', {
                                 uid: e,
                                 delay: t,
                                 lost: r,
                                 rxKBitRate: i,
                              })
                           }
                        )
                        this.rtcEngine.onEvent(
                           'requestAudioFileInfo',
                           function (e, t) {
                              n('requestAudioFileInfo', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'audiodevicestatechanged',
                           function (e, t, r) {
                              n('audiodevicestatechanged', e, t, r)
                              n('audioDeviceStateChanged', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'audioMixingStateChanged',
                           function (e, t) {
                              n('audioMixingStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent('apicallexecuted', function (e, t) {
                           n('apicallexecuted', e, t)
                           n('apiCallExecuted', e, t)
                        })
                        this.rtcEngine.onEvent('remoteaudiomixingbegin', function () {
                           n('remoteaudiomixingbegin')
                           n('remoteAudioMixingBegin')
                        })
                        this.rtcEngine.onEvent('remoteaudiomixingend', function () {
                           n('remoteaudiomixingend')
                           n('remoteAudioMixingEnd')
                        })
                        this.rtcEngine.onEvent('audioeffectfinished', function (e) {
                           n('audioeffectfinished', e)
                           n('audioEffectFinished', e)
                        })
                        this.rtcEngine.onEvent(
                           'videodevicestatechanged',
                           function (e, t, r) {
                              n('videodevicestatechanged', e, t, r)
                              n('videoDeviceStateChanged', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent('networkquality', function (e, t, r) {
                           n('networkquality', e, t, r)
                           n('networkQuality', e, t, r)
                        })
                        this.rtcEngine.onEvent('lastmilequality', function (e) {
                           n('lastmilequality', e)
                           n('lastMileQuality', e)
                        })
                        this.rtcEngine.onEvent('lastmileProbeResult', function (e) {
                           n('lastmileProbeResult', e)
                        })
                        this.rtcEngine.onEvent(
                           'firstlocalvideoframe',
                           function (e, t, r) {
                              n('firstlocalvideoframe', e, t, r)
                              n('firstLocalVideoFrame', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'firstremotevideodecoded',
                           function (e, t, r, i) {
                              n('addstream', e, i)
                              n('addStream', e, i)
                              n('firstRemoteVideoDecoded', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videosizechanged',
                           function (e, t, r, i) {
                              n('videosizechanged', e, t, r, i)
                              n('videoSizeChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'firstremotevideoframe',
                           function (e, t, r, i) {
                              n('firstremotevideoframe', e, t, r, i)
                              n('firstRemoteVideoFrame', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent('userjoined', function (e, t) {
                           console.log('user : ' + e + ' joined.')
                           n('userjoined', e, t)
                           n('userJoined', e, t)
                        })
                        this.rtcEngine.onEvent('useroffline', function (e, r) {
                           if ((n('userOffline', e, r), !t.streams)) {
                              return (
                                 (t.streams = new Map()),
                                 void console.log('Warning!!!!!!, streams is undefined.')
                              )
                           }
                           t.destroyRender(e, '')
                           t.rtcEngine.unsubscribe(e)
                           n('removestream', e, r)
                           n('removeStream', e, r)
                        })
                        this.rtcEngine.onEvent('usermuteaudio', function (e, t) {
                           n('usermuteaudio', e, t)
                           n('userMuteAudio', e, t)
                        })
                        this.rtcEngine.onEvent('usermutevideo', function (e, t) {
                           n('usermutevideo', e, t)
                           n('userMuteVideo', e, t)
                        })
                        this.rtcEngine.onEvent('userenablevideo', function (e, t) {
                           n('userenablevideo', e, t)
                           n('userEnableVideo', e, t)
                        })
                        this.rtcEngine.onEvent(
                           'userenablelocalvideo',
                           function (e, t) {
                              n('userenablelocalvideo', e, t)
                              n('userEnableLocalVideo', e, t)
                           }
                        )
                        this.rtcEngine.onEvent('cameraready', function () {
                           n('cameraready')
                           n('cameraReady')
                        })
                        this.rtcEngine.onEvent('videostopped', function () {
                           n('videostopped')
                           n('videoStopped')
                        })
                        this.rtcEngine.onEvent('connectionlost', function () {
                           n('connectionlost')
                           n('connectionLost')
                        })
                        this.rtcEngine.onEvent('snapshotTaken', function (e, t, r) {
                           n('snapshotTaken', e, t, r)
                        })
                        this.rtcEngine.onEvent(
                           'audioDeviceTestVolumeIndication',
                           function (e, t) {
                              n('audioDeviceTestVolumeIndication', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'streammessage',
                           function (e, t, r, i) {
                              n('streammessage', e, t, r, i)
                              n('streamMessage', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'streammessageerror',
                           function (e, t, r, i, o) {
                              n('streammessageerror', e, t, r, i, o)
                              n('streamMessageError', e, t, r, i, o)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'mediaenginestartcallsuccess',
                           function () {
                              n('mediaenginestartcallsuccess')
                              n('mediaEngineStartCallSuccess')
                           }
                        )
                        this.rtcEngine.onEvent('requestchannelkey', function () {
                           n('requestchannelkey')
                           n('requestChannelKey')
                        })
                        this.rtcEngine.onEvent('firstlocalaudioframe', function (e) {
                           n('firstlocalaudioframe', e)
                           n('firstLocalAudioFrame', e)
                        })
                        this.rtcEngine.onEvent(
                           'firstremoteaudioframe',
                           function (e, t) {
                              n('firstremoteaudioframe', e, t)
                              n('firstRemoteAudioFrame', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'firstRemoteAudioDecoded',
                           function (e, t) {
                              n('firstRemoteAudioDecoded', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'remoteVideoStateChanged',
                           function (e, t, r, i) {
                              n('remoteVideoStateChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'cameraFocusAreaChanged',
                           function (e, t, r, i) {
                              n('cameraFocusAreaChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'cameraExposureAreaChanged',
                           function (e, t, r, i) {
                              n('cameraExposureAreaChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'tokenPrivilegeWillExpire',
                           function (e) {
                              n('tokenPrivilegeWillExpire', e)
                           }
                        )
                        this.rtcEngine.onEvent('streamPublished', function (e, t) {
                           n('streamPublished', e, t)
                        })
                        this.rtcEngine.onEvent('streamUnpublished', function (e) {
                           n('streamUnpublished', e)
                        })
                        this.rtcEngine.onEvent('transcodingUpdated', function () {
                           n('transcodingUpdated')
                        })
                        this.rtcEngine.onEvent(
                           'streamInjectStatus',
                           function (e, t, r) {
                              n('streamInjectStatus', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'localPublishFallbackToAudioOnly',
                           function (e) {
                              n('localPublishFallbackToAudioOnly', e)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'remoteSubscribeFallbackToAudioOnly',
                           function (e, t) {
                              n('remoteSubscribeFallbackToAudioOnly', e, t)
                           }
                        )
                        this.rtcEngine.onEvent('microphoneEnabled', function (e) {
                           n('microphoneEnabled', e)
                        })
                        this.rtcEngine.onEvent(
                           'connectionStateChanged',
                           function (e, t) {
                              n('connectionStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent('networkTypeChanged', function (e) {
                           n('networkTypeChanged', e)
                        })
                        this.rtcEngine.onEvent('activespeaker', function (e) {
                           n('activespeaker', e)
                           n('activeSpeaker', e)
                        })
                        this.rtcEngine.onEvent('clientrolechanged', function (e, t) {
                           n('clientrolechanged', e, t)
                           n('clientRoleChanged', e, t)
                        })
                        this.rtcEngine.onEvent(
                           'audiodevicevolumechanged',
                           function (e, t, r) {
                              n('audiodevicevolumechanged', e, t, r)
                              n('audioDeviceVolumeChanged', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videosourcejoinsuccess',
                           function (e) {
                              n('videosourcejoinedsuccess', e)
                              n('videoSourceJoinedSuccess', e)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videosourcerequestnewtoken',
                           function () {
                              n('videosourcerequestnewtoken')
                              n('videoSourceRequestNewToken')
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videosourceleavechannel',
                           function () {
                              n('videosourceleavechannel')
                              n('videoSourceLeaveChannel')
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSourceLocalAudioStats',
                           function (e) {
                              n('videoSourceLocalAudioStats', e)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSourceLocalVideoStats',
                           function (e) {
                              n('videoSourceLocalVideoStats', e)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSourceVideoSizeChanged',
                           function (e, t, r, i) {
                              n('videoSourceVideoSizeChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'localUserRegistered',
                           function (e, t) {
                              n('localUserRegistered', e, t)
                           }
                        )
                        this.rtcEngine.onEvent('userInfoUpdated', function (e, t) {
                           n('userInfoUpdated', e, t)
                        })
                        this.rtcEngine.onEvent(
                           'localVideoStateChanged',
                           function (e, t) {
                              n('localVideoStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'localAudioStateChanged',
                           function (e, t) {
                              n('localAudioStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'remoteAudioStateChanged',
                           function (e, t, r, i) {
                              n('remoteAudioStateChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'audioMixingStateChanged',
                           function (e, t) {
                              n('audioMixingStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'channelMediaRelayState',
                           function (e, t) {
                              n('channelMediaRelayState', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'channelMediaRelayEvent',
                           function (e) {
                              n('channelMediaRelayEvent', e)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'rtmpStreamingStateChanged',
                           function (e, t, r) {
                              n('rtmpStreamingStateChanged', e, t, r)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'firstLocalAudioFramePublished',
                           function (e) {
                              n('firstLocalAudioFramePublished', e)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'firstLocalVideoFramePublished',
                           function (e) {
                              n('firstLocalVideoFramePublished', e)
                           }
                        )
                        this.rtcEngine.onEvent('rtmpStreamingEvent', function (e, t) {
                           n('rtmpStreamingEvent', e, t)
                        })
                        this.rtcEngine.onEvent(
                           'audioPublishStateChanged',
                           function (e, t, r, i) {
                              n('audioPublishStateChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoPublishStateChanged',
                           function (e, t, r, i) {
                              n('videoPublishStateChanged', e, t, r, i)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'audioSubscribeStateChanged',
                           function (e, t, r, i, o) {
                              n('audioSubscribeStateChanged', e, t, r, i, o)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSubscribeStateChanged',
                           function (e, t, r, i, o) {
                              n('videoSubscribeStateChanged', e, t, r, i, o)
                           }
                        )
                        this.rtcEngine.onEvent('audioRouteChanged', function (e) {
                           n('audioRouteChanged', e)
                        })
                        this.rtcEngine.onEvent('uploadLogResult', function (e, t, r) {
                           n('uploadLogResult', e, t, r)
                        })
                        this.rtcEngine.onEvent(
                           'virtualBackgroundSourceEnabled',
                           function (e, t) {
                              n('virtualBackgroundSourceEnabled', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSourceLocalAudioStateChanged',
                           function (e, t) {
                              n('videoSourceLocalAudioStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSourceLocalVideoStateChanged',
                           function (e, t) {
                              n('videoSourceLocalVideoStateChanged', e, t)
                           }
                        )
                        this.rtcEngine.onEvent(
                           'videoSourceScreenCaptureInfoUpdated',
                           function (e) {
                              n('videoSourceScreenCaptureInfoUpdated', e)
                           }
                        )
                        this.rtcEngine.onEvent('localVoicePitchInHz', function (e) {
                           n('localVoicePitchInHz', e)
                        })
                        this.rtcEngine.onEvent(
                           'clientRoleChangeFailed',
                           function (e, t) {
                              n('clientRoleChangeFailed', e, t)
                           }
                        )
                        this.rtcEngine.onEvent('wlAccMessage', function (e, t, r) {
                           n('wlAccMessage', e, t, r)
                        })
                        this.rtcEngine.onEvent('wlAccStats', function (e, t) {
                           n('wlAccStats', e, t)
                        })
                        this.rtcEngine.onEvent('contentInspectResult', function (e) {
                           n('contentInspectResult', e)
                        })
                        this.rtcEngine.onEvent(
                           'proxyConnected',
                           function (e, t, r, i, o) {
                              n('proxyConnected', e, t, r, i, o)
                           }
                        )
                        this.rtcEngine.registerDeliverFrame(function (e) {
                           n('agoraVideoRawData', e)
                           n('agoraVideoRowData', e)
                           t.pauseRender || t.onRegisterDeliverFrame(e)
                        })
                     },
                  },
                  {
                     key: '_getRenderers',
                     value: function (e, t, n) {
                        var r = this._getChannelRenderers(n || '')
                        return e < 2
                           ? 0 === t
                              ? r.get('local')
                              : r.get(String(t))
                           : 2 === e
                              ? void console.warn(
                                 'Type 2 not support in production mode.'
                              )
                              : 3 === e
                                 ? r.get('videosource')
                                 : void console.warn(
                                    'Invalid type for getRenderer, only accept 0~3.'
                                 )
                     },
                  },
                  {
                     key: '_getChannelRenderers',
                     value: function (e) {
                        var t
                        return (
                           this.streams.has(e)
                              ? (t = this.streams.get(e))
                              : ((t = new Map()), this.streams.set(e, t)),
                           t
                        )
                     },
                  },
                  {
                     key: '_checkData',
                     value: function (e, t, n, r) {
                        return 20 != e.byteLength
                           ? (console.error('invalid image header ' + e.byteLength),
                              false)
                           : 20 === t.byteLength
                              ? (console.error('invalid image yplane ' + t.byteLength),
                                 false)
                              : 20 === n.byteLength
                                 ? (console.error(
                                    'invalid image uplanedata ' + n.byteLength
                                 ),
                                    false)
                                 : (t.byteLength == 4 * n.byteLength &&
                                    n.byteLength == r.byteLength) ||
                                 (console.error(
                                    'invalid image header ' +
                                    t.byteLength +
                                    ' ' +
                                    n.byteLength +
                                    ' ' +
                                    r.byteLength
                                 ),
                                    false)
                     },
                  },
                  {
                     key: 'onRegisterDeliverFrame',
                     value: function (e) {
                        for (
                           var t = this,
                           n = e.length,
                           r = function () {
                              var n = e[i],
                                 r = n.type,
                                 o = n.uid,
                                 a = n.channelId,
                                 c = n.header,
                                 u = n.ydata,
                                 s = n.udata,
                                 l = n.vdata
                              if (!c || !u || !s || !l) {
                                 return (
                                    console.log(
                                       'Invalid data param \uFF1A ' +
                                       c +
                                       ' ' +
                                       u +
                                       ' ' +
                                       s +
                                       ' ' +
                                       l
                                    ),
                                    0
                                 )
                              }
                              var d = t._getRenderers(r, o, a)
                              if (!d || 0 === d.length) {
                                 return (
                                    console.warn(
                                       "Can't find renderer for uid : "
                                          .concat(o, ' ')
                                          .concat(a)
                                    ),
                                    0
                                 )
                              }
                              t._checkData(c, u, s, l) &&
                                 d.forEach(function (e) {
                                    e.drawFrame({
                                       header: c,
                                       yUint8Array: u,
                                       uUint8Array: s,
                                       vUint8Array: l,
                                    })
                                 })
                           },
                           i = 0;
                           i < n;
                           i++
                        ) {
                           r()
                        }
                     },
                  },
                  {
                     key: 'resizeRender',
                     value: function (e, t) {
                        var n = this._getChannelRenderers(t || '')
                        if (n.has(String(e))) {
                           var r = n.get(String(e)) || []
                           r.forEach(function (e) {
                              return e.refreshCanvas()
                           })
                        }
                     },
                  },
                  {
                     key: 'initRender',
                     value: function (e, t, n, r) {
                        var i,
                           o = this,
                           a = function (i, a) {
                              var c =
                                 arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 'initRender'
                              try {
                                 console.warn(
                                    'info:'
                                       .concat(c, '  fail, change remderMode to ')
                                       .concat(i)
                                 )
                                 console.warn(
                                    'key:',
                                    e,
                                    ' view:',
                                    t,
                                    ' channelId:',
                                    n,
                                    ' options:',
                                    r
                                 )
                                 o.renderMode = i
                                 o.destroyRender(e, n, function () { })
                                 o.initRender(e, t, n, r)
                                 o.setupViewContentMode(e, a, n)
                              } catch (u) {
                                 console.log('initRenderFailCallBack', u)
                              }
                           },
                           c = { append: !!r && r.append },
                           u = this._getChannelRenderers(n || '')
                        if (u.has(String(e))) {
                           if (c.append) {
                              for (
                                 var l = u.get(String(e)) || [], d = 0;
                                 d < l.length;
                                 d++
                              ) {
                                 if (l[d].equalsElement(t)) {
                                    return void console.log(
                                       'view exists in renderer list, ignore'
                                    )
                                 }
                              }
                           } else {
                              this.destroyRender(e, n || '')
                           }
                        }
                        if (
                           ((u = this._getChannelRenderers(n || '')),
                              1 === this.renderMode
                                 ? ((i = new s.GlRenderer({ initRenderFailCallBack: a })),
                                    i.bind(t, true))
                                 : 2 === this.renderMode
                                    ? ((i = new s.SoftwareRenderer()), i.bind(t, false))
                                    : 3 === this.renderMode
                                       ? ((i = new this.customRenderer()), i.bind(t, false))
                                       : 4 === this.renderMode
                                          ? ((i = new s.SoftwareRenderer()), i.bind(t, true))
                                          : (console.warn('Unknown render mode, fallback to 1'),
                                             (i = new s.SoftwareRenderer()),
                                             i.bind(t, false)),
                              c.append)
                        ) {
                           var h = u.get(String(e)) || []
                           h.push(i)
                           u.set(String(e), h)
                        } else {
                           u.set(String(e), [i])
                        }
                     },
                  },
                  {
                     key: 'destroyRenderView',
                     value: function (e, t, n, r) {
                        var i = this._getChannelRenderers(t || '')
                        if (i.has(String(e))) {
                           var o = i.get(String(e)) || [],
                              a = o.filter(function (e) {
                                 return e.equalsElement(n)
                              }),
                              c = o.filter(function (e) {
                                 return !e.equalsElement(n)
                              })
                           if (a.length > 0) {
                              var u = a[0]
                              try {
                                 u.unbind()
                                 c.length > 0 ? i.set(String(e), c) : i.delete(String(e))
                                 0 === i.size && this.streams.delete(t || '')
                              } catch (s) {
                                 r && r(s)
                              }
                           }
                        }
                     },
                  },
                  {
                     key: 'destroyRender',
                     value: function (e, t, n) {
                        var r = this._getChannelRenderers(t || '')
                        if (r.has(String(e))) {
                           for (
                              var i = r.get(String(e)) || [], o = null, a = 0;
                              a < i.length;
                              a++
                           ) {
                              var c = i[a]
                              try {
                                 c.unbind()
                                 r.delete(String(e))
                                 0 === r.size && this.streams.delete(t || '')
                              } catch (u) {
                                 o = u
                                 console.error(''.concat(u.stack))
                              }
                           }
                           o && n && n(o)
                        }
                     },
                  },
                  {
                     key: 'initialize',
                     value: function (e) {
                        var t =
                           arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 4294967295,
                           n = arguments.length > 2 ? arguments[2] : void 0
                        return this.rtcEngine.initialize(e, t, n)
                     },
                  },
                  {
                     key: 'createChannel',
                     value: function (e) {
                        var t = this.rtcEngine.createChannel(e)
                        return t ? new g(t) : null
                     },
                  },
                  {
                     key: 'getVersion',
                     value: function () {
                        return this.rtcEngine.getVersion()
                     },
                  },
                  {
                     key: 'getErrorDescription',
                     value: function (e) {
                        return this.rtcEngine.getErrorDescription(e)
                     },
                  },
                  {
                     key: 'getConnectionState',
                     value: function () {
                        return this.rtcEngine.getConnectionState()
                     },
                  },
                  {
                     key: 'joinChannel',
                     value: function (e, t, n, r, i) {
                        return this.rtcEngine.joinChannel(e, t, n, r, i)
                     },
                  },
                  {
                     key: 'leaveChannel',
                     value: function () {
                        return this.rtcEngine.leaveChannel()
                     },
                  },
                  {
                     key: 'release',
                     value: function () {
                        var e =
                           arguments.length > 0 &&
                           void 0 !== arguments[0] &&
                           arguments[0]
                        return this.rtcEngine.release(e)
                     },
                  },
                  {
                     key: 'setHighQualityAudioParameters',
                     value: function (e, t, n) {
                        return (
                           (0, d.deprecate)('setAudioProfile'),
                           this.rtcEngine.setHighQualityAudioParameters(e, t, n)
                        )
                     },
                  },
                  {
                     key: 'subscribe',
                     value: function (e, t, n) {
                        return (
                           this.initRender(e, t, '', n), this.rtcEngine.subscribe(e)
                        )
                     },
                  },
                  {
                     key: 'setupRemoteVideo',
                     value: function (e, t, n, r) {
                        return t
                           ? (this.initRender(e, t, n, r),
                              this.rtcEngine.subscribe(e, n))
                           : (this.destroyRender(e, n),
                              this.rtcEngine.unsubscribe(e, n))
                     },
                  },
                  {
                     key: 'setupLocalVideo',
                     value: function (e, t) {
                        return (
                           this.initRender('local', e, '', t),
                           this.rtcEngine.setupLocalVideo()
                        )
                     },
                  },
                  {
                     key: 'setVideoRenderDimension',
                     value: function (e, t, n, r) {
                        this.rtcEngine.setVideoRenderDimension(e, t, n, r)
                     },
                  },
                  {
                     key: 'setVideoRenderFPS',
                     value: function (e) {
                        this.rtcEngine.setFPS(e)
                     },
                  },
                  {
                     key: 'setVideoRenderHighFPS',
                     value: function (e) {
                        this.rtcEngine.setHighFPS(e)
                     },
                  },
                  {
                     key: 'addVideoRenderToHighFPS',
                     value: function (e) {
                        this.rtcEngine.addToHighVideo(e)
                     },
                  },
                  {
                     key: 'removeVideoRenderFromHighFPS',
                     value: function (e) {
                        this.rtcEngine.removeFromHighVideo(e)
                     },
                  },
                  {
                     key: 'setupViewContentMode',
                     value: function (e, t, n) {
                        var r = this._getChannelRenderers(n || '')
                        if (r.has(String(e))) {
                           for (
                              var i = r.get(String(e)) || [], o = 0;
                              o < i.length;
                              o++
                           ) {
                              var a = i[o]
                              a.setContentMode(t)
                           }
                           return 0
                        }
                        return -1
                     },
                  },
                  {
                     key: 'renewToken',
                     value: function (e) {
                        return this.rtcEngine.renewToken(e)
                     },
                  },
                  {
                     key: 'setChannelProfile',
                     value: function (e) {
                        return this.rtcEngine.setChannelProfile(e)
                     },
                  },
                  {
                     key: 'setClientRole',
                     value: function (e) {
                        return this.rtcEngine.setClientRole(e)
                     },
                  },
                  {
                     key: 'setClientRoleWithOptions',
                     value: function (e, t) {
                        return this.rtcEngine.setClientRoleWithOptions(e, t)
                     },
                  },
                  {
                     key: 'startEchoTest',
                     value: function () {
                        return (
                           (0, d.deprecate)('startEchoTestWithInterval'),
                           this.rtcEngine.startEchoTest()
                        )
                     },
                  },
                  {
                     key: 'startEchoTestWithConfig',
                     value: function (e) {
                        return this.rtcEngine.startEchoTestWithConfig(e)
                     },
                  },
                  {
                     key: 'stopEchoTest',
                     value: function () {
                        return this.rtcEngine.stopEchoTest()
                     },
                  },
                  {
                     key: 'startEchoTestWithInterval',
                     value: function (e) {
                        return this.rtcEngine.startEchoTestWithInterval(e)
                     },
                  },
                  {
                     key: 'addVideoWatermark',
                     value: function (e, t) {
                        return this.rtcEngine.addVideoWatermark(e, t)
                     },
                  },
                  {
                     key: 'clearVideoWatermarks',
                     value: function () {
                        return this.rtcEngine.clearVideoWatermarks()
                     },
                  },
                  {
                     key: 'enableLastmileTest',
                     value: function () {
                        return this.rtcEngine.enableLastmileTest()
                     },
                  },
                  {
                     key: 'disableLastmileTest',
                     value: function () {
                        return this.rtcEngine.disableLastmileTest()
                     },
                  },
                  {
                     key: 'startLastmileProbeTest',
                     value: function (e) {
                        return this.rtcEngine.startLastmileProbeTest(e)
                     },
                  },
                  {
                     key: 'stopLastmileProbeTest',
                     value: function () {
                        return this.rtcEngine.stopLastmileProbeTest()
                     },
                  },
                  {
                     key: 'enableVideo',
                     value: function () {
                        return this.rtcEngine.enableVideo()
                     },
                  },
                  {
                     key: 'disableVideo',
                     value: function () {
                        return this.rtcEngine.disableVideo()
                     },
                  },
                  {
                     key: 'startPreview',
                     value: function () {
                        return this.rtcEngine.startPreview()
                     },
                  },
                  {
                     key: 'stopPreview',
                     value: function () {
                        return this.rtcEngine.stopPreview()
                     },
                  },
                  {
                     key: 'setVideoProfile',
                     value: function (e) {
                        var t =
                           arguments.length > 1 &&
                           void 0 !== arguments[1] &&
                           arguments[1]
                        return this.rtcEngine.setVideoProfile(e, t)
                     },
                  },
                  {
                     key: 'setCameraCapturerConfiguration',
                     value: function (e) {
                        return this.rtcEngine.setCameraCapturerConfiguration(e)
                     },
                  },
                  {
                     key: 'setVideoEncoderConfiguration',
                     value: function (e) {
                        var t = e.width,
                           n = void 0 === t ? 640 : t,
                           r = e.height,
                           i = void 0 === r ? 480 : r,
                           o = e.frameRate,
                           a = void 0 === o ? 15 : o,
                           c = e.minFrameRate,
                           u = void 0 === c ? -1 : c,
                           s = e.bitrate,
                           l = void 0 === s ? 0 : s,
                           d = e.minBitrate,
                           h = void 0 === d ? -1 : d,
                           f = e.orientationMode,
                           g = void 0 === f ? 0 : f,
                           v = e.degradationPreference,
                           m = void 0 === v ? 0 : v,
                           E = e.mirrorMode,
                           y = void 0 === E ? 0 : E
                        return this.rtcEngine.setVideoEncoderConfiguration({
                           width: n,
                           height: i,
                           frameRate: a,
                           minFrameRate: u,
                           bitrate: l,
                           minBitrate: h,
                           orientationMode: g,
                           degradationPreference: m,
                           mirrorMode: y,
                        })
                     },
                  },
                  {
                     key: 'setBeautyEffectOptions',
                     value: function (e, t) {
                        return this.rtcEngine.setBeautyEffectOptions(e, t)
                     },
                  },
                  {
                     key: 'setRemoteUserPriority',
                     value: function (e, t) {
                        return this.rtcEngine.setRemoteUserPriority(e, t)
                     },
                  },
                  {
                     key: 'enableAudio',
                     value: function () {
                        return this.rtcEngine.enableAudio()
                     },
                  },
                  {
                     key: 'disableAudio',
                     value: function () {
                        return this.rtcEngine.disableAudio()
                     },
                  },
                  {
                     key: 'setAudioProfile',
                     value: function (e, t) {
                        return this.rtcEngine.setAudioProfile(e, t)
                     },
                  },
                  {
                     key: 'setVideoQualityParameters',
                     value: function (e) {
                        return this.rtcEngine.setVideoQualityParameters(e)
                     },
                  },
                  {
                     key: 'setEncryptionSecret',
                     value: function (e) {
                        return this.rtcEngine.setEncryptionSecret(e)
                     },
                  },
                  {
                     key: 'setEncryptionMode',
                     value: function (e) {
                        return this.rtcEngine.setEncryptionMode(e)
                     },
                  },
                  {
                     key: 'muteLocalAudioStream',
                     value: function (e) {
                        return this.rtcEngine.muteLocalAudioStream(e)
                     },
                  },
                  {
                     key: 'muteAllRemoteAudioStreams',
                     value: function (e) {
                        return this.rtcEngine.muteAllRemoteAudioStreams(e)
                     },
                  },
                  {
                     key: 'setDefaultMuteAllRemoteAudioStreams',
                     value: function (e) {
                        return this.rtcEngine.setDefaultMuteAllRemoteAudioStreams(e)
                     },
                  },
                  {
                     key: 'muteRemoteAudioStream',
                     value: function (e, t) {
                        return this.rtcEngine.muteRemoteAudioStream(e, t)
                     },
                  },
                  {
                     key: 'muteLocalVideoStream',
                     value: function (e) {
                        return this.rtcEngine.muteLocalVideoStream(e)
                     },
                  },
                  {
                     key: 'enableLocalVideo',
                     value: function (e) {
                        return this.rtcEngine.enableLocalVideo(e)
                     },
                  },
                  {
                     key: 'enableLocalAudio',
                     value: function (e) {
                        return this.rtcEngine.enableLocalAudio(e)
                     },
                  },
                  {
                     key: 'muteAllRemoteVideoStreams',
                     value: function (e) {
                        return this.rtcEngine.muteAllRemoteVideoStreams(e)
                     },
                  },
                  {
                     key: 'setDefaultMuteAllRemoteVideoStreams',
                     value: function (e) {
                        return this.rtcEngine.setDefaultMuteAllRemoteVideoStreams(e)
                     },
                  },
                  {
                     key: 'enableAudioVolumeIndication',
                     value: function (e, t) {
                        var n =
                           arguments.length > 2 &&
                           void 0 !== arguments[2] &&
                           arguments[2]
                        return this.rtcEngine.enableAudioVolumeIndication(e, t, n)
                     },
                  },
                  {
                     key: 'muteRemoteVideoStream',
                     value: function (e, t) {
                        return this.rtcEngine.muteRemoteVideoStream(e, t)
                     },
                  },
                  {
                     key: 'setLogFile',
                     value: function (e) {
                        return this.rtcEngine.setLogFile(e)
                     },
                  },
                  {
                     key: 'setAddonLogFile',
                     value: function (e) {
                        return this.rtcEngine.setAddonLogFile(e)
                     },
                  },
                  {
                     key: 'videoSourceSetAddonLogFile',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetAddonLogFile(e)
                     },
                  },
                  {
                     key: 'setLogFileSize',
                     value: function (e) {
                        return this.rtcEngine.setLogFileSize(e)
                     },
                  },
                  {
                     key: 'videoSourceSetLogFile',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetLogFile(e)
                     },
                  },
                  {
                     key: 'setLogFilter',
                     value: function (e) {
                        return this.rtcEngine.setLogFilter(e)
                     },
                  },
                  {
                     key: 'enableDualStreamMode',
                     value: function (e) {
                        return this.rtcEngine.enableDualStreamMode(e)
                     },
                  },
                  {
                     key: 'setRemoteVideoStreamType',
                     value: function (e, t) {
                        return this.rtcEngine.setRemoteVideoStreamType(e, t)
                     },
                  },
                  {
                     key: 'setRemoteDefaultVideoStreamType',
                     value: function (e) {
                        return this.rtcEngine.setRemoteDefaultVideoStreamType(e)
                     },
                  },
                  {
                     key: 'enableWebSdkInteroperability',
                     value: function (e) {
                        return this.rtcEngine.enableWebSdkInteroperability(e)
                     },
                  },
                  {
                     key: 'setLocalVideoMirrorMode',
                     value: function (e) {
                        return this.rtcEngine.setLocalVideoMirrorMode(e)
                     },
                  },
                  {
                     key: 'setLocalVoicePitch',
                     value: function (e) {
                        return this.rtcEngine.setLocalVoicePitch(e)
                     },
                  },
                  {
                     key: 'setLocalVoiceEqualization',
                     value: function (e, t) {
                        return this.rtcEngine.setLocalVoiceEqualization(e, t)
                     },
                  },
                  {
                     key: 'setLocalVoiceReverb',
                     value: function (e, t) {
                        return this.rtcEngine.setLocalVoiceReverb(e, t)
                     },
                  },
                  {
                     key: 'setLocalVoiceChanger',
                     value: function (e) {
                        return this.rtcEngine.setLocalVoiceChanger(e)
                     },
                  },
                  {
                     key: 'setLocalVoiceReverbPreset',
                     value: function (e) {
                        return this.rtcEngine.setLocalVoiceReverbPreset(e)
                     },
                  },
                  {
                     key: 'setLocalPublishFallbackOption',
                     value: function (e) {
                        return this.rtcEngine.setLocalPublishFallbackOption(e)
                     },
                  },
                  {
                     key: 'setRemoteSubscribeFallbackOption',
                     value: function (e) {
                        return this.rtcEngine.setRemoteSubscribeFallbackOption(e)
                     },
                  },
                  {
                     key: 'registerLocalUserAccount',
                     value: function (e, t) {
                        return this.rtcEngine.registerLocalUserAccount(e, t)
                     },
                  },
                  {
                     key: 'joinChannelWithUserAccount',
                     value: function (e, t, n, r) {
                        return this.rtcEngine.joinChannelWithUserAccount(e, t, n, r)
                     },
                  },
                  {
                     key: 'getUserInfoByUserAccount',
                     value: function (e) {
                        return this.rtcEngine.getUserInfoByUserAccount(e)
                     },
                  },
                  {
                     key: 'getUserInfoByUid',
                     value: function (e) {
                        return this.rtcEngine.getUserInfoByUid(e)
                     },
                  },
                  {
                     key: 'switchChannel',
                     value: function (e, t, n) {
                        return this.rtcEngine.switchChannel(e, t, n)
                     },
                  },
                  {
                     key: 'adjustRecordingSignalVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustRecordingSignalVolume(e)
                     },
                  },
                  {
                     key: 'adjustLoopbackRecordingSignalVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustLoopbackRecordingSignalVolume(e)
                     },
                  },
                  {
                     key: 'setEffectPosition',
                     value: function (e, t) {
                        return this.rtcEngine.setEffectPosition(e, t)
                     },
                  },
                  {
                     key: 'getEffectDuration',
                     value: function (e) {
                        return this.rtcEngine.getEffectDuration(e)
                     },
                  },
                  {
                     key: 'getEffectCurrentPosition',
                     value: function (e) {
                        return this.rtcEngine.getEffectCurrentPosition(e)
                     },
                  },
                  {
                     key: 'getAudioFileInfo',
                     value: function (e) {
                        return this.rtcEngine.getAudioFileInfo(e)
                     },
                  },
                  {
                     key: 'adjustPlaybackSignalVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustPlaybackSignalVolume(e)
                     },
                  },
                  {
                     key: 'adjustUserPlaybackSignalVolume',
                     value: function (e, t) {
                        return this.rtcEngine.adjustUserPlaybackSignalVolume(e, t)
                     },
                  },
                  {
                     key: 'getVideoDevices',
                     value: function () {
                        return this.rtcEngine.getVideoDevices()
                     },
                  },
                  {
                     key: 'setVideoDevice',
                     value: function (e) {
                        return this.rtcEngine.setVideoDevice(e)
                     },
                  },
                  {
                     key: 'getCurrentVideoDevice',
                     value: function () {
                        return this.rtcEngine.getCurrentVideoDevice()
                     },
                  },
                  {
                     key: 'startVideoDeviceTest',
                     value: function () {
                        return this.rtcEngine.startVideoDeviceTest()
                     },
                  },
                  {
                     key: 'stopVideoDeviceTest',
                     value: function () {
                        return this.rtcEngine.stopVideoDeviceTest()
                     },
                  },
                  {
                     key: 'getAudioPlaybackDevices',
                     value: function () {
                        return this.rtcEngine.getAudioPlaybackDevices()
                     },
                  },
                  {
                     key: 'setAudioPlaybackDevice',
                     value: function (e) {
                        return this.rtcEngine.setAudioPlaybackDevice(e)
                     },
                  },
                  {
                     key: 'getPlaybackDeviceInfo',
                     value: function (e, t) {
                        return this.rtcEngine.getPlaybackDeviceInfo(e, t)
                     },
                  },
                  {
                     key: 'getCurrentAudioPlaybackDevice',
                     value: function () {
                        return this.rtcEngine.getCurrentAudioPlaybackDevice()
                     },
                  },
                  {
                     key: 'setAudioPlaybackVolume',
                     value: function (e) {
                        return this.rtcEngine.setAudioPlaybackVolume(e)
                     },
                  },
                  {
                     key: 'getAudioPlaybackVolume',
                     value: function () {
                        return this.rtcEngine.getAudioPlaybackVolume()
                     },
                  },
                  {
                     key: 'getAudioRecordingDevices',
                     value: function () {
                        return this.rtcEngine.getAudioRecordingDevices()
                     },
                  },
                  {
                     key: 'setAudioRecordingDevice',
                     value: function (e) {
                        return this.rtcEngine.setAudioRecordingDevice(e)
                     },
                  },
                  {
                     key: 'getRecordingDeviceInfo',
                     value: function (e, t) {
                        return this.rtcEngine.getRecordingDeviceInfo(e, t)
                     },
                  },
                  {
                     key: 'getCurrentAudioRecordingDevice',
                     value: function () {
                        return this.rtcEngine.getCurrentAudioRecordingDevice()
                     },
                  },
                  {
                     key: 'getAudioRecordingVolume',
                     value: function () {
                        return this.rtcEngine.getAudioRecordingVolume()
                     },
                  },
                  {
                     key: 'setAudioRecordingVolume',
                     value: function (e) {
                        return this.rtcEngine.setAudioRecordingVolume(e)
                     },
                  },
                  {
                     key: 'startAudioPlaybackDeviceTest',
                     value: function (e) {
                        return this.rtcEngine.startAudioPlaybackDeviceTest(e)
                     },
                  },
                  {
                     key: 'stopAudioPlaybackDeviceTest',
                     value: function () {
                        return this.rtcEngine.stopAudioPlaybackDeviceTest()
                     },
                  },
                  {
                     key: 'startAudioDeviceLoopbackTest',
                     value: function (e) {
                        return this.rtcEngine.startAudioDeviceLoopbackTest(e)
                     },
                  },
                  {
                     key: 'stopAudioDeviceLoopbackTest',
                     value: function () {
                        return this.rtcEngine.stopAudioDeviceLoopbackTest()
                     },
                  },
                  {
                     key: 'enableLoopbackRecording',
                     value: function () {
                        var e =
                           arguments.length > 0 &&
                           void 0 !== arguments[0] &&
                           arguments[0],
                           t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                 ? arguments[1]
                                 : null
                        return this.rtcEngine.enableLoopbackRecording(e, t)
                     },
                  },
                  {
                     key: 'startAudioRecording',
                     value: function (e) {
                        var t =
                           arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 32000,
                           n = arguments.length > 2 ? arguments[2] : void 0,
                           r = arguments.length > 3 ? arguments[3] : void 0,
                           i =
                              arguments.length > 4 && void 0 !== arguments[4]
                                 ? arguments[4]
                                 : 1
                        return this.rtcEngine.startAudioRecordingWithConfig({
                           filePath: e,
                           recordingSampleRate: t,
                           recordingQuality: n,
                           recordingPosition: r,
                           recordingChannel: i,
                        })
                     },
                  },
                  {
                     key: 'stopAudioRecording',
                     value: function () {
                        return this.rtcEngine.stopAudioRecording()
                     },
                  },
                  {
                     key: 'startAudioRecordingDeviceTest',
                     value: function (e) {
                        return this.rtcEngine.startAudioRecordingDeviceTest(e)
                     },
                  },
                  {
                     key: 'stopAudioRecordingDeviceTest',
                     value: function () {
                        return this.rtcEngine.stopAudioRecordingDeviceTest()
                     },
                  },
                  {
                     key: 'getAudioPlaybackDeviceMute',
                     value: function () {
                        return this.rtcEngine.getAudioPlaybackDeviceMute()
                     },
                  },
                  {
                     key: 'setAudioPlaybackDeviceMute',
                     value: function (e) {
                        return this.rtcEngine.setAudioPlaybackDeviceMute(e)
                     },
                  },
                  {
                     key: 'getAudioRecordingDeviceMute',
                     value: function () {
                        return this.rtcEngine.getAudioRecordingDeviceMute()
                     },
                  },
                  {
                     key: 'setAudioRecordingDeviceMute',
                     value: function (e) {
                        return this.rtcEngine.setAudioRecordingDeviceMute(e)
                     },
                  },
                  {
                     key: 'videoSourceInitialize',
                     value: function (e) {
                        var t =
                           arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 4294967295,
                           n = arguments.length > 2 ? arguments[2] : void 0,
                           r = arguments.length > 3 ? arguments[3] : void 0
                        return this.rtcEngine.videoSourceInitialize(e, t, n, r)
                     },
                  },
                  {
                     key: 'setupLocalVideoSource',
                     value: function (e) {
                        this.initRender('videosource', e, '')
                     },
                  },
                  {
                     key: 'videoSourceEnableWebSdkInteroperability',
                     value: function (e) {
                        return this.rtcEngine.videoSourceEnableWebSdkInteroperability(
                           e
                        )
                     },
                  },
                  {
                     key: 'videoSourceJoin',
                     value: function (e, t, n, r, i) {
                        return this.rtcEngine.videoSourceJoin(e, t, n, r, i)
                     },
                  },
                  {
                     key: 'videoSourceLeave',
                     value: function () {
                        return this.rtcEngine.videoSourceLeave()
                     },
                  },
                  {
                     key: 'videoSourceRenewToken',
                     value: function (e) {
                        return this.rtcEngine.videoSourceRenewToken(e)
                     },
                  },
                  {
                     key: 'videoSourceSetChannelProfile',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetChannelProfile(e)
                     },
                  },
                  {
                     key: 'videoSourceSetVideoProfile',
                     value: function (e) {
                        var t =
                           arguments.length > 1 &&
                           void 0 !== arguments[1] &&
                           arguments[1]
                        return this.rtcEngine.videoSourceSetVideoProfile(e, t)
                     },
                  },
                  {
                     key: 'getScreenWindowsInfo',
                     value: function (e) {
                        return this.rtcEngine.getScreenWindowsInfo(e)
                     },
                  },
                  {
                     key: 'getScreenDisplaysInfo',
                     value: function (e) {
                        return this.rtcEngine.getScreenDisplaysInfo(e)
                     },
                  },
                  {
                     key: 'getRealScreenDisplaysInfo',
                     value: function (e) {
                        return this.rtcEngine.getScreenDisplaysInfo(e)
                     },
                  },
                  {
                     key: 'startScreenCapture2',
                     value: function (e, t, n, r) {
                        return (
                           (0, d.deprecate)(
                              '"videoSourceStartScreenCaptureByScreen" or "videoSourceStartScreenCaptureByWindow"'
                           ),
                           this.rtcEngine.startScreenCapture2(e, t, n, r)
                        )
                     },
                  },
                  {
                     key: 'stopScreenCapture2',
                     value: function () {
                        return this.rtcEngine.stopScreenCapture2()
                     },
                  },
                  {
                     key: 'startScreenCapturePreview',
                     value: function () {
                        return this.rtcEngine.videoSourceStartPreview()
                     },
                  },
                  {
                     key: 'startScreenCaptureByWindow',
                     value: function (e, t, n) {
                        return this.rtcEngine.startScreenCaptureByWindow(e, t, n)
                     },
                  },
                  {
                     key: 'startScreenCaptureByScreen',
                     value: function (e, t, n) {
                        return this.rtcEngine.startScreenCaptureByScreen(e, t, n)
                     },
                  },
                  {
                     key: 'updateScreenCaptureParameters',
                     value: function (e) {
                        return this.rtcEngine.updateScreenCaptureParameters(e)
                     },
                  },
                  {
                     key: 'setScreenCaptureContentHint',
                     value: function (e) {
                        return this.rtcEngine.setScreenCaptureContentHint(e)
                     },
                  },
                  {
                     key: 'stopScreenCapturePreview',
                     value: function () {
                        return this.rtcEngine.videoSourceStopPreview()
                     },
                  },
                  {
                     key: 'videoSourceEnableDualStreamMode',
                     value: function (e) {
                        return this.rtcEngine.videoSourceEnableDualStreamMode(e)
                     },
                  },
                  {
                     key: 'videoSourceSetParameters',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetParameter(e)
                     },
                  },
                  {
                     key: 'videoSourceUpdateScreenCaptureRegion',
                     value: function (e) {
                        return this.rtcEngine.videoSourceUpdateScreenCaptureRegion(e)
                     },
                  },
                  {
                     key: 'videoSourceEnableLoopbackRecording',
                     value: function (e) {
                        var t =
                           arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null
                        return this.rtcEngine.videoSourceEnableLoopbackRecording(e, t)
                     },
                  },
                  {
                     key: 'videoSourceEnableAudio',
                     value: function () {
                        return this.rtcEngine.videoSourceEnableAudio()
                     },
                  },
                  {
                     key: 'videoSourceEnableEncryption',
                     value: function (e, t) {
                        return this.rtcEngine.videoSourceEnableEncryption(e, t)
                     },
                  },
                  {
                     key: 'videoSourceSetEncryptionMode',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetEncryptionMode(e)
                     },
                  },
                  {
                     key: 'videoSourceSetEncryptionSecret',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetEncryptionSecret(e)
                     },
                  },
                  {
                     key: 'videoSourceRelease',
                     value: function () {
                        return this.rtcEngine.videoSourceRelease()
                     },
                  },
                  {
                     key: 'videoSourceStartScreenCaptureByScreen',
                     value: function (e, t, n) {
                        return this.rtcEngine.videosourceStartScreenCaptureByScreen(
                           e,
                           t,
                           n
                        )
                     },
                  },
                  {
                     key: 'videoSourceStartScreenCaptureByDisplayId',
                     value: function (e, t, n) {
                        return this.rtcEngine.videoSourceStartScreenCaptureByDisplayId(
                           e,
                           t,
                           n
                        )
                     },
                  },
                  {
                     key: 'startScreenCaptureByDisplayId',
                     value: function (e, t, n) {
                        return this.rtcEngine.startScreenCaptureByDisplayId(e, t, n)
                     },
                  },
                  {
                     key: 'videoSourceStartScreenCaptureByWindow',
                     value: function (e, t, n) {
                        return this.rtcEngine.videosourceStartScreenCaptureByWindow(
                           e,
                           t,
                           n
                        )
                     },
                  },
                  {
                     key: 'videoSourceUpdateScreenCaptureParameters',
                     value: function (e) {
                        return this.rtcEngine.videosourceUpdateScreenCaptureParameters(
                           e
                        )
                     },
                  },
                  {
                     key: 'videoSourceSetScreenCaptureContentHint',
                     value: function (e) {
                        return this.rtcEngine.videosourceSetScreenCaptureContentHint(
                           e
                        )
                     },
                  },
                  {
                     key: 'startScreenCapture',
                     value: function (e, t, n, r) {
                        return (
                           (0, d.deprecate)(),
                           this.rtcEngine.startScreenCapture(e, t, n, r)
                        )
                     },
                  },
                  {
                     key: 'stopScreenCapture',
                     value: function () {
                        return this.rtcEngine.stopScreenCapture()
                     },
                  },
                  {
                     key: 'updateScreenCaptureRegion',
                     value: function (e) {
                        return this.rtcEngine.updateScreenCaptureRegion(e)
                     },
                  },
                  {
                     key: 'startAudioMixing',
                     value: function (e, t, n, r) {
                        var i =
                           arguments.length > 4 && void 0 !== arguments[4]
                              ? arguments[4]
                              : 0
                        return this.rtcEngine.startAudioMixing(e, t, n, r, i)
                     },
                  },
                  {
                     key: 'stopAudioMixing',
                     value: function () {
                        return this.rtcEngine.stopAudioMixing()
                     },
                  },
                  {
                     key: 'pauseAudioMixing',
                     value: function () {
                        return this.rtcEngine.pauseAudioMixing()
                     },
                  },
                  {
                     key: 'resumeAudioMixing',
                     value: function () {
                        return this.rtcEngine.resumeAudioMixing()
                     },
                  },
                  {
                     key: 'adjustAudioMixingVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustAudioMixingVolume(e)
                     },
                  },
                  {
                     key: 'adjustAudioMixingPlayoutVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustAudioMixingPlayoutVolume(e)
                     },
                  },
                  {
                     key: 'adjustAudioMixingPublishVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustAudioMixingPublishVolume(e)
                     },
                  },
                  {
                     key: 'getAudioMixingDuration',
                     value: function () {
                        return this.rtcEngine.getAudioMixingDuration()
                     },
                  },
                  {
                     key: 'getAudioMixingCurrentPosition',
                     value: function () {
                        return this.rtcEngine.getAudioMixingCurrentPosition()
                     },
                  },
                  {
                     key: 'getAudioMixingPlayoutVolume',
                     value: function () {
                        return this.rtcEngine.getAudioMixingPlayoutVolume()
                     },
                  },
                  {
                     key: 'getAudioMixingPublishVolume',
                     value: function () {
                        return this.rtcEngine.getAudioMixingPublishVolume()
                     },
                  },
                  {
                     key: 'setAudioMixingPosition',
                     value: function (e) {
                        return this.rtcEngine.setAudioMixingPosition(e)
                     },
                  },
                  {
                     key: 'setAudioMixingPitch',
                     value: function (e) {
                        return this.rtcEngine.setAudioMixingPitch(e)
                     },
                  },
                  {
                     key: 'addPublishStreamUrl',
                     value: function (e, t) {
                        return this.rtcEngine.addPublishStreamUrl(e, t)
                     },
                  },
                  {
                     key: 'removePublishStreamUrl',
                     value: function (e) {
                        return this.rtcEngine.removePublishStreamUrl(e)
                     },
                  },
                  {
                     key: 'setLiveTranscoding',
                     value: function (e) {
                        return this.rtcEngine.setLiveTranscoding(e)
                     },
                  },
                  {
                     key: 'addInjectStreamUrl',
                     value: function (e, t) {
                        return this.rtcEngine.addInjectStreamUrl(e, t)
                     },
                  },
                  {
                     key: 'removeInjectStreamUrl',
                     value: function (e) {
                        return this.rtcEngine.removeInjectStreamUrl(e)
                     },
                  },
                  {
                     key: 'createDataStream',
                     value: function (e, t) {
                        return this.rtcEngine.createDataStream(e, t)
                     },
                  },
                  {
                     key: 'createDataStreamWithConfig',
                     value: function (e) {
                        return this.rtcEngine.createDataStream(e)
                     },
                  },
                  {
                     key: 'sendStreamMessage',
                     value: function (e, t) {
                        return this.rtcEngine.sendStreamMessage(e, t)
                     },
                  },
                  {
                     key: 'startChannelMediaRelay',
                     value: function (e) {
                        return this.rtcEngine.startChannelMediaRelay(e)
                     },
                  },
                  {
                     key: 'updateChannelMediaRelay',
                     value: function (e) {
                        return this.rtcEngine.updateChannelMediaRelay(e)
                     },
                  },
                  {
                     key: 'stopChannelMediaRelay',
                     value: function () {
                        return this.rtcEngine.stopChannelMediaRelay()
                     },
                  },
                  {
                     key: 'getEffectsVolume',
                     value: function () {
                        return this.rtcEngine.getEffectsVolume()
                     },
                  },
                  {
                     key: 'setEffectsVolume',
                     value: function (e) {
                        return this.rtcEngine.setEffectsVolume(e)
                     },
                  },
                  {
                     key: 'setVolumeOfEffect',
                     value: function (e, t) {
                        return this.rtcEngine.setVolumeOfEffect(e, t)
                     },
                  },
                  {
                     key: 'playEffect',
                     value: function (e, t, n, r, i, o, a, c) {
                        return this.rtcEngine.playEffect(e, t, n, r, i, o, a, c)
                     },
                  },
                  {
                     key: 'stopEffect',
                     value: function (e) {
                        return this.rtcEngine.stopEffect(e)
                     },
                  },
                  {
                     key: 'stopAllEffects',
                     value: function () {
                        return this.rtcEngine.stopAllEffects()
                     },
                  },
                  {
                     key: 'preloadEffect',
                     value: function (e, t) {
                        return this.rtcEngine.preloadEffect(e, t)
                     },
                  },
                  {
                     key: 'unloadEffect',
                     value: function (e) {
                        return this.rtcEngine.unloadEffect(e)
                     },
                  },
                  {
                     key: 'pauseEffect',
                     value: function (e) {
                        return this.rtcEngine.pauseEffect(e)
                     },
                  },
                  {
                     key: 'pauseAllEffects',
                     value: function () {
                        return this.rtcEngine.pauseAllEffects()
                     },
                  },
                  {
                     key: 'resumeEffect',
                     value: function (e) {
                        return this.rtcEngine.resumeEffect(e)
                     },
                  },
                  {
                     key: 'resumeAllEffects',
                     value: function () {
                        return this.rtcEngine.resumeAllEffects()
                     },
                  },
                  {
                     key: 'enableSoundPositionIndication',
                     value: function (e) {
                        return this.rtcEngine.enableSoundPositionIndication(e)
                     },
                  },
                  {
                     key: 'setRemoteVoicePosition',
                     value: function (e, t, n) {
                        return this.rtcEngine.setRemoteVoicePosition(e, t, n)
                     },
                  },
                  {
                     key: 'getCallId',
                     value: function () {
                        return this.rtcEngine.getCallId()
                     },
                  },
                  {
                     key: 'rate',
                     value: function (e, t, n) {
                        return this.rtcEngine.rate(e, t, n)
                     },
                  },
                  {
                     key: 'complain',
                     value: function (e, t) {
                        return this.rtcEngine.complain(e, t)
                     },
                  },
                  {
                     key: 'setRecordingAudioFrameParameters',
                     value: function (e, t, n, r) {
                        return this.rtcEngine.setRecordingAudioFrameParameters(
                           e,
                           t,
                           n,
                           r
                        )
                     },
                  },
                  {
                     key: 'setBool',
                     value: function (e, t) {
                        return this.rtcEngine.setBool(e, t)
                     },
                  },
                  {
                     key: 'setInt',
                     value: function (e, t) {
                        return this.rtcEngine.setInt(e, t)
                     },
                  },
                  {
                     key: 'setUInt',
                     value: function (e, t) {
                        return this.rtcEngine.setUInt(e, t)
                     },
                  },
                  {
                     key: 'setNumber',
                     value: function (e, t) {
                        return this.rtcEngine.setNumber(e, t)
                     },
                  },
                  {
                     key: 'setString',
                     value: function (e, t) {
                        return this.rtcEngine.setString(e, t)
                     },
                  },
                  {
                     key: 'setObject',
                     value: function (e, t) {
                        return this.rtcEngine.setObject(e, t)
                     },
                  },
                  {
                     key: 'getBool',
                     value: function (e) {
                        return this.rtcEngine.getBool(e)
                     },
                  },
                  {
                     key: 'getInt',
                     value: function (e) {
                        return this.rtcEngine.getInt(e)
                     },
                  },
                  {
                     key: 'getUInt',
                     value: function (e) {
                        return this.rtcEngine.getUInt(e)
                     },
                  },
                  {
                     key: 'getNumber',
                     value: function (e) {
                        return this.rtcEngine.getNumber(e)
                     },
                  },
                  {
                     key: 'getString',
                     value: function (e) {
                        return this.rtcEngine.getString(e)
                     },
                  },
                  {
                     key: 'getObject',
                     value: function (e) {
                        return this.rtcEngine.getObject(e)
                     },
                  },
                  {
                     key: 'getArray',
                     value: function (e) {
                        return this.rtcEngine.getArray(e)
                     },
                  },
                  {
                     key: 'setParameters',
                     value: function (e) {
                        return this.rtcEngine.setParameters(e)
                     },
                  },
                  {
                     key: 'convertPath',
                     value: function (e) {
                        return this.rtcEngine.convertPath(e)
                     },
                  },
                  {
                     key: 'setProfile',
                     value: function (e, t) {
                        return this.rtcEngine.setProfile(e, t)
                     },
                  },
                  {
                     key: 'initializePluginManager',
                     value: function () {
                        var e =
                           arguments.length > 0 &&
                           void 0 !== arguments[0] &&
                           arguments[0]
                        return this.rtcEngine.initializePluginManager(e)
                     },
                  },
                  {
                     key: 'releasePluginManager',
                     value: function () {
                        return this.rtcEngine.releasePluginManager()
                     },
                  },
                  {
                     key: 'registerPlugin',
                     value: function (e) {
                        return this.rtcEngine.registerPlugin(e)
                     },
                  },
                  {
                     key: 'unregisterPlugin',
                     value: function (e) {
                        return this.rtcEngine.unregisterPlugin(e)
                     },
                  },
                  {
                     key: 'getPlugins',
                     value: function () {
                        var e = this
                        return this.rtcEngine.getPlugins().map(function (t) {
                           return e.createPlugin(t.id)
                        })
                     },
                  },
                  {
                     key: 'createPlugin',
                     value: function (e) {
                        var t = this
                        return {
                           id: e,
                           enable: function () {
                              return t.enablePlugin(e, true)
                           },
                           disable: function () {
                              return t.enablePlugin(e, false)
                           },
                           setParameter: function (n) {
                              return t.setPluginParameter(e, n)
                           },
                           getParameter: function (n) {
                              return t.getPluginParameter(e, n)
                           },
                        }
                     },
                  },
                  {
                     key: 'enablePlugin',
                     value: function (e, t) {
                        return this.rtcEngine.enablePlugin(e, t)
                     },
                  },
                  {
                     key: 'setPluginParameter',
                     value: function (e, t) {
                        return this.rtcEngine.setPluginParameter(e, t)
                     },
                  },
                  {
                     key: 'getPluginParameter',
                     value: function (e, t) {
                        return this.rtcEngine.getPluginParameter(e, t)
                     },
                  },
                  {
                     key: 'unRegisterMediaMetadataObserver',
                     value: function () {
                        return this.rtcEngine.unRegisterMediaMetadataObserver()
                     },
                  },
                  {
                     key: 'registerMediaMetadataObserver',
                     value: function () {
                        var e = this,
                           t = function (t) {
                              for (
                                 var n = arguments.length,
                                 r = new Array(n > 1 ? n - 1 : 0),
                                 i = 1;
                                 i < n;
                                 i++
                              ) {
                                 r[i - 1] = arguments[i]
                              }
                              setImmediate(function () {
                                 e.emit.apply(e, [t].concat(r))
                              })
                           }
                        return (
                           this.rtcEngine.addMetadataEventHandler(
                              function (e) {
                                 t('receiveMetadata', e)
                              },
                              function (e) {
                                 t('sendMetadataSuccess', e)
                              }
                           ),
                           this.rtcEngine.registerMediaMetadataObserver()
                        )
                     },
                  },
                  {
                     key: 'sendMetadata',
                     value: function (e) {
                        return this.rtcEngine.sendMetadata(e)
                     },
                  },
                  {
                     key: 'setMaxMetadataSize',
                     value: function (e) {
                        return this.rtcEngine.setMaxMetadataSize(e)
                     },
                  },
                  {
                     key: 'sendCustomReportMessage',
                     value: function (e, t, n, r, i) {
                        return this.rtcEngine.sendCustomReportMessage(e, t, n, r, i)
                     },
                  },
                  {
                     key: 'enableEncryption',
                     value: function (e, t) {
                        return this.rtcEngine.enableEncryption(e, t)
                     },
                  },
                  {
                     key: 'setAudioEffectPreset',
                     value: function (e) {
                        return this.rtcEngine.setAudioEffectPreset(e)
                     },
                  },
                  {
                     key: 'setVoiceBeautifierPreset',
                     value: function (e) {
                        return this.rtcEngine.setVoiceBeautifierPreset(e)
                     },
                  },
                  {
                     key: 'setAudioEffectParameters',
                     value: function (e, t, n) {
                        return this.rtcEngine.setAudioEffectParameters(e, t, n)
                     },
                  },
                  {
                     key: 'setCloudProxy',
                     value: function (e) {
                        return this.rtcEngine.setCloudProxy(e)
                     },
                  },
                  {
                     key: 'enableDeepLearningDenoise',
                     value: function (e) {
                        return this.rtcEngine.enableDeepLearningDenoise(e)
                     },
                  },
                  {
                     key: 'setVoiceBeautifierParameters',
                     value: function (e, t, n) {
                        return this.rtcEngine.setVoiceBeautifierParameters(e, t, n)
                     },
                  },
                  {
                     key: 'uploadLogFile',
                     value: function () {
                        return this.rtcEngine.uploadLogFile()
                     },
                  },
                  {
                     key: 'setVoiceConversionPreset',
                     value: function (e) {
                        return this.rtcEngine.setVoiceConversionPreset(e)
                     },
                  },
                  {
                     key: 'setProcessDpiAwareness',
                     value: function () {
                        return this.rtcEngine.setProcessDpiAwareness()
                     },
                  },
                  {
                     key: 'videoSourceSetProcessDpiAwareness',
                     value: function () {
                        return this.rtcEngine.videoSourceSetProcessDpiAwareness()
                     },
                  },
                  {
                     key: 'startAudioRecordingWithConfig',
                     value: function (e) {
                        return this.rtcEngine.startAudioRecordingWithConfig(e)
                     },
                  },
                  {
                     key: 'enableVirtualBackground',
                     value: function (e, t) {
                        return this.rtcEngine.enableVirtualBackground(e, t)
                     },
                  },
                  {
                     key: 'pauseAllChannelMediaRelay',
                     value: function () {
                        return this.rtcEngine.pauseAllChannelMediaRelay()
                     },
                  },
                  {
                     key: 'resumeAllChannelMediaRelay',
                     value: function () {
                        return this.rtcEngine.resumeAllChannelMediaRelay()
                     },
                  },
                  {
                     key: 'setAudioMixingPlaybackSpeed',
                     value: function () {
                        var e =
                           arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 100
                        return this.rtcEngine.setAudioMixingPlaybackSpeed(e)
                     },
                  },
                  {
                     key: 'setAudioMixingDualMonoMode',
                     value: function (e) {
                        return this.rtcEngine.setAudioMixingDualMonoMode(e)
                     },
                  },
                  {
                     key: 'getAudioTrackCount',
                     value: function () {
                        return this.rtcEngine.getAudioTrackCount()
                     },
                  },
                  {
                     key: 'selectAudioTrack',
                     value: function (e) {
                        return this.rtcEngine.selectAudioTrack(e)
                     },
                  },
                  {
                     key: 'videoSourceDisableAudio',
                     value: function () {
                        return this.rtcEngine.videoSourceDisableAudio()
                     },
                  },
                  {
                     key: 'adjustLoopbackSignalVolume',
                     value: function (e) {
                        return this.rtcEngine.adjustLoopbackSignalVolume(e)
                     },
                  },
                  {
                     key: 'videoSourceAdjustRecordingSignalVolume',
                     value: function (e) {
                        return this.rtcEngine.videoSourceAdjustRecordingSignalVolume(
                           e
                        )
                     },
                  },
                  {
                     key: 'videoSourceAdjustLoopbackRecordingSignalVolume',
                     value: function (e) {
                        return this.rtcEngine.videoSourceAdjustLoopbackRecordingSignalVolume(
                           e
                        )
                     },
                  },
                  {
                     key: 'videoSourceMuteRemoteAudioStream',
                     value: function (e, t) {
                        return this.rtcEngine.videoSourceMuteRemoteAudioStream(e, t)
                     },
                  },
                  {
                     key: 'videoSourceMuteAllRemoteAudioStreams',
                     value: function (e) {
                        return this.rtcEngine.videoSourceMuteAllRemoteAudioStreams(e)
                     },
                  },
                  {
                     key: 'videoSourceMuteRemoteVideoStream',
                     value: function (e, t) {
                        return this.rtcEngine.videoSourceMuteRemoteVideoStream(e, t)
                     },
                  },
                  {
                     key: 'videoSourceMuteAllRemoteVideoStreams',
                     value: function (e) {
                        return this.rtcEngine.videoSourceMuteAllRemoteVideoStreams(e)
                     },
                  },
                  {
                     key: 'getDefaultAudioPlaybackDevices',
                     value: function () {
                        return this.rtcEngine.getDefaultAudioPlaybackDevices()
                     },
                  },
                  {
                     key: 'getDefaultAudioRecordingDevices',
                     value: function () {
                        return this.rtcEngine.getDefaultAudioRecordingDevices()
                     },
                  },
                  {
                     key: 'takeSnapshot',
                     value: function (e, t, n) {
                        return this.rtcEngine.takeSnapshot(e, t, n)
                     },
                  },
                  {
                     key: 'startRtmpStreamWithoutTranscoding',
                     value: function (e) {
                        return this.rtcEngine.startRtmpStreamWithoutTranscoding(e)
                     },
                  },
                  {
                     key: 'startRtmpStreamWithTranscoding',
                     value: function (e, t) {
                        return this.rtcEngine.startRtmpStreamWithTranscoding(e, t)
                     },
                  },
                  {
                     key: 'updateRtmpTranscoding',
                     value: function (e) {
                        return this.rtcEngine.updateRtmpTranscoding(e)
                     },
                  },
                  {
                     key: 'stopRtmpStream',
                     value: function (e) {
                        return this.rtcEngine.stopRtmpStream(e)
                     },
                  },
                  {
                     key: 'setAVSyncSource',
                     value: function (e, t) {
                        return this.rtcEngine.setAVSyncSource(e, t)
                     },
                  },
                  {
                     key: 'followSystemPlaybackDevice',
                     value: function (e) {
                        return this.rtcEngine.followSystemPlaybackDevice(e)
                     },
                  },
                  {
                     key: 'followSystemRecordingDevice',
                     value: function (e) {
                        return this.rtcEngine.followSystemRecordingDevice(e)
                     },
                  },
                  {
                     key: 'getScreenCaptureSources',
                     value: function (e, t, n) {
                        return this.rtcEngine.getScreenCaptureSources(e, t, n)
                     },
                  },
                  {
                     key: 'setLowlightEnhanceOptions',
                     value: function (e, t) {
                        return this.rtcEngine.setLowlightEnhanceOptions(e, t)
                     },
                  },
                  {
                     key: 'setVideoDenoiserOptions',
                     value: function (e, t) {
                        return this.rtcEngine.setVideoDenoiserOptions(e, t)
                     },
                  },
                  {
                     key: 'setColorEnhanceOptions',
                     value: function (e, t) {
                        return this.rtcEngine.setColorEnhanceOptions(e, t)
                     },
                  },
                  {
                     key: 'setLocalAccessPoint',
                     value: function (e) {
                        return this.rtcEngine.setLocalAccessPoint(e)
                     },
                  },
                  {
                     key: 'videoSourceSetLocalAccessPoint',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetLocalAccessPoint(e)
                     },
                  },
                  {
                     key: 'setScreenCaptureScenario',
                     value: function (e) {
                        return this.rtcEngine.setScreenCaptureScenario(e)
                     },
                  },
                  {
                     key: 'videoSourceSetScreenCaptureScenario',
                     value: function (e) {
                        return this.rtcEngine.videoSourceSetScreenCaptureScenario(e)
                     },
                  },
                  {
                     key: 'enableLocalVoicePitchCallback',
                     value: function (e) {
                        return this.rtcEngine.enableLocalVoicePitchCallback(e)
                     },
                  },
                  {
                     key: 'enableWirelessAccelerate',
                     value: function (e) {
                        return this.rtcEngine.enableWirelessAccelerate(e)
                     },
                  },
                  {
                     key: 'enableContentInspect',
                     value: function (e, t) {
                        return this.rtcEngine.enableContentInspect(e, t)
                     },
                  },
                  {
                     key: 'enableSpatialAudio',
                     value: function (e) {
                        return this.rtcEngine.enableSpatialAudio(e)
                     },
                  },
                  {
                     key: 'setRemoteUserSpatialAudioParams',
                     value: function (e, t) {
                        return this.rtcEngine.setRemoteUserSpatialAudioParams(e, t)
                     },
                  },
                  {
                     key: 'sendStreamMessageWithArrayBuffer',
                     value: function (e, t) {
                        return this.rtcEngine.sendStreamMessageWithArrayBuffer(e, t)
                     },
                  },
               ]),
               r
            )
         })(l.EventEmitter),
            g = (function (e) {
               a(n, e)
               var t = c(n)
               function n(e) {
                  var r
                  return (
                     i(this, n),
                     (r = t.call(this)),
                     (r.rtcChannel = e),
                     r.initEventHandler(),
                     r
                  )
               }
               return (
                  o(n, [
                     {
                        key: 'initEventHandler',
                        value: function () {
                           var e = this,
                              t = function (t) {
                                 for (
                                    var n = arguments.length,
                                    r = new Array(n > 1 ? n - 1 : 0),
                                    i = 1;
                                    i < n;
                                    i++
                                 ) {
                                    r[i - 1] = arguments[i]
                                 }
                                 setImmediate(function () {
                                    e.emit.apply(e, [t].concat(r))
                                 })
                              }
                           this.rtcChannel.onEvent('apierror', function (e) {
                              console.error(
                                 'api '.concat(
                                    e,
                                    ' failed. this is an error\n              thrown by c++ addon layer. it often means sth is\n              going wrong with this function call and it refused\n              to do what is asked. kindly check your parameter types\n              to see if it matches properly.'
                                 )
                              )
                           })
                           this.rtcChannel.onEvent(
                              'joinChannelSuccess',
                              function (e, n) {
                                 t('joinChannelSuccess', e, n)
                              }
                           )
                           this.rtcChannel.onEvent('channelWarning', function (e, n) {
                              t('channelWarning', e, n)
                           })
                           this.rtcChannel.onEvent('channelError', function (e, n) {
                              t('channelError', e, n)
                           })
                           this.rtcChannel.onEvent(
                              'rejoinChannelSuccess',
                              function (e, n) {
                                 t('rejoinChannelSuccess', e, n)
                              }
                           )
                           this.rtcChannel.onEvent('leaveChannel', function (e) {
                              t('leaveChannel', e)
                           })
                           this.rtcChannel.onEvent('clientRoleChanged', function (e, n) {
                              t('clientRoleChanged', e, n)
                           })
                           this.rtcChannel.onEvent('userJoined', function (e, n) {
                              t('userJoined', e, n)
                           })
                           this.rtcChannel.onEvent('userOffline', function (e, n) {
                              t('userOffline', e, n)
                           })
                           this.rtcChannel.onEvent('connectionLost', function () {
                              t('connectionLost')
                           })
                           this.rtcChannel.onEvent('requestToken', function () {
                              t('requestToken')
                           })
                           this.rtcChannel.onEvent(
                              'tokenPrivilegeWillExpire',
                              function (e) {
                                 t('tokenPrivilegeWillExpire', e)
                              }
                           )
                           this.rtcChannel.onEvent('rtcStats', function (e) {
                              t('rtcStats', e)
                           })
                           this.rtcChannel.onEvent('networkQuality', function (e, n, r) {
                              t('networkQuality', e, n, r)
                           })
                           this.rtcChannel.onEvent('remoteVideoStats', function (e) {
                              t('remoteVideoStats', e)
                           })
                           this.rtcChannel.onEvent('remoteAudioStats', function (e) {
                              t('remoteAudioStats', e)
                           })
                           this.rtcChannel.onEvent(
                              'remoteAudioStateChanged',
                              function (e, n, r, i) {
                                 t('remoteAudioStateChanged', e, n, r, i)
                              }
                           )
                           this.rtcChannel.onEvent('activeSpeaker', function (e) {
                              t('activeSpeaker', e)
                           })
                           this.rtcChannel.onEvent(
                              'firstRemoteAudioDecoded',
                              function (e, n) {
                                 t('firstRemoteAudioDecoded', e, n)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'videoSizeChanged',
                              function (e, n, r, i) {
                                 t('videoSizeChanged', e, n, r, i)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'remoteVideoStateChanged',
                              function (e, n, r, i) {
                                 t('remoteVideoStateChanged', e, n, r, i)
                              }
                           )
                           this.rtcChannel.onEvent('streamMessage', function (e, n, r) {
                              t('streamMessage', e, n, r)
                           })
                           this.rtcChannel.onEvent(
                              'streamMessageError',
                              function (e, n, r, i, o) {
                                 t('streamMessage', e, n, r, i, o)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'channelMediaRelayStateChanged',
                              function (e, n) {
                                 t('channelMediaRelayStateChanged', e, n)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'channelMediaRelayEvent',
                              function (e) {
                                 t('channelMediaRelayEvent', e)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'firstRemoteAudioFrame',
                              function (e, n) {
                                 t('firstRemoteAudioFrame', e, n)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'rtmpStreamingStateChanged',
                              function (e, n, r) {
                                 t('rtmpStreamingStateChanged', e, n, r)
                              }
                           )
                           this.rtcChannel.onEvent('transcodingUpdated', function () {
                              t('transcodingUpdated')
                           })
                           this.rtcChannel.onEvent(
                              'streamInjectedStatus',
                              function (e, n, r) {
                                 t('streamInjectedStatus', e, n, r)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'remoteSubscribeFallbackToAudioOnly',
                              function (e, n) {
                                 t('remoteSubscribeFallbackToAudioOnly', e, n)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'connectionStateChanged',
                              function (e, n) {
                                 t('connectionStateChanged', e, n)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'audioPublishStateChanged',
                              function (e, n, r) {
                                 t('audioPublishStateChanged', e, n, r)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'videoPublishStateChanged',
                              function (e, n, r) {
                                 t('videoPublishStateChanged', e, n, r)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'audioSubscribeStateChanged',
                              function (e, n, r, i) {
                                 t('audioSubscribeStateChanged', e, n, r, i)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'videoSubscribeStateChanged',
                              function (e, n, r, i) {
                                 t('videoSubscribeStateChanged', e, n, r, i)
                              }
                           )
                           this.rtcChannel.onEvent(
                              'firstRemoteVideoFrame',
                              function (e, n, r, i) {
                                 t('firstRemoteVideoFrame', e, n, r, i)
                              }
                           )
                        },
                     },
                     {
                        key: 'joinChannel',
                        value: function (e, t, n, r) {
                           return this.rtcChannel.joinChannel(
                              e,
                              t,
                              n,
                              r || {
                                 autoSubscribeAudio: true,
                                 autoSubscribeVideo: true,
                                 publishLocalAudio: true,
                                 publishLocalVideo: true,
                              }
                           )
                        },
                     },
                     {
                        key: 'joinChannelWithUserAccount',
                        value: function (e, t, n) {
                           return this.rtcChannel.joinChannelWithUserAccount(
                              e,
                              t,
                              n || {
                                 autoSubscribeAudio: true,
                                 autoSubscribeVideo: true,
                                 publishLocalAudio: true,
                                 publishLocalVideo: true,
                              }
                           )
                        },
                     },
                     {
                        key: 'channelId',
                        value: function () {
                           return this.rtcChannel.channelId()
                        },
                     },
                     {
                        key: 'getCallId',
                        value: function () {
                           return this.rtcChannel.getCallId()
                        },
                     },
                     {
                        key: 'setClientRole',
                        value: function (e) {
                           return this.rtcChannel.setClientRole(e)
                        },
                     },
                     {
                        key: 'setClientRoleWithOptions',
                        value: function (e, t) {
                           return this.rtcChannel.setClientRoleWithOptions(e, t)
                        },
                     },
                     {
                        key: 'setRemoteUserPriority',
                        value: function (e, t) {
                           return this.rtcChannel.setRemoteUserPriority(e, t)
                        },
                     },
                     {
                        key: 'renewToken',
                        value: function (e) {
                           return this.rtcChannel.renewToken(e)
                        },
                     },
                     {
                        key: 'setEncryptionSecret',
                        value: function (e) {
                           return this.rtcChannel.setEncryptionSecret(e)
                        },
                     },
                     {
                        key: 'setEncryptionMode',
                        value: function (e) {
                           return this.rtcChannel.setEncryptionMode(e)
                        },
                     },
                     {
                        key: 'setRemoteVoicePosition',
                        value: function (e, t, n) {
                           return this.rtcChannel.setRemoteVoicePosition(e, t, n)
                        },
                     },
                     {
                        key: 'setDefaultMuteAllRemoteAudioStreams',
                        value: function (e) {
                           return this.rtcChannel.setDefaultMuteAllRemoteAudioStreams(e)
                        },
                     },
                     {
                        key: 'setDefaultMuteAllRemoteVideoStreams',
                        value: function (e) {
                           return this.rtcChannel.setDefaultMuteAllRemoteVideoStreams(e)
                        },
                     },
                     {
                        key: 'muteAllRemoteAudioStreams',
                        value: function (e) {
                           return this.rtcChannel.muteAllRemoteAudioStreams(e)
                        },
                     },
                     {
                        key: 'muteRemoteAudioStream',
                        value: function (e, t) {
                           return this.rtcChannel.muteRemoteAudioStream(e, t)
                        },
                     },
                     {
                        key: 'muteAllRemoteVideoStreams',
                        value: function (e) {
                           return this.rtcChannel.muteAllRemoteVideoStreams(e)
                        },
                     },
                     {
                        key: 'muteRemoteVideoStream',
                        value: function (e, t) {
                           return this.rtcChannel.muteRemoteVideoStream(e, t)
                        },
                     },
                     {
                        key: 'setRemoteVideoStreamType',
                        value: function (e, t) {
                           return this.rtcChannel.setRemoteVideoStreamType(e, t)
                        },
                     },
                     {
                        key: 'setRemoteDefaultVideoStreamType',
                        value: function (e) {
                           return this.rtcChannel.setRemoteDefaultVideoStreamType(e)
                        },
                     },
                     {
                        key: 'createDataStream',
                        value: function (e, t) {
                           return this.rtcChannel.createDataStream(e, t)
                        },
                     },
                     {
                        key: 'createDataStreamWithConfig',
                        value: function (e) {
                           return this.rtcChannel.createDataStream(e)
                        },
                     },
                     {
                        key: 'sendStreamMessage',
                        value: function (e, t) {
                           return this.rtcChannel.sendStreamMessage(e, t)
                        },
                     },
                     {
                        key: 'addPublishStreamUrl',
                        value: function (e, t) {
                           return this.rtcChannel.addPublishStreamUrl(e, t)
                        },
                     },
                     {
                        key: 'removePublishStreamUrl',
                        value: function (e) {
                           return this.rtcChannel.removePublishStreamUrl(e)
                        },
                     },
                     {
                        key: 'setLiveTranscoding',
                        value: function (e) {
                           return this.rtcChannel.setLiveTranscoding(e)
                        },
                     },
                     {
                        key: 'addInjectStreamUrl',
                        value: function (e, t) {
                           return this.rtcChannel.addInjectStreamUrl(e, t)
                        },
                     },
                     {
                        key: 'removeInjectStreamUrl',
                        value: function (e) {
                           return this.rtcChannel.removeInjectStreamUrl(e)
                        },
                     },
                     {
                        key: 'startChannelMediaRelay',
                        value: function (e) {
                           return this.rtcChannel.startChannelMediaRelay(e)
                        },
                     },
                     {
                        key: 'updateChannelMediaRelay',
                        value: function (e) {
                           return this.rtcChannel.updateChannelMediaRelay(e)
                        },
                     },
                     {
                        key: 'stopChannelMediaRelay',
                        value: function () {
                           return this.rtcChannel.stopChannelMediaRelay()
                        },
                     },
                     {
                        key: 'getConnectionState',
                        value: function () {
                           return this.rtcChannel.getConnectionState()
                        },
                     },
                     {
                        key: 'publish',
                        value: function () {
                           return this.rtcChannel.publish()
                        },
                     },
                     {
                        key: 'unpublish',
                        value: function () {
                           return this.rtcChannel.unpublish()
                        },
                     },
                     {
                        key: 'leaveChannel',
                        value: function () {
                           return this.rtcChannel.leaveChannel()
                        },
                     },
                     {
                        key: 'release',
                        value: function () {
                           return this.rtcChannel.release()
                        },
                     },
                     {
                        key: 'adjustUserPlaybackSignalVolume',
                        value: function (e, t) {
                           return this.rtcChannel.adjustUserPlaybackSignalVolume(e, t)
                        },
                     },
                     {
                        key: 'unRegisterMediaMetadataObserver',
                        value: function () {
                           return this.rtcChannel.unRegisterMediaMetadataObserver()
                        },
                     },
                     {
                        key: 'registerMediaMetadataObserver',
                        value: function () {
                           var e = this,
                              t = function (t) {
                                 for (
                                    var n = arguments.length,
                                    r = new Array(n > 1 ? n - 1 : 0),
                                    i = 1;
                                    i < n;
                                    i++
                                 ) {
                                    r[i - 1] = arguments[i]
                                 }
                                 setImmediate(function () {
                                    e.emit.apply(e, [t].concat(r))
                                 })
                              }
                           return (
                              this.rtcChannel.addMetadataEventHandler(
                                 function (e) {
                                    t('receiveMetadata', e)
                                 },
                                 function (e) {
                                    t('sendMetadataSuccess', e)
                                 }
                              ),
                              this.rtcChannel.registerMediaMetadataObserver()
                           )
                        },
                     },
                     {
                        key: 'sendMetadata',
                        value: function (e) {
                           return this.rtcChannel.sendMetadata(e)
                        },
                     },
                     {
                        key: 'setMaxMetadataSize',
                        value: function (e) {
                           return this.rtcChannel.setMaxMetadataSize(e)
                        },
                     },
                     {
                        key: 'enableEncryption',
                        value: function (e, t) {
                           return this.rtcChannel.enableEncryption(e, t)
                        },
                     },
                     {
                        key: 'muteLocalAudioStream',
                        value: function (e) {
                           return this.rtcChannel.muteLocalAudioStream(e)
                        },
                     },
                     {
                        key: 'muteLocalVideoStream',
                        value: function (e) {
                           return this.rtcChannel.muteLocalVideoStream(e)
                        },
                     },
                     {
                        key: 'sendStreamMessageWithArrayBuffer',
                        value: function (e, t) {
                           return this.rtcChannel.sendStreamMessageWithArrayBuffer(e, t)
                        },
                     },
                  ]),
                  n
               )
            })(l.EventEmitter)
         n.default = f
      },
      c63e: function (e, t) {
         e.exports =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP/DL//DLv/BL//DLv/EL//DL//DLv/DL//CLv/DL//DL//CLf/DL//DL//DL//DLv/DL//DMv/DMGSQIxsAAAATdFJOUwDwcSTeYM1AwICojww0SLNSmhsrwQ8LAAABI0lEQVRYw+3X2a6DIBCAYbaBYXXh/d/1aE3UxtbjMhdtOv+l6BeiiYAQ5+tzLwhK2oGKjTW1Vn/HyQV8NzlzF8HRkfVV10BX38Ygg18FptICKB+70OAWDD4GNPIMaJentyAuv4l8FKx7IIjYdB7a3CdBArplWFoMUYHTiQhcZdDTgqt3yyCDdgTlkBmy1iLeBIcJ7Q6fB2txzpGCYwz+HuhWAR4BcR98LhwAU6vGlXIDaruZexBwAJy35dN2WtadNX++iESbiK8BDRYyULWXT0AvwTsxyCCDnwJaUhAjaCrQBFWSuNsESoytFiRpYzqVxc/kh0Mipaemj2tDHE62iWKCh7daDDLI4CeDhRoUPXSWFHysASpIUnAsK6QFp+Pjf3f8AVRMjNs7xw9TAAAAAElFTkSuQmCC'
      },
      c6a7: function (e, t, n) {
         'use strict'
         e.exports =
            'function' == typeof Bun && Bun && 'string' == typeof Bun.version
      },
      cfc3: function (e, t, n) {
         'use strict'
         var r = n('74e8')
         r('Float32', function (e) {
            return function (t, n, r) {
               return e(this, t, n, r)
            }
         })
      },
      d15d: function (e, t, n) {
         'use strict'
         n.d(t, 'a', function () {
            return m
         })
         var r = n('c7eb'),
            i = n('1da1'),
            o = n('d4ec'),
            a = n('bee2'),
            c = n('262e'),
            u = n('2caf'),
            s = (n('a9e3'), n('99af'), n('d3b7'), n('159b'), n('0d52')),
            l = n('c1f6'),
            d = n('d0db'),
            h = n('e417'),
            f = n('099c'),
            g = n('6543'),
            v = n('a9a6'),
            m = (function (e) {
               Object(c.a)(n, e)
               var t = Object(u.a)(n)
               function n() {
                  var e,
                     r =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : {}
                  Object(o.a)(this, n)
                  e = t.call(this)
                  var i = r.rtcConfig,
                     a = void 0 === i ? {} : i,
                     c = r.publishStatus,
                     u = void 0 === c || c,
                     s = a.token,
                     l = a.teacherUid,
                     d = a.teacherAudioUid,
                     f = a.teacherVideoUid,
                     g = a.teacherShareUid
                  return (
                     (e.teacherDeviceType = ''),
                     (e.options = r),
                     (e.token = s),
                     (e.teacherUid = Number(l)),
                     (e.teacherVideoUid = Number(f)),
                     (e.teacherAudioUid = Number(d)),
                     (e.teacherShareUid = Number(g)),
                     (e.publishStatus = u),
                     (e.rtcSensor = new h.a()),
                     e._init(),
                     e
                  )
               }
               return (
                  Object(a.a)(n, [
                     {
                        key: '_init',
                        value: (function () {
                           var e = Object(i.a)(
                              Object(r.a)().mark(function e() {
                                 var t, n
                                 return Object(r.a)().wrap(
                                    function (e) {
                                       while (1) {
                                          switch ((e.prev = e.next)) {
                                             case 0:
                                                if (this.publishStatus) {
                                                   e.next = 2
                                                   break
                                                }
                                                return e.abrupt(
                                                   'return',
                                                   this.createRtcChannel()
                                                )
                                             case 2:
                                                return (e.next = 4), Object(f.b)()
                                             case 4:
                                                return (t = e.sent), (e.next = 7), Object(f.e)()
                                             case 7:
                                                if (((n = e.sent), 'not-determined' !== t)) {
                                                   e.next = 17
                                                   break
                                                }
                                                return (e.next = 11), Object(f.a)()
                                             case 11:
                                                if ('not-determined' !== n) {
                                                   e.next = 14
                                                   break
                                                }
                                                return (e.next = 14), Object(f.d)()
                                             case 14:
                                                this.createRtcChannel(), (e.next = 18)
                                                break
                                             case 17:
                                                this.createRtcChannel()
                                             case 18:
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
                              return e.apply(this, arguments)
                           }
                           return t
                        })(),
                     },
                     {
                        key: 'createRtcChannel',
                        value: (function () {
                           var e = Object(i.a)(
                              Object(r.a)().mark(function e() {
                                 var t, n, i, o, a, c, u, d
                                 return Object(r.a)().wrap(
                                    function (e) {
                                       while (1) {
                                          switch ((e.prev = e.next)) {
                                             case 0:
                                                return (e.next = 2), Object(f.c)()
                                             case 2:
                                                return (t = e.sent), (e.next = 5), Object(f.f)()
                                             case 5:
                                                return (
                                                   (n = e.sent),
                                                   console.log('createRtcChannel', t, n),
                                                   (e.next = 9),
                                                   s.nativeApi.getPathByName('userData')
                                                )
                                             case 9:
                                                return (
                                                   (i = e.sent),
                                                   (o = ''.concat(i, '/Logs')),
                                                   (a = new l.a(this.token, { logsPath: o })),
                                                   (this.rtcEngine = a),
                                                   (c = a.setParameters(
                                                      '{"che.audio.specify.codec":"OPUSFB","che.audio.bitrate.force":16000}'
                                                   )),
                                                   0 != c &&
                                                   this.sendLogger(
                                                      '音频设置,code:'.concat(c),
                                                      {},
                                                      'error'
                                                   ),
                                                   (u = a.createChannel()),
                                                   (e.next = 18),
                                                   Object(g.b)(a)
                                                )
                                             case 18:
                                                ; (d = this.publishStatus ? 1 : 2),
                                                   u.setClientRole(d),
                                                   this.publishStatus &&
                                                   (a.enableLocalVideo(t),
                                                      u.muteLocalAudioStream(!n),
                                                      u.muteLocalVideoStream(!t)),
                                                   (this.rtcChannel = u),
                                                   this._rtcChannelListener(),
                                                   this.joinRtcChannel()
                                             case 24:
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
                              return e.apply(this, arguments)
                           }
                           return t
                        })(),
                     },
                     {
                        key: 'joinRtcChannel',
                        value: function () {
                           console.log('[hw_rtc_join_room]小班加入频道触发start')
                           this.rtcSensor.rtcSensorPush({ result: 'start' })
                           var e = this.rtcChannel.joinChannel(
                              {
                                 autoSubscribeAudio: true,
                                 autoSubscribeVideo: true,
                                 publishLocalAudio: true,
                                 publishLocalVideo: true,
                              },
                              {
                                 bitrate: 80,
                                 frameRate: 10,
                                 width: 160,
                                 height: 120,
                              }
                           )
                           return (
                              0 == e
                                 ? (this.emit('ready'),
                                    this.sendLogger('调用加入频道码成功'))
                                 : (console.log(
                                    '[hw_rtc_join_room]小班调用加入频道方法触发fail'
                                 ),
                                    this.sendLogger(
                                       '调用加入频道码失败',
                                       { res: e },
                                       'error'
                                    ),
                                    this.rtcSensor.rtcSensorPush({
                                       result: 'fail',
                                       errorType: '调用加入房间接口失败',
                                    })),
                              e
                           )
                        },
                     },
                     {
                        key: '_rtcChannelListener',
                        value: function () {
                           var e = this
                           this.rtcEngine.on('localVideoStateChanged', function (t, n) {
                              e.emit('localVideoStateChanged', t, n)
                              e.sendLogger(
                                 '本地视频状态变更state:'.concat(t, ',err:').concat(n)
                              )
                           })
                           this.rtcEngine.on('localAudioStateChanged', function (t, n) {
                              e.emit('localAudioStateChanged', t, n)
                              e.sendLogger(
                                 '本地音频状态变更state:'.concat(t, ',err:').concat(n)
                              )
                           })
                           this.rtcChannel.on(
                              'remoteVideoStateChanged',
                              function (t, n, r) {
                                 t == e.teacherUid || t == e.teacherVideoUid
                                    ? (2 == n && 0 == r && e.emit('teacherVideoStart', t),
                                       0 === n &&
                                       5 === r &&
                                       e.emit('teacherVideoMute', true),
                                       2 === n &&
                                       6 === r &&
                                       e.emit('teacherVideoMute', false))
                                    : t !== e.teacherShareUid &&
                                    (2 == n && 0 == r && e.emit('studentVideoStart', t),
                                       0 === n &&
                                       5 === r &&
                                       e.emit('studentVideoMute', true, t),
                                       2 === n &&
                                       6 === r &&
                                       e.emit('studentVideoMute', false, t))
                                 e.emit('remoteVideoStateChanged', t, n, r)
                              }
                           )
                           this.rtcChannel.on(
                              'remoteAudioStateChanged',
                              function (t, n, r) {
                                 ; (t != e.teacherUid && t != e.teacherAudioUid) ||
                                    (2 === n && e.emit('teacherAudioStart'),
                                       0 === n && 5 === r && e.emit('teacherAudioMute', true),
                                       2 === n && 6 === r && e.emit('teacherAudioMute', false))
                                 e.emit('remoteAudioStateChanged', t, n, r)
                              }
                           )
                           this.rtcChannel.on('localJoinChannel', function () {
                              console.log('[hw_rtc_join_room]小班本地加入频道成功')
                              e.emit('localJoinChannel')
                              e.sendLogger('本地加入频道成功')
                              e.rtcSensor.rtcSensorPush({ result: 'success' })
                           })
                           this.rtcChannel.on('rejoinChannelSuccess', function () {
                              console.log('[hw_rtc_join_room]小班本地重连加入频道成功')
                              e.emit('rejoinChannelSuccess')
                              e.sendLogger('本地重连加入频道成功')
                              e.rtcSensor.rtcSensorPush({ result: 'success' })
                           })
                           this.rtcChannel.on('remoteJoinChannel', function (t) {
                              t == e.teacherUid &&
                                 ((e.teacherDeviceType = 'pc'),
                                    e.emit('teacherJoinChannel', e.teacherDeviceType))
                              t == e.teacherAudioUid &&
                                 ((e.teacherDeviceType = 'ipad'),
                                    e.emit('teacherJoinChannel', e.teacherDeviceType))
                              t == e.teacherVideoUid && e.emit('teacherVideoJoinChannel')
                              e.emit('remoteJoinChannel', t)
                           })
                           this.rtcChannel.on('remoteLeaveChannel', function (t) {
                              'pc' == e.teacherDeviceType &&
                                 t == e.teacherUid &&
                                 (e.emit('teacherLeaveChannel', e.teacherDeviceType),
                                    e.emit('teacherVideoLeaveChannel', t))
                              'ipad' == e.teacherDeviceType &&
                                 t == e.teacherAudioUid &&
                                 e.emit('teacherLeaveChannel', e.teacherDeviceType)
                              'ipad' == e.teacherDeviceType &&
                                 t == e.teacherVideoUid &&
                                 e.emit('teacherVideoLeaveChannel', t)
                              t == e.teacherShareUid && e.emit('shareScreenLeaveChannel')
                              e.emit('remoteLeaveChannel', t)
                           })
                           this.rtcChannel.on('rtcStats', function (t) {
                              e.emit('rtcStats', t)
                           })
                           this.rtcChannel.on('connectionStateChanged', function (t) {
                              console.log(
                                 '[hw_rtc_join_room]小班网络状态触发方法触发,code:',
                                 t
                              )
                              e.emit('connectionStateChanged', t)
                              5 == t
                                 ? e.rtcSensor.rtcSensorPush({
                                    result: 'fail',
                                    errorType: '连接失败',
                                 })
                                 : 4 == t &&
                                 ((e.rtcSensor.isFirstJoinChannel = false),
                                    e.rtcSensor.rtcSensorPush({ result: 'start' }))
                           })
                           this.rtcChannel.on('localNetworkQuality', function (t, n) {
                              e.emit('localNetworkQuality', t, n)
                           })
                           this.rtcEngine.on('warning', function (t, n) {
                              e.sendLogger(
                                 '警告码\uFF1A'.concat(t, ' 警告信息\uFF1A').concat(n),
                                 {},
                                 'warn'
                              )
                           })
                           this.rtcEngine.on('error', function (t, n) {
                              e.sendLogger(
                                 '错误码\uFF1A'
                                    .concat(t, '\uFF0C错误信息\uFF1A')
                                    .concat(n),
                                 {},
                                 'error'
                              )
                           })
                           this.rtcEngine.on(
                              'groupAudioVolumeIndication',
                              function (t, n, r) {
                                 t.forEach(function (t) {
                                    0 == t.uid
                                       ? e.emit('localAudioVolume', t.volume)
                                       : t.uid == e.teacherUid || t.uid == e.teacherAudioUid
                                          ? e.emit('teacherAudioVolume', t.volume)
                                          : e.emit('remoteAudioVolume', t.uid, t.volume)
                                 })
                                 e.emit('groupAudioVolumeIndication', t, n, r)
                              }
                           )
                           this.rtcEngine.on('lastMileQuality', function (t) {
                              e.emit('lastMileQuality', t)
                           })
                        },
                     },
                     {
                        key: '_getTeacherVideoUid',
                        value: function () {
                           return 'pc' === this.teacherDeviceType
                              ? this.teacherUid
                              : this.teacherVideoUid
                        },
                     },
                     {
                        key: 'createLocalVideo',
                        value: function (e) {
                           this.rtcEngine.setupLocalVideo(document.getElementById(e))
                        },
                     },
                     {
                        key: 'setVideoEncoderConfiguration',
                        value: function (e) {
                           this.rtcChannel.setVideoEncoderConfiguration(e)
                        },
                     },
                     {
                        key: 'setCameraCapturerConfiguration',
                        value: function (e) {
                           this.rtcEngine.setCameraCapturerConfiguration(e)
                        },
                     },
                     {
                        key: 'muteLocalVideo',
                        value: function (e) {
                           this.rtcChannel.muteLocalVideoStream(e)
                        },
                     },
                     {
                        key: 'muteLocalAudio',
                        value: function (e) {
                           this.rtcChannel.muteLocalAudioStream(e)
                        },
                     },
                     {
                        key: 'createRemoteVideo',
                        value: function (e, t) {
                           console.log('createRemoteVideo', this.rtcChannel)
                           this.rtcChannel.setupRemoteVideo(
                              Number(e),
                              document.getElementById(t)
                           )
                        },
                     },
                     {
                        key: 'destroyRemoteVideo',
                        value: function (e) {
                           this.rtcChannel.destroyRemoteVideo(Number(e))
                        },
                     },
                     {
                        key: 'createTeacherVideo',
                        value: function (e) {
                           var t = this._getTeacherVideoUid()
                           this.createRemoteVideo(t, e)
                        },
                     },
                     {
                        key: 'destroyTeacherVideo',
                        value: function () {
                           var e = this._getTeacherVideoUid()
                           this.destroyRemoteVideo(e)
                        },
                     },
                     {
                        key: 'muteRemoteVideo',
                        value: function (e, t) {
                           this.rtcChannel.muteRemoteVideoStream(Number(e), t)
                        },
                     },
                     {
                        key: 'muteRemoteAudio',
                        value: function (e, t) {
                           this.rtcChannel.muteRemoteAudioStream(Number(e), t)
                        },
                     },
                     {
                        key: 'muteAllRemoteAudio',
                        value: function (e) {
                           this.rtcChannel.muteAllRemoteAudioStreams(e)
                        },
                     },
                     {
                        key: 'publish',
                        value: function (e) {
                           var t = e.publishAudio,
                              n = void 0 === t || t,
                              r = e.publishVideo,
                              i = void 0 === r || r
                           this.rtcChannel.setClientRole(1)
                           n && this.rtcChannel.muteLocalAudioStream(false)
                           i && this.rtcChannel.muteLocalVideoStream(false)
                        },
                     },
                     {
                        key: 'unpublish',
                        value: function () {
                           this.rtcChannel.setClientRole(0)
                           this.rtcChannel.muteLocalAudioStream(true)
                           this.rtcChannel.muteLocalVideoStream(true)
                        },
                     },
                     {
                        key: 'leaveChannel',
                        value: function () {
                           this.rtcChannel.leaveChannel()
                        },
                     },
                     {
                        key: 'enableLocalVideo',
                        value: function (e) {
                           this.rtcEngine.enableLocalVideo(e)
                           this.rtcChannel.muteLocalVideoStream(!e)
                        },
                     },
                     {
                        key: 'setVideoDevice',
                        value: function (e) {
                           this.rtcEngine.setVideoDevice(e)
                        },
                     },
                     {
                        key: 'setAudioRecordingDevice',
                        value: function (e) {
                           this.rtcEngine.setAudioRecordingDevice(e)
                        },
                     },
                     {
                        key: 'subscribe',
                        value: function (e, t) {
                           return this.rtcEngine.subscribe(
                              Number(e),
                              document.getElementById(t)
                           )
                        },
                     },
                     {
                        key: 'setupViewContentMode',
                        value: function (e) {
                           var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                 ? arguments[1]
                                 : 1
                           return this.rtcEngine.setupViewContentMode(
                              Number(e),
                              t,
                              this.rtcEngine.channel
                           )
                        },
                     },
                     {
                        key: 'setAudioPlaybackDevice',
                        value: function (e) {
                           this.rtcEngine.setAudioPlaybackDevice(e)
                        },
                     },
                     {
                        key: 'resizeRender',
                        value: function (e) {
                           this.rtcEngine.resizeRender(e)
                        },
                     },
                     {
                        key: 'enableLastmileTest',
                        value: function () {
                           return this.rtcEngine.enableLastmileTest()
                        },
                     },
                     {
                        key: 'disableLastmileTest',
                        value: function () {
                           return this.rtcEngine.disableLastmileTest()
                        },
                     },
                     {
                        key: 'release',
                        value: function () {
                           if (this.rtcEngine) {
                              return this.rtcEngine.release(true)
                           }
                        },
                     },
                     {
                        key: 'sendLogger',
                        value: function (e) {
                           var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                 ? arguments[1]
                                 : {},
                              n =
                                 arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 'info'
                           d.a.send({
                              tag: d.b.rtc,
                              level: n,
                              content: {
                                 msg: e,
                                 params: t,
                              },
                           })
                        },
                     },
                  ]),
                  n
               )
            })(v.a)
      },
      d201: function (t, n, r) {
         'use strict'
         var i = r('970b').default,
            o = r('5bc3').default
         r('d9e2')
         r('14d9')
         r('cca6')
         r('a15b')
         r('ace4')
         r('d3b7')
         Object.defineProperty(n, '__esModule', { value: true })
         var a = r('ff4a').EventEmitter,
            c = r('5da1'),
            u = r('ed72'),
            s = r('60a7'),
            l = (function () {
               function t() {
                  i(this, t)
                  this.cacheCanvasOpts = {}
                  this.yuv = {}
                  this.event = new a()
                  this.ready = false
                  this.contentMode = 0
                  this.container = {}
                  this.canvas = {}
                  this.element = {}
               }
               return (
                  o(t, [
                     {
                        key: '_calcZoom',
                        value: function () {
                           var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                              t =
                                 arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 0,
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              r = arguments.length > 3 ? arguments[3] : void 0,
                              i = arguments.length > 4 ? arguments[4] : void 0,
                              o = arguments.length > 5 ? arguments[5] : void 0,
                              a = i / o,
                              c = n / r
                           return isNaN(a) || isNaN(c)
                              ? 1
                              : t
                                 ? e
                                    ? o / i < n / r
                                       ? o / n
                                       : i / r
                                    : i / o > n / r
                                       ? o / r
                                       : i / n
                                 : e
                                    ? o / i < n / r
                                       ? i / r
                                       : o / n
                                    : i / o > n / r
                                       ? i / n
                                       : o / r
                        },
                     },
                     {
                        key: 'bind',
                        value: function (e, t) {
                           var n = this
                           console.log('YuvCanvas render webGL '.concat(t))
                           this.element = e
                           var r = document.createElement('div')
                           Object.assign(r.style, {
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              overflow: 'hidden',
                           })
                           this.container = r
                           e.appendChild(this.container)
                           this.canvas = document.createElement('canvas')
                           this.container.appendChild(this.canvas)
                           this.yuv = s.attach(this.canvas, { webGL: t })
                           s.WebGLFrameSink.stripe = false
                           var i =
                              window.ResizeObserver ||
                              window.WebKitMutationObserver ||
                              window.MozMutationObserver
                           i &&
                              ((this.observer = new i(function () {
                                 n.refreshCanvas && n.refreshCanvas()
                              })),
                                 this.observer.observe(r))
                        },
                     },
                     {
                        key: 'unbind',
                        value: function () {
                           this.observer &&
                              this.observer.unobserve &&
                              this.observer.disconnect()
                           try {
                              this.container &&
                                 this.canvas &&
                                 this.canvas.parentNode === this.container &&
                                 this.container.removeChild(this.canvas)
                              this.element &&
                                 this.container &&
                                 this.container.parentNode === this.element &&
                                 this.element &&
                                 this.element.removeChild(this.container)
                           } catch (t) {
                              console.warn(e)
                           }
                           this.yuv = null
                           this.element = null
                           this.canvas = null
                           this.view = null
                        },
                     },
                     {
                        key: 'equalsElement',
                        value: function (e) {
                           return this.element === e
                        },
                     },
                     {
                        key: 'refreshCanvas',
                        value: function () {
                           if (this.cacheCanvasOpts) {
                              try {
                                 this.updateCanvas(this.cacheCanvasOpts, false)
                              } catch (e) { }
                           }
                        },
                     },
                     {
                        key: 'updateCanvas',
                        value: function () {
                           var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                 ? arguments[0]
                                 : {
                                    width: 0,
                                    height: 0,
                                    rotation: 0,
                                    mirrorView: false,
                                    contentMode: 0,
                                    clientWidth: 0,
                                    clientHeight: 0,
                                    contentWidth: contentWidth,
                                    contentHeight: contentHeight,
                                 },
                              t =
                                 !(arguments.length > 1 && void 0 !== arguments[1]) ||
                                 arguments[1]
                           if (!t || !c(this.cacheCanvasOpts, e)) {
                              if (
                                 ((this.cacheCanvasOpts = e),
                                    0 === e.rotation || 180 === e.rotation)
                              ) {
                                 this.canvas.width = e.width
                                 this.canvas.height = e.height
                                 Object.assign(this.canvas.style, {
                                    width: e.width + 'px',
                                    height: e.height + 'px',
                                    'object-fit': 'cover',
                                 })
                              } else {
                                 if (90 !== e.rotation && 270 !== e.rotation) {
                                    throw new Error(
                                       'Invalid value for rotation. Only support 0, 90, 180, 270'
                                    )
                                 }
                                 this.canvas.height = e.width
                                 this.canvas.width = e.height
                                 Object.assign(this.canvas.style, {
                                    width: e.width + 'px',
                                    height: e.height + 'px',
                                    'object-fit': 'cover',
                                 })
                              }
                              var n = []
                              n.push('rotateZ('.concat(e.rotation, 'deg)'))
                              var r = this._calcZoom(
                                 90 === e.rotation || 270 === e.rotation,
                                 e.contentMode,
                                 e.contentWidth,
                                 e.contentHeight,
                                 e.clientWidth,
                                 e.clientHeight
                              )
                              if (
                                 ((this.canvas.style.zoom = r),
                                    e.mirrorView && n.push('rotateY(180deg)'),
                                    n.length > 0)
                              ) {
                                 var i = ''.concat(n.join(' '))
                                 this.canvas.style.transform = i
                              }
                           }
                        },
                     },
                     {
                        key: 'drawFrame',
                        value: function () {
                           var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                 ? arguments[0]
                                 : {
                                    header: header,
                                    yUint8Array: yUint8Array,
                                    uUint8Array: uUint8Array,
                                    vUint8Array: vUint8Array,
                                 }
                           this.ready || ((this.ready = true), this.event.emit('ready'))
                           var t = new DataView(e.header),
                              n = t.getUint8(1),
                              r = t.getUint16(2),
                              i = t.getUint16(4),
                              o = t.getUint16(6),
                              a = t.getUint16(8),
                              c = t.getUint16(10),
                              s = t.getUint16(12),
                              l = t.getUint16(14),
                              d = r + o + c,
                              h = i + a + s
                           this.updateCanvas({
                              width: d,
                              height: h,
                              rotation: l,
                              mirrorView: n,
                              contentMode: this.contentMode,
                              clientWidth: this.container.clientWidth,
                              clientHeight: this.container.clientHeight,
                              contentWidth: r,
                              contentHeight: i,
                           })
                           var f = u.format({
                              width: d,
                              height: h,
                              chromaWidth: d / 2,
                              chromaHeight: h / 2,
                           }),
                              g = u.lumaPlane(f, e.yUint8Array),
                              v = u.chromaPlane(f, e.uUint8Array),
                              m = u.chromaPlane(f, e.vUint8Array),
                              E = u.frame(f, g, v, m)
                           this.yuv.drawFrame(E)
                        },
                     },
                     {
                        key: 'setContentMode',
                        value: function () {
                           var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                 ? arguments[0]
                                 : 0
                           this.contentMode = e
                        },
                     },
                  ]),
                  t
               )
            })()
         n.default = l
      },
      dbea: function (e, t) {
         ; (function () {
            'use strict'
            function t(e, t) {
               throw new Error('abstract')
            }
            t.prototype.drawFrame = function (e) {
               throw new Error('abstract')
            }
            t.prototype.clear = function () {
               throw new Error('abstract')
            }
            e.exports = t
         })()
      },
      e20c: function (e, t, n) {
         'use strict'
         var r = n('23e7'),
            i = n('da84'),
            o = n('2cf4').clear
         r(
            {
               global: true,
               bind: true,
               enumerable: true,
               forced: i.clearImmediate !== o,
            },
            { clearImmediate: o }
         )
      },
      e417: function (e, t, n) {
         'use strict'
         n.d(t, 'f', function () {
            return h
         })
         n.d(t, 'e', function () {
            return f
         })
         n.d(t, 'd', function () {
            return g
         })
         n.d(t, 'c', function () {
            return v
         })
         n.d(t, 'a', function () {
            return m
         })
         n.d(t, 'b', function () {
            return E
         })
         var r = n('bee2'),
            i = n('d4ec'),
            o = n('ade3'),
            a = n('5530'),
            c = (n('cca6'), n('99af'), n('8bbf')),
            u = n.n(c),
            s = null,
            l = true,
            d = 0,
            f = function (e, t) {
               var n =
                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
               u.a.prototype.$sensors.track(
                  e,
                  Object(a.a)(
                     {
                        lesson_type: h[t.classType],
                        class_id: t.classId,
                        plan_id: t.planId,
                     },
                     n
                  )
               )
            },
            g = function (e, t) {
               u.a.prototype.$sensors.track(e, t)
            },
            v = function (e) {
               var t = e.type,
                  n = void 0 === t ? 'link' : t,
                  r = e.result,
                  i = e.errorType,
                  o = void 0 === i ? '' : i,
                  a = e.code,
                  c = void 0 === a ? 0 : a,
                  h = e.msg,
                  f = void 0 === h ? '无' : h,
                  g = e.liveInfo,
                  v = void 0 === g ? {} : g,
                  m = e.msgInfo,
                  E = void 0 === m ? {} : m,
                  y = {}
               'message' == n
                  ? ((y = {
                     result: r,
                     irc_message_type: f,
                  }),
                     'fail' == r &&
                     Object.assign(y, {
                        error_type: o,
                        msg_info: JSON.stringify(E),
                        error_msg: '错误码='
                           .concat(c, '\uFF0C错误描述=')
                           .concat(f, '失败'),
                     }),
                     u.a.prototype.$sensors.track('hw_irc_send_message', y))
                  : ((y = {
                     result: r,
                     re_connect_num: d,
                     is_first: l ? '是' : '否',
                     location: v.location,
                  }),
                     'fail' == r
                        ? (Object.assign(y, {
                           live_info: JSON.stringify(v),
                           error_type: o,
                           error_msg: '错误码='.concat(c, '\uFF0C错误描述=').concat(f),
                        }),
                           (l = false),
                           (d += 1))
                        : 'success' == r
                           ? (Object.assign(y, { irc_join_room_duration: Date.now() - s }),
                              (l = false),
                              (d += 1))
                           : 'start' == r && (s = Date.now()),
                     u.a.prototype.$sensors.track('hw_irc_join_room', y))
            },
            m = Object(r.a)(function e() {
               var t = this
               Object(i.a)(this, e)
               Object(o.a)(this, 'rtcSensorPush', function (e) {
                  var n = e.result,
                     r = e.errorType,
                     i = void 0 === r ? '' : r,
                     o = e.code,
                     a = void 0 === o ? 0 : o,
                     c = e.msg,
                     s = void 0 === c ? '无' : c,
                     l = {
                        result: n,
                        is_first: t.isFirstJoinChannel ? '是' : '否',
                     }
                  'fail' == n
                     ? Object.assign(l, {
                        error_type: i,
                        error_msg: '错误码='.concat(a, '\uFF0C错误描述=').concat(s),
                     })
                     : 'success' == n
                        ? Object.assign(l, {
                           rtc_join_room_duration: Date.now() - t.joinRtcStartTime,
                        })
                        : 'start' == n && (t.joinRtcStartTime = Date.now())
                  u.a.prototype.$sensors.track('hw_rtc_join_room', l)
               })
               this.joinRtcStartTime = null
               this.isFirstJoinChannel = true
            }),
            E = function (e) {
               var t = ''
               if (e.isParent) {
                  t = '家长旁听'
               } else {
                  t = n[e.lessonType]
               }
               u.a.prototype.$sensors.track('hw_stu_enter_class_room', {
                  package_id: e.packageId,
                  class_id: e.classId,
                  previous_source:
                     'course' == e.from ? '学习中心一级页' : '学习中心二级页',
                  plan_id: e.planId,
                  plan_mode: 0 == e.isPlayBack ? '直播' : '回放',
                  lesson_type: h[e.classType],
                  course_type: t,
               })
               0 == e.isPlayBack &&
                  u.a.prototype.$sensors.track('pc_enter_class_room', {
                     previous_source:
                        'course' == e.from ? '学习中心一级页' : '学习中心二级页',
                     course_type: t,
                     is_start_class: !e.isPlayBack && e.isStartClass,
                  })
            }
      },
      e50d: function (e, t, n) {
         n('d9e2')
         n('8172')
         n('efec')
         n('a4d3')
         n('e01a')
         n('d3b7')
         n('a9e3')
         var r = n('7037').default
         function i(e, t) {
            if ('object' !== r(e) || null === e) {
               return e
            }
            var n = e[Symbol.toPrimitive]
            if (void 0 !== n) {
               var i = n.call(e, t || 'default')
               if ('object' !== r(i)) {
                  return i
               }
               throw new TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
         }
         e.exports = i
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      e950: function (e, t, n) {
         'use strict'
         var r = n('970b').default,
            i = n('5bc3').default
         n('d9e2')
         var o =
            (this && this.__importDefault) ||
            function (e) {
               return e && e.__esModule ? e : { default: e }
            }
         Object.defineProperty(t, '__esModule', { value: true })
         t.CustomRenderer = t.GlRenderer = t.SoftwareRenderer = void 0
         var a = o(n('d201'))
         t.SoftwareRenderer = a.default
         var c = o(n('7f31')),
            u = (function () {
               function e(t) {
                  r(this, e)
                  console.log('GlRenderer')
                  this.self = c.default.apply(this, [t.initRenderFailCallBack])
                  this.event = this.self.event
               }
               return (
                  i(e, [
                     {
                        key: 'bind',
                        value: function (e) {
                           return this.self.bind(e)
                        },
                     },
                     {
                        key: 'unbind',
                        value: function () {
                           return this.self.unbind()
                        },
                     },
                     {
                        key: 'equalsElement',
                        value: function (e) {
                           return this.self.view === e
                        },
                     },
                     {
                        key: 'drawFrame',
                        value: function (e) {
                           return this.self.drawFrame(e)
                        },
                     },
                     {
                        key: 'setContentMode',
                        value: function (e) {
                           return this.self.setContentMode(e)
                        },
                     },
                     {
                        key: 'refreshCanvas',
                        value: function () {
                           return this.self.refreshCanvas()
                        },
                     },
                  ]),
                  e
               )
            })()
         t.GlRenderer = u
         var s = (function () {
            function e() {
               throw (
                  (r(this, e),
                     new Error('You have to declare your own custom render'))
               )
            }
            return (
               i(e, [
                  {
                     key: 'bind',
                     value: function (e) {
                        throw new Error('You have to declare your own custom render')
                     },
                  },
                  {
                     key: 'unbind',
                     value: function () {
                        throw new Error('You have to declare your own custom render')
                     },
                  },
                  {
                     key: 'equalsElement',
                     value: function (e) {
                        throw new Error('You have to declare your own custom render')
                     },
                  },
                  {
                     key: 'drawFrame',
                     value: function (e) {
                        throw new Error('You have to declare your own custom render')
                     },
                  },
                  {
                     key: 'setContentMode',
                     value: function (e) {
                        throw new Error('You have to declare your own custom render')
                     },
                  },
                  {
                     key: 'refreshCanvas',
                     value: function () {
                        throw new Error('You have to declare your own custom render')
                     },
                  },
               ]),
               e
            )
         })()
         t.CustomRenderer = s
      },
      ebc2: function (e, t, n) { },
      ed6d: function (e, t, n) {
         n('d9e2')
         var r = n('4a4b')
         function i(e, t) {
            if ('function' !== typeof t && null !== t) {
               throw new TypeError(
                  'Super expression must either be null or a function'
               )
            }
            e.prototype = Object.create(t && t.prototype, {
               constructor: {
                  value: e,
                  writable: true,
                  configurable: true,
               },
            })
            Object.defineProperty(e, 'prototype', { writable: false })
            t && r(e, t)
         }
         e.exports = i
         e.exports.__esModule = true
         e.exports.default = e.exports
      },
      ed72: function (e, t) {
         var n = {
            validateDimension: function (e) {
               if (e <= 0 || e !== (0 | e)) {
                  throw 'YUV plane dimensions must be a positive integer'
               }
            },
            validateOffset: function (e) {
               if (e < 0 || e !== (0 | e)) {
                  throw 'YUV plane offsets must be a non-negative integer'
               }
            },
            format: function (e) {
               var t = e.width,
                  n = e.height,
                  r = e.chromaWidth || t,
                  i = e.chromaHeight || n,
                  o = e.cropLeft || 0,
                  a = e.cropTop || 0,
                  c = e.cropWidth || t - o,
                  u = e.cropHeight || n - a,
                  s = e.displayWidth || c,
                  l = e.displayHeight || u
               return (
                  this.validateDimension(t),
                  this.validateDimension(n),
                  this.validateDimension(r),
                  this.validateDimension(i),
                  this.validateOffset(o),
                  this.validateOffset(a),
                  this.validateDimension(c),
                  this.validateDimension(u),
                  this.validateDimension(s),
                  this.validateDimension(l),
                  {
                     width: t,
                     height: n,
                     chromaWidth: r,
                     chromaHeight: i,
                     cropLeft: o,
                     cropTop: a,
                     cropWidth: c,
                     cropHeight: u,
                     displayWidth: s,
                     displayHeight: l,
                  }
               )
            },
            allocPlane: function (e, t) {
               return (
                  n.validateDimension(e),
                  n.validateDimension(t),
                  {
                     bytes: new Uint8Array(e * t),
                     stride: e,
                  }
               )
            },
            suitableStride: function (e) {
               n.validateDimension(e)
               var r = e % 4
               return 0 == r ? e : e + (4 - r)
            },
            allocPlane: function (e, t, n, r, i) {
               var o, a
               if (
                  (this.validateDimension(e),
                     this.validateDimension(t),
                     (i = i || 0),
                     (r = r || this.suitableStride(e)),
                     this.validateDimension(r),
                     r < e)
               ) {
                  throw 'Invalid input stride for YUV plane; must be larger than width'
               }
               if (((o = r * t), n)) {
                  if (n.length - i < o) {
                     throw 'Invalid input buffer for YUV plane; must be large enough for stride times height'
                  }
                  a = n.slice(i, i + o)
               } else {
                  a = new Uint8Array(o)
                  r = r || this.suitableStride(e)
               }
               return {
                  bytes: a,
                  stride: r,
               }
            },
            lumaPlane: function (e, t, n, r) {
               return this.allocPlane(e.width, e.height, t, n, r)
            },
            chromaPlane: function (e, t, n, r) {
               return this.allocPlane(e.chromaWidth, e.chromaHeight, t, n, r)
            },
            frame: function (e, t, n, r) {
               return (
                  (t = t || this.lumaPlane(e)),
                  (n = n || this.chromaPlane(e)),
                  (r = r || this.chromaPlane(e)),
                  {
                     format: e,
                     y: t,
                     u: n,
                     v: r,
                  }
               )
            },
            copyPlane: function (e) {
               return {
                  bytes: e.bytes.slice(),
                  stride: e.stride,
               }
            },
            copyFrame: function (e) {
               return {
                  format: e.format,
                  y: this.copyPlane(e.y),
                  u: this.copyPlane(e.u),
                  v: this.copyPlane(e.v),
               }
            },
            transferables: function (e) {
               return [e.y.bytes.buffer, e.u.bytes.buffer, e.v.bytes.buffer]
            },
         }
         e.exports = n
      },
      f761: function (e, t, n) {
         'use strict'
         n('ebc2')
      },
      fb2c: function (e, t, n) {
         'use strict'
         var r = n('74e8')
         r('Uint32', function (e) {
            return function (t, n, r) {
               return e(this, t, n, r)
            }
         })
      },
      fd87: function (e, t, n) {
         'use strict'
         var r = n('74e8')
         r('Int8', function (e) {
            return function (t, n, r) {
               return e(this, t, n, r)
            }
         })
      },
   },
])
