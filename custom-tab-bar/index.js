// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected:0,
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "自由市场",
        "iconPath": "/icons/homepage.png",
        "selectedIconPath": "/icons/homepage-fill.png"
      },
      {
        "pagePath": "/pages/errand/index",
        "text": "跑腿/服务",
        "iconPath": "/icons/service.png",
        "selectedIconPath": "/icons/service-fill.png"
      },
      {
        "pagePath": "/pages/add/index",
        "text": "+",
        "iconPath": "/icons/加号.png",
        "selectedIconPath": "/icons/加号.png"
        
      },
      {
        "pagePath": "/pages/message/index",
        "text": "消息",
        "iconPath": "/icons/message.png",
        "selectedIconPath": "/icons/message-fill.png"
      },
      {
        "pagePath": "/pages/my/index",
        "text": "我的",
        "iconPath": "/icons/我的图标.png",
        "selectedIconPath": "/icons/我的图标 (1).png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url);
      console.log(data);
      // wx.switchTab({url})
      wx.switchTab({
        url,
        success: (result)=>{
          console.log(result);
        },
        fail: (res)=>{
          console.log(res);
        },
        complete: ()=>{}
      });
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})
