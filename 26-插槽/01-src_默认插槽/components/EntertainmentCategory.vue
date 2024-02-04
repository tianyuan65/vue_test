<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 打标识，也是占位符，准确一点是定义一个插槽，示意组件里的标签体放在这里，别瞎晃哒不知道去哪儿，也相当于挖个坑，等着组件的使用者进行填充 -->
    <slot>It is default value. It will appear, when user does not send a specific structure.</slot>
    <!-- <ul>
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->
    <!-- <img v-show="title==='美食'" src="https://img1.baidu.com/it/u=4097841643,3109051827&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" alt=""> -->
    
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