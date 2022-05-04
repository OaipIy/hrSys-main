import Vue from 'vue'
import Router from 'vue-router'
// 引入多个模块的规则
import approvalsRouter from './modules/approvals'
import departmentsRouter from './modules/departments'
import employeesRouter from './modules/employees'
import permissionRouter from './modules/permission'
import attendancesRouter from './modules/attendances'
import salarysRouter from './modules/salarys'
import settingRouter from './modules/setting'
import socialRouter from './modules/social'
import userRouter from './modules/user'

import Layout from '@/layout'
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/import',
    component: Layout,
    hidden: true, // 不显示在左侧菜单中
    children: [{
      path: '', // 什么都不写表示默认的二级路由
      component: () => import('@/views/import')
    }]
  },
  userRouter // 放置一个都可以访问的路由
  // 404 page must be placed at the end !!!
]
// 定义一个动态路由变量
// 这里导出这个变量 后面做权限的时候会用到
export const asyncRoutes = [
  approvalsRouter,
  departmentsRouter,
  employeesRouter,
  permissionRouter,
  attendancesRouter,
  salarysRouter,
  settingRouter,
  socialRouter
]
const createRouter = () => new Router({
  mode: 'history', // require service support
  base: 'hr/',
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes] // 静态路由和动态路由的临时合并
})

const router = createRouter() // 实例化一个路由

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
