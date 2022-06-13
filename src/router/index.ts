import { useState } from "@/store/auth/state";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    component: () => import("@/modules/UserManagement/UserRoute.vue"),
    children: [
      {
        path: "register",
        name: "Register",
        component: () =>
          import("@/modules/UserManagement/component/Register.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/modules/UserManagement/component/Login.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/modules/Dashboard/DashboardLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/modules/Dashboard/component/Home.vue"),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const authState = useState();
  const isAuthorized = authState.isAuthorized;

  try {
    if (to.meta.requireAuth && !isAuthorized) {
      next({ name: "Login" });
    } else {
      next();
    }
  } catch (err) {
    next({ name: "Login" });
  }
});

export default router;
