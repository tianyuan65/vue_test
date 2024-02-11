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

// 定义getters--用于将state中的数据进行加工
const getters={
    // 表示大10倍的这个函数接收参数state
    bigSum(state){
        return state.sum*10
    }
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
    getters  //添加配置项getters，可简写
})

