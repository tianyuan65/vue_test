## VUE_TEST NOTE

## 一、脚手架文件结构
* 去vue2&vue3note里找，懒得再写一遍

## 二、关于不同版本的Vue：  
* 1.1 vue.js与vue.runtime.xxx.js的区别：
    * 1. vue.js是完整版的Vue，包含：核心功能+模板解析器
    * 2. vue.runtime.xxx.js是运行版的Vue，质保函核心功能，没有模板解析器
* 1.2 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。所以在刚开始创建脚手架的时候，直接Vue就直接会帮我写好```render: h => h(App)```这样的代码，意思就是入口文件main.js中引入的是运行版的Vue，所以需要执行render函数来渲染App组件。
    * ```render:createElement=>createElement('h1','hello'),```

## 三、vue.config.js配置文件
* 1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置
* 2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh/

## 四、ref属性
* 1. 被用来给html元素或子组件注册引用信息(id的替代者)
* 2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
* 3. 使用方式：
    * 打标识：```<h1 ref="title">...</h1>``` 或 ```<Firm ref="fir"/>```
    * 获取：this.$refs.xxx

## 五、配置项props
* 1. 功能：让组件接收外部传过来的数据
    * (1). 传递数据： ```<Demo name="xxx">```
    * (2). 接收数据：
        * 第一种方式(只接收)：
            * ```props:['name']```
        * 第二种方式(限制类型)：
            * ```props:{age:Number}```
        * 第三种方式(限制类型、限制必要性、指定默认值)：
            * ```
                props:{
                    name:{
                        type:String,  //类型
                        required:true,  //必要性
                        default:'老王'  //默认值
                    }
                }
              ```
    * 备注：props是只读的，Vue底层会监测你对props的修改，若进行了修改，就会发出警告，若业务需求确实必须修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## 六、mixin(混入)
* 功能：可以把多个组件共用的配置提取成一个mixin(混入)对象
* 使用方式：
    * 1. 第一步，定义混合，例如：
        * ```
            {
                data(){....},
                methods:{.....}
                ....
            }
          ```
    * 2. 第二步，使用混入，例如：
        * (1). 全局混入：Vue.mixin(xxx)，xxx代表创建的mixin配置的名称
        * (2). 局部混入：mixins：['xxx']

## 七、插件
* 功能：用于增强Vue
* 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
* 定义插件：
    * 对象.install=function(Vue,options){
        // 1. 添加全局过滤器
        Vue.filter(...)

        // 2. 添加全局自定义指令
        Vue.directives(...)

        // 3. 配置全局混入(合)
        Vue.mixin(...)

        // 4. 添加实例方法
        Vue.prototype.$myMethod=function(){...}
        Vue.prototype.$myProperty=xxx
    }
* 使用插件：Vue.use()

## 八、scoped样式
* 作用：让样式在局部生效，防止冲突
* 写法：```<style scoped>```

## 九、TodoList总结
* 1. 组件化编码流程
    * (1). 拆分静态组件：组件要按照**功能点**拆分，命名不要与html元素冲突
    * (2). 实现动态组件：考虑好数据的存放位置，数据是一个组件再用，还是一些组件在用：
        * 一个组件在用：放在组件自身即可
        * 一些组件在用：放在他们共同的父组件上(状态提升)
    * (3). 实现交互：从绑定时间开始
* 2. props适用于组件间通信，也就是传递数据：
    * (1). 父组件 => 子组件 通信
    * (2). 子组件 => 父组件 通信(要求父组件先给子组件一个函数)
* 3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的，它只读不可改！！！！
* 4. props传过来的若是对象类型的值，修改对象中等输定时Vue不会报错，但别这么干，我的vscode没关闭代码检查，写代码的时候就报错了。

