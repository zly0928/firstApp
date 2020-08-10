//对axios封装
import axios from "axios"

axios.defaults.timeout = 5000;
//axios.defaults.baseURL ='http://10.1.18.166:8082'; //填写域名
// axios.defaults.baseURL = 'http://localhost:8080';

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? 'http://10.1.21.248:8082' : 'http://10.1.18.166:8082';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
 axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

// 创建 axios 实例
// const service = axios.create({
//     // 配置项
//     //根据环境设置 baseURL
//     //baseURL: process.env.NODE_ENV === "production" ? `/java` : "/apis",
//     baseURL: 'http://10.1.18.166:8082',
//     timeout: 50000,
//     //统一设置请求头
//     headers: {
//         get: {
//           "Content-Type": "application/json;charset=utf-8"
//           // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
//         },
//         post: {
//           "Content-Type": "application/json;charset=utf-8"
//           // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
//         }
//   },

  //请求拦截（对否登录）、相应拦截（不同状态码提示不同）、
//   })
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
  export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
    })
});}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export default {
    get,
    post
}
