<template>
  <section>
    <nav class="mb-4 navbar navbar-expand-lg navbar-light border-bottom border-3 border-dark bg-white">
      <div class="container px-lg">
        <h1 class="text-paytone">
          <router-link to="/postWall" class="navbar-brand fs-1 fw-bolder">MetaWall</router-link>
        </h1>
        <div class="d-flex">
          <div class="nav-item dropdown">
            <div class="nav-link dropdown-toggle d-flex align-items-center pe-0"
              id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="userData.photo" alt="userAvatar" class="head d-block me-2 border border-dark border-3 rounded-circle"
              style="height: 30px; width: 30px;">
              <a href="#" class="border-bottom p-0 text-black text-azeret fw-bold">Member</a>
            </div>
            <ul class="dropdown-menu rounded-0 p-0 text-center" aria-labelledby="navbarDropdown">
              <li>
                <router-link :to="`/personalWall/${userData._id}`" class="dropdown-item py-2 border-bottom">
                  我的貼文牆
                </router-link>
              </li>
              <li>
                <router-link to="/editProfile" class="dropdown-item py-2 border-bottom">
                  修改個人資料
                </router-link>
              </li>
              <li>
                <a class="dropdown-item py-2 link-pointer"
                @click.prevent="signOut">
                  登出
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  props: ['userData'],
  methods: {
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
