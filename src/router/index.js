import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Computer from '@/components/Computer/computer'
import Bindclass from '@/components/Class/index'
import Vshowdemo from '@/components/Vshowdemo/index'
import Vfordemo from '@/components/Vfordemo/index'
import Vonshow from '@/components/Vonshow/index'
import Vmodeldemo from '@/components/Vmodeldemo/index'
import Keepalive from '@/components/Keepalivedemo/index'
import Todo from '@/components/Todo/index'
import page from '@/components/Keepalivedemo/page'
import otherPage from '@/components/Keepalivedemo/otherPage'
import componentDemo from '@/components/componentDemo/index'
import Directivesdemo from '@/components/Directivesdemo/index'
import SlotDemo from '@/components/Slot/index'
import lifecircle from '@/components/lifecircle/index'
import myMixin from '@/components/Mixin/index'
import Vrouter from '@/components/Vrouter/index'
import page1 from '@/components/Vrouter/page1'
import page2 from '@/components/Vrouter/page2'
import page3 from '@/components/Vrouter/page3'
import page4 from '@/components/Vrouter/page4'
import page5 from '@/components/Vrouter/page5'
import useMock from '@/components/UseMock/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Computer/computer',
      name: 'Computer',
      component: Computer
    },
    {
      path: '/Class/index',
      name: 'Bindclass',
      component: Bindclass
    },
    {
      path: '/Vshowdemo/index',
      name: 'Vshowdemo',
      component: Vshowdemo
    },
    {
      path: '/Vfordemo/index',
      name: 'Vfordemo',
      component: Vfordemo
    },
    {
      path: '/Vonshow/index',
      name: 'Vonshow',
      component: Vonshow
    },
    {
      path: '/Vmodeldemo/index',
      name: 'Vmodeldemo',
      component: Vmodeldemo
    },
    {
      path: '/Keepalivedemo/index',
      name: 'Keepalive',
      component: Keepalive,
      children: [
        {
          path: 'page',
          name: 'page',
          component: page,
          keepAlive: true
        },
        {
          path: 'otherPage',
          name: 'otherPage',
          component: otherPage,
          keepAlive: false
        }
      ]
    },
    {
      path: '/Todo/index',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/componentDemo/index',
      name: 'componentDemo',
      component: componentDemo
    },
    {
      path: '/Directivesdemo/index',
      name: 'Directivesdemo',
      component: Directivesdemo
    },
    {
      path: '/Slot/index',
      name: 'SlotDemo',
      component: SlotDemo
    },
    {
      path: '/lifecircle/index',
      name: 'lifecircle',
      component: lifecircle
    },
    {
      path: '/Mixin/index',
      name: 'myMixin',
      component: myMixin
    },
    {
      path: '/Vrouter/',
      name: 'Vrouter',
      component: Vrouter,
      children: [
        {
          path: 'page1',
          name: 'page1',
          components: {
            default: page1,
            a: page2,
            b: page3,
            c: page2
          }
        },
        {
          path: 'page2',
          name: 'page2',
          component: page2
        },
        {
          path: 'page3/:id',
          name: 'page3',
          component: page3,
          props: true
        },
        {
          path: 'page4',
          name: 'page4',
          component: page4
        },
        {
          path: 'page5',
          name: 'page5',
          component: page5,
          redirect: {name: page3},
          alias: '/3'
        }
      ]
    },
    {
      path: '/UseMock/index',
      name: 'useMock',
      component: useMock
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next()
})
router.afterEach((to, from) => {
  // console.log(to, from)
})
export default router
