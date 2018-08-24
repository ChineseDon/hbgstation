<template>
  <div class="ticket">

    <span>这里是ticket</span>
    <div @click="tothree">跳转到快三</div>
    <!--<input type="text" @keyup.13="get">-->
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Ticket",
    created() {
      console.log(window.location.href);
      this.$router.push({
        path: `/ticket/fastthree`
      })
    },
    methods: {

      tothree() {
        this.$router.push({
          path: `/ticket/fastthree`
        })
      },
      get() {
        alert(123);
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
.ticket
  width 100%
  min-height 100vh
  color bisque
  font-size 40px
  span
    font-size 30px
  input
    width 100%
    height 88px
    border 1px solid red
</style>
