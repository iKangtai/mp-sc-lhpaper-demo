Component({
  data: {
    saasConfig: Object
  },
  methods: {
    onLoad(query) {
      this.setData({
        saasConfig: {
          appId: '100200', // 测试项目AppId
          appKey: '6e1b1049a9486d49ba015af00d5a0', //测试项目AppKey
          unionId: 'xiongyl@ikangtai.com', //用户唯一Id
        }
      })
    },
    // 插件中识别结果可在此方法接收：
    // paperId
    // value -1 无效 0 阴性 >0阳性
    // paperUrl
    // unionId
    // testTime
    analysisResult(event) {
      console.log('确认提交' + JSON.stringify(event))
      var res=event.detail
      var paperId = res.paperId
      var value = res.value
      var paperUrl = res.paperUrl
      var unionId = res.unionId
      var testTime = res.testTime

      let params = `paperId=${paperId}&value=${value}&paperUrl=${paperUrl}&testTime=${testTime}&unionId=${unionId}`
      let url = `/pages/result/index?` + params
      console.log('url: ' + url)
      wx.redirectTo({
        url: url
      })
    },
    // 点击返回重拍触发的事件
    navigatePageBack() {
      console.log('返回')
      // 调用方可在此做自定义跳转等
      wx.navigateBack({
        delta: 0,
      })
    }
  }
})