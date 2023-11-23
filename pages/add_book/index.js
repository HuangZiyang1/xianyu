Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"",
    pics:[],
    InfoFlag:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  addPic() {
    let {pics} = this.data
    wx.chooseMedia({
      camera: 'back',
      count: 9,
      maxDuration: 3,
      mediaType: ['image'],
      sizeType: ['compressed'],
      sourceType: ['album','camera'],
      success: (result) => {
        console.log(result);
        let {tempFiles} = result
        if (pics.length + tempFiles.length <= 9) {
          pics.push(...tempFiles)
          this.setData({
            pics
          })
        }else{
          wx.showToast({
            title: '上传的太多了',
            icon:'none',
            duration: 1500,
            mask: true,
          });
            
        }
        
      },
      fail: (res) => {
        wx.showToast({
          title: '上传失败',
          icon: 'none',
          duration: 1500,
          mask: true,
        });
        console.log(res);
      },
    })
  },
  // getUserInfomation() {
  //   wx.getUserInfo({
  //     withCredentials: 'false',
  //     lang: 'zh_CN',
  //     timeout:10000,
  //     success: (result) => {
        
  //     },
  //     fail: () => {},
  //     complete: () => {}
  //   });
      
  // },
  // handleUserInfo(e) {
  //   console.log(e);
  //   const {userInfo} = e.detail;
  //   wx.setStorageSync("userInfo", userInfo);
  //   // this.setData({userInfo});
  //   wx.navigateBack({
  //     delta: 1
  //   });
  // }
  getUserInfo1() {
    console.log("1");
    let {globaldata} = getApp()
    this.setData({globaldata})
    this.setData({InfoFlag:1})
  }
})
