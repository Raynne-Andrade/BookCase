<template>
  <h2>Perfil</h2>
  <form @submit="EditProfile" class="Form__profile">
    <label class="Form__profile--label"> Nome </label>
    <input placeholder="Nome" v-model="name" class="Form__profile--input" />
    <label class="Form__profile--label"> Usuario </label>
    <input
      placeholder="Usuario"
      v-model="user"
      class="Form__profile--input"
      readonly
    />
    <label class="Form__profile--label"> E-mail </label>
    <input
      placeholder="E-mail"
      v-model="email"
      class="Form__profile--input"
      readonly
    />
    <button type="submit" class="Form__profile--button">Salvar</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
      user: this.$store.state.user.user,
    };
  },

  onmounted() {
    axios.get();
  },
  methods: {
    EditProfile() {
      const body = {
        name: this.name,
        email: this.email,
        user: this.user,
      };
      axios
        .put(`http://localhost:3000/user/${this.$store.state.user.id}`, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.Form__profile {
  max-width: 600px;
  margin: auto;
}
.Form__profile--button {
  background: pink;
  border-radius: 10px;
  padding: 10px 70px;
  border: solid 1px rgb(212, 75, 98);
  margin: 10px 0px 20px 0px;
  color: #fff;
  font-weight: bolder;
  text-transform: uppercase;
}
.Form__profile--input {
  margin: 5px 0px;
  border-radius: 5px;
  border: solid 1px rgb(212, 75, 98);
  background: rgba(255, 192, 203, 0.281);
  padding: 10px;
  width: 100%;
  color: #747474;
}
.Form__profile--label {
  margin-top: 20px;
  text-align: left;
  font-family: sans-serif;
  color: #747474;
  display: flex;
  justify-content: left;
}
@media (max-width: 600px) {
  .Form__profile--input {
    max-width: 320px;
    width: 300px;
  }
  .Form__profile {
    max-width: 320px;
    margin: auto;
  }
}
</style>