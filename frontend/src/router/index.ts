import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
// @ts-ignore

import TestsView from '../views/TestsView.vue'
// @ts-ignore

import TestView from '../views/TestView.vue'
// @ts-ignore

import DefeatView from "@/views/DefeatView.vue";
// @ts-ignore

import WinView from "@/views/WinView.vue";
// @ts-ignore

import LeadersboardView from "@/views/LeadersboardView.vue";
// @ts-ignore

import CreateQuestionsView from "@/views/CreateQuestionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // @ts-ignore
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tests',
      name: 'tests',
      component: TestsView
    },
    {
      path: '/test/:id',
      name: 'test',
      component: TestView
    },
    {
      path: '/defeat/',
      name: 'defeat',
      component: DefeatView
    },
    {
      path: '/win/',
      name: 'win',
      component: WinView
    },
    {
      path: '/leadersboard/',
      name: 'leadersboard',
      component: LeadersboardView
    },
    {
      path: '/create-question/',
      name: 'create-question',
      component: CreateQuestionsView
    },
  ]
})

export default router
