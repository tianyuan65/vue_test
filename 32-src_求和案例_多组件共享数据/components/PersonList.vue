<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入人名" v-model="name"><br><br>
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h2 style="color:blue;">NumberCount组件的求和为:{{sum}}</h2>
  </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    import {mapState} from 'vuex'
    export default {
        name:'PersonList',
        data() {
            return {
                name:''
            }
        },
        computed:{
            // 亲自写
            // personList(){
            //    return this.$store.state.personList
            // },
            // sum(){
            //     return this.$store.state.sum
            // }

            // 用mapState映射
            ...mapState(['personList','sum']),
        },
        methods:{
            addPerson(){
                const personObj={id:nanoid(),name:this.name}
                console.log('newperson:',personObj);
                // 方法1：在组件里调用push方法来向列表里添加new person
                // this.personList.push(personObj)
                // 方法2：vuex版本，在store.js里的mutations中调用push来添加，这里只是提交
                this.$store.commit('ADDPERSON',personObj)
                this.name=''
            }
        }
    }
</script>

<style>
   
</style>