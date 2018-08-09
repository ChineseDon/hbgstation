<template>
  <div class="tab">
    <router-link tag="div" to="/ticket" class="tab-item">
      <i class="iconfont icon-yueban"></i>
      <span>约票服务</span>
    </router-link>
    <router-link tag="div" to="/membership" class="tab-item">
        <i class="iconfont icon-huiyuan"></i>
        <span>会员服务</span>
    </router-link>
    <router-link tag="div" to="/mydata" class="tab-item">
      <i class="iconfont icon-shuju"></i>
      <span>数据报表</span>
    </router-link>
    <router-link tag="div" to="/friend" class="tab-item">
      <i class="iconfont icon-yaoqing"></i>
      <span>邀请站友</span>
    </router-link>
    <router-link tag="div" to="/mine" class="tab-item">
      <i class="iconfont icon-home"></i>
      <span>我的小站</span>
    </router-link>
  </div>
</template>

<script>
    export default {
      name: 'Tab'
    }
</script>

<style scoped lang="stylus" type="text/stylus">
.tab
  position fixed
  bottom 0
  display flex
  width 100%
  height .88rem
  border-top 1px solid #eee
  .tab-item
    flex 1
    text-align center
    .icon-yueban
    .icon-huiyuan
    .icon-shuju
    .icon-yaoqing
    .icon-home
      display block
      font-size .4rem
      color #000
      padding .05rem 0
    span
      display block
      font-size .3rem
  .is-active
    color #ff9119
    .iconfont
      color #ff9119
</style>
