import Vue from 'vue'
import Router from 'vue-router'
import Items from './views/Items.vue'
import ItemDetails from './views/ItemDetails.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/items'
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/itemdetails/:id',
      name: 'itemdetails',
      component: ItemDetails
    }
  ]
})
export default router
