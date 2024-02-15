<template>
  <div>
    <h1>人员列表</h1>
    <h3>列表中第一个人的名字是:{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入人名" v-model="name"><br><br>
    <button @click="addPerson">添加</button>
    <button @click="addX">添加一个姓里有x的人</button>
    <button @click="addPersonServer">添加一个名字随机的人</button>

    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h2 style="color:blue;">NumberCount组件的求和为:{{sum}}</h2>
  </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    export default {
        name:'PersonList',
        data() {
            return {
                name:''
            }
        },
        computed:{
            // 亲自写
            personList(){
               return this.$store.state.person.personList
            },
            sum(){
                return this.$store.state.count.sum
            },

            firstPersonName(){
                return this.$store.getters['person/firstPersonName']
            }
        },
        methods:{
            addPerson(){
                const personObj={id:nanoid(),name:this.name}
                console.log('newperson:',personObj);
                // vuex版本，在store.js里的mutations中调用push来添加，这里只是提交
                // xxxOptions-分类名/mutations-函数名，这是固定的API设计
                this.$store.commit('person/ADDPERSON',personObj)
                this.name=''
            },
            addX(){
                const personObj={id:nanoid(),name:this.name}
                // 交给personOptions配置的actions来调用addPersonX函数
                this.$store.dispatch('person/addPersonX',personObj)
                this.name=''
            },
            addPersonServer(){
                this.$store.dispatch('person/connectPersonServer')
            }
        },
        mounted(){
            console.log('PL',this.$store)
        }
    }
</script>

<style>
   
</style>