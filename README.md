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
                demo(data){......}
            }
            ......
            mounted(){
                this.pubId=pubsub.subscribe('xxx',this.demo)  //订阅消息
            }
          ```
    * 2.4 提供数据：```pubsub.publish('xxx',数据)```
    * 2.5 最好在beforeDestroy钩子中，用PubSub.unsubscribe(pubId)去取消订阅