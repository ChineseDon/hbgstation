<template>
  <div class="login">
    <h2><a href="/mydata">HelloWorld</a></h2>
  </div>
</template>

<script>
    export default {
      name: "login",
      created() {
        console.log(window.location.href);
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">
.login
  width 100%
  font-size .4rem
</style>
