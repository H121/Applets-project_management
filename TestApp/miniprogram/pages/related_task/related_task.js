// miniprogram/pages/related_task/related_task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelected: true
  },
  isSelect(){
    this.setData({
      isSelected:!this.data.isSelected
    })
  },
  isNotSelect(){
    this.setData({
      isSelected:!this.data.isSelected
    })
  },
  canel(){
    this.setData({
      isSelected:true
    })
  },
  sure(){
    if(this.data.isSelected == false){
      wx.navigateBack({
        url: '/pages/project_detail/project_detail'
      })
    }else{
      wx.showToast({
        title: '请选择完再确定',
      })
    }
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