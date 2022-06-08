<template>
  <form class="w-100">
    <div class="input-group">
      <input type="text" class="border-dark border-2 form-control text-azeret" placeholder="暱稱"
      aria-label="nickname" v-model="data.name">
    </div>
    <div class="input-group mt-3">
      <input type="text" class="border-dark border-2 form-control text-azeret" placeholder="Email"
      aria-label="email" v-model="data.email">
    </div>
    <div class="input-group mt-3">
      <input type="password" class="border-dark border-2 form-control text-azeret" placeholder="Password"
      aria-label="password" v-model="data.password">
    </div>
    <div class="input-group mt-3">
      <input type="password" class="border-dark border-2 form-control text-azeret" placeholder="Confirm Password"
      aria-label="confirmPassword" v-model="data.confirmPassword">
    </div>
    <div class="w-100 mb-3 mt-5">
      <button @click.prevent="sign_up"
      class="btn btn-primary text-azeret fw-bold btn-blue-dark border-2 w-100">
        註冊
        <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></div>
      </button>
    </div>
  </form>
  <router-link to="/login/sign_in" class="text-azeret text-dark">登入</router-link>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  data () {
    return {
      isLoading: false,
      url: process.env.VUE_APP_API,
      data: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    sign_up () {
      this.isLoading = true
      if (this.data.name.trim() !== '' && this.data.email.trim() !== '' && this.data.password.trim() !== '' && this.data.confirmPassword.trim() !== '') {
        this.$http.post(`${this.url}/users/sign_up`, this.data)
          .then(() => {
            const info = {
              icon: 'success',
              title: '註冊成功，請重新登入'
            }
            emitter.emit('popToast', info)
            this.isLoading = false
            this.$router.push('/login/sign_in')
          })
          .catch(err => {
            const info = {
              icon: 'warning',
              title: err.response.data.message
            }
            emitter.emit('popToast', info)
            this.isLoading = false
          })
      } else {
        const info = {
          icon: 'warning',
          title: '註冊訊息未填寫完整'
        }
        emitter.emit('popToast', info)
        this.isLoading = false
      }
    }
  }
}
</script>
