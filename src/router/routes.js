import { createRouter, createWebHashHistory } from "vue-router";
import index from "@/pages/index.vue";
import meetingsInfo from "@/pages/meetings-info.vue";
import createMeet from "@/pages/create-meet.vue";
import editProfile from "@/pages/edit-profile.vue";
import editMeet from "@/pages/edit-meet.vue";
import signIn from "@/pages/sign-in.vue";
import signUp from "@/pages/sign-up.vue";
import admin from "@/pages/admin/index.vue";

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
  {
    path: "/create-meet",
    name: "createMeet",
    component: createMeet,
  },
  {
    path: "/edit-meet",
    name: "editMeet",
    component: editMeet,
  },
  {
    path: "/edit-profile",
    name: "editProfile",
    component: editProfile,
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: signIn,
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: signUp,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // mode: "history",
  routes,
});

export default router;

// TODO: how remove hash from url?
