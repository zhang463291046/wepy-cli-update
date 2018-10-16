import wepy from 'wepy'
// 服务器基础URL
const baseURL = 'https://sujiefs.com'

// 简单封装一下$post方法Promise
wepy.$post = (url, params = {}) => {
  wepy.$tip.loading();
  return new Promise((resolve, reject) => {
    wepy.request({
      url: baseURL + url,
      method: 'POST',
      data: params,
      header: { 
        'Content-Type': 'application/json' 
      }
    }).then( res => {
      wepy.$tip.loaded();
      var response = res.data
      if (response.code == '0') {
        resolve(response)
      } else {
        wepy.$tip.alert('系统维护中...')
      }
    }).catch((error) => {
      wepy.$tip.loaded();
      reject(error)
    })
  })
}

// 简单封装一下$post方法async/await
// wepy.$post = async(url, params = {}) => {
//   wepy.$tip.loading();
//   let res = await wepy.request({
//     url: baseURL + url,
//     method: 'POST',
//     data: params,
//     header: { 
//       'Content-Type': 'application/json' 
//     }
//   });
//   wepy.$tip.loaded();
//   var response = res.data
//   return response;
// };