//app.js
const lhPlugin = requirePlugin('lhPlugin')
const fetchWechat = require('fetch-wechat')
const tf = lhPlugin.tf
const webgl = lhPlugin.webgl
const plugin = requirePlugin('tfjsPlugin')

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // Debug: Cannot create a canvas in this context
    // Detect webgl version: https://stackoverflow.com/questions/51428435/how-to-determine-webgl-and-glsl-version
    tf.ENV.flagRegistry.WEBGL_VERSION.evaluationFn = () => {return 1}

    plugin.configPlugin({
      // polyfill fetch function
      fetchFunc: fetchWechat.fetchFunc(),
      // inject tfjs runtime
      tf,
      // inject webgl backend
      webgl,
      // provide webgl canvas
      canvas: wx.createOffscreenCanvas()
    })
  },
  globalData: {
    userInfo: null
  }
})
