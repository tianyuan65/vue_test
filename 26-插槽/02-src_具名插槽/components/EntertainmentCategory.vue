<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 打标识，也是占位符，准确一点是定义一个插槽，示意组件里的标签体放在这里，别瞎晃哒不知道去哪儿，也相当于挖个坑，等着组件的使用者进行填充 -->
    <slot name="center">It is default value. It will appear, when user does not send a specific structure.1</slot>
    <slot name="footer">It is default value. It will appear, when user does not send a specific structure.2</slot>
  </div>
</template>

<script>
    export default {
        name:'EntertainmentCategory',
        props:[
            // 'listData',
            'title'
        ]
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