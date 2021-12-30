import { axios } from 'taro-axios'
import Taro from '@tarojs/taro'
// 创建新实例  默认配置
const HTTP = axios.create({
  timeout: 5000,
  baseURL: 'https://autumnfish.cn',
})
HTTP.interceptors.request.use(request => {
   let token=Taro.getStorageSync('token')||null;
    token && (request.headers.Authorization = 'Bearer ' + token)
    return request
}, error => {
  console.log(error)
})
// 响应回来后做什么
HTTP.interceptors.response.use(
    response => {
        //对响应数据做点什么
        let data;
        if (response.data == undefined) {
            data = JSON.parse(response.request.responseText);
        } else {
            data = response.data;
        }
        return data;
    },
    err => {
        if (err && err.response) {
            console.log(err)
        }// 返回接口返回的错误信息
        return Promise.reject(err);
    }
)
export default HTTP
