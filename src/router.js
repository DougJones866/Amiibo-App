import Vue from 'vue'
import Router from 'vue-router'
import Amiibo from '@/views/Amiibo'


Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Amiibo',
        component: Amiibo
      },
    ]
  })