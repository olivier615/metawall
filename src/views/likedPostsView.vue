<template>
  <div class="col-md-7">
    <div class="border border-2 border-dark py-3 position-relative bg-white mb-3">
      <h3 class="text-center mb-0 fw-bold">我按讚的貼文
        <div v-if="isLoading" class="spinner-border" role="status"></div>
      </h3>
      <div
          class="position-absolute border py-3 border-dark border-2 w-100 bg-white"
          style="z-index: -1; top: 4px; left: -6px"
        >
        <h3 class="text-center mb-0 fw-bold">我按讚的貼文</h3>
      </div>
    </div>
    <ul class="">
      <li class="p-md-3 p-2 mb-3 d-flex bg-white border border-2 border-dark cus-border-radio cus-shadow-border justify-content-between"
      v-for="post in likeList" :key="post._id">
        <div class="d-flex justify-content-center align-items-center">
          <img :src="post.user.photo" alt="userAvatar" class="img-fluid rounded-circle"
          style="height: 40px; width: 40px;">
          <div class="ms-3 d-flex flex-column">
            <router-link :to="`/personalWall/${post.user._id}`" class="card-title mb-0 fw-bold name-link">{{ post.user.name }}</router-link>
            <span class="d-none d-md-block text-secondary cus-fs-sm">發文時間： {{ new Date(post.createdAt).toLocaleString() }}</span>
            <span class="d-block d-md-none text-secondary cus-fs-sm">{{ new Date(post.createdAt).toLocaleString() }}</span>
          </div>
        </div>
        <div class="">
          <ul class="d-flex">
            <li class="me-3 me-md-4">
              <a href="#" @click.prevent="dislikePost(post)">
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <span class="bi bi-hand-thumbs-up fs-5 text-primary"></span>
                  <span class="fw-bolder text-dark cus-fs-sm">取消</span>
                </div>
              </a>
            </li>
            <li class="me-3 me-md-4">
              <router-link :to="`/singlePost/${post._id}`">
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <span class="bi bi-arrow-right-circle fs-5 text-dark"></span>
                  <span class="fw-bolder text-dark cus-fs-sm">查看</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      isLoading: false,
      url: process.env.VUE_APP_API,
      likeList: []
    }
  },
  methods: {
    getLikeLIst () {
      this.isLoading = true
      this.$http.get(`${this.url}/users/likeList`)
        .then(res => {
          this.likeList = res.data.likeList
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    dislikePost (post) {
      this.isLoading = true
      this.$http.delete(`${this.url}/posts/${post._id}/dislikes`)
        .then(() => {
          this.getLikeLIst()
          const info = {
            icon: 'success',
            title: '已取消貼文點讚'
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
    }
  },
  mounted () {
    this.getLikeLIst()
  }
}
</script>
