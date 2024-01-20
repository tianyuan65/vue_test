<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <FirmInfo></FirmInfo>
    <StaffInfo></StaffInfo>
  </div>
</template>

<script>
    // 引入组件
    import FirmInfo from './components/FirmInfo.vue'
    import StaffInfo from './components/StaffInfo.vue'

    export default {
        name:'App',
        components:{
            FirmInfo,
            StaffInfo
        }
    }
</script>