## 十、webStorage
* 1. 存储内容大小一般支持5MB左右(不同浏览器可能还不一样)
* 2. 浏览器端通过Window.sessionStorage 和 Window.localStorage属性来实现本地存储机制，若只是本次会话时使用，比如4399里的游戏，就用sessionStorage；但若下次玩的时候想要有上次的记录以及继续上次的关卡玩，那就用localStorage。
* 3. 相关API：
    * 3.1 xxxxStorage.setItem('key','value')：该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
    * 3.2 xxxxStorage.getItem('key')：该方法接受一个键名作为参数，返回键名对应的值。
    * 3.3 xxxxStorage.removeItem('key')：该方法接收一个键名作为参数，返回键名对应的值。
    * 3.4 xxxxStorage.clear()：该方法会清空存储中的所有数据。
* 4. 备注：
    * 4.1 sessionStorage存储的内容会随着浏览器窗口关闭而消失。
    * 4.2 localStorage存储的内容，需要手动清除才会消失。
    * 4.3  xxxxStorage.getItem('key')，如果key对应的value获取不到，那么getItem的返回值是一个null
    * 4.4 JSON.parse(null)的结果依然是null，具体例子把01-localStorage.html 和 02-sessionStorage.html运行试一下

## 十一、组件的自定义事件
* 1. 一种组件间通信的方式，适用于子组件==>父组件
* 2. 使用场景：A是父组件，B是子组件，子组件想给父组件传数据，那么就要在A中给B绑定自定义事件(事件的回调在父组件中)
* 3. 绑定自定义事件
    * (1). 方法1，在父组件中：```<Demo @atstaff="test"/>``` 或 ```<Demo v-on:atstaff="test"/>```
    * (2). 方法2，在父组件中：
        * ```
            <Demo ref="demo"/>
            ......
            methods:{
                this.$refs.staff.$on('atstaff',this.getStaffName)
            }
          ```
    * (3). 若想让自定义事件只触发一次，可以使用once修饰符，或$once方法
* 4. 触发自定义事件：```this.$emit('atstaff',数据)```
* 5. 解绑自定义事件```this.$off('atstaff')```
* 6. 组件上也可以绑定原生DOM事件，需要配合native修饰符使用
* 7. 注意：通过```this.$ref.xxx.$on('atstaff',callback)```绑定自定义事件时，回调要么配置在methods中，就像绑定自定义事件的第二种方法，要么用箭头函数，否则提示的指向会出现问题！！

## 十二、全局事件总线(GlobalEventBus)
* 1. 一种组件间通信的方式，适用于任意组件间通信
* 2. 安装全局事件总线
    * ```
        // 创建Vue实例对象
        new Vue({
            ......
            beforeCreate(){
                // 在beforeCreate钩子里，往Vue原型对象上设置x$bus属性，x$bus的属性值就是当前Vue实例对象，表示Vue事来和任何组件实例都可以找到并使用它，$bus就是当前应用的Vue实例对象
                Vue.prototype.$bus=this  //安装全局事件总线
            },
            ......
        }).$mount('#app')
      ```
* 3. 使用时间总线
    * 3.1 接收数据：A组件向接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。FirmInfo组件接收数据，在FirmInfo绑定自定义事件hello，并在自身绑定事件的回调
        * ```
            mounted(){
                this.$bus.$on('hello',data=>{
                    console.log('It is FirmInfo component, I got his name',data);
                })
            },
          ```
    * 3.2 提供数据：StaffInfo组件发送/提供数据，调用$bus(傀儡)的$emit方法，与之绑定hello事件，并提供数据作为参数。
        * ```
            methods:{
                sendStaffName(){
                    this.$bus.$emit('hello',this.name)
                }
            }
          ```
* 4. 最好在beforeDestroy钩子中，用$off去解绑**当前组件所用到的事件。$off必须得传递当前组件用到的事件名作为参数，啥也不写的意思是绑在傀儡身上的所有事件全部解绑，会出事**

## 十三、消息订阅与发布(pubsub)
* 1. 一种组件间通信的方式适用于任意组件间通信
* 2. 使用步骤：
    * 2.1 安装PubSub：npm i -S pubsub-js
    * 2.2 引入：import pubsub from 'pubsub-js'
    * 2.3 接收数据：A组件想要接收数，则在A组件中订阅消息，订阅的回调留在A组件自身
        * ```
            methods:{
                // _占个位置，不会使用
                demo(_,data){......}
            }
            ......
            mounted(){
                this.pubId=pubsub.subscribe('xxx',this.demo)  //订阅消息
            }
          ```
    * 2.4 提供数据：```pubsub.publish('xxx',数据)```
    * 2.5 最好在beforeDestroy钩子中，用PubSub.unsubscribe(pubId)去取消订阅

