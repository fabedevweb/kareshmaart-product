<template>
  <div>
    <div class="bg-dark pt-3 pb-3 mb-3">
      <div class="container d-flex justify-content-between">
        <button @click="returnPage()" class="btn btn-primary text-white">
          Return
        </button>
        <h1 class="text-white mb-4">Nouveau tableau inspiré par eux</h1>
      </div>
    </div>
    <div class="newcanvas w-50 mx-auto">
      <div class="row">
        <div class="col">
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Canvas Name"
            aria-label="Name"
          />
        </div>
        <div class="col">
          <input
            v-model="price"
            type="text"
            class="form-control"
            placeholder="Canvas Price"
            aria-label="Price"
          />
        </div>
      </div>

      <div class="form-group w-100 mb-5 mt-5">
        <label for="exampleFormControlTextarea1"></label>
        <textarea
          v-model="description"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Canvas description"
        ></textarea>
      </div>
      <!-- IMAGE -->
      <div class="container newcanvas-image">
        <div class="row">
          <div class="col-md-5 mx-auto offset-md-1">
            <form>
              <div class="form-group pt-5">
                <label for="my-file"
                  ><strong>Sélectionne l'image de ton tableau</strong>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  @change="previewImage"
                  class="form-control-file mt-4 mb-4"
                  id="my-file"
                />
                <div class="border p-2 mt-3">
                  <p>Tableau sélectionné:</p>
                  <template v-if="preview">
                    <img :src="preview" class="img-fluid" />
                    <p class="mb-0">file name: {{ image.name }}</p>
                    <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
                  </template>
                </div>
              </div>
            </form>
          </div>
          <div class="w-100"></div>
          <div class="col-12 mt-5 text-center pb-5">
            <button class="btn btn-secondary" @click="reset">
              Changer d'image
            </button>
          </div>
        </div>
        <div class="col-12 mt-5 text-center pb-5">
          <button class="btn btn-secondary" @click="createPosts()">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//const axios = require("axios");
import axios from "../axios.js";
export default {
  data() {
    return {
      picture: [],
      pictures: "",
      name: "",
      preview: null,
      image: null,
      preview_list: [],
      price: null,
      description: null,
    };
  },

  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        this.selectFile = event.target.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },

    reset: function () {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },

    createPosts: function () {
      const fd = new FormData();
      fd.append("name", this.name);
      fd.append("price", this.price);
      fd.append("description", this.description);
      fd.append("image", this.selectFile, this.selectFile.name);
      axios.post(`your/`, fd).then((res) => {
        console.log(res, "Nouveau canvas envoyé");
        alert("Ta photo a bien été enregistré");
        let route = this.$router.resolve({ path: "/" });
        window.open(route.href);
      });
    },
    returnPage() {
      this.$router.push("/create");
    },
  },
};
</script>

<style scoped>
.test {
  width: 90%;
}
.your-header {
  font-family: new-order, sans-serif;
  font-weight: 700;
  font-style: normal;
}
.your-para {
  font-family: new-order, sans-serif;
  font-weight: 500;
  font-style: normal;
}
/* STYLE */

body {
  background-color: #efefef;
}

/* Création du boutton de chargement image */

.newcanvas {
  background-color: white;
  padding: 20px 10px 100px 10px;
}
.newcanvas-image {
  background-color: rgb(223, 223, 223);
}
</style>
