// 查看事件文档https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html
const app = getApp();
Page({
  data: {
    formats: {},
    bottom: 0,
    readOnly: false,
    placeholder: '介绍一下你的详情吧，支持文字和图片...',
    _focus: false,
    html:'',
    src:''
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onLoad() {
  },
  // 编辑器初始化完成时触发
  onEditorReady() {
    // 回显html
    const that = this;
    wx.createSelectorQuery().select('#editor').context(function(res) {
      that.editorCtx = res.context;
      if(!res) return;
      that.editorCtx.setContents({
        html: app.globalData.html
      })
    }).exec();
  },
  undo() {
    this.editorCtx.undo();
  },
  redo() {
    this.editorCtx.redo();
  },
  format(e) {
    let {
      name,
      value
    } = e.target.dataset;
    if (!name) return;
    // console.log('format', name, value)
    this.editorCtx.format(name, value);
  },
  // 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
  onStatusChange(e) {
    const formats = e.detail;
    this.setData({
      formats
    });
  },
  // 插入分割线
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function() {
      }
    });
  },
  // 清除
  clear() {
    this.editorCtx.clear({
      success: function(res) {
      }
    });
  },
  // 移除样式
  removeFormat() {
    this.editorCtx.removeFormat();
  },
  // 插入当前日期
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    });
  },
  // 插入图片
  insertImage() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          width:'100%',
          data: {
            id: 'abcd',
            role: 'god'
          },
          success: () => {
          }
        })
      }
    });
  },
  //选择图片
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths);
        this.data.images = images.length <= 3 ? images : images.slice(0, 3);
      }
    })
  },
  //查看详细页面
  toDeatil() {
    this.editorCtx.getContents({
      success: (res) => {
        app.globalData.html = res.html
        let query = wx.createSelectorQuery();
        query.select('#editor').boundingClientRect(rect=>{
          let clientHeight = rect.height;
          let clientWidth = rect.width;
          let ratio = 750 / clientWidth;
          let height = clientHeight * ratio;
          app.globalData.height = height
        }).exec();
        this.setData({
          src: app.globalData.index == 0?'/pages/create_task/create_task':'/pages/task_detail/task_detail'
        })
        wx.reLaunch({
          // 需要更改
          url: this.data.src
        })
      },
      fail: (res) => {
        console.log("fail：" , res);
      }
    });
  },
})