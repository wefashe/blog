// import axios from 'axios';
import axios from '@/fetch/fetch';
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
// export const query = () => {
//
// }

const issue = {
  queryList() {
    return axios({
      url: '/repos/lifesinger/blog/issues',
            // url: '/repos/wefashe/blog/issues',
      method: 'get'
    })
  },
  queryDetail(id) {
    return axios({
      url: '/repos/lifesinger/blog/issues/' + id,
      method: 'get',
    })
  },
  marked(text) {
    return axios({
      url: '/markdown',
      method: 'post',
      data: {
        "text": text,
        "mode": 'gfm',
      }
    })
  },
}

// 默认全部导出
export default issue
