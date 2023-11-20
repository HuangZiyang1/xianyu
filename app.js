// app.js
App({

  globaldata: {
    // 设置全局可用的数据,示例：
    // 在各自index.js中，使用let tmpvar = getApp() 获得实例
    // 通过getApp().globalData.[atriname] = "sth" 赋值
    // https://blog.csdn.net/sinat_33937178/article/details/79124022
    appName: 'xianyu',
    pickname:'八个字的名字名字',
    school:'广东工业大学（大学城校区）生活东区',
    address:'生活东区东12',
    phoneNumber:'15113197845'
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

