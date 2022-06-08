<template>
  <div class="col-md-7">
    <div
      class="border border-2 border-dark py-3 position-relative bg-white mb-3"
    >
      <h3 class="text-center mb-0 fw-bold">修改個人資料</h3>
      <div
        class="
          position-absolute
          border
          py-3
          border-dark border-2
          w-100
          bg-white
        "
        style="z-index: -1; top: 4px; left: -6px"
      >
        <h3 class="text-center mb-0 fw-bold">修改個人資料</h3>
      </div>
    </div>
    <div class="mt-6">
      <ul class="ms-3 d-flex">
        <li
          class="
            py-2
            px-4
            border border-2 border-dark border-bottom-0
            cus-tag-border-radio
            bg-white
          "
        >
          <router-link to="/editProfile" class="text-dark"> 暱稱修改 </router-link>
        </li>
        <li
          class="
            py-2
            px-4
            border border-2 border-dark border-bottom-0
            cus-tag-border-radio
            bg-dark
          "
        >
          <router-link to="/changePassword" class="text-white"> 重設密碼 </router-link>
        </li>
      </ul>
      <div class="px-md-3 px-lg-10 border border-2 border-dark bg-white cus-border-radio">
        <div class="d-flex align-items-center flex-column py-5">
          <form>
            <div class="input-group mb-3">
              <div class="d-flex flex-column">
                <label for="newPassword" class="mb-1">輸入新密碼</label>
                <input
                  type="password"
                  placeholder="請輸入新密碼"
                  id="newPassword"
                  class="
                    py-2
                    form-control
                    no-border-radius
                    border-2 border-dark
                    text-azeret
                  "
                  v-model="newPassword"
                />
              </div>
            </div>
            <div class="input-group mb-5">
              <div class="d-flex flex-column">
                <label for="confirmPassword" class="mb-1">再次輸入</label>
                <input
                  type="password"
                  placeholder="再次輸入新密碼"
                  id="confirmPassword"
                  class="
                    py-2
                    form-control
                    no-border-radius
                    border-2 border-dark
                    text-azeret
                  "
                  v-model="confirmNewPassword"
                />
              </div>
            </div>
            <div class="w-100">
              <button
                v-if="newPassword.trim() === '' || confirmNewPassword.trim() === ''"
                disabled
                class="
                  btn
                  text-white text-azeret
                  fw-bold
                  cus-disabled-button
                  border-2
                  w-100
                "
              >
                重設密碼
              </button>
              <button
                v-else
                class="
                  btn
                  text-azeret
                  fw-bold
                  btn-blue-dark
                  border-2
                  w-100
                "
                @click.prevent="changePassword"
              >
                重設密碼
                <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  data () {
    return {
      isLoading: false,
      url: process.env.VUE_APP_API,
      newPassword: '',
      confirmNewPassword: '',
      userData: {}
    }
  },
  methods: {
    changePassword () {
      this.isLoading = true
      this.$http.post(`${this.url}/users/updatePassword`, {
        password: this.newPassword,
        confirmPassword: this.confirmNewPassword
      })
        .then(() => {
          const info = {
            icon: 'success',
            title: '更新密碼成功'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
        .catch(err => {
          const info = {
            icon: 'warning',
            title: err.response.data.message
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    }
  },
  mounted () {
    if (localStorage.userData) {
      this.userData = JSON.parse(localStorage.userData)
    }
  }
}
</script>
