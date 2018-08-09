<template>
    <div class="friend">
      邀请站友
    </div>
</template>

<script>
  export default {
    name: "Friend",
    created() {
      console.log(window.location.href);
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
.friend
  width 100%
  color #f00
  font-size .4rem
</style>
