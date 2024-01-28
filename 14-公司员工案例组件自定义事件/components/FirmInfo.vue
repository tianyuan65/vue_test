<template>
  <div class="firm">
    <h2>公司名称:{{name}}</h2>
    <h2>公司地址:{{address}}</h2>
    <button @click="sendFirmName">click to send firm name to App</button>
  </div>
</template>

<script>
    export default {
        name:'FirmInfo',
        props:['getFirmName'],
        data() {
            return {
                name:'729声工场',
                address:'北京'
            }
        },
        methods:{
            sendFirmName(){
                this.getFirmName(this.name)
                // console.log('the firm name is',this.name);
            }
        }
    }
</script>
<style scoped>
    .firm{
        background-color: aqua;
        padding: 5px;
    }
</style>