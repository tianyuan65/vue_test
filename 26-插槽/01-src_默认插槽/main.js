// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 引入vue-resource插件
import VueResource from "vue-resource";
// 关闭Vue的生产提示
Vue.config.productionTip=false

// 使用插件
Vue.use(VueResource)

// 创建Vue实例对象
new Vue({
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this
    }
}).$mount('#app')
