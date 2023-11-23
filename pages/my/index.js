// pages/my/index.js
//Page Object
Page({
  data: {
    pickname:'微信用户',
   
  },
  

  onLoad: function(options){
    this.onLoadUserInfo();
  },
  onReady: function(){
    
  },
  onShow: function(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 4
    })
  }
  },
  onLoadUserInfo(){
     let {globaldata} = getApp()
    console.log(globaldata);
    this.setData({
      Infolist:globaldata
    })
    
  },
  handlePickname() {
    let { pickname } = this.data;
      let that = this;
      wx.showModal({
        title: "修改昵称",
        content: pickname,
        editable: true,
        success(res) {
          if (res.confirm) {
            pickname = res.content;
          }
        },
        complete() {
          that.setData({
            pickname
          })
        }
      });
  }
});
