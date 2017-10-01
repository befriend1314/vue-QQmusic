import Wrap from '../page/wrap'

export const routerOptions = {
  mode: 'history',
  fallback: true,
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/index',
      component: Wrap
    }
  ]
}
