var startX = 0;
var startY = 0;

var moveX = 0;
var moveY = 0;
var X = 0;
var Y = 0;

//蛇头
var snakeHeader = {
  x: 0,
  y: 0,
  color: "#ff0000",
  width: 10,
  height: 10
}

var direction= '';

Page({
  canvasStart: function(e){
    startX = e.touches[0].x;
    startY = e.touches[0].y;
  },
  canvasMove: function(e){
    moveX = e.touches[0].x;
    moveY = e.touches[0].y;
    X = moveX - startX;
    Y = moveY - startY;
    if (Math.abs(X) > Math.abs(Y) && X > 0 ) {
      console.log("right");
    } else if (Math.abs(X) > Math.abs(Y) && X < 0 ) {
      console.log("left");
    } else if (Math.abs(Y) > Math.abs(X) && Y > 0 ) {
      console.log("down");
    } else if (Math.abs(Y) > Math.abs(X) && Y < 0 ) {
      console.log("up");
    }
  },
  canvasEnd: function(e){
  },
  onReady: function(){
    var context = wx.createContext()

    context.setFillStyle(snakeHeader.color)
    context.beginPath();
    context.setLineWidth(5);
    context.rect(snakeHeader.x, snakeHeader.y, snakeHeader.width, snakeHeader.height)
    context.closePath();
    context.fill()
    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'snakeCanvas',
      actions: context.getActions() // 获取绘图动作数组
    })
  }
})
