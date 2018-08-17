<template>
    <div class="mine">
      我的小站
      <button @click="getCookies">获取数据</button>
      <router-link to="/login" class="login">去登陆</router-link>
    </div>
</template>

<script>
    export default {
      name: "Mine",
      created() {
        console.log(window.location.href);
      },
      methods: {
        getCookies() {
          let userInfo = JSON.parse(this.$cookies.get('userInfo'));
          console.log(userInfo.openid);
          console.log(userInfo.unionid);
          console.log(userInfo.imgUrl);
          console.log(userInfo.nick)
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
</style>
