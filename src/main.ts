import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/main.scss'
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
      path: '/product/:id',
      name: 'Product',
      props: true,
      component: () => import('./pages/Product.vue')
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
