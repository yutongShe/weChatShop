// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone_number:'',
    code:''
  },

  getPhone: function(e) {
    this.setData({
      phone_number: e.detail.value
    })
    if(this.data.phone_number.length != 11){
      wx.showToast({
        title: '手机号码错误',
      })
      return;
    }
    console.log(this.data.phone_number)

  },

  getCode: function(e) {
    this.setData({
      code: e.detail.value
    })
    console.log(this.data.code)

  },

  login: function(){
    wx.request({
      url: 'http://www.hengyishun.cn/login/login',
      data:({
        phone: this.data.phone_number,
        code: this.data.code
      }),
      success(res){
        if(res.data == "true"){
          wx.showToast({
            title: '登陆成功',
          })
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        console.log(res.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})