<template>
  <div class="firm">
    <h2>公司名称:{{name}}</h2>
    <h2>公司地址:{{address}}</h2>
  </div>
</template>

<script>
    // 引入pubsub
    import pubsub from 'pubsub-js'
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
            // FirmInfo组件一挂载，就订阅消息，和自定义时间一样，要么写成箭头函数，要么在上面提前在methods里写好函数
            this.pubId=pubsub.subscribe('hello',(msgName,data)=>{
                console.log('someone subscribed hello, hello callback function is called',msgName,data);
            })
            // console.log('订阅',pubId);
        },
        beforeDestroy(){
            // pubsub.unsubscribe('hello');
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>
<style scoped>
    .firm{
        background-color: aqua;
        padding: 5px;
    }
</style>