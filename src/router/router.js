import Vue from 'vue';
import Router from 'vue-router';
import list from '@/pages/list';
import detail from '@/pages/detail';
import NotFound from '@/pages/NotFound';

Vue.use(Router);
const router = new Router({
  // mode: "history",
  routes: [{
      path: "/", // 默认进入路由[写在第一个]
      redirect: "/list",
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        keepAlive: true,
        title: document.title,
        // scrollToTop: true
      },
      // children: [
      //     {
      //         path: '/detail',
      //         name: 'detail',
      //         component: detail,
      //         meta: {keepAlive: false}
      //     },
      // ],
    },
    {
      path: '/post',
      name: 'detail',
      component: detail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '**', // 错误路由[写在最后一个]
      redirect: '/list' //重定向
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})

// router.beforeEach((to, from, next) => {
//   var title = to.query.title || document.title;
//   if (to.meta.title) {
//     title = to.meta.title
//   }
//   document.title = title;
//   next()
// });

export default router;
