<template>

  <div class="fastthree">
    <md-scroll-view
      ref="scrollView"
      :scrolling-x="false"
      @refreshing="$_onRefresh"
      @endReached="$_onEndReached"
    >
      <md-scroll-view-refresh
        slot="refresh"
        slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
        :scroll-top="scrollTop"
        :is-refreshing="isRefreshing"
        :is-refresh-active="isRefreshActive"
      ></md-scroll-view-refresh>
      <span class="span-k3">快三</span>
      <div
        v-for="i in list"
        :key="i"
        class="scroll-view-list"
      >
        <p class="scroll-view-item">{{i}}</p>
      </div>
      <div class="border-btm"></div>
      <md-scroll-view-more
        slot="more"
        :is-finished="isFinished"
      >
      </md-scroll-view-more>
    </md-scroll-view>
  </div>
</template>

<script>
  import {ScrollView, ScrollViewRefresh, ScrollViewMore} from 'mand-mobile'
    export default {
      name: "FastThree",
      data() {
        return {
          list: 5,
          isFinished: false,
        }
      },
      components: {
        [ScrollView.name]: ScrollView,
        [ScrollViewRefresh.name]: ScrollViewRefresh,
        [ScrollViewMore.name]: ScrollViewMore,
      },
      mounted() {
        window.ScrollViewTrigger1 = () => {
          this.$refs.scrollView.triggerRefresh()
        }
      },
      created() {
        console.log('我进来了l');
      },
      methods: {
        $_onRefresh() {
          // async data
          setTimeout(() => {
            this.list += 5
            this.$refs.scrollView.finishRefresh()
          }, 2000)
        },
        $_onEndReached() {
          console.log("打印finished:" + this.isFinished);
          if (this.isFinished) {
            return
          }
          console.log('我在加载中...')
          // async data
          setTimeout(() => {
            this.list += 5
            if (this.list >= 50) {
              this.isFinished = true
            }
            this.$refs.scrollView.finishLoadMore()
          }, 1000)
        },
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">
.fastthree
  width 100%
  height 100vh
  color #000
  font-size .5rem
  .span-k3
    font-size .3rem
  p
   text-align center
  .border-btm
   width 75rem
   height 20px
   border-bottom 1px solid red
</style>