## 十四、nextTick
* 1. 语法：this.$nextTick(callback)
* 2. 作用：在下一次DOM更新结束后执行其指定的回调
* 3. 什么时候用？当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行，注：回调函数需要写成普通函数，写成箭头函数this的指向会变

## 十五、Vue封装的过渡与动画
* 1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。
* 2. 图示：去看vue_note笔记
* 3. 写法：
    * 3.1 准备好样式：
        * 元素进入的样式：
            * (1) v-enter:进入的起点
            * (2) v-enter-active:进入过程中
            * (3) v-enter-to:进入的终点
        * 元素离开的样式：
            * (1) v-leave:离开的起点
            * (2) v-leave-active:离开过程中
            * (3) v-leave-to:离开的终点
    * 3.2 使用<transition>包裹要过度的元素，并配置name属性
        * ```
            <transition name="hello" appear>
                <h1 v-show="!isShow">你好你好！！！！</h1>
            </transition>
          ```
    * 3.3 备注：若有多个元素需要过渡，则需要使用：<transition-group>，且每个元素都需要指定key值
        * ```
            <transition-group name="hello" appear>
                <h1 v-show="!isShow" key="1">你好你好！！！！</h1>
                <h1 v-show="isShow" key="2">谷江山</h1>
            </transition-group>
          ```

## 十六、vue脚手架配置代理
* 1. 方法一：在vue.config.js中添加如下配置
    * ```
        devServer:{
            proxy:"http://localhost:5000"
        }
      ```
    * 说明：
        * (1). 优点：配质简单，请求资源时直接发给前端(8080)即可
        * (2). 缺点：不能配置多个代理，不能灵活地控制请求是否走代理
        * (3). 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器(优先匹配前端资源)
* 2. 方式二：编写vue.config.js配置具体代理规则
    * ```
        module.exports:{
            devServer: {
                proxy: {
                    '/api1': {  //匹配所有以'/api1'开头的请求路径
                        // 是代理目标的基础路径，向目标URL/路径(按照我写的例子，就是5000那台服务器)发送请求
                        target: 'http://localhost:5000',
                        // 正则的匹配条件，匹配所有以/api开头的路径，然后将/api开头的路径都给变成空字符串
                        pathRewrite:{'^/api1':''},
                        // ws: true,  //用于支持websocket
                        // changeOrigin: true  //用于控制请求头中的host值
                    },
                    '/api2': {  //匹配所有以'/api2'开头的请求路径
                        // 是代理目标的基础路径，向目标URL/路径(按照我写的例子，就是5001那台服务器)发送请求
                        target: 'http://localhost:5001',
                        // 正则的匹配条件，匹配所有以/api开头的路径，然后将/api开头的路径都给变成空字符串
                        pathRewrite:{'^/api2':''},
                        changeOrigin: true  //用于控制请求头中的host值
                    },
                }
            }
        }
      ```
    * 说明：
        * (1). 优点：可以配置多个代理，且可以灵活地控制请求是否走代理
        * (2). 缺点：配置略微繁琐，请求资源时必须加前缀

