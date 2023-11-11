// 将request请求封装promise对象
let count = 0;

export const request  = (params) => {
    count++;
    wx.showLoading({
      title: '加载中',
      mask:true,

    })
    return new Promise((resolve, reject) => {
        // 在里面存放一个未来才会结束的事件
        wx.request({
            ...params,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                count--;
                if(count ==0){
                wx.hideLoading()
            }
            }
        });
          
    })
}