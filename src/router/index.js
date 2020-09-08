import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store/'
import AuthGuard from './auth-guard'
const Home = () => import('@/views/Home')
const Profile = () => import('@/components/user/Profile')
const Signup = () => import('@/components/user/Signup')
const Signin = () => import('@/components/user/Signin')
const BooksView = () => import('@/views/BooksView')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/bookForm',
      name: 'BookForm',
      component: () => import('@/components/BookForm')
    },
    {
      path: '/books',
      name: 'BookList',
      component: BooksView
    },
    {
      path: '/books/edit/:id',
      name: 'EditBook',
      component: () => import('@/components/BookForm')
    },
    {
      path: '/books/new',
      name: 'addBook',
      component: () => import('@/components/BookForm')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

let isAuthenticated
const openRoutes = ['Signin', 'Signup', 'Public']
router.beforeEach((to, from, next) => {
  isAuthenticated = Store.getters['auth/loggeIn'];
  console.log(isAuthenticated)
  if( openRoutes.includes(to.name)){
      next()
    }else if (!isAuthenticated) next({ name: 'Signin' })
    else next()

  })

export default router
