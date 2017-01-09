Page({
  data: {
      items:[
          {name: 'USA', value: '美国'},
          {name: 'CHN', value: '中国', checked: 'true'},
          {name: 'BRA', value: '巴西'},
      ],
      focus: false,
      inputValue:''
  },
  checkboxChange: function(e) {
    console.log('checkbox change, 携带的value: 为', e.detail.value)
  },
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function(e){
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      var left = e.detail.value.slice(0, pos)
      pos = left.replace(/11/g,'2').length
    }
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
  },
  bindHideKeyboard: function(e) {
    if (e.detail.vlaue === '123') {
      wx.hideKeyboard()
    }
  }
})
