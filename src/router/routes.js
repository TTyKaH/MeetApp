import { createRouter, createWebHashHistory } from "vue-router";
import index from "@/pages/index.vue";
import meetingsInfo from "@/pages/meetings-info.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: index,
  },
  {
    path: "/meetings-info",
    name: "meetingsInfo",
    component: meetingsInfo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // mode: "history",
  routes,
});

export default router;

// TODO: how remove hash from url?
