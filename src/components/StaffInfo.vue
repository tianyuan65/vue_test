<template>
  <div class="staff">
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
    <button @click="sendStaffName">click to send staff name to App</button>
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
        methods:{
            sendStaffName(){
                // 触发StaffInfo组件实例对象身上的atstaff事件
                this.$emit('atstaff',this.name,666,111,'hhh')
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
