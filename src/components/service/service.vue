<template>
    <div class="service">
      <router-view/>
      <tab></tab>
    </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '@/components/tab/tab'
  export default {
    name: "Service",
    components: {
        Tab
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
.service
  position relative
  width 100%
  min-height 100vh
</style>
