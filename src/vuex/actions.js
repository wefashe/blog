import * as types from '@/vuex/type.js'

export default {
    showloader: ({
        commit
    }) => {
        commit(types.SHOWLOADING)
    },
    hideloader: ({
        commit
    }) => {
        commit(types.HIDELOADING)
    },
}