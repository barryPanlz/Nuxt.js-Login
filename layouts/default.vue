<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-if="!$store.state.authUser">
        <nuxt-link to="/">登录</nuxt-link>
      </el-col>
      <el-col :span="6" v-else>
        <button @click="logout">退出</button>
      </el-col>
      <el-col :span="6">
        <nuxt-link to="/secret">首页</nuxt-link>
      </el-col>
      <el-col :span="6">
        <nuxt-link to="/index2">第二页</nuxt-link>
      </el-col>
      
    </el-row>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods:{
    async logout() {
      try {
        await this.$store.dispatch('logout')
        this.$router.push('/');
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
  .nuxt-link-exact-active {
    color: brown
  }
</style>
