// miniprogram/pages/create_task/create_task.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "project_title": "",//项目标题
    "progress": '100%',//项目进度
    "principal":"未设置",//项目负责人
    "attachment":"未设置",//附件
    "start_time":"请选择开始日期",//开始时间
    "ending_time":"请选择结束日期",//结束日期
    "participant":"未设置",//参与人
    "remind":"未设置",//提醒
    "Sharer":"未设置",//共享人
    "type":"未设置",//任务类型
    "emergency":"未设置",//紧急程度
    "currentProgress":'0',//当前进度
    "canSlide":true,//是否可以滑动
    html:'',
    height: '300rpx'
  },

  bindDateChange: function (e) {
    this.setData({
      project_time: e.detail.value
    })
  },
  bindStartTimeChange: function(e){
    this.setData({
      start_time: e.detail.value
    })
  },
  bindEndingTimeChange: function(e){
    this.setData({
      ending_time: e.detail.value
    })
    // 借放，之后需要放到创建任务的位置
    this.progress = this.selectComponent("#progress");
    let score = this.progress.getScore();
    console.log(score)
  },
  //富文本  
  toEditor(){
    wx.reLaunch({
      url: '/pages/editor/editor'
    })
  },
  toTaskDetail(){
    wx.reLaunch({
      url: '/pages/task_detail/task_detail'
    })
  },
 onLoad:function(){
  app.globalData.index=0
    //富文本  
    this.setData({
      html: app.globalData.html,
      height: app.globalData.height,
      //进度显示不出来，上面的变量可用，应该是赋值的时候出问题
      currentProgress: app.globalData.currentProgress
    })
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