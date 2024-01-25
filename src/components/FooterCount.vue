<template>
  <!-- 配置v-show属性，若total值等于0时隐藏底部，但凡有一个事项则展示底部 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 各自创建函数法 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 双向数据绑定法 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'FooterCount',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
      // 全部事项的统计
      total(){
        return this.todos.length
      },
      doneTotal(){
        // 将统计结果返回
        return this.todos.reduce((pre,todo)=>{
          // 若current.done为true，pre就+1，否则+0
          return pre + (todo.done ? 1 : 0)
        },0)
      },
      // isAll的简写方式，只能调用get函数，不能调用set函数，双向数据绑定的话需要写成完整版
      // isAll(){
      //   // 若已完成事项数量与全部事项数量相等，则运行该函数，并让选项框勾上，且总数要大于0，等于0的时候就不勾上了
      //   return this.doneTotal===this.total && this.total>0
      // }
      isAll:{
        get(){
          return this.doneTotal===this.total && this.total>0
        },
        set(value){
          // 发生变化就调用该函数，并把value作为参数传进去，有一个方便的优点就是，取消全选时，原先勾选上todoitem的会取消勾选，双向数据绑定嘛，这么写就不用配置methods了
          this.checkAllTodo(value)
          // console.log(value);  //全选上就是true，没全选就是false
        }
      }
    },
    methods:{
      // checkAll(event){
      //   // 调用从App组件来的checkAllTodo函数，传参event.target.checked
      //   this.checkAllTodo(event.target.checked)
      //   // console.log(event.target.checked);  //勾上则为true，没勾上是false
      // },
      clearDone(){
        if(confirm('你来真的？')){
          this.clearAllTodo()
        }
      }
    }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>