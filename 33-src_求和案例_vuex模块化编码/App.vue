<template>
  <div>
    <NumberCount/><hr>
    <PersonList/>
  </div>
</template>

<script>
  import NumberCount from './components/NumberCount.vue'
  import PersonList from './components/PersonList.vue'
  export default {
    name:'App',
    components:{NumberCount,PersonList}
  }
</script>

<style>
  
</style>