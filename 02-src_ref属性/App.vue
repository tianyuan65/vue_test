<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showMsg">click to show message</button>
    <FirmInfo/>
    <FirmInfo ref="fir"/>
    

  </div>
</template>

<script>
    // 引入Firm组件
    import FirmInfo from './components/FirmInfo.vue'
    
    export default {
        name:'App',
        components:{FirmInfo},
        data() {
            return {
                msg:'Welcome!!!!',
            }
        },
        methods:{
            showMsg(){
                // console.log(this.msg);
                // 通过Vue组件实例对象中的$refs获取DOM元素，可以说代替了原生通过id来获取的方法(原生方法就是document.getElementById(...))
                // console.log(this.$refs.title);  //<h1>Welcome!!!!</h1>--真实DOM元素
                console.log(this.$refs.fir);  //VueComponent--FirmInfo组件实例对象
            }
        }
    }
</script>
