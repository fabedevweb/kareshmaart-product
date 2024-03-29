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
import Tableaux from "../views/Tableaux.vue";
import Mentions from "../views/Mentions.vue";
import Cgu from "../views/Cgu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Tableaux",
    name: "Tableaux",
    component: Tableaux,
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
  {
    path: "/mentions",
    name: "Mentions",
    component: Mentions,
  },
  {
    path: "/cgu",
    name: "Cgu",
    component: Cgu,
  },
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes,
});

export default router;
