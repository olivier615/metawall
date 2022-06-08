<template>
  <section>
    <div class="container px-lg">
      <div class="sign_in_block d-flex justify-content-center align-items-center">
        <div class="px-2 px-sm-4 px-md-6 py-7 bg-light d-flex justify-content-center align-items-center border border-dark border-2">
          <img src="../assets/image/banner.png" class="me-6 d-none d-md-block" alt="">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="mb-5">
                <h1 class="text-paytone fw-bolder text-primary px-2 px-md-4">
                  MetaWall
                </h1>
                <h2 class="fs-4 fw-bolder text-center">到元宇宙展開全新社交圈</h2>
              </div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
