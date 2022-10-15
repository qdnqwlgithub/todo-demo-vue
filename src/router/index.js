import { createRouter, createWebHistory } from 'vue-router'
import Todos from "@/components/Todos";

const routes = [
  {
    path: '/',
    component: Todos,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