## 十七、插槽
* 1. 作用：让父组件可以向子组件的自定位置茶府html结构，也是一种组件间通信的方式，适用于**父组件 ===> 子组件**
* 2. 分类：默认插槽、具名插槽、作用域插槽
* 3. 使用方式
    * 3.1 默认插槽：
        * ```
            父组件中：
            <EntertainmentCategory>
                <div>html结构</div>
            </EntertainmentCategory>
            子组件中：
            <template>
                <div>
                    <!-- 定义插槽 -->
                    <slot>slot's default content.</slot>
                </div>
            </template>
          ```
    * 3.2 具名插槽
        * ```
            父组件中：
            <EntertainmentCategory>
                <template slot="center">
                    <div>html结构1</div>
                </template>

                <template v-slot:footer>
                    <div>html结构2</div>
                </template>
            </EntertainmentCategory>
            子组件中：
            <template>
                <div>
                    <!-- 定义插槽 -->
                    <slot name="center">slot's default content1.</slot>
                    <slot name="footer">slot's default content2.</slot>
                </div>
            </template>
          ```
    * 3.3 作用域插槽
        * 3.3.1 理解：数据在组件自身，但根据数据生成的机构需要组件的使用者来决定(games数据在EntertainmentCategory组件中，但使用数据所遍历出来的结构由App组件决定)
        * 3.3.2 具体编码
            * ```
                父组件中：
                <EntertainmentCategory>
                    <template scope="scopeData">
                        <!-- 生成的是ul列表 -->
                        <ul>
                            <li v-for="(game,index) in scopeData.games" :key="index">{{game}}</li>
                        </ul>
                    </template>
                </EntertainmentCategory>

                <EntertainmentCategory>
                    <template slot-scope="scopeData">
                        <!-- 生成的是h4列表 -->
                        <h4 v-for="(game,index) in games" :key="index">{{game}}</h4>
                    </template>
                </EntertainmentCategory>
                子组件中：
                <template>
                    <div>
                        <!-- 定义插槽 -->
                        <slot :games="games">slot's default content1.</slot>
                    </div>
                </template>

                <script>
                    export default {
                        name:'EntertainmentCategory',
                        props:['title'],
                        // 数据在子组件自身
                        data() {
                            return {
                                games:['光与夜之恋','未定事件簿','恋与制作人','和平精英'],
                            }
                        },
                    }
                </script>
              ```

## 十八、vuex
* 1. 概念
    * 在Vue中实现集中式状态(数据)管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件间通信。
* 2. 何时使用？
    * 多个组件需要共享数据时
* 3. 搭建vuex环境
    * 3.1 创建文件：src/store/index.js
        * ```
            // 该文件用于创建vuex中最为核心的store
            // 引入vue
            import Vue from "vue"
            // 引入Vuex
            import Vuex from "vuex"
            // 引入Vue和Vuex后立马，在创建store实例前，使用Vuex插件
            Vue.use(Vuex)
            // 第一步：定义actions--用于响应组件中的动作
            const actions={}
            // 第一步：定义mutations--用于操作/加工数据(state)
            const mutations={}
            // 第一步：定义state--用于存储初始化的数据
            const state={}

            // 通过实例化Vuex中的Store构造函数，创建并暴露/导出store
            // 这是简写的，方便干净
            export default new Vuex.Store({
                // 添加配置项actions、mutations、state
                // actions:actions,  //可简写
                actions,
                // mutations:mutations,  //可简写
                mutations,
                // state:state  //可简写
                state,
            })
          ```
    * 3.2 在入口文件main.js中创建Vue实例对象时传入store配置项
        * ```
            ...
            // 引入刚创建并暴露了的store
            import store from "./store";
            ...
            // 创建Vue实例对象
            new Vue({
                render:h=>h(App),
                // 配置项名:引入的store，当然也可以简写
                // store:store,
                store
            }).$mount('#app')
          ```
