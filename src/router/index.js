import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '../pages/portfolio/Profile.vue'
import Showcase from '../pages/portfolio/Showcase.vue'
import Contact from '../pages/portfolio/Contact.vue'
import Creative from '../pages/portfolio/Creative.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/portfolio',
    component: Dashboard,
    children: [
      { path: 'profile', component: Profile },
      { path: 'showcase', component: Showcase },
      { path: 'contact', component: Contact },
      { path: 'creative', component: Creative }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('auth')
  if (to.path.startsWith('/portfolio') && !isAuth) next('/login')
  else next()
})

export default router
