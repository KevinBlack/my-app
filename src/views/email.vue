<template>
  <div>
    <button @click="handleClick">点我传值</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', '我被点了')// 触发bus的on-click方法，穿的值是‘我被点了’
    }
  }
}
</script>
