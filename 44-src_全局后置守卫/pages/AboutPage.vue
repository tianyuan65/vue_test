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
        }
    }
</script>

<style>

</style>