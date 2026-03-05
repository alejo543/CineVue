import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createHead } from '@unhead/vue/client';
const head = createHead();
createApp(App).use(head).use(router).mount('#app');
