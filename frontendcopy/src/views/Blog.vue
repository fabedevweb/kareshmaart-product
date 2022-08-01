<template>
  <div>
    <div id="Blog">
      <img
        class="container-tableauImg__img fade-in"
        src="../assets/blog.webp"
        style="width: 100%"
        alt=""
      />
    </div>
    <div
      class="your mx-auto"
      style="padding: 5rem 5rem; background-color: rgba(0, 0, 0, 0.5)"
    >
      <h1 class="your-header text-white">Blog KareshmaArt</h1>
      <p class="text-white fs-5">
        Retrouvez ici mes oeuvres, inspirées de tout ce que j'aime observer à
        l'île Maurice. Capter les instants de la vie, et les immortaliser sur
        une toile, voilà ce que je souhaite.
      </p>
    </div>

    <div
      class="my-4 container-bg mt-5"
      :key="index"
      v-for="(picture, index) in pictures"
    >
      <div class="card card-block mb-3 mx-auto bg-secondary">
        <img
          :src="picture.picture"
          class="card-img-top mx-auto"
          id="picture.picture"
          alt="..."
        />
        <div class="card-body mt-5">
          <h2 class="card-title text-white your-header">
            {{ picture.title }}
          </h2>
          <small class="text-white">{{
            moment(picture.createdPostAt).fromNow()
          }}</small>
          <p class="card-text text-white text-start fs-4">
            {{ picture.paragraphe1 }}
          </p>
          <p class="card-text text-white text-start fs-4">
            {{ picture.paragraphe2 }}
          </p>
          <p class="card-text">
            <small class="text-white">{{
              moment(picture.createdPostAt).fromNow()
            }}</small>
          </p>
        </div>
      </div>
    </div>
    <div id="scroll_to_top">
      <a href="#Blog"
        ><i
          class="fa-solid fa-circle-arrow-up"
          style="font-size: 5rem; color: yellow"
        ></i
      ></a>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
//Convertir format date pour les posts avec moment
const moment = require("moment");
require("moment/locale/fr.js");
export default {
  data() {
    return {
      picture: [],
      pictures: [],
    };
  },
  mounted: function () {
    axios
      .get(`http://localhost:3000/api/blog`)
      .then((res) => {
        this.pictures = res.data;
        console.log(this.pictures);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
  methods: {
    moment: moment,
  },
};
</script>

<style scoped>
.card-trailer {
  height: auto;
}
.container-bg {
  background-color: rgba(0, 0, 0, 0.5);
}
.card-block {
  width: 70%;
}
.card-text::first-letter {
  font-size: 200%;
  color: black;
  font-family: blenny, sans-serif !important;
}
p {
  text-align: justify !important;
}
.card-img-top {
  object-fit: contain;
}
</style>
