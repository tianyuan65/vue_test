<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
      name:'SearchUsers',
      data(){
        return {
          keyWord:''
        }
      },
      methods:{
        searchUsers(){
          // 请求前更新UsersList的数据，isFirst变成false；isLoading变成true；errMsg还是空字符串；users还是空数组，把这些数据汇总到一个对象里
          this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
          // 使用vue-resource插件库的$http函数，直接调用get方法就可以了
          this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            value=>{
              this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:value.data.items})
            },
            error=>{
              console.log('failed to request',error.message);
              // 请求失败后，isLoading依旧false；errMsg的值为错误的信息；users清空，成空数组
              this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
            }
          )
        }
      },
  }
</script>
