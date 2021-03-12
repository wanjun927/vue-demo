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
      component: Keepalive
    },
    {
      path: '/Todo/index',
      name: 'Todo',
      component: Todo
    }
  ]
})
