<template>
  <div>
    <div class="background-card">
      <h1 class="card__title text-white" v-if="mode == 'login'">Connexion</h1>
      <p class="text-white bg-danger">{{ emailError }}</p>
      <div class="card mt-5 mx-auto border-0">
        <div class="form-row">
          <input
            v-model="email"
            class="form-row__input"
            type="email"
            name="email"
            placeholder="Adresse mail"
            aria-label="Veuillez renseigner votre adresse mail"
          />
        </div>
        <div class="form-row">
          <input
            v-model="password"
            class="form-row__input"
            type="password"
            placeholder="Mot de passe"
            aria-label="Veuillez renseigner votre mot de passe"
          />
        </div>
        <div class="form-row d-grid gap-2 col-9 mx-auto">
          <button
            @click="login()"
            class="btn btn-success"
            type="button"
            v-if="mode == 'login'"
            aria-label="Cliquez ici pour vous connecter"
          >
            <span>Connexion</span>
          </button>
          <!-- <span v-if="status == 'loading'">Connexion en cours...</span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: function () {
    return {
      mode: "login",
      email: null,
      password: null,
      pseudoForm: "",
      emailForm: "",
      passwordForm: "",
      emailRegex: "",
      emailError: "",
    };
  },
  methods: {
    showLogin: function () {
      this.mode = "login";
    },
    login: function () {
      axios
        .post(`http://localhost:3306/api/auth/login`, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data, "Connecté");
          localStorage.setItem("admin", JSON.stringify(res.data));
          this.$router.push("/Create");
        })
        .catch(() => {
          this.emailError = "Email ou mot de passe incorrect";
        });
    },
    validEmail: function (email) {
      var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.background {
  font-family: new-order, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 2rem;
}
.background-card {
  padding-top: 200px;
}
.hello--img__icon {
  position: relative;
  width: 50%;
  margin-left: 25%;
  margin-top: 100px;
}

.card__action {
  text-decoration: none !important;
}
.card {
  max-width: 25%;
  min-width: 350px;
  margin-bottom: 100%;
  background-color: transparent;
}
.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}
.form-row__input {
  padding: 8px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: white;
  background-color: #ff8a00;
}
</style>
