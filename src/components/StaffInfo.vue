<template>
  <div class="staff">
    <h2>员工姓名:{{name}}</h2>
    <h2>员工性别:{{gender}}</h2>
    <h2>当前求和为:{{number}}</h2>
    <button @click="add">click to let number++</button><br>
    <button @click="sendStaffName">click to send staff name to App</button><br>
    <button @click="unbind">click to unbind the custom event</button><br>
    <button @click="death">click to destory StaffInfo component</button>
  </div>
</template>

<script>
    export default {
        name:'StaffInfo',
        data() {
            return {
                name:'谷江山',
                gender:'male',
                number:0
            }
        },
        methods:{
            add(){
                console.log('add function is called');
                this.number++
            },
            sendStaffName(){
                // 触发StaffInfo组件实例对象身上的atstaff事件
                this.$emit('atstaff',this.name,111,222,'444')
                // this.$emit('demo')
                this.$emit('click')
            },
            unbind(){
                // 解绑一个自定义事件
                this.$off('atstaff')
                // 解绑多个自定义事件，将需要解绑的多个事件名写在数组里，再作为参数传进去
                // this.$off(['atstaff','demo'])
                // 解绑所有自定义事件，真暴力
                // this.$off()
            },
            death(){
                // 销毁当前组件实例对象，销毁后所有StaffInfo组件实例的自定义事件全都不奏效了
                this.$destroy()
            },
            
        }
    }
</script>
<style scoped>
    .staff{
        background-color: #bfa;
        padding: 5px;
        margin-top: 30px;
    }
</style>
