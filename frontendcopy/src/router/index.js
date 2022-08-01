import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import NewCanvasMe from "../views/NewCanvasMe.vue";
import NewCanvasYour from "../views/NewCanvasYour.vue";
import NewArticle from "../views/NewArticle.vue";
import SetCanvasMe from "../views/SetCanvasMe.vue";
import SetCanvasYour from "../views/SetCanvasYour.vue";
import SetMyBlog from "../views/SetMyBlog.vue";
import Realisations from "../views/Realisations.vue";
import YourInspiration from "../views/YourInspiration.vue";
import MyInspiration from "../views/MyInspiration.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/realisations",
    name: "Realisations",
    component: Realisations,
    children: [
      {
        path: "/MyInspiration",
        component: MyInspiration,
      },
      {
        path: "/YourInspiration",
        component: YourInspiration,
      },
    ],
  },
  {
    path: "/blog",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
  },
  {
    path: "/moi",
    name: "Moi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Moi.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
  },
  {
    path: "/superadmin",
    name: "SuperAdmin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SuperAdmin.vue"),
  },

  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/newCanvasMe",
    name: "NewCanvasMe",
    component: NewCanvasMe,
  },
  {
    path: "/newCanvasYour",
    name: "NewCanvasYour",
    component: NewCanvasYour,
  },
  {
    path: "/newArticle",
    name: "NewArticle",
    component: NewArticle,
  },
  {
    path: "/setCanvasMe",
    name: "SetCanvasMe",
    component: SetCanvasMe,
  },
  {
    path: "/setCanvasYour",
    name: "SetCanvasYour",
    component: SetCanvasYour,
  },
  {
    path: "/setMyBlog",
    name: "SetMyBlog",
    component: SetMyBlog,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
