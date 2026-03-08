import { createWebHistory, createRouter } from 'vue-router'

import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
  { path: '/', name:'Home', component: Home },
  { path: '/not-Found',name:'NotFound', component: NotFound },
  { path: '/movie/:id(\\d+)',name:'MovieDetail', component: MovieDetails },
  { path: '/:pathMatch(.*)*', redirect: '/not-found' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si el navegador tiene una posición guardada (ej. al darle atrás), la usa
    if (savedPosition) {
      return savedPosition;
    } else {
      // Si es una navegación nueva, siempre va al top
      return { top: 0 } // 'smooth' para un scroll animado
    }
  }
})