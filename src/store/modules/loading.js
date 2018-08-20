import * as type from '@/store/type';
const loading = {
    state: {
        //对状态进行定义
        showLoading: false,
    },
    mutations: {
        //对状态进行注册
        //ES2015 风格
        [type.SHOWLOADING](state) {
            state.showLoading = true;
        },
        [type.HIDELOADING](state) {
            state.showLoading = false;
        }
    },
    actions: {
        //对状态进行操作
        showloader: ({
            commit
        }) => {
            //执行mutations上对应的方法
            commit(type.SHOWLOADING)
        },
        hideloader: ({
            commit
        }) => {
            commit(type.HIDELOADING)
        },
    },
    getters: {
        //对状态进行获取
        showLoading: state => state.showLoading,
    },

};
export default loading