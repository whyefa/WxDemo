var order = ["a", "b", "c", "d"];
var currentViewIndex = 0;
var initData = "this is first line \nthis is second line";
var extraLine = [];

Page({
  data:{
    title: "Scroll View",
    motto: "Hello WX",
    tap: "Alpha",
    userinfo: {},
    toView: "a",
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicator_dots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    text:initData
  },
  scrollToUpper: function() {
    console.log("scroll to upper");
  },
  change: function(){
    currentViewIndex ++;
    if(currentViewIndex > order.length-1) {
      currentViewIndex = 0;
    }
    this.setData({
      toView: order[currentViewIndex]
    });
  },
  scroll: function(){
    console.log("----scroll function----");
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
