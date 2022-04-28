<template>
  <div>
    <div
      class="background"
      :style="{
        backgroundImage: 'url(' + require('/src/assets/home.webp') + ')',
      }"
    >
      <div class="navigation pt-5 pb-5">
        <div class="navigation-name">
          <p class="navigation-name-p text-white">KareshmaArt</p>
          <h1 class="navigation-name-header">Artiste peintre</h1>
        </div>
        <div class="wrap navigation-enter mt-5">
          <router-link
            class="button text-decoration-none navigation-enter"
            to="/Tableaux"
          >
            Bienvenue sur mon site
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "My Page Title",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: `J'aime peindre depuis mon enfance. C'est vers l'art que mon cœur se
        tourne. A l'aide d'un pinceau, le remplir de couleurs pour peindre une
        toile est une belle sensation de liberté. Il n'y a pas de
        limites.`,
      },
    ],
  },
};
</script>

<style scoped>
.navigation {
  position: relative;
  top: 30%;
  background-color: rgba(255, 255, 255, 0.5);
}
.navigation-name-p {
  font-family: blenny, sans-serif !important;
  font-weight: 900;
  font-style: normal;
  color: black !important;
  font-size: 3rem;
}
.navigation-name {
  font-family: new-order, sans-serif;
  font-weight: 900;
  font-style: normal;
}
.navigation-enter {
  cursor: pointer;
  font-family: new-order, sans-serif;
  font-weight: 900;
  font-style: normal;
  color: black !important;
}
.navigation-name-header {
  color: black;
  font-size: 3rem;
}
h2 {
  color: white;
}
.background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top: 0px;
  background-position: bottom;
}
.navigation-name__img {
  width: 60%;
}
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.button {
  background: transparent;
  border: 2px solid black;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  position: relative;
  padding: 10px;
}

.button:hover,
.button:focus {
  color: white !important;
  transform: translateY(-6px);
  background: black;
}
</style>
