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
      { path: '', name: 'homepage', component: () => import('../views/HomeView.vue') }
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

  {
    path: "/about",
    name: "about",
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/AboutView.vue"),
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
