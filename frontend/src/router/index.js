import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Tableaux",
      component: () => import("../views/Tableaux.vue"),
      children: [
        {
          path: "/MyInspiration",
          component: () => import("../views/MyInspiration.vue"),
        },
        {
          path: "/YourInspiration",
          component: () => import("../views/YourInspiration.vue"),
        },
      ],
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("../views/Blog.vue"),
    },
    {
      path: "/moi",
      name: "Moi",
      component: () => import("../views/Moi.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/Admin.vue"),
    },
    {
      path: "/superadmin",
      name: "SuperAdmin",
      component: () => import("../views/SuperAdmin.vue"),
    },

    {
      path: "/create",
      component: () => import("../views/Create.vue"),
    },
    {
      path: "/newCanvasMe",
      component: () => import("../views/NewCanvasMe.vue"),
    },
    {
      path: "/newCanvasYour",
      component: () => import("../views/NewCanvasYour.vue"),
    },
    {
      path: "/newArticle",
      component: () => import("../views/NewArticle.vue"),
    },
    {
      path: "/setCanvasMe",
      component: () => import("../views/SetCanvasMe.vue"),
    },
    {
      path: "/setCanvasYour",
      component: () => import("../views/SetCanvasYour.vue"),
    },
    {
      path: "/setMyBlog",
      component: () => import("../views/SetMyBlog.vue"),
    },
    {
      path: "/mentions",
      component: () => import("../views/Mentions.vue"),
    },
    {
      path: "/cgu",
      component: () => import("../views/Cgu.vue"),
    },
  ],
});

export default router;
