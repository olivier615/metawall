<template>
  <div class="col-md-7">
    <div class="border border-2 border-dark py-3 position-relative bg-white mb-3">
      <h3 class="text-center mb-0 fw-bold">
        追蹤名單
        <div v-if="isLoading" class="spinner-border" role="status"></div>
      </h3>
      <div
          class="position-absolute border py-3 border-dark border-2 w-100 bg-white"
          style="z-index: -1; top: 4px; left: -6px"
        >
        <h3 class="text-center mb-0 fw-bold">追蹤名單</h3>
      </div>
    </div>
    <ul class="">
      <li class="mb-3" v-if="userData.following?.length === 0">
        <div class="card border-2 border-dark cus-border-radio cus-shadow-bottom">
          <div class="px-3 py-2 border-bottom border-2 border-dark">
            <div class="d-flex my-1">
              <div class="cus-dot cus-dot-bg-pink"></div>
              <div class="cus-dot cus-dot-bg-yellow"></div>
              <div class="cus-dot cus-dot-bg-green"></div>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="d-flex align-items-center justify-content-center">
                <p class="card-title text-secondary">你還沒有追蹤其他使用者，快去看看大家的動態吧</p>
            </div>
          </div>
        </div>
      </li>
      <li class="p-3 mb-3 d-flex w-100 bg-white border border-2 border-dark cus-border-radio cus-shadow-border"
      v-else v-for="follow in userData.following" :key="follow.user">
        <div v-if="isLoading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status"></div>
        </div>
        <img v-else :src="follow.user.photo" alt="userAvatar" class="img-fluid rounded-circle"
        style="height: 40px; width: 40px;">
        <div class="ms-3 d-flex flex-column w-100">
          <router-link :to="`/personalWall/${follow.user._id}`" class="card-title mb-0 fw-bold name-link">{{ follow.user.name }}</router-link>
          <div class="d-flex justify-content-between w-100">
            <span class="text-secondary cus-fs-sm">
              追蹤時間: {{ new Date(follow.createdAt).toLocaleString() }}
            </span>
            <span class="d-md-block d-none">
              您已追蹤 {{ Math.floor(Math.abs(new Date() - new Date(follow.createdAt)) / (1000 * 3600 * 24)) + 1 }} 天！
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      url: process.env.VUE_APP_API,
      userData: {}
    }
  },
  methods: {
    getUserData () {
      this.isLoading = true
      this.$http.get(`${this.url}/posts/user/${this.userData._id}`)
        .then(res => {
          this.userData = res.data.userData
          this.getFollowingList(this.userData.following)
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    getFollowingList (following) {
      this.isLoading = true
      following.forEach((item, i) => {
        this.$http.get(`${this.url}/posts/user/${item.user}`)
          .then(res => {
            this.userData.following[i].user = res.data.userData
            this.isLoading = false
          })
          .catch(() => {
            this.isLoading = false
          })
      })
    }
  },
  mounted () {
    if (localStorage.userData) {
      this.userData = JSON.parse(localStorage.userData)
    }
    this.getUserData()
  }
}
</script>
