<template>
  <div>
    <div
      class="card mb-3"
      :key="index"
      v-for="(picture, index) in pictures"
      style="max-width: 100%"
    >
      <div class="row g-0 my-4">
        <div class="col-md-4">
          <img
            :src="picture.picture"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-dark">{{ picture.name }}</h5>
          </div>
          <button class="btn btn-danger" @click="deleteCanvas(picture)">
            Supprimer
          </button>
          <button class="btn btn-primary">Modifier</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
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
    deleteCanvas(picture) {
      if (confirm("Es-tu sûr de vouloire supprimer ce tableau ?")) {
        alert("oui");
        axios
          .delete(`http://localhost:3306/api/me/${picture.id}}`)
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
      } else {
        this.$router.push("SetCanvasMe");
      }
    },
  },
};
</script>

<style>
.cards {
  background-color: white !important;
}
.img-fluid {
  width: 35% !important;
}
</style>
