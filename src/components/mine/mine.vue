<template>
    <div class="mine">
      我的小站
      <button @click="getCookies">获取数据</button>
      <router-link to="/login" class="login">去登陆</router-link>
      <imgCut  @callback="callback" :width="200" :height="200">
        <div>上传按钮</div>
      </imgCut>
      <img :src="imgsrc">

      <imgClip @callback="getImage" class="imgClip"><div>上传按钮</div></imgClip>
      <img :src="imgUrl" v-show="imgUrl" alt="" width="200" height="200">
      <button @click="toast">点击</button>
    </div>
</template>

<script>
    import {imgCut} from 'vue-imgcut'
    import imgClip from '@/base/img-clip/imgclip'
    import { Toast } from 'mand-mobile'
    import {uploadFile} from "@/assets/js/uploadFile";

    export default {
      name: "Mine",
      data(){
        return{
          imgsrc:'',
          imgUrl:''
        }
      },
      created() {
        console.log(window.location.href);
      },
      components: {
         imgCut,
        imgClip
      },
      methods: {
        getCookies() {
          let userInfo = JSON.parse(this.$cookies.get('userInfo'));
          console.log(userInfo.openid);
          console.log(userInfo.unionid);
          console.log(userInfo.imgUrl);
          console.log(userInfo.nick)
        },
        callback(img){
          this.imgsrc=img
          //console.log(imgss)
        },
        getImage(img) {
          let that = this;
          let fileName = '/STATIONAPPLY/' + parseInt(Math.random() * 1000) + (new Date().getTime()).toString() + parseInt(Math.random() * 1000) + '.png';
          uploadFile(img, fileName, 1, function (data) {
            that.imgUrl = 'https://' + data.Location;
          })
        },
        toast() {
          Toast({
            content: '这是一个提示',
            position: 'bottom'
          });
        }
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">
.mine
  width 100%
  color firebrick
  font-size .4rem
  .login
    font-size .4rem
  .imgClip
    width 120px
    height 60px
    border 1px solid red
    font-size 30px
</style>
