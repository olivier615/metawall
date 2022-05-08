<template>
  <headerView class="mb-6" />
  <section>
    <div class="container px-lg">
      <div class="row">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-4">
              <select name="timeSort" class="py-2 form-select no-border-radius border-2 border-dark
              text-dark" v-model="postsTomeSort">
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
                  <span class="bi bi-search fs-6"></span>
                </button>
              </div>
            </div>
          </div>
          <ul v-if="posts.length === 0">
            <li class="mb-3">
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
                      <p class="card-title text-secondary">目前尚無動態，新增一則貼文吧！</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul v-else>
            <li class="mb-3" v-for="post in posts" :key="post._id">
              <div class="card border-2 border-dark cus-border-radio cus-shadow-bottom">
                <div class="card-body p-4">
                  <div class="d-flex mb-3">
                    <img :src="post.user.photo" alt="userAvatar" class="img-fluid"
                    style="height: 50px; width: 50px;">
                    <div class="ms-3 d-flex flex-column">
                      <a href="#" class="card-title mb-0 fw-bold name-link">{{ post.user.name }}</a>
                      <span class="cus-fs-sm text-secondary">{{ new Date(post.createdAt).toLocaleString() }}</span>
                    </div>
                  </div>
                  <p class="card-text fw-bold">{{ post.content }}</p>
                  <img v-if="post.image" :src="post.image"
                  class="cus-border-radio img-fluid border border-2 border-dark" alt="postImage"
                  style="width:100%">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-5">
          <sideView />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import headerView from '@/components/headerView.vue'
import sideView from '@/components/sideView.vue'
export default {
  components: {
    headerView,
    sideView
  },
  data () {
    return {
      url: 'https://whispering-stream-46911.herokuapp.com/api/posts',
      posts: [],
      postsTomeSort: '最新貼文',
      q: ''
    }
  },
  methods: {
    getPosts () {
      this.$http.get(this.url)
        .then(res => {
          this.posts = res.data.data
        }
        )
        .catch(() => {
          console.log('連線失敗')
        })
    },
    searchPosts () {
      const timeSort = this.postsTomeSort === '由舊到新' ? '&timeSort=asc' : ''
      this.$http.get(`${this.url}?q=${this.q}${timeSort}`)
        .then(res => {
          this.posts = res.data.data
        })
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>
