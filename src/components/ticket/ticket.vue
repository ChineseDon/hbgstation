<template>
  <div class="ticket">
    这里是ticket
    <div @click="tothree">跳转到快三</div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Ticket",
    created() {
      console.log(window.location.href);
    },
    methods: {
      tothree() {
        this.$router.push({
          path: `/ticket/fastthree`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
.ticket
  width 100%
  min-height 100vh
  color bisque
  font-size .4rem
</style>
