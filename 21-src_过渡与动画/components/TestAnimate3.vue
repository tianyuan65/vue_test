<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <!-- appear属性，表示刚刷新时就激活进入时的样式，可以写成下面的这种，可以给appear传值 :appear="true"，要传值的话得用v-bind绑定 -->
    <transition-group 
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__rubberBand"
        leave-active-class="animate__backOutLeft"
    >
        <h1 v-show="isShow" key="3">于适</h1>
    </transition-group>
  </div>
</template>

<script>
    // 引入animate.css第三方库
    import 'animate.css'
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
        background-color: #bfa;
    }
    
</style>