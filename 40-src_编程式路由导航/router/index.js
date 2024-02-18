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
            name:'guanyu',
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
                            name:'xiangqing',
                            // 传query参数
                            path:'detail',
                            // /:id和/:title是占位符，意为声明会接收两个名为id和title的参数
                            // path:'detail/:id/:title',
                            component:MessageDetail,
                            // props的第一种写法--值为对象，该对象中的所有key-value都会以props的形式传给MessageDetail组件，但用得少，因为传递的是固定的数据，不灵活
                            // props:{a:1,b:'hello'}
                            // props的第二种写法--值为布尔值，若布尔值为true，就会把该路由组件收到的所有params参数，以props的形式传给MessageDetail组件
                            // props:true
                            // props的第三种写法--值为函数，要求函数的返回值必须是一个对象，这个返回值里面每一组的key-value组合，这是一个回调函数，会接收$route作为参数
                            props($route){
                                // 所以把原先写在组件里的计算属性逻辑搬到路由规则的地方，组件中会更加明晰，且传递参数的时候可以直接从$route中解构赋值出{query}，这样更方便一些
                                return {id:$route.query.id,title:$route.query.title}
                            },
                            // 从$route中解构赋值出query的版本，当然这也可以连续解构赋值，我觉得这样就行了，就不写了
                            // props({query}){
                            //     return {id:query.id,title:query.title}
                            // },
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
