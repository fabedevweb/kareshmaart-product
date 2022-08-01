<template>
  <div id="app">
    <nav
      class="navbar pb-0 navbar-expand-lg navbar-light transparent"
      v-if="hideMenu()"
    >
      <div class="container-fluid flex-column w-100 mt-5">
        <div>
          <p class="navigation-name-p">KareshmaArt</p>
        </div>
        <div
          class="container-img-social d-flex justify-content-between mx-auto mb-5"
        >
          <a href="https://www.facebook.com/yashnajenna" target="_blank"
            ><i class="fa-brands fa-facebook-square me-2"></i
          ></a>
          <a
            href="https://www.instagram.com/kareshma_noursai_art/"
            target="_blank"
            ><i class="fa-brands fa-instagram-square ms-2 me-2"></i
          ></a>
          <a href="https://wa.me/23057184367" target="_blank"
            ><i class="fa-brands fa-whatsapp-square ms-2 me-2"></i
          ></a>
        </div>
      </div>
    </nav>
    <VueScrollFixedNavbar v-if="hideMenu()">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div
              class="navbar-nav d-flex justify-content-between mx-auto"
              style="background-color: rgba(0, 0, 0, 0.5)"
            >
              <router-link
                to="/"
                class="nav-link active mx-auto jello-horizontal"
                aria-current="page"
                href="#"
                ><i class="fa-solid fa-house"></i> ACCUEIL</router-link
              >
              <router-link
                to="/realisations"
                class="nav-link active mx-auto"
                aria-current="page"
                href="#"
              >
                <i class="fa-solid fa-palette"></i> TABLEAUX
              </router-link>
              <router-link
                to="/blog"
                class="nav-link active mx-auto"
                aria-current="page"
                href="#"
                ><i class="fa-solid fa-newspaper"></i> BLOG</router-link
              >
              <router-link
                to="/moi"
                class="nav-link active mx-auto"
                aria-current="page"
                href="#"
                ><i class="fa-solid fa-face-smile"></i> MOI</router-link
              >
              <router-link
                to="/contact"
                class="nav-link active mx-auto"
                aria-current="page"
                href="#"
                ><i class="fa-solid fa-address-card"></i> CONTACT</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </VueScrollFixedNavbar>
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
  methods: {
    hideMenu() {
      if (
        this.$route.path === "/Create" ||
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
  margin-top: 300px;
  text-shadow: 0 -4px 0 black, 0 3px 0 black;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
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
  border-bottom: 2px solid yellow;
  color: yellow !important;
  cursor: pointer;
  width: 200px;
}
/* ANIMATION ROUTER-LINK*/

.nav-link:hover,
.fa-brands:hover {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
  color: #f0e91a;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-3-20 10:0:52
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista YEP
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
.fa-brands {
  color: #f0e91a;
  cursor: pointer;
  font-size: 4rem;
}

.container-img-social_item:hover {
  -webkit-animation: wobble-hor-bottom 0.8s both;
  animation: wobble-hor-bottom 0.8s both;
}
</style>
