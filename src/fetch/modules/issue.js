// import axios from 'axios';
import axios from '@/fetch/fetch';
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const query = () => {

}

const issue = {
    query() {
        return axios({
            url: '/blog/issues',
            method: 'get'
        })
    },
}



// 默认全部导出
export default issue