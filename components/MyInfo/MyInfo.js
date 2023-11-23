// components/MyInfo/MyInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    array: [
      "广东工业大学（大学城校区）",
      "华南理工大学",
      "广州美术学院",
      "中山大学",
    ],
    objectArray: [
      {
        id: 0,
        name: "广东工业大学（大学城校区）",
      },
      {
        id: 1,
        name: "华南理工大学",
      },
      {
        id: 2,
        name: "广州美术学院",
      },
      {
        id: 3,
        name: "中山大学",
      },
    ],
    schoolIndex: 0,
    address: "生活西区西四",
    contact: "15113197845",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSchool(e) {
      this.setData({
        schoolIndex: e.detail.value,
      });
      console.log("给后台了schoolIndex：" + this.data.schoolIndex);
    },
    handleAddress() {
      let { address } = this.data;
      let that = this;
      wx.showModal({
        title: "修改地址",
        content: address,
        editable: true,
        success(res) {
          if (res.confirm) {
            address = res.content;
            console.log(address);
          }
        },
        complete() {
          that.setData({
            address
          })
        }
      });
    },
    handleContact() {
      let { contact } = this.data;
      let that = this;
      wx.showModal({
        title: "修改地址",
        content: contact,
        editable: true,
        success(res) {
          if (res.confirm) {
            contact = res.content;
          }
        },
        complete() {
          that.setData({
            contact
          })
        }
      });
    },
  },
});
