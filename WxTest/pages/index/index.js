//index.js
//获取应用实例
var app = getApp()

var btnTitle = "Hello Alpha"
Page({
  data: {
    motto: 'Hello World',
    tap: 'Hello Alpha',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeTitle: function() {
    this.setData({
      tap:"你好,发哥"

    })
      wx.navigateTo({
        url: '../test/test',
      })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
