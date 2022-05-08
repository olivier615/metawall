<template>
  <headerView class="mb-6" />
  <section>
    <div class="container px-lg">
      <div class="row">
        <div class="col-md-7">
          <div class="border border-2 border-dark py-3 position-relative bg-white mb-3">
            <h3 class="text-center mb-0 fw-bold">張貼動態</h3>
            <div
                class="position-absolute border py-3 border-dark border-2 w-100 bg-white"
                style="z-index: -1; top: 4px; left: -6px"
              >
              <h3 class="text-center mb-0 fw-bold">張貼動態</h3>
            </div>
          </div>
          <form @submit.prevent="addNewPost">
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
                    v-model="data.content"
                  ></textarea>
                </div>
                <div class="input-group mb-2">
                  <label class="btn btn-dark">
                    <!-- <input
                      ref="upload_img"
                      style="display: none"
                      type="file"
                      @change="uploadImage"
                    /> -->
                    上傳圖片
                    <input type="text" v-model="data.image">
                  </label>
                </div>
                <img :src="data.image" v-if="data.image"
                class="cus-border-radio img-fluid border border-2 border-dark"
                alt="postImage" style="width:100%">
                <p class="text-danger text-center mt-2 mb-2 fs-7 d-none">
                    圖片檔案過大，僅限 1mb 以下檔案
                    <br />
                    圖片格式錯誤，僅限 JPG、PNG 圖片
                  </p>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-gray-dark btn-lg py-3 px-8 mt-5
                  text-dark border-2 border-dark fw-bolder"
                  >送出貼文</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-5">
          <sideView />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emitter from '@/libs/emitter.js'
import headerView from '@/components/headerView.vue'
import sideView from '@/components/sideView.vue'

export default {
  components: {
    headerView,
    sideView
  },
  data () {
    return {
      fileInput: null,
      url: 'https://whispering-stream-46911.herokuapp.com/api/posts',
      data: {
        content: '',
        tags: ['擔心', '焦慮'],
        type: 'group',
        image: '',
        user: '626e75e5f58cdf96a66c9b32'
      }
    }
  },
  methods: {
    addNewPost () {
      if (this.data.content === '') {
        const info = {
          icon: 'warning',
          title: '請輸入貼文內容'
        }
        emitter.emit('popToast', info)
      } else {
        this.$http.post(this.url, this.data)
          .then(() => {
            const info = ({
              icon: 'success',
              title: '已新增貼文'
            })
            emitter.emit('popToast', info)
            this.$router.push('/')
          })
          .catch(() => {
            const info = {
              icon: 'error',
              title: '貼文上傳失敗'
            }
            emitter.emit('popToast', info)
          })
      }
    }
    // uploadImage () {
    //   const file = this.fileInput.files[0]
    //   const formData = new FormData()
    //   const myHeaders = new Headers()
    //   myHeaders.append('Authorization', 'Client-ID 8fe581e3334f679')
    //   formData.append('image', file)

    //   const requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: formData,
    //     redirect: 'follow'
    //   }
    //   fetch('https://api.imgur.com/3/image', requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //       this.data.image = result.data.link
    //       console.log(this.data.image)
    //     })
    //     .catch(error => console.log('error', error.message))
    // }
  }
  // mounted () {
  //   this.fileInput = this.$refs.upload_img
  // }
}
</script>
