Page({
  data: {

  },
  testButton: function() {
    wx.navigateTo({
      url: '../button/button'
    })
  },
  testScrollview: function() {
    wx.navigateTo({
      url: '../scrollview/scrollview'
    })
  },
  testSwiper: function(){
    wx.navigateTo({
      url: '../swiper/swiper'
    })
  },
  testProgress:function(){
    wx.navigateTo({
      url: '../progress/progress'
    })
  },
  testForm: function(){
    wx.navigateTo({
      url: '../form/form'
    })
  }
})
