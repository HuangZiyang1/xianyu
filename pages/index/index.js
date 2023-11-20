// pages/index/index.js
//Page Object
Page({
  data: {
    
  },
  //options(Object)
  onLoad(){
    wx.login().then(res => {
      let {
        code
      } = res;
      console.log(code);
      wx.request({
        url: '/api/wx/login?code=' + code,
        method: "POST",
      }).then(res => {
        // 将token存放在storage中
        let token = res.data.data.token;
        if (token) {
          wx.setStorageSync('Authorization', res.data.data.token)
          wx.setStorageSync('userId', res.data.data.user_id)
        } else {
          wx.showToast({
            title: '登录异常',
          })
        }

      })
    })
    const options = {
      url: 'api/wx/login',
      method: "POST"
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 0
    })
  }
}
});
