import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About  from '@/pages/About.vue'
import Careers from './pages/Careers.vue'
import Services from './pages/Services.vue'
import Projects from './pages/Projects.vue'
import Unfond from './pages/Unfond.vue'
import Setting from './pages/Setting.vue'
import Collection from './components/Collection.vue'
import PricingList from './components/AboutMe.vue'
// import Button from './pages/Button.vue'
import Register from './pages/Register.vue'
import User from './pages/User.vue'
import Resonpsive from './components/Resonpsive.vue'
import CommingSoon from './pages/CommingSoon.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/careers', component: Careers},
  
  { path: '/services', component: Services},
  { path: '/projects', component: Projects},
  { path: '/responsive', component: Resonpsive},
  { path: '/setting', component: Setting, children: [
    {path: '', component: Collection},
    {path: 'pricing', component: PricingList}]},
  // { path:'/button', component: Button},
  { path: '/register', component: Register},
  { path: '/user', component: User},
  { path: '/:pathMatch(.*)*', name: 'unfound', component: Unfond },
  { path: '/commingsoon', component: CommingSoon}
  
]
//to="/about"
//to="/about/me"
const router = createRouter({
  linkActiveClass: ' font-bold text-yellow-100',
  linkExactActiveClass: 'font-bold text-yellow-100',
  history: createWebHistory(),
  routes
})

export default router