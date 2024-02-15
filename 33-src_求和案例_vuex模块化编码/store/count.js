// 求和功能相关的配置
export default {
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