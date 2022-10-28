import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.scss'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/item/:id',
      name: 'Item',
      props: true,
      component: () => import('./pages/Item.vue')
    },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('./pages/Basket.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
