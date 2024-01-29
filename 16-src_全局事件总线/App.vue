<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <FirmInfo/>
    <StaffInfo/>
  </div>
</template>

<script>
    import FirmInfo from './components/FirmInfo.vue'
    import StaffInfo from './components/StaffInfo.vue'
    
    export default {
        name:'App',
        components:{FirmInfo,StaffInfo},
        data(){
          return {
            msg:'你好'
          }
        },
        
    }
</script>

<style scoped>
  .app{
    background-color: lightpink;
    padding: 5px;
  }
</style>