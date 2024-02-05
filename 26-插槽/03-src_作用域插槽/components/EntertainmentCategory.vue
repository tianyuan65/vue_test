<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 将子组件里的数据传递给组件的使用者App，把games数据传递给插槽的使用者 -->
    <slot :games="games">It is default value. It will appear, when user does not send a specific structure.1</slot>
    
  </div>
</template>

<script>
    export default {
        name:'EntertainmentCategory',
        props:['title'],
        data() {
            return {
                games:['光与夜之恋','未定事件簿','恋与制作人','和平精英'],
            }
        },
    }
</script>

<style scoped>
    .category{
        background-color: lightpink;
        width:200px;
        height:300px;
    }
    h3{
        text-align: center;
        background-color: aqua;
    }
    
</style>