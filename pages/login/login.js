// pages/login/login.js
import { login , getUserProfile } from '../../utils/asyncWx'
import {request} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 
   * 事件处理函数 
   */
  async getUserInfo() {
    wx.showLoading({
      title: '登录中',
    })
    
    let {userInfo} = await getUserProfile()
    
    if(userInfo) {
      wx.setStorageSync('userProfile', userInfo)
      wx.hideLoading()
      wx.setStorageSync('isLogin', true)
      // wx.switchTab({
      //   url: '../../pages/user/user',
      // })
    }
    else {
      wx.hideLoading()
      wx.showToast({
        title: '登录失败，请稍后重试',
      })
    }
  },
  reject() {
    wx.switchTab({
      url: '../../pages/user/user',
    })
  },
  async __getInfo() {
    let info = await request({url: "/getInfo"})
    console.log(info);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.__getInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})