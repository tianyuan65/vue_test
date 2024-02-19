// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 引入vue-router插件
import VueRouter from "vue-router";
// 引入路由器
import router from "./router";

// 关闭Vue的生产提示
Vue.config.productionTip=false
// 应用VueRouter
Vue.use(VueRouter)

// 创建Vue实例对象
new Vue({
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this
    },
    router:router
}).$mount('#app')
