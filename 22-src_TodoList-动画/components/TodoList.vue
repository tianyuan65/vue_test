<template>
  <ul class="todo-main">
    <!-- 这里一定要写transition-group标签，因为TodoItem经过遍历并被一个一个添加后显示在TodoList上的就不是一个了 -->
    <transition-group name="todo" appear>
      <TodoItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj" 
      />
    </transition-group>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  export default {
      name:'TodoList',
      components:{TodoItem},
      // checkTodo只是在这里走一趟，立马要去TodoItem组件
      props:[
        'todos',
        // 'checkTodo','deleteTodo'
      ]
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

  /* 若在transition标签里添加了name属性，并指定了属性名，则激活样式时候的首个单词必须是指定的属性名，没指定那就用默认的v- */
  /* 进入时激活的样式 */
  .todo-enter-active{
      animation: atguigu 1s
  }
  /* 离开时激活的样式 */
  .todo-leave-active{
      /* reverse意思是反转，就是和进入时激活的样式方向相反，往回撤 */
      animation: atguigu 1s reverse;
  }

  /* css动画 */
  @keyframes atguigu{
      from{
          /* 从左边来，所以是-100% */
          transform: translateX(100%);
      }
      to{
          /* 展示到页面上 */
          transform: translateX(0px)
      }
  }
</style>