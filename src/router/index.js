import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 一级路由
// import home from '../components/HelloWorld.vue'
import Home from '../components/home/home'
import Test1 from '../components/test/test1'
import Test2 from '../components/test/test2'
import Test3 from '../components/test/test3'
import Test4 from '../components/test/test4'
import View1 from '../components/view/view1'
import View2 from '../components/view/view2'
import View3 from '../components/view/view3'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test1',
      name: 'test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: Test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: Test3
    },
    {
      path: '/test4',
      name: 'test4',
      component: Test4
    },
    {
      path: '/view1',
      name: 'view1',
      component: View1
    },
    {
      path: '/view2',
      name: 'view2',
      component: View2
    },
    {
      path: '/view3',
      name: 'view3',
      component: View3
    },
    { path: '*', component: Home }
  ]
})