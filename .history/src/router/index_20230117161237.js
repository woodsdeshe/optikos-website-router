import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView'
import SigninView from '../views/SigninView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path:'/signin',
    name:'signin',
    component: SigninView
  }
]

const router = new VueRouter({
  routes
})

export default router
