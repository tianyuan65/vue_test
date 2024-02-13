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
    
    <!-- 这是mapMutations使用对象方法时的写法，给事件函数传参就行 -->
    <button @click="increment(selectNum)">+</button>
    <button @click="decrement(selectNum)">-</button>
    <!-- mapMutations使用数组方法时，需要事件函数名和mutations里的函数名保持一致 -->
    <!-- <button @click="PLUS(selectNum)">+</button>
    <button @click="MINUS(selectNum)">-</button> -->
    <!-- 这是mapActions的对象使用方法，记得要给事件函数传参 -->
    <button @click="incrementOdd(selectNum)">当前求和为奇数再加</button>
    <button @click="asyncIncrement(selectNum)">等一等再加</button>
    <!-- 这是mapActions的函数组使用方法，事件函数名和actions中的函数名要保持一致，记得给事件函数传参 -->
    <!-- <button @click="plusOdd(selectNum)">当前求和为奇数再加</button>
    <button @click="asyncPlus(selectNum)">等一等再加</button> -->
  </div>
</template>

<script>
  // 从vuex引入mapState映射状态的和mapGetters
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
      name:'NumberCount',
      data(){
        return {
          selectNum:1,  //用户所选择的要加的数值
        }
      },
      methods:{
        // 程序员亲自写方法--联系mutations
        // 简单加减的业务逻辑就没必要特意调用dispatch来实现了，直接在组件当中实现，也就是省略掉了actions步骤
        // increment(){
        //   this.$store.commit('PLUS',this.selectNum)
        // },
        // decrement(){
        //   this.$store.commit('MINUS',this.selectNum)
        // },
        // 对象写法，借助mapMutations，生成对应的方法，方法中会调用commit去联系mutations
        ...mapMutations({increment:'PLUS',decrement:'MINUS'}),
        // 数组写法，借助mapMutations，生成对应的方法，方法中会调用commit去联系mutations
        // 但数组写法需要保证函数名和从mutations里读取的函数名一致，所以与click事件绑定的函数名需要改，对象方法不用
        // ...mapMutations(['PLUS','MINUS']),

        // 程序员亲自写方法--联系actions
        // incrementOdd(){
        //   this.$store.dispatch('plusOdd',this.selectNum)
        // },
        // asyncIncrement(){
        //   this.$store.dispatch('asyncPlus',this.selectNum)
        // }
        // 对象写法，借助mapActions，生成对应的方法，方法中调用dispatch去联系actions，然后就是按流程来，记得给时间函数传参selectNum
        ...mapActions({incrementOdd:'plusOdd',asyncIncrement:'asyncPlus'}),
        // 数组写法，借助mapActions，生成对应的方法，方法中调用dispatch去联系actions，然后就是按流程来，记得给时间函数传参selectNum
        // ...mapActions(['plusOdd','asyncPlus'])
      },
      computed:{
        // 借助mapState生成计算属性，从state中读取数据（对象写法：用扩展运算符，将状态映射依次展开到计算属性当中）
        // ...mapState({sum:'sum',staff:'staff',firm:'firm'}),
        // 借助mapState生成计算属性，从state中读取数据（数组写法：也是用扩展运算符麻酱状态映射到计算属性中）
        // 注意点：若想用数组写法实现，就要保证生成的计算属性名和$store.state里读取出来的数据名一致
        ...mapState(['sum','staff','firm']),

        // 借助mapGetters生成计算属性，从getters中读取数据，对象写法
        // ...mapGetters({bigSum:'bigSum'}),
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