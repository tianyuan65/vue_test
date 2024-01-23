<template>
  <div class="demo">
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
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
        
    }
</script>
<style scoped>
    .demo{
        background-color: #bfa;
    }
</style>
