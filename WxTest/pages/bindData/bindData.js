Page({
  data: {
    name: "RC",
    id: 1,
    show: true,
    word: "world",
    arr: [1, 2, 3, 4, 5],
    obj: {
      a: 3,
      b: 5
    }
  },
  outterTap: function () {
    console.log("outterTap")
  },
  middleTap: function () {
    console.log("middleTap")
  },
  innerTap: function (event) {
    console.log(event)
    console.log("innerTap")
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    console.log("bindData")
  },
  back: function () {
    console.log("back")
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})
