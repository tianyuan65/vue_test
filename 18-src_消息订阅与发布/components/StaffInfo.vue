<template>
  <div class="staff">
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
    <button @click="sendStaffName">click to send staff name to FirmINfo component</button>
  </div>
</template>

<script>
    // 引入pubsub
    import pubsub from 'pubsub-js'
    export default {
        name:'StaffInfo',
        data() {
            return {
                name:'谷江山',
                gender:'male'
            }
        },
        methods:{
            sendStaffName(){
                // 在发送名字的函数里发布消息
                pubsub.publish('hello',this.name)
            }
        }
    }
</script>
<style scoped>
    .staff{
        background-color: #bfa;
        padding: 5px;
        margin-top: 30px;
    }
</style>
