/**
 * 动态路由表
 */
export const asyncRouterMap = [];

/**
 * 基础路由表
 */
export const constantRouterMap = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
];
