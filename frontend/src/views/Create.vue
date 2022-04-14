<template>
  <div id="create">
    <div class="Tableaux pt-5" v-if="adminConnected()">
      <h1 class="mb-5">ADMINISTRATION</h1>
      <button type="button" class="btn btn-light" @click="adminDisconnected()">
        Déconnection
      </button>
      <div class="container container-fontfamily mt-4 pb-5 d-flex">
        <div class="row mx-auto w-100">
          <div
            class="navbar-nav d-flex flex-wrap justify-content-between flex-row"
            style="background-color: rgba(255, 255, 255, 1)"
          >
            <router-link
              class="nav-link active mx-auto text-dark fs-4"
              aria-current="page"
              to="/NewCanvasMe"
              href="#"
              ><i class="fa-solid fa-house"></i> Nouveau tableau Me</router-link
            >
            <router-link
              class="nav-link active mx-auto text-dark fs-4"
              aria-current="page"
              to="/NewCanvasYour"
              href="#"
            >
              <i class="fa-solid fa-palette"></i> Nouveau tableau Your
            </router-link>
            <router-link
              class="nav-link active mx-auto text-dark fs-4"
              aria-current="page"
              to="SetCanvasMe"
              href="#SetCanvasMe"
              ><i class="fa-solid fa-newspaper"></i> Gérer tableau
              Me</router-link
            >
            <router-link
              class="nav-link active mx-auto text-dark fs-4"
              aria-current="page"
              to="SetCanvasYour"
              href="#SetCanvasYour"
              ><i class="fa-solid fa-face-smile"></i> Gérer tableau
              Your</router-link
            >
            <router-link
              class="nav-link active mx-auto text-dark fs-4"
              aria-current="page"
              to="NewArticle"
              href="#"
              ><i class="fa-solid fa-address-card"></i> Nouvelle
              news</router-link
            >
            <router-link
              class="nav-link active mx-auto text-dark fs-4"
              aria-current="page"
              to="SetMyBlog"
              href="#"
              ><i class="fa-solid fa-address-card"></i> Gérer les
              news</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    adminConnected: function () {
      if (localStorage.getItem("admin")) {
        return true;
      }
    },
    adminDisconnected: function () {
      localStorage.removeItem("admin");
      this.$router.push("/admin");
    },
  },
};
</script>

<style>
.Tableaux {
  font-family: new-order, sans-serif;
  font-weight: 200;
  font-style: normal;
  background-color: #ff8a00;
}
body {
  background-color: #e3f2fd;
}

.heading {
  font-size: 20px;
  font-weight: 600;
  color: #3d5afe;
}

.line1 {
  color: #000;
  font-size: 12px;
}

.line2 {
  color: #000;
  font-size: 12px;
}

.line3 {
  color: #000;
  font-size: 12px;
}

.cards {
  transition: all 0.2s ease;
  cursor: pointer;
}

.cards:hover {
  box-shadow: 5px 6px 6px 2px #e9ecef;
  transform: scale(1.1);
}
</style>
