<template>
  <div>
    <li>
      <label>
        <!-- 给impute绑定checked的选项，具体选项是否勾选根据todo.done的值决定 -->
        <input type="checkbox" :checked="todo.done"/>
        <span>{{todo.name}}</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
  </div>
</template>

<script>
  export default {
      name:'TodoItem',
      // 声明接收todo对象
      props:['todo'],
      
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
</style>