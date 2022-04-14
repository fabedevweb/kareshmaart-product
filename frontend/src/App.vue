<template>
  <div id="app">
    <div style="background-color: rgba(255, 255, 255, 0.5)">
      <nav
        class="navbar-expand-lg navbar-light transparent d-flex flex-column"
        v-if="hideMenu()"
      >
        <VueScrollFixedNavbar>
          <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#"
              ><router-link
                to="/"
                class="nav-link active mx-auto jello-horizontal"
                aria-current="page"
                href="#"
                ><i class="fa-solid fa-house"></i></router-link
            ></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#" class="d-flex mx-auto align-items-center"
                  ><router-link
                    to="/"
                    class="nav-link active mx-auto jello-horizontal w-100"
                    aria-current="page"
                    href="#"
                    ><i class="fa-solid fa-house"></i>ACCUEIL</router-link
                  ></b-nav-item
                >
                <b-nav-item href="#" class="d-flex mx-auto align-items-center"
                  ><router-link
                    to="/Tableaux"
                    class="nav-link active mx-auto w-100"
                    aria-current="page"
                    href="#"
                  >
                    <i class="fa-solid fa-palette"></i> TABLEAUX
                  </router-link></b-nav-item
                >
                <b-nav-item href="#" class="d-flex mx-auto align-items-center"
                  ><router-link
                    to="/blog"
                    class="nav-link active mx-auto w-100"
                    aria-current="page"
                    href="#"
                    ><i class="fa-solid fa-newspaper"></i> BLOG</router-link
                  ></b-nav-item
                >
                <b-nav-item href="#" class="d-flex mx-auto align-items-center"
                  ><router-link
                    to="/moi"
                    class="nav-link active mx-auto w-100"
                    aria-current="page"
                    href="#"
                    ><i class="fa-solid fa-face-smile"></i> MOI</router-link
                  ></b-nav-item
                >
                <b-nav-item href="#" class="d-flex mx-auto align-items-center"
                  ><router-link
                    to="/contact"
                    class="nav-link active mx-auto w-100"
                    aria-current="page"
                    href="#"
                    ><i class="fa-solid fa-address-card"></i>
                    CONTACT</router-link
                  ></b-nav-item
                >
                <b-nav-item href="#" class="d-flex mx-auto align-items-center"
                  ><a
                    class="fa-brands fa fa-facebook mx-auto"
                    href="https://www.facebook.com/yashnajenna"
                    target="_blank"
                  ></a
                ></b-nav-item>
                <b-nav-item href="#" class="d-flex mx-auto align-items-center">
                  <a
                    class="fa-brands fa fa-instagram mx-auto +"
                    href="https://www.instagram.com/kareshma_noursai_art/"
                    target="_blank"
                  ></a
                ></b-nav-item>
                <b-nav-item href="#" class="d-flex mx-auto align-items-center">
                  <a
                    class="fa-brands fa fa-whatsapp mx-auto"
                    href="https://wa.me/23057184367"
                    target="_blank"
                  ></a
                ></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </VueScrollFixedNavbar>
        <div class="container-fluid">
          <div class="w-100">
            <p class="navigation-name-p">KareshmaArt</p>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./views/Footer.vue";
import { VueScrollFixedNavbar } from "vue-scroll-fixed-navbar";
export default {
  components: {
    Footer,
    VueScrollFixedNavbar,
  },
  data() {
    return {
      open: null,
    };
  },
  methods: {
    hideMenu() {
      if (
        this.$route.path === "/create" ||
        this.$route.path === "/admin" ||
        this.$route.path === "/home" ||
        this.$route.path === "/NewCanvasMe" ||
        this.$route.path === "/NewCanvasYour" ||
        this.$route.path === "/SetCanvasMe" ||
        this.$route.path === "/SetCanvasYour" ||
        this.$route.path === "/NewArticle" ||
        this.$route.path === "/SetMyBlog"
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../src/assets/commander.jpeg");
  background-size: cover;
  background-attachment: fixed;
}
.navigation-name-p {
  position: relative;
  font-family: blenny, sans-serif !important;
  font-weight: 900;
  font-style: normal;
  color: black !important;
  font-size: 3rem;
  margin-top: 200px;
  margin-bottom: 200px;
}
.fa-bars {
  color: #f0e91a;
  font-size: 2rem;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-link {
  font-family: new-order, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.2rem;
  color: white !important;
  width: 160px;
  background-attachment: fixed;
}
.router-link-exact-active {
  color: #deca1f !important;
  cursor: pointer;
}
/* ANIMATION ROUTER-LINK*/

.nav-link:hover,
.fa-brands:hover {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-3-20 10:0:52
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation jello-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

/*Réseaux sociaux*/
.fa {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 10px;
  border-radius: 50%;
}

.container-img-social_item:hover {
  -webkit-animation: wobble-hor-bottom 0.8s both;
  animation: wobble-hor-bottom 0.8s both;
}
/* Facebook */
.fa-facebook {
  background: #3b5998;
  color: white;
  width: 70px;
}
.fa-instagram {
  background: linear-gradient(#400080, transparent),
    linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
  color: white;
  width: 70px;
}
.fa-whatsapp {
  background: #3ac371;
  color: white;
  width: 70px;
}
</style>
