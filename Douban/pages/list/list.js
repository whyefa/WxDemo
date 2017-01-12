
const list = 'https://api.douban.com/v2/movie/top250'

Page({
  data: {
    movies: [],
    title: '123',
  },
  onLoad:function(){
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon:"loading",
      duration:10000
    })

    wx.request({
      url: list,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        wx.hideToast();
        var data = res.data;
        that.setData({
          title: data.title
        })
      }
    })
  }
})
