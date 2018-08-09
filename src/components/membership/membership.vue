<template>
  <div class="membership">
    会员服务
  </div>
</template>

<script>
    export default {
      name: "MemberShip",
      created() {
        console.log(window.location.href);
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">
.membership
  width 100%
  color bisque
  font-size .4rem
</style>
