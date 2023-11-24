Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    pics: [],
    InfoFlag: 0,
    booksCount:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  addPic() {
    let { pics } = this.data;
    wx.chooseMedia({
      camera: "back",
      count: 9,
      maxDuration: 3,
      mediaType: ["image"],
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: (result) => {
        console.log(result);
        let { tempFiles } = result;
        if (pics.length + tempFiles.length <= 9) {
          pics.push(...tempFiles);
          this.setData({
            pics,
          });
        } else {
          wx.showToast({
            title: "上传的太多了",
            icon: "none",
            duration: 1500,
            mask: true,
          });
        }
      },
      fail: (res) => {
        wx.showToast({
          title: "上传失败",
          icon: "none",
          duration: 1500,
          mask: true,
        });
        console.log(res);
      },
    });
  },
  onTapImage(e) {
    let { pics } = this.data;
    console.log(pics);
    console.log(e);
    let picsUrl = [];
    pics.forEach((element) => {
      picsUrl.push(element.tempFilePath);
    });
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: picsUrl,
      success: (result) => {
        console.log(result);
      },
      fail: (res) => {
        console.log(res);
      },
      complete: () => {},
    });
  },
  cancel(e) {
    let { pics } = this.data;
    console.log(e.currentTarget.dataset.index);
    const newpcis = pics.filter((v, index) => 
      index !== e.currentTarget.dataset.index
    );
    console.log(newpcis);
    this.setData({ pics:newpcis });
  },
  getUserInfo1() {
    console.log("1");
    let { globaldata } = getApp();
    this.setData({ globaldata });
    this.setData({ InfoFlag: 1 });
  },
  addkuang() {
    let {booksCount} = this.data
    booksCount++
    this.setData({booksCount})
  }
});
