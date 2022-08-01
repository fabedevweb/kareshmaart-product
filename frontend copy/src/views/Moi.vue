<template>
  <div>
    <div>
      <img
        class="container-tableauImg__img fade-in"
        src="../assets/moi.webp"
        style="width: 100%"
        alt=""
      />
    </div>
    <div
      class="your mx-auto container"
      style="background-color: rgba(0, 0, 0, 0.5)"
    >
      <div class="your-headText" style="padding: 8rem 0 8rem 0">
        <h1 class="your-header text-white">Mais alors qui suis-je ?</h1>
        <p class="your-para text-white">
          Hé bien je m'appelle Kareshma Noursai, et ...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.realisations {
  font-family: new-order, sans-serif;
  font-weight: 200;
  font-style: normal;
  background-color: #ff8a00;
}
body {
  background-color: #e3f2fd;
}
.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
.button:hover {
  background-color: #3e8e41;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.heading {
  font-size: 20px;
  font-weight: 600;
  color: #3d5afe;
}

.line1 {
  color: #000;
  font-size: 12px;
}

.line2 {
  color: #000;
  font-size: 12px;
}

.line3 {
  color: #000;
  font-size: 12px;
}

.cards {
  width: 120px;
  background-color: transparent !important;
}

.cards-inspiration {
  font-size: 20px;
}

/* CSS */
.button-52 {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-52:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.button-52:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .button-52 {
    padding: 13px 50px 13px;
  }
}

.cards:hover {
  box-shadow: none;
  transform: none;
}
</style>
