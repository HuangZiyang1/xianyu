// pages/my/index.js
//Page Object
Page({
  data: {
    pickname:'微信用户',
    school:'没学上了',
    address:'默认地址',
    phoneNumber:"无",
  },
  

  //options(Object)
  onLoad: function(options){
    let {globaldata} = getApp()
    console.log(globaldata);
    this.setData({
      pickname:globaldata.pickname,
      school:globaldata.school,
      address:globaldata.address,
      phoneNumber:globaldata.phoneNumber
    })
    
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
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});
