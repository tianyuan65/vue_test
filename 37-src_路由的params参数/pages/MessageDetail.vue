<template>
  <ul>
    <li>msgNumber:{{$route.params.id}}</li>
    <li>msgTitle:{{$route.params.title}}</li>
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

