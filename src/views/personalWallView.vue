<template>
  <div class="col-md-7">
    <div class="border border-2 border-dark position-relative bg-white mb-3 cus-border-radio">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img :src="personalData.photo" class="img-fluid rounded-start border-end border-2 border-dark me-3" alt="userAvatar"
          style="height: 80px; width: 80px;">
          <div class="d-flex flex-column justify-content-center">
            <h5 class="mb-0 fw-bolder">{{ personalData.name }}</h5>
            <p class="mb-0">{{ personalData.followers?.length || 0 }} 人追蹤</p>
          </div>
        </div>
        <div v-if="personalData._id !== userData._id" class="d-flex justify-content-center align-items-center me-3">
          <div v-if="isLoading" class="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
          <button type="button" class="btn cus-unFollow-btn border-2 fw-bolder cus-border-radio cus-shadow-border"
          style="height: 36px; width: 96px;"
          @click="unFollowUser" v-if="following">
            取消追蹤
          </button>
          <button type="button" class="btn btn-blue-dark border-2 fw-bolder cus-border-radio cus-shadow-border"
          style="height: 36px; width: 96px;"
          @click="followUser" v-else>
            追蹤
          </button>
        </div>
      </div>
      <div class="position-absolute border border-2 border-dark bg-white cus-border-radio"
      style="height: 80px; width: 100%; z-index: -1; top: 6px; left: -6px"></div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <select name="timeSort" class="py-2 form-select no-border-radius border-2
        border-dark text-dark" v-model="postsTomeSort">
          <option selected value="最新貼文">最新貼文</option>
          <option value="由舊到新">由舊到新</option>
        </select>
      </div>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" v-model="q"
          class="py-2 form-control no-border-radius border-2 border-dark"
          placeholder="搜尋貼文">
          <button class="btn btn-primary no-border-radius border-2 border-dark" type="button"
          id="button-addon2" @click.prevent="searchPosts">
            <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></div>
            <span v-else class="bi bi-search fs-6"></span>
          </button>
        </div>
      </div>
    </div>
    <ul>
      <li class="mb-3"  v-if="personalPost.length === 0">
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
                <p class="card-title text-secondary">
                  目前尚無動態，快邀請 {{ personalData.name }} 新增一則貼文吧！
                </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="mb-3" v-for="post in personalPost" :key="post._id">
        <div class="card border-2 border-dark cus-border-radio cus-shadow-bottom">
          <div class="card-body p-4">
            <div class="d-flex mb-3 justify-content-between">
              <div class="d-flex">
                <img :src="post.user.photo" alt="userAvatar" class="img-fluid border border-dark border-3 rounded-circle"
                style="height: 45px; width: 45px;">
                <div class="ms-3 d-flex flex-column">
                  <a href="#" @click.prevent="changeParams(comment.user._id)"
                  class="card-title mb-0 fw-bold name-link">{{ post.user.name }}</a>
                  <span class="cus-fs-sm text-secondary">{{ new Date(post.createdAt).toLocaleString() }}</span>
                </div>
              </div>
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown"
              v-if="userData._id === post.user._id">
                <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn dropdown-toggle text-primary" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-three-dots fs-4"></i>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><router-link :to="`/editPost/${post._id}`" class="dropdown-item">編輯貼文</router-link></li>
                    <li><a @click.prevent="deletePost(post._id)"
                    class="dropdown-item" href="#">刪除貼文</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p class="card-text fw-bold">{{ post.content }}</p>
            <img :src="post.image" v-if="post.image"
            class="cus-border-radio img-fluid border border-2 border-dark mb-3" alt="postImage"
            style="width:100%">
            <div class="d-flex align-items-center mb-3">
              <a v-if="post.likes.includes(userData._id)" href="#"
              class="me-1" @click.prevent="dislikePost(post)">
                <span class="bi bi-hand-thumbs-up-fill fs-5"></span>
              </a>
              <a href="#" v-else class="me-1" @click.prevent="likePost(post)">
                <span class="bi bi-hand-thumbs-up fs-5"></span>
              </a>
              <div v-if="isLoading" class="spinner-border spinner-border-sm text-primary" role="status"></div>
              <span v-else>{{ post.likes.length }}</span>
            </div>
            <div class="d-flex mb-2">
              <img :src="userData.photo" alt="userAvatar" class="me-2 img-fluid border border-dark border-3 rounded-circle"
              style="height: 40px; width: 40px;">
              <div class="mb-2 w-100">
                <div class="input-group mb-1">
                  <input type="text" :ref="`post${post._id}`"
                  class="py-2 form-control no-border-radius border-2 border-dark"
                  placeholder="留言...">
                  <button class="px-2 px-md-6 btn btn-primary no-border-radius border-2 border-dark btn-blue-dark cus-none-shadow-border" type="button"
                  @click="createNewComment(post)">
                    留言
                    <div v-if="isLoading" class="spinner-border spinner-border-sm ms-2" role="status"></div>
                  </button>
                </div>
                <div class="input-group">
                  <label class="link-pointer">
                    <input
                      :ref="`upload_img${post._id}`"
                      style="display: none"
                      type="file"
                      @change="uploadImage(post)"
                    />
                    <span class="bi bi-card-image fs-5 text-primary ms-1"></span>
                    <div v-if="isLoading" class="spinner-border spinner-border-sm text-primary ms-2" role="status"></div>
                    <a v-if="imgUrl && commentingPost === post._id" href="#" @click.prevent="imgUrl = ''"
                    class="ms-2">刪除圖片</a>
                  </label>
                </div>
                  <img v-if="imgUrl && commentingPost === post._id" :src="imgUrl"
                  class="cus-border-radio img-fluid border border-2 border-dark mb-3" alt="commentImage"
                  style="width:100%">
              </div>
            </div>
            <div class="p-3 mb-3 bg-light cus-border-radio" v-for="comment in post.comments" :key="comment._id">
              <div class="d-flex mb-3">
                <img :src="comment.user.photo" alt="userAvatar" class="img-fluid border border-dark border-3 rounded-circle"
                style="height: 40px; width: 40px;">
                <div class="ms-3 d-flex flex-column">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column">
                      <router-link href="#" class="card-title mb-0 fw-bold name-link"
                      :to="`/personalWall/${comment.user._id}`"
                      >{{ comment.user.name }}</router-link>
                      <span class="cus-fs-sm text-secondary mb-1">{{ new Date(comment.createdAt).toLocaleString() }}</span>
                    </div>
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown"
                    v-if="userData._id === comment.user._id">
                      <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn dropdown-toggle text-primary" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="bi bi-three-dots fs-6"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                          <li><a @click.prevent="openComment(comment)" class="dropdown-item">編輯留言</a></li>
                          <li><a @click.prevent="deleteComment(comment._id)"
                          class="dropdown-item" href="#">刪除留言</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- 留言編輯區 -->
                  <div v-if="comment._id === editIngComment">
                    <div class="mb-2 w-100">
                      <div class="input-group mb-1">
                        <input type="text" :ref="`comment${comment._id}`"
                        class="py-2 form-control no-border-radius border-2 border-dark"
                        placeholder="留言..." v-model="editingText">
                        <button class="btn btn-primary no-border-radius border-2 border-dark btn-blue-dark cus-none-shadow-border" type="button"
                        @click="editComment(comment)">
                          儲存
                          <div v-if="isLoading" class="spinner-border spinner-border-sm ms-2" role="status"></div>
                        </button>
                      </div>
                      <div class="input-group">
                        <label class="link-pointer">
                          <input
                            :ref="`upload_img${comment._id}`"
                            style="display: none"
                            type="file"
                            @change="uploadImage(comment)"
                          />
                          <span class="bi bi-card-image fs-5 text-primary ms-1"></span>
                          <div v-if="isLoading" class="spinner-border spinner-border-sm text-primary ms-2" role="status"></div>
                          <a v-if="imgUrl && editIngComment === comment._id" href="#" @click.prevent="imgUrl = ''"
                          class="ms-2">刪除圖片</a>
                        </label>
                      </div>
                        <img v-if="imgUrl && editIngComment === comment._id" :src="imgUrl"
                        class="cus-border-radio img-fluid border border-2 border-dark mb-3" alt="commentImage"
                        style="width:100%">
                    </div>
                  </div>
                  <div v-else>
                    <p class="card-text fw-bold">{{ comment.comment }}</p>
                    <img v-if="comment.image" :src="comment.image"
                    class="cus-border-radio img-fluid border border-2 border-dark" alt="postImage"
                    style="width:100%">
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      personalData: {},
      personalPost: [],
      userData: {},
      following: false,
      postsTomeSort: '最新貼文',
      q: '',
      fileInput: null,
      imgUrl: '',
      commentingPost: '',
      editIngComment: '',
      editingText: '',
      popConfirmCard: this.$swal.mixin({
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: '確定刪除',
        cancelButtonText: '取消'
      })
    }
  },
  methods: {
    deleteComment (id) {
      this.isLoading = true
      this.$http.delete(`${this.url}/posts/${id}/comment`)
        .then(() => {
          this.getPersonalPosts()
          const info = {
            icon: 'success',
            title: '已刪除留言'
          }
          emitter.emit('popToast', info)
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '刪除留言失敗，請刷新後重試'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    openComment (comment) {
      this.isLoading = false
      this.editIngComment = comment._id
      this.imgUrl = comment.image
      this.editingText = comment.comment
    },
    editComment (comment) {
      this.isLoading = true
      const commentInput = this.$refs[`comment${comment._id}`][0].value
      if (commentInput.trim() === '') {
        const info = {
          icon: 'warning',
          title: '留言內容不能為空白'
        }
        emitter.emit('popToast', info)
        this.isLoading = false
        return
      }
      const data = {
        comment: this.editingText,
        image: this.imgUrl
      }
      this.$http.patch(`${this.url}/posts/${comment._id}/comment`, data)
        .then(() => {
          this.getPersonalPosts()
          const info = {
            icon: 'success',
            title: '編輯留言成功'
          }
          emitter.emit('popToast', info)
          this.editIngComment = ''
          this.imgUrl = ''
          this.editingText = ''
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    deletePost (id) {
      this.popConfirmCard.fire({
        title: '確定刪除貼文?',
        text: '貼文刪除後將無法恢復',
        icon: 'warning'
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true
          this.$http.delete(`${this.url}/posts/${id}`)
            .then(() => {
              this.getPersonalPosts()
              const info = {
                icon: 'success',
                title: '貼文已刪除'
              }
              this.isLoading = false
              emitter.emit('popToast', info)
            })
        }
      })
    },
    getPersonalPosts () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http.get(`${this.url}/posts/user/${id}`)
        .then(res => {
          this.personalData = res.data.userData
          this.personalPost = res.data.posts
          this.following = false
          this.checkFollow()
          this.isLoading = false
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '無法取得使用者資料'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
          this.$router.push('/postWall')
        })
    },
    changeParams (newId) {
      this.isLoading = true
      this.$router.push(`/personalWall/${newId}`)
      this.$http.get(`${this.url}/posts/user/${newId}`)
        .then(res => {
          this.personalData = res.data.userData
          this.personalPost = res.data.posts
          this.following = false
          this.checkFollow()
          this.isLoading = false
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '無法取得使用者資料'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
          this.$router.push('/postWall')
        })
    },
    searchPosts () {
      this.isLoading = true
      const timeSort = this.postsTomeSort === '由舊到新' ? '&timeSort=asc' : ''
      this.$http.get(`${this.url}/posts/user/${this.personalData._id}?q=${this.q}${timeSort}`)
        .then(res => {
          this.personalPost = res.data.posts
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    createNewComment (post) {
      this.isLoading = true
      const commentInput = this.$refs[`post${post._id}`][0].value
      if (commentInput.trim() === '') {
        const info = {
          icon: 'warning',
          title: '留言內容不能為空白'
        }
        emitter.emit('popToast', info)
        this.isLoading = false
        return
      }
      const data = {
        comment: commentInput,
        image: this.imgUrl
      }
      this.$http.post(`${this.url}/posts/${post._id}/comment`, data)
        .then(() => {
          this.imgUrl = ''
          this.getPersonalPosts()
          const info = {
            icon: 'success',
            title: '已新增留言'
          }
          emitter.emit('popToast', info)
          this.$refs[`post${post._id}`][0].value = ''
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '新增留言失敗，請刷新後重試'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    likePost (post) {
      this.isLoading = true
      this.$http.post(`${this.url}/posts/${post._id}/likes`)
        .then(() => {
          this.getPersonalPosts()
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '留言點讚失敗'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    dislikePost (post) {
      this.isLoading = true
      this.$http.delete(`${this.url}/posts/${post._id}/dislikes`)
        .then(() => {
          this.getPersonalPosts()
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '取消留言點讚失敗'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    followUser () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http.post(`${this.url}/users/${id}/follow`)
        .then(res => {
          this.getPersonalPosts()
          const info = {
            icon: 'success',
            title: res.data.message
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '加入追蹤失敗，請刷新後重試'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    unFollowUser () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http.delete(`${this.url}/users/${id}/unFollow`)
        .then(res => {
          this.getPersonalPosts()
          const info = {
            icon: 'success',
            title: res.data.message
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
        .catch(() => {
          const info = {
            icon: 'error',
            title: '取消追蹤失敗，請刷新後重試'
          }
          emitter.emit('popToast', info)
          this.isLoading = false
        })
    },
    checkFollow () {
      this.personalData.followers.forEach(user => {
        if (user.user === this.userData._id) {
          this.following = true
        }
      })
    },
    uploadImage (post) {
      this.isLoading = true
      this.commentingPost = post._id
      this.fileInput = this.$refs[`upload_img${post._id}`]
      const file = this.fileInput[0].files[0]
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
      this.$http.post(`${this.url}/upload`, formData)
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
    if (localStorage.userData) {
      this.userData = JSON.parse(localStorage.userData)
    }
    this.getPersonalPosts()
  }
}
</script>
