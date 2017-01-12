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

//身体对象(数组)
var snakeBodys = [];

// 食物的对象
var food = [];

//窗口的宽高
var windowWidth = 0;
var windowHeight = 0;


//滑动方向
var direction = null;
//蛇头的方向
var snakeDirection = 'right';

// 是否删除是否碰撞
var shiftBOL = true;

Page({
    canvasStart: function(e) {
        startX = e.touches[0].x;
        startY = e.touches[0].y;
    },
    canvasMove: function(e) {
        moveX = e.touches[0].x;
        moveY = e.touches[0].y;
        X = moveX - startX;
        Y = moveY - startY;
        if (Math.abs(X) > Math.abs(Y) && X > 0) {
            direction = 'right';
        } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
            direction = 'left';
        } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
            direction = 'down';
        } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
            direction = 'up';
        }
    },
    canvasEnd: function() {
        snakeDirection = direction;
    },
    onReady: function() {
        var context = wx.createContext()

        var frameNum = 0;

        function draw(obj) {
            context.setFillStyle(obj.color)
            context.beginPath();
            context.rect(obj.x, obj.y, obj.width, obj.height)
            context.closePath();
            context.fill();
        }

        function collide(obj1, obj2) {
          var l1 = obj1.x;
          var r1 = l1 + obj1.width;
          var t1 = obj1.y;
          var b1 = t1+obj1.height;

          var l2 = obj2.x;
          var r2 = l2+obj2.width;
          var t2 = obj2.y;
          var b2 = t2+obj2.height;
          if (r1 > l2 && l2 < r2 && b1 > t2 && t1 < b2) {
            return true;
          } else {
            return false;
          }
        }

        function animate() {
            frameNum++;
            if (frameNum % 20 == 0) {
              //添加身体节点
              snakeBodys.push({
                  x: snakeHeader.x,
                  y: snakeHeader.y,
                  width: 10,
                  height: 10,
                  color: '#00ff00'
              });
              if (snakeBodys.length > 4) {
                if (shiftBOL) {
                  snakeBodys.shift();
                } else {
                  shiftBOL = true;
                }

              }
                switch (snakeDirection) {
                    case 'left':
                        snakeHeader.x -= snakeHeader.width;
                        break;
                    case 'right':
                        snakeHeader.x += snakeHeader.width;
                        break;
                    case 'up':
                        snakeHeader.y -= snakeHeader.height;
                        break;
                    case 'down':
                        snakeHeader.y += snakeHeader.height;
                        break;
                }
            }
            draw(snakeHeader);
            //蛇身
            for (var i = 0; i < snakeBodys.length; i++) {
                var item = snakeBodys[i];
                draw(item);
            }
            // 食物
            for (var i = 0; i < food.length; i++) {
              var f = food[i];
              draw(f);
              if (collide(snakeHeader, f)) {
                shiftBOL = false;
                f.reset();
              }
            }
            // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
            wx.drawCanvas({
                canvasId: 'snakeCanvas',
                actions: context.getActions() // 获取绘图动作数组
            })
            requestAnimationFrame(animate);
        }



        function rand(min, max) {
          return parseInt(Math.random()*(max-min))+min;
        }
        function Food(){
          this.x = rand(0, windowWidth);
          this.y = rand(0, windowHeight);
          this.width = 10;
          this.height = 10;
          this.color = "rgb(" + rand(0, 255) +","+rand(0, 255)+","+rand(0, 255)+")";

          this.reset = function(){
            this.x = rand(0, windowWidth);
            this.y = rand(0, windowHeight);
            this.color = "rgb(" + rand(0, 255) +","+rand(0, 255)+","+rand(0, 255)+")";
          }
        }

        wx.getSystemInfo({
          success: function(res) {
            windowWidth = res.windowWidth;
            windowHeight = res.windowHeight;
            for (var i = 0; i < 20; i++) {
              var foodObj = new Food();
              food.push(foodObj);
            }
            animate();
          }
        })
    }
})
