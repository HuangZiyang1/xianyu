// pages/my_add/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    myBookFlag: 1,
    myIdleFlag: 0,
    myServiceFlag: 0,
    bookList: [
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "5464513212",
      },
      {
        title: "《计算机科学与技术》",
        ISBN: "9787111695851",
        id: "114514",
      },
      {
        title: "《原神》",
        ISBN: "9787111695851",
        id: "8746556",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "54563143",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "545631436",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "545631437",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "545631438",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "545631439",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "5456314310",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "5456314311",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "5456314312",
      },
      {
        title: "《土木工程制图基础》",
        ISBN: "9787111695851",
        id: "556515513",
      },
    ],
    length: 0,
    pageSize: 5,
    bookCurPage: 1,
    bookMaxPage: 1,
    showBookList: [],
    serviceList: [
      {
        title: "王者代打10颗星",
        id:"14545463145",
        price:"50元"
      },
      {
        title: "王者代打18颗星",
        id:"14545463145",
        price:"500元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-50元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-50元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-50元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
      {
        title: "王者代打100颗星",
        id:"14545463145",
        price:"-5000元"
      },
    ],
    idleCurPage:1,
    idleMaxPage:1,
    showIdleList: [],
    idleList: [
      {
        title:"风相印纸巾",
        id:"114",
        price:"14元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"14元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"14元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"14元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"14元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
      {
        title:"风相印纸巾",
        id:"114",
        price:"15元"
      },
    ],
    showServiceList: [],
    serviceCurPage:1,
    serviceMaxPage:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.handleBookListCount();
    this.handleIdleListCount()
    this.handleServiceListCount()
  },

  handleMyBook() {
    this.setData({
      myBookFlag: 1,
      myIdleFlag: 0,
      myServiceFlag: 0,
    });
    // console.log("1");
  },
  handleMyIdle() {
    this.setData({
      myBookFlag: 0,
      myIdleFlag: 1,
      myServiceFlag: 0,
    });
    // console.log("2");
  },
  handleMyService() {
    this.setData({
      myBookFlag: 0,
      myIdleFlag: 0,
      myServiceFlag: 1,
    });
    // console.log("3");
  },
  handleBookListCount() {
    let length = this.data.bookList.length;
    // console.log(length);
    const pageSize = this.data.pageSize;
    let bookMaxPage = this.data.bookMaxPage;
    bookMaxPage = Math.ceil(length / pageSize);
    this.setData({ bookMaxPage });
    let showBookList = this.data.showBookList;
    let bookList = this.data.bookList;
    let bookCurPage = this.data.bookCurPage;
    for (let index = 0; index < bookCurPage * pageSize; index++) {
      showBookList.push(bookList[index]);
    }
    this.setData({ showBookList });
  },
  handleIdleListCount() {
    let length = this.data.idleList.length;
    // console.log(length);
    const pageSize = this.data.pageSize;
    let idleMaxPage = this.data.idleMaxPage;
    idleMaxPage = Math.ceil(length / pageSize);
    this.setData({ idleMaxPage });
    let showIdleList = this.data.showIdleList;
    let idleList = this.data.idleList;
    let idleCurPage = this.data.idleCurPage;
    for (let index = 0; index < idleCurPage * pageSize; index++) {
      showIdleList.push(idleList[index]);
    }
    this.setData({ showIdleList });
  },
  handleServiceListCount() {
    let length = this.data.serviceList.length;
    // console.log(length);
    const pageSize = this.data.pageSize;
    let serviceMaxPage = this.data.serviceMaxPage;
    serviceMaxPage = Math.ceil(length / pageSize);
    this.setData({ serviceMaxPage });
    let showServiceList = this.data.showServiceList;
    let serviceList = this.data.serviceList;
    let serviceCurPage = this.data.serviceCurPage;
    for (let index = 0; index < serviceCurPage * pageSize; index++) {
      showServiceList.push(serviceList[index]);
    }
    this.setData({ showServiceList });
  },
  handleBookChangePage(e) {
    let bookCurPage = this.data.bookCurPage;
    const bookMaxPage = this.data.bookMaxPage;
    this.setData({ showBookList: [] });
    let showBookList = this.data.showBookList;
    let bookList = this.data.bookList;
    const pageSize = this.data.pageSize;
    if (e.currentTarget.dataset.index === 1) {
      bookCurPage > 1 ? bookCurPage-- : bookCurPage;
      this.setData({ bookCurPage });
      this.setData({ showBookList: [] });
      showBookList = this.data.showBookList;
      for (
        let index = (bookCurPage - 1) * pageSize;
        index < bookCurPage * pageSize;
        index++
      ) {
        showBookList.push(bookList[index]);
      }
      this.setData({ showBookList });
    } else {
      bookCurPage < bookMaxPage ? bookCurPage++ : bookCurPage;
      this.setData({ bookCurPage });
      this.setData({ showBookList: [] });
      showBookList = this.data.showBookList;
      let calLength = bookCurPage * pageSize > bookList.length ? bookList.length : bookCurPage * pageSize 
      for (
        let index = (bookCurPage - 1) * pageSize;
        index < calLength;
        index++
      ) {
        showBookList.push(bookList[index]);
      }
      this.setData({ showBookList });
    }
  },
  handleIdleChangePage(e) {
    let idleCurPage = this.data.idleCurPage;
    const idleMaxPage = this.data.idleMaxPage;
    this.setData({ showIdleList: [] });
    let showIdleList = this.data.showIdleList;
    let idleList = this.data.idleList;
    const pageSize = this.data.pageSize;
    if (e.currentTarget.dataset.index === 1) {
      idleCurPage > 1 ? idleCurPage-- : idleCurPage;
      this.setData({ idleCurPage });
      this.setData({ showidleList: [] });
      showIdleList = this.data.showIdleList;
      for (
        let index = (idleCurPage - 1) * pageSize;
        index < idleCurPage * pageSize;
        index++
      ) {
        showIdleList.push(idleList[index]);
      }
      this.setData({ showIdleList });
    } else {
      idleCurPage < idleMaxPage ? idleCurPage++ : idleCurPage;
      this.setData({ idleCurPage });
      this.setData({ showIdleList: [] });
      showIdleList = this.data.showIdleList;
      let calLength = idleCurPage * pageSize > idleList.length ? idleList.length : idleCurPage * pageSize 
      for (
        let index = (idleCurPage - 1) * pageSize;
        index < calLength;
        index++
      ) {
        showIdleList.push(idleList[index]);
      }
      this.setData({ showIdleList });
    }
  },
  handleServiceChangePage(e) {
    let serviceCurPage = this.data.serviceCurPage;
    const serviceMaxPage = this.data.serviceMaxPage;
    this.setData({ showIdleList: [] });
    let showServiceList = this.data.showServiceList;
    let serviceList = this.data.serviceList;
    const pageSize = this.data.pageSize;
    if (e.currentTarget.dataset.index === 1) {
      serviceCurPage > 1 ? serviceCurPage-- : serviceCurPage;
      this.setData({ serviceCurPage });
      this.setData({ showServiceList: [] });
      showServiceList = this.data.showServiceList;
      for (
        let index = (serviceCurPage - 1) * pageSize;
        index < serviceCurPage * pageSize;
        index++
      ) {
        showServiceList.push(serviceList[index]);
      }
      this.setData({ showServiceList });
    } else {
      serviceCurPage < serviceMaxPage ? serviceCurPage++ : serviceCurPage;
      this.setData({ serviceCurPage });
      this.setData({ showServiceList: [] });
      showServiceList = this.data.showServiceList;
      let calLength = serviceCurPage * pageSize > serviceList.length ? serviceList.length : serviceCurPage * pageSize 
      for (
        let index = (serviceCurPage - 1) * pageSize;
        index < calLength;
        index++
      ) {
        showServiceList.push(serviceList[index]);
      }
      this.setData({ showServiceList });
    }
  },
});