* 4. 基本使用
    * 4.1 初始化数据，配置actions和mutations，操作文件store.js
        * ```
            // 该文件用于创建vuex中最为核心的store
            // 引入vue
            import Vue from "vue"
            // 引入Vuex
            import Vuex from "vuex"
            // 引入Vue和Vuex后立马，在创建store实例前，使用Vuex插件
            Vue.use(Vuex)
            // 第一步：定义actions--用于响应组件中的动作
            const actions={
                // 组件中调用$store的dispatch方法后，调用该函数，函数内传递两个参数，
                // 第一个参数是上下文对象；第二个是要加的数值就是组件里定的selectNum
                // plus(context,value){
                //     console.log('plus function in actions is called');
                //     // 调用context的commit方法，传递两个参数，第一个是会调用的mutations里的函数名，推荐大写，第二个是加多少的数值就是组件里定的selectNum
                //     // 函数名大写是为了区分，大写就是mutations里的函数，小写的话就是actions里的函数
                //     context.commit('PLUS',value)
                // },
                // minus(context,value){
                //     console.log('minus function in actions is called');
                //     context.commit('MINUS',value)
                // },
                plusOdd(context,value){
                    console.log('plusOdd function in actions is called');
                    // 上下文里的state是奇数时才提交PLUSODD函数，这不判断的操作并不在mutations进行，mutations只是单纯地操作数据，在actions才进行判断、异步操作等
                    if (context.state.sum % 2) {
                        context.commit('PLUSODD',value)
                    }
                },
                asyncPlus(context,value){
                    console.log('asyncPlus function in actions is called');
                    setTimeout(() => {
                        context.commit('ASYNCPLUS',value)
                    }, 500);
                }
            }
            // 第一步：定义mutations--用于操作/加工数据(state)
            const mutations={
                // 还是传递两个参数，第一个是sum，也就是state，这是为了监测数据的变化；第二个是要加的数值就是组件里定的selectNum
                PLUS(state,value){
                    // 更新数据
                    state.sum +=value
                    console.log('PLUS function in mutations is called');
                },
                MINUS(state,value){
                    // 更新数据
                    state.sum -= value
                    console.log('MUNIS function in mutations is called');
                },
                PLUSODD(state,value){
                    // 更新数据
                    state.sum += value
                },
                ASYNCPLUS(state,value){
                    // 更新数据
                    state.sum += value
                },
            }
            // 第一步：定义state--用于存储初始化的数据
            const state={
                sum:0  //当前和
            }

            // 通过实例化Vuex中的Store构造函数，创建并暴露/导出store
            // 这是简写的，方便干净
            export default new Vuex.Store({
                // 添加配置项actions、mutations、state
                // actions:actions,  //可简写
                actions,
                // mutations:mutations,  //可简写
                mutations,
                // state:state  //可简写
                state,
            })
          ```
    * 4.2 组件中读取vuex中的数据：$store.state.sum
    * 4.3 组件中修改vuex中的数据：$store.dispatch('actions中的方法名',value)或$store.commit('mutations中的方法名-一般是全大写的',value)
    * 备注：若无网络请求或其他业务逻辑，组件中也可以越过actions，即组件当中不写dispatch，直接编写commit
* 5. getters的使用
    * 5.1 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
    * 5.2 在store.js中追加getters配置
        * ```
            // 定义getters--用于将state中的数据进行加工
            const getters={
                // 表示大10倍的这个函数接收参数state
                bigSum(state){
                    return state.sum*10
                }
            }
            // 创建并暴露store
            export default new Vuex.Store({
                ......
                getters
            })
          ```
    * 5.3 组件中读取数据：```$store.getters.bigSum```
* 6. 四个map方法的使用
    * 6.1 mapState方法：用于帮助我们映射state中的数据为计算属性，就是方便从state中读取数据
        * ```
            computed:{
                // 借助mapState生成计算属性，从state中读取数据（对象写法：用扩展运算符，将状态映射依次展开到计算属性当中）
                ...mapState({sum:'sum',staff:'staff',firm:'firm'}),
                // 借助mapState生成计算属性，从state中读取数据（数组写法：也是用扩展运算符麻酱状态映射到计算属性中）
                // 注意点：若想用数组写法实现，就要保证生成的计算属性名和$store.state里读取出来的数据名一致
                ...mapState(['sum','staff','firm']),
            }
          ```
    * 6.2 mapGetters方法：用于帮助我们映射getters中的数据为计算属性，就是方便从getters中读取数据
        * ```
            // 借助mapGetters生成计算属性，从getters中读取数据，对象写法
            ...mapGetters({bigSum:'bigSum'}),
            // 借助mapGetters生成计算属性，从getters中读取数据，数组写法
            ...mapGetters(['bigSum'])
          ```
    * 6.3 mapActions方法：用于帮助我们生成与actions对话的方法，即：包含```$store.dispatch(xxx)```的函数
        * ```
            methods:{
                // 对象写法，借助mapActions，生成对应的方法，方法中调用dispatch去联系actions，然后就是按流程来，记得给时间函数传参selectNum
                ...mapActions({incrementOdd:'plusOdd',asyncIncrement:'asyncPlus'}),
                // 数组写法，借助mapActions，生成对应的方法，方法中调用dispatch去联系actions，然后就是按流程来，记得给时间函数传参selectNum
                // ...mapActions(['plusOdd','asyncPlus'])
                
            }
          ```
    * 6.4 mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含```$store.commit(xxx)```的函数
        * ```
            methods:{
                // 对象写法，借助mapMutations，生成对应的方法，方法中会调用commit去联系mutations
                ...mapMutations({increment:'PLUS',decrement:'MINUS'}),
                // 数组写法，借助mapMutations，生成对应的方法，方法中会调用commit去联系mutations
                // 但数组写法需要保证函数名和从mutations里读取的函数名一致，所以与click事件绑定的函数名需要改，对象方法不用
                // ...mapMutations(['PLUS','MINUS']),
            }
          ```
    * 备注：mapActions和mapMutations使用时，若需要传递参数，需要在模板中绑定事件时传递好参数，否则参数是事件对象event
