import axios from 'axios';
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const query = () => {
    return axios({
        url: 'https://api.github.com/repos/wefashe/blog/issues',
        method: 'get'
    })
}



// 默认全部导出
export default {
    query
}