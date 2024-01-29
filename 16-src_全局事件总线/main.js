// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 关闭Vue的生产提示
Vue.config.productionTip=false

// const Demo=Vue.extend({})
// // d是组件Demo的组件实例对象
// const d=new Demo()
// 把组件实例对象挂载到Vue的原型对象上
// Vue.prototype.x=d

// 创建Vue实例对象
new Vue({
    render:h=>h(App),
    beforeCreate(){
        // 在beforeCreate钩子里，往Vue原型对象上设置x属性，x的属性值就是当前Vue实例对象，
        // 但标准写法不写x，是$bus，表示Vue事来和任何组件实例都可以找到并使用它
        Vue.prototype.$bus=this  //安装全局事件总线
    }
}).$mount('#app')
