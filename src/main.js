// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入创建好的路由配置目录
import router from './router/index' // 自动扫描里面路由配置

Vue.config.productionTip = false

// 必须要通过 Vue.use() 来显示使用该路由

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 路由配置
  router,
  components: { App },
  template: '<App/>'
})
