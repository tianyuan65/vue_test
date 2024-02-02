<template>
  <div>
    <button @click="getStudentInfo">get student information</button>
    <button @click="getCarInfo">get car information</button>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name:'App',
      methods:{
        getStudentInfo(){
          // 找端口号为8080的代理服务器要数据，前缀要紧跟端口号，后面该怎么写怎么写
          axios.get('http://localhost:8080/api/students').then(
            response=>{
              console.log('request succeed',response.data);
            },
            error=>{
              console.warn('failed to request',error.message);
            }
          )
        },
        getCarInfo(){
          axios.get('http://localhost:8080/demo/cars').then(
            response=>{
              console.log('request succeed',response.data);
            },
            error=>{
              console.log('failed to request',error.message);
            }
          )
        }
      }
  }
</script>

