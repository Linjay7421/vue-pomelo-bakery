// Import Module
import { createRouter, createWebHistory } from 'vue-router'

// Import views
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AnnounceView from '../views/AnnounceView.vue';
import CategoryView from '../views/CategoryView.vue';

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },{
    path: '/announce',
    name: 'announce',
    component: AnnounceView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
