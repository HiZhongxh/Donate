import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import New from '@/views/New.vue'
import Donate from '@/views/Donate.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/main',
      component: Main,
      children: [
        { path: '/home', component: Home, name: 'home', iconCls: 'icon-a'},
        { 
          path: '/about',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
          name: 'about',
          iconCls: 'icon-a'
        },
        { path: '/new', component: New, name: 'new', iconCls: 'icon-a'},
        { path: '/donate', component: Donate, name: 'donate', iconCls: 'icon-a'},
      ]
    },
    {
      path: '/',
      redirect: '/main'
    },
  ]
})
