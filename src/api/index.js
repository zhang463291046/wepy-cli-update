import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
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
        tip.success('服务端维护中...')
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