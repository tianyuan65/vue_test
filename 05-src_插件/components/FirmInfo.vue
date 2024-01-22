<template>
  <div>
    <h2>公司名称:{{name | mySlice}}</h2>
    <h2>公司地址:{{address}}</h2>
    <button @click="test">click to test hello method</button>
  </div>
</template>

<script>
    export default {
        name:'FirmInfo',
        data() {
            return {
                name:'729声工场',
                address:'北京'
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>
