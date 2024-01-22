<template>
  <div>
    <h2 @click="showName">员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
  </div>
</template>

<script>
    // 引入一个混入mixin
    // import {mixin,mixin2} from '../mixin'
    export default {
        name:'StaffInfo',
        data() {
            return {
                name:'谷江山',
                gender:'male'
            }
        },
        // 配置项mixins，mixin也必须写在数组里，局部混合
        // mixins:[mixin,mixin2]
    }
</script>
