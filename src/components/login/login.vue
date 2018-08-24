<template>
  <div class="login">
    <h2><a href="#/mydata">HelloWorld</a></h2>
    <button @click="setCookies">设置cookies</button>
    <!--<button @click="paizhao">微信拍照</button>-->
    <button @click="getAlbum">打开相机相册</button>
    <input type="file" accept="image/*" capture="camera">
    <a href="https://www.haibingo.com/station/timg.jpg?mp.wexin.qq.com" download="tupian">下载图片</a>
    <router-link to="/fastThreeChart">去看走势图</router-link>
    <ul>
    <li v-for="imgUrl in imgs">
      <img :src="imgUrl" alt="" width="100" height="100">
    </li>
    </ul>
  </div>
</template>

<script>
  import system from '@/assets/js/sys.js'
  import weixin from '@/assets/js/weixin.js'
    let userInfo = {
      openid: '123456',
      unionid: '2342342342342243',
      imgUrl: 'http://.......',
      nick: '咸菜'
    }
    export default {
      name: "login",
      data() {
        return {
          imgs: []
        }
      },
      created() {
        // 微信配置
        console.log(system);
        let shareInfo = {
          title: '我发现了经营利器！不用不知道，一用吓一跳！！！', // 分享标题
          link: 'https://www.haibingo.com/hbgStationApply/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          desc: '专业的投注站新零售解决方案，为实体投注站定制一个互联网营销开放平台', // 分享描述
          imgUrl: 'https://www.haibingo.com/hbgStationApply/img/share.png', // 分享图标
        }
        let list = ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareQZone', 'chooseImage', 'getLocalImgData']
        weixin.wxConfig(location.href.split('#')[0], list);
        weixin.wxShare(shareInfo);
      },
      methods: {
        setCookies() {
          console.log(userInfo)
          // 存储一周
          this.$cookies.set('userInfo', JSON.stringify(userInfo),7 * 60 * 60 * 24);
        },
        getAlbum() {
          let that = this;
           weixin.getWXImage(9, function(imgData) {
             that.imgs = imgData;
           })
        }
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">
.login
  width 100%
  font-size .4rem
  button
    border 1px solid firebrick
    padding 10px 20px
    font-size 32px
</style>
