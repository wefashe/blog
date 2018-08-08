import axios from 'axios';
// import qs from 'qs';
// import config from '@/config';
// axios.defaults.baseURL = 'https://api.github.com/repos/'
// //设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// }
axios.defaults.timeout = 10000


// 添加请求拦截器
axios.interceptors.request.use(config => {

    return config;
}, error => {

    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {

    return response;
}, error => {

    return Promise.reject(error);
});


// // 封装请求
// export function fetch(url, options) {
//     var opt = options || {}
//     return new Promise((resolve, reject) => {
//         axios({
//             method: opt.type || 'get',
//             url: url,
//             params: opt.params || {},
//             data: (opt.headers ? opt.data : qs.stringify(opt.data)) || {},
//             responseType: opt.dataType || 'json',
//             // headers: opt.headers || {
//             //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//             // }
//         })
//             .then(response => {
//                 if (response.data.code === 0) {
//                     resolve(response.data)
//                 } else if (response.data.code === '000') {
//                     resolve(response.data)
//                 } else {
//                     reject(response.data)
//                     // store.commit('SET_LOADING', false)
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//                 reject(error)
//                 // store.commit('SET_LOADING', false)
//             })
//     })
// }


// export default {
//     install: function (Vue) {
//         Object.defineProperty(Vue.prototype, "$axios", {value: Axios});
//     }
// };