import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  // mode: 'history', // 默认是hash
  routes
})

const HAS_LOGINED = true // 模拟登录状态

router.beforeEach((to, from, next) => {
  // 接受三个参数：to将要去到的路由对象；from即将离开的路由对象；next()决定跳转时执行的函数
  if (to.name !== 'login') { // 如果要去的页面不是登录页
    if (HAS_LOGINED) next() // 判断是否已登录，如已登录，则执行后续函数
    else next({ name: 'login' }) // 如未登录，则后续函数将跳转页改为登录页
  } else { // 如果要去的是登录页（用户手动输入登录页地址）
    if (HAS_LOGINED) next({ name: 'home' }) // 判断如已登录，则后续函数去到首页
    else next() // 如未登录，则执行后续函数
  }
})

router.afterEach((to, from) => {
  // logining = false // 不能阻止跳转，一般用来处理跳转后的简单逻辑，例如让loading图片隐藏
})

export default router