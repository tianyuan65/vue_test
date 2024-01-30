<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 自定义事件名addTodo，事件回调函数名addTodo，下面有addTodo函数 -->
        <HeaderAdd @addTodo="addTodo"/>
        <TodoList :todos="todos"/>
        <FooterCount :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入pubsub
  import pubsub from 'pubsub-js'
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
          // 不把todos写成空数组写死，在这里获取存储在localStorage的数据
          // 若是第一次登陆或清空本地存储后刷新会报错，因为从本地存储获取的是null，所以加个[]，表示本地存储有数据就获取数据，没有就默认是空数组
          todos:JSON.parse(localStorage.getItem('todos'))  || []
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
        deleteTodo(_,id){
          // 过滤，其实也是遍历一下，filter不改变原数组，所以把返回值赋值给this.todos
          this.todos=this.todos.filter(todo=>{
            // 将没有点击的剩下的todo返回
            return todo.id !== id
          })
        },
        // 全选or取消全选
        checkAllTodo(done){
          this.todos.forEach(todo=>{
            todo.done=done
          })
        },
        // 清除所有已完成的todo
        clearAllTodo(){
          this.todos=this.todos.filter(todo=>{
            // 过滤掉done值为false的todo对象，这是为了去掉done值为true的todo对象
            return !todo.done
          })
        }
      },
      watch:{
        todos:{
          // 深度监测
          depp:true,
          handler(value){
            localStorage.setItem('todos',JSON.stringify(value))
          }
        }
      },
      // 只要App挂载，就找到全局事件总线，
      mounted(){
        // 与勾选或取消勾选todo的事件绑定
        this.$bus.$on('checkTodo',this.checkTodo)
        // 订阅消息
        this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
      },
      // 组件销毁前，
      beforeDestroy(){
        // 解绑
        this.$bus.off('checkTodo')
        // 取消订阅
        pubsub.unsubscribe(this.pubId)
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
