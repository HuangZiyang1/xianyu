// // 将request请求封装promise对象
// let count = 0;
// const baseUrl = 'http://192.168.3.45:8080'
// export const request  = (params) => {
//     count++;
//     wx.showLoading({
//       title: '加载中',
//       mask:true,

//     })
//     return new Promise((resolve, reject) => {
//         // 在里面存放一个未来才会结束的事件
//         wx.request({
//             ...params,
//             url: baseUrl + params.url,
//             success: (result) => {
//                 resolve(result)
//             },
//             fail: (err) => {
//                 reject(err)
//             },
//             complete: () => {
//                 count--;
//                 if(count == 0){
//                 wx.hideLoading()
//             }
//             }
//         });
          
//     })
// }

//同时发送异步代码的次数
let ajaxTimes = 0
const app = getApp()
export const request = async (params) => {
  //这个是为了防止header中除了token还有其他参数
  if (!params.header) {
    // 如果没传token , 就从storage中获取
    params.header = {
      Authorization: await wx.getStorageSync("Authorization")
    }
  }
  else {
    // 传了header
    if(!params.header.Authorization) {
      params.header = {
        ...params.header,
        Authorization: wx.getStorageInfoSync("Authorization")
      }
    }
   }

  ajaxTimes++;
  //显示加载中效果
  wx.showLoading({
    title: "加载中",
    mask: true
  })
  // 定义公共部分的url
  const baseUrl = app.globaldata.baseURL
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      header: params.header,
      url: baseUrl + params.url,

      success: (result) => {
        if(result.data.code == 400) {
          wx.showToast({
            title: '系统繁忙，请稍后再试',
            icon: "error"
          })
        }
        else {
          resolve(result);
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '请检查网络',
          icon: "error"
        })
        // reject(err)
      },
      complete: () => {
        ajaxTimes--
        //  关闭正在加载的图标
        if (ajaxTimes === 0) {
          wx.hideLoading()
        }

      }
    })
  })
}