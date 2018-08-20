import issue from '@/fetch/modules/issue';

//注册插件
const install = Vue => {
    // 如果已经注册过了，就跳过
    if (install.installed)
        return;
    install.installed = true;

    Object.defineProperties(Vue.prototype, {
        // 注意哦，此处挂载在 Vue 原型的 $api 对象上
        $api: {
            get() {
                return {
                    issue,
                }
            }
        }
    })
}
export default install