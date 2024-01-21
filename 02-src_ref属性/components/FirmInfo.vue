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
                address:'北京市朝阳区'
            }
        },
    }
</script>

<style>
    .firm{
        background-color: #bfa;
    }
</style>