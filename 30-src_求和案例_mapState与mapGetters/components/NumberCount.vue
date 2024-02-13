<template>
  <div>
    <!-- 插值语法读取$store中的state中的sum属性，注意：这里不写this，但在下面改写还是得写 -->
    <h1>当前求和为:{{sum}}</h1>
    <!-- 这是模拟加工复杂情况后展示数据的地方，将加工的数据放在定义的getters配置项里，通过函数的方式加工计算数据，最后通过$store的getters查找加工好的数据 -->
    <h3>当前求和放大10倍后为:{{bigSum}}</h3>
    <h3>{{staff}}是{{firm}}的员工</h3>
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
  // 从vuex引入mapState映射状态的和mapGetters
  import {mapState,mapGetters} from 'vuex'
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
      computed:{
        // 靠程序员自己亲自写计算属性：sum、staff、firm
        // sum(){
        //   return this.$store.state.sum
        // },
        // staff(){
        //   return this.$store.state.staff
        // },
        // firm(){
        //   return this.$store.state.firm
        // },

        // 借助mapState生成计算属性，从state中读取数据（对象写法：用扩展运算符，将状态映射依次展开到计算属性当中）
        // ...mapState({sum:'sum',staff:'staff',firm:'firm'}),
        // 借助mapState生成计算属性，从state中读取数据（数组写法：也是用扩展运算符麻酱状态映射到计算属性中）
        // 注意点：若想用数组写法实现，就要保证生成的计算属性名和$store.state里读取出来的数据名一致
        ...mapState(['sum','staff','firm']),

        // bigSum(){
        //   return this.$store.getters.bigSum
        // }
        // 借助mapGetters生成计算属性，从getters中读取数据，对象写法
        ...mapGetters({bigSum:'bigSum'}),
        // 借助mapGetters生成计算属性，从getters中读取数据，数组写法
        ...mapGetters(['bigSum'])
      },
      mounted(){
        // console.log('NC',this.$store);  //Store
        // mapState中传入一个对象，将this.$store.state里的数据名作为配置，对象里是一组一组的键值对，值是去state里要找的状态名
        const x= mapState({sum:'sum',staff:'staff',firm:'firm'})
        console.log('x:',x);
      }
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>