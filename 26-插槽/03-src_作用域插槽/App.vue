<template>
  <div class="container">
    <!-- App是EntertainmentCategory组件的使用者 -->
    <EntertainmentCategory title="游戏">
      <!-- 必须用template标签将插入插槽里的结构内容包裹起来，并添加scope属性，再起个名，这个名称可以随意定 -->
      <template scope="play">
        <!-- 这个叫play的带来的是一个对象，对象里有个属性名叫games，games的值就是插槽的使用者App需要的数据 -->
        <!-- {{play.games}} -->
        <ul>
          <li v-for="(game,index) in play.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </EntertainmentCategory>

    <EntertainmentCategory title="游戏">
      <!-- <template scope="play"> -->
      <!-- 解构赋值出games -->
      <template scope={games}>
        <ol>
          <!-- 根据上面解构赋值，在这里遍历的时候可以直接写games，不用xxx.games -->
          <li style="color:#bfa" v-for="(game,index) in games" :key="index">{{game}}</li>
        </ol>
      </template>
    </EntertainmentCategory>

    <EntertainmentCategory title="游戏">
      <!-- <template scope="play"> -->
      <!-- 新API，与scope={games}这种写法的作用一样 -->
      <template slot-scope={games}>
        <h4 v-for="(game,index) in games" :key="index">{{game}}</h4>
      </template>
    </EntertainmentCategory>
    <!-- 在App里要使用EntertainmentCategory组件，目前已知EntertainmentCategory组件里有个插槽，写template标签意思是，要往插槽里放东西，插槽里里放什么东西，得根据scope属性的属性值(就是那个数据)来决定，这个数据从定义插槽的组件来 -->
    <!-- 插槽使用者可以决定把什么样的结构放进插槽里，需要数据是用标签的形式传递，scope接收即可 -->
    <!-- 数据是在定义插槽的组件里，但用数据生成的结构是由插槽的使用者决定的，组件标签里写什么结构就在插槽里展示什么 -->
  </div>
</template>

<script>
  import EntertainmentCategory from './components/EntertainmentCategory'
  export default {
      name:'App',
      components:{EntertainmentCategory},
  }
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  img{
    width:100%
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>
