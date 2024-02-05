<template>
  <div class="container">
    <!-- 真正要展示地直接写在组件标签里了，就不需要通过:listData="food"这种方式传递数据了，同理下面的两个也要删除 -->
    <EntertainmentCategory title="美食">
      <!-- Vue把下面这一行解析成DOM后，不知道往哪儿放 -->
      <!-- img标签往名为center的插槽里放 -->
      <img slot="center" src="https://img1.baidu.com/it/u=4097841643,3109051827&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" alt="">
      <!-- a标签往名为Footer的插槽里放 -->
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </EntertainmentCategory>
    <EntertainmentCategory title="游戏">
      <ul slot="center">
        <!-- 在数据所在组件遍历数据时，就不用listData了，直接在游戏的组件标签里遍历游戏数据 -->
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
      <!-- 写多个也不会覆盖 -->
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </EntertainmentCategory>
    <EntertainmentCategory title="电影">
      <video slot="center" controls src="http://www.baidu.com/link?url=oFgYRA8d0VKF7hKi-oWuKbx-PjgmTrPb7CUN15Qn-ddpdvviGR1D6GHCrekpKWAvXEcGkEURjAr-llqy5p-dGq"></video>
      <!-- v-slot属性只能用在组件的template标签上 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4 class="foot">欢迎影迷前来观看</h4>
      </template>
    </EntertainmentCategory>
  </div>
</template>

<script>
  import EntertainmentCategory from './components/EntertainmentCategory'
  export default {
      name:'App',
      components:{EntertainmentCategory},
      data() {
        return {
          food:['火锅','烧烤','米线','锅包肉'],
          games:['光与夜之恋','未定事件簿','恋与制作人','和平精英'],
          films:['《封神第一部》','《复联4》','《黑豹》','《红海行动》']
        }
      },
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
