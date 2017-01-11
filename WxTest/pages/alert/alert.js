Page({
  data: {

  },
  action: function(){
    wx.showActionSheet({
      itemList: ["A", "B", "C"],
      itemColor: "#FFCECC",
      success:function(res){
        console.log(res.tapIndex);
      },
      fail: function(res){
        console.log(res.errMsg);
      }
    })
  },
  toast: function(){
    wx.showToast({
      title:'成功',
      icon:'success',
      duration: 2000
    }),
    setTimeout(function() {
      wx.hideToast()
    }, 2000)
  },
  modal: function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function(res){
        if (res.confirm) {
          console.log("点击了确定");
        }
      }
    })
  }
})
