<template>
    <div class="mine">
      我的小站
      <router-link to="/login" class="login">去登陆</router-link>
    </div>
</template>

<script>
    export default {
      name: "Mine",
      created() {
        console.log(window.location.href);
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
