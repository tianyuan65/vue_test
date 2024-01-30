<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    <!-- 配置v-model属性，操作数据，不操作DOM -->
    <!-- <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="name" /> -->

  </div>
</template>

<script>
  // 下载nanoid包后引入，它是一个函数，在需要的地方nanoid()的方式调用即可
  import {nanoid} from 'nanoid'
  export default {
      name:'HeaderAdd',
      // 创建自定义事件了，不用props来接收父组件传来的函数了
      // props:['addTodo'],
      // 若给输入框配置v-model属性的话，就用这个方法，不操作DOM，操作数据，Vue会因双向绑定数据
      // data(){
      //   return {
      //     name:''
      //   }
      // },
      methods:{
        add(event){
          // 校验数据，不能像列表中添加空的数据，若用v-model了的话，就是this.name
          if(!event.target.value) return alert('请输入待办事项')
          // 通过触发事件的target的value值获取，但用这个方法要给函数加event参数
          // 将用户的输入包装成一个todo对象(todoObj)
          // console.log(event.target.value);
          const todoObj={id:nanoid(),name:event.target.value,done:false}
          // 不用props接收addTodo函数了
          // this.addTodo(todoObj)
          // 用$emit方法触发自定义事件，参数为触发的事件名和数据
          this.$emit('addTodo',todoObj)
          // 成功添加后清空输入框
          event.target.value=''
          // 通过给input输入框添加v-model属性，配置双向绑定来获取输入的数据，前提是需要在data中提前设置接收的数据变量名
          // 用v-model配置时，可以使用此方法，不操作DOM，操作数据
          // this.name=''
          // console.log(this.name);
        }
      },
      
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>