<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 二级路由的路由链接必须把父路由的路径也写上 -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 占位，用于展示组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
      name:'HomePage',
      // beforeDestroy(){
      //   console.log('Home component will be ruined');
      // },
      // mounted(){
      //   console.log('Home component is mounted');
      // }
    }
</script>

