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

Vue.use(Router)

export default new Router({
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
      path: 'Vrouter/index',
      name: 'Vrouter',
      component: Vrouter,
      children: [
        {
          path: 'Vrouter/page1',
          name: 'page1',
          component: page1
        },
        {
          path: 'Vrouter/page2',
          name: 'page2',
          component: page2
        }
      ]
    }
  ]
})
