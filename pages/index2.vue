<template>
    <div>
        <h1>我是第二页</h1>
        <p>二二二二</p>
        <nuxt-link to="/">首页</nuxt-link>
    </div>
</template>

<script>
    export default {
        middleware: 'auth'
    }
</script>

<style scoped>

</style>