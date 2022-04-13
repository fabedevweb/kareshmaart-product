<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" @click="toggleModale"></div>
    <div class="modale text-white bg-dark">
      <img class="modale-img mx-auto" :src="imageCanvas" alt="" />
      <div>
        <div
          class="d-flex w-50 mx-auto justify-content-around align-items-center"
        >
          <b-icon
            icon="x-circle-fill"
            font-scale="4"
            class="text-danger"
            @click="toggleModale"
            style="cursor: pointer"
          ></b-icon>
          <a
            class="fa-brands fa fa-whatsapp"
            :href="`https://wa.me/23058488574?text=KARESHMAART%0ABonjour,%0AJe suis intéressé par le tableau suivant%0ANom:${nameCanvas}%0APrix:${priceCanvas}MUR%0ADimensions:${descriptionCanvas}%0AVotre message :`"
            target="_blank"
          ></a>
        </div>
        <h4>Nom : {{ nameCanvas }}</h4>
        <h5>Prix : {{ priceCanvas }}MUR</h5>
        <p>Dimensions : {{ descriptionCanvas }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modale",
  props: [
    "revele",
    "toggleModale",
    "imageCanvas",
    "nameCanvas",
    "descriptionCanvas",
    "priceCanvas",
  ],
};
</script>

<style>
.modale {
  z-index: 3;
}
.bloc-modale {
  font-family: new-order, sans-serif;
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: -80px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.btn-modale,
a {
  cursor: pointer;
  color: rgb(0, 255, 34);
  font-size: 3rem;
}
.modale-img {
  width: 85%;
  max-width: 600px;
  height: 100% !important;
}
/*Réseaux sociaux*/
.fa {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 10px;
  border-radius: 50%;
}

.fa-whatsapp {
  background: #3ac371;
  color: white;
  width: 70px;
}
</style>
