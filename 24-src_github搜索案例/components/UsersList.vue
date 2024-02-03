<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <!-- 条件渲染v-show,users.length长度为0，就不展示;遍历users数据，给键值对的键key赋的值是user.login -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <!-- 点击用户头像的话，跳转到user.html_url中 -->
      <a :href="user.html_url" target="_blank">
        <!-- 用户的头像是user.avatar_url -->
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">Welcolme to use!</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">Loading.....</h1>
    <!-- 展示错误 -->
    <h1 v-show="info.errMsg">An error occurred with the request,error on {{info.errMsg}}</h1>
  </div>
</template>

<script>
    export default {
        name:'UsersList',
        data(){
          return {
            // 加一层，把初始化的数据放里，便于批量更新数据
            info:{
              // 是否为初次展示，初始值为true
              isFirst:true,
              // 是否处于加载中，初始值为false，因为刚展示页面啥都没写，也没点search按钮，咋可能在加载
              isLoading:false,
              // 错误信息放这里
              errMsg:'',
              users:[],
            }
          }
        },
        mounted(){
          // this.$bus.$on('updateListData',(isFirst,isLoading,errMsg,items)=>{
          this.$bus.$on('updateListData',dataObj=>{
            console.log('It is UsersList component, got the data:',dataObj);
            // this.isFirst=isFirst  // 更新isFirst
            // this.isLoading=isLoading  // 更新isLoading
            // this.errMsg=errMsg  // 更新errMsg
            // this.users=items  // 在该组件收到数据items，将items保存进数据this.users中
            // 将数据保存到info中，批量替换，但因为没写isFirst，所以到时候只有三个值，所以不想丢了isFirst的话，
            // this.info=dataObj
            // 用更新了的三个值替换掉自己原先的初始值，也留着没修改的那个，合并一下，重名的属性，以dataObj的为主；没有的原来是什么样还是什么样
            this.info={...this.info,...dataObj}
          })
        }
    }
</script>

<style scoped>
  /* .album：注释的意思是：可移除；只是为了演示而添加的 */
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>