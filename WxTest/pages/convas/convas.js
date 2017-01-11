var rectX = 0
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
          // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
      var context = wx.createContext()
      context.setStrokeStyle("#00ff00")
      context.setLineWidth(5)
      context.rect(0, 0, 200, 200)
      context.stroke()
      context.setStrokeStyle("#ff0000")
      context.setLineWidth(2)
      context.moveTo(160, 100)
      context.arc(100, 100, 60, 0, 2 * Math.PI, true)
      context.moveTo(140, 100)
      context.arc(100, 100, 40, 0, Math.PI, false)
      context.moveTo(85, 80)
      context.arc(80, 80, 5, 0, 2 * Math.PI, true)
      context.moveTo(125, 80)
      context.arc(120, 80, 5, 0, 2 * Math.PI, true)
      context.stroke()
      wx.drawCanvas({
        canvasId: 'firstCanvas',
        actions: context.getActions() // 获取绘图动作数组
      })
  },
  tap: function(){

    function draw() {
      var context = wx.createContext()
      context.setLineWidth(3)
      context.setStrokeStyle('#adcfce')
      context.rect(rectX, 0, 100, 100)
      context.stroke()
      wx.drawCanvas({
        canvasId: 'aid',
        actions:context.getActions()
      })
    }

    function animation(){
        rectX++;
        console.log(rectX)
        if (rectX > 700) {
          return;
        }

      draw();
      requestAnimationFrame(animation);
    }
    animation();
  }
})
