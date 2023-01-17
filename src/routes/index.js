import { createRouter, createWebHashHistory } from "vue-router";
import LandingView from "../views/LandingView.vue"

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => 
      import("../views/HomeView.vue"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/",
    name: "landing",
    component: LandingView
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
