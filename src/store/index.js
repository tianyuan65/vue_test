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
// const store =new Vuex.Store({
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

