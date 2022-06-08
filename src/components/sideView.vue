<template>
  <section>
    <div class="px-4 py-5 border border-3 border-dark bg-white d-none d-md-block">
      <div class="d-grid mb-4">
        <router-link to="/newPost" type="button" class="cus-border-radio btn btn-blue-dark btn-lg
        border-dark border-3 cus-shadow-border cus-border-radio">
          <span class="fw-bold">張貼動態</span>
        </router-link>
      </div>
      <ul class="ps-2">
        <li class="mb-4">
          <router-link :to="`/personalWall/${userData._id}`" class="d-flex align-items-center link-hover">
            <img :src="userData.photo" class="border border-dark border-3 rounded-circle" alt="userAvatar"
            style="height: 50px; width: 50px;">
            <span class="fw-bolder ms-3">{{ userData.name }}</span>
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/followList" class="d-flex align-items-center link-hover">
            <div class="icon-border-box d-flex align-items-center justify-content-center">
              <span class="bi bi-bell fs-4"></span>
            </div>
            <span class="fw-bolder ms-3">追蹤名單</span>
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/likedPosts" class="d-flex align-items-center link-hover">
            <div class="icon-border-box d-flex align-items-center justify-content-center">
              <span class="bi bi-hand-thumbs-up fs-4"></span>
            </div>
            <span class="fw-bolder ms-3">我按讚的文章</span>
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="d-md-none fixed-bottom d-flex border border-3 border-dark cus-border-pill bg-light px-6 py-2 mx-2 mb-2 justify-content-between">
      <li style="height:48px; width:48px;" class="d-flex justify-content-center align-items-center
      border border-3 border-dark cus-border-pill bg-white">
        <a href="#" class="fs-2" @click.prevent="scrollToTop">
          <span class="bi bi-house-door text-dark"></span>
        </a>
      </li>
      <li style="height:48px; width:48px;" class="d-flex justify-content-center align-items-center
      border border-3 border-dark cus-border-pill bg-white">
        <router-link to="/followList" class="fs-2">
          <span class="bi bi-bell text-dark"></span>
        </router-link>
      </li>
      <li style="height:48px; width:48px;" class="d-flex justify-content-center align-items-center
      border border-3 border-dark cus-border-pill bg-white">
        <router-link to="/likedPosts" class="fs-2">
          <span class="bi bi-hand-thumbs-up text-dark"></span>
        </router-link>
      </li>
      <li style="height:48px; width:48px;" class="d-flex justify-content-center align-items-center
      border border-3 border-dark cus-border-pill bg-primary">
        <router-link to="/newPost" class="fs-2">
          <span class="bi bi-plus-lg text-white"></span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  props: ['userData'],
  methods: {
    scrollToTop () {
      window.scroll(0, 0)
    },
    signOut () {
      document.cookie = 'MetaWall=;'
      if (localStorage.userData) {
        localStorage.removeItem('userData')
      }
      const info = {
        icon: 'success',
        title: '帳號已登出，請重新登入'
      }
      emitter.emit('popToast', info)
      this.$router.push('/login/sign_in')
    }
  }
}
</script>
