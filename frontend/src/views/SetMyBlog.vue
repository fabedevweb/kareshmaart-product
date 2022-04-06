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
      imageCanvas: null,
    };
  },
  mounted: function () {
    axios
      .get(`http://localhost:3306/api/blog`)
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
    deleteCanvas(picture) {
      if (confirm("Es-tu sûr de vouloire supprimer ce tableau ?")) {
        axios
          .delete(`/blog/${picture.id}}`)
          .then((res) => {
            this.pictures = res.data;
            this.$router.push("Create");
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } else {
        this.$router.push("SetMyBlog");
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
