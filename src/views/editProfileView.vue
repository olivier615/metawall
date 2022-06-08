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
            bg-dark
          "
        >
          <router-link to="/editProfile" class="text-white"> 暱稱修改 </router-link>
        </li>
        <li
          class="
            py-2
            px-4
            border border-2 border-dark border-bottom-0
            cus-tag-border-radio
            bg-white
          "
        >
          <router-link to="/changePassword" class="text-dark"> 重設密碼 </router-link>
        </li>
      </ul>
      <div class="px-md-3 px-lg-10 border border-2 border-dark bg-white cus-border-radio">
        <div class="d-flex align-items-center flex-column py-5">
          <img
            :src="imgUrl ? imgUrl : userData.photo"
            alt="userAvatar"
            class="img-fluid border border-dark border-3 rounded-circle mb-3"
            style="height: 107px; width: 107px"
          />
          <div class="mb-3">
            <div class="input-group mb-2">
              <label class="btn btn-dark cus-non-radio">
                <input
                  ref="upload_img"
                  style="display: none"
                  type="file"
                  @change="uploadImage"
                />
                上傳大頭照
                <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></div>
              </label>
            </div>
          </div>
          <form>
            <div class="input-group mb-3">
              <div class="d-flex flex-column">
                <label for="nickname" class="mb-1">暱稱</label>
                <input
                  type="text"
                  placeholder="暱稱"
                  id="nickname"
                  class="
                    py-2
                    form-control
                    no-border-radius
                    border-2 border-dark
                    text-azeret
                  "
                  v-model="userData.name"
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="d-flex flex-column">
                <span class="mb-1">性別</span>
                <div class="d-flex">
                  <div class="form-check me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      :checked="userData.gender === 'male'"
                      v-model="userData.gender"
                    />
                    <label class="form-check-label" for="male"> 男性 </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      :checked="userData.gender === 'female'"
                      v-model="userData.gender"
                    />
                    <label class="form-check-label" for="female"> 女性 </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="d-flex flex-column mb-3">
              <span class="text-warning"
                >1.圖片寬高比必需為 1:1，請重新輸入</span
              >
              <span class="text-warning"
                >2. 解析度寬度至少 300像素以上，請重新輸入</span
              >
            </div> -->
            <div class="w-100">
              <button @click.prevent="updateProfile"
                class="
                  btn btn-primary
                  text-azeret
                  fw-bold
                  btn-blue-dark
                  border-2
                  w-100
                "
              >
                送出更新
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
      fileInput: null,
      url: process.env.VUE_APP_API,
      userData: {},
      imgUrl: ''
    }
  },
  methods: {
    updateProfile () {
      this.isLoading = true
      if (this.imgUrl !== this.userData.photo) {
        this.userData.photo = this.imgUrl
      }
      this.$http.patch(`${this.url}/users/profile`, this.userData)
        .then(res => {
          this.userData = res.data.data
          localStorage.setItem('userData', JSON.stringify(this.userData))
          this.userData = JSON.parse(localStorage.userData)
          const info = {
            icon: 'success',
            title: '個人訊息更新成功'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
        .catch(err => {
          const info = {
            icon: 'error',
            title: err.response.data.message
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    uploadImage () {
      this.isLoading = true
      const file = this.fileInput.files[0]
      if (!file) {
        const info = {
          icon: 'warning',
          title: '未選擇圖片檔案'
        }
        emitter.emit('popToast', info)
        this.isLoading = false
        return
      }
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' &&
      file.type !== 'image/jpg' && file.type !== 'image/gif') {
        const info = {
          icon: 'warning',
          title: '檔案類別僅限 jpg, jpeg, png 或 gif'
        }
        emitter.emit('popToast', info)
        this.isLoading = false
        return
      }
      if (file.size > 2 * 1024 * 1024) {
        const info = {
          icon: 'warning',
          title: '上傳檔案須小於 2 MB'
        }
        emitter.emit('popToast', info)
        this.isLoading = false
        return
      }
      const formData = new FormData()
      formData.append('image', file)
      this.$http.post(`${this.url}/upload?type=avatar`, formData)
        .then(res => {
          this.imgUrl = res.data.imgUrl
          this.isLoading = false
        })
        .catch((err) => {
          const info = {
            icon: 'error',
            title: err.response.data.message
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    }
  },
  mounted () {
    this.fileInput = this.$refs.upload_img
    if (localStorage.userData) {
      this.userData = JSON.parse(localStorage.userData)
    }
  }
}
</script>
