<template>
  <div>
    argu
    <!-- {{ $route.params.name }} -->
    <!-- 通过路由的动态参数传值，
    $route是当前路由，也就是本页面的路由，
    它的params属性里可以传递之前定义的动态参数，
    name对应router.js里的name，可以更换但必须一致！ -->
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {// 用props来进行传值，router.js里argu必须设置props为true，否则都使用默认值
    name: {
      type: String,
      default: 'kevin'// 默认值
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name);
  }
}
</script>