* 7. 模块化 + 命名空间
    * 7.1 目的：让代码更好维护，让多种数据分类更加明确
    * 7.2 修改store.js
        * ```
            const countOptions={
                // 命名空间配置，作用：配置了该配置项，组件里的mapState才能捕捉到暴露的名为count的配置，不写该配置也可以，但是组件里引入的时候，就引入count，并且在模板里好好写
                namespaced:true,
                actions:{
                    // 组件中调用$store的dispatch方法后，调用该函数，函数内传递两个参数，
                    // 第一个参数是上下文对象；第二个是要加的数值就是组件里定的selectNum
                    plusOdd(context,value){
                        console.log('plusOdd function in actions is called');
                        // 上下文里的state是奇数时才提交PLUSODD函数，这不判断的操作并不在mutations进行，mutations只是单纯地操作数据，在actions才进行判断、异步操作等
                        if (context.state.sum % 2) {
                            context.commit('PLUSODD',value)
                        }
                    },
                    asyncPlus(context,value){
                        console.log('asyncPlus function in actions is called');
                        setTimeout(() => {
                            context.commit('ASYNCPLUS',value)
                        }, 500);
                    }
                },
                mutations:{// 还是传递两个参数，第一个是sum，也就是state，这是为了监测数据的变化；第二个是要加的数值就是组件里定的selectNum
                    PLUS(state,value){
                        // 更新数据
                        state.sum +=value
                        console.log('PLUS function in mutations is called');
                    },
                    MINUS(state,value){
                        // 更新数据
                        state.sum -= value
                        console.log('MUNIS function in mutations is called');
                    },
                    PLUSODD(state,value){
                        // 更新数据
                        state.sum += value
                    },
                    ASYNCPLUS(state,value){
                        // 更新数据
                        state.sum += value
                    },},
                state:{
                    sum:0,  //当前和
                    firm:'729声工场',
                    staff:'谷江山',
                },
                getters:{
                    // 表示大10倍的这个函数接收参数state
                    bigSum(state){
                        return state.sum*10
                    }
                }
            }
            const personOptions={
                // 命名空间配置，作用：配置了该配置项，组件里的mapState才能捕捉到暴露的名为count的配置，不写该配置也可以，但是组件里引入的时候，就引入count，并且在模板里好好写
                namespaced:true,
                actions:{
                    addPersonX(context,value){
                        if(value.name.indexOf('x')===0){
                            context.commit('ADDPERSON',value)
                        }else{
                            alert('the person’s first name initial have to be X')
                        }
                    },
                    // 向外部服务器发送请求获取数据，不需要传递value参数
                    connectPersonServer(context){
                        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                            value=>{
                                context.commit('ADDPERSON',{id:nanoid(),name:value.data})
                            },error=>{
                                alert(error.message)
                            }
                        )
                    }
                },
                mutations:{
                    ADDPERSON(state,value){
                        console.log('ADDPERSON function in mutations is called');
                        state.personList.push(value)
                    }
                },
                state:{
                    personList:[
                        {id:'001',name:'Osborn'}
                    ]
                },
                getters:{
                    firstPersonName(state){
                        // 返回人员列表了第一个人的人名
                        return state.personList[0].name
                    }
                }
            }
            export default new Vuex.Store({
                modules:{
                    count:countOptions,
                    person:personOptions
                }
            })
          ```
    * 7.3 开启命名空间后，组件中读取state数据
        * ```
            // 方式一：自己直接读取
            this.$store.state.person.personList
            // 方式二：借助mapState读取
            ...mapState('count',['sum','staff','firm'])
          ```
    * 7.4 开启命名空间后，组件中读取getters数据
        * ```
            // 方式一：自己直接读取
            this.$store.getters['person/firstPersonName']
            // 方式二：借助mapGetters读取
            ...mapGetters('count',['bigSum'])
          ```
    * 7.5 开启命名空间后，组件中调用dispatch
        * ```
            // 方式一：自己直接读取
            this.$store.dispatch('person/addX',person)
            // 方式二：借助mapActions
            ...mapActions('count',{incrementOdd:'plusOdd',asyncIncrement:'asyncPlus'})
          ```
    * 7.6 开启命名空间后，组件中调用commit
        * ```
            // 方式一：自己直接读取
            this.$store.commit('person/ADDPERSON',person)
            // 方式二：借助mapMutations
            ...mapMutations('count',{increment:'PLUS',decrement:'MINUS'})
          ```
