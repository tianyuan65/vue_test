// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 关闭Vue的生产提示
Vue.config.productionTip=false

// 创建Vue实例对象
new Vue({
    render:h=>h(App)
}).$mount('#app')
