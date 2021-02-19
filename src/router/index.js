import Vue from 'vue'
import VueRouter from 'vue-router'
import ListadoProductos from '../views/ListadoProductos.vue'
import Login from '../views/Login.vue'
import Logout from '../components/Logout.vue'
import SinglePageProduct from '../components/SinglePageProduct.vue'
import Register from '../views/Register.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Inicio from '../views/Inicio.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/products',
    name: 'Products',
    component: ListadoProductos
  },
  {
    path: '/products/:id',
    name: 'SinglePageProduct',
    component: SinglePageProduct
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
