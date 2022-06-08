<template>
  <div class="col-md-7">
    <div class="border border-2 border-dark py-3 position-relative bg-white mb-3">
      <h3 class="text-center mb-0 fw-bold">編輯動態</h3>
      <div
          class="position-absolute border py-3 border-dark border-2 w-100 bg-white"
          style="z-index: -1; top: 4px; left: -6px"
        >
        <h3 class="text-center mb-0 fw-bold">編輯動態</h3>
      </div>
    </div>
    <form @submit.prevent="uploadEditPost">
      <div class="card border-2 border-dark cus-border-radio cus-shadow-bottom">
        <div class="card-body p-4">
          <div class="form-group mb-3">
            <label for="content">
              <span class="fw-bolder">貼文內容</span>
            </label>
            <textarea
              class="form-control border-2 border-dark mt-1 py-2 px-3 no-border-radius
              fw-bolder"
              rows="5"
              placeholder="輸入您的貼文內容"
              v-model="post.content"
            ></textarea>
          </div>
          <div class="input-group mb-2">
            <label class="btn btn-dark">
              <input
                ref="upload_img"
                style="display: none"
                type="file"
                @change="uploadImage"
              />
              上傳圖片
            </label>
            <button type="button" class="btn btn-outline-secondary" v-if="imgUrl" @click.prevent="imgUrl = ''">
              刪除圖片
            </button>
          </div>
          <img :src="imgUrl" v-if="imgUrl"
          class="cus-border-radio img-fluid border border-2 border-dark"
          alt="postImage" style="width:100%">
          <p class="text-warning text-center mt-2 mb-2 fs-7 d-none">
            圖片檔案過大，僅限 1mb 以下檔案
          </p>
          <p class="text-warning text-center mt-2 mb-2 fs-7 d-none">
            圖片格式錯誤，僅限 JPG、PNG 圖片
          </p>
          <div class="d-flex justify-content-center">
            <button v-if="post.content" type="submit" class="btn btn-blue-dark btn-lg py-3 px-8 mt-5
            text-white border-2 border-dark fw-bolder"
            >儲存貼文</button>
            <button v-else disabled type="submit" class="btn btn-gray-dark btn-lg py-3 px-8 mt-5
            text-dark border-2 border-dark fw-bolder"
            >儲存貼文</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  data () {
    return {
      fileInput: null,
      url: process.env.VUE_APP_API,
      imgUrl: '',
      post: {}
    }
  },
  methods: {
    getEditPost () {
      const { id } = this.$route.params
      this.$http.get(`${this.url}/posts/${id}`)
        .then(res => {
          this.post = res.data.data
          this.imgUrl = this.post.image
        })
    },
    uploadEditPost () {
      if (this.post.content === '') {
        const info = {
          icon: 'warning',
          title: '請輸入貼文內容'
        }
        emitter.emit('popToast', info)
      } else {
        const editedPost = {
          content: this.post.content,
          image: this.imgUrl
        }
        this.$http.patch(`${this.url}/posts/${this.post._id}`, editedPost)
          .then(() => {
            const info = ({
              icon: 'success',
              title: '已編輯貼文'
            })
            emitter.emit('popToast', info)
            this.$router.push('/postWall')
          })
          .catch(() => {
            const info = {
              icon: 'error',
              title: '貼文編輯失敗'
            }
            emitter.emit('popToast', info)
          })
      }
    },
    uploadImage () {
      const file = this.fileInput.files[0]
      if (!file) {
        const info = {
          icon: 'warning',
          title: '未選擇圖片檔案'
        }
        emitter.emit('popToast', info)
        return
      }
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' &&
      file.type !== 'image/jpg' && file.type !== 'image/gif') {
        const info = {
          icon: 'warning',
          title: '檔案類別僅限 jpg, jpeg, png 或 gif'
        }
        emitter.emit('popToast', info)
        return
      }
      if (file.size > 2 * 1024 * 1024) {
        const info = {
          icon: 'warning',
          title: '上傳檔案須小於 2 MB'
        }
        emitter.emit('popToast', info)
        return
      }
      const formData = new FormData()
      formData.append('image', file)
      this.$http.post(`${this.url}/upload`, formData)
        .then(res => {
          this.imgUrl = res.data.imgUrl
        })
        .catch((err) => {
          const info = {
            icon: 'error',
            title: err.response.data.message
          }
          emitter.emit('popToast', info)
        })
    }
  },
  mounted () {
    this.fileInput = this.$refs.upload_img
    this.getEditPost()
  }
}
</script>