## 十九、路由
* 1. 理解：一个路由(route)就是一组映射关系(key-value)，多个路由需要路由器(router)进行管理
* 2. 前端路由：key是路径，value是组件
* 3. 基本使用
    * 3.1 安装vue-router，命令：npm i vue-router@3，vue2环境下安装使用vue-router@3，vue3环境下安装vue-router@4
    * 3.2 应用插件：Vue.use(VueRouter)
    * 3.3 编写router配置项
        * ```
            // 该文件专门用于创建整个应用的路由器
            import VueRouter from "vue-router";
            // 引入组件
            import AboutPage from '../components/AboutPage'
            import HomePage from '../components/HomePage'

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
          ```
    * 3.4 实现切换(active-class可配置高亮样式)
        * ```<router-link class="list-group-item" active-class="active" to="/about">About</router-link>```
    * 3.5 指定组件的展示/呈现位置
        * ```<router-view></router-view>```
* 4. 几个注意点：
    * 4.1 路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹。
    * 4.2 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
    * 4.3 每个组件都有自家的$route属性，里面存储着自己的路由信息。
    * 4.4 整个应用只有一个路由器router，可以通过组件的$router属性获取到。
* 5. 多级/嵌套路由
    * 5.1 配置路由规则，使用children配置项
        * ```
            routes:[
                // 一组路由，一级路由的path属性值路径前面必须写/
                {
                    path:'/about',
                    component:AboutPage
                },
                {
                    path:'/home',
                    component:HomePage,
                    // 通过children配置子级路由
                    children:[
                        // 但，若是某一个路由的子路由，前面就不加/，就是children里的东西，在底层设计时，已经帮我们加了/
                        {
                            path:'message',  // 一定不要写，/message
                            component:MessageList
                        },
                        {
                            // 要么上面那么写，要么把父路由的全写上，就像/home/message
                            path:'/home/news',  // 一定不要写，/news，但可以写成/home/news
                            component:NewsList
                        }
                    ]
                },
            ]
          ```
    * 5.2 跳转(是在组件中，需要写完整路径)
        * ```<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>```
* 6. 路由的query参数
    * 6.1 传递参数，在MessageList组件中
        * ```
            <li v-for="m in messageItem" :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法，先变成js表达式识别模板字符串，然后再用es6表达变量的方式 -->
                <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>

                <!-- 跳转路由并携带query参数，to的对象写法，path路径代表跳转到的组件路径，query属性里是需要携带的参数 -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
            </li>
          ```
    * 6.2 在展示的组件中接收参数，在MessageDetail组件中
        * ```
            $route.query.id
            $route.query.title
          ```
