<template>
  <div>
    <div class="bg-dark pt-3 pb-3 mb-3">
      <div class="container d-flex justify-content-between">
        <button @click="returnPage()" class="btn btn-primary text-white">
          Return
        </button>
        <h1 class="text-white">Mon blog</h1>
      </div>
    </div>
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
      .get(`/blog`)
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
        axios
          .delete(`/blog/${picture.id}}`)
          .then((res) => {
            this.pictures = res.data;
            location.reload();
            this.$router.push("/SetMyBlog");
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } else {
        this.$router.push("SetMyBlog");
      }
    },
    returnPage() {
      this.$router.push("/create");
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
