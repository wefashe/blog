import Vue from 'vue';
import Vuex from 'vuex';

import actions from '@/vuex/actions.js'
import mutations from '@/vuex/mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mutations
    },
    actions
})