* 7. 命名路由
    * 7.1 作用：可以简化路由的跳转
    * 7.2 如何使用？
        * 1. 给路由命名：
            * ```
                {
                    name:'guanyu',  // 给路由命名
                    path:'/about',
                    component:AboutPage
                },
                {
                    path:'/home',
                    component:HomePage,
                    children:[
                        {
                            name:'xiangqing',  // 给路由命名
                            // 要么上面那么写，要么把父路由的全写上，就像/home/message
                            path:'/home/news',
                            component:NewsList
                        }
                    ]
                }
              ```
        * 2. 简化跳转
            * ```
                <!-- 简化前，需要写完整的路径 -->
                <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
                <!-- 简化后，直接通过名字跳转 -->
                <router-link :to="{name:'gunyu'}">About</router-link>
                <!-- 简化写法配合传递参数 -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
              ```
* 8. 路由的params参数
    * 8.1 配置路由声明接收params参数
        * ```
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
                                // /:id和/:title是占位符，意为声明会接收两个名为id和title的参数
                                path:'detail/:id/:title',
                                component:MessageDetail
                            }
                        ]
                    },
                ]
            }
          ```
    * 8.2 传递参数
        * ```
            <!-- 跳转路由并携带params参数，to的字符串写法，与query不同，直接在detail后面加/，并用${} -->
            <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
            <!-- 跳转路由并携带params参数，to的对象写法，使用params参数不允许使用path配置项，只能使用name配置 -->
            <router-link :to="{
                name:'xiangqing',
                params:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{m.title}}
            </router-link>
          ```
        * **特别注意：**路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置
    * 8.3 接收参数
        * ```
            <li>msgNumber:{{$route.params.id}}</li>
            <li>msgTitle:{{$route.params.title}}</li>
          ```
* 9. 路由的props配置
    * 作用：让路由组件更方便的接收参数，第二种方法传递params参数，第三种方法传递query参数，第三种最强大。
    * ```
        {
            name:'xiangqing',
            // 传query参数，配合第三种方法使用
            path:'detail',
            // /:id和/:title是占位符，意为声明会接收两个名为id和title的参数，配合第二种方法使用
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
      ```
* 10. <router-link>的replace属性
    * 10.1 作用：控制路由跳转时操作浏览器历史记录的模式
    * 10.2 浏览器的历史记录有两种写入方式：分别是push和replace，push是追加历史记录，replace是替换当前记录，路由跳转的时候默认是push。
    * 10.3 如何开启replace模式：```<router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>```
* 11. 编程式路由导航
    * 11.1 作用：不借助<router-link>实现路由跳转，让路由更加灵活
    * 11.2 具体编码
        * ```
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
            // $router的两个常用的API
            // 将遍历后的数据m，作为参数传递到pushShow函数的形参位，记得给绑定点击事件的函数也传递参数，要不然参数默认就是event了
            pushShow(m){
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }) 
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
            ...
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="go">test the go function</button>
            back(){
                this.$router.back()  // 后退
            },
            forward(){
                this.$router.forward()  // 前进
            },
            go(){
                // go方法可以传递数值作为参数，正数则连续前进n步，负数则连续后退n步
                this.$router.go(1)
            }
          ```
* 12. 缓存路由组件
    * 12.1 作用：让不展示的路由组件保持挂载，不被销毁
    * 12.2 具体编码：
        * ```
            <!-- keep-alive标签，将需要缓存的路由包在里面，并配置include属性，属性值为需要缓存的路由组件名，没写进去的不管 -->
            <keep-alive include="NewsList">
                <!-- 占位，用于展示组件 -->
                <router-view></router-view>
            </keep-alive>
          ```
* 13. 两个新的生命周期钩子
    * 13.1 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
    * 13.2 具体名字：
        * 1. activated钩子，路由组件被激活时触发
        * 2. deactivated钩子，路由组件失活时触发



* 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效
* 总结：页面跳转就是路由跳转
* 路由规则-key：value的组合，key是路径，value是组件，多组路由规则交由路由器(App)管理
* keep-live缓存的是组件名！给include配置的属性值是组件名，不是其他的例如，路径path或路由规则里的name配置项的值
* 用户点击导航区的选项，随后引起路径的改变，前端路由器监测到改变，进行规则的匹配，在合适的位置为用户展示组件