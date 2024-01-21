<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
    <h2>员工年龄:{{hisAge+1}}</h2>
    <button @click="updateAge">try to update received age</button>
  </div>
</template>

<script>
    export default {
        name:'StaffInfo',
        data() {
            return {
                msg:'我是一个729的员工',
                // name:'谷江山',
                // age:29,
                // gender:'male'
                hisAge:this.age
            }
        },
        methods:{
            updateAge(){
                this.hisAge++
            }
        },
        //简单声明接收
        // props:['name','gender','age'],

        // 接收的同时，对数据设置类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     gender:String
        // }

        // 接收的同时，对数据设置类型限制 + 默认值的指定 + 必要性的限制
        props:{
            name:{
                type:String,  //name属性的值类型是字符串
                required:true  //name属性必须有值
            },
            gender:{
                type:String,  //gender属性的值类型是字符串
                required:true  //gender属性必须有值
            },
            age:{
                type:Number,  //age属性的值类型是数值
                default:97  //默认值，age属性的值可有可无
            },
        }
    }
</script>
