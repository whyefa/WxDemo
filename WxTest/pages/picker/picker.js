const date = new Date()
const years = []
const months = []
const days = []

for (var i = 1950; i < date.getFullYear(); i++) {
  years.push(i)
}

for (var i = 0; i <=12; i++) {
  months.push(i)
}

for (var i = 0; i <= 31; i++) {
  days.push(i)
}


Page({
  data:{
    cities: [
      "北京","上海","广州","深圳"
    ],
    index: 0,
    time: '09:10',
    date: '2017-01-01',
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 11,
    value: [9999, 1, 1]
  },
  pickerChange: function(e){
    this.setData({
      index: e.detail.value
    })
  },
  timeChange: function(e){
    this.setData({
      time: e.detail.value
    })
  },
  dateChange: function(e){
    this.setData({
      date: e.detail.value
    })
  },
  valueChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
    })
  }
})
