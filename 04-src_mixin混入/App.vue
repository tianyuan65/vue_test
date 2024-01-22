<template>
  <div>
    <!-- :age的意思是，单项数据绑定，age的值是运行引号里面的js表达式执行的结果，不加 :  意思就是单纯地age属性，其值为字符串形式 -->
    <FirmInfo/><hr>
    <StaffInfo/>
  </div>
</template>

<script>
    // 引入Staff组件
    import StaffInfo from './components/StaffInfo.vue'
    import FirmInfo from './components/FirmInfo.vue'
    
    export default {
        name:'App',
        components:{StaffInfo,FirmInfo}
    }
</script>
