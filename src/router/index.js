import { createRouter, createWebHashHistory } from "vue-router";
import homepage from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homepage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

// TODO: how remove hash from url?
