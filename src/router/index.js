import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import SignIn from '@/components/Signin'
import UsersSos from '@/components/usersSos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {

        default: Home,
        menu: Menu

      }
    },
    {

      path: '/profile',
      name: 'UserProfile'

    },
    {

      path: '/signin',
      name: 'signIn',
      components: {

        default: SignIn,
        menu: Menu

      }

    },
    {

      path: '/sos',
      name: 'sosPage',
      component: UsersSos

    }
  ]
})
