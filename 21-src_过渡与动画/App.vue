<template>
  <div id="root">
    <TestAnimateVue/>
    <TestAnimateVue2/>
    <TestAnimateVue3/>
  </div>
</template>

<script>
  import TestAnimateVue from './components/TestAnimate.vue'
  import TestAnimateVue2 from './components/TestAnimate2.vue'
  import TestAnimateVue3 from './components/TestAnimate3.vue'


  export default {
      name:'App',
      components:{TestAnimateVue,TestAnimateVue2,TestAnimateVue3},
      data(){
        return {
          
        }
      },
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
  
  .btn-safe{
    color: #fff;
    background-color: aqua;
    border: rgb(35, 66, 75);
    margin-right: 5px;
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
