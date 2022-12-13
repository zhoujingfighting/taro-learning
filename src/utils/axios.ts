import { axios } from 'taro-axios'
// 创建新实例  默认配置
const HTTP = axios.create({
    timeout: 30000,
    baseURL: 'http://localhost:3000',
})
HTTP.interceptors.request.use(config => {
    // window.console.log(config)
    if (!config.params) {
        config.params = {}
    }
    return config;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
})
// 响应回来后做什么
HTTP.interceptors.response.use(
    response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    err => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(err);
    }
)
export default HTTP
