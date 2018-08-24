// import exif from 'exif-js'
import COS from 'cos-js-sdk-v5'
import axios from 'axios'

// 文件图片上传， 文件类型为file
// base64转file
function base64ToBlob(urlData) {
  var arr = urlData.split(',');
  var mime = arr[0].match(/:(.*?);/)[1] || 'image/png';
  // 去掉url的头，并转化为byte
  var bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  var ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  var ia = new Uint8Array(ab);

  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }

  return new Blob([ab], {
    type: mime
  });
};

// 图片压缩
function getImgData(img, dir, next) {
  var image = new Image();
  image.onload = function() {
    var degree = 0,
      drawWidth, drawHeight, width, height;
    drawWidth = this.naturalWidth;
    drawHeight = this.naturalHeight;
    var maxSide = Math.max(drawWidth, drawHeight);
    if(maxSide > 1024) {
      var minSide = Math.min(drawWidth, drawHeight);
      minSide = minSide / maxSide * 1024;
      maxSide = 1024;
      if(drawWidth > drawHeight) {
        drawWidth = maxSide;
        drawHeight = minSide
      } else {
        drawWidth = minSide;
        drawHeight = maxSide
      }
    }
    var canvas = document.createElement('canvas');
    canvas.width = width = drawWidth;
    canvas.height = height = drawHeight;
    var context = canvas.getContext('2d');
    switch(dir) {
      case 3:
        degree = 180;
        drawWidth = -width;
        drawHeight = -height;
        break;
      case 6:
        canvas.width = height;
        canvas.height = width;
        degree = 90;
        drawWidth = width;
        drawHeight = -height;
        break;
      case 8:
        canvas.width = height;
        canvas.height = width;
        degree = 270;
        drawWidth = -width;
        drawHeight = height;
        break
    }
    context.rotate(degree * Math.PI / 180);
    context.drawImage(this, 0, 0, drawWidth, drawHeight);
    next(canvas.toDataURL("image/jpeg", .8))
  };
  image.src = img
};

// 如果是图片则压缩后上传
// function uploade(file) {
//   let orientation;
//   exif.getData(file, function () {
//     orientation = EXIF.getTag(this, 'Orientation');
//   })
//   let reader = new FileReader();
//   reader.onload = function(e) {
//     getImgData(this.result, orientation, function(data) {
//       // 真正的图片上传
//       uploadFile(data, '/STATIONAPPLY/' + parseInt(Math.random() * 1000) + (new Date().getTime()).toString() + parseInt(Math.random() * 1000) + '.png')
//     })
//   };
//   reader.readAsDataURL(file)
// }

export function uploadFile(file, fileName, isBase64, callback) {
  // 判断是否是base64
  if(isBase64 === 1) {
    file = base64ToBlob(file);
  }
  let cos = new COS({
    getAuthorization: function(options, callback) {
      axios.get('https://7c122d3a.ngrok.io/hibingo_station/stationImg/getFederationToken', {
        params: {
          bucket: options.Bucket,
          region: options.Region
        }
      }).then(res => {
        let data = res.data.data.data;
        callback({
          TmpSecretId: data.credentials.tmpSecretId,
          TmpSecretKey: data.credentials.tmpSecretKey,
          XCosSecurityToken: data.credentials.sessionToken,
          ExpiredTime: data.expiredTime
        })
      })
    }
  });

  cos.putObject({
    Bucket: 'hibingostudy001-1256810288',
    Region: 'ap-guangzhou',
    Key: fileName,
    StorageClass: 'STANDARD',
    Body: file,
    onProgress: function(progressData) {
      console.log(JSON.stringify(progressData))
    }
  }, function (err, data) {
    if(data && data.statusCode === 200) {
      callback(data)
    }
  })
}



