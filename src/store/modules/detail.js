import storage from 'store';
const loading = {
  state: {
    detail: storage.get('detail'),
  },
  mutations: {
    SET_DETAIL: (state, data) => {
      state.detail = data;
      storage.set('detail', data);
    }
  }
};
export default loading
