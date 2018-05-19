//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    /** test start */
    hidFlag: false,
    message: 'WeChat',
    count: 1,
    condition: Math.floor(Math.random() * 3 + 1),
    // test,列表
    goodItems: [
      { 'name': '商品1' },
      { 'name': '商品2' },
      { 'name': '商品3' },
      { 'name': '商品4' }
    ],
    arr: ['a', 'b', 'c'],
    arr99: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    // test,模版
    contactMe: {
      name: '张三',
      phone: '185',
      address: '中国'
    },
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    /** test end */

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /** test start */
  changeName: function (e) {
    this.setData({
      message: 'MINA'
    })
  },
  tapName: function (event) {
    console.log(event)
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
    console.debug(e)
  },
  /** test end */

})
