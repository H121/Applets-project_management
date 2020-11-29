// miniprogram/pages/task/task.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    message:'我的任务',
    selectTab:0,
    messages:'默认',
    task:[{"name":"test","time":"2020/11/27","author":"me","progress":"100%"}]
  },

  //跳转到任务详情
  toTaskDetail(){
    wx.navigateTo({
      url: '/pages/task_detail/task_detail',
    })
  },
  touchS: function (e) {  // touchstart
    let startX = app.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let task = app.Touches.touchM(e, this.data.task, this.data.startX)
    task && this.setData({ task })
  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let task = app.Touches.touchE(e, this.data.task, this.data.startX, width)
    task && this.setData({ task })
  },
  itemDelete: function(e){  // itemDelete
    let task = app.Touches.deleteItem(e, this.data.task)
    task && this.setData({ task })
  },
  add_task(){
    wx.navigateTo({
      url: '/pages/create_task/create_task',
    })
  },

  onReady: function () {
    this.animation = wx.createAnimation()
  },
  translate: function () {
    wx.hideTabBar()
    this.setData({
      isRuleTrue: true
    })
    this.animation.translate(-245, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  success: function () {
    wx.showTabBar()
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(0, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function(){
    this.setData({
      currentTab: 0,
      message: '我的任务',
      selectTab: 0,
      messages: '默认'
    })
  },
  tryDriver: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index,
      message:e.currentTarget.dataset.message
    })
  },
  tryDrivers: function (e) {
    this.setData({
      selectTab:  e.currentTarget.dataset.bar_index,
      messages:e.currentTarget.dataset.messages
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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