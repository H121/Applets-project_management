// miniprogram/pages/project_detail/project_detail.js
var app = getApp()
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['基本信息', '任务', '项目文档'],
    currentTab: 0,
    iconfontclick: false,
    project_title: "",//项目标题
    progress: '100%',//项目进度
    project_photo:'/static/images/nvsheng.jpg',//项目图标
    principal:"未设置",//项目负责人
    isAttachment: false,//是否显示附件
    file_name:"",//附件名字
    file_type:"",//附件类型
    file_path:"",//附件文件路径
    attachment:"未设置",//附件
    start_time:"请选择开始日期",//开始时间
    ending_time:"请选择结束日期",//结束日期
    participant:"未设置",//参与人
    remind:"未设置",//提醒
    classification:"未设置",//项目分类
    Sharer:"未设置",//共享人
    project_label:"未设置",//我的标签
    public_label:"未设置",//公共标签
    project_creation:"未设置",//创建人
    project_time:"未设置",//创建时间
    isDocument:false,//是否有文档
    document_file:[],//文档
    document_author:[],//文档作者
    document_createtime:[],//文档创建时间
    document_avatarUrl:[],//文档头像
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
//基本信息
  //图片更改
  project_photo(){
    const that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          project_photo: res.tempFilePaths
        })
      }
    })
  },
  //负责人
  principal(){
    wx.navigateTo({
      url: '/pages/person_selection/person_selection',
    })
  },
  //打开附件
  open_file(){
    console.log(this.data.file_type)
    if(this.data.file_type == 'file'){
      wx.openDocument({
        filePath: this.data.file_path,
        success: function (res) {
          console.log('打开成功');
          }
      })
    }else{
      wx.previewImage({
        urls: [this.data.file_path],
      })
    }
  },
  //附件
  project_attachment(){
    const that = this
    wx.chooseMessageFile({
      count: 1,
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles
        console.log(res)
        that.setData({
          isAttachment: true,
          attachment: 1,
          file_name: res.tempFiles[0].name,
          file_path: res.tempFiles[0].path,
          file_type: res.tempFiles[0].type
        })
      }
    })
  },
  //开始日期
  bindStartTimeChange: function(e){
    this.setData({
      start_time: e.detail.value
    })
  },
  //结束日期
  bindEndingTimeChange: function(e){
    this.setData({
      ending_time: e.detail.value
    })
  },
  //参与人
  participant(){
    wx.navigateTo({
      url: '/pages/person_selection/person_selection',
    })
  },
  //提醒
  project_remind(){},
  //项目分类
  classification(){},
  //共享人
  Sharer(){
    wx.navigateTo({
      url: '/pages/person_selection/person_selection',
    })
  },
  //我的标签
  project_label(){},
  //公共标签
  public_label(){},

//任务
  iconfontclick(){
    let click = ! this.data.iconfontclick;
    this.setData({
      "iconfontclick": click
    })
  },
  related_task(){
    wx.navigateTo({
      url: '/pages/related_task/related_task',
    })
  },
  create_task(){
    console.log(111)
    wx.navigateTo({
      url: '/pages/create_task/create_task',
    })
  },
//项目文档
  add_document(){
    const that = this
    var date=utils.formatTime2(new Date())
    wx.chooseMessageFile({
      count: 1,
      success (res) {
        that.setData({
          document_file: that.data.document_file.concat(res.tempFiles),
          document_author:app.globalData.userInfo.nickName,
          document_createtime: date,
          document_avatarUrl: app.globalData.userInfo.avatarUrl,
          isDocument:true
        })
      }
    })
  },
  toProjectDetail(e){
    let index = e.currentTarget.dataset.index;
    if(this.data.document_file_type == 'file'){
      wx.openDocument({
        filePath: this.data.document_file[index].path,
        success: function (res) {
          console.log('打开成功');
          }
      })
    }else{
      wx.previewImage({
        urls: [this.data.document_file[index].path],
      })
    }
  },
  touchS: function (e) {  // touchstart
    let startX = app.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let document_file = app.Touches.touchM(e, this.data.document_file, this.data.startX)
    document_file && this.setData({ document_file })
  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let document_file = app.Touches.touchE(e, this.data.document_file, this.data.startX, width)
    document_file && this.setData({ document_file })
  },
  itemDelete: function(e){  // itemDelete
    let document_file = app.Touches.deleteItem(e, this.data.document_file)
    document_file && this.setData({ document_file })
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