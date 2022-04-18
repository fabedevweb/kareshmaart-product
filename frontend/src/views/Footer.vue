<template>
  <div class="footer">
    <div class="container d-flex align-items-center h-100">
      <div
        class="container d-flex h-100 align-items-start justify-content-center flex-column"
      >
        <div
          class="container-mentions text-decoration-none text-white fs-6 mt-2"
          to="/cgu"
        >
          © 2022 KareshmaArt |
          <a
            href="mailto:fabrice.ilemauriceinside.fr"
            class="text-decoration-none text-white fs-6 mt-2 footer_hover"
            >Site réalisé par Fabrice Avrila |</a
          >
          <span>
            <router-link
              class="container-mentions text-decoration-none text-white fs-6 footer_hover"
              to="/mentions"
            >
              Mentions légales |
            </router-link></span
          ><span>
            <router-link
              class="container-mentions text-decoration-none text-white fs-6 footer_hover"
              to="/cgu"
            >
              Conditions générales d'utilisation
            </router-link></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  height: 100px;
  background-color: #844c98;
}
.footer_hover:hover {
  color: #deca1f !important;
}
</style>
