import Vue from 'vue'
import Layout from './components/layout'
//路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//导入首页
import IndexPage from './pages/index'
//详情页
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

//注册VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)
//实例化VueRouter
let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})
