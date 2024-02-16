<template>
  <div>我是HomePage</div>
</template>

<script>
    export default {
        name:'HomePage',
        beforeDestroy(){
          console.log('Home component will be ruined');
        },
        mounted(){
          console.log('Home component is mounted');
        }
    }
</script>

<style>

</style>