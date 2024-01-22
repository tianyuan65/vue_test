// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 引入插件
import plugins from "./plugins";
// 关闭Vue的生产提示
Vue.config.productionTip=false

// 应用/使用插件
Vue.use(plugins)
// 创建Vue实例对象
new Vue({
    render:h=>h(App)
}).$mount('#app')
