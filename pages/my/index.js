// pages/my/index.js
//Page Object
import { request } from "../../request/index";
Page({
  data: {
    nickname:'微信用户',
   
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
    let { nickName } = this.data;
      let that = this;
      wx.showModal({
        title: "修改昵称",
        content: nickName,
        editable: true,
        success(res) {
          if (res.confirm) {
            nickName = res.content;
          }
        },
        complete() {
          that.setData({
            nickName
          })
        }
      });
  },
  postUpdateUserInfo() {
    request({
      url: '/user/user/updateUserInfo',
      method: 'POST',
      data:{
        
          detailAddress: "小谷围",
          schoolId: 4,
          campusId: 1,
          userId: 1,
          userName: "广工大一",
          nickName: "nickName哈哈",
          status: "1",
          phone: "110",
          sex: "1",
          age: 20,
          avatar: "str"
      
      }
    }).then(result => {
      console.log(result);
    })
  }
});
