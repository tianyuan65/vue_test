<template>
  <div>
    <!-- 插值语法读取$store中的state中的sum属性，注意：这里不写this，但在下面改写还是得写 -->
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <!-- 这是模拟加工复杂情况后展示数据的地方，将加工的数据放在定义的getters配置项里，通过函数的方式加工计算数据，最后通过$store的getters查找加工好的数据 -->
    <h1>当前求和放大10倍后为:{{$store.getters.bigSum}}</h1>
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
          }
        },
        methods:{
          // 简单加减的业务逻辑就没必要特意调用dispatch来实现了，直接在组件当中实现，也就是省略掉了actions步骤
          increment(){
            // this.$store.dispatch('plus',this.selectNum)
            // console.log('NC',this);
            this.$store.commit('PLUS',this.selectNum)
          },
          decrement(){
            // this.$store.dispatch('minus',this.selectNum)
            this.$store.commit('MINUS',this.selectNum)
          },
          incrementOdd(){
            // 这是一种方法，判断写在组件里，但也有第二种方法
            // if (this.$store.state.sum % 2) {
            //   this.$store.dispatch('plus',this.selectNum)
            // }
            this.$store.dispatch('plusOdd',this.selectNum)
          },
          asyncIncrement(){
            // 方法1：在组件当中执行异步操作
            // setTimeout(() => {
            //   this.$store.dispatch('plus',this.selectNum)
            // }, 500);
            this.$store.dispatch('asyncPlus',this.selectNum)
          }
        },
        mounted(){
          console.log('NC',this.$store);  //Store
        }
    }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>