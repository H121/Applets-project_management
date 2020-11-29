// miniprogram/pages/project/project.js
var app = getApp()
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    message:'我的项目',
    selectTab: 0,
    messages:'默认',
    project:[{"name":"test","time":"2020/11/27","author":"me","left":"0"}]
  },
  //获取项目
  async getProject(){
    let project = await request('');
    wx.hideLoading();
    this.setData({
      project
    })
  },
   // 自定义下拉刷新
   handleRefresher(){
    wx.showNavigationBarLoading() 
    setTimeout(function(){
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
    console.log('scroll-view 下拉刷新');
    // 再次发请求，获取项目数据
  },
  
  // 自定义上拉触底
  handleToLower(){
    console.log('scroll-view 上拉触底');
    // 数据分页： 1. 后端分页， 2. 前端分页
  },
  //跳转到项目详情
  toProjectDetail(){
    wx.navigateTo({
      url: '/pages/project_detail/project_detail',
    })
  },
  touchS: function (e) {  // touchstart
    let startX = app.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let project = app.Touches.touchM(e, this.data.project, this.data.startX)
    project && this.setData({ project })
  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let project = app.Touches.touchE(e, this.data.project, this.data.startX, width)
    project && this.setData({ project })
  },
  itemDelete: function(e){  // itemDelete
    let project = app.Touches.deleteItem(e, this.data.project)
    project && this.setData({ project })
  },
  add_project(){
    wx.navigateTo({
      url: '/pages/create_project/create_project',
    })
  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
  translate: function () {
    wx.hideTabBar({
    })
    this.setData({
      isRuleTrue: true
    })
    this.animation.translate(-245, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  success: function () {
    wx.showTabBar({
    })
    this.setData({
      isRuleTrue: false
    })
    this.animation.translate(0, 0).step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function(){
    this.setData({
      currentTab: 0,
      message: '我的项目',
      seleteTab: 0,
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