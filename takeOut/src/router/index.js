import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Search from "../components/Search"
import Orderform from "../components/Orderform"
import My from "../components/My"
import Homepage  from "../components/Homepage"
import Register from "../components/Register"
import Login  from "../components/Login"
import Particulars from "../components/Particulars"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'search',
      component: Search
    },
    {
      path: '/Orderform',
      name: 'orderform',
      component: Orderform
    },
    {
      path: '/My',
      name: 'my',
      component: My
    },
    {
      path: '/Homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/particulars/:id',
      name: 'particulars',
      component: Particulars,
      props:true
    },
  ]
})
