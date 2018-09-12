const path = require('path')    // 1.定义变量，从node里获取路径
const resolve = dir => path.join(__dirname, dir)    // 2.定义resolve方法，拼接路径

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
// 判断是什么环境，如果是生产环境，则放在域名的根目录（/）下的iview-admin/文件夹下
// 开发环境则放在根目录
module.exports = {
    lintOnSave: true, // 每次保存时检查代码（就是vue ui里设置的那个）
    baseUrl: BASE_URL,
    chainWebpack: config =>{
        config.resolve.alias.set('@', resolve('src'))   // 3.用@替换src
        .set('_c', resolve('src/components'))
    },// 颗粒化的配置webpack，方便开发 -- 步骤1,2,3
    productionSourceMap: false,   // 打包时不生成.map文件，会减小体积
    devServer: {
        proxy: 'http://localhost:4000'
    } // 通过代理解决跨域问题，如上，任何没有匹配到静态页面的访问都会代理到4000这里，例如axios.post('/user/info')这种请求经过代理设置后就会拼成'http://localhost:4000/user/info'
}