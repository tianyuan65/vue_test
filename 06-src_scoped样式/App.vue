<template>
  <div>
    <FirmInfo/><hr>
    <StaffInfo/>
  </div>
</template>

<script>
    import FirmInfo from './components/FirmInfo.vue'
    import StaffInfo from './components/StaffInfo.vue'
    
    export default {
        name:'App',
        components:{FirmInfo,StaffInfo}
    }
</script>
