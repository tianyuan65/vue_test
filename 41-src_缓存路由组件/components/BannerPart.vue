<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2><br>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="go">test the go function</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'BannerPart',
        methods:{
            back(){
                this.$router.back()
            },
            forward(){
                this.$router.forward()
            },
            go(){
                // go方法可以传递数值作为参数，正数则连续前进n步，负数则连续后退n步
                this.$router.go(1)
            }
        },
        mounted(){
            console.log(this.$router);
        }
    }
</script>

<style>

</style>