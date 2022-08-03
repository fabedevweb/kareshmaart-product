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
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Tableaux.vue"),
      children: [
        {
          path: "/MyInspiration",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "../views/MyInspiration.vue"
            ),
        },
        {
          path: "/YourInspiration",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "../views/YourInspiration.vue"
            ),
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
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Moi.vue"),
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
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Create.vue"),
    },
    {
      path: "/newCanvasMe",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/NewCanvasMe.vue"),
    },
    {
      path: "/newCanvasYour",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/NewCanvasYour.vue"),
    },
    {
      path: "/newArticle",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/NewArticle.vue"),
    },
    {
      path: "/setCanvasMe",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/SetCanvasMe.vue"),
    },
    {
      path: "/setCanvasYour",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/SetCanvasYour.vue"),
    },
    {
      path: "/setMyBlog",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/SetMyBlog.vue"),
    },
    {
      path: "/mentions",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Mentions.vue"),
    },
    {
      path: "/cgu",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Cgu.vue"),
    },
  ],
});

export default router;
