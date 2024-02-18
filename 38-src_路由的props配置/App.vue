<template>
  <div>
    <div class="row">
      <BannerPart/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始HTML文件当中，使用a标签来实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签，实现路由的切换，并在展示时转为a标签;active-class属性，点击哪个就把高亮的效果加在哪个标签上 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- router-view，路由器视图标签，指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerPart from './components/BannerPart.vue'

  export default {
    name:'App',
    components:{BannerPart}
  }
</script>

<style>
  
</style>