<template>
  <div id="app" @touchmove.prevent>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App',
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if(to) {
        document.title = to.meta.title;
      }else {
        document.title = from.title;
      }
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index >= from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  color: #000;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms linear;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
