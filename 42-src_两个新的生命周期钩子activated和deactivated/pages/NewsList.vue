<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'NewsList',
        data(){
            return{
                opacity: 1
            }
        },
        // mounted(){
        //     console.log('mounted function excuted',this);  //mounted function excuted,VueComponent
        //     this.timer=setInterval(() => {
        //         this.opacity-=0.01
        //         if(this.opacity<=0) this.opacity=1
        //     }, 16);
        // },
        // beforeDestroy(){
        //     console.log('NewsList component will be destroy');
        //     // 组件销毁前，清空定时器
        //     clearInterval(this.timer)
        // },
        // 激活hook，需要当前组件从无到有时调用该钩子
        activated(){
            console.log('NewsList component is activated');
            this.timer=setInterval(() => {
                this.opacity-=0.01
                if(this.opacity<=0) this.opacity=1
            }, 16);
        },
        // 取消激活/失活hook，需要当前组件失效时调用该钩子
        deactivated(){
            console.log('activation of NewsList component is cancelled');
            clearInterval(this.timer)
        }
    }
</script>

<style>

</style>