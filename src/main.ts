import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/main.scss'
import App from './App.vue'

const repoName = 'demo-shop'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: `/${repoName}/`,
      name: 'Home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: `/${repoName}/product/:id`,
      name: 'Product',
      props: true,
      component: () => import('./pages/Product.vue')
    },
    {
      path: `/${repoName}/basket`,
      name: 'Basket',
      component: () => import('./pages/Basket.vue')
    },
    {
      path: `/${repoName}/:pathMatch(.*)*`,
      name: "Page404",
      component: () => import('./pages/Page404.vue'),
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
