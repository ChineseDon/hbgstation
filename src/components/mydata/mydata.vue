<template>
    <div class="mydata">
      <div>数据报表</div>
      <div class="upload-file">
        <md-image-reader
          name="reader0"
          @select="onReaderSelect"
          @complete="onReaderComplete"
          @error="onReaderError"
          is-multiple
        ></md-image-reader>
        <p>上传照片</p>
      </div>

      <input type="file" accept="image/*">
    </div>
</template>

<script>
  import {ImageReader, Toast} from 'mand-mobile'
  import imageProcessor from 'mand-mobile/components/image-reader/image-processor'

  export default {
      name: "MyData",
      components: {
        [ImageReader.name]: ImageReader,
      },
      data() {
        return {
          imageList: {

          }
        }
      },
      created() {
        console.log(window.location.href);
      },
      methods: {
        onReaderSelect(name, {files}) {
          files.forEach(file => {
            console.log('[Mand Mobile] ImageReader Selected:', 'File Name ' + file.name)
          })
          Toast.loading('图片读取中...')
        },
        onReaderComplete(name, {dataUrl, file}) {
          const demoImageList = this.imageList[name] || []

          console.log('[Mand Mobile] ImageReader Complete:', 'File Name ' + file.name)
          imageProcessor({
            dataUrl,
            width: 200,
            height: 200,
            quality: 0.9,
          }).then(({dataUrl}) => {
            console.log(dataUrl)
            //dataUrl && demoImageList.push(dataUrl)
            imageProcessor({
              dataUrl,
              width: 200,
              height: 200,
              quality: 0.4,
            }).then(({dataUrl}) => {
              console.log(dataUrl)
              dataUrl && demoImageList.push(dataUrl)
            })
          })
          //demoImageList.push(dataUrl)
          this.$set(this.imageList, name, demoImageList)

          Toast.hide()
        },
        onReaderError(name, {msg}) {
          Toast.failed(msg)
        },
        onDeleteImage(name, index) {
          const demoImageList = this.imageList[name] || []
          demoImageList.splice(index, 1)
          this.$set(this.imageList, name, demoImageList)
        }
      }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
.mydata
  width 100%
  min-height 100vh
  color #f00
  font-size .4rem
  .upload-file
    position relative
    width 200px
    height 80px
    line-height 80px
</style>
