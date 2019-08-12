import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from  '@/components/HelloWorld.vue'

import Index from '@/components/Index.vue'
import Hello from '@/components/Hello.vue'
import SayHiFromVariable from '@/components/SayHiFromVariable.vue'
import SayHi4Method from '@/components/SayHi4Method.vue'
import BlogList from '@/components/BlogList.vue'
import Blog from '@/components/Blog.vue'
import TwoWayBinding from '@/components/TwoWayBinding.vue'
import FormInput from '@/components/FormInput.vue'
import FormSubmit from '@/components/FormSubmit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },

    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/sayhifromvariable',
      name: 'sayhifromvariable',
      component: SayHiFromVariable
    },
    {
      path: '/sayhi4method',
      name: 'sayhi4method',
      component: SayHi4Method
    },
    {
      path: '/bloglist',
      name: 'bloglist',
      component: BlogList
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/twowaybinding',
      name: 'twowaybinding',
      component: TwoWayBinding
    },
    {
      path: '/forminput',
      name: 'forminput',
      component: FormInput
    },
    {
      path: '/formsubmit',
      name: 'formsubmit',
      component: FormSubmit
    },
    ]
})
