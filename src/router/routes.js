
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/home.vue')
      },
      {
        path: 'contacts',
        component: () => import('pages/contacts.vue')
      },
      {
        path: 'reg',
        component: () => import('pages/reg.vue')
      },
      {
        path: 'catalog',
        component: () => import('pages/catalog.vue')
      },
      {
        path: 'catalog',
        component: () => import('pages/catalog.vue')
      },
      {
        path: 'input',
        component: () => import('pages/input.vue')
      },
      {
        path: 'vape',
        component: () => import('pages/vape.vue')
      },
      {
        path: 'pod',
        component: () => import('pages/pod.vue')
      },
      {
        path: 'liquid',
        component: () => import('pages/liquid.vue')
      },
      {
        path: 'accessories',
        component: () => import('pages/accessories.vue')
      },
      {
        path: 'mod',
        component: () => import('pages/mod.vue')
      },
      {
        path: 'wliquid',
        component: () => import('pages/wliquid.vue')
      },
      {
        path: 'atom',
        component: () => import('pages/atom.vue')
      },
      {
        path: 'card',
        component: () => import('pages/card.vue')
      },
      {
        path: 'basket',
        component: () => import('pages/basket.vue')
      },
      {
        path: 'account',
        component: () => import('pages/account.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/CleanLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/reg.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
