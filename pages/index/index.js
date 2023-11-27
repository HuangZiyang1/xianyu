import {
  request
} from "../../request/index"
import {
  login
} from "../../utils/asyncWx"

const app = getApp()
Page({
  data: {
    baseURL:''
  },
  //options(Object)
  onLoad(){
    this.setData({
      baseURL: app.globaldata.baseURL
    })
    login().then(res => {
      let {
        code
      } = res;
      console.log(code);
      request({
        url: '/api/wx/login?code=' + code,
        method: "POST",
      }).then(res => {
        // 将token存放在storage中
        console.log(res);
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
},
  saoma() {
    console.log('1');
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
      success: (result) => {
        console.log(result);
      },
      fail: (res) => {
        console.log(res);
      },
      complete: () => {}
    });
      
}
});
