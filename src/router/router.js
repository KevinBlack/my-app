import Home from '@/views/Home.vue'
import about from '@/views/About.vue'

export default[
  {
    path: '/',
    alias: '/home_page',// 别名
    name: 'home',
    component: Home,
    beforeEnter: ((to, from, next) => {// 路由独享守卫，判断页面是从哪里跳转来的
      if (from.name === 'about') alert('I come from about')
      else alert('I don`t come from about')
      next()// 结尾一定要执行next，否则不会跳转！
    })
  },
  {
    path: 'login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route; /* webpackChunkName: "about" */会议hash形式打包进文件
    // which is lazy-loaded when the route is visited; component: () => import(...)这种是懒加载形式，就是用到这页了才会加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'// 对象模式，用一个对象的key，value来传递值
    }
  },
  {
    path: '/argu/:name',// 动态参数，注意这个name要和argu.vue里的相同，详见argu.vue
    name: 'argu',
    props: true,// 布尔值模式，设置了true后，才会用传过来的值代替默认值！
    component: () => import('@/views/argu.vue')
  },
  {
    path: '*',// 所有匹配不到的页面，都转到404.注意一定要写到最末尾，前面的都匹配不到，才会找到这里，否则直接就跳到404了！
    component: () => import('@/views/error_404.vue')
  }
]