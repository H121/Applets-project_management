// components/tabBar/tabBar.js
const navigate = {
  project: "/pages/project/project",
  task: "/pages/task/task",
  message: "/pages/message/message",
  setting: "/pages/setting/setting",
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bar_index: Number //组件传进来的 页面位置。根据页面位置确定跳转的目标页面
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

	pageLifetimes: {
		// 组件所在页面的生命周期函数
		show() { },
		hide() { },
		resize() { },
	},

  /**
   * 组件的方法列表
   */
  methods: {
    Click_Bar: function(e) {
      var that = this;
      var Bar_index = this.data.bar_index;
      var sel_index = e.currentTarget.dataset.bar_index
      if (Bar_index != sel_index) {
        var url = ""
	 	switch (sel_index) {
          case 0:
            url = navigate.project;
            break;
          case 1:
            url = navigate.task;
            break;
          case 2:
            url = navigate.message;
            break;
          case 3:
            url = navigate.setting;
            break;
        }
		if (sel_index==1){
          wx.navigateTo({
			url: url,
			success: function(res) {},
			fail: function(res) {},
			complete: function(res) {},
			})
			return
		}
    wx.reLaunch({
      url: url,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
},
  }
})


