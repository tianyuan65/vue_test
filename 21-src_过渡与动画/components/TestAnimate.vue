<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <!-- appear属性，表示刚刷新时就激活进入时的样式，可以写成下面的这种，可以给appear传值 :appear="true"，要传值的话得用v-bind绑定 -->
    <transition name="hello" appear>
        <h1 v-show="isShow">你好！！！！</h1>
    </transition>
  </div>
</template>

<script>
    export default {
        name:'TestAnimate',
        data(){
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: lightpink;
    }

    /* 若在transition标签里添加了name属性，并指定了属性名，则激活样式时候的首个单词必须是指定的属性名，没指定那就用默认的v- */
    /* 进入时激活的样式 */
    .hello-enter-active{
        animation: atguigu 1s
    }
    /* 离开时激活的样式 */
    .hello-leave-active{
        /* reverse意思是反转，就是和进入时激活的样式方向相反，往回撤 */
        animation: atguigu 1s reverse;
    }

    /* css动画 */
    @keyframes atguigu{
        from{
            /* 从左边来，所以是-100% */
            transform: translateX(-100%);
        }
        to{
            /* 展示到页面上 */
            transform: translateX(0px)
        }
    }
</style>