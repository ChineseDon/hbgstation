import axios from 'axios'
/* 封装服务器的相关请求  */
/* 用于请求微信signature
 * url: /station/WxPay/getSign
 * 请求参数：
 * url: 当前页面url地址不包含后面hash部分
 */
export function getSign(url) {
  return new Promise((resolve, reject) => {
    axios.get('https://www.haibingo.com/station/WxPay/getSign', {
      params: {
        url: url
      }
    }).then(response => {
      console.log(response.data)
      resolve(response.data);
    }).catch(err => {
      reject(err);
    })
  })
}
