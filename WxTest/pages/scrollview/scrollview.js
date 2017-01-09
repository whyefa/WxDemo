var order = ["a", "b", "c", "d"];
var currentViewIndex = 0;

Page({
  data:{
    title: "Scroll View",
    motto: "Hello WX",
    tap: "Alpha",
    userinfo: {},
    toView: "a"
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
  }
})
