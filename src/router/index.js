import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Service from '@/components/service/service'
import Ticket from '@/components/ticket/ticket'
import MemberShip from '@/components/membership/membership'
import MyData from '@/components/mydata/mydata'
import Friend from '@/components/friend/friend'
import Mine from '@/components/mine/mine'
import FastThree from '@/components/fastthree/fastthree'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      meta: {
        index: 1,
        title: 'login'
      },
      name: 'Login',
      component: Login
    },
    {
      path: '/service',
      meta: {
        index: 0,
        title: ''
      },
      name: 'Service',
      component: Service,
      children: [
        {
          path: '/ticket',
          meta: {
            index: 1,
            title: '约票服务'
          },
          name: 'Ticket',
          component: Ticket,
          children: [
            {
              path: 'fastthree',
              meta: {
                index: 2,
                title: '约票服务'
              },
              name: 'FastThree',
              component: FastThree
            }
          ]
        },
        {
          path: '/membership',
          meta: {
            index: 1,
            title: '会员服务'
          },
          name: 'MemberShip',
          component: MemberShip
        },
        {
          path: '/mydata',
          meta: {
            index: 1,
            title: '数据报表'
          },
          name: 'MyData',
          component: MyData
        },
        {
          path: '/friend',
          meta: {
            index: 1,
            title: '邀请站友'
          },
          name: 'Friend',
          component: Friend
        },
        {
          path: '/mine',
          meta: {
            index: 1,
            title: '我的小站'
          },
          name: 'Mine',
          component: Mine
        }
      ]
    }
  ]
})
