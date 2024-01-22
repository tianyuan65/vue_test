<template>
  <div>
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
    <input type="text" v-fbind:value="name">
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
