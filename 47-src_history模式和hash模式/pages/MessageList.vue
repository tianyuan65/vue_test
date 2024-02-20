<template>
  <div>
    <ul>
        <li v-for="m in messageItem" :key="m.id">
            <!-- 跳转路由并携带params参数，to的字符串写法，与query不同，直接在detail后面加/，并用${} -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
            <!-- <router-link to="/home/message/detail?id=${m.id}&title=${m.title}"></router-link> -->

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
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
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
        },
        methods:{
            // 将遍历后的数据m，作为参数传递到pushShow函数的形参位，记得给绑定点击事件的函数也传递参数，要不然参数默认就是event了
            pushShow(m){
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }) 
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
        },
        beforeDestroy(){
            console.log('MessageList component will be destroy');
        }
    }
</script>

<style>

</style>