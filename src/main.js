// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，App组件为所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // el:'#app'
  // 将App罪案放入容器中，目前我个人的理解是初次渲染App组件
  render: h => {return h(App)},
})
// 与id为app的容器绑定，当然也可以配置el配置项
.$mount('#app')
