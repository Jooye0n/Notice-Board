import Vue from 'vue'
import Router from 'vue-router'

import Post from './views/Post.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})