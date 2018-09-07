export const setTitle = (title) => {
  window.document.title = title || 'admin'
}// 与业务相关的方法定义在这里，把传过来的title赋给页面的title，如果传过来的是undefined，则使用默认值admin