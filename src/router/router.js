import Vue from 'vue';
import Router from 'vue-router';
import list from '@/pages/list';
import detail from '@/pages/detail';
import NotFound from '@/pages/404';

Vue.use(Router);
export default new Router({
    // mode: "history",
    routes: [
        {
            path: '/123',
            name: 'list',
            component: list
        },
        {
            path: '/',
            name: 'detail',
            component: detail
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})