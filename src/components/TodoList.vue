<template>
  <ul class="todo-main">
    <TodoItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
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
        'checkTodo',
        'deleteTodo'
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
</style>