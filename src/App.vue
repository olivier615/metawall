<template>
  <router-view/>
</template>

<style lang="scss">
@import './assets/stylesheets/all.scss';
</style>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      Toast: this.$swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })
    }
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    popToast (info) {
      this.Toast.fire({
        icon: info.icon,
        title: info.title
      })
    }
  },
  mounted () {
    emitter.on('popToast', (info) => {
      this.popToast(info)
    })
  }
}
</script>
