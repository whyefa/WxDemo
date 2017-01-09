
var initData = "this is first line \nthis is second line";
var extraLine = [];

Page({
  data:{
    text:initData
  },
  add:function() {
    extraLine.push("new line")
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove:function() {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  }
})