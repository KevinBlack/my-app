<template>
  <div>{{ message }}</div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {// 监听bus的on-click方法，当被触发时，接收传过来的值
      this.message = mes
    })
  }
}
</script>
