<template>
  <headerView class="mb-6" :user-data="userData" />
    <section>
    <div class="container px-lg">
      <div class="row">
        <router-view v-if="isLogin" />
        <div class="col-md-5">
          <sideView :user-data="userData" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import headerView from '@/components/headerView.vue'
import sideView from '@/components/sideView.vue'
import emitter from '@/libs/emitter.js'

export default {
  components: {
    headerView,
    sideView
  },
  data () {
    return {
      url: process.env.VUE_APP_API,
      isLogin: false,
      token: document.cookie.replace(/(?:(?:^|.*;\s*)MetaWall\s*\=\s*([^;]*).*$)|^.*$/, '$1'), // eslint-disable-line
      userData: {}
    }
  },
  methods: {
    checkSignIn () {
      this.takeAuthorization()
      if (this.token) {
        this.$http.get(`${this.url}/users`)
          .then(res => {
            this.isLogin = true
            this.$router.push('/postWall')
          })
          .catch(err => {
            this.isLogin = false
            const info = {
              icon: 'error',
              title: err.response.data.message
            }
            emitter.emit('popToast', info)
            this.$router.push('/login/sign_in')
          })
      }
    },
    takeAuthorization () {
      this.$http.defaults.headers.common['Authorization'] = `Bearer ${this.token}` // eslint-disable-line
    },
    getUserProfile () {
      this.$http.get(`${this.url}/users/profile`)
        .then(res => {
          this.userData = res.data.data
          localStorage.setItem('userData', JSON.stringify(this.userData))
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '無法取得使用者資料，請刷新網頁或重新登入'
          }
          emitter.emit('popToast', info)
          this.$router.push('/login/sign_in')
        })
    }
  },
  provide () {
    return {
      token: `Bearer ${this.token}`,
      authorization: this.takeAuthorization()
    }
  },
  mounted () {
    this.checkSignIn()
    this.getUserProfile()
  }
}
</script>
