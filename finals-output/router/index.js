import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import gallery from '@/components/gallery'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../components/gallery')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/contact')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router