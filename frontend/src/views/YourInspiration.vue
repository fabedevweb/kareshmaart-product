<template>
  <div>
    <div class="your mx-auto bg-dark" style="padding: 8rem 1rem 8rem 1rem">
      <h2 class="your-header text-white">Vos inspirations</h2>
      <p class="text-white fs-5 text-justify">
        Certaines personnes ont eu l'idée de me demander des tableaux sur
        mesure. Par exemple, utiliser le modèle de la Joconde, mais avec leur
        propre visage.
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
              >
              <br />
              <span class="container-picture__description h5">{{
                picture.description
              }}</span>
              <br />
              <span class="container-picture__price"
                >{{ picture.price }} MUR</span
              >
              <br />

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
      .get(`your`)
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
.test {
  width: 90%;
}
.your-header {
  font-family: new-order, sans-serif;
  font-weight: 700;
  font-style: normal;
}

/* STYLE */

body {
  background-color: #efefef;
}

.containerm {
  overflow: hidden;
}

.image {
  overflow: hidden;
  height: 300px;
  width: 300px;
  position: relative;
  cursor: pointer;
  margin: 0 15px;
  box-shadow: 0 0 25px 1px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  background-color: #555;
}
.image:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-200%, -50%);
  background-color: #deca1f;
  opacity: 0.8;
  border-radius: 50%;
  transition: 0.2s;
}

.image:hover:after {
  transform: translate(-50%, -50%);
}

.image:hover .container__img {
  transform: translate(-50%, -50%) scale(1.3) rotate(20deg);
}

.container__img {
  position: absolute;
  height: 150%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.8s;
}

.container-picture {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-2000px, -50%);
  color: #fff;
  transition: 0.2s;
  transition-timing-function: ease-in;
}

.image:hover .container-picture {
  transform: translate(-50%, -50%);
  transition-timing-function: ease;
}

/* CSS */
.button-78 {
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01, sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
}

@media (min-width: 768px) {
  .button-78 {
    padding: 19px 32px;
  }
}

.button-78:before,
.button-78:after {
  border-radius: 80px;
}

.button-78:before {
  background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-78:after {
  background-color: initial;
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-78:hover:not(:disabled):before {
  background: linear-gradient(
    92.83deg,
    rgb(255, 116, 38) 0%,
    rgb(249, 58, 19) 100%
  );
}

.button-78:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
  opacity: 0;
}

.button-78:active:not(:disabled) {
  color: #ccc;
}

.button-78:active:not(:disabled):before {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
}

.button-78:active:not(:disabled):after {
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-78:disabled {
  cursor: default;
  opacity: 0.24;
}

/* MODAL */

.slit-in-vertical {
  -webkit-animation: slit-in-vertical 0.45s ease-out both;
  animation: slit-in-vertical 0.45s ease-out both;
}

/* ----------------------------------------------
 * Generated by Animista on 2022-3-22 11:38:44
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slit-in-vertical
 * ----------------------------------------
 */
@-webkit-keyframes slit-in-vertical {
  0% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
    transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
    transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(0) rotateY(0);
    transform: translateZ(0) rotateY(0);
  }
}
@keyframes slit-in-vertical {
  0% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
    transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
    transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(0) rotateY(0);
    transform: translateZ(0) rotateY(0);
  }
}
</style>
