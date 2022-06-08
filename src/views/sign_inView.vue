<template>
  <form class="w-100">
    <div class="input-group mb-3">
      <input type="text" class="border-dark border-2 form-control text-azeret" placeholder="Email"
      aria-label="email" v-model="user.email" required autofocus>
    </div>
    <div class="input-group mb-5">
      <input type="password" class="border-dark border-2 form-control text-azeret" placeholder="Password"
      aria-label="password" v-model="user.password" required>
    </div>
    <div class="w-100 mb-3">
      <button class="btn btn-primary text-azeret btn-blue-dark fw-bold border-2 w-100"
      @click.prevent="sign_in">
        登入
        <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></div>
        </button>
    </div>
  </form>
  <router-link to="/login/sign_up" class="text-azeret text-dark">註冊帳號</router-link>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  data () {
    return {
      isLoading: false,
      url: process.env.VUE_APP_API,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    sign_in () {
      this.isLoading = true
      const api = `${this.url}/users/sign_in`
      this.$http.post(api, this.user).then(res => {
        const token = res.data.user.token
        document.cookie = `MetaWall=${token};`
        this.isLoading = false
        this.$router.push('/')
      }).catch((err) => {
        const info = {
          icon: 'error',
          title: err.response.data.message
        }
        emitter.emit('popToast', info)
        this.isLoading = false
      })
    }
  }
}
</script>
