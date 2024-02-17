<template>
  <ul>
    <li>msgNumber:{{$route.query.id}}</li>
    <li>msgTitle:{{$route.query.title}}</li>
  </ul>
</template>

<script>
    export default {
        name:'MessageDetail',
        mounted(){
            // $route能得到当前组件所相关的路由配置信息
            console.log(this.$route);
        }
    }
</script>

