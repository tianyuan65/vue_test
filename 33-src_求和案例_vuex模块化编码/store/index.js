// 该文件用于创建vuex中最为核心的store
// 引入vue
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex"
// 引入求和功能与人员管理方面的配置文件
import countOptions from "./count"
import personOptions from "./person"
// 引入Vue和Vuex后立马，在创建store实例前，使用Vuex插件
Vue.use(Vuex)


// 通过实例化Vuex中的Store构造函数，创建并暴露/导出store
// 这是简写的，方便干净
export default new Vuex.Store({
    // 添加配置项actions、mutations、state
    // actions:actions,  //可简写
    // actions,
    // mutations:mutations,  //可简写
    // mutations,
    // state:state  //可简写
    // state,
    // getters  //添加配置项getters，可简写

    modules:{
        count:countOptions,
        person:personOptions
    }
})

