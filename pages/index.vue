<template>
  <div class="container">
    <h1>登录</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p class="error" v-if="formError">{{ formError }}</p>
      <p><i>账号 <b>demo</b> 密码 <b>demo</b></i></p>
      <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
      <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
      <button type="submit">Login</button>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">Logout</button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',
      fromFullpath:"/"
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        if(this.$store.state.authUser){
          this.$router.push(this.fromFullpath);//跳转存储的from地址 如果没有 则跳转默认值
        }
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null

      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log("来自",from)
  next(vm => {
    console.log("vm是",vm)
    vm.fromFullpath=from.fullPath
    // 通过 `vm` 访问组件实例,赋值给fullPath,
  })
}
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
