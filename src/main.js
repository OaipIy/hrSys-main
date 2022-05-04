import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import Components from '@/components'
import * as directives from '@/directives'
import * as filters from '@/filters'
import i18n from '@/lang'
import CheckPermission from '@/mixin/checkPermission'
import '@/icons'
import '@/permission'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key)
})
// for in
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]) // 注册自定义指令
})
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]) // 注册自定义过滤器
})
// 注册自定义组件
Vue.use(Components)
// 全局混入检查对象
Vue.mixin(CheckPermission) // 表示所有的组件都拥有了检查的方法
Vue.config.productionTip = false
// 在根实例配置 store 选项指向 store 实例对象
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
