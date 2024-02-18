<template>
  <div>
    <ul>
        <li v-for="m in messageItem" :key="m.id">
            <!-- 跳转路由并携带params参数，to的字符串写法，与query不同，直接在detail后面加/，并用${} -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
            <router-link to="/home/message/detail?id=${m.id}&title=${m.title}"></router-link>

            <!-- 跳转路由并携带params参数，to的对象写法，使用params参数不允许使用path配置，只能使用name配置 -->
            <router-link :to="{
                name:'xiangqing',
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