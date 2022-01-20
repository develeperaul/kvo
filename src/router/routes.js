import auth from 'src/store/auth'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/', component: () => import('pages/Index.vue'), meta: {auth:true} },
      { path: '/', name: 'history', component: () => import('pages/HistoryKVO.vue'), meta: {auth:true} },
      { path: '/page/:id', name: 'page', component: () => import('pages/PageKVO.vue'), meta: {auth:true} },
      { path: '/create', name: 'create', component: () => import('pages/SendKVO.vue'), meta: {auth:true} },
      { path: '/settings', name: 'settings',  component: () => import('pages/Settings.vue'), meta: {auth:true} },
      
      { path: '/user', name:'user', component: () => import('pages/User.vue'), meta: {auth:true} },
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', name:'auth', component: () => import('pages/Login.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
