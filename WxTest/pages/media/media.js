function getRandomColor() {
  let rgb = []
  for (var i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random()*256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  inputValue: '',
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    audioSrc: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

    videoSRC: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    danmuList:[
      {
        text: '第一秒出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第三秒出现的弹幕',
        color: '#ff00ff',
        time: 5
      }
    ],


    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: '../../images/cat.jpg'
  },
  onReady:function(e){
    this.audioCtx = wx.createAudioContext('myAudio')
    this.videoContext = wx.createVideoContext('myVideo')
  },
  audioPlay: function(){
    this.audioCtx.play()
  },
  audioPause: function(){
    this.audioCtx.pause()
  },
  audio14:function(){
    this.audioCtx.seek(14)
  },
  audioStart: function(){
    this.audioCtx.seek(0)
  },
  imageError: function(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  bindInputBlur: function(e){
    this.inputValue = e.detail.value
  },
  bindtap: function(){
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function(res){
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function(){
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color:getRandomColor()
    })
  }
})
