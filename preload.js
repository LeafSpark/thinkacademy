!(function (e) {
  var r = {}
  function n(t) {
    if (r[t]) {
      return r[t].exports
    }
    var o = (r[t] = {
      i: t,
      l: false,
      exports: {},
    })
    return e[t].call(o.exports, o, o.exports, n), (o.l = true), o.exports
  }
  n.m = e
  n.c = r
  n.d = function (e, r, t) {
    n.o(e, r) ||
      Object.defineProperty(e, r, {
        enumerable: true,
        get: t,
      })
  }
  n.r = function (e) {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    Object.defineProperty(e, '__esModule', { value: true })
  }
  n.t = function (e, r) {
    if ((1 & r && (e = n(e)), 8 & r)) {
      return e
    }
    if (4 & r && 'object' == typeof e && e && e.__esModule) {
      return e
    }
    var t = Object.create(null)
    if (
      (n.r(t),
      Object.defineProperty(t, 'default', {
        enumerable: true,
        value: e,
      }),
      2 & r && 'string' != typeof e)
    ) {
      for (var o in e)
        n.d(
          t,
          o,
          function (r) {
            return e[r]
          }.bind(null, o)
        )
    }
    return t
  }
  n.n = function (e) {
    var r =
      e && e.__esModule
        ? function () {
            return e.default
          }
        : function () {
            return e
          }
    return n.d(r, 'a', r), r
  }
  n.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r)
  }
  n.p = ''
  n((n.s = 1))
})([
  function (e, r) {
    e.exports = require('electron')
  },
  function (e, r, n) {
    e.exports = n(2)
  },
  function (e, r, n) {
    'use strict'
    n.r(r)
    var t = n(0)
    const o = {
        invoke: (e, ...r) => t.ipcRenderer.invoke(e, ...r),
        on: (e, r) => (t.ipcRenderer.on(e, r), o),
        send: (e, ...r) => t.ipcRenderer.send(e, ...r),
        removeAllListeners: (e) => (t.ipcRenderer.removeAllListeners(e), o),
        removeListener: (e, r) => (t.ipcRenderer.removeListener(e, r), o),
      },
      i = {
        ipc: o,
        logger: (e = 'info', ...r) =>
          t.ipcRenderer.send('application:write-logger', e, ...r),
      }
    try {
      t.contextBridge.exposeInMainWorld('thinkApi', i)
    } catch {
      window.thinkApi = i
    }
  },
])
