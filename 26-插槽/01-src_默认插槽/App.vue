<template>
  <div class="container">
    <!-- <EntertainmentCategory title="美食" :listData="food"/> -->
    <!-- 真正要展示地直接写在组件标签里了，就不需要通过:listData="food"这种方式传递数据了，同理下面的两个也要删除 -->
    <EntertainmentCategory title="美食">
      <!-- Vue把下面这一行解析成DOM后，不知道往哪儿放 -->
      <img src="https://img1.baidu.com/it/u=4097841643,3109051827&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" alt="">
    </EntertainmentCategory>
    <EntertainmentCategory title="游戏">
      <ul>
        <!-- 在数据所在组件遍历数据时，就不用listData了，直接在游戏的组件标签里遍历游戏数据 -->
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
    </EntertainmentCategory>
    <EntertainmentCategory title="电影">
      <video controls src="http://www.baidu.com/link?url=oFgYRA8d0VKF7hKi-oWuKbx-PjgmTrPb7CUN15Qn-ddpdvviGR1D6GHCrekpKWAvXEcGkEURjAr-llqy5p-dGq"></video>
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
  .container{
    display: flex;
    justify-content: space-around;
  }
  img{
    width:100%
  }
  video{
    width: 100%;
  }
</style>
