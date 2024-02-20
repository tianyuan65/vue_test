<template>
  <div>我是About的内容</div>
</template>

<script>
    export default {
        name:'AboutPage',
        // beforeDestroy(){
        //   console.log('About component will be ruined');
        // },
        mounted(){
          console.log('About component is mounted',this.$route);
        },
        // 组件内路由守卫，通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){
          console.log('About-beforeRouteEnter',to,from);
          if (to.meta.isAuth) {  //判断是否需要鉴权，这样就不用一个一个的写路径来判断了
              // 则再判断localStorage的name属性值是否为Osborn，是则放行
              if (localStorage.getItem('name')==='Osborn') {
                // 放行，不写放行，无法进入当前组件，当然也无法呈现当前组件
                next()
              }else{
                  alert('Sorry, this is Osborn’s message area')
              }
          } else {
              // 若不是去NewsList或MessageList组件，而是要去别的组件，比如About，也放行
              next()
          }
        },
        // 组件内路由守卫，离开该组件时被调用
        beforeRouteLeave(to,from,next){
          console.log('About-beforeRouteLeave',to,from);
          // 放行，不写放行，无法离开当前组件，当然也无法呈现即将跳转的路由组件
          next()
        }
    }
</script>

<style>

</style>