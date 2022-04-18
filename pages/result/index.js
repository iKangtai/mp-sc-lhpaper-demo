Component({
  data: {
    saasObj: {},
    items: [{
        value: 'negative',
        name: '阴性'
      },
      {
        value: 'positive',
        name: '阳性',
        checked: 'true'
      },
      {
        value: 'invalid',
        name: '无效'
      }
    ]
  },
  methods: {
    onLoad(query) {
      this.setData({
        saasObj: {
          paperId: query.paperId,
          value: query.value,
          paperUrl: query.paperUrl,
          userId: query.userId,
          testTime: query.testTime
        }
      })
      let value = parseInt(query.value)
      var flag = 0
      if (value > 0) {
        flag = 1
      } else if (value == 0) {
        flag = 0
      } else {
        flag = 2
      }
      const items = this.data.items
      for (let i = 0, len = items.length; i < len; ++i) {
        items[i].checked = (i == flag)
      }
      this.setData({
        items
      })
    },
    confirmSubmit(event) {
      console.log('confirm', event.detail);
      wx.navigateBack({
        delta: 0,
      })
    },
    radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)

      const items = this.data.items
      for (let i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value === e.detail.value
      }

      this.setData({
        items
      })
    }
  }
})