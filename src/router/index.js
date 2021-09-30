import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import View1 from "../views/View1.vue";
import View2 from "../views/View2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/view1",
    name: "View 1",
    component: View1,
  },
  {
    path: "/view2",
    name: "View 2",
    component: View2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
