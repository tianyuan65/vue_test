// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 引入mixin，全局混合
import {mixin,mixin2} from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip=false
// 全局应用mixin(包括所有的组件实例对象，甚至Vue实例对象挂载时也会应用到)
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建Vue实例对象
new Vue({
    render:h=>h(App)
}).$mount('#app')
