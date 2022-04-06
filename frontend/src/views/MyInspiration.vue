<template>
  <div>
    <div class="your mx-auto bg-dark" style="padding: 5rem 5rem">
      <h2 class="your-header text-white">Mes inspirations</h2>
      <p class="text-white fs-5">
        Retrouvez ici mes oeuvres, inspirées de tout ce que j'aime observer à
        l'île Maurice. Capter les instants de la vie, et les immortaliser sur
        une toile, voilà ce que je souhaite.
      </p>
    </div>
    <div class="container container-bg">
      <div class="row">
        <div class="d-flex flex-row flex-wrap my-5 justify-content-center">
          <div
            class="image my-4"
            :key="index"
            v-for="(picture, index) in pictures"
          >
            <img :src="picture.picture" class="container__img" alt="" />
            <p class="container-picture text-dark w-100">
              <span class="container-picture__name h4"
                >"{{ picture.name }}"</span
              ><br />
              <button
                class="button-78"
                role="button"
                @click="toggleModale(picture)"
              >
                Konn plis !
              </button>
            </p>
          </div>
        </div>
      </div>
      <modale
        v-bind:revele="revele"
        v-bind:imageCanvas="imageCanvas"
        v-bind:toggleModale="toggleModale"
        v-bind:nameCanvas="name"
        v-bind:priceCanvas="price"
        v-bind:descriptionCanvas="description"
        class="slit-in-vertical"
      ></modale>
    </div>
  </div>
</template>

<script>
import Modale from "./Modale.vue";
const axios = require("axios");
export default {
  components: { Modale },
  data() {
    return {
      picture: [],
      pictures: [],
      name: null,
      price: null,
      description: null,
      revele: false,
      imageCanvas: null,
    };
  },
  mounted: function () {
    axios
      .get(`/me`)
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
    nameP(picture) {
      console.log(picture.name);
    },
    toggleModale(picture) {
      this.revele = !this.revele;
      this.imageCanvas = picture.picture;
      this.name = picture.name;
      this.price = picture.price;
      this.description = picture.description;
      console.log(picture.picture);
    },
  },
};
</script>

<style>
.container-bg {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
