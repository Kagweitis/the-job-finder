import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingView from "../views/LandingView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/landing",
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
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
