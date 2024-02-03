<template>
  <div class="container">
    <SearchUsers/>
    <UsersList/>
  </div>
</template>

<script>
  import SearchUsers from './components/SearchUsers.vue'
  import UsersList from './components/UsersList.vue'
  export default {
      name:'App',
      components:{SearchUsers,UsersList}
  }
</script>


