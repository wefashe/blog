//入口文件

import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import VueRouter from 'vue-router';
// import Routers from './router.js';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import App from './App.vue';

//导入全局样式
import './assets/styles/global.less';

// Vue.use(ElementUI);
// Vue.use(VueRouter);
// Vue.use(iView);

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render:(h)=>h(App)
}).$mount(root);

// const path = require('path');

// console.log(path.join('/a', '/b'));
// console.log(path.resolve('/a', '/b'));


// console.log(path.join('a', 'b'));
// console.log(path.resolve('a', 'b'));

// console.log(path.join('a', '/b'));
// console.log(path.resolve('a', '/b'));

// console.log(path.join('/a', '/b'));
// console.log(path.resolve('/a', '/b'));