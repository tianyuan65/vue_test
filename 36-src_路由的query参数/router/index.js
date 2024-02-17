// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import MessageList from '../pages/MessageList'
import NewsList from '../pages/NewsList'
import MessageDetail from '../pages/MessageDetail'

// VueRouter是个构造函数，可以实例化来创建路由器，并暴露该路由器
export default new VueRouter({
    // 一组一组的路由们
    routes:[
        // 一组路由，一级路由的path属性值路径前面必须写/
        {
            path:'/about',
            component:AboutPage
        },
        {
            path:'/home',
            component:HomePage,
            children:[
                // 但，若是某一个路由的子路由，前面就不加/，就是children里的东西，在底层设计时，已经帮我们加了/
                {
                    path:'message',
                    component:MessageList,
                    children:[
                        {
                            path:'detail',
                            component:MessageDetail
                        }
                    ]
                },
                {
                    // 要么上面那么写，要么把父路由的全写上，就像/home/message
                    path:'/home/news',
                    component:NewsList
                }
            ]
        },
    ]
})
