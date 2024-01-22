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