// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 关闭Vue的生产提示
Vue.config.productionTip=false

// 创建Vue实例对象
new Vue({
    render:h=>h(App),
    // mounted(){
    //     // 挂载三秒后销毁该Vue实例
    //     setTimeout(() => {
    //         this.$destroy()
    //     }, 3000);
    // }
}).$mount('#app')
