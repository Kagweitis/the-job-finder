import { createRouter, createWebHashHistory } from "vue-router";
import LandingView from "../views/LandingView.vue"

const routes = [
  {
    path: "/home",
    component: () => 
      import("../layouts/HomeLayout.vue"),
    // meta: {
    //   requiresAuth: true
    // },
    children: [
      { path: '', name: 'homepage', component: () => import('../views/HomeView.vue') },
      { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
      { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue') },
      { path: '/jobs', name: 'jobs', component: () => import('../views/JobsView.vue') },
      { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
    ]
  },

  {
    path: "/",
    component: () => 
      import('../layouts/Registration.vue'),

    children: [
      { 
        path: '',
        name: 'signUp',
        component: LandingView
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
