import storage from 'store';
const loading = {
  state: {
    detail: storage.get('detail'),
  },
  mutations: {
    ['SET_DETAIL'](state, data) {
      state.detail = data;
      storage.set('detail', data);
    },
  },

  getters: {
    //对状态进行获取
    detail: state => state.detail,
  },
};
export default loading
