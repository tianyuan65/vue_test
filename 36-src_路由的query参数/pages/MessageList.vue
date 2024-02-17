<template>
  <div>
    <ul>
        <li v-for="m in messageItem" :key="m.id">
            <!-- 跳转路由并携带query参数，to的字符串写法，先变成js表达式识别模板字符串，然后再用es6表达变量的方式 -->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

            <!-- 跳转路由并携带query参数，to的对象写法，path路径代表跳转到的组件路径，query属性里是需要携带的参数 -->
            <router-link :to="{
                path:'/home/message/detail',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{m.title}}
            </router-link>&nbsp;&nbsp;
        </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name:'MessageList',
        data(){
            return {
                messageItem:[
                    {id:'001',title:'msg001'},
                    {id:'002',title:'msg002'},
                    {id:'003',title:'msg003'}
                ]
            }
        }
    }
</script>

<style>

</style>