<template>
  <section>
    <div class="px-4 py-5 border border-3 border-dark bg-white">
      <div class="d-grid mb-4">
        <router-link to="/newPost" type="button" class="cus-border-radio btn btn-blue-dark btn-lg
        border-dark border-3 cus-shadow-border">
          <span class="fw-bold">張貼動態</span>
        </router-link>
      </div>
      <ul class="ps-2">
        <li class="mb-4">
          <a href="#" class="d-flex align-items-center link-hover">
            <img src="../assets/image/user1.png" alt="">
            <span class="fw-bolder ms-3">邊緣小杰</span>
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="d-flex align-items-center link-hover">
            <div class="icon-border-box d-flex align-items-center justify-content-center">
              <span class="bi bi-bell fs-4"></span>
            </div>
            <span class="fw-bolder ms-3">追蹤名單</span>
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="d-flex align-items-center link-hover">
            <div class="icon-border-box d-flex align-items-center justify-content-center">
              <span class="bi bi-hand-thumbs-up fs-4"></span>
            </div>
            <span class="fw-bolder ms-3">我按讚的文章</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
