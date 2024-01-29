<template>
  <div class="staff">
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
    <button @click="sendStaffName">click to send staf name to FirmINfo component</button>
  </div>
</template>

<script>
    export default {
        name:'StaffInfo',
        data() {
            return {
                name:'谷江山',
                gender:'male'
            }
        },
        mounted(){
            // console.log('Staff',this.x);
        },
        methods:{
            sendStaffName(){
                this.$bus.$emit('hello',this.name)
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
