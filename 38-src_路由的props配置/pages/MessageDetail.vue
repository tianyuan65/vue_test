<template>
  <ul>
    <li>msgId:{{id}}</li>
    <li>msgTitle:{{title}}</li>
    <!-- <li>a:{{a}},b:{{b}}</li> -->
  </ul>
</template>

<script>
    export default {
        name:'MessageDetail',
        // props:['a','b'],  //props的值为对象时
        props:['id','title'],  //props的值为布尔值时
        computed:{
            // id(){
            //     return this.$route.query.id
            // },
            // title(){
            //     return this.$route.query.title
            // }
        },
        mounted(){
            // $route能得到当前组件所相关的路由配置信息
            console.log(this.$route);
        }
    }
</script>

