<template>
  <div class="firm">
    <h2>公司名称:{{name}}</h2>
    <h2>公司地址:{{address}}</h2>
  </div>
</template>

<script>
    export default {
        name:'FirmInfo',
        data() {
            return {
                name:'729声工场',
                address:'北京'
            }
        },
        mounted(){
            // console.log('Firm',this);
            this.$bus.$on('hello',data=>{
                console.log('It is FirmInfo component, I got his name',data);
            })
        },
        beforeDestroy(){
            // 一般在组件销毁前，需要与绑定在$bus(傀儡)身上的自定义组件解绑，解绑时参数位置不能啥也不写，必须写上要解绑的自定义事件名，不写就把绑在$bus身上的所有事件全解绑了，就出事了
            this.$bus.off('hello')
        }
    }
</script>
<style scoped>
    .firm{
        background-color: aqua;
        padding: 5px;
    }
</style>