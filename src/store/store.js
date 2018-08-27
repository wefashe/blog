import Vue from 'vue';
import Vuex from 'vuex';

import loading from '@/store/modules/loading';
import detail from '@/store/modules/detail';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    detail
  },
})
