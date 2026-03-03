import { createWebHistory, createRouter } from 'vue-router'

import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
  { path: '/', name:'Home', component: Home },
  { path: '/not-Found',name:'NotFound', component: NotFound },
  { path: '/movie/:id',name:'MovieDetail', component: MovieDetails },
  { path: '/:pathMatch(.*)*', redirect: '/not-found' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})