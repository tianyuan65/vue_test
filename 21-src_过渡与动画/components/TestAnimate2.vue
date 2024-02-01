<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <!-- appear属性，表示刚刷新时就激活进入时的样式，可以写成下面的这种，可以给appear传值 :appear="true"，要传值的话得用v-bind绑定 -->
    <transition-group name="hello" appear>
        <h1 v-show="!isShow" key="1">你好你好！！！！</h1>
        <h1 v-show="isShow" key="2">谷江山</h1>
    </transition-group>
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
        background-color: aqua;
    }
    /* 进入的起点，也是离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的过程和离开的过程 */
    .hello-enter-active,.hello-leave-active{
        transition: 1s linear;
    }
    /* 进入的终点，也是离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }


</style>