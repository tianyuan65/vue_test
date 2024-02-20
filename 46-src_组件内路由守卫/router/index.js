// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import MessageList from '../pages/MessageList'
import NewsList from '../pages/NewsList'
import MessageDetail from '../pages/MessageDetail'

// VueRouter是个构造函数，可以实例化来创建路由器，并暴露该路由器
const router= new VueRouter({
    // 一组一组的路由们
    routes:[
        // 一组路由，一级路由的path属性值路径前面必须写/
        {
            name:'guanyu',
            path:'/about',
            component:AboutPage,
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'shouye',
            path:'/home',
            component:HomePage,
            meta:{title:'主页'},
            children:[
                // 但，若是某一个路由的子路由，前面就不加/，就是children里的东西，在底层设计时，已经帮我们加了/
                {
                    name:'xiaoxi',
                    path:'message',
                    component:MessageList,
                    // 路由元信息配置项，值为对象，对象里配置isAuth属性，意为是否授权，isAuth的值为布尔值
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            // 传query参数
                            path:'detail',
                            // /:id和/:title是占位符，意为声明会接收两个名为id和title的参数
                            // path:'detail/:id/:title',
                            component:MessageDetail,
                            meta:{title:'冷知识'},
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
                    name:'xinwen',
                    // 要么上面那么写，要么把父路由的全写上，就像/home/message
                    path:'/home/news',
                    component:NewsList,
                    // 路由元信息配置项，值为对象，对象里配置isAuth属性，意为是否授权，isAuth的值为布尔值
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由守卫，对当前新闻路由
                    // 独享路由守卫只有前置，没有后置
                    // beforeEnter:(to,from,next)=>{
                    //         console.log('beforeEnter',to,from);
                    //         // 判断，若要去的组件是NewsList或MessageList，
                    //         if (to.meta.isAuth) {  //判断是否需要鉴权，这样就不用一个一个的写路径来判断了
                    //             // 则再判断localStorage的name属性值是否为Osborn，是则放行
                    //             if (localStorage.getItem('name')==='Osborn') {
                    //                 // 在每次放行前写这行，在这里如果与localStorage的值相同，则换为to.meta.title的值；否则，还是当前的title
                    //                 // document.title=to.meta.title || 'vue_test'  // 写两遍麻烦，直接给后置路由守卫写了
                    //                 next()
                    //             }else{
                    //                 alert('Sorry, this is Osborn’s message area')
                    //             }
                    //         } else {
                    //             // 在每次放行前写这行，About和Home的就让点了的就更新为点击的title了
                    //             // document.title=to.meta.title || 'vue_test'  // 写两遍麻烦，直接给后置路由守卫写了
                    //             // 若不是去NewsList或MessageList组件，而是要去别的组件，比如About，也放行
                    //             next()
                    //         }
                    // }
                }
            ]
        },
    ]
})

// 暴露前，加个特殊的，用于谈判商量的API，全局前置路由守卫beforeEach()，
// 意为每一次路由切换之前和初始化的时候，都会调用beforeEach指定的回调函数，就像御前侍卫，需要在危险来临前，就要做出及时的反应，
// 指定的回调接收三个参数，to、from、next，to，顾名思义，指定去哪个路径的组件；from，来自哪里；next，放行
// router.beforeEach((to,from,next)=>{
//     console.log('验证是否是路由切换前调用');
//     console.log('beforeEach',to,from);
//     // 判断，若要去的组件是NewsList或MessageList，
//     if (to.meta.isAuth) {  //判断是否需要鉴权，这样就不用一个一个的写路径来判断了
//         // 则再判断localStorage的name属性值是否为Osborn，是则放行
//         if (localStorage.getItem('name')==='Osborn') {
//             // 在每次放行前写这行，在这里如果与localStorage的值相同，则换为to.meta.title的值；否则，还是当前的title
//             // document.title=to.meta.title || 'vue_test'  // 写两遍麻烦，直接给后置路由守卫写了
//             next()
//         }else{
//             alert('Sorry, this is Osborn’s message area')
//         }
//     } else {
//         // 在每次放行前写这行，About和Home的就让点了的就更新为点击的title了
//         // document.title=to.meta.title || 'vue_test'  // 写两遍麻烦，直接给后置路由守卫写了
//         // 若不是去NewsList或MessageList组件，而是要去别的组件，比如About，也放行
//         next()
//     }
// })

// 全局后置路由守卫afterEach()，会在初始化和每一次路由切换之后调用afterEach指定的回调，但只接收两个参数，就是to和from
router.afterEach((to,from)=>{
    console.log('afterEach',to,from);
    // 能调用后置路由守卫，就意味着路由路径切换已经完成，换title就行了
    document.title=to.meta.title || 'vue_test'
})

export default router
