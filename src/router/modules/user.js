
import Layout from '@/layout'
// 导出用户路由规则
export default {
  path: '/users',
  component: Layout,
  hidden: true,
  name: 'user',
  children: [
    {
      path: '/users/approvals',
      component: () => import('@/views/users/approvals'),
      name: 'usersApprovals',
      hidden: true,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/users/info',
      component: () => import('@/views/users/info'),
      name: 'myInfo',
      hidden: true,
      meta: {
        title: '我的信息'
      }
    }
  ]
}
