<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">去到argu页</button>
    <button @click="handleClick('replace')">替换成argu页</button>
    <!-- 利用同一函数控制导航，通过传入不同的参数来判断要去到的页面 -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeRouteEnter (to, from, next) {
    next( vm =>{
      console.log(vm);
    })
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm('您确定要离开吗？')
    if(leave) next()// 确认离开的话，执行后续函数
    else next(false)// 传入false则页面不会跳转
  },
  methods:{
     handleClick (type) {
       if (type === 'back') this.$router.back()
       else if (type === 'push') {
         this.$router.push({
          name: 'argu',
          query: {
            name: 'yoyo'// 带一个查询参数，注意与动态参数不同，是用？拼接在后面的
          }
        })
       }// 这个其实已经跳转到argu页面了，只是因为没带参数所以不显示，加上参数就好了
       else if (type === 'replace') {
         this.$router.replace({
          name: 'argu',
          params: {
            name: 'yoyo'// 这个才是与动态参数对应的传递方法！
          }
          // es6模块化写法：
          // const name = 'yoyo'
          // path: `/argu/${name}`
          // 效果跟上面是一样的，注意用path的话必须带参数，否则在后面写params无效，会被忽略掉！
        })
       }// 这个其实已经跳转到argu页面了，只是因为没带参数所以不显示，replace和push的区别是，push会在浏览历史里加入一条记录，可以回退，但replace则是替换，不能回退
     }
  }
}
</script>