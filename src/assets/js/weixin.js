import {getSign} from "./api";
import wx from 'weixin-js-sdk'
/* 微信分享
 * shareinfo
 * title: 分享标题
 * link:  分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
 * desc： 分享描述
 * imgUrl： 分享图片
 */
function wxShare(shareinfo) {
  // 微信分享到朋友圈
  wx.ready(() => {
    wx.onMenuShareTimeline({
      title: shareinfo.title, // 分享标题
      link: shareinfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareinfo.imgUrl, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        //showMessage("分享成功");
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });

    //获取“分享给朋友”按钮点击状态及自定义分享内容接口
    wx.onMenuShareAppMessage({
      title: shareinfo.title, // 分享标题
      desc: shareinfo.desc, // 分享描述
      link: shareinfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareinfo.imgUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数
        //showMessage("分享成功");
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享到QQ
    wx.onMenuShareQQ({
      title: shareinfo.title, // 分享标题
      desc: shareinfo.desc, // 分享描述
      link: shareinfo.link, // 分享链接
      imgUrl: shareinfo.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        //showMessage("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享到QQ空间
    wx.onMenuShareQZone({
      title: shareinfo.title, // 分享标题
      desc: shareinfo.desc, // 分享描述
      link: shareinfo.link, // 分享链接
      imgUrl: shareinfo.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        //showMessage("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  });
}
/* 分享配置
 * curUrl: 当前需要使用api的地址
 * apiList： 当前需要使用的apiList， 数组形式
 */

function wxConfig(curUrl, apiList) {
  getSign(curUrl).then(data => {
    if(data.success === '0000') {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.data.appId, // 必填，公众号的唯一标识
        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
        signature: data.data.signature, // 必填，签名，见附录1
        jsApiList: apiList  // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    } else {
      console.log('微信配置失败')
    }
  })
}

function getImgData(localIds, imgData, callback) {
  if(localIds.length > 0) {
    wx.getLocalImgData({
      localId: localIds.shift(), // 图片的localID
      success: function (res) {
        let localData = res.localData;
        if (localData.indexOf('data:image') != 0) {
          //判断是否有这样的头部
          localData = 'data:image/png;base64,' + localData
        }
        localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/png')
        imgData.push(localData); // localData是图片的base64数据，可以用img标签显示
        getImgData(localIds, imgData, callback);
      }
    });
  } else {
    callback(imgData)
  }
}

// 封装微信体系内获取图片
/* 参数描述：
 * imgNum: 需要获取的图片张数（1~9）
 * 返回参数：
 * imgs：根据获取的图片，返回图片的base64位数组
 */
function getWXImage(imgNum, callback) {
  let imgs = [];
  wx.chooseImage({
    count: imgNum, // 默认9
    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      if(res.localIds.length > 0) { // 返回选定照片的本地ID列表
        getImgData(res.localIds, imgs, function(imgData) {
          callback(imgData);
        })
      }
    }
  })
}

export default {
  wxConfig,
  wxShare,
  getWXImage
}
