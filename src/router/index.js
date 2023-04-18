import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Home from '@/components/Home.vue'
import Main from '@/components/Main.vue'

const routes = [
  {
   path: '/',
    name: 'Home',
    component: Home
  },
  
  {
   path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Main',
     name: 'Main',
     component: Main,
   }
] 
 
// ルーターを生成
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes //routes: routes の省略形（routes オプションに上記で定義した routes を指定）
})
export default router