<template>
    <div class="mydata">
      数据报表
    </div>
</template>

<script>
    export default {
      name: "MyData",
      created() {
        console.log(window.location.href);
      }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
.mydata
  width 100%
  min-height 100vh
  color #f00
  font-size .4rem
</style>
