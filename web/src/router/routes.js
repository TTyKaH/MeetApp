import { createRouter, createWebHistory } from "vue-router";
import home from "@/pages/index.vue";
import admin from "@/pages/admin/index.vue";
import usersList from "@/pages/admin/users-list.vue";
import meetsList from "@/pages/admin/meets-list.vue";
import user from "@/pages/user/index.vue";
import createMeet from "@/pages/create-meet.vue";
// import editProfile from "@/pages/edit-profile.vue";
// import editMeet from "@/pages/edit-meet.vue";
import signIn from "@/pages/sign-in.vue";
import signUp from "@/pages/sign-up.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
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
  // Здесь должна быть вложенность для роутера?
  {
    path: "/admin/users-list",
    name: "usersList",
    component: usersList,
  },
  {
    path: "/admin/meets-list",
    name: "meetsList",
    component: meetsList,
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
  {
    path: "/create-meet",
    name: "createMeet",
    component: createMeet,
  },
  // all now are components
  // {
  //   path: "/edit-meet",
  //   name: "editMeet",
  //   component: editMeet,
  // },
  // {
  //   path: "/edit-profile",
  //   name: "editProfile",
  //   component: editProfile,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// TODO: how remove hash from url?
