import App from '../page/index'
import Wrap from '../page/wrap'

const Recom = () => import('../general/recom/index')
const Toplist = () => import('../general/toplist/index')
const Search = () => import('../general/search/index')
const Channel = () => import('../general/channel/index')

export const routerOptions = {
  mode: 'history',
  fallback: true,
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '',
      name: 'app',
      component: App,
      children: [
        {
          path: '',
          component: Wrap,
          children: [
            {
              // 推荐
              path: 'recom',
              name: 'recom',
              component: Recom
            },
            {
              // 排行榜
              path: 'toplist',
              name: 'toplist',
              component: Toplist
            },
            {
              // 搜索
              path: 'search',
              name: 'search',
              component: Search
            }
          ]
        },
        {
          // 播放列表
          path: 'channel/:id',
          name: 'channel',
          component: Channel
        }
      ]
    }
  ]
}
