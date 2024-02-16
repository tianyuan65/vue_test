// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

// VueRouter是个构造函数，可以实例化来创建路由器，并暴露该路由器
export default new VueRouter({
    // 一组一组的路由们
    routes:[
        // 一组路由
        {
            path:'/about',
            component:AboutPage
        },
        {
            path:'/home',
            component:HomePage
        }
    ]
})
