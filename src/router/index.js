import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'login',
    hidden: true,
    meta: {
      name: '主页'
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("../views/Login/Login.vue"),
    meta: {
      name: '登录'
    }
  },
  {
    path: "/console",
    name: "Console",
    redirect: 'index',
    component: () => import("../views/Layout/index.vue"),
    meta: {
      name: '控制台',
      icon: 'console'
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/Console/index.vue"),
        meta: {
          name: '首页'
        }
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("../views/Layout/index.vue"),
    meta: {
      name: '信息管理',
      icon: 'info'
    },
    children: [
      {
        path: "/infoIndex",
        name: "InfoIndex",
        component: () => import("../views/Info/index.vue"),
        meta: {
          name: '信息列表'
        }
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        component: () => import("../views/Info/category.vue"),
        meta: {
          name: '信息分类'
        }
      },
      {
        path: "/infoDetailed",
        name: "InfoDetailed",
        hidden: true,
        component: () => import("../views/Info/detailed.vue"),
        meta: {
          name: '信息详情'
        }
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/Layout/index.vue"),
    meta: {
      name: '用户管理',
      icon: 'user'
    },
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        component: () => import("../views/User/index.vue"),
        meta: {
          name: '用户列表'
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
