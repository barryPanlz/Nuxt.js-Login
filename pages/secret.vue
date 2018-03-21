<template>
  <div>
    <h1>第一页</h1>
    <p>未登录访问会发生错误跳转</p>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth'//拦截中间件
}
</script>
