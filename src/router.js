import Vue from 'vue'
import Router from 'vue-router'
import Amiibo from '@/views/Amiibo'
import AmiiboCard from '@/views/AmiiboCard'


Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Amiibo',
        component: Amiibo
      },
      {
      path: '/info',
      name: 'AmiiboCard',
      component: AmiiboCard
      },
    ]
  })