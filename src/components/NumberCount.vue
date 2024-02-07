<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <!-- 或方法2：给外层select标签双向绑定的selectNum，进行强制类型转换，将字符串转为number -->
    <select v-model.number="selectNum">
      <!-- 方法1：给value单向绑定，就意味着双引号后面的就是js表达式 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="asyncIncrement">等一等再加</button>
  </div>
</template>

<script>
    export default {
        name:'NumberCount',
        data(){
          return {
            selectNum:1,  //用户所选择的要加的数值
            sum:0  //当前和
          }
        },
        methods:{
          increment(){
            this.sum += this.selectNum
            console.log(this);
          },
          decrement(){
            this.sum -= this.selectNum
          },
          incrementOdd(){
            // 奇数时才可以进入此判断
            if(this.sum % 2){
              this.sum += this.selectNum
            }
          },
          asyncIncrement(){
            setTimeout(() => {
              this.sum += this.selectNum
            }, 500);
          }
        }
    }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>