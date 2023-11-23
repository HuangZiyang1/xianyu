// pages/my/index.js
//Page Object
Page({
  data: {
    Infolist:{
      school:'没学上了',
      address:'默认地址',
      phoneNumber:"无",
      pickname:'微信用户',
    },
    pickname:'微信用户',
   
  },
  

  //options(Object)
  onLoad: function(options){
    // let {globaldata} = getApp()
    // console.log(globaldata);
    // this.setData({
    //   pickname:globaldata.pickname,
    //   school:globaldata.school,
    //   address:globaldata.address,
    //   phoneNumber:globaldata.phoneNumber
    // })
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
    
  }
});
