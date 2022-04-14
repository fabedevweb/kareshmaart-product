<template>
  <div id="menu">
    <nav class="navbar navbar-expand-lg navbar-light transparent">
      <div class="container-fluid">
        <button
          class="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-angle-double-down"></i>
        </button>
        <div class="collapse navbar-collapse mt-5" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex justify-content-between">
            <router-link
              to="/"
              class="nav-link active mx-auto"
              aria-current="page"
              href="#"
              >Home</router-link
            >
            <router-link
              to="/Tableaux"
              class="active mx-auto"
              aria-current="page"
              href="#"
            >
              Tableaux
            </router-link>
            <router-link
              to="/blog"
              class="nav-link active mx-auto"
              aria-current="page"
              href="#"
              >Blog</router-link
            >
            <router-link
              to="/moi"
              class="nav-link active mx-auto"
              aria-current="page"
              href="#"
              >Moi</router-link
            >
            <router-link
              to="/contact"
              class="nav-link active mx-auto"
              aria-current="page"
              href="#"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
