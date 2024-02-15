// 人员管理相关的配置
import axios from "axios";
import { nanoid } from "nanoid";
export default {
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