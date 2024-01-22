<template>
  <div>
    <h2 @click="showName">公司名称:{{name}}</h2>
    <h2>公司地址:{{address}}</h2>
  </div>
</template>

<script>
    // 引入一个混入mixin
    // import {mixin,mixin2} from '../mixin'
    export default {
        name:'FirmInfo',
        data() {
            return {
                name:'729声工场',
                address:'北京'
            }
        },
        // 配置项mixins，mixin也必须写在数组里，局部混合
        // mixins:[mixin,mixin2],
        // mounted(){
        //     console.log('hello!!!!');
        // }
    }
</script>
