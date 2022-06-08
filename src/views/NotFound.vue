<template>
  <section>
    <div class="container px-lg">
      <div class="sign_in_block d-flex justify-content-center align-items-center">
        <div class="px-6 py-7 bg-light d-flex justify-content-center align-items-center border border-dark border-2">
          <img src="../assets/image/banner.png" class="me-6" alt="">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="mb-5 d-flex flex-column justify-content-center align-items-center">
                <h1 class="text-paytone fw-bolder text-primary px-4">
                  Oops！
                </h1>
                <h2 class="fs-4 fw-bolder text-center">此頁面不存在</h2>
                <button class="btn btn-secondary w-50 mt-4 text-center"
                @click.prevent="$router.back(-1)">回上一頁</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
