import wepy from 'wepy'
// 工具类
import util from '@/util/util'
// 加密方式
import md5 from '@/plugin/wxMd5/md5'
// 提示框
import tip from '@/plugin/wxTip/tip'
// 服务器基础URL
const baseURL = 'https://sujiefs.com'

// 简单封装一下$post方法Promise
wepy.$post = (url, params = {}) => {
  tip.loading();
  return new Promise((resolve, reject) => {
    wepy.request({
      url: baseURL + url,
      method: 'POST',
      data: params,
      header: { 
        'Content-Type': 'application/json' 
      }
    }).then( res => {
      tip.loaded();
      var response = res.data
      if (response.code == '0') {
        resolve(response)
      } else {
        tip.alert('系统维护中...')
      }
    }).catch((error) => {
      tip.loaded();
      reject(error)
    })
  })
}

// 简单封装一下$post方法async/await
// wepy.$post = async(url, params = {}) => {
//   tip.loading();
//   let res = await wepy.request({
//     url: baseURL + url,
//     method: 'POST',
//     data: params,
//     header: { 
//       'Content-Type': 'application/json' 
//     }
//   });
//   tip.loaded();
//   var response = res.data
//   return response;
// };