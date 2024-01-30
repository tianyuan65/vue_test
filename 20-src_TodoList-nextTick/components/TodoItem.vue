<template>
  <div>
    <li>
      <label>
        <!-- 给input绑定checked的选项，具体选项是否勾选根据todo.done的值决定；方法1：绑定点击事件handleCheck，并获取点击的item的id -->
        <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
        <!-- 方法2：绑定change事件，事件函数名依然是handleCheck -->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- 给input输入框配置v-model属性，与todo.done绑定，可决定checkbox是否被勾选，是个语法糖，但因为修改了props报了错， -->
        <!-- v-model很好，它只是双向数据绑定的配置工具，但不能给它绑上由props传进来的数据，修改了props传来的数据会报错 -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <!-- 文本和输入框只能出现一个，不能同时出现 -->
        <span v-show="!todo.isEditing">{{todo.name}}</span>
        <input 
          type="text" 
          v-show="todo.isEditing" 
          :value="todo.name" 
          @blur="handleBlur(todo,$event)"
          ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEditing" class="btn btn-safe" @click="handleEdit(todo)">编辑</button>
    </li>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
      name:'TodoItem',
      // 声明接收todo对象
      props:[
        'todo',
        // 'checkTodo','deleteTodo'
      ],
      methods:{
        handleCheck(id){
          // 在该函数内，通知App组件，将对应的todo对象的值取反，接收从父组件TodoList来的checkTodo，并将参数id传进去
          // this.checkTodo(id)
          // 与checkTodo事件绑定，并把数据id带过去
          this.$bus.$emit('checkTodo',id)
        },
        handleDelete(id){
          // 在该函数内，通知App组件删除对应的id的对象
          if (confirm('确定删除？')) {
            // this.deleteTodo(id)
            // 与deleteTodo事件绑定，把数据带过去
            // this.$bus.$emit('deleteTodo',id)
            // 发布消息
            pubsub.publish('deleteTodo',id)
          }
        },
        handleEdit(todo){
          // 若todo身上有isEditing属性
          if(todo.hasOwnProperty.call('isEditing')){
            // 通知App组件编辑todo.isEditing，若isEditing值为true，就是编辑状态，变成input输入框
            todo.isEditing=true
          }else{
            console.log('isEditing property is not exist');
            // 若todo身上没有isEditing属性，则调用$set方法，向todo中添加isEditing属性，其初始值为true
            this.$set(todo,'isEditing',true)
          }
          // $nextTick所指定的回调会在DOM节点更新完毕后再执行，并重新解析模板，以减少浏览器的负担
          this.$nextTick(function () {
            // 给input打标识，绑定inputTitle，调用this.$refs.inputTitle的focus方法，让输入框默认获取焦点
            this.$refs.inputTitle.focus()
          })
        },
        handleBlur(todo,event){
          // 该函数内通知App组件失去焦点时，把input输入框改为文本形式，将isEditing值改为false
          todo.isEditing=false
          // console.log('updateTodo',todo.id,event.target.value);  //updateTodo rqb3uewEQSF26LrvKzf5g 吃饭111
          // 若输入的东西为空，则提示
          if(!event.target.value.trim()) return alert('写点东西吧')
          this.$bus.$emit('updateTodo',todo.id,event.target.value)
        }
      }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: lightpink;
  }

  /* 当鼠标悬浮时显示button */
  li:hover button{
    display: block;
  }
</style>