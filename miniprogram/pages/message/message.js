// miniprogram/pages/message/message.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[{"name":"test","time":"2020/11/27","author":"me"}]
  },

  //跳转到留言详情
  toMessageDetail(){
    wx.navigateTo({
      url: '/pages/message_detail/message_detail',
    })
  },
  touchS: function (e) {  // touchstart
    let startX = app.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let message = app.Touches.touchM(e, this.data.message, this.data.startX)
    message && this.setData({ message })
  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let message = app.Touches.touchE(e, this.data.message, this.data.startX, width)
    message && this.setData({ message })
  },
  itemDelete: function(e){  // itemDelete
    let message = app.Touches.deleteItem(e, this.data.message)
    message && this.setData({ message })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})