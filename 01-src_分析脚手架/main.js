// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，App组件为所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // el:'#app',
  // 将App组件放入容器中，目前我个人的理解是初次渲染App组件
  // render是一个Vue帮我调用的函数，调用的时候传递创建元素的参数(ceateElement)，createElement该函数可以创建具体的元素，并为其编写具体的内容，
  // 并且render中没有用到this，所以可以写成箭头函数
  render: h => h(App),
  // render: h => {return h(App)},
  // render:createElement=>createElement(App),
  // render:createElement=>createElement('h1','hello'),
  
  // template:`<h1>hello</h1>`,
  // compoennts:{App}
})
// 与id为app的容器绑定，当然也可以配置el配置项
.$mount('#app')
