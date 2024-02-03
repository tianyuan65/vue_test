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
  import axios from 'axios'
  export default {
      name:'SearchUsers',
      data(){
        return {
          keyWord:''
        }
      },
      methods:{
        searchUsers(){
          // 请求前更新UsersList的数据，isFirst变成false；isLoading变成true；errMsg还是空字符串；users还是空数组
          // this.$bus.$emit('updateListData',false,true,'',[])
          this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
          axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            value=>{
              // console.log('request succeed',value.data.items);
              // this.$bus.$emit('getUsers',value.data.items)
              // 请求成功后，isFirst还是false；isLoading又变为false，errMsg依然是空字符串；users里装数据，不再是空数组
              // this.$bus.$emit('updateListData',false,false,'',value.data.items)
              // 请求成功后，isFirst的值只有在刚渲染页面或刷新页面时才是true，之后一直是false，所以在此不专门写isFirst了；isLoading值又变为false；errMsg依旧空；users填入数据
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
