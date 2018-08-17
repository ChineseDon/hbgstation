// 获取当前系统
let mobileUAKeywords = ["nokia", "sony", "ericsson", "mot", "samsung", "htc", "sgh", "lg", "sharp", "sie-",
  "philips", "panasonic", "alcatel", "lenovo", "iphone", "ipod", "blackberry", "meizu",
  "android", "netfront", "symbian", "ucweb", "windowsce", "palm", "operamini",
  "operamobi", "opera mobi", "openwave", "nexusone", "cldc", "midp", "wap", "mobile"
];
let userAgent = navigator.userAgent;
let regExp = new RegExp(mobileUAKeywords.join("|"), "i");
let browser = {
  mobile: !!userAgent.match(regExp),
  android: /android/i.test(userAgent) || /linux/i.test(userAgent),
  iPad: /iPad/i.test(userAgent),
  iphone: /iphone/i.test(userAgent),
  ipod: /ipod/i.test(userAgent),
  isWechatBrowser: /micromessenger/i.test(userAgent)
};

// 初始化所需系统为false
let system = 0;

// 系统识别
if(browser.android) {
  system = 1;  // 安卓系统
} else if(browser.iphone || browser.ipod || browser.iPad) {
  system = 2;  // ios系统
}
// 微信系统识别
if(browser.isWechatBrowser) {
  system = 3;  // 微信体系
}

export default system;
