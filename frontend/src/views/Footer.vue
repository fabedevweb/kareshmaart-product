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
          © 2022 KareshmaArt | Site réalisé par Fabrice Avrila |
          <span>
            <router-link
              class="container-mentions text-decoration-none text-white fs-6"
              to="/mentions"
            >
              Mentions légales |
            </router-link></span
          ><span>
            <router-link
              class="container-mentions text-decoration-none text-white fs-6"
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
</style>
