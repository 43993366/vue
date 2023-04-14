import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Dynamic from '../views/Dynamic.vue'
import HotShow from '../views/HotShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:HomeView,
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:HomeView,
    children:[
      {
        path:'',
        components:{default:HomeView, home:Dynamic}
      },{
        path:'Dynamic',
        components:{default:HomeView, home:Dynamic}
      },{
        path:'HotShow',
        components:{default:HomeView, home:HotShow}
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    name: 'user',
    path: '/user',
    component:()=>import('../views/MyInfo.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default  router
