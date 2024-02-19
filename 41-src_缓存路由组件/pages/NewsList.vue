<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'NewsList',
        beforeDestroy(){
            console.log('NewsList component will be destroy');
        }
    }
</script>

<style>

</style>