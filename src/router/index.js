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
    // name: 'home',
    component:HomeView,
    children:[
      {
        path:'',//默认展示动态
        components:{home:Dynamic}
      },{
        path:'Dynamic',//"动态" 路由
        name:'Dynamic',
        components:{home:Dynamic},
        
      },{
        path:'HotShow',//"热门" 路由
        name:'HotShow',
        components:{home:HotShow},
      },{
        path:'image-list/:id',
        name:'image-list',
        props:true,
        components:{home:Dynamic},
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
  },{
    name: 'login',
    path: '/login',
    component:()=>import('../views/LogIn.vue'),
  }
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('111');
  //如果直接访问也应该拦截一下，附带一下参数
  if(to.path==='/user' && !to.params.flag)
  {
    next({
      name:'login',
    })
  }else {
    next()
  }
})
export default  router
