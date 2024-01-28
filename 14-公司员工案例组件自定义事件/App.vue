<template>
  <div class="app">
    <h1>{{msg}},{{staffName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
    <FirmInfo :getFirmName="getFirmName"/><hr>

    <!-- 方法1：由于v-once在StaffInfo组件标签上，所以是给StaffInfo组件实例对象身上绑定了事件，事件名叫atstaff，若触发了这个事件，getStaffName函数就会被调用 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据 -->
    <!-- <StaffInfo @atstaff="getStaffName" @demo="m1"/> -->
    <!-- 设置只触发一次 -->
    <!-- <StaffInfo @atstaff.once="getStaffName"/> -->

    <!-- 方法2：在mounted钩子中，使用ref给StaffInfo组件实例对象的staff绑定on API，给on API传参传递数据的函数，以备触发事件时调用 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据 -->
    <!-- <StaffInfo ref="staff"/> -->
    <!-- .native表示该事件是，原生的事件名，而不是自定义的 -->
    <StaffInfo ref="staff" @click.native="show"/>
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
            msg:'你好',
            staffName:''
          }
        },
        methods:{
          // 传统绑定事件监听方式传递数据
          getFirmName(name){
            console.log('App got firm name:',name);
          },
          // 自定义事件方式绑定事件监听，传递数据
          getStaffName(name,...params){
            console.log('App got staff name:',name,...params);
            this.staffName=name
          },
          m1(){
            console.log('demo event is touched off');
          },
          show(){
            alert(123)
          },
        },
        
        mounted(){
          // 绑定自定义事件，正常触发调用
          this.$refs.staff.$on('atstaff',this.getStaffName)
          // 若没有准备函数，可以在$on方法传递一个箭头函数，并传递想要传递的数据作为参数，这种方式不能把函数写成普通函数，普通函数的this指向会是触发该事件的那个子组件，而不是App组件
          // this.$refs.staff.$on('atstaff',(name,...params)=>{
          //   console.log('App got staff name:',name,...params);
          //   this.staffName=name
          //   console.log(this);  //VueComponent
          // })

          // 绑定自定义事件，一次性(和.once一样，设置触发一次就不会触发第二次)
          // this.$refs.staff.$once('atstaff',this.getStaffName)
        }
    }
</script>

<style scoped>
  .app{
    background-color: lightpink;
    padding: 5px;
  }
</style>