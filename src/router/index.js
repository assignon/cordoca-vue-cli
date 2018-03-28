import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {

        home: Home,
        menu: Menu

      }
    },

    {

      path: '/profile',
      name: 'UserProfile'

    }
  ]
})
