// 发送异步请求


export const login=()=> {
  return new Promise((reslove , reject) => {
    wx.login({
      success(res) {
        // 返回腾讯的code
        reslove(res)
      },
      fail(err) {
        reject(err);
      }
    })
  })
}

// 用户授权获取微信信息
export const getUserProfile=()=> {
  return new Promise((reslove , reject) => {
    wx.getUserProfile({
      desc: '授权获取用户信息',
      success(res) {
        reslove(res)
      },
    })
  })
}

export const getToken= async (e)=> {
  let token = await wx.getStorageSync('Authorization')
  let userId = await wx.getStorageSync('userId')
  return new Promise((reslove , reject) => {
    reslove({token , userId})
  })
}


