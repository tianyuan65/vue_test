<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <HeaderAdd :addTodo="addTodo"/>
        <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <FooterCount :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderAdd from './components/HeaderAdd'
  import TodoList from './components/TodoList'
  import FooterCount from './components/FooterCount'
    
  export default {
      name:'App',
      components:{
        HeaderAdd,
        TodoList,
        FooterCount
      },
      data(){
        return {
          todos:[
            {id:'001',name:'睡懒觉',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'学习',done:false},
          ]
        }
      },
      methods:{
        // 添加todoItem的函数
        addTodo(data){
          // 向list头部添加新数据
          this.todos.unshift(data)
        },
        // 勾选or取消勾选一个todoItem
        checkTodo(id){
          // 遍历todos
          this.todos.forEach((todo)=>{
            // 若遍历后的todo的id等于点击的item的id，则done值取反后赋值返回
            if(todo.id===id) todo.done = !todo.done
          })
        },
        // 删除一个todo
        deleteTodo(id){
          // 过滤，其实也是遍历一下，filter不改变原数组，所以把返回值赋值给this.todos
          this.todos=this.todos.filter(todo=>{
            // 将没有点击的剩下的todo返回
            return todo.id !== id
          })
        }
      }
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
