// 引入Vue
import Vue from "vue";
// 引入App组件
import App from './App'
// 引入vue-resource插件
import VueResource from "vue-resource";
// 引入vuex
// import Vuex from "vuex";
// 引入刚创建并暴露了的store
import store from "./store";
// 关闭Vue的生产提示
Vue.config.productionTip=false

// 使用VueResource插件
Vue.use(VueResource)
// 使用vuex插件之后，在创建Vue实例对象的时候，就可以传入store配置项了，但不在这里写，因为使用这个插件前，store实例就已经创建好了，报了错
// 所以在创建store实例的地方的最后，使用Vuex这个插件
// Vue.use(Vuex)

// 创建Vue实例对象
new Vue({
    render:h=>h(App),
    // 配置项名:引入的store，当然也可以简写
    // store:store,
    store,
    beforeCreate(){
        Vue.prototype.$bus=this
    }
}).$mount('#app